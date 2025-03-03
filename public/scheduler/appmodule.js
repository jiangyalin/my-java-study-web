/* eslint-disable @typescript-eslint/no-unused-vars */
import { DateHelper, DragHelper, DomHelper, Toast, Tooltip, Combo, Scheduler, SchedulerEventModel, Grid, StringHelper, Store, Splitter, ResourceModel } from './sharedmy/browser/schedulerpromodule.js'
// import { postAction, getAction } from "../src/http/index.js";
import { postAction, getAction } from './lib/ajax.js'

// 头部查询条件
const queryInit = {
  WorkShopId: '', // 排产车间
  StartDate: '', // 排产日期开始
  EndDate: '', // 排产日期结束
  StartBeginDate: '', // 开工开始日期
  StartEndDate: '', // 开工结束日期
  apsId: ''// 排产id
}

// 是否能编辑排产单
let isEditAps = Boolean(true)

// 是否插单 前端 用于保存使用
let BInsertMy = Boolean(false)

const insertObj = {
  HandleWay: 0,
  BInsert: true,
  InsertReason: true
}

const nocompareplanlistPage = {
  count: 0,
  limit: 20,
  page: 1
}

// 初始化排产日期 默认 当天、当天+1
const now = new Date()
const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1)) // 获取当天日期 标准带时间 Wed Sep 13 2023 08:00:00 GMT+0800 (中国标准时间)
const tomorrow = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 2))

queryInit.StartDate = today
queryInit.EndDate = tomorrow

if (!window.Aps) window.Aps = {}

// 计划
const planListMap = {}
// 工序
const planOpMap = {}
// 任务（排期）
const taskMap = {}

// 初始化原数据格式
const dataPlan = {
  // 左侧排产计划数据（计划-工序）
  resourcesData: [
  ],
  // 中间 已排资源数据
  eventsData: [
  ],
  // 排产车间下拉数据
  wshoplist: [],
  // 右侧资源数据
  reslist: []
}

// 数据接口地址
const urlAll = {
  planlist: '/momaps/planlist', // 待排产计划列表
  workshoplist: '/momaps/workshoplist', // 排产车间列表
  reslist: '/momaps/reslist', // 待排资源列表
  save: '/momaps/save', // 排产保存
  docinfo: '/momaps/docinfo', // 已排产单明细
  autoaps: '/momaps/autoaps', // 自动排产
  apslistbyapsid: '/momaps/apslistbyapsid', // 根据排产id查排产单明细
  resinfo: '/momaps/resinfo',
  effectlist: '/momaps/effectlist',
  nocompareplanlist: '/momaps/nocompareplanlist'
}

// 不同资源的中间排产块颜色样式
const eventColors = {
  Ventilation: 'blue',
  Heating: 'orange',
  Roof: 'lime',
  Attic: 'lime',
  Basement: 'lime',
  Cistern: 'purple',
  Gas: 'red',
  device: 'rgb(22, 93, 255)',
  person: 'rgb(217, 26, 217)',
  BCloseColor: 'rgb(176,177,178)'// rgb(176,177,178)
}

// 时间格式化
const getDateFrom = (dateMy) => {
  if (dateMy) {
    const date = new Date(dateMy)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    const formattedDate = `${year}-${month}-${day}`
    return formattedDate
  } else {
    return ''
  }
}

// 查询待排计划参数
const palnParam = {
  palnIds: [],
  OpIds: []
}

