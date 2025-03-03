/**
 * 存货接口
 */
export interface InvItem {
  /** 编码 */
  cInvCode: string,
  /** 名称 */
  cInvName: string,
  /** 代码 */
  cInvAddCode: string,
  /** 规格型号 */
  cInvStd: string,
  /** 分类编码 */
  cInvCCode: string,
  /** 分类名称 */
  cInvCName: string,
  /** 计量单位 */
  cComUnitName: string,
  /** 计划id */
  PRoutingId: string,
}

export interface DevItem {
  /** 设备id */
  Id: string,
  /** 设备编码 */
  Code: string,
  /** 设备名称 */
  Name: string,
  /** 设备型号 */
  Model: string,
  /** 设备序列号 */
  SN: string,
  /** 采购日期 */
  PurDate: string,
  /** 设备状态<br/>
   0 = Normal，正常<br/>
   1 = Repair，维修<br/>
   2 = Maintenance，保养<br/>
   3 = Scrap，报废<br/>
   100 = ALL，全部 */
  DeviceStateDesc: string,
  /** 分类名称 */
  TypeName: string,
  /** 车间 */
  WorkShop: string,
}
