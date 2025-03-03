import { ref, onMounted } from 'vue'
import api from '@/api'
import type { SysdicSelectReqType } from '@/api/sysdic'
import type { WorkshopSelectReqType } from '@/api/workshop'
import type { InvClassTreeDto, SysAppBaseDto } from '@/api/interface/system'
import { CollectState, LabelType, TaskState, ChecksTaskState, State } from '@/typings/enum'
import type { UfmanagePrlistbyinvReqType } from '@/api/ufmanage'
import type { definitions } from '@/api/interface/docs'
import type { TeamSelectReqType, TeamAsspersonsReqType } from '@/api/team'
import type { ChecksummaryWhselectReqType } from '@/api/checksummary'

/** 工作中心 来自U8 */
export const useWcListOptions = () => {
  const options = ref<Option[]>([])

  onMounted(async () => {
    const WcRes = await api.ufmanage.getUfmanageWorkcenters({})
    options.value = (WcRes.data || []).map(item => ({
      label: item.WcDesc as string,
      value: item.WcCode as string,
      id: item.WcId + '' as string
    }))
  })
  return options
}

/** 部门 来自U8 */
export const useDeptOptions = (bMDept: boolean = false) => {
  const options = ref<Option[]>([])

  onMounted(async () => {
    const DeptRes = await api.ufmanage.getUfmanageDeplist({
      bMDept
    })
    options.value = (DeptRes.data || []).map(item => ({
      label: item.Name as string,
      value: item.Code as string
    }))
  })
  return options
}

/** 负责人 来自U8 */
export const usePrincipalOptions = () => {
  const options = ref<Option[]>([])

  const filterOptionsValue = async (cDepCode: string) => {
    const param = {
      cDepCode: cDepCode || '',
      limit: 99999,
      page: 1
    }
    const PrincipalRes = await api.ufmanage.postUfmanagePersons(param)
    options.value = (PrincipalRes.data || []).map(item => ({
      label: item.cPersonName as string,
      value: item.cPersonCode as string
    }))
  }
  onMounted(() => {
    filterOptionsValue('')
  })
  return { options, filterOptionsValue }
}

/** 设备类型 来自MES数据字典 */
export const useTypeOptions = (param: SysdicSelectReqType) => {
  const options = ref<Option[]>([])
  onMounted(async () => {
    const TypeRes = await api.sysdic.getSysdicSelect(param)
    options.value = (TypeRes.data || []).map(item => ({
      label: item.Name as string,
      value: item.Code as string
    }))
  })
  return options
}

/** 车间 来自车间档案 */
export const useWorkOptions = (param: WorkshopSelectReqType) => {
  const options = ref<Option[]>([])

  onMounted(async () => {
    const WorkRes = await api.workshop.getWorkshopSelect(param)
    options.value = (WorkRes.data || []).map(item => ({
      label: item.Name as string,
      value: item.Id as string
    }))
  })
  return options
}

/** 存货分类 */
export const useInvTypeOptions = () => {
  const options = ref<Option[]>([])

  const treeMap = (list: InvClassTreeDto[]): Option[] => {
    return list.map(item => {
      return {
        label: item.cInvCName as string,
        value: item.cInvCCode as string,
        children: item.children ? treeMap(item.children || []) as any : null
      }
    })
  }

  onMounted(async () => {
    const InvTypeRes = await api.ufmanage.getUfmanageInvclstree({})
    options.value = treeMap(InvTypeRes.data || [])
  })
  return options
}

/** 应用 */
export const useApplytOptions = () => {
  const options = ref<Option[]>([])

  onMounted(async () => {
    const applyRes = await api.sysapp.getSysappList({})
    options.value = (applyRes.data || []).map((item: SysAppBaseDto) => ({
      label: item.Name as string,
      value: item.Id as string
    }))
  })
  return options
}

/** 字典 */
export const dicOptions = () => {
  const options = ref<Option[]>([])

  onMounted(async () => {
    const dicRes = await api.sysdic.postSysdicTypepage({})
    options.value = (dicRes.data || []).map(item => ({
      label: item.Name as string,
      value: item.Id as string
    }))
  })
  return options
}

/** 标签类型 */
export const useLabelTypeOptions = () => {
  const options = ref<Option[]>([{
    label: '流转卡',
    value: LabelType.FLOW_CARD
  }, {
    label: '产成品入库',
    value: LabelType.IN_WARE
  }, {
    label: '存货',
    value: LabelType.INVENTORY
  }, {
    label: '货位',
    value: LabelType.POSITION
  }, {
    label: 'ASN箱码',
    value: LabelType.ASN
  }, {
    label: '库存生码',
    value: LabelType.STOCK
  }, {
    label: '工序流转卡',
    value: LabelType.OP_FLOW_CARD
  }, {
    label: '模具',
    value: LabelType.MOLD
  }, {
    label: '采购到货',
    value: LabelType.PUARR
  }, {
    label: '设备',
    value: LabelType.DEVICE
  }])

  return options
}