// 初始化 调度器
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getInit = () => {
  if (window.initTaskPageFrequency !== 1) {
    const mainEl = document.querySelector('.main')
    mainEl.innerHTML = ''
    rendering()
    return false
  }

  class Doctor extends ResourceModel {
    static get fields () {
      return [
        'role',
        'roleIconCls'
      ]
    }
  }

  class Drag extends DragHelper {
    static configurable = {
      callOnFunctions: true,
      // Don't drag the actual row element, clone it
      cloneTarget: true,
      // We size the cloned element manually
      autoSizeClonedTarget: false,
      // Only allow drops on the schedule area
      // dropTargetSelector: '.b-timeline-subgrid',
      dropTargetSelector: '#main',
      // Only allow drag of row elements inside on the unplanned grid
      targetSelector: '.b-grid-row:not(.b-group-row)'
      // targetSelector: '.b-sch-event-wrap'
    }

    afterConstruct () {
      // Configure DragHelper with schedule's scrollManager to allow scrolling while dragging
      this.scrollManager = this.schedule.scrollManager
    }

    createProxy (element) {
      const
        proxy = document.createElement('div')
      const { schedule } = this
      const task = this.grid.getRecordFromElement(element)
      const durationInPx = schedule.timeAxisViewModel.getDistanceForDuration(task.durationMS)
      // Fake an event bar
      proxy.classList.add('b-sch-event-wrap', 'b-sch-event', 'b-unassigned-class', `b-sch-${schedule.mode}`)
      proxy.innerHTML = `<div class="b-sch-event b-has-content b-sch-event-withicon">
                    <div class="b-sch-event-content">
                        <i class="${task.iconCls}"></i> ${task.name}
                    </div>
                </div>`

      if (schedule.isHorizontal) {
        proxy.style.height = `${schedule.rowHeight - (2 * schedule.resourceMargin)}px`
        proxy.style.width = `${durationInPx}px`
      } else {
        proxy.style.height = `${durationInPx}px`
        proxy.style.width = `${schedule.resourceColumnWidth}px`
      }

      return proxy
    }

    onDragStart ({ context }) {
      const
        me = this
      const { schedule } = me
      const { eventTooltip, eventDrag } = schedule.features

      // save a reference to the task so we can access it later
      context.task = me.grid.getRecordFromElement(context.grabbed)
      // Prevent tooltips from showing while dragging
      eventTooltip.disabled = true

      schedule.enableScrollingCloseToEdges(schedule.timeAxisSubGrid)

      if (eventDrag.showTooltip && !me.tip) {
        me.tip = new Tooltip({
          align: 'b-t',
          clippedBy: [schedule.timeAxisSubGridElement, schedule.bodyContainer],
          forElement: context.element,
          cls: 'b-popup b-sch-event-tooltip'
        })
      }
    }

    onDrag (data) {
      const { event, context } = data
      const
        me = this
      const { schedule } = me
      const { task } = context
      const coordinate = DomHelper[`getTranslate${schedule.isHorizontal ? 'X' : 'Y'}`](context.element)
      const startDate = schedule.getDateFromCoordinate(coordinate, 'round', false)
      const endDate = startDate && DateHelper.add(startDate, task.duration, task.durationUnit)
      // Coordinates required when used in vertical mode, since it does not use actual columns
      const resource = context.target && schedule.resolveResourceRecord(context.target, [event.offsetX, event.offsetY])

      // Don't allow drops anywhere, only allow drops if the drop is on the timeaxis and on top of a Resource
      // context.valid = Boolean(startDate && resource) &&
      //   (schedule.allowOverlap || schedule.isDateRangeAvailable(startDate, endDate, null, resource));
      const resourceId = resource?.originalData?.id || ''

      let checkTime = false
      // if (!startDate) return
      if (startDate) {
        task.TimeRangeDtos.forEach(item => {
          if (new Date(item.Start).getTime() <= startDate.getTime() && new Date(item.End).getTime() >= endDate.getTime()) {
            checkTime = true
          }
        })
      }

      context.valid = Boolean(resourceId) && task.PlanOpIds.includes(resourceId) && checkTime && Boolean(startDate)

      // Save reference to resource so we can use it in onTaskDrop
      context.resource = resource
      // console.log('resource.originalData', resource.originalData.id)
      // console.log('appointments', appointments)
      // placementArea()

      if (me.tip && context.valid) {
        const
          dateFormat = schedule.displayDateFormat
        const formattedStartDate = DateHelper.format(startDate, dateFormat)
        const formattedEndDate = DateHelper.format(endDate, dateFormat)

        me.tip.html = `
                        <div class="b-sch-event-title">${task.name}</div>
                        <div class="b-sch-tooltip-startdate">Starts: ${formattedStartDate}</div>
                        <div class="b-sch-tooltip-enddate">Ends: ${formattedEndDate}</div>
                    `
        me.tip.showBy(context.element)
      } else {
        me.tip?.hide()
      }
    }

    /**/
    onDrop (data) {
      // 是否可修改
      if (!isEditAps) {
        return false
      }

      const { context } = data
      const
        me = this
      const { schedule } = me
      const { task, target, resource, valid, element } = context

      me.tip?.hide()

      schedule.disableScrollingCloseToEdges(me.schedule.timeAxisSubGrid)

      // If drop was done in a valid location, set the startDate and transfer the task to the Scheduler event store
      if (valid && target) {
        const
          coordinate = DomHelper[`getTranslate${schedule.isHorizontal ? 'X' : 'Y'}`](element)
        const date = schedule.getDateFromCoordinate(coordinate, 'round', false)
        // Try resolving event record from target element, to determine if drop was on another event
        const targetEventRecord = schedule.resolveEventRecord(target)
        setTimeout(() => {
          if (isEditAps) {
            // save()
            cdsave('onDrop')
          }
        }, 500)

        if (date) {
          // Remove from grid first so that the data change
          // below does not fire events into the grid.

          // 鼠标放下后删除store内的对应任务 标记
          // me.grid.store.remove(task)

          const key = window.Aps.taskEveIndex++
          taskMap[key] = taskMap[task.id]
          task.id = key
          task.startDate = date

          const obj = planOpMap[resource.id].CapacityDtos.find(item => item.ResId === taskMap[key].ResId || item.ResType === 2)
          if (obj) {
            const duration = planOpMap[resource.id].APSQty / obj.ResAging

            // 获取所在时间段
            const timePeriod = task.TimeRangeDtos.find(item => new Date(task.startDate).getTime() >= new Date(item.Start).getTime() && new Date(task.startDate).getTime() <= new Date(item.End).getTime())

            if (!timePeriod) return false

            const endDuration = (new Date(timePeriod.End).getTime() - new Date(date).getTime()) / 1000 / 60 / 60
            task.duration = duration > endDuration ? endDuration : duration
          }

          task.assign(resource)
          schedule.eventStore.add(task)
        }

        // Dropped on a scheduled event, display toast
        if (targetEventRecord) {
          Toast.show(`Dropped on ${targetEventRecord.name}`)
        }
      }

      if (resource) {
        resource.cls = ''
      }

      schedule.features.eventTooltip.disabled = false
    }

    set schedule (schedule) {
      this._schedule = schedule

      // Configure DragHelper with schedule's scrollManager to allow scrolling while dragging
      this.scrollManager = schedule.scrollManager
    }

    get schedule () {
      return this._schedule
    }

    onDragAbort () {
      this.tip?.hide()
    }
  }

  class IconCombo extends Combo {
    static type = 'iconcombo'

    static configurable = {
      items: [
        { value: 'b-fa b-fa-asterisk', text: 'Asterisk' },
        { value: 'b-fa b-fa-fw b-fa-beer', text: 'Beer' },
        { value: 'b-fa b-fa-fw b-fa-book', text: 'Book' },
        { value: 'b-fa b-fa-fw b-fa-bug', text: 'Bug' },
        { value: 'b-fa b-fa-building', text: 'Building' },
        { value: 'b-fa b-fa-coffee', text: 'Coffee' },
        { value: 'b-fa b-fa-fw b-fa-cog', text: 'Cog' },
        { value: 'b-fa b-fa-fw b-fa-dumbbell', text: 'Dumbbell' },
        { value: 'b-fa b-fa-laptop', text: 'Laptop' },
        { value: 'b-fa b-fa-fw b-fa-plane', text: 'Plane' },
        { value: 'b-fa b-fa-fw b-fa-phone', text: 'Phone' },
        { value: 'b-fa b-fa-fw b-fa-question', text: 'Question' },
        { value: 'b-fa b-fa-fw b-fa-life-ring', text: 'Ring' },
        { value: 'b-fa b-fa-sync', text: 'Sync' },
        { value: 'b-fa b-fa-user', text: 'User' },
        { value: 'b-fa b-fa-users', text: 'Users' },
        { value: 'b-fa b-fa-video', text: 'Video' }
      ],

      listItemTpl: item => `<i class="${item.value}" style="margin-right: .5em"></i>${item.text}`
    }

    syncInputFieldValue (...args) {
      this.icon.className = this.value
      super.syncInputFieldValue(...args)
    }

    get innerElements () {
      return [
        {
          reference: 'icon',
          tag: 'i',
          className: 'b-fa b-fa-cog',
          style: {
            marginLeft: '.8em',
            marginRight: '-.3em'
          }
        },
        ...super.innerElements
      ]
    }
  }
  // Register class to be able to create widget by type
  IconCombo.initClass()

  class Schedule extends Scheduler {
    /**
     * Original class name getter. See Widget.$name docs for the details.
     * @returns {string}
     */
    static $name = 'Schedule'
    // Factoryable type name
    static type = 'schedule'

    static configurable = {
      eventStyle: 'colored',
      subGridConfigs: {
        locked: {
          width: 400
        },
        normal: {
          flex: 1
        }
      },

      features: {
        tree: true,
        stripe: true,
        dependencies: false,
        resourceTimeRanges: true,
        columnLines: true,
        eventDragCreate: false, // 拖动创建
        group: 'type',

        eventDragSelect: true,
        // eventTooltip: {
        //     maxWidth: '28em',
        //     header: {
        //         titleAlign: 'start'
        //     },

        //     onBeforeShow({ source: tooltip }) {
        //         tooltip.title = StringHelper.encodeHtml(tooltip.eventRecord.name);
        //     },

        //     template: ({ eventRecord }) => {
        //         console.log(eventRecord);
        //         return `<div><p>[${eventRecord.data.code + ']-' + eventRecord.data.name}</p><div>${DateHelper.format(eventRecord.startDate, 'LT')} - ${DateHelper.format(eventRecord.endDate, 'LT')}</div></div>`
        //     }
        //     // You can also use Tooltip configs here, for example:
        //     // anchorToTarget : false,
        //     // trackMouse     : true
        // },
        eventDrag: {
          // Custom tooltip for when an event is dragged
          tooltipTemplate: ({ eventRecord, startDate }) => {
            return StringHelper.xss`<h4 style="margin:0 0 1em 0">Custom drag drop tooltip</h4>
                        <div style="margin-bottom:0.8em">${eventRecord.name}</div>
                        <i style="margin-right:0.5em" class="b-icon b-icon-clock"></i>${DateHelper.format(startDate, 'HH:mm')}
                    `
          }
        },

        eventMenu: {
          items: {
            // Edit a built in item
            editEvent: {
              text: '修改'
            },
            copyEvent: false,
            // copyEvent: {
            //     text: '复制'
            // },
            cutEvent: false,

            // cutEvent: {
            //     text: '剪切'
            // },

            deleteEvent: {
              text: '删除'
              // onItem() {
              //     console.log('ddd')
              // }
            }
          }
        },
        eventEdit: {
          editorConfig: {
            width: '32em',
            title: '查看',
            bbar: {
              items: {
                saveButton: null, // 保存
                deleteButton: null // 删除按钮
              }
            }
          },
          nameField: false,
          items: {
            nameField: {
              label: '资源',
              type: 'text',
              readOnly: true// 只读不可修改
            },
            saveButton: false,

            resourceField: {
              label: '工序',
              readOnly: true// 只读不可修改
            },
            startDateField: {
              readOnly: true// 只读不可修改
            },
            startTimeField: {
              readOnly: true// 只读不可修改
            },
            endDateField: {
              readOnly: true// 只读不可修改
            },
            endTimeField: {
              readOnly: true// 只读不可修改
            },

            ResAgingField: {
              weight: 1000, // Will sort below system-supplied fields which are weight 100 to 800
              type: 'text',
              name: 'ResAging',
              label: '资源产能',
              readOnly: true// 只读不可修改
            },
            ApsQtyField: {
              weight: 1000, // Will sort above system-supplied fields which are weight 100 to 800
              type: 'text',
              name: 'ApsQty',
              label: '排产数量',
              readOnly: true// 只读不可修改
            }
          }
        },
        scheduleMenu: {
          items: {
            addEvent: false
          }
        },
        eventTooltip: {
          maxWidth: '30em',
          // header: {
          //     titleAlign: 'start'
          // },

          onBeforeShow ({ source: tooltip }) {
            if (tooltip.eventRecord.BClose) {
              tooltip.title = StringHelper.encodeHtml(tooltip.eventRecord.name + '(已关闭)')
            } else {
              tooltip.title = StringHelper.encodeHtml(tooltip.eventRecord.name)
            }
          },

          template: ({ eventRecord }) => {
            return `<div><p>[${eventRecord.data.ResCode + ']-' + eventRecord.data.name}</p><div>${DateHelper.format(eventRecord.startDate, 'LT')} - ${DateHelper.format(eventRecord.endDate, 'LT')}</div></div>`
          }
          // You can also use Tooltip configs here, for example:
          // anchorToTarget : false,
          // trackMouse     : true 🎈
        }
      },

      createEventOnDblClick: false,
      rowHeight: 55,
      barMargin: 4,
      eventColor: 'indigo',
      tickSize: 40, // 中间甘特图 每格 宽度
      // allowOverlap : false,

      // View preset which configures the time axis header
      viewPreset: {
        base: 'hourAndDay', // weekAndDay hourAndDay
        headers: [
          {
            unit: 'day', // day
            dateFormat: 'YYYY.MM.DD',
            renderer: (start) => {
              const datetime = start.getFullYear() + '-' + (start.getMonth() + 1) + '-' + start.getDate() + ' '
              return datetime
            }
          },
          { unit: 'minute', increment: 30, dateFormat: 'HH:mm' }
        ]
        // timeResolution : {
        //     unit      : 'hour',
        //     increment : 1
        // },
      }, // dayAndWeek

      // Do not remove event when unassigning, we want to add it to grid instead
      removeUnassignedEvent: false,

      resourceImagePath: '../_shared/images/users/'
    }

    onDataChange () {
    }

    onEventDrop ({ eventRecords, targetResourceRecord }) {
      // 是否可修改
      if (!isEditAps) {
        return false
      }

      // When dropping on a parent row, assign to all cInvName members
      if (targetResourceRecord.isParent) {
        this.eventStore.assignEventToResource(eventRecords[0], targetResourceRecord.children, true)
      }

      setTimeout(() => {
        // 是否可修改
        if (isEditAps) {
          // console.log('onEventDrop', BInsertMy)
          cdsave('onEventDrop')
        }
      }, 500)
    }

    onEventResizeEnd () {
      // 是否可修改
      if (!isEditAps) {
        return false
      }

      setTimeout(() => {
        //     console.log('onEventResizeEnd', BInsertMy);

        // 是否可修改
        if (isEditAps) {
          cdsave('onEventResizeEnd')
          // save()
        }
      }, 500)
    }
  }

  Schedule.initClass()

  class Task extends SchedulerEventModel {
    static $name = 'Task'

    static get defaults () {
      return {
        // In this demo, default duration for tasks will be hours (instead of days)
        durationUnit: 'h',

        // Use a default name, for better look in the grid if unassigning a new event
        name: 'New event',

        // Use a default icon also
        iconCls: 'b-fa b-fa-asterisk'
      }
    }
  }

  class UnplannedGrid extends Grid {
    /**
     * Original class name getter. See Widget.$name docs for the details.
     * @returns {string}
     */
    static $name = 'UnplannedGrid'

    // Factoryable type name
    static type = 'unplannedgrid'

    static configurable = {
      features: {
        stripe: true,
        sort: 'name',
        cellEdit: false,
        cellMenu: false, // 右击功能区

        cellTooltip: {
          // tooltipRenderer: ({ record, column }) => ,
          hoverDelay: 200
        }

      },
      columns: [{
        text: '类型',
        field: 'typeName',
        htmlEncode: false,
        width: 70,
        align: 'center',
        filter: false,
        editor: false,
        renderer ({ record }) {
          let type = ''
          type = record.typeName === 1 ? '设备' : record.typeName === 2 ? '人工' : ''
          if (record.typeName === 2) {
            return `<span class="tag-purple">${type}</span>`
          } else {
            return `<span class="tag-blue">${type}</span>`
          }
        },
        cellMenuItems: false
      }, {
        // type  : 'duration',// 小时
        text: '资源',
        field: 'zy',
        flex: 1,
        align: 'center',
        htmlEncode: false,
        editor: false,
        renderer ({ record }) {
          // monitor(record.data)
          if (record.typeName === 2) {
            return `<div class="zydiv" title="点击图标查询资源详情"><i  class="b-icon b-fa-users coloref7a82" resid="${record.data.ResId}" restype="${record.data.typeName}"></i> <span class="colorrg">[${record.data.name}]-</span><span class="colorrg">${record.data.code}</span></div>`
          } else {
            return `<div class="zydiv zyrg" title="点击图标查询资源详情"><i  class="b-icon b-fa-chalkboard blue" resid="${record.data.ResId}" restype="${record.data.typeName}"></i> <span class="colorsb">[${record.data.name}]-</span><span class="colorsb">${record.data.code}</span></div>`
          }
        },
        tooltipRenderer: ({ record }) => new Promise(resolve => {
          resolve(record.data.name + '-' + record.data.code)
        }),
        cellMenuItems: false

      }]
      // tbar: [{
      //     icon: 'b-fa b-fa-angle-double-up',
      //     cls: 'b-transparent',
      //     tooltip: 'Collapse all groups',
      //     onAction: 'up.collapseAll'
      // }],
    }
  }

  UnplannedGrid.initClass()

  window.Aps.Schedule = Schedule
  window.Aps.Task = Task
  window.Aps.UnplannedGrid = UnplannedGrid
  window.Aps.Drag = Drag
  window.Aps.Doctor = Doctor

  rendering()
}

const cdsave = () => {
  if (BInsertMy) {
    const dto = []
    const assignmentsData = window.Aps.schedule.crudManager.inlineData.assignmentsData
    assignmentsData.forEach(item => {
      if (!dto.includes(item.resourceId)) dto.push(item.resourceId)
    })
    // console.log('dto', dto)

    const OpSaveDtos = dto.map(item => {
      // console.log('planOpMap', planOpMap)
      // console.log('item', item)
      return {
        PlanId: planOpMap[item].PlanId, // 计划ID
        OpId: planOpMap[item].OpId, // 工序ID
        ApsQty: planOpMap[item].APSQty || '', // 资源子表id
        ResDtos: assignmentsData.filter(node => node.resourceId === item).map(node => { // 排产资源集合
          return {
            ResType: taskMap[node.eventId].ResType, // 资源类型1 = DEVICE，设备;2 = ARTIFICIAL，人工
            ResId: taskMap[node.eventId].ResId, // 资源ID
            APSDId: taskMap[node.eventId].APSDId,
            StartTime: DateHelper.format(taskMap[node.eventId]._data.startDate, 'YYYY-MM-DD HH:mm:ss'), // 开始时间
            EndTime: DateHelper.format(taskMap[node.eventId]._data.endDate, 'YYYY-MM-DD HH:mm:ss') // 结束时间
          }
        })
      }
    })

    const obj = {
      PlanId: OpSaveDtos[0].PlanId,
      OpId: OpSaveDtos[0].OpId,
      ResType: OpSaveDtos[0].ResDtos[0].ResType,
      ResId: OpSaveDtos[0].ResDtos[0].ResId
    }
    const flag = getEffectlist(false, obj, 1)
    // return false3
    // eslint-disable-next-line no-empty
    if (!flag) {}

    return false
  } else {
    save()
    return false
  }
}

