import api from '@/api'

interface Permissions {
  /** 新增 */
  add: string,
  /** 保存 */
  save: string,
  /** 编辑 */
  edit: string,
  /** 删除 */
  remove: string,
  /** 审核 */
  review: string,
  /** 审核接口 */
  reviewApi: Function | null,
  /** 弃审 */
  abandonment: string,
  /** 打印 */
  print: string,
  /** 打印接口 */
  printApi: Function | null
}

export interface RouterToBtnPermissions {
  [propName: string]: Permissions
}

const routerToBtnPermissions: RouterToBtnPermissions = {
  /** 生产派工单(详情) */
  '/business/momshift': {
    add: 'momshiftAdd',
    save: '',
    edit: 'momshiftEdit',
    remove: 'momshiftDel',
    review: 'momshiftAudt',
    reviewApi: api.momshift.postMomshiftAudit,
    abandonment: 'momshiftAudt',
    print: 'momshiftPrint',
    printApi: api.momshift.postMomshiftPrint
  },
  /** 生产派工单(新增) */
  '/business/momshiftAdd': {
    add: '',
    save: 'momshiftSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 生产派工单(编辑) */
  '/business/momshiftEdit': {
    add: '',
    save: 'momshiftSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 报工单 */
  '/business/mobill': {
    add: '',
    save: '',
    edit: '',
    remove: 'mobillDel',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 盘点汇总单 */
  '/checks/checksSum': {
    add: 'checksSumAdd',
    save: '',
    edit: 'checksSumEdit',
    remove: 'checksSumDel',
    review: 'checksSumAudt',
    reviewApi: api.checksummary.postChecksummaryDoaudit,
    abandonment: 'checksSumAudt',
    print: '',
    printApi: null
  },
  /** 盘点汇总单新增 */
  '/checks/checksSumAdd': {
    add: '',
    save: 'checksSumSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 盘点汇总单编辑 */
  '/checks/checksSumEdit': {
    add: '',
    save: 'checksSumSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 产品工序设备产能对照 */
  '/business/CapacityCompare': {
    add: 'CapacityCompareAdd',
    save: '',
    edit: 'CapacityCompareEdit',
    remove: 'CapacityCompareDel',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 产品工序设备产能对照(新增) */
  '/business/CapacityCompareAdd': {
    add: '',
    save: 'CapacityCompareSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 产品工序设备产能对照(编辑) */
  '/business/CapacityCompareEdit': {
    add: '',
    save: 'CapacityCompareSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  // 申请
  /** 维修申请(设备) */
  '/console/RADevice': {
    add: 'RADeviceBtnAdd',
    save: '',
    edit: 'RADeviceBtnEdit',
    remove: 'RADeviceBtnRemove',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 维修申请(设备)(新增) */
  '/console/RADeviceAdd': {
    add: '',
    save: 'RADeviceBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 维修申请(设备)(编辑) */
  '/console/RADeviceEdit': {
    add: '',
    save: 'RADeviceBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 维修申请(模具) */
  '/console/RAMold': {
    add: 'RAMoldBtnAdd',
    save: '',
    edit: 'RAMoldBtnEdit',
    remove: 'RAMoldBtnRemove',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 维修申请(模具)(新增) */
  '/console/RAMoldAdd': {
    add: '',
    save: 'RAMoldBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 维修申请(模具)(编辑) */
  '/console/RAMoldEdit': {
    add: '',
    save: 'RAMoldBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 保养申请(设备) */
  '/console/MADevice': {
    add: 'MADeviceBtnAdd',
    save: '',
    edit: 'MADeviceBtnEdit',
    remove: 'MADeviceBtnRemove',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 保养申请(设备)(新增) */
  '/console/MADeviceAdd': {
    add: '',
    save: 'MADeviceBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 保养申请(设备)(编辑) */
  '/console/MApDeviceEdit': {
    add: '',
    save: 'MADeviceBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 保养申请(模具) */
  '/console/MAMold': {
    add: 'MAMoldBtnAdd',
    save: '',
    edit: 'MAMoldBtnEdit',
    remove: 'MAMoldBtnRemove',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 保养申请(模具)(新增) */
  '/console/MAMoldAdd': {
    add: '',
    save: 'MAMoldBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 保养申请(模具)(编辑) */
  '/console/MApMoldEdit': {
    add: '',
    save: 'MAMoldBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  // 工单
  /** 维修工单(设备) */
  '/console/RODevice': {
    add: 'RODeviceBtnAdd',
    save: '',
    edit: 'RODeviceBtnEdit',
    remove: 'RODeviceBtnRemove',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 维修工单(设备)(新增) */
  '/console/RODeviceAdd': {
    add: '',
    save: 'RODeviceBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 维修工单(设备)(编辑) */
  '/console/RODeviceEdit': {
    add: '',
    save: 'RODeviceBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 维修工单(模具) */
  '/console/ROMold': {
    add: 'ROMoldBtnAdd',
    save: '',
    edit: 'ROMoldBtnEdit',
    remove: 'ROMoldBtnRemove',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 维修工单(模具)(新增) */
  '/console/ROMoldAdd': {
    add: '',
    save: 'ROMoldBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 维修工单(模具)(编辑) */
  '/console/ROMoldEdit': {
    add: '',
    save: 'ROMoldBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 保养工单(设备) */
  '/console/MODevice': {
    add: 'MODeviceBtnAdd',
    save: '',
    edit: 'MODeviceBtnEdit',
    remove: 'MODeviceBtnRemove',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 保养工单(设备)(新增) */
  '/console/MODeviceAdd': {
    add: '',
    save: 'MODeviceBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 保养工单(设备)(编辑) */
  '/console/MODeviceEdit': {
    add: '',
    save: 'MODeviceBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 保养工单(模具) */
  '/console/MOMold': {
    add: 'MOMoldBtnAdd',
    save: '',
    edit: 'MOMoldBtnEdit',
    remove: 'MOMoldBtnRemove',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 保养工单(模具)(新增) */
  '/console/MOMoldAdd': {
    add: '',
    save: 'MOMoldBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 保养工单(模具)(编辑) */
  '/console/MOMoldEdit': {
    add: '',
    save: 'MOMoldBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  // 计划
  /** 维修计划(设备) */
  '/console/RSDevice': {
    add: 'RSDeviceBtnAdd',
    save: '',
    edit: 'RSDeviceBtnEdit',
    remove: 'RSDeviceBtnRemove',
    review: 'RSDeviceBtnAudit',
    reviewApi: api.wxbyplan.postWxbyplanAudit,
    abandonment: 'RSDeviceBtnAbandonment',
    print: '',
    printApi: null
  },
  /** 维修计划(设备)(新增) */
  '/console/RSDeviceAdd': {
    add: '',
    save: 'RSDeviceBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 维修计划(设备)(编辑) */
  '/console/RSDeviceEdit': {
    add: '',
    save: 'RSDeviceBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 保养计划(设备) */
  '/console/MSDevice': {
    add: 'MSDeviceBtnAdd',
    save: '',
    edit: 'MSDeviceBtnEdit',
    remove: 'MSDeviceBtnRemove',
    review: 'MSDeviceBtnAudit',
    reviewApi: api.wxbyplan.postWxbyplanAudit,
    abandonment: 'MSDeviceBtnAbandonment',
    print: '',
    printApi: null
  },
  /** 保养计划(设备)(新增) */
  '/console/MSDeviceAdd': {
    add: '',
    save: 'MSDeviceBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 保养计划(设备)(编辑) */
  '/console/MSDeviceEdit': {
    add: '',
    save: 'MSDeviceBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 维修计划(模具) */
  '/console/RSMold': {
    add: 'RSMoldBtnAdd',
    save: '',
    edit: 'RSMoldBtnEdit',
    remove: 'RSMoldBtnRemove',
    review: 'RSMoldBtnAudit',
    reviewApi: api.wxbyplan.postWxbyplanAudit,
    abandonment: 'RSMoldBtnAbandonment',
    print: '',
    printApi: null
  },
  /** 维修计划(模具)(新增) */
  '/console/RSMoldAdd': {
    add: '',
    save: 'RSMoldBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 维修计划(模具)(编辑) */
  '/console/RSMoldEdit': {
    add: '',
    save: 'RSMoldBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 保养计划(模具) */
  '/console/MSMold': {
    add: 'MSMoldBtnAdd',
    save: '',
    edit: 'MSMoldBtnEdit',
    remove: 'MSMoldBtnRemove',
    review: 'MSMoldBtnAudit',
    reviewApi: api.wxbyplan.postWxbyplanAudit,
    abandonment: 'MSMoldBtnAbandonment',
    print: '',
    printApi: null
  },
  /** 保养计划(模具)(新增) */
  '/console/MSMoldAdd': {
    add: '',
    save: 'MSMoldBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  },
  /** 保养计划(模具)(编辑) */
  '/console/MSMoldEdit': {
    add: '',
    save: 'MSMoldBtnSave',
    edit: '',
    remove: '',
    review: '',
    reviewApi: null,
    abandonment: '',
    print: '',
    printApi: null
  }
}

export default routerToBtnPermissions