/** 仓库 */
export const whOptions = () => {
  const options = ref<Option[]>([])

  onMounted(async () => {
    const dicRes = await api.ufmanage.postUfmanageWhlist({
      limit: 999999,
      page: 1
    })
    options.value = (dicRes.data || []).map(item => ({
      ...item,
      label: item.cWhName as string,
      value: item.cWhCode as string
    }))
  })
  return options
}

/** 仓库下货位 */
export const usePoListOptions = () => {
  const options = ref<Option[]>([])

  const filterOptionsValue = async (WhCode: string) => {
    const PrincipalRes = await api.ufmanage.postUfmanagePoslist({ WhCode, limit: 99999, page: 1 })
    options.value = (PrincipalRes.data || []).map(item => ({
      label: item.cPosName as string,
      value: item.cPosCode as string
    }))
  }
  // onMounted(() => {
  //   filterOptionsValue('')
  // })
  return { options, filterOptionsValue }
}

/** 模具状态 */
export const useCollectStateOptions = () => {
  const options = ref<Option[]>([{
    label: '全部',
    value: CollectState.ALL
  }, {
    label: '领用',
    value: CollectState.COLLECT
  }, {
    label: '归还',
    value: CollectState.RETURN
  }, {
    label: '待领用',
    value: CollectState.WAIT_COLLECT
  }, {
    label: '未分配',
    value: CollectState.UNASSIGNED
  }])

  return options
}
/** 盘点任务状态 */
export const useCheksTaskOptions = () => {
  const options = ref<Option[]>([{
    label: '全部',
    value: ChecksTaskState.ALL
  }, {
    label: '新建',
    value: ChecksTaskState.NEW
  }, {
    label: '盘点中',
    value: ChecksTaskState.TAKINGSTOCK
  }, {
    label: '暂停',
    value: ChecksTaskState.SUSPEND
  }, {
    label: '恢复',
    value: ChecksTaskState.RECOVER
  }, {
    label: '结束',
    value: ChecksTaskState.TERMINATE
  }])

  return options
}

/** 班组 */
export const useTeamOptions = (param?:TeamSelectReqType) => {
  const options = ref<Option[]>([])

  const fetchOptions = async (param?: TeamSelectReqType) => {
    const updatedParam = { ...param, BWxBy: param?.BWxBy ?? false } // 如果未指定，则默认为false
    const dicRes = await api.team.getTeamSelect(updatedParam)
    options.value = (dicRes.data || []).map(item => ({
      label: item.Name as string,
      value: item.Id as string
    }))
  }

  onMounted(async () => {
    await fetchOptions(param)
  })

  // 添加一个额外的方法用于重新请求数据
  const refreshOptions = async (param?: TeamSelectReqType) => {
    await fetchOptions(param)
    return options.value // 返回更新后的 options
  }
  return { options, refreshOptions }
}

/** 班组内人员 */
export const useAsspersonsOptions = () => {
  const options = ref<Option[]>([])
  const filterOptionsValue = async (param: TeamAsspersonsReqType) => {
    const PrincipalRes = await api.team.postTeamAsspersons(param)
    options.value = (PrincipalRes.data || []).map(item => ({
      label: item.cPersonName as string,
      value: item.cPersonCode as string
    }))
  }
  return { options, filterOptionsValue }
}

/** 任务状态 */
export const useTaskStateOptions = () => {
  const options = ref<Option[]>([{
    label: '全部',
    value: TaskState.ALL
  }, {
    label: '待接收',
    value: TaskState.PENDING
  }, {
    label: '已接收',
    value: TaskState.RECEIVED
  }, {
    label: '挂起',
    value: TaskState.SUSPEND
  // }, {
  //   label: '已恢复',
  //   value: TaskState.RECOVERY
  }, {
    label: '已开工',
    value: TaskState.STARTED
  }, {
    label: '已完工',
    value: TaskState.FINISHED
  // }, {
  //   label: '已转单',
  //   value: TaskState.TRANS_ED
  // }, {
  //   label: '已关闭',
  //   value: TaskState.CLOSED
  }])

  return options
}

/** 模具状态 */
export const useStateOptions = () => {
  const options = ref<Option[]>([{
    label: '全部',
    value: State.ALL
  }, {
    label: '维修',
    value: State.Repair
  }, {
    label: '保养',
    value: State.Maintenance
  }, {
    label: '报废',
    value: State.Scrap
  // }, {
  //   label: '已恢复',
  //   value: State.RECOVERY
  }, {
    label: '正常',
    value: State.Normal
  }])

  return options
}

/** 工序 */
export const useOperationOptions = () => {
  const options = ref<Option[]>([])

  onMounted(async () => {
    const res = await api.operation.postOperationPage({
      WcCode: '', // 工作中心
      OpTypes: [], // 工序类型（默认全部）
      count: 0, // 总记录数
      pages: 0, // 总页数
      limit: 99999999, // 每页条数
      page: 1, // 页码
      keyWord: '', // 查询关键字
      state: 0 // 状态0 = ALL，全部1 = ENABLE，启用2 = DISANLE，禁用
    })
    options.value = (res.data || []).map(item => ({
      label: item.OpName as string,
      value: item.Id as string
    }))
  })
  return options
}