const getTime = () => {
  const node = dataPlan.wshoplist.find(item => item.id === queryInit.WorkShopId) || {}
  const StartTime = node?.StartTime || '00:00:00'
  const EndTime = node?.EndTime || '23:59:59'

  // const _startDate = new Date(`${now.getUTCFullYear()}-${now.getUTCMonth() + 1}-${now.getUTCDate()} ${StartTime}`)
  // const _endDate = new Date(`${now.getUTCFullYear()}-${now.getUTCMonth() + 1}-${now.getUTCDate() + 1} ${EndTime}`)

  queryInit.StartDate = queryInit.StartDate || today
  queryInit.EndDate = queryInit.EndDate || tomorrow
  const _startDate = new Date(`${DateHelper.format(queryInit.StartDate, 'YYYY-MM-DD')} ${StartTime}`)
  const _endDate = new Date(`${DateHelper.format(queryInit.EndDate, 'YYYY-MM-DD')} ${EndTime}`)
  return {
    startDate: _startDate == 'Invalid Date' ? queryInit.StartDate + ' ' + StartTime : _startDate,
    endDate: _endDate == 'Invalid Date' ? queryInit.EndDate + ' ' + EndTime : _endDate
    // endDate: _endDate || ''
  }
}

// 动态创建表格数据（排产单明细、资源明细）
const creatApsTb = (data, headerContent, tbBoxs) => {
  const tbBox = document.querySelector('.' + tbBoxs)

  // 用于容纳表格
  const container = document.createElement('div')
  // container.className = "apsTb"

  // 创建一个<table>元素，并将其添加到容器中
  const table = document.createElement('table')
  container.appendChild(table)
  container.className = 'apsTb' + tbBoxs

  // 创建表头<thead>元素，并将其添加到表格中。
  const thead = document.createElement('thead')
  table.appendChild(thead)
  table.style.float = 'left'

  // 创建表头的行<tr>元素，并将其添加到表头中
  const headerRow = document.createElement('tr')
  thead.appendChild(headerRow)

  headerContent.forEach(function (content) {
    const th = document.createElement('th')
    th.textContent = content.title
    th.style.minWidth = content.minWidth || '100px'
    headerRow.appendChild(th)
  })

  const tbody = document.createElement('tbody')
  table.appendChild(tbody)
  const qtykeyarr = ['IssueQty', 'ApsQty', 'ResAging', 'APSQty', 'ShiftQty']// 数量相关字段需要换字体颜色
  data.forEach(function (item) {
    const row = document.createElement('tr')
    if (item.BClose) {
      row.style.backgroundColor = '#ddd'
    } else {
      row.style.backgroundColor = 'none'
    }

    for (let i = 0; i < headerContent.length; i++) {
      const cell = document.createElement('td')
      const customKey = headerContent[i]// 字段名
      cell.style.textAlign = customKey.align
      cell.style.minWidth = customKey.minWidth || '100px'

      // ResType
      if (customKey.key === 'ResType') {
        const span = document.createElement('span')

        span.textContent = item[customKey.key]
        span.className = span.textContent === '人工' ? 'tag-purple' : 'tag-blue'
        cell.appendChild(span)
      } else if (customKey.key === 'ComRate') {
        const canvas = document.createElement('canvas')
        const id = item.PlanId + item.OpId
        canvas.setAttribute('id', 'progress-bar' + id)
        canvas.style.width = '80px'
        canvas.style.height = '40px'
        setTimeout(() => {
          createCircleProgressBar(Number(item[customKey.key]), id)
        }, 100)
        // span.textContent = item[customKey.key] + '%'

        cell.appendChild(canvas)
      } else if (qtykeyarr.findIndex(e => e === customKey.key) > -1) {
        // IssueQty ApsQty ResAging ApsQty ShiftQty
        cell.style.color = '#1E9FFF'
        cell.textContent = item[customKey?.key] || ''
      } else if (customKey.key === 'BClose') {
        const span = document.createElement('span')

        span.textContent = item[customKey.key] ? '是' : '否'
        span.className = !item[customKey.key] ? 'tag-purple' : 'tag-blue'
        cell.appendChild(span)
      } else if (customKey.key === 'DocStateDesc') {
        const span = document.createElement('span')
        span.textContent = item[customKey.key] // ? '是' : '否'
        span.className = !item[customKey.key] === '正常' ? 'tag-purple' : 'tag-blue'

        cell.appendChild(span)
      } else if (customKey.key === 'BShift') {
        const span = document.createElement('span')
        span.textContent = item[customKey.key] ? '是' : '否'
        span.className = !item[customKey.key] ? 'tag-purple' : 'tag-blue'
        cell.appendChild(span)
      } else if (customKey.key === 'BInsert') {
        const span = document.createElement('span')

        span.textContent = item[customKey.key] ? '是' : '否'
        span.className = !item[customKey.key] ? 'tag-purple' : 'tag-blue'
        cell.appendChild(span)
      } else {
        cell.textContent = item[customKey?.key] || ''
      }
      row.appendChild(cell)
    }

    tbody.appendChild(row)
  })

  const son = document.querySelector('.apsTb' + tbBoxs)

  if (son) {
    tbBox.removeChild(son)
  }
  tbBox.appendChild(container)
  tbBox.style.display = 'inline-block'

  // if (tbBoxs == 'apsInfluenceTb') {
  //     let BInsertYesId = document.querySelector('#BInsertYes')
  //     BInsertYesId.addEventListener('click', () => {
  //         console.log("点击确认影响插单");

  //         operate(false, idRootNode, record.originalData)
  //     })
  // }

  if (tbBoxs === 'nocompareplanlist') {
    const boxEl = document.querySelector('.nocompareplanlist')
    boxEl.style.display = 'inline-block'

    // alert(nocompareplanlistPage.page)
  }

  // return container
}

// 画进度条
const createCircleProgressBar = (percentage, id) => {
  const canvas = document.getElementById('progress-bar' + id)

  const context = canvas.getContext('2d')

  const x = canvas.width / 2
  const y = canvas.height / 2
  const radius = 50
  const startAngle = -0.5 * Math.PI
  const endAngle = (2 * percentage / 100 - 0.5) * Math.PI
  const counterClockwise = false

  // 清除画布
  context.clearRect(0, 0, canvas.width, canvas.height)

  // 绘制圆形灰色底部
  context.beginPath()
  context.arc(x, y, radius, 0, 2 * Math.PI, false)
  context.lineWidth = 20
  context.strokeStyle = '#ccc'
  context.stroke()

  // 绘制圆形进度条
  context.beginPath()
  context.arc(x, y, radius, startAngle, endAngle, counterClockwise)
  context.lineWidth = 20
  context.strokeStyle = '#16baaa' // 进度条颜色
  context.stroke()

  // 添加进度值
  const progressText = `${percentage}%`
  context.font = '42px suiyi'
  context.textAlign = 'center'
  context.fillStyle = '#666'
  context.fillText(progressText, x, y * 1.2)
}

// 根据排产id查排产单明细
const getApsListbyapsid = () => {
  const url = urlAll.apslistbyapsid + '?apsId=' + queryInit.apsId
  getAction(url).then((res) => {
    // res.data
    const data = res.data.map(e => {
      return {
        ApsCode: e.ApsCode || '',
        PlanCode: e.PlanCode || '',
        MoCode: e.MoCode || '',
        cInvCode: e.cInvCode || '',
        cInvName: e.cInvName || '',
        StartDate: e.StartDate || '',
        EndDate: e.EndDate || '',
        IssueQty: e.IssueQty || '0',
        OpSeq: e.OpSeq || '',
        OpCode: e.OpCode || '',
        OpName: e.OpName || '',
        ResType: e.ResType === 1 ? '设备' : '人工',
        ResCode: e.ResCode || '',
        ResName: e.ResName || '',
        ResAging: e.ResAging || '0',
        ApsQty: e.ApsQty || '0',
        ShiftQty: e.ShiftQty || '0',
        StartTime: e.StartTime || '',
        EndTime: e.EndTime || '',
        BClose: e.BClose || '',
        DRemark: e.DRemark || ''
      }
    })
    // let el = creatApsTb(data)

    const headerContent = [{
      title: '排产单号',
      key: 'ApsCode',
      align: 'left',
      minWidth: '100px'
    }, {
      title: '计划单号',
      key: 'PlanCode',
      align: 'left',
      minWidth: '100px'
    }, {
      title: '生产订单号',
      key: 'MoCode',
      align: 'left',
      minWidth: '100px'
    }, {
      title: '产品编码',
      key: 'cInvCode',
      align: 'left',
      minWidth: '100px'
    }, {
      title: '产品名称',
      key: 'cInvName',
      align: 'left',
      minWidth: '100px'
    }, {
      title: '开始日期',
      key: 'StartDate',
      align: 'center',
      minWidth: '100px'
    }, {
      title: '结束日期',
      key: 'EndDate',
      align: 'center',
      minWidth: '100px'
    }, {
      title: '计划数量',
      key: 'IssueQty',
      align: 'center',
      minWidth: '90px'
    }, {
      title: '工序行号',
      key: 'OpSeq',
      align: 'center',
      minWidth: '70px'
    }, {
      title: '工序编码',
      key: 'OpCode',
      align: 'center',
      minWidth: '90px'

    }, {
      title: '工序名称',
      key: 'OpName',
      align: 'center',
      minWidth: '100px'
    }, {
      title: '资源类型',
      key: 'ResType',
      align: 'center',
      minWidth: '100px'
    }, {
      title: '资源编码',
      key: 'ResCode',
      align: 'center',
      minWidth: '100px'
    }, {
      title: '资源名称',
      key: 'ResName',
      align: 'center',
      minWidth: '100px'
    }, {
      title: '资源产能',
      key: 'ResAging',
      align: 'center',
      minWidth: '90px'
    }, {
      title: '排产数量',
      key: 'ApsQty',
      align: 'center',
      minWidth: '90px'
    }, {
      title: '派工数量',
      key: 'ShiftQty',
      align: 'center',
      minWidth: '90px'
    }, {
      title: '开始时间',
      key: 'StartTime',
      align: 'left',
      minWidth: '100px'
    }, {
      title: '结束时间',
      key: 'EndTime',
      align: 'left',
      minWidth: '100px'
    }, {
      title: '关闭',
      key: 'BClose',
      align: 'center',
      minWidth: '90px'
    }, {
      title: '备注',
      key: 'DRemark',
      align: 'left',
      minWidth: '90px'
    }]
    creatApsTb(data, headerContent, 'tbBox')
    // window.loadingmy.drawer({
    //     title: "排产信息列表",
    //     offset: 'b',
    //     anim: 'slideUp', // 从下往上
    //     area: ['100%', '30%'],
    //     shade: 0.1,
    //     shadeClose: true,
    //     maxmin: true,
    //     isHtmlFragment: true,
    //     content: el.innerHTML
    // });
  })
}

