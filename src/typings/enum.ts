/** 表单标识 */
export enum FormTag {
  /** 要货需求(请购) */
  PR = 'PR',
  /** 采购(采购) */
  PO = 'PO',
  /** 销售单(销售) */
  SO = 'SO',
  /** 需求汇总(汇总请购单) */
  CR = 'CR',
  /** 调价单(调价单) */
  TJ = 'TJ',
  /** 入库单 */
  RD = 'RD',
}

/** 单据状态枚举 */
export enum BillStatus {
  /** 全部 */
  ALL = 0,

  /** 待审核 */
  PENDING = 1,

  /** 已审核 */
  AUDITED = 2,

  /** 驳回 */
  REJECT = 3,
}

/** 流程实例状态枚举 */
export enum FlowStatus {
  /** 保存 */
  SAVE = 0,

  /** 处理 */
  REVIEWED = 1,

  /** 通过 */
  EFFECTIVE = 2,

  /** 驳回 */
  EXPIRED = 3,

  /** 撤销 */
  TERMINATED = 4,

  /** 终止 */
  CLOSED = 5
}

/** 单据状态枚举 */
export enum DevceStatus {
  /** 正常 */
  NORMAL = 0,

  /** 维修 */
  REPAIR = 1,

  /** 保养 */
  MAINTENANCE = 2,

  /** 报废 */
  SCRAP = 3,

  /** 在用 */
  InUse = 4,

  /** 待维修 */
  WaitRepair = 5,

  /** 待保养 */
  WaitMaintenance = 6,

  /** 全部 */
  ALL = 100,
}

/** 标签类型 */
export enum LabelType {
  /** 流转卡 */
  FLOW_CARD = 1,
  /** 产成品入库 */
  IN_WARE = 2,
  /** 存货 */
  INVENTORY = 3,
  /** 货位 */
  POSITION = 4,
  /** ASN箱码 */
  ASN = 5,
  /** 库存生码 */
  STOCK = 8,
  /** 采购到货 */
  PUARR=6,
  /** 工序流转卡 */
  OP_FLOW_CARD = 7,
  // 设备
  DEVICE=9,
  /** 模具 */
  MOLD = 10
}

/** 模具状态 */
export enum CollectState {
  /** 全部 */
  ALL = -1,
  /** 领用 */
  COLLECT = 1,
  /** 归还 */
  RETURN = 2,
  /** 待领用 */
  WAIT_COLLECT = 3,
  /** 未分配 */
  UNASSIGNED = 4,
}

/** 任务状态 */
export enum TaskState {
  PENDING = 0,
  RECEIVED = 1,
  SUSPEND = 2,
  RECOVERY = 3,
  STARTED = 4,
  FINISHED = 5,
  TRANS_ED = 6,
  CLOSED = 7,
  ALL = 100
}

/** 盘点任务状态 */
export enum ChecksTaskState {
  NEW = 0,
  TAKINGSTOCK = 1,
  SUSPEND = 2,
  RECOVER = 3,
  TERMINATE = 4,
  ALL = 100
}

/** 盘点任务状态 */
export enum State {
  Normal = 0,
  Repair = 1,
  Maintenance = 2,
  Scrap = 3,
  InUse = 4,
  WaitRepair = 5,
  WaitMaintenance = 6,
  ALL = 100
}

/** 盘点任务状态 */
export enum StateDevice {
  Normal = 0,
  Repair = 1,
  Maintenance = 2,
  Scrap = 3,
  InUse= 4,
  WaitRepair= 5,
  WaitMaintenance= 6,
  ALL = 100
}

/** 首尾页标识枚举 */
export enum FirstOrLast {
  /** 只有一页 */
  ONE = 'one',
  /**  首页 */
  FIRST = 'First',
  /**  尾页 */
  LAST = 'Last',
  /** 其他 */
  OTHER = 'other'
}