/** 客户 */
export const usecCusOptions = () => {
  const options = ref<Option[]>([])

  onMounted(async () => {
    const dicRes = await api.ufmanage.postUfmanageCuslist({
      keyWord: '',
      limit: 99999999,
      page: 1,
      state: 0
    })
    options.value = (dicRes.data || []).map(item => ({
      label: item.cCusName as string,
      value: item.cCusCode as string
    }))
  })
  return options
}

/** 班次 */
export const useteamshiftOptions = () => {
  const options = ref<Option[]>([])

  onMounted(async () => {
    const dicRes = await api.teamshift.getTeamshiftSelect({
      keyWord: ''
    })
    options.value = (dicRes.data || []).map(item => ({
      label: item.Name as string,
      value: item.Id as string
    }))
  })
  return options
}
// 盘点任务号
export const useCancheckTaskNumsOptions = () => {
  const options = ref<Option[]>([])

  onMounted(async () => {
    const dicRes = await api.checkdetail.getCheckdetailCanchecktasknums({
      keyWord: ''
    })
    options.value = (dicRes.data || []).map((item) => ({
      label: item.Name as string,
      value: item.Id as string
    }))
  })
  return options
}

/** 待汇总仓库 */
export const useChecksumWhOptions = () => {
  const options = ref<Option[]>([])
  const filterOptionsValue = async (param: ChecksummaryWhselectReqType) => {
    const dicRes = await api.checksummary.getChecksummaryWhselect(param)
    options.value = (dicRes.data || []).map((item) => ({
      label: item.cWhName as string,
      value: item.cWhCode as string
    }))
  }

  return { options, filterOptionsValue }
}

/** 料品工艺路线主要 */
export const useProutingOptions = () => {
  const options = ref<Option[]>([])
  const filterOptionsValue = async (param: UfmanagePrlistbyinvReqType) => {
    const dicRes = await api.ufmanage.getUfmanagePrlistbyinv(param)
    options.value = (dicRes.data || []).map((item) => ({
      label: item.Version as string,
      value: item.PRoutingId + '' as string,
      desc: item.VersionDesc as string
    }))
  }

  return { options, filterOptionsValue }
}

/** 存货已生效bom版本 */
export const useBomVerionsOptions = () => {
  const options = ref<Option[]>([])

  const filterOptionsValue = async (cInvCode: string) => {
    const PrincipalRes = await api.ufmanage.postUfmanageBomverions({ cInvCode })
    options.value = (PrincipalRes.data || []).map(item => ({
      label: item.VersionDesc as string,
      value: item.BomId + '' as string
    }))
  }
  // onMounted(() => {
  //   filterOptionsValue('')
  // })
  return { options, filterOptionsValue }
}

/** 盘点明细任务号 */
export const useChecksummaryTasknumselect = () => {
  const options = ref<Option[]>([])

  onMounted(async () => {
    const dicRes = await api.checksummary.getChecksummaryTasknumselect({})
    options.value = (dicRes.data || []).map(item => ({
      label: item.Code || '',
      value: item.Code || ''
    }))
  })
  return options
}

/** 维修异常类型 */
export const useAbnormalTypeOptions = () => {
  const options = ref<Option[]>([])

  onMounted(async () => {
    const WorkRes = await api.sysdic.getSysdicSelect({
      typeId: '',
      typeCode: 'SBMJEXLX'
    })
    options.value = (WorkRes.data || []).map(item => ({
      label: item.Name as string,
      value: item.Code as string
    }))
  })
  return options
}

/** 系统用户 */
export const useUserOptions = () => {
  const options = ref<Option[]>([])

  onMounted(async () => {
    const res = await api.sysuser.postSysuserPage({
      limit: 9999,
      page: 1
    })
    options.value = (res.data || []).map(item => ({
      label: item.cPersonName as string,
      value: item.cPersonCode as string
    }))
  })
  return options
}

/** 故障分类 */
export const useFaultClassOptions = () => {
  const options = ref<Option[]>([])

  onMounted(async () => {
    const res = await api.faultclass.getFaultclassTreeSelect()
    const treeMap = (tree: definitions['TreeSelectDto'][] = [], prop: string[] = []): Option[] => {
      return tree.map(item => ({
        label: item.title || '',
        value: item.id || '',
        prop,
        children: treeMap(item.children || [], [...prop, item?.id || ''])
      }))
    }
    options.value = treeMap(res.data || [])
  })
  return options
}

/** 紧急程度 */
export const useUrgencyLevelOptions = () => {
  const options = ref<Option[]>([])

  onMounted(async () => {
    const WorkRes = await api.sysdic.getSysdicSelect({
      typeId: '',
      typeCode: 'URGLEVEL'
    })
    options.value = (WorkRes.data || []).map(item => ({
      label: item.Name as string,
      value: item.Code as string
    }))
  })
  return options
}