// 查询插单时 影响的单据
const getEffectlist = (idRootNode, record, QueryType) => {
  let flag = null
  const apsInfluenceBox = document.querySelector('.apsInfluenceBox')
  const param = {
    ApsId: queryInit.apsId,
    PlanId: record.PlanId,
    OpId: idRootNode ? null : record.OpId, // 工序ID
    QueryType,
    // // ResType :
    // ResId: "",
    StartTime: DateHelper.format(queryInit.StartDate, 'YYYY-MM-DD') || queryInit.StartDate,
    EndTime: DateHelper.format(queryInit.EndDate, 'YYYY-MM-DD') || queryInit.EndDate,
    ResType: record.ResType || '',
    ResId: record.ResId || ''
  }
  postAction(urlAll.effectlist, param, EffectlistEmpy).then((res) => {
    // res.data
    if (res.code !== 0) {
      operate(false, idRootNode, record)
      flag = false
    } else {
      apsInfluenceBox.style.display = 'inline-block'
      const data = res.data.map(e => {
        return {
          ApsCode: e.ApsCode || '',
          PlanCode: e.PlanCode || '',
          MoCode: e.MoCode || '',
          cInvCode: e.cInvCode || '',
          cInvName: e.cInvName || '',
          StartDate: e.StartDate || '',
          EndDate: e.EndDate || '',
          IssueQty: e.IssueQty || '0',
          OpSeq: e.OpSeq || '',
          OpCode: e.OpCode || '',
          OpName: e.OpName || '',
          ResType: e.ResType === 1 ? '设备' : '人工',
          ResCode: e.ResCode || '',
          ResName: e.ResName || '',
          ResAging: e.ResAging || '0',
          ApsQty: e.ApsQty || '0',
          ShiftQty: e.ShiftQty || '0',
          StartTime: e.StartTime || '',
          EndTime: e.EndTime || '',
          BClose: e.BClose || '',
          DRemark: e.DRemark || '',
          InsertHandleWay: e.InsertHandleWay === 1 ? '顺延' : e.InsertHandleWay === 0 ? '关闭' : '',
          CreatedUserName: e.CreatedUserName || '',
          CreatedTime: e.CreatedTime || '',
          InsertReason: e.InsertReason || '',
          DocStateDesc: e.DocStateDesc || ''
        }
      })

      const headerContent = [{
        title: '排产单号',
        key: 'ApsCode',
        align: 'left',
        minWidth: '100px'
      },
      {
        title: '计划单号',
        key: 'PlanCode',
        align: 'left',
        minWidth: '100px'
      },
      {
        title: '生产订单号',
        key: 'MoCode',
        align: 'left',
        minWidth: '100px'
      },
      {
        title: '产品编码',
        key: 'cInvCode',
        align: 'left',
        minWidth: '100px'
      },
      {
        title: '产品名称',
        key: 'cInvName',
        align: 'left',
        minWidth: '100px'
      },
      {
        title: '计划数量',
        key: 'IssueQty',
        align: 'center',
        minWidth: '90px'
      },
      {
        title: '工序行号',
        key: 'OpSeq',
        align: 'center',
        minWidth: '70px'
      },
      {
        title: '工序编码',
        key: 'OpCode',
        align: 'center',
        minWidth: '90px'

      },
      {
        title: '工序名称',
        key: 'OpName',
        align: 'center',
        minWidth: '100px'
      },
      {
        title: '资源类型',
        key: 'ResType',
        align: 'center',
        minWidth: '100px'
      },
      {
        title: '资源编码',
        key: 'ResCode',
        align: 'center',
        minWidth: '100px'
      },
      {
        title: '资源名称',
        key: 'ResName',
        align: 'center',
        minWidth: '100px'
      },
      {
        title: '资源产能',
        key: 'ResAging',
        align: 'center',
        minWidth: '90px'
      },
      {
        title: '排产数量',
        key: 'ApsQty',
        align: 'center',
        minWidth: '90px'
      },
      {
        title: '派工数量',
        key: 'ShiftQty',
        align: 'center',
        minWidth: '90px'
      },
      {
        title: '开始时间',
        key: 'StartTime',
        align: 'left',
        minWidth: '100px'
      },
      {
        title: '结束时间',
        key: 'EndTime',
        align: 'left',
        minWidth: '100px'
      },
      {
        title: '关闭',
        key: 'BClose',
        align: 'center',
        minWidth: '90px'
      },
      {
        title: '单据状态',
        key: 'DocStateDesc',
        align: 'center',
        minWidth: '70px'
      },
      {
        title: '派工',
        key: 'BShift',
        align: 'center',
        minWidth: '70px'
      },
      {
        title: '插单',
        key: 'BInsert',
        align: 'center',
        minWidth: '70px'
      },
      {
        title: '插单方式',
        key: 'InsertHandleWay',
        align: 'center',
        minWidth: '90px'
      },
      {
        title: '插单原因',
        key: 'InsertReason',
        align: 'left',
        minWidth: '100px'
      },
      {
        title: '备注',
        key: 'DRemark',
        align: 'left',
        minWidth: '90px'
      },
      {
        title: '排产人',
        key: 'CreatedUserName',
        align: 'left',
        minWidth: '100px'
      },
      {
        title: '排产时间',
        key: 'CreatedTime',
        align: 'left',
        minWidth: '100px'
      }]
      creatApsTb(data, headerContent, 'apsInfluenceTb')
      flag = false
    }
    // return flag
    //
  })

  const BInsertYesId = document.querySelector('#BInsertYes')
  const BInsertClose = document.querySelector('#BInsertClose')
  BInsertYesId.addEventListener('click', clickBInsertYesId, false)
  BInsertClose.addEventListener('click', clickBInsertClose, false)

  function clickBInsertYesId () {
    // console.log('点击确认影响插单')

    if (QueryType === 1) {
      save()
    } else {
      operate(false, idRootNode, record)
    }
    const apsInfluenceBox = document.querySelector('.apsInfluenceBox')
    apsInfluenceBox.style.display = 'none'
    BInsertYesId.removeEventListener('click', clickBInsertYesId, false)
  }

  function clickBInsertClose () {
    const apsInfluenceBox = document.querySelector('.apsInfluenceBox')
    apsInfluenceBox.style.display = 'none'
    getDocinfo(true, true, queryInit.apsId)
    BInsertClose.removeEventListener('click', clickBInsertClose, false)
  }

  // console.log(flag)

  return flag
}
const EffectlistEmpy = () => {
  // console.log(data);
  // 插单影响没数据时 不弹出提示
}

// 头部查询条件渲染
let tbarArr = [
  // '排产',
  // '->',
  // {
  //     type: 'button',
  //     text: 'Unassign all events',
  //     onClick() {
  //         schedule.assignmentStore.removeAll();
  //     }
  // }
  {
    type: 'combo',
    ref: 'resource',
    label: '排产车间',
    displayField: 'text',
    valueField: 'id',
    editable: false,
    items: dataPlan.wshoplist,
    emptyText: '请选择',
    value: queryInit.WorkShopId,
    onChange: ({ value }) => {
      queryInit.WorkShopId = value
      getDocinfo()
    }
  },
  {
    type: 'datefield',
    ref: 'dateField',
    width: 200,
    editable: false,
    step: 1,
    label: '计划开工日期',
    emptyText: '开始日期',
    format: 'YYYY-MM-DD',
    onChange: ({ value }) => {
      queryInit.StartBeginDate = value
      // queryInit.EndDate = value
    }
  },
  {
    type: 'datefield',
    ref: 'dateField',
    width: 145,
    editable: false,
    step: 1,
    format: 'YYYY-MM-DD',
    onChange: ({ value }) => {
      queryInit.StartEndDate = value
      // queryInit.EndDate = value
    }
  },
  {
    type: 'datefield',
    ref: 'dateField',
    width: 220,
    editable: false,
    step: 1,
    label: '排产日期',
    format: 'YYYY-MM-DD',
    value: queryInit.StartDate,
    min: new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1)
    ),
    onChange: ({ value }) => {
      queryInit.StartDate = value
    }
  },
  {
    type: 'datefield',
    ref: 'dateField',
    width: 150,
    editable: false,
    step: 1,
    format: 'YYYY-MM-DD',
    value: queryInit.EndDate,
    min: new Date(queryInit.StartDate),
    onChange: ({ value }) => {
      queryInit.EndDate = value
    }
  },
  {
    type: 'viewpresetcombo',
    width: 60,
    step: 1,
    pickerWidth: 60,
    placeholder: '视图'
  },
  { text: '查询', icon: 'b-fa b-fa-search', onClick: 'up.onSearch' },
  '->',
  { text: '保存', icon: 'b-fa b-fa-save', onClick: 'up.onSave' },
  { text: '详情', icon: 'b-fa b-fa-info', onClick: 'up.onInfo' },
  { text: '插单', icon: 'b-fa b-fa-laptop-code', onClick: 'up.onBInsert' }
  // {
  //     icon       : 'b-fa b-fa-columns',
  //     tooltip    : 'Toggle layout',
  //     cls        : 'b-transparent',
  //     toggleable : true,
  //     onAction   : 'up.onLayoutToggle',
  //     style      : 'margin-left: auto'
  // }
]

const tbarArrCopy = [
  // '排产',
  // '->',
  // {
  //     type: 'button',
  //     text: 'Unassign all events',
  //     onClick() {
  //         schedule.assignmentStore.removeAll();
  //     }
  // }
  {
    type: 'combo',
    ref: 'resource',
    label: '排产车间',
    displayField: 'text',
    valueField: 'id',
    editable: false,
    items: dataPlan.wshoplist,
    emptyText: '请选择',
    value: queryInit.WorkShopId,
    onChange: ({ value }) => {
      queryInit.WorkShopId = value
      // getDocinfo(true, 'no')// 第二个参数可控制在跳转时查询info不重新赋值车间id，导致的查不到可排数据
      getDocinfo(true)
    }
  },
  {
    type: 'datefield',
    ref: 'dateField',
    width: 235,
    editable: false,
    step: 1,
    label: '计划开工日期',
    emptyText: '开始日期',
    format: 'YYYY-MM-DD',
    onChange: ({ value }) => {
      queryInit.StartBeginDate = value
      // queryInit.EndDate = value
    }
  },
  {
    type: 'datefield',
    ref: 'dateField',
    width: 145,
    editable: false,
    step: 1,
    format: 'YYYY-MM-DD',
    onChange: ({ value }) => {
      queryInit.StartEndDate = value
      // queryInit.EndDate = value
    }
  },
  {
    type: 'datefield',
    ref: 'dateField',
    width: 220,
    editable: false,
    step: 1,
    label: '排产日期',
    format: 'YYYY-MM-DD',
    value: queryInit.StartDate,
    min: new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1)
    ),
    onChange: ({ value }) => {
      queryInit.StartDate = value
    }
  },
  {
    type: 'datefield',
    ref: 'dateField',
    width: 150,
    editable: false,
    step: 1,
    format: 'YYYY-MM-DD',
    value: queryInit.EndDate,
    min: new Date(queryInit.StartDate),
    onChange: ({ value }) => {
      queryInit.EndDate = value
    }
  },
  {
    type: 'viewpresetcombo',
    width: 60,
    step: 1,
    pickerWidth: 60,
    placeholder: '视图'
  },
  { text: '查询', icon: 'b-fa b-fa-search', onClick: 'up.onSearch' },
  '->',
  { text: '保存', icon: 'b-fa b-fa-save', onClick: 'up.onSave' },
  { text: '详情', icon: 'b-fa b-fa-info', onClick: 'up.onInfo' },
  { text: '插单', icon: 'b-fa b-fa-laptop-code', onClick: 'up.onBInsert' }

  // {
  //     icon       : 'b-fa b-fa-columns',
  //     tooltip    : 'Toggle layout',
  //     cls        : 'b-transparent',
  //     toggleable : true,
  //     onAction   : 'up.onLayoutToggle',
  //     style      : 'margin-left: auto'
  // }
]

const operate = (BCover, idRootNode, record) => {
  // DateHelper.format(queryInit.StartDate, 'YYYY-MM-DD') 从列表跳转过来的无法转 所以直接传获取到的 queryInit.StartDate
  // const operateLo = window.loadingmy.service({
  //   lock: true,
  //   text: '加载中..',
  //   background: 'rgba(0, 0, 0, 0.3)'
  // })
  postAction(urlAll.autoaps, {
    PlanId: record.PlanId, // 计划ID
    OpId: idRootNode ? null : record.OpId, // 工序ID
    APSQty: record.num, // 排产数量
    BCover: BCover || true, // 是否强制覆盖(已有排产信息的需要提示确认，确认后传true，默认false)
    WorkShopId: queryInit.WorkShopId, // 排产车间ID
    StartDate: DateHelper.format(queryInit.StartDate, 'YYYY-MM-DD') || queryInit.StartDate, // 排产日期开始
    EndDate: DateHelper.format(queryInit.EndDate, 'YYYY-MM-DD') || queryInit.EndDate, // 排产日期结束
    BInsert: BInsertMy || false,
    ApsId: queryInit.apsId, // 排产单ID
    InsertReason: BInsertMy ? insertObj.InsertReason : ''
  }).then((data) => {
    // operateLo.close()
    if (data.code === 206) {
      isExistenceTasks = Boolean(true)

      // if (!record.originalData.children) {
      //     console.log(record.originalData.children);
      //     isExistenceTasks = Boolean(true)
      // }else{
      //     isExistenceTasks = Boolean(true)
      // }
      if (isExistenceTasks) {
        // window.loadingmy.confirm('保存后转成正式单据可流向派工', {
        //   title: '温馨提示',
        //   btn: [{
        //     text: '确定',
        //     callback: (id) => {
        //       // console.log(id)
        //       // window.loadingmy.close(id)
        //       save(id, false, DocState)
        //     }
        //   }]
        // })
        window.openDialog('保存后转成正式单据可流向派工', () => {
          save('', false, DocState)
        }, 'save')
      }
    }

    if (data.code !== 0) return false
    getDocinfo(false, true, data.data.APSId)
  })
}

// 左侧订单列
const columnsLeft = [
  {
    type: 'tree',
    field: 'name',
    text: '排产计划',
    flex: 1,
    editor: false,
    width: 300,
    htmlEncode: false,
    renderer ({ record }) {
      if (!record.isSpecialRow) {
        if (record.children) {
          let classMy = 'order-ul'
          if (record.data.isNo) {
            classMy = 'order-ul order-ulNo'
          }
          return `<ul class="${classMy}" title="单号：${record.data.name + '(' + record.data.DisDate + ') ' + '存货：' + record.data.cInvCode + '-' + record.data.cInvName}"><li><span class="one"><i class="b-icon b-fa-file blue"></i>${record.data.name}</span><span class="one"> <i class="b-icon b-icon-calendar purple"></i>${record.data.DisDate}</span> </li><li><i class="b-icon b-fa-box green"></i><span class="color177cb0">${record.data.cInvCode}</span> / <span class="color003472">${record.data.cInvName}</ul>`
        } else {
          // return `<ul class="order-ul"><li>${'工序行号:' + record.data.OpSeq}</li><li>${'工序编码:' + record.data.code}</li><li>${'工序名称:' + record.data.name}</li></ul>`
          return {
            className: 'employee',
            children: [
              {
                className: 'OpSeq',
                text: '[' + record.OpSeq + ']-' + record.code
              },
              {
                className: 'name',
                text: record.name
              }
              // {
              //     className: 'cInvName',
              //     text: '产品名称：' + record.cInvName
              // },
            ]
          }
        }
      }
    },
    enableCellContextMenu: false
  },
  {
    text: '数量',
    type: 'number',
    field: 'num',
    width: 70,
    htmlEncode: false,
    renderer: ({ record }) => {
      // console.log();
      let className = record.children ? 'num-gren' : 'num-blue'
      if (record.data.isNo) {
        className = 'num-No'
      }

      return `<span  title="已完工量：${record.data.ComQty}" class="${className}">${record.num}<span>`
    },
    editor: false,
    align: 'center',
    enableCellContextMenu: false
    // sortable: (a, b) => a.events.length < b.events.length ? -1 : 1
  },
  {
    type: 'action',
    text: '自动排产',
    width: 70,
    align: 'center',
    actions: [{
      cls: 'b-fa b-fa-plus',
      renderer: ({ record }) => {
        let num = 0
        if (record.data.children) {
          record.data.children.forEach(e => {
            num += e.num
          })
        } else {
          num = record.num
        }
        let htmlAutoAps = '<span class="b-action-item autoAPS" type="button">排产</span>'
        if (!isEditAps) {
          htmlAutoAps = '<span class="b-action-item autoAPSDis" type="button">排产</span>'
        } else {
          htmlAutoAps = '<span class="b-action-item autoAPS" type="button">排产</span>'
        }

        if (!record.num) return ''
        if (!num) return ''
        return htmlAutoAps
      },
      onClick: ({ record }) => {
        if (!isEditAps) {
          return false
        }
        const idRootNode = record.originalData.children // !id
        console.log(BInsertMy)
        if (BInsertMy) {
          // 是插单需要弹出提示框 是否确定影响其他单据
          // let flag = getEffectlist(idRootNode, record.originalData, 0);
          getEffectlist(idRootNode, record.originalData, 0)
          // console.log(flag);
          // if (!flag) {
          //   operate(false, idRootNode, record.originalData)
          // }
          return false
        } else {
          operate(false, idRootNode, record.originalData)
        }

        // 如果是父级，不需要判断是否当前父级下是否有任务，任务在子级里
        // if (!record.originalData.children) {
        //     isExistenceTasks = Boolean(assignmentsData.filter(item => item.resourceId === record.originalData.id).length)
        // } else {
        //     console.log(111);
        //     operate()
        // }

        // if (!isExistenceTasks) {
        //     if (!record.originalData.children) {
        //         operate()
        //         return false
        //     }
        // }
      }
    }],
    enableCellContextMenu: false

  }
]
// 渲染
const rendering = () => {
  // console.log('rendering')
  // main
  // setTimeout(() => {
  // if (queryInit.apsId == '') {
  //     if (tbarArr.length == 9) {
  //         let idx = tbarArr.findIndex(e => e.text == '详情')
  //         if (idx > -1) {
  //             tbarArr = tbarArr.splice(0, idx)
  //         }
  //     }
  // }

  window.Aps.schedule = new window.Aps.Schedule({
    ref: 'schedule',
    // ref: 'top-scheduler',
    // appendTo: 'container',
    insertFirst: 'main',
    multiEventSelect: true,
    startDate: getTime().startDate, // new Date(2023, 9, 13),
    endDate: getTime().endDate, // new Date(2023, 9, 13),
    // endDate: today, //new Date(2023, 9, 13),
    // startDate: '2020-03-23 00:00:00',
    // endDate: '2020-03-24',
    // autoHeight : true,
    // flex: 4,
    // flex: '1 1 500px',

    crudManager: {
      autoLoad: true,
      validateResponse: true
    },
    // features: {
    //     stripe: true,
    //     dependencies: false,
    //     resourceTimeRanges: true,
    //     columnLines: true,
    //     eventDragCreate: false,// 拖动创建

    //     // dependencies: true,
    //     // dependencyEdit: true,

    //     eventMenu: {
    //         items: {
    //             // Edit a built in item
    //             editEvent: {
    //                 text: '修改'
    //             },
    //             copyEvent: false,
    //             // copyEvent: {
    //             //     text: '复制'
    //             // },
    //             cutEvent: false,

    //             // cutEvent: {
    //             //     text: '剪切'
    //             // },

    //             deleteEvent: {
    //                 text: '删除',
    //                 // onItem() {
    //                 //     console.log('ddd')
    //                 // }
    //             },
    //         },
    //     },
    //     eventEdit: {
    //         editorConfig: {
    //             width: '32em',
    //             title: '查看',
    //             bbar: {
    //                 items: {
    //                     saveButton: null,// 保存
    //                     deleteButton: null // 删除按钮
    //                 }
    //             }
    //         },
    //         nameField: false,
    //         items: {
    //             nameField: {
    //                 label: '资源',
    //                 type: 'text',
    //                 readOnly: true// 只读不可修改
    //             },
    //             saveButton: false,

    //             resourceField: {
    //                 label: '工序',
    //                 readOnly: true// 只读不可修改
    //             },
    //             startDateField: {
    //                 readOnly: true// 只读不可修改
    //             },
    //             startTimeField: {
    //                 readOnly: true// 只读不可修改
    //             },
    //             endDateField: {
    //                 readOnly: true// 只读不可修改
    //             },
    //             endTimeField: {
    //                 readOnly: true// 只读不可修改
    //             },

    //             ResAgingField: {
    //                 weight: 1000, // Will sort below system-supplied fields which are weight 100 to 800
    //                 type: 'text',
    //                 name: 'ResAging',
    //                 label: '资源产能',
    //                 readOnly: true// 只读不可修改
    //             },
    //             ApsQtyField: {
    //                 weight: 1000, // Will sort above system-supplied fields which are weight 100 to 800
    //                 type: 'text',
    //                 name: 'ApsQty',
    //                 label: '排产数量',
    //                 readOnly: true// 只读不可修改
    //             },
    //         }
    //     },
    //     scheduleMenu: {
    //         items: {
    //             addEvent: false
    //         }
    //     },
    //     // resourceMenu: {
    //     //     items: {
    //     //         extraItem: {
    //     //             text: 'My cell item',
    //     //             icon: 'fa fa-bus',
    //     //             weight: 200,
    //     //         },
    //     //         remove: {
    //     //             text: 'Remove',
    //     //             icon: 'b-fa b-fa-dumpster'
    //     //         }
    //     //     }
    //     // }
    //     eventTooltip: {
    //         maxWidth: '30em',
    //         // header: {
    //         //     titleAlign: 'start'
    //         // },

    //         onBeforeShow({ source: tooltip }) {
    //             if (tooltip.eventRecord.BClose) {
    //                 tooltip.title = StringHelper.encodeHtml(tooltip.eventRecord.name + '(已关闭)');
    //             } else {
    //                 tooltip.title = StringHelper.encodeHtml(tooltip.eventRecord.name);
    //             }
    //         },

    //         template: ({ eventRecord }) => {
    //             return `<div><p>[${eventRecord.data.ResCode + ']-' + eventRecord.data.name}</p><div>${DateHelper.format(eventRecord.startDate, 'LT')} - ${DateHelper.format(eventRecord.endDate, 'LT')}</div></div>`

    //         }
    //         // You can also use Tooltip configs here, for example:
    //         // anchorToTarget : false,
    //         // trackMouse     : true 🎈
    //     },
    //     scheduleTooltip: {
    //         generateTipContent({ date, event, resourceRecord }) {
    //             // console.log(resourceRecord.data.ComQty);
    //             // return `
    //             //     <dl>
    //             //         <dt>Resource</dt><dd>已完工数：${}</dd>
    //             //     </dl>
    //             // `;
    //         }
    //     }
    // },
    project: {
      // eventModelClass    : Appointment,
      resourceModelClass: window.Aps.Doctor
    },

    columns: [], // columnsLeft

    eventRenderer ({ eventRecord, renderData }) {
      // console.log('taskMap', taskMap)
      // console.log('renderData', renderData)
      // console.log('renderData.eventId', renderData.eventId)
      taskMap[renderData.eventId]._data = {
        startDate: eventRecord.startDate,
        endDate: eventRecord.endDate
      }

      // let status = ''
      if (eventRecord.canceled) {
        renderData.cls.canceled = true
        renderData.iconCls = 'b-fa b-fa-ban'
        renderData.eventColor = 'gray'
        // status = 'Canceled: '
      }

      if (eventRecord.data.BClose) {
        renderData.eventColor = eventColors.BCloseColor
      } else {
        renderData.eventColor = eventColors[eventRecord.type] || 'gray'
      }

      const { iconCls } = renderData
      renderData.iconCls = null

      // 是否跨天
      const isCrossDays = DateHelper.format(eventRecord.startDate, 'YYYY-MM-DD') !== DateHelper.format(eventRecord.endDate, 'YYYY-MM-DD')

      const _startDate = isCrossDays ? DateHelper.format(eventRecord.startDate, 'MM-DD HH:mm') : DateHelper.format(eventRecord.startDate, 'LT')
      const _endDate = isCrossDays ? DateHelper.format(eventRecord.endDate, 'MM-DD HH:mm') : DateHelper.format(eventRecord.endDate, 'LT')

      return [
        {
          className: 'event-header',
          children: [{
            className: 'event-sticky-content',
            children: [
              {
                tag: 'i',
                className: iconCls
              },
              // xss protection
              {
                html: StringHelper.encodeHtml(eventRecord.name)
              }
            ]
          }]
        },
        {
          className: 'event-body',
          html: `<div class="event-sticky-content">${_startDate} <i class="b-fa b-fa-arrow-right"></i>${_endDate} </div>`
        }
      ]
    },

    tbar: [], // tarArr

    // onLayoutToggle({ source: button }) {
    //     this.element.parentElement.classList.toggle('b-side-by-side');
    //     console.log(this.element.parentElement);
    // },
    // 在插单之前请将工序已完工的产品进行报工，否则会出现已完成的无法报工

    // 点击搜索
    onSearch () {
      getDocinfo()
    },

    // 点击保存
    onSave () {
      // save()
      saveType(1)
    },

    // 点击查看排产单详情
    onInfo () {
      //
      if (queryInit.apsId) {
        getApsListbyapsid()
      } else {
        // alert('暂无详情')
        window.ApsMsg({ message: '暂无详情', type: 'warning' })
      }
    },

    // 点击插单时 刷新设备列表
    onBInsert () {
      // getReslist({ PlanIds: palnParam.palnIds, OpIds: palnParam.OpIds, BInsert: true })
      BInsertMy = true
      saveType(0, 'onBInsert')
    }
  })

  // eslint-disable-next-line no-new
  new Splitter({
    appendTo: 'main'
  })

  window.Aps.store = new Store({
    modelClass: window.Aps.Task,
    data: []
  })

  window.Aps.unplannedGrid = new window.Aps.UnplannedGrid({
    ref: 'unplanned',
    appendTo: 'main',
    title: '资源列表',
    collapsible: true,
    flex: '0 0 320px', // 350px 右侧表格宽度控制
    ui: 'toolbar',
    hideHeaders: true, // 列头隐藏
    project: window.Aps.schedule.project,
    // store: schedule.eventStore.chain(event => event.resources.length === 0)

    // 右侧表格数据单独
    store: window.Aps.store,
    // data: dataPlan.reslist,
    features: {
      // 展开明细
      // rowExpander: {
      //     columnPosition: 'last',
      //     renderer({ record }) {
      //         console.log(record);
      //         console.log(palnParam.palnIds);
      //         console.log(palnParam.OpIds);
      //         console.log(BInsertMy);
      //         console.log(queryInit);
      //         // return `<div style="padding: 10px"><div style="font-weight: bold;margin-bottom:5px;">Introduction in Latin</div><div style="color:#555">${record.notes} ${record.notes}</div></div>`;
      //     },
      //     //     onClick: ({ record }) => {
      //     //         console.log(record);
      //     //     }
      // },
    },

    listeners: {
      selectionChange () {
        const
          { selectedRecords } = this
        const { calendarHighlight } = window.Aps.schedule.features

        if (!selectedRecords.length) {
          const dom = document.querySelector('.j-box')
          dom.innerHTML = ''
          return false
        }

        const task = taskMap[selectedRecords[0].id]
        // monitor(task)
        if (!isEditAps) {
          // monitor(task)
          return false
        }

        // console.log('点击:资源行');

        placementArea(task)
      },
      onDrop () {
        // console.log('ddd')
      }
    }

  })

  window.Aps.drag = new window.Aps.Drag({
    grid: window.Aps.unplannedGrid,
    schedule: window.Aps.schedule,
    constrain: false,
    outerElement: window.Aps.unplannedGrid.element
  })

  // getplanlist(queryInit)//初始化左边数据
  // getReslist(palnParam.palnIds, palnParam.OpIds)

  getDocinfo()

  setTimeout(() => {
    monitor()
  }, 2000)
}

const saveType = (DocState, type) => {
  if (BInsertMy && DocState === 0) {
    const options = [
      { value: 0, text: '关闭' },
      { value: 1, text: '顺延' }
    ]

    const divHtml = document.createElement('div')
    const divBInsert = document.createElement('div')
    divBInsert.id = 'divBInsert'

    const p = document.createElement('p')
    p.innerText = '插单的排产单保存后不可修改，在插单之前请将工序已完工的产品进行报工，否则会出现已完成的无法报工'

    // 处理方式 行
    const divSelect = document.createElement('div')
    divSelect.id = 'divSelect'
    const span = document.createElement('span')
    span.innerText = '处理方式：'

    const selectElement = document.createElement('select')

    options.forEach(option => {
      const optionElement = document.createElement('option')
      optionElement.value = option.value
      optionElement.text = option.text
      selectElement.appendChild(optionElement)
    })

    divSelect.appendChild(span)
    divSelect.appendChild(selectElement)

    //  ==================

    // 插单原因行
    const divtextarea = document.createElement('div')
    divtextarea.id = 'divtextarea'
    const spantextarea = document.createElement('span')
    spantextarea.innerText = '插单原因：'
    const textareaElement = document.createElement('textarea')

    divtextarea.appendChild(spantextarea)
    divtextarea.appendChild(textareaElement)
    //  ==================

    divBInsert.appendChild(p)
    divBInsert.appendChild(divSelect)
    divBInsert.appendChild(divtextarea)

    divHtml.appendChild(divBInsert)

    // 插单
    window.openDialog('插单的排产单保存后不可修改，在插单之前请将工序已完工的产品进行报工，否则会出现已完成的无法报工', (form) => {
      console.log(form)
      insertObj.HandleWay = form.HandleWay
      insertObj.InsertReason = form.InsertReason
      insertObj.BInsert = true
      save('', true, DocState, type)
    })
  } else {
    window.openDialog('保存后转成正式单据可流向派工', () => {
      save('', false, DocState)
    }, 'save')
    // window.loadingmy.confirm('保存后转成正式单据可流向派工', {
    //   title: '温馨提示',
    //   btn: [{
    //     text: '确定',
    //     callback: (id) => {
    //       // console.log(id)
    //       // window.loadingmy.close(id)
    //       save(id, false, DocState)
    //     }
    //   }]
    // })
  }
}

const monitor = () => {
  // let normalSubgrid = document.querySelector('.b-single-child')
  const zydivIs = document.querySelectorAll('.b-grid-subgrid .zydiv .b-icon')

  for (let i = 0; i < zydivIs.length; i++) {
    const element = zydivIs[i]
    if (element.getAttribute('resid')) {
      element.addEventListener('click', (el) => {
        const resid = el.target.getAttribute('resid')
        const restype = el.target.getAttribute('restype')

        const task = {
          restype,
          resid
        }
        getDbclick(task, element)
      }, false)// 监听双击
    }
  }
}

const getDbclick = (task, normalSubgrid) => {
  const param = {
    CapacityType: task?.restype || 100,
    ResId: task?.resid,
    PlanIds: palnParam.palnIds,
    OpIds: palnParam.OpIds,
    BInsert: BInsertMy || false,
    WorkShopId: queryInit.WorkShopId || '',
    StartDate: DateHelper.format(new Date(queryInit.StartDate), 'YYYY-MM-DD') || '',
    EndDate: DateHelper.format(new Date(queryInit.EndDate), 'YYYY-MM-DD') || ''

  }
  getResinfo(param, normalSubgrid)
}

const getResinfo = (param, normalSubgrid) => {
  const resinfoBox = document.querySelector('.resinfoBox')
  const ResTypemy = document.querySelector('#ResTypemy')
  const ResCodemy = document.querySelector('#ResCodemy')
  const ResNamemy = document.querySelector('#ResNamemy')
  const ResAgingmy = document.querySelector('#ResAgingmy')
  const APSLevelmy = document.querySelector('#APSLevelmy')
  const BDefaultmy = document.querySelector('#BDefaultmy')

  postAction(urlAll.resinfo, param).then((res) => {
    if (res.code === 0) {
      resinfoBox.style.display = 'inline-block'

      if (res.data.ResType === 1) {
        ResTypemy.innerText = '设备'
      } else if (res.data.ResType === 2) {
        ResTypemy.innerText = '人工'
      } else {
        ResTypemy.innerText = ''
      }

      ResCodemy.innerText = res.data.ResCode
      ResNamemy.innerText = res.data.ResName
      ResAgingmy.innerText = res.data.ResAging
      APSLevelmy.innerText = res.data.APSLevel
      BDefaultmy.innerText = res.data.BDefault ? '是' : '否'
      const headerContent = [{
        title: '计划单号',
        key: 'PlanCode',
        align: 'left',
        minWidth: '130px'
      }, {
        title: '产品编码',
        key: 'cInvCode',
        align: 'left',
        minWidth: '130px'
      }, {
        title: '产品名称',
        key: 'cInvName',
        align: 'left',
        minWidth: '130px'
      }, {
        title: '开工日期',
        key: 'StartTime',
        align: 'center',
        minWidth: '130px'
      }, {
        title: '完工日期',
        key: 'EndTime',
        align: 'center',
        minWidth: '130px'
      }, {
        title: '工序行号',
        key: 'OpSeq',
        align: 'center',
        minWidth: '70px'
      }, {
        title: '工序编码',
        key: 'OpCode',
        align: 'center',
        minWidth: '90px'

      }, {
        title: '工序名称',
        key: 'OpName',
        align: 'center',
        minWidth: '100px'
      }, {
        title: '排产数量',
        key: 'APSQty',
        align: 'center',
        minWidth: '90px'
      }, {
        title: '派工数量',
        key: 'ShiftQty',
        align: 'center',
        minWidth: '90px'
      }, {
        title: '产能',
        key: 'ResAging',
        align: 'center',
        minWidth: '90px'
      }, {
        title: '进度比例',
        key: 'ComRate',
        align: 'center',
        minWidth: '90px'
      }]

      creatApsTb(res.data.PlanOpDtos, headerContent, 'resinfoTb')
      return false
    }
  })

  // 请求到数据后清空双击事件 解决触发多次的问题
  normalSubgrid.removeEventListener('dblclick', getDbclick)
}

// 放置区域
const placementArea = (task) => {
  let dom = document.querySelector('.j-box')
  if (!dom) {
    const _dom = document.createElement('div')
    _dom.className = 'j-box'
    _dom.style.position = 'relative'

    insertAfter(_dom, document.querySelector('.b-column-lines-canvas'))

    dom = document.querySelector('.j-box')
  }
  const blockWidth = 40
  const blockHeight = 55

  let html = ''

  const node = dataPlan.wshoplist.find(item => item.id === queryInit.WorkShopId) || {}

  const StartTime = node.StartTime || '00:00:00'
  const _startDate = new Date(`${DateHelper.format(queryInit.StartDate, 'YYYY-MM-DD')} ${StartTime}`)

  // console.log(_startDate)

  if (!task) return false

  task.PlanOpIds.forEach(PlanOpId => {
    task.TimeRangeDtos.forEach(item => {
      // console.log(item.Start)
      // console.log(_startDate.getTime())
      const left = (new Date(item.Start).getTime() - _startDate.getTime()) / 1000 / 60 / 60 * 2
      const segment = (new Date(item.End).getTime() - new Date(item.Start).getTime()) / 1000 / 60 / 60 * 2

      // console.log(left)
      const style = {
        width: segment * blockWidth + 'px',
        height: blockHeight + 'px',
        color: '#3183fe88',
        'background-color': 'rgba(49,131,254,.0705882353)',
        border: '2px dashed rgba(49,131,254,.2)',
        position: 'absolute',
        left: left * blockWidth + 'px',
        _left: left,
        top: (planOpMap[PlanOpId]?.topCount - 1) * blockHeight + 'px'
      }
      let _style = ''
      for (const key in style) {
        _style += key + ':' + style[key] + ';'
      }
      const _html = `<p style="${_style}"></p>`

      html += _html
    })
  })

  dom.innerHTML = html
}

const getplanlist = () => {
  return new Promise((resolve) => {
    const param = {
      StartBeginDate: getDateFrom(queryInit.StartBeginDate || ''),
      StartEndDate: getDateFrom(queryInit.StartEndDate || ''),
      WorkShopId: queryInit.WorkShopId
    }
    const planLo = window.loadingmy.service({
      lock: true,
      text: '加载中..',
      background: 'rgba(0, 0, 0, 0.3)'
    })

    postAction(urlAll.planlist, param).then((res) => {
      planLo.close()

      if (res.code !== 0) {
        dataPlan.resourcesData = []
        window.Aps.schedule.crudManager.inlineData = dataPlan

        return false
      }

      // 计数
      let count = 0
      res.data.forEach(item => {
        count++
        planListMap[item.PlanId] = item
        item.OpDtos.forEach(node => {
          count++
          planOpMap[node.PlanOpId] = {
            ...node,
            PlanId: item.PlanId,
            topCount: count
          }
        })
      })
      dataPlan.resourcesData = res.data.map((e) => {
        return {
          name: e.PlanCode || '',
          num: e.IssueQty || 0,
          cInvCode: e.cInvCode || '',
          cInvName: e.cInvName || '',
          cInvAddCode: e.cInvAddCode || '',
          StartDatePl: e.StartDate || '',
          DueDatePl: e.DueDate || '',
          DisDate: e.DisDate,
          PlanId: e.PlanId || '',
          OpSeq: '',
          code: '',
          expanded: true,
          children: e.OpDtos.map((i) => {
            return {
              name: i.OpName,
              code: i.OpCode,
              num: i.APSQty,
              OpSeq: i.OpSeq,
              iconCls: 'b-icon b-fa-tools',
              OpId: i.OpId,
              id: i.PlanOpId || i.OpId,
              PlanId: e.PlanId || '',
              leaf: true
            }
          })
        }
      })
      // console.log(dataPlan.resourcesData);
      // dataPlan.resourcesData = [{
      //     name: "20230908001",
      //     expanded: true,
      //     num: 1000,
      //     cpbm: "13010278",
      //     cpmc: "底部护板",
      //     hh: "001",
      //     ljh: "1WA804792",
      //     rq: "2023-09-13",
      //     code: "",
      //     children: [{
      //         id: 1,
      //         code: "H00001",
      //         name: "垫圈焊接",
      //         iconCls: "b-icon b-fa-tools",
      //         num: 100,
      //         hh: "0010"
      //     },]
      // }]
      palnParam.palnIds = res.data.map(e => e.PlanId)
      palnParam.OpIds = []
      res.data.forEach(e => {
        //    e.OpDtos.map((i => i.OpId))
        const oparr = e.OpDtos.map(i => i.OpId)
        palnParam.OpIds = palnParam.OpIds.concat(oparr)
      })
      // console.log(param)
      const paramCopy = param
      paramCopy.limit = nocompareplanlistPage.limit
      paramCopy.page = nocompareplanlistPage.page

      nocompareplanlistPage.StartBeginDate = paramCopy.StartBeginDate
      nocompareplanlistPage.StartEndDate = paramCopy.StartEndDate
      nocompareplanlistPage.WorkShopId = paramCopy.WorkShopId
      getNocompareplanlist(paramCopy)
      // palnIds = res.data.map((e => e.PlanId))
      // schedule.crudManager.inlineData = dataPlan;
      // console.log(schedule.crudManager.inlineData);

      // columnsLeft[1].editor = isEditAps
      // window.Aps.schedule.columns = columnsLeft;
      // } else {
      //     res.data.forEach(e => {
      //         dataPlan.resourcesData.push({
      //             name: e.PlanCode || '',
      //             num: e.IssueQty || 0,
      //             cInvCode: e.cInvCode || '',
      //             cInvName: e.cInvName || '',
      //             cInvAddCode: e.cInvAddCode || '',
      //             StartDatePl: e.StartDate || '',
      //             DueDatePl: e.DueDate || '',
      //             DisDate: e.DisDate,
      //             PlanId: e.PlanId || '',
      //             OpSeq: '',
      //             code: '',
      //             expanded: true,
      //             children: e.OpDtos.map((i, idx) => {
      //                 return {
      //                     name: i.OpName,
      //                     code: i.OpCode,
      //                     num: i.APSQty,
      //                     OpSeq: i.OpSeq,
      //                     iconCls: "b-icon b-fa-tools",
      //                     OpId: i.OpId,
      //                     id: i.PlanOpId || i.OpId,
      //                     PlanId: e.PlanId || '',
      //                     leaf: true,
      //                 }
      //             })
      //         })

      //     })
      // }

      window.Aps.schedule.crudManager.inlineData = dataPlan

      resolve()
      return true
    })
  })
}

const getNocompareplanlist = (param) => {
  // nocompareplanlist
  // window.loadingmy.msg('正在加载中',{ icon : 16, time: 1000})
  // const idLo = window.loadingmy.service({
  //   lock: true,
  //   text: '加载中..',
  //   background: 'rgba(0, 0, 0, 0.3)'
  // })
  postAction(urlAll.nocompareplanlist, param, EffectlistEmpy).then((res) => {
    // console.log(res)
    // idLo.close()

    if (res.code === 0) {
      if (res.data.length) {
        const headerContent = [{
          title: '计划单号',
          key: 'PlanCode',
          align: 'center',
          minWidth: '10%'
        }, {
          title: '生产订单号',
          key: 'MoCode',
          align: 'center',
          minWidth: '150px'
        }, {
          title: '产品编码',
          key: 'cInvCode',
          align: 'center',
          minWidth: '150px'
        }, {
          title: '产品名称',
          key: 'cInvName',
          align: 'left',
          minWidth: '350px'
        }, {
          title: '计划开工日期',
          key: 'StartDate',
          align: 'center',
          minWidth: '150px'
        }, {
          title: '计划完工日期',
          key: 'DueDate',
          align: 'center',
          minWidth: '150px'
        }, {
          title: '计划数量',
          key: 'IssueQty',
          align: 'center',
          minWidth: '150px'
        }]
        creatApsTb(res.data, headerContent, 'nocompareplanlist')
      }

      if (res.count > 0) {
        nocompareplanlistPage.count = res.count || 0

        nocompareplanlistPage.page = param.page

        const pagePre = document.querySelector('#pagePre')
        const pageNext = document.querySelector('#pageNext')

        pagePre.addEventListener('click', clickPagePre, false)
        pageNext.addEventListener('click', clickPageNext, false)

        // console.log(nocompareplanlistPage.page)

        // eslint-disable-next-line no-inner-declarations
        function clickPagePre () {
          // alert('上')
          if (nocompareplanlistPage.page > 1) {
            // alert(222)
            // console.log(nocompareplanlistPage.page)
            nocompareplanlistPage.page = nocompareplanlistPage.page - 1
            getNocompareplanlist(nocompareplanlistPage)
            pagePre.removeEventListener('click', clickPagePre, false)
            pageNext.removeEventListener('click', clickPageNext, false)
          }
        }
        // eslint-disable-next-line no-inner-declarations
        function clickPageNext () {
          // if (nocompareplanlistPage.page > 1) {
          // alert(223)
          if (res.data.length >= 20) {
            nocompareplanlistPage.page = nocompareplanlistPage.page + 1
            getNocompareplanlist(nocompareplanlistPage)
            pageNext.removeEventListener('click', clickPageNext, false)
            pagePre.removeEventListener('click', clickPagePre, false)
          }
          // }
        }

        const countEl = document.querySelector('#countMy')
        countEl.innerText = '第 ' + nocompareplanlistPage.page + ' 页 ' + '共：' + res.count + '条'
        // countEl.innerHTML = '第 ' + + ' 页 ' + '共：' + res.count + '条'
      }

      // res.data.forEach(e => {
      //     dataPlan.resourcesData.push({
      //         name: e.PlanCode || '',
      //         num: e.IssueQty || 0,
      //         cInvCode: e.cInvCode || '',
      //         cInvName: e.cInvName || '',
      //         cInvAddCode: e.cInvAddCode || '',
      //         StartDatePl: e.StartDate || '',
      //         DueDatePl: e.DueDate || '',
      //         DisDate: e.DisDate,
      //         PlanId: e.PlanId || '',
      //         OpSeq: '',
      //         code: '',
      //         expanded: true,
      //         children: e.OpDtos.map((i, idx) => {
      //             return {
      //                 name: i.OpName,
      //                 code: i.OpCode,
      //                 num: i.APSQty,
      //                 OpSeq: i.OpSeq,
      //                 iconCls: "b-icon b-fa-tools",
      //                 OpId: i.OpId,
      //                 id: i.PlanOpId || i.OpId,
      //                 PlanId: e.PlanId || '',
      //                 leaf: true,
      //             }
      //         }),
      //         isNo: true,
      //     })

      // })

      // window.Aps.schedule.crudManager.inlineData = dataPlan;
    }
  })
}

const insertAfter = (newElement, targetElement) => { // newElement是要追加的元素 targetElement 是指定元素的位置
  const parent = targetElement.parentNode // 找到指定元素的父节点
  if (parent.lastChild === targetElement) { // 判断指定元素的是否是节点中的最后一个位置 如果是的话就直接使用appendChild方法
    parent.appendChild(newElement, targetElement)
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling)
  }
}

// 排产明细信息
const getDocinfo = (isInit = true, isSetHeard, id = '') => {
  const query = getQueryObject(window.location.href)
  query.id = query.id || ''
  if (query?.type === '1') {
    queryInit.StartBeginDate = DateHelper.format(new Date(queryInit.StartBeginDate), 'YYYY-MM-DD')
    queryInit.StartEndDate = DateHelper.format(new Date(queryInit.StartEndDate), 'YYYY-MM-DD')
  }
  const infoLo = window.loadingmy.service({
    lock: true,
    text: '加载中..',
    background: 'rgba(0, 0, 0, 0.3)'
  })

  postAction(urlAll.docinfo, {
    ApsId: !isSetHeard ? query.id : id, // 排产单ID
    WorkShopId: queryInit.WorkShopId, // 排产车间ID
    StartBeginDate: queryInit.StartBeginDate ? DateHelper.format(new Date(queryInit.StartBeginDate), 'YYYY-MM-DD') : null,
    StartEndDate: queryInit.StartEndDate ? DateHelper.format(new Date(queryInit.StartEndDate), 'YYYY-MM-DD') : null,
    StartDate: query.id ? '' : DateHelper.format(new Date(queryInit.StartDate), 'YYYY-MM-DD'), // 排产开始日期
    EndDate: query.id ? '' : DateHelper.format(new Date(queryInit.EndDate), 'YYYY-MM-DD') // 排产结束日期
  }).then(async ({ data }) => {
    // window.loadingmy.close(infoLo)
    infoLo.close()

    // if (data.code !== 0) return false
    queryInit.apsId = data.APSId || ''
    query.id = data.APSId
    insertObj.HandleWay = data.InsertHandleWay || 0

    if (query.id) {
      queryInit.WorkShopId = data.WorkShopId || ''
      queryInit.StartDate = data.StartDate
      queryInit.EndDate = data.EndDate
      if (queryInit.StartDate) {
        tbarArr[3].value = queryInit.StartDate
        tbarArrCopy[3].value = queryInit.StartDate

        tbarArr[4].value = queryInit.EndDate
        tbarArrCopy[4].value = queryInit.EndDate
      }
    }

    // console.log(queryInit.apsId);
    tbarArr[0].items = dataPlan.wshoplist
    tbarArr[0].value = queryInit.WorkShopId
    tbarArr[1].value = queryInit.StartBeginDate || ''
    tbarArr[2].value = queryInit.StartEndDate || ''
    tbarArr[3].value = queryInit.StartDate || ''
    tbarArr[4].value = queryInit.EndDate || ''

    BInsertMy = data.BInsert || false

    if (data.BShift) { // 派工状态不可修改
      isEditAps = false
      tbarArr = tbarArr.filter(e => e.text !== '保存')
      // console.log(window.Aps.schedule.features.eventEdit.initialConfig)
    } else {
      isEditAps = true
      tbarArr = tbarArrCopy
    }

    if (data.DocState !== 1) {
      tbarArr = tbarArr.filter(e => e.text !== '插单')
    } else {
      tbarArr = tbarArrCopy
    }

    // 先清空再赋值 解决多次赋值导致数据渲染问题（父子级展示问题）
    columnsLeft[1].editor = false // isEditAps // 根据状态是否能编辑数量列
    window.Aps.schedule.columns = []
    window.Aps.schedule.columns = columnsLeft

    // console.log(window.Aps.schedule.columns);

    window.Aps.taskEveIndex = window.Aps.taskEveIndex ? window.Aps.taskEveIndex : 1

    if (window.Aps.schedule) {
      // console.log(window.Aps.schedule)
      // console.log(getTime().startDate)  getTime().startDate
      window.Aps.schedule.startDate = getTime().startDate
      window.Aps.schedule.endDate = getTime().endDate
    }

    const list = []
    data.APSResList.forEach(item => {
      const key = window.Aps.taskEveIndex++
      taskMap[key] = item

      list.push({
        id: key,
        ResId: item.ResId,
        resourceId: item.PlanOpId,
        startDate: item.StartTime,
        endDate: item.EndTime,
        name: item.ResName,
        ApsQty: item.ApsQty,
        ResAging: item.ResAging,
        eventType: 'meeting',
        BClose: item.BClose,
        type: item.ResType === 1 ? 'device' : 'person',
        iconCls: item.ResType === 1 ? 'b-icon b-fa-chalkboard' : 'b-icon b-fa-users',
        ResCode: item.ResCode,
        APSDId: item.APSDId || ''
      })
    })

    if (queryInit.apsId) {
      // if (data.DocState != 1) {
      //     tbarArr = tbarArr.filter(e => e.text != '插单')
      //     console.log(tbarArr);
      // } else {
      //     tbarArr = tbarArrCopy
      // }
      window.Aps.schedule.tbar = tbarArr
    } else {
      // if (tbarArr.length == 10) {
      //     let idx = tbarArr.findIndex(e => e.text == '详情')
      //     if (idx > -1) {
      //         tbarArr = tbarArr.splice(0, idx)
      //     }
      // }
      tbarArr = tbarArr.filter(e => e.text !== '详情')

      window.Aps.schedule.tbar = tbarArr
    }

    // data.data.PlanDtos = []
    // data.data.ResDtos = []

    if (data.PlanDtos.length) {
      // 计数
      let count = 0
      data.PlanDtos.forEach(item => {
        count++
        planListMap[item.PlanId] = item
        item.OpDtos.forEach(node => {
          count++
          planOpMap[node.PlanOpId] = {
            ...node,
            PlanId: item.PlanId,
            topCount: count
          }
        })
      })
      dataPlan.resourcesData = data.PlanDtos.map((e) => {
        return {
          name: e.PlanCode || '',
          num: e.IssueQty || 0,
          cInvCode: e.cInvCode || '',
          cInvName: e.cInvName || '',
          cInvAddCode: e.cInvAddCode || '',
          StartDatePl: e.StartDate || '',
          DueDatePl: e.DueDate || '',
          DisDate: e.DisDate,
          PlanId: e.PlanId || '',
          OpSeq: '',
          code: '',
          expanded: true,
          children: e.OpDtos.map((i) => {
            return {
              name: i.OpName,
              code: i.OpCode,
              num: i.APSQty,
              OpSeq: i.OpSeq,
              iconCls: 'b-icon b-fa-tools',
              OpId: i.OpId,
              id: i.PlanOpId || i.OpId,
              PlanId: e.PlanId || '',
              ComQty: i.ComQty || 0
            }
          })
        }
      })
      palnParam.palnIds = data.PlanDtos.map(e => e.PlanId)
      palnParam.OpIds = []
      data.PlanDtos.forEach(e => {
        //    e.OpDtos.map((i => i.OpId))
        const oparr = e.OpDtos.map(i => i.OpId)
        palnParam.OpIds = palnParam.OpIds.concat(oparr)
      })
    }

    if (data.ResDtos.length) {
      const resList = []
      data.ResDtos.forEach(item => {
        const key = window.Aps.taskEveIndex++
        taskMap[key] = item
        resList.push({
          id: key,
          ResId: item.ResId,
          APSDId: item.APSDId || '',
          typeName: item.ResType,
          APSLevel: item.APSLevel,
          BDefault: item.BDefault,
          code: item.ResCode,
          name: item.ResName,
          ResAging: item.ResAging,
          TimeRangeDtos: item.TimeRangeDtos,
          // OpId: e.OpId,
          draggable: true,
          resizable: true,
          duration: 3,
          durationUnit: 'h',
          PlanOpIds: item.PlanOpIds,
          ResCode: item.ResCode || ''

        })
      })
      dataPlan.reslist = resList
      window.Aps.schedule.crudManager.inlineData = dataPlan
      window.Aps.unplannedGrid.store.data = dataPlan.reslist
    } else {
      // 此场景出现在 资源排完后 资源列表为空，中间已排资源不显示问题
      dataPlan.reslist = []
      window.Aps.schedule.crudManager.inlineData = dataPlan
      window.Aps.unplannedGrid.store.data = dataPlan.reslist
    }

    if (isInit) {
      if (!data.PlanDtos.length) {
        await getplanlist()
        // await getplanlist(true)
      }
      if (!data.PlanDtos.length && !data.ResDtos.length) {
        // 只有 在计划和资源都没有值时 才请求资源列表
        getReslist({ PlanIds: palnParam.palnIds, OpIds: palnParam.OpIds, BInsert: false })
      }
    }

    window.Aps.schedule.events = list

    dataPlan.eventsData = list

    window.Aps.schedule.crudManager.inlineData = dataPlan
    window.Aps.schedule.unmaskBody()
  })
}

// 数据请求
const getData = () => {
  window.initTaskPageFrequency = (window.initTaskPageFrequency || 0) + 1
  getworkshoplist()// 排产车间
}

// 排产车间
const getworkshoplist = () => {
  const param = {
    keyWord: ''
  }

  postAction(urlAll.workshoplist, param).then((res) => {
    getInit()
    if (res.code !== 0) return false
    dataPlan.wshoplist = res.data.map((e) => {
      return {
        ...e,
        id: e.WorkShopId,
        text: e.WorkShopName,
        role: 'role name'
      }
    })
    const node = dataPlan.wshoplist[0] || {}
    // const node = dataPlan.wshoplist[1] || {}

    if (!queryInit.WorkShopId) {
      queryInit.WorkShopId = node.id || ''
    }
    // 解决第一次进页面时 车间下拉数据没有，默认值也没有
    tbarArr[0].items = dataPlan.wshoplist
    tbarArr[0].value = queryInit.WorkShopId

    tbarArrCopy[0].items = dataPlan.wshoplist
    tbarArrCopy[0].value = queryInit.WorkShopId
    // 解决第一次进页面时 车间下拉数据没有，默认值也没有

    // setTimeout(() => {
    //     window.Aps.schedule.resourceStore.query(resourceRecord => {
    //         console.log('resourceRecord', resourceRecord)
    //         console.log('resourceRecord.role', resourceRecord.role)
    //     })
    // }, 1500)
  })
}

// 排产资源
const getReslist = ({ PlanIds, OpIds, BInsert }) => {
  return new Promise((resolve) => {
    const param = {
      PlanIds,
      OpIds,
      WorkShopId: queryInit.WorkShopId,
      StartDate: DateHelper.format(new Date(queryInit.StartDate), 'YYYY-MM-DD'),
      EndDate: DateHelper.format(new Date(queryInit.EndDate), 'YYYY-MM-DD'),
      BInsert
    }

    postAction(urlAll.reslist, param).then((res) => {
      // if (res.code !== 0) return false

      const resList = [];

      ((res || {}).data || []).forEach(item => {
        const key = window.Aps.taskEveIndex++
        taskMap[key] = item
        resList.push({
          id: key,
          ResId: item.ResId,
          APSDId: item.APSDId || '',
          typeName: item.ResType,
          APSLevel: item.APSLevel,
          BDefault: item.BDefault,
          code: item.ResCode,
          name: item.ResName,
          ResAging: item.ResAging,
          TimeRangeDtos: item.TimeRangeDtos,
          // OpId: e.OpId,
          draggable: true,
          resizable: true,
          duration: 3,
          durationUnit: 'h',
          PlanOpIds: item.PlanOpIds,
          BClose: item.BClose,
          type: item.ResType === 1 ? 'device' : 'person',
          iconCls: item.ResType === 1 ? 'b-icon b-fa-chalkboard' : 'b-icon b-fa-users',
          ResCode: item.ResCode || ''
        })
      })
      dataPlan.reslist = resList

      window.Aps.schedule.crudManager.inlineData = dataPlan

      window.Aps.unplannedGrid.store.data = dataPlan.reslist

      // console.log(tbarArr);
      // window.Aps.schedule.tbar = tbarArr
      resolve()
      return true
      // getInit('no')
    })
  })
}

const getQueryObject = url => {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

const save = (closeid, BInsert, DocState, type) => {
  const idSave = window.loadingmy.service({
    lock: true,
    text: '加载中..',
    background: 'rgba(0, 0, 0, 0.3)'
  })

  // console.log('schedule.eventStore', schedule.eventStore)
  // dian
  // let HandleWay = null;// 处理方式
  // let InsertReason = null;// 插单原因
  BInsertMy = BInsertMy || BInsert
  // if (BInsertMy) {
  //     let selectel = document.querySelector('#divSelect select')
  //     HandleWay = selectel.value

  //     let divtextareael = document.querySelector('#divtextarea textarea')

  //     InsertReason = divtextareael.value

  // }
  window.Aps.schedule.suspendRefresh()

  // console.log('dataPlan', dataPlan)
  // console.log('schedule.crudManager.inlineData.assignmentsData', schedule.crudManager.inlineData.assignmentsData)
  const assignmentsData = window.Aps.schedule.crudManager.inlineData.assignmentsData
  // console.log('assignmentsData', assignmentsData)

  const dto = []
  assignmentsData.forEach(item => {
    if (!dto.includes(item.resourceId)) dto.push(item.resourceId)
  })
  // console.log('dto', dto)

  const OpSaveDtos = dto.map(item => {
    // console.log('planOpMap', planOpMap)
    // console.log('item', item)
    return {
      PlanId: planOpMap[item].PlanId, // 计划ID
      OpId: planOpMap[item].OpId, // 工序ID
      ApsQty: planOpMap[item].APSQty || '', // 资源子表id
      ResDtos: assignmentsData.filter(node => node.resourceId === item).map(node => { // 排产资源集合
        return {
          ResType: taskMap[node.eventId].ResType, // 资源类型1 = DEVICE，设备;2 = ARTIFICIAL，人工
          ResId: taskMap[node.eventId].ResId, // 资源ID
          APSDId: taskMap[node.eventId].APSDId,
          StartTime: DateHelper.format(taskMap[node.eventId]?._data.startDate, 'YYYY-MM-DD HH:mm:ss'), // 开始时间
          EndTime: DateHelper.format(taskMap[node.eventId]?._data.endDate, 'YYYY-MM-DD HH:mm:ss') // 结束时间
        }
      })
    }
  })

  const query = getQueryObject(window.location.href)
  // console.log(BInsert);
  // console.log('insertObj', insertObj)// 插单参数
  // console.log(query.id);
  // console.log(queryInit.apsId);
  // return
  postAction(urlAll.save, {
    ApsId: !BInsert ? (queryInit.apsId || query.id) : '', // 排产单ID
    DocState: DocState || 0, // >= 0 ? DocState : 1 单据状态0 = Draft，草稿;1 = Normal， 正常
    OpSaveDtos: type ? [] : OpSaveDtos, // 排产的工序集合,
    WorkShopId: queryInit.WorkShopId, // 排产车间ID
    StartDate: DateHelper.format(new Date(queryInit.StartDate), 'YYYY-MM-DD'), // 排产日期开始
    EndDate: DateHelper.format(new Date(queryInit.EndDate), 'YYYY-MM-DD'), // 排产日期结束
    BInsert: BInsertMy || false,
    HandleWay: BInsertMy ? Number(insertObj.HandleWay) : null,
    InsertReason: BInsertMy ? insertObj.InsertReason : ''
  }).then(res => {
    idSave.close()
    // closeid?.close()
    if (res.code === 0) {
      query.id = res.data.APSId
      queryInit.apsId = res.data.APSId || ''
      window.ApsMsg({ message: '保存成功', type: 'success' })
      setTimeout(() => {
        getDocinfo(false, true, res.data.APSId)
      }, 1100)
    }
    // window.ApsMsg('保存成功', { time: 1000, icon: 1 })
  }).catch(() => {
    getDocinfo(false)
  })

  window.Aps.schedule.resumeRefresh(true)
  // schedule.crudManager.inlineData = data;
  // schedule.project.inlineData = data;
  // UnplannedGrid.initClass();
}

// 查询条件下是否已有排产记录
// const get

// getData()
window.initTaskPage = null
// window.initTaskPageFrequency = 1;
window.initTaskPage = getData
