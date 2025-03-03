export interface LJsonResultASNHeadDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: ASNHeadDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface ASNHeadDto {
  /** ID 修改时需要传 */
  Id?: string | null,
  /** ASN单号 */
  ASNCode?: string | null,
  /** 订单日期 */
  dDate?: string | null,
  /** 预计到货日期 */
  dArriveDate?: string | null,
  /** 备注 */
  Remark?: string | null,
  }

export interface ASNSaveReqDto {
  /** 表头 */
  HeadDto: ASNHeadDto,
  /** 表体集合 */
  BodyDtos?: ASNBodyBaseDto[],
  /** 来源订单类型<br/>
  0 = POORDER，采购订单<br/>
  1 = QM01，来料报检单<br/>
  1 = QM01，来料报检单<br/>
  2 = OtherRd，其他入库单<br/>
  3 = RdRecord，采购入库单<br/>
  4 = PuArr，采购到货单<br/>
  5 = QM05，产品不良品处理单<br/>
  6 = QMCheckVoucher，来料检验单<br/>
  16 = QM16，工序不良品处理单<br/>
  17 = SoMain，销售订单<br/>
  18 = QM18，发退货不良品处理单<br/>
  19 = QM19，其他不良品处理单<br/>
  21 = MomOrder，生产订单<br/>
  26 = SaleBillZVouch，销售专用发票<br/>
  27 = SaleBillVouch，销售发票<br/>
  31 = FC31，生产订单工序转移单<br/>
  48 = RR，收款单<br/>
  49 = RP，付款单<br/>
  71 = Dispatch，销售发货单<br/>
  90 = MomReport，订单报工<br/>
  111 = PurBillVouch，采购发票<br/>
  112 = PurBillZVouch，采购专用发票<br/>
  121 = HYMomOrder，委外加工单<br/>
  303 = SaleOut，销售出库单<br/>
  313 = Adjust，货位调整单<br/>
  314 = ScrapVoucher，不合格品记录单<br/>
  411 = Rdrecord10，产成品入库单<br/>
  411 = Rdrecord10，产成品入库单<br/>
  412 = MaterialOutStock，材料出库单 */
  OrderType?: number | null,
  }

export interface ASNBodyBaseDto {
  /** 主表ID */
  MainId?: string | null,
  /** 采购/委外订单子表ID */
  IPosId: string,
  /** 存货编码 */
  cInvCode: string,
  /** 发货数量 */
  DQty?: number | null,
  /** 发货批次 */
  cBatch?: string | null,
  /** 表体备注 */
  dRemark?: string | null,
  }

export interface LJsonResult {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface BaseDelReqDto {
  /** 删除的ID集合 */
  Ids: string[],
  }

export interface BaseAuditReqDto {
  /** ID */
  Id: string,
  /** 审核状态<br/>
  0 = ALL，全部<br/>
  1 = PENDING，待审核<br/>
  2 = AUDITED，已审核<br/>
  3 = REJECT，驳回 */
  AuditState: number,
  /** 审核意见 */
  AuditRmind?: string | null,
  }

export interface LJsonResultListString {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: string[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface QueryVouchInfoBaseReqDto {
  /** 单据ID */
  Id?: string | null,
  /** 查询方式<br/>
  0 = ALL，默认<br/>
  1 = FIRST，第一张<br/>
  2 = PREVIOUS，上一页<br/>
  3 = NEXT，下一页<br/>
  4 = FINAL，最后一页 */
  Way?: number | null,
  }

export interface LJsonResultASNInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: ASNInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface ASNInfoDto {
  /** 供应商编码 */
  cVenCode?: string | null,
  /** 供应商名称 */
  cVenName?: string | null,
  /** U8到货单号 */
  U8ArrCode?: string | null,
  /** 审核意见 */
  AuditRmind?: string | null,
  /** 审核状态<br/>
  0 = ALL，全部<br/>
  1 = PENDING，待审核<br/>
  2 = AUDITED，已审核<br/>
  3 = REJECT，驳回 */
  AuditState?: number | null,
  /** 审核人名称 */
  AuditorName?: string | null,
  /** 审核时间 */
  AuditTime?: string | null,
  /** 发货状态<br/>
  0 = WatCheck，待确认<br/>
  1 = WaitShip，待发货<br/>
  2 = Shiped，已发货<br/>
  3 = Arrived，已到货<br/>
  4 = NoPass，不通过<br/>
  100 = ALL，全部 */
  ShipState?: number | null,
  /** 制单时间 */
  CreatedTime?: string | null,
  /** 制单人 */
  CreatedUserName?: string | null,
  /** ASN是否打印 */
  BPrint?: boolean,
  /** ASN单打印次数 */
  PrinCount?: number | null,
  /** 来源订单类型<br/>
  0 = POORDER，采购订单<br/>
  1 = QM01，来料报检单<br/>
  1 = QM01，来料报检单<br/>
  2 = OtherRd，其他入库单<br/>
  3 = RdRecord，采购入库单<br/>
  4 = PuArr，采购到货单<br/>
  5 = QM05，产品不良品处理单<br/>
  6 = QMCheckVoucher，来料检验单<br/>
  16 = QM16，工序不良品处理单<br/>
  17 = SoMain，销售订单<br/>
  18 = QM18，发退货不良品处理单<br/>
  19 = QM19，其他不良品处理单<br/>
  21 = MomOrder，生产订单<br/>
  26 = SaleBillZVouch，销售专用发票<br/>
  27 = SaleBillVouch，销售发票<br/>
  31 = FC31，生产订单工序转移单<br/>
  48 = RR，收款单<br/>
  49 = RP，付款单<br/>
  71 = Dispatch，销售发货单<br/>
  90 = MomReport，订单报工<br/>
  111 = PurBillVouch，采购发票<br/>
  112 = PurBillZVouch，采购专用发票<br/>
  121 = HYMomOrder，委外加工单<br/>
  303 = SaleOut，销售出库单<br/>
  313 = Adjust，货位调整单<br/>
  314 = ScrapVoucher，不合格品记录单<br/>
  411 = Rdrecord10，产成品入库单<br/>
  411 = Rdrecord10，产成品入库单<br/>
  412 = MaterialOutStock，材料出库单 */
  OrderType?: number | null,
  /** 表体集合 */
  BodyDtos?: ASNBodyInfoDto[],
  /** 动态列表 */
  DynamicDtos?: ASNDynamicDto[],
  /** ID 修改时需要传 */
  Id?: string | null,
  /** ASN单号 */
  ASNCode?: string | null,
  /** 订单日期 */
  dDate?: string | null,
  /** 预计到货日期 */
  dArriveDate?: string | null,
  /** 备注 */
  Remark?: string | null,
  }

export interface ASNBodyInfoDto {
  /** 表体ID */
  Id?: string | null,
  /** 采购订单号 */
  cPOID?: string | null,
  /** 采购订单日期 */
  dPoDate?: string | null,
  /** 采购订单主表ID */
  POID?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 主计量 */
  cComUnitName?: string | null,
  /** 订单数量 */
  PoQty?: number | null,
  /** 主表ID */
  MainId?: string | null,
  /** 采购/委外订单子表ID */
  IPosId: string,
  /** 存货编码 */
  cInvCode: string,
  /** 发货数量 */
  DQty?: number | null,
  /** 发货批次 */
  cBatch?: string | null,
  /** 表体备注 */
  dRemark?: string | null,
  }

export interface ASNDynamicDto {
  /** 主表ID */
  MainId?: string | null,
  /** 动态内容 */
  DyConent?: string | null,
  /** 发起方<br/>
  0 = PDA，PDA<br/>
  1 = PC，PC端<br/>
  2 = VEN，供应商 */
  Sponsor?: number | null,
  /** 制单时间 */
  CreatedTime?: string | null,
  /** 制单人 */
  CreatedUserName?: string | null,
  /** ID */
  Id?: string | null,
  }

export interface QueryASNListReqDto {
  /** 发货状态<br/>
  0 = WatCheck，待确认<br/>
  1 = WaitShip，待发货<br/>
  2 = Shiped，已发货<br/>
  3 = Arrived，已到货<br/>
  4 = NoPass，不通过<br/>
  100 = ALL，全部 */
  ShipState?: number | null,
  /** 审核状态<br/>
  0 = ALL，全部<br/>
  1 = PENDING，待审核<br/>
  2 = AUDITED，已审核<br/>
  3 = REJECT，驳回 */
  AuditState?: number | null,
  /** 订单日期开始 */
  dDateBegin?: string | null,
  /** 订单日期结束 */
  dDateEnd?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListASNListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: ASNListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface ASNListDto {
  /** 供应商编码 */
  cVenCode?: string | null,
  /** 供应商名称 */
  cVenName?: string | null,
  /** U8到货单号 */
  U8ArrCode?: string | null,
  /** 审核意见 */
  AuditRmind?: string | null,
  /** 审核状态<br/>
  0 = ALL，全部<br/>
  1 = PENDING，待审核<br/>
  2 = AUDITED，已审核<br/>
  3 = REJECT，驳回 */
  AuditState?: number | null,
  /** 审核人名称 */
  AuditorName?: string | null,
  /** 审核时间 */
  AuditTime?: string | null,
  /** 发货状态<br/>
  0 = WatCheck，待确认<br/>
  1 = WaitShip，待发货<br/>
  2 = Shiped，已发货<br/>
  3 = Arrived，已到货<br/>
  4 = NoPass，不通过<br/>
  100 = ALL，全部 */
  ShipState?: number | null,
  /** 制单时间 */
  CreatedTime?: string | null,
  /** 制单人 */
  CreatedUserName?: string | null,
  /** 来源订单类型<br/>
  0 = POORDER，采购订单<br/>
  1 = QM01，来料报检单<br/>
  1 = QM01，来料报检单<br/>
  2 = OtherRd，其他入库单<br/>
  3 = RdRecord，采购入库单<br/>
  4 = PuArr，采购到货单<br/>
  5 = QM05，产品不良品处理单<br/>
  6 = QMCheckVoucher，来料检验单<br/>
  16 = QM16，工序不良品处理单<br/>
  17 = SoMain，销售订单<br/>
  18 = QM18，发退货不良品处理单<br/>
  19 = QM19，其他不良品处理单<br/>
  21 = MomOrder，生产订单<br/>
  26 = SaleBillZVouch，销售专用发票<br/>
  27 = SaleBillVouch，销售发票<br/>
  31 = FC31，生产订单工序转移单<br/>
  48 = RR，收款单<br/>
  49 = RP，付款单<br/>
  71 = Dispatch，销售发货单<br/>
  90 = MomReport，订单报工<br/>
  111 = PurBillVouch，采购发票<br/>
  112 = PurBillZVouch，采购专用发票<br/>
  121 = HYMomOrder，委外加工单<br/>
  303 = SaleOut，销售出库单<br/>
  313 = Adjust，货位调整单<br/>
  314 = ScrapVoucher，不合格品记录单<br/>
  411 = Rdrecord10，产成品入库单<br/>
  411 = Rdrecord10，产成品入库单<br/>
  412 = MaterialOutStock，材料出库单 */
  OrderType?: number | null,
  /** 表体ID */
  DId?: string | null,
  /** 采购订单号 */
  cPOID?: string | null,
  /** 采购订单日期 */
  dPoDate?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 主计量 */
  cComUnitName?: string | null,
  /** 订单数量 */
  PoQty?: number | null,
  /** 接收数量 */
  RQty?: number | null,
  /** 采购订单子表ID */
  IPosId?: string | null,
  /** 发货数量 */
  DQty?: number | null,
  /** 发货批次 */
  cBatch?: string | null,
  /** 表体备注 */
  dRemark?: string | null,
  /** ID 修改时需要传 */
  Id?: string | null,
  /** ASN单号 */
  ASNCode?: string | null,
  /** 订单日期 */
  dDate?: string | null,
  /** 预计到货日期 */
  dArriveDate?: string | null,
  /** 备注 */
  Remark?: string | null,
  }

export interface ASNConfirmReqDto {
  /** ASN单ID */
  Id: string,
  /** 说明-不通过需要传 */
  Remark?: string | null,
  /** 是否通过 */
  BPass?: boolean,
  /** 到货仓库编码（后台会判断如果采购订单类型是代管采购或者资产类，会做校验） */
  ArrWhCode?: string | null,
  }

export interface ASNDynamicSaveReqDto {
  /** ASN单ID */
  MainId: string,
  /** 动态内容 */
  DyContent: string,
  }

export interface LJsonResultListASNDynamicDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: ASNDynamicDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface ASNDeliveryReqDto {
  /** ASN单ID */
  Id: string,
  }

export interface ASNPrintReqDto {
  /** ASN单ID */
  Id: string,
  }

export interface LJsonResultBaseFileResDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: BaseFileResDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface BaseFileResDto {
  /** 文件名称 */
  FileName?: string | null,
  /** 文件路径 */
  FilePath?: string | null,
  /** 文件下载地址 */
  FileSrc?: string | null,
  /** 返回消息 */
  Msg?: string | null,
  /** 处理状态 */
  State?: boolean,
  }

export interface ASNBoxRawCodeReqDto {
  /** ASN单主表ID */
  ASNId: string,
  /** 包装数 */
  PackQty?: number | null,
  }

export interface LJsonResultBarCodeFileResDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: BarCodeFileResDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface BarCodeFileResDto {
  /** 条码列表 */
  FileDtos?: BarCodeFileDto[],
  /** 导出的PDF地址 */
  ExportPdfSrc?: string | null,
  }

export interface BarCodeFileDto {
  /** 条码 */
  BarCode?: string | null,
  /** 条码地址 */
  Src?: string | null,
  }

export interface BarCodeSaveReqDto {
  /** 标签类型<br/>
  1 = FLOWCARD，流转卡<br/>
  2 = INWARE，入库<br/>
  3 = INVENTORY，存货<br/>
  4 = POSITION，货位<br/>
  5 = ASN，ASN箱码<br/>
  6 = PUARR，采购到货<br/>
  7 = OPFLOWCARD，工序流转卡<br/>
  8 = STOCK，库存条码<br/>
  10 = MOLD，模具 */
  LabelType: number,
  /** 包装数 */
  PackQty?: number | null,
  /** 存货/货位/模具编码 */
  CodeList: string[],
  /** 生产计划ID集合 */
  PlanIds: string[],
  /** 入库单子表ID集合 */
  RdDIds: string[],
  /** ASN单子表ID集合 */
  ASNDIds: string[],
  /** 子表ID集合 */
  AutoIds: string[],
  /** 入库单号集合(预留参数给报工后入库的打码用) */
  RdCodes: string[],
  }

export interface BarCodePrintReqDto {
  /** 条码集合 */
  BarCodes: string[],
  /** 标签类型<br/>
  1 = FLOWCARD，流转卡<br/>
  2 = INWARE，入库<br/>
  3 = INVENTORY，存货<br/>
  4 = POSITION，货位<br/>
  5 = ASN，ASN箱码<br/>
  6 = PUARR，采购到货<br/>
  7 = OPFLOWCARD，工序流转卡<br/>
  8 = STOCK，库存条码<br/>
  10 = MOLD，模具 */
  LabelType: number,
  }

export interface QueryBarCodePageReqDto {
  /** 标签类型<br/>
  1 = FLOWCARD，流转卡<br/>
  2 = INWARE，入库<br/>
  3 = INVENTORY，存货<br/>
  4 = POSITION，货位<br/>
  5 = ASN，ASN箱码<br/>
  6 = PUARR，采购到货<br/>
  7 = OPFLOWCARD，工序流转卡<br/>
  8 = STOCK，库存条码<br/>
  10 = MOLD，模具 */
  LabelType: number,
  /** 存货编码（下拉表格选择） */
  cInvCode?: string | null,
  /** 条码生成的开始日期 */
  StartDate?: string | null,
  /** 条码生成的结束日期 */
  EndDate?: string | null,
  /** 单据号 */
  cCode?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListBarCodeBaseDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: BarCodeBaseDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface BarCodeBaseDto {
  /** ID */
  Id?: string | null,
  /** 标签类型<br/>
  1 = FLOWCARD，流转卡<br/>
  2 = INWARE，入库<br/>
  3 = INVENTORY，存货<br/>
  4 = POSITION，货位<br/>
  5 = ASN，ASN箱码<br/>
  6 = PUARR，采购到货<br/>
  7 = OPFLOWCARD，工序流转卡<br/>
  8 = STOCK，库存条码<br/>
  10 = MOLD，模具 */
  LabelType?: number | null,
  /** 条码 */
  BarCode?: string | null,
  /** 流水号 */
  CNumber?: number | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 数量 */
  Qty?: number | null,
  /** 每箱数量 */
  BoxQty?: number | null,
  /** 总箱数 */
  BoxNum?: number | null,
  /** 计划ID */
  PlanId?: string | null,
  /** 来源订单ID */
  SourceId?: string | null,
  /** 来源订单号 */
  SourceCode?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 创建者名称 */
  CreatedUserName?: string | null,
  }

export interface LJsonResultBarCodeInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: BarCodeInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface BarCodeInfoDto {
  /** 条码 */
  BarCode?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 数量 */
  Qty?: number | null,
  /** 批号 */
  cBatch?: string | null,
  /** 现存量 */
  StockQty?: number | null,
  /** 是否启用批次 */
  bInvBatch?: boolean,
  }

export interface StockBarCodeSaveReqDto {
  /** 存货编码 */
  cInvCode: string,
  /** 仓库编码 */
  cWhCode: string,
  /** 货位编码 */
  cPosCode?: string | null,
  /** 数量 */
  Qty?: number | null,
  /** 批号 */
  cBatch?: string | null,
  /** 生产日期 */
  dMadeDate?: string | null,
  /** 条码数量 */
  CodeNum?: number | null,
  }

export interface BasePageReqDto {
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListBarCodeDataSourceInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: BarCodeDataSourceInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface BarCodeDataSourceInfoDto {
  /** 主键 */
  Id?: string | null,
  /** 标签类型 */
  LabelTypeStr?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 创建者名称 */
  CreatedUserName?: string | null,
  /** 条码类型<br/>
  1 = FLOWCARD，流转卡<br/>
  2 = INWARE，入库<br/>
  3 = INVENTORY，存货<br/>
  4 = POSITION，货位<br/>
  5 = ASN，ASN箱码<br/>
  6 = PUARR，采购到货<br/>
  7 = OPFLOWCARD，工序流转卡<br/>
  8 = STOCK，库存条码<br/>
  10 = MOLD，模具 */
  LabelType: number,
  /** 数据源SQL(SQL最外层必须嵌套一个（SELECT * FROM (真正的自定义的SQL) TA ）,必须包含条码列) */
  SourceSql: string,
  /** 备注 */
  Remark?: string | null,
  }

export interface BarCodeDataSourceSaveReqDto {
  /** 条码类型<br/>
  1 = FLOWCARD，流转卡<br/>
  2 = INWARE，入库<br/>
  3 = INVENTORY，存货<br/>
  4 = POSITION，货位<br/>
  5 = ASN，ASN箱码<br/>
  6 = PUARR，采购到货<br/>
  7 = OPFLOWCARD，工序流转卡<br/>
  8 = STOCK，库存条码<br/>
  10 = MOLD，模具 */
  LabelType: number,
  /** 数据源SQL(SQL最外层必须嵌套一个（SELECT * FROM (真正的自定义的SQL) TA ）,必须包含条码列) */
  SourceSql: string,
  /** 备注 */
  Remark?: string | null,
  }

export interface CapacityCompareSaveReqDto {
  /** 车间ID */
  WorkShopId: string,
  /** 产品编码 */
  cInvCode: string,
  /** 工艺路线ID */
  ProutingId: string,
  /** 工序列表 */
  OpDtos?: CapacityOpDto[],
  }

export interface CapacityOpDto {
  /** 工序ID */
  OpId: string,
  /** 产能列表 */
  AgeingDetailDtos?: CapacityAgeingDetailDto[],
  }

export interface CapacityAgeingDetailDto {
  /** ID */
  Id?: string | null,
  /** 产能对象类型<br/>
  1 = DEVICE，设备<br/>
  2 = ARTIFICIAL，人工<br/>
  100 = ALL，全部 */
  CapacityType: number,
  /** 排产优先级 */
  ShiftLevel?: number | null,
  /** 产能对象类型描述 */
  CapacityTypeDesc?: string | null,
  /** 设备ID */
  DeviceId?: string | null,
  /** 设备产能 */
  DeviceAgeing?: number | null,
  /** 人工产能 */
  ArtificialAgeing?: number | null,
  /** 人数 */
  PersonNum?: number | null,
  /** 是否默认 */
  BDefault?: boolean,
  }

export interface QueryCapacityCompareInfoReqDo {
  /** 产品编码 */
  cInvCode?: string | null,
  /** 查询方式<br/>
  0 = ALL，默认<br/>
  1 = FIRST，第一张<br/>
  2 = PREVIOUS，上一页<br/>
  3 = NEXT，下一页<br/>
  4 = FINAL，最后一页 */
  Way?: number | null,
  }

export interface LJsonResultCapacityCompareInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: CapacityCompareInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface CapacityCompareInfoDto {
  /** 产品编码 */
  cInvCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 零件号 */
  cInvAddCode?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 计量单位 */
  cComunitName?: string | null,
  /** 工艺路线ID */
  ProutingId?: string | null,
  /** 工艺路线版本 */
  ProutingVer?: string | null,
  /** 工艺路线版本说明 */
  ProutingVerDesc?: string | null,
  /** 生产车间 */
  WorkShop?: string | null,
  /** 车间ID */
  WorkShopId?: string | null,
  /** 工序信息 */
  OpDtos?: CapacityOpInfoDto[],
  }

export interface CapacityOpInfoDto {
  /** 工序ID */
  OpId?: string | null,
  /** 工序行号 */
  OpSeq?: string | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 工作中心 */
  WcName?: string | null,
  /** 生效日期 */
  EffBegDate?: string | null,
  /** 失效日期 */
  EffEndDate?: string | null,
  /** 产能列表 */
  AgeingDetailDtos?: CapacityAgeingBodyDto[],
  }

export interface CapacityAgeingBodyDto {
  /** 设备编码 */
  DeviceCode?: string | null,
  /** 设备名称 */
  DeviceName?: string | null,
  /** 设备型号 */
  DeviceModel?: string | null,
  /** ID */
  Id?: string | null,
  /** 产能对象类型<br/>
  1 = DEVICE，设备<br/>
  2 = ARTIFICIAL，人工<br/>
  100 = ALL，全部 */
  CapacityType: number,
  /** 排产优先级 */
  ShiftLevel?: number | null,
  /** 产能对象类型描述 */
  CapacityTypeDesc?: string | null,
  /** 设备ID */
  DeviceId?: string | null,
  /** 设备产能 */
  DeviceAgeing?: number | null,
  /** 人工产能 */
  ArtificialAgeing?: number | null,
  /** 人数 */
  PersonNum?: number | null,
  /** 是否默认 */
  BDefault?: boolean,
  }

export interface QueryCapacityDetailReqDto {
  /** 产品编码 */
  cInvCode: string,
  /** 工艺路线ID */
  ProutingId: string,
  /** 车间ID */
  WorkShopId: string,
  }

export interface QueryCapacityComparePageReqDto {
  /** 车间ID */
  WorkShopId?: string | null,
  /** 产品编码 */
  cInvCode?: string | null,
  /** 工艺路线ID */
  ProutingId?: string | null,
  /** 工序ID */
  OpId?: string | null,
  /** 设备ID */
  DeviceId?: string | null,
  /** 产能对象类型<br/>
  1 = DEVICE，设备<br/>
  2 = ARTIFICIAL，人工<br/>
  100 = ALL，全部 */
  CapacityType?: number | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListCapacityCompareListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: CapacityCompareListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface CapacityCompareListDto {
  /** 产品编码 */
  cInvCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 零件号 */
  cInvAddCode?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 计量单位 */
  cComunitName?: string | null,
  /** 工艺路线版本 */
  ProutingVer?: string | null,
  /** 工艺路线版本说明 */
  ProutingVerDesc?: string | null,
  /** 生产车间 */
  WorkShop?: string | null,
  /** 工序行号 */
  OpSeq?: string | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 工作中心 */
  WcName?: string | null,
  /** 生效日期 */
  EffBegDate?: string | null,
  /** 失效日期 */
  EffEndDate?: string | null,
  /** 车间ID */
  WorkShopId?: string | null,
  /** 工艺路线ID */
  ProutingId?: string | null,
  /** 工序Id */
  OpId?: string | null,
  /** 设备ID */
  DeviceId?: string | null,
  /** 产能对象类型<br/>
  1 = DEVICE，设备<br/>
  2 = ARTIFICIAL，人工<br/>
  100 = ALL，全部 */
  CapacityType?: number | null,
  /** 排产优先级 */
  ShiftLevel?: number | null,
  /** 设备编码 */
  DeviceCode?: string | null,
  /** 设备名称 */
  DeviceName?: string | null,
  /** 设备型号 */
  DeviceModel?: string | null,
  /** 设备产能 */
  DeviceAgeing?: number | null,
  /** 人工产能 */
  ArtificialAgeing?: number | null,
  /** 人数 */
  PersonNum?: number | null,
  /** 是否默认 */
  BDefault?: boolean,
  /** 是否默认 */
  BDefaultStr?: string | null,
  }

export interface LJsonResultListBaseSelectDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: BaseSelectDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface BaseSelectDto {
  /** ID */
  Id?: string | null,
  /** 编码 */
  Code?: string | null,
  /** 名称 */
  Name?: string | null,
  }

export interface CheckDetailSaveReqDto {
  /** 盘点任务号 */
  TaskNum: string,
  /** 盘点信息 */
  DetailDtos: CheckDetailDto[],
  }

export interface CheckDetailDto {
  /** 标签卡号 */
  LabelNum: string,
  /** 盘点明细 */
  InfoDtos: CheckDetailInfoDto[],
  }

export interface CheckDetailInfoDto {
  /** 盘点仓库编码 */
  cWhCode: string,
  /** 存货编码 */
  cInvCode: string,
  /** 批号 */
  cCVBatch?: string | null,
  /** 货位编码 */
  cPosition?: string | null,
  /** 盘点数量 */
  iCVCQuantity?: number | null,
  }

export interface CheckDetailUpdReqDto {
  /** 盘点ID */
  Id: string,
  /** 盘点仓库编码 */
  cWhCode: string,
  /** 标签号 */
  LabelNum?: string | null,
  /** 批号 */
  cCVBatch?: string | null,
  /** 货位编码 */
  cPosition?: string | null,
  /** 盘点数量 */
  iCVCQuantity?: number | null,
  }

export interface QueryCheckDetailPageReqDto {
  /** 盘点任务号 */
  TaskNum?: string | null,
  /** 存货代码或编码 */
  cInvAddCode?: string | null,
  /** 标签号 */
  LabelNum?: string | null,
  /** 是否已汇总 */
  BSummary?: boolean,
  /** 仓库编码 */
  cWhCode?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListCheckDetailBaseDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: CheckDetailBaseDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface CheckDetailBaseDto {
  /** 盘点明细ID */
  Id?: string | null,
  /** 盘点任务ID */
  TaskId?: string | null,
  /** 任务号 */
  TaskNum?: string | null,
  /** 标签卡号 */
  LabelNum?: string | null,
  /** 盘点仓库编码 */
  cWhCode?: string | null,
  /** 仓库名称 */
  cWhName?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 批号 */
  cCVBatch?: string | null,
  /** 货位编码 */
  cPosition?: string | null,
  /** 盘点数量 */
  iCVCQuantity?: number | null,
  }

export interface LPJsonResultListCheckDetailListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: CheckDetailListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface CheckDetailListDto {
  /** 是否已汇总 */
  BSummary?: boolean,
  /** 是否已汇总 */
  BSummaryDesc?: string | null,
  /** 汇总单号 */
  SummaryCode?: string | null,
  /** 盘点时间 */
  CreatedTime?: string | null,
  /** 最后修改时间 */
  UpdatedTime?: string | null,
  /** 盘点人 */
  CreatedUserName?: string | null,
  /** 最后修改人 */
  UpdatedUserName?: string | null,
  /** 盘点明细ID */
  Id?: string | null,
  /** 盘点任务ID */
  TaskId?: string | null,
  /** 任务号 */
  TaskNum?: string | null,
  /** 标签卡号 */
  LabelNum?: string | null,
  /** 盘点仓库编码 */
  cWhCode?: string | null,
  /** 仓库名称 */
  cWhName?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 批号 */
  cCVBatch?: string | null,
  /** 货位编码 */
  cPosition?: string | null,
  /** 盘点数量 */
  iCVCQuantity?: number | null,
  }

export interface LJsonResultListWarehouseBaseDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: WarehouseBaseDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface WarehouseBaseDto {
  /** 仓库编码 */
  cWhCode?: string | null,
  /** 仓库名称 */
  cWhName?: string | null,
  /** 是否启用货位 */
  bWhPos?: boolean,
  /** 仓库属性 0：普通仓库 1：现场仓 */
  iWHProperty?: number | null,
  /** 仓库属性 */
  WHProperty?: string | null,
  /** 是否代管仓 */
  bProxyWh?: boolean,
  /** 是否资产仓 */
  bWhAsset?: boolean,
  /** 部门编码 */
  cDepCode?: string | null,
  /** 部门名称 */
  cDepName?: string | null,
  /** 电话 */
  cWhPhone?: string | null,
  /** 负责人 */
  cWhPerson?: string | null,
  /** 计价方式 */
  cWhValueStyle?: string | null,
  }

export interface QueryPendingSummaryDetailReqDto {
  /** 盘点任务ID */
  TaskId: string,
  /** 盘点仓库编码 */
  cWhCode: string,
  /** 盘点明细ID集合 */
  DetailIds: string[],
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListPendingSummaryDetailDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: PendingSummaryDetailDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface PendingSummaryDetailDto {
  /** 明细ID */
  Id?: string | null,
  /** 标签卡号 */
  LabelNum?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 批号 */
  cCVBatch?: string | null,
  /** 货位编码 */
  cPosition?: string | null,
  /** 盘点数量 */
  iCVCQuantity?: number | null,
  /** 盘点时间 */
  CreatedTime?: string | null,
  /** 盘点人 */
  CreatedUserName?: string | null,
  /** 任务号 */
  TaskNum?: string | null,
  /** 任务ID */
  TaskId?: string | null,
  /** 仓库编码 */
  cWhCode?: string | null,
  /** 仓库名称 */
  cWhName?: string | null,
  }

export interface LJsonResultListCheckSummaryBodyDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: CheckSummaryBodyDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface CheckSummaryBodyDto {
  /** 表体ID */
  Id?: string | null,
  /** 存货编码 */
  cInvCode: string,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 批号 */
  cCVBatch?: string | null,
  /** 货位编码 */
  cPosition?: string | null,
  /** 盘点数量 */
  iCVCQuantity?: number | null,
  /** 账面数 */
  iAcQuantity?: number | null,
  /** 盘盈数 */
  CheckWinQty?: number | null,
  /** 盘亏数 */
  CheckLossQty?: number | null,
  /** 备注 */
  dRemark?: string | null,
  /** 汇总记录ID列表 */
  DetailIds: string[],
  }

export interface CheckSummaryAddReqDto {
  /** 汇总单号 */
  SCode?: string | null,
  /** 盘点仓库 */
  cWhCode: string,
  /** 盘点任务ID */
  TaskId: string,
  /** 盘点日期 */
  dDate: string,
  /** 备注说明 */
  Remark?: string | null,
  /** 表体行数据 */
  BodyDtos: CheckSummaryBodyDto[],
  }

export interface CheckSummaryUpdDto {
  /** ID */
  Id: string,
  /** 盘点日期 */
  dDate: string,
  /** 备注 */
  Remark?: string | null,
  /** 表体行数据 */
  BodyDtos: CheckSummaryBodyDto[],
  }

export interface LJsonResultCheckSummaryInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: CheckSummaryInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface CheckSummaryInfoDto {
  /** 主表Id */
  Id?: string | null,
  /** 任务号 */
  TaskNum?: string | null,
  /** 盘点仓库名称 */
  cWhName?: string | null,
  /** 制单人 */
  CreateUser?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 审核状态<br/>
  0 = ALL，全部<br/>
  1 = PENDING，待审核<br/>
  2 = AUDITED，已审核<br/>
  3 = REJECT，驳回 */
  AuditState?: number | null,
  /** 审核状态 */
  AuditStateStr?: string | null,
  /** 审核人名称 */
  AuditorName?: string | null,
  /** 审核时间 */
  AuditTime?: string | null,
  /** U8盘点单号 */
  U8CvCode?: string | null,
  /** 是否已盘库 */
  BWhCheck?: boolean,
  /** 汇总单号 */
  SCode?: string | null,
  /** 盘点仓库 */
  cWhCode: string,
  /** 盘点任务ID */
  TaskId: string,
  /** 盘点日期 */
  dDate: string,
  /** 备注说明 */
  Remark?: string | null,
  /** 表体行数据 */
  BodyDtos: CheckSummaryBodyDto[],
  }

export interface QueryCheckSummaryListReqDto {
  /** 审核状态<br/>
  0 = ALL，全部<br/>
  1 = PENDING，待审核<br/>
  2 = AUDITED，已审核<br/>
  3 = REJECT，驳回 */
  AuditState?: number | null,
  /** 是否已盘库 不传查所有 */
  BWhCheck?: boolean,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListCheckSummaryListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: CheckSummaryListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface CheckSummaryListDto {
  /** 子表ID */
  Id?: string | null,
  /** 主表ID */
  MainId?: string | null,
  /** 汇总单号 */
  SCode?: string | null,
  /** 任务ID */
  TaskId?: string | null,
  /** 任务号 */
  TaskNum?: string | null,
  /** 盘点仓库编码 */
  cWhCode?: string | null,
  /** 盘点仓库名称 */
  cWhName?: string | null,
  /** 盘点日期 */
  dDate?: string | null,
  /** 备注 */
  Remark?: string | null,
  /** 制单人 */
  CreateUser?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 审核状态<br/>
  0 = ALL，全部<br/>
  1 = PENDING，待审核<br/>
  2 = AUDITED，已审核<br/>
  3 = REJECT，驳回 */
  AuditState?: number | null,
  /** 是否已盘库 */
  BWhCheck?: boolean,
  /** 是否已盘库 */
  BWhCheckDesc?: string | null,
  /** 审核状态 */
  AuditStateStr?: string | null,
  /** 审核人名称 */
  AuditorName?: string | null,
  /** 审核时间 */
  AuditTime?: string | null,
  /** U8盘点单号 */
  U8CvCode?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 盘点数量 */
  iCVCQuantity?: number | null,
  /** 账面数 */
  iAcQuantity?: number | null,
  /** 盘盈数 */
  CheckWinQty?: number | null,
  /** 盘亏数 */
  CheckLossQty?: number | null,
  /** 表体备注 */
  dRemark?: string | null,
  }

export interface CheckTaskSaveDto {
  /** 盘点任务号 */
  TaskNum: string,
  /** 盘点日期（默认当天） */
  dCheckDate: string,
  /** 备注 */
  Remark?: string | null,
  /** 是否是新建状态 */
  bNew?: boolean,
  /** 是否新建即开始 */
  bNewAndStart?: boolean,
  }

export interface CheckTaskActionDto {
  /** 任务ID */
  Id: string,
  /** 任务状态 -只能是 1-4<br/>
  0 = NEW，新建<br/>
  1 = CHECKING，盘点中<br/>
  2 = SUSPEND，暂停<br/>
  3 = RECOVERY，恢复<br/>
  4 = FINISHED，结束<br/>
  100 = ALL，全部 */
  TaskState?: number | null,
  }

export interface QueryCheckTaskPageDto {
  /** 任务状态<br/>
  0 = NEW，新建<br/>
  1 = CHECKING，盘点中<br/>
  2 = SUSPEND，暂停<br/>
  3 = RECOVERY，恢复<br/>
  4 = FINISHED，结束<br/>
  100 = ALL，全部 */
  TaskState?: number | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListCheckTaskListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: CheckTaskListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface CheckTaskListDto {
  /** Id */
  Id?: string | null,
  /** 盘点任务号 */
  TaskNum?: string | null,
  /** 盘点日期 */
  dCheckDate?: string | null,
  /** 任务状态<br/>
  0 = NEW，新建<br/>
  1 = CHECKING，盘点中<br/>
  2 = SUSPEND，暂停<br/>
  3 = RECOVERY，恢复<br/>
  4 = FINISHED，结束<br/>
  100 = ALL，全部 */
  TaskState?: number | null,
  /** 备注 */
  Remark?: string | null,
  /** 流水号 */
  Idx?: number | null,
  /** 子表集合 */
  DetailEntities?: CheckDetailEntity[],
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 更新时间 */
  UpdatedTime?: string | null,
  /** 创建者Id */
  CreatedUserId?: string | null,
  /** 创建者名称 */
  CreatedUserName?: string | null,
  /** 修改者Id */
  UpdatedUserId?: string | null,
  /** 修改者名称 */
  UpdatedUserName?: string | null,
  /** 软删除 */
  IsDeleted?: boolean,
  /** 是否启用 */
  IsEnabled?: boolean,
  /** U8账套号 */
  AccId?: string | null,
  }

export interface CheckDetailEntity {
  /** 盘点任务ID */
  TaskId?: string | null,
  /** 标签卡号 */
  LabelNum?: string | null,
  /** 盘点仓库编码 */
  cWhCode?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 批号 */
  cCVBatch?: string | null,
  /** 货位编码 */
  cPosition?: string | null,
  /** 盘点数量 */
  iCVCQuantity?: number | null,
  /** 是否已汇总 */
  BSummary?: boolean,
  /** 汇总单号 */
  SummaryCode?: string | null,
  /** 汇总单子表ID */
  SummaryDId?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 更新时间 */
  UpdatedTime?: string | null,
  /** 创建者Id */
  CreatedUserId?: string | null,
  /** 创建者名称 */
  CreatedUserName?: string | null,
  /** 修改者Id */
  UpdatedUserId?: string | null,
  /** 修改者名称 */
  UpdatedUserName?: string | null,
  /** 软删除 */
  IsDeleted?: boolean,
  /** 是否启用 */
  IsEnabled?: boolean,
  /** U8账套号 */
  AccId?: string | null,
  /** 主键Id */
  Id?: string | null,
  }

export interface QueryCheckVouchStagDataReqDto {
  /** 盘点仓库编码 */
  cWhCode: string,
  /** 盘点日期 */
  dCVDate: string,
  /** 盘点部门 */
  cDepCode: string,
  }

export interface LJsonResultListCheckVouchInvDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: CheckVouchInvDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface CheckVouchInvDto {
  /** 存货名称 */
  cInvName?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 货位名称 */
  cPosName?: string | null,
  /** 存货编码 */
  cInvCode: string,
  /** 批号 */
  cCVBatch?: string | null,
  /** 货位编码 */
  cPosition?: string | null,
  /** 盘点数量 */
  iCVCQuantity?: number | null,
  }

export interface CheckVouchSaveReqDto {
  /** 盘点仓库编码 */
  cWhCode: string,
  /** 盘点日期 */
  dCVDate: string,
  /** 盘点部门 */
  cDepCode: string,
  /** 操作类型<br/>
  0 = Staging，暂存<br/>
  1 = Submit，提交<br/>
  2 = Check，验货 */
  ActionType: number,
  /** 存货明细列表 */
  InvDtos?: CheckVouchInvBaseDto[],
  /** 备注 */
  cMemo?: string | null,
  }

export interface CheckVouchInvBaseDto {
  /** 存货编码 */
  cInvCode: string,
  /** 批号 */
  cCVBatch?: string | null,
  /** 货位编码 */
  cPosition?: string | null,
  /** 盘点数量 */
  iCVCQuantity?: number | null,
  }

export interface DeviceSaveReqDto {
  /** 主键ID */
  Id?: string | null,
  /** 设备编码/代号 */
  Code: string,
  /** 设备名称 */
  Name: string,
  /** 设备型号 */
  Model?: string | null,
  /** 设备序列号 */
  SN?: string | null,
  /** 采购日期 */
  PurDate?: string | null,
  /** 设备类型编码（来源数据字典） */
  TypeCode: string,
  /** 备注/说明 */
  Remark?: string | null,
  /** 车间ID */
  WorkShopId?: string | null,
  /** 设备状态<br/>
  0 = Normal，正常<br/>
  1 = Repair，维修<br/>
  2 = Maintenance，保养<br/>
  3 = Scrap，报废<br/>
  4 = InUse，在用<br/>
  100 = ALL，全部 */
  DeviceState?: number | null,
  /** 是否排产 */
  BAPS?: boolean,
  }

export interface LJsonResultDeviceInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: DeviceInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface DeviceInfoDto {
  /** 分类名称 */
  TypeName?: string | null,
  /** 车间 */
  WorkShop?: string | null,
  /** 是否排产设备 */
  BAPSStr?: string | null,
  /** 设备状态 */
  DeviceStateDesc?: string | null,
  /** 创建人 */
  CreatedUserName?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 主键ID */
  Id?: string | null,
  /** 设备编码/代号 */
  Code: string,
  /** 设备名称 */
  Name: string,
  /** 设备型号 */
  Model?: string | null,
  /** 设备序列号 */
  SN?: string | null,
  /** 采购日期 */
  PurDate?: string | null,
  /** 设备类型编码（来源数据字典） */
  TypeCode: string,
  /** 备注/说明 */
  Remark?: string | null,
  /** 车间ID */
  WorkShopId?: string | null,
  /** 设备状态<br/>
  0 = Normal，正常<br/>
  1 = Repair，维修<br/>
  2 = Maintenance，保养<br/>
  3 = Scrap，报废<br/>
  4 = InUse，在用<br/>
  100 = ALL，全部 */
  DeviceState?: number | null,
  /** 是否排产 */
  BAPS?: boolean,
  }

export interface QueryDevicePageReqDto {
  /** 分类编码集合 */
  TypeCodes: string[],
  /** 车间ID */
  WorkShopId?: string | null,
  /** 设备状态<br/>
  0 = Normal，正常<br/>
  1 = Repair，维修<br/>
  2 = Maintenance，保养<br/>
  3 = Scrap，报废<br/>
  4 = InUse，在用<br/>
  100 = ALL，全部 */
  DeviceState?: number | null,
  /** 是否只查排产设备 */
  BAPS?: boolean,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 工序ID */
  OpId?: string | null,
  /** 是根据产能对照表过滤 */
  BFilterCapacity?: boolean,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListDeviceInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: DeviceInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface LJsonResultListTreeSelectDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: TreeSelectDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface TreeSelectDto {
  /** 编码 */
  code?: string | null,
  /** 是否展开 */
  spread?: boolean,
  id?: string | null,
  title?: string | null,
  parentId?: string | null,
  hasChildren?: boolean,
  children?: TreeSelectDto[],
  }

export interface QueryDeviceByWorkShopAndOpReqDto {
  /** 车间ID */
  WorkShopId: string,
  /** 工序ID集合 */
  OpIds: string[],
  }

export interface LLJsonResultWorkShopOpDeviceDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: WorkShopOpDeviceDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface WorkShopOpDeviceDto {
  /** 工序ID */
  OpId?: string | null,
  /** 设备ID */
  DeviceId?: string | null,
  /** 设备编码 */
  DeviceCode?: string | null,
  /** 设备名称 */
  DeviceName?: string | null,
  }

export interface FaultClassBaseDto {
  /** ID */
  Id?: string | null,
  /** 编码 */
  Code: string,
  /** 名称 */
  Name: string,
  /** 是否启用 */
  IsEnabled?: boolean,
  /** 启用状态 */
  Enabled?: string | null,
  /** 备注 */
  Remark?: string | null,
  /** 所属上级ID */
  ParentId?: string | null,
  /** 所属上级名称 */
  ParentName?: string | null,
  }

export interface LJsonResultFaultClassInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: FaultClassInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface FaultClassInfoDto {
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 更新时间 */
  UpdatedTime?: string | null,
  /** 创建者名称 */
  CreatedUserName?: string | null,
  /** 修改者名称 */
  UpdatedUserName?: string | null,
  /** ID */
  Id?: string | null,
  /** 编码 */
  Code: string,
  /** 名称 */
  Name: string,
  /** 是否启用 */
  IsEnabled?: boolean,
  /** 启用状态 */
  Enabled?: string | null,
  /** 备注 */
  Remark?: string | null,
  /** 所属上级ID */
  ParentId?: string | null,
  /** 所属上级名称 */
  ParentName?: string | null,
  }

export interface LPJsonResultListFaultClassInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: FaultClassInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface QueryHyMoIssueListReqDto {
  /** 查询关键字（生产订单号/计划单号/流转卡条码） */
  keyWord?: string | null,
  }

export interface LJsonResultListHyMoIssueListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: HyMoIssueListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface HyMoIssueListDto {
  /** 生产订单主表ID */
  MoId?: number | null,
  /** 生产订单子表ID */
  MoDId?: number | null,
  /** 生产订单号 */
  MoCode?: string | null,
  /** 计划ID */
  PlanId?: string | null,
  /** 计划单号 */
  PlanCode?: string | null,
  /** 存货编码 */
  InvCode?: string | null,
  /** 存货名称 */
  InvName?: string | null,
  /** 开工日期 */
  StartDate?: string | null,
  /** 完工日期 */
  DueDate?: string | null,
  /** 委外工序Id */
  HyMoOpId?: string | null,
  /** 委外工序名称 */
  HyMoOpName?: string | null,
  /** 委外工序行号 */
  HyMoOpSeq?: number | null,
  /** 待发料总数量 */
  IssueQty?: number | null,
  /** 已发料总数量 */
  IssueQtyed?: number | null,
  /** 剩余可发料数量 */
  SyIssueQty?: number | null,
  }

export interface LJsonResultListHyMoReviceListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: HyMoReviceListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface HyMoReviceListDto {
  /** 生产订单主表ID */
  MoId?: number | null,
  /** 生产订单子表ID */
  MoDId?: number | null,
  /** 生产订单号 */
  MoCode?: string | null,
  /** 计划ID */
  PlanId?: string | null,
  /** 计划单号 */
  PlanCode?: string | null,
  /** 供应商编码 */
  cVenCode?: string | null,
  /** 供应商名称 */
  cVenName?: string | null,
  /** 存货编码 */
  InvCode?: string | null,
  /** 存货名称 */
  InvName?: string | null,
  /** 开工日期 */
  StartDate?: string | null,
  /** 完工日期 */
  DueDate?: string | null,
  /** 工序资料子表ID */
  MoRoutingDId?: string | null,
  /** 委外工序Id */
  HyMoOpId?: string | null,
  /** 委外工序名称 */
  HyMoOpName?: string | null,
  /** 委外工序行号 */
  HyMoOpSeq?: number | null,
  /** 待收料总数量 */
  ReceiveQty?: number | null,
  /** 已收料总数量 */
  ReceiveQtyed?: number | null,
  /** 剩余可收料总数量 */
  SyReceiveQty?: number | null,
  /** 恪守了明细信息 */
  BodyDtos?: HyMoOrderReviceInfoDto[],
  }

export interface HyMoOrderReviceInfoDto {
  /** 委外加工单号 */
  HyCode?: string | null,
  /** 委外加工单ID */
  HyId?: number | null,
  /** 委外加工单子表ID */
  HyDId?: number | null,
  /** 剩余可收料数量 */
  ExecQty?: number | null,
  }

export interface QueryHyMoOrderInfoReqDto {
  /** 流转卡条码 */
  BarCode: string,
  /** 扫描入口<br/>
  0 = ALL，全部<br/>
  1 = FOREIGN，委外发料<br/>
  2 = FOREIGN_RECEIVE，委外收料 */
  ScanEntry?: number | null,
  }

export interface LJsonResultHyMoOrderInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: HyMoOrderInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface HyMoOrderInfoDto {
  /** 生产订单主表ID */
  MoId?: number | null,
  /** 生产订单子表ID */
  MoDId?: number | null,
  /** 生产订单号 */
  MoCode?: string | null,
  /** 计划ID */
  PlanId?: string | null,
  /** 计划单号 */
  PlanCode?: string | null,
  /** 存货编码 */
  InvCode?: string | null,
  /** 存货名称 */
  InvName?: string | null,
  /** 开工日期 */
  StartDate?: string | null,
  /** 完工日期 */
  DueDate?: string | null,
  /** 工序集合 */
  OpDtos?: HyMoOrderOpDto[],
  }

export interface HyMoOrderOpDto {
  /** 委外工序Id */
  HyMoOpId?: string | null,
  /** 委外工序名称 */
  HyMoOpName?: string | null,
  /** 委外工序行号 */
  HyMoOpSeq?: number | null,
  /** 数量 */
  Qty?: number | null,
  /** 已操作数量 */
  Qtyed?: number | null,
  /** 剩余可操作数量 */
  SyQty?: number | null,
  }

export interface LJsonResultHyReviceScanInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: HyReviceScanInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface HyReviceScanInfoDto {
  /** 生产订单主表ID */
  MoId?: number | null,
  /** 生产订单子表ID */
  MoDId?: number | null,
  /** 生产订单号 */
  MoCode?: string | null,
  /** 计划ID */
  PlanId?: string | null,
  /** 计划单号 */
  PlanCode?: string | null,
  /** 存货编码 */
  InvCode?: string | null,
  /** 存货名称 */
  InvName?: string | null,
  /** 开工日期 */
  StartDate?: string | null,
  /** 完工日期 */
  DueDate?: string | null,
  /** 供应商列表 */
  VendorDtos?: HyReviceVendorDto[],
  }

export interface HyReviceVendorDto {
  /** 供应商编码 */
  cVenCode?: string | null,
  /** 供应商名称 */
  cVenName?: string | null,
  /** 工序实体 */
  OpDtos?: HyReviceOpInfoDto[],
  }

export interface HyReviceOpInfoDto {
  /** 委外工序Id */
  HyMoOpId?: string | null,
  /** 委外工序名称 */
  HyMoOpName?: string | null,
  /** 委外工序行号 */
  HyMoOpSeq?: number | null,
  /** 待收料总数量 */
  ReceiveQty?: number | null,
  /** 已收料总数量 */
  ReceiveQtyed?: number | null,
  /** 剩余可收料总数量 */
  SyReceiveQty?: number | null,
  }

export interface HyMoOrderSaveReqDto {
  /** 操作类型<br/>
  0 = ALL，全部<br/>
  1 = FOREIGN，委外发料<br/>
  2 = FOREIGN_RECEIVE，委外收料 */
  Entry: number,
  /** 供应商参数集合 */
  VenDtos: HyMoOrderVenDto[],
  }

export interface HyMoOrderVenDto {
  /** 委外供应商编码 */
  cVenCode: string,
  /** 单据日期（对应发料/收料） */
  dDate?: string | null,
  /** 备注 */
  Remark?: string | null,
  /** 工序明细列表 */
  OpDtos: HyMoOrderVenOpDto[],
  }

export interface HyMoOrderVenOpDto {
  /** 计划ID */
  PlanId: string,
  /** 工序ID */
  OpId: string,
  /** 工序名称 */
  OpName?: string | null,
  /** 存货编码 */
  cInvCode: string,
  /** 数量 */
  Qty: number,
  /** 不良数量（收料用） */
  ScrapQty?: number | null,
  /** 不良原因（收料用） */
  ScrapMsg?: string | null,
  }

export interface HyMoReviceSaveReqDto {
  /** 提交参数列表 */
  InputDtos: HyMoReviceInputDto[],
  }

export interface HyMoReviceInputDto {
  /** 计划ID */
  PlanId: string,
  /** 生产订单主表ID */
  MoId?: number | null,
  /** 生产订单子表ID */
  MoDId?: number | null,
  /** 供应商编码 */
  cVenCode: string,
  /** 工序ID */
  HyMoOpId: string,
  /** 收料数量 */
  ReviceQty?: number | null,
  /** 不良数量 */
  ScrapQty?: number | null,
  /** 不良原因 */
  Reason?: string | null,
  }

export interface QueryHyMoReviceScrapReqDto {
  /** 计划ID */
  PlanId?: string | null,
  /** 工序ID */
  OpId?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListHyMoReviceScrapDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: HyMoReviceScrapDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface HyMoReviceScrapDto {
  /** 生产订单号 */
  MoCode?: string | null,
  /** 计划单号 */
  PlanCode?: string | null,
  /** 行号 */
  SortSeq?: number | null,
  /** 存货编码 */
  InvCode?: string | null,
  /** 存货名称 */
  InvName?: string | null,
  /** 生产订单数量 */
  MoQty?: number | null,
  /** 下达数量 */
  IssueQty?: number | null,
  /** 开工日期 */
  StartDate?: string | null,
  /** 完工日期 */
  DueDate?: string | null,
  /** 生产订单主表ID */
  MoId?: number | null,
  /** 生产订单子表ID */
  MoDId?: number | null,
  /** 计划ID */
  PlanId?: string | null,
  /** 工序ID */
  OpId?: string | null,
  /** 工序行号 */
  OpSeq?: number | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 不良数量 */
  ScrapQty?: number | null,
  /** 不良原因 */
  Reason?: string | null,
  /** 创建时间 */
  CreateTime?: string | null,
  /** 主键Id */
  Id?: number | null,
  /** U8账套号 */
  AccId?: string | null,
  }

export interface QueryLeaveDocPageReqDto {
  /** 车间Id */
  WorkShopId?: string | null,
  /** 班组ID */
  TeamGroupId?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListLeaveDocInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: LeaveDocInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface LeaveDocInfoDto {
  /** 车间名称 */
  WorkShopName?: string | null,
  /** 班组名称 */
  TeamGroupName?: string | null,
  /** 制单人 */
  CreatedUserName?: string | null,
  /** 制单日期 */
  CreatedTime?: string | null,
  /** 生效状态 */
  IsEnabled?: boolean,
  /** 生效状态 */
  IsEnabledStr?: string | null,
  /** 修改时需要传 */
  Id: string,
  /** 单号 */
  DocCode?: string | null,
  /** 所属车间Id */
  WorkShopId: string,
  /** 所属班组Id */
  TeamGroupId: string,
  /** 请假人员编码 */
  cPersonCode: string,
  /** 请假人员名称 */
  cPerson?: string | null,
  /** 开始时间 */
  StartTime: string,
  /** 结束时间 */
  EndTime: string,
  /** 请假原因 */
  Reason?: string | null,
  }

export interface LeaveDocSaveReqDto {
  /** 修改时需要传 */
  Id: string,
  /** 单号 */
  DocCode?: string | null,
  /** 所属车间Id */
  WorkShopId: string,
  /** 所属班组Id */
  TeamGroupId: string,
  /** 请假人员编码 */
  cPersonCode: string,
  /** 请假人员名称 */
  cPerson?: string | null,
  /** 开始时间 */
  StartTime: string,
  /** 结束时间 */
  EndTime: string,
  /** 请假原因 */
  Reason?: string | null,
  }

export interface QueryAccListReqDto {
  /** 用户密码 */
  cPassWord?: string | null,
  /** 用户ID */
  cUserId: string,
  /** 登录系统（默认PC）<br/>
  0 = PDA，PDA<br/>
  1 = PC，PC端<br/>
  2 = VEN，供应商 */
  SystemType?: number | null,
  }

export interface LJsonResultListUAccInfoRepDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: UAccInfoRepDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface UAccInfoRepDto {
  /** 账套编号 */
  sAccId?: string | null,
  /** 账套名称 */
  sAccName?: string | null,
  }

export interface LoginReqDto {
  /** 账套ID */
  sAccId: string,
  /** PDA登陆时必传 */
  uuid: string,
  /** 是否强制登录，将其他客户端踢下线 */
  ForceLogin?: boolean,
  /** 用户密码 */
  cPassWord?: string | null,
  /** 用户ID */
  cUserId: string,
  /** 登录系统（默认PC）<br/>
  0 = PDA，PDA<br/>
  1 = PC，PC端<br/>
  2 = VEN，供应商 */
  SystemType?: number | null,
  }

export interface LJsonResultLoginResDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: LoginResDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface LoginResDto {
  /** accessToken */
  accessToken?: string | null,
  /** 过期时间 */
  cExpiry?: string | null,
  /** 登录的用户ID */
  cUserId?: string | null,
  /** 登录用户名 */
  cUserName?: string | null,
  /** 登录的账套ID */
  cAccId?: string | null,
  /** 登录账套名称 */
  cAccName?: string | null,
  /** 登录系统类型<br/>
  0 = PDA，PDA<br/>
  1 = PC，PC端<br/>
  2 = VEN，供应商 */
  LoginSys?: number | null,
  /** WEBSOCKET连接地址(需要前端你自己拼上 ws://ip:port) */
  webSocketUrl?: string | null,
  /** 是否无任何权限 */
  BNonAnyAuth?: boolean,
  }

export interface AppDeviceLicenceBindReqDto {
  /** 设备型号 */
  DeviceModel?: string | null,
  /** 设备厂商 */
  DeviceVendor?: string | null,
  /** 设备的UUID */
  DevieceId: string,
  }

export interface MoldSaveReqDto {
  /** 修改时需传 */
  Id?: string | null,
  /** 模具编码/代号 */
  Code: string,
  /** 模具名称 */
  Name: string,
  /** 模具类型编码（来源数据字典） */
  MoldTypeCode?: string | null,
  /** 模穴数 */
  PCS?: number | null,
  /** 模具号 */
  Model?: string | null,
  /** 客户编码 */
  cCusCode?: string | null,
  /** 客户名称 */
  cCusName?: string | null,
  /** 备注 */
  Remark?: string | null,
  /** 车间ID */
  WorkShopId?: string | null,
  /** 模具状态<br/>
  0 = Normal，正常<br/>
  1 = Repair，维修<br/>
  2 = Maintenance，保养<br/>
  3 = Scrap，报废<br/>
  4 = InUse，在用<br/>
  100 = ALL，全部 */
  State?: number | null,
  /** 模具状态 */
  StateDesc?: string | null,
  }

export interface LJsonResultMoldInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: MoldInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface MoldInfoDto {
  /** 模具类型 */
  MoldType?: string | null,
  /** 车间 */
  WorkShop?: string | null,
  /** 创建人 */
  CreatedUserName?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 修改时需传 */
  Id?: string | null,
  /** 模具编码/代号 */
  Code: string,
  /** 模具名称 */
  Name: string,
  /** 模具类型编码（来源数据字典） */
  MoldTypeCode?: string | null,
  /** 模穴数 */
  PCS?: number | null,
  /** 模具号 */
  Model?: string | null,
  /** 客户编码 */
  cCusCode?: string | null,
  /** 客户名称 */
  cCusName?: string | null,
  /** 备注 */
  Remark?: string | null,
  /** 车间ID */
  WorkShopId?: string | null,
  /** 模具状态<br/>
  0 = Normal，正常<br/>
  1 = Repair，维修<br/>
  2 = Maintenance，保养<br/>
  3 = Scrap，报废<br/>
  4 = InUse，在用<br/>
  100 = ALL，全部 */
  State?: number | null,
  /** 模具状态 */
  StateDesc?: string | null,
  }

export interface QueryMoldPageReqDto {
  /** 客户编码 */
  cCusCodes: string[],
  /** 模具类型编码 */
  MoldTypeCodes: string[],
  /** 是否查询已生码的数据 */
  bFilterRawCode?: boolean,
  /** 车间ID */
  WorkShopId?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListMoldInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: MoldInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface MoldBarCodeReqDto {
  /** 模具ID集合 */
  MoldIds: string[],
  }

export interface QueryAPSPlanListReqDto {
  /** 开工开始日期 */
  StartBeginDate?: string | null,
  /** 开工结束日期 */
  StartEndDate?: string | null,
  /** 车间ID */
  WorkShopId?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListAPSPlanListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: APSPlanListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface APSPlanListDto {
  /** 计划ID */
  PlanId?: string | null,
  /** 计划单号 */
  PlanCode?: string | null,
  /** 生产订单号 */
  MoCode?: string | null,
  /** 产品编码 */
  cInvCode?: string | null,
  /** 零件号 */
  cInvAddCode?: string | null,
  /** 产品名称 */
  cInvName?: string | null,
  /** 计划开工日期 */
  StartDate?: string | null,
  /** 完工日期 */
  DueDate?: string | null,
  /** 计划数量 */
  IssueQty?: number | null,
  /** 日期显示字段 */
  DisDate?: string | null,
  /** 排产工序集合 */
  OpDtos?: APSPlanOpDto[],
  }

export interface APSPlanOpDto {
  /** 排产后明细时需要用到其余无用 */
  PlanOpId?: string | null,
  /** 工序资料ID */
  RoutingDId?: string | null,
  /** 工序ID */
  OpId?: string | null,
  /** 工序行号 */
  OpSeq?: string | null,
  /** 工序编码 */
  OpCode?: string | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 待排数量 */
  APSQty?: number | null,
  /** 原始排产数量 */
  SourceApsQty?: number | null,
  /** 已完工数量 */
  ComQty?: number | null,
  /** 产能对照表 */
  CapacityDtos?: APSResDto[],
  }

export interface APSResDto {
  /** 工序ID */
  OpId?: string | null,
  /** 资源类型<br/>
  1 = DEVICE，设备<br/>
  2 = ARTIFICIAL，人工<br/>
  100 = ALL，全部 */
  ResType?: number | null,
  /** 排产优先级 */
  APSLevel?: number | null,
  /** 是否默认资源 */
  BDefault?: boolean,
  /** 资源ID */
  ResId?: string | null,
  /** 资源编码 */
  ResCode?: string | null,
  /** 资源名称（设备的话拼上型号一起返回） */
  ResName?: string | null,
  /** 资源产能 */
  ResAging?: number | null,
  /** 可排产时间段 */
  TimeRangeDtos?: WorkHourTimer[],
  /** 可排产的计划工序ID集合 */
  PlanOpIds: string[],
  }

export interface WorkHourTimer {
  Start?: string | null,
  End?: string | null,
  }

export interface LJsonResultListAPSPlanListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: APSPlanListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface LJsonResultListAPSWorkShopDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: APSWorkShopDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface APSWorkShopDto {
  /** 车间ID */
  WorkShopId?: string | null,
  /** 车间编码 */
  WorkShopCode?: string | null,
  /** 车间名称 */
  WorkShopName?: string | null,
  /** 上班时间 */
  StartTime?: string | null,
  /** 下班时间 */
  EndTime?: string | null,
  }

export interface QueryAPSResListReqDto {
  /** 计划ID集合 */
  PlanIds: string[],
  /** 工序ID集合 */
  OpIds: string[],
  /** 是否插单 */
  BInsert?: boolean,
  /** 排产车间ID */
  WorkShopId: string,
  /** 排产日期开始 */
  StartDate: string,
  /** 排产日期结束 */
  EndDate: string,
  }

export interface LJsonResultListAPSResDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: APSResDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface PlanOpAutoAPSReqDto {
  /** 计划ID */
  PlanId: string,
  /** 工序ID */
  OpId?: string | null,
  /** 排产数量 */
  APSQty?: number | null,
  /** 是否强制覆盖(已有排产信息的需要提示确认，确认后传true，默认false) */
  BCover?: boolean,
  /** 是否插单 */
  BInsert?: boolean,
  /** 查单原因 */
  InsertReason?: string | null,
  /** 排产单ID */
  ApsId?: string | null,
  /** 排产车间ID */
  WorkShopId: string,
  /** 排产日期开始 */
  StartDate: string,
  /** 排产日期结束 */
  EndDate: string,
  }

export interface LJsonResultPlanAPSInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: PlanAPSInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface PlanAPSInfoDto {
  /** 排产单ID */
  APSId?: string | null,
  /** 所属车间名称 */
  WorkShopName?: string | null,
  /** 单据状态<br/>
  0 = Draft，草稿<br/>
  1 = Normal，正常<br/>
  100 = ALL，全部 */
  DocState?: number | null,
  /** 是否已经派工(已派工的不可编辑) */
  BShift?: boolean,
  /** 排产单号 */
  ApsCode?: string | null,
  /** 是否紧急插单 */
  BInsert?: boolean,
  /** 查单原因 */
  InsertReason?: string | null,
  /** 插单处理方式<br/>
  0 = CLOSE，关闭<br/>
  1 = DELAY，顺延 */
  InsertHandleWay?: number | null,
  /** 计划列表 */
  PlanDtos?: APSPlanListDto[],
  /** 已排产资源列表 */
  APSResList?: APSResListDto[],
  /** 资源列表 */
  ResDtos?: APSResDto[],
  /** 排产车间ID */
  WorkShopId: string,
  /** 排产日期开始 */
  StartDate: string,
  /** 排产日期结束 */
  EndDate: string,
  }

export interface APSResListDto {
  /** 排产子表ID */
  APSDId?: string | null,
  /** 资源类型<br/>
  1 = DEVICE，设备<br/>
  2 = ARTIFICIAL，人工<br/>
  100 = ALL，全部 */
  ResType?: number | null,
  /** 资源ID(设备或班组ID) */
  ResId?: string | null,
  /** 资源编码 */
  ResCode?: string | null,
  /** 资源名称（设备的话拼上型号一起返回） */
  ResName?: string | null,
  /** 资源产能 */
  ResAging?: number | null,
  /** 排产数量 */
  ApsQty?: number | null,
  /** 派工数量 */
  ShiftQty?: number | null,
  /** 开始时间 */
  StartTime?: string | null,
  /** 结束时间 */
  EndTime?: string | null,
  /** 对应计划/工序的行ID */
  PlanOpId?: string | null,
  /** 是否关闭 */
  BClose?: boolean,
  /** 表体备注 */
  DRemark?: string | null,
  }

export interface QueryResInfoReqDto {
  /** 资源类型<br/>
  1 = DEVICE，设备<br/>
  2 = ARTIFICIAL，人工<br/>
  100 = ALL，全部 */
  CapacityType: number,
  /** 资源ID */
  ResId: string,
  /** 计划ID集合 */
  PlanIds: string[],
  /** 工序ID集合 */
  OpIds: string[],
  /** 是否插单 */
  BInsert?: boolean,
  /** 排产车间ID */
  WorkShopId: string,
  /** 排产日期开始 */
  StartDate: string,
  /** 排产日期结束 */
  EndDate: string,
  }

export interface LJsonResultAPSResInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: APSResInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface APSResInfoDto {
  /** 已排产未完成的计划/工序列表 */
  PlanOpDtos?: APSPlanOpInfoDto[],
  /** 工序ID */
  OpId?: string | null,
  /** 资源类型<br/>
  1 = DEVICE，设备<br/>
  2 = ARTIFICIAL，人工<br/>
  100 = ALL，全部 */
  ResType?: number | null,
  /** 排产优先级 */
  APSLevel?: number | null,
  /** 是否默认资源 */
  BDefault?: boolean,
  /** 资源ID */
  ResId?: string | null,
  /** 资源编码 */
  ResCode?: string | null,
  /** 资源名称（设备的话拼上型号一起返回） */
  ResName?: string | null,
  /** 资源产能 */
  ResAging?: number | null,
  /** 可排产时间段 */
  TimeRangeDtos?: WorkHourTimer[],
  /** 可排产的计划工序ID集合 */
  PlanOpIds: string[],
  }

export interface APSPlanOpInfoDto {
  /** 计划ID */
  PlanId?: string | null,
  /** 计划单号 */
  PlanCode?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 开工日期 */
  StartDate?: string | null,
  /** 开始时间 */
  StartTime?: string | null,
  /** 完工日期 */
  DueDate?: string | null,
  /** 结束时间 */
  EndTime?: string | null,
  /** 工序ID */
  OpId?: string | null,
  /** 工序行号 */
  OpSeq?: string | null,
  /** 工序编码 */
  OpCode?: string | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 排产数量 */
  APSQty?: number | null,
  /** 产能 */
  ResAging?: number | null,
  /** 已派工数量 */
  ShiftQty?: number | null,
  /** 进度比例 */
  ComRate?: number | null,
  }

export interface QueryAPSMainPageReqDto {
  /** 排产车间ID */
  WorkShopId?: string | null,
  /** 开始日期 */
  StartDate?: string | null,
  /** 结束日期 */
  EndDate?: string | null,
  /** 单据状态<br/>
  0 = Draft，草稿<br/>
  1 = Normal，正常<br/>
  100 = ALL，全部 */
  DocState?: number | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListAPSMainDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: APSMainDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface APSMainDto {
  /** 排产单主表ID */
  Id?: string | null,
  /** 排产车间ID */
  WorkShopId?: string | null,
  /** 排产车间 */
  WorkShop?: string | null,
  /** 排产单号 */
  ApsCode?: string | null,
  /** 开始时间 */
  StartTime?: string | null,
  /** 结束时间 */
  EndTime?: string | null,
  /** 是否紧急插单 */
  BInsert?: boolean,
  /** 插单处理方式<br/>
  0 = CLOSE，关闭<br/>
  1 = DELAY，顺延 */
  InsertHandleWay?: number | null,
  /** 处理方式描述 */
  InsertHandleWayDesc?: string | null,
  /** 查单原因 */
  InsertReason?: string | null,
  /** 是否已经派工 */
  BShift?: boolean,
  /** 单据状态<br/>
  0 = Draft，草稿<br/>
  1 = Normal，正常<br/>
  100 = ALL，全部 */
  DocState?: number | null,
  /** 单据状态说明 */
  DocStateDesc?: string | null,
  /** 排产人 */
  CreatedUserName?: string | null,
  /** 排产时间 */
  CreatedTime?: string | null,
  }

export interface LJsonResultListPlanAPSInfoListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: PlanAPSInfoListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface PlanAPSInfoListDto {
  /** 排产单号 */
  ApsCode?: string | null,
  /** 计划ID */
  PlanId?: string | null,
  /** 计划单号 */
  PlanCode?: string | null,
  /** 生产订单号 */
  MoCode?: string | null,
  /** 产品编码 */
  cInvCode?: string | null,
  /** 零件号 */
  cInvAddCode?: string | null,
  /** 产品名称 */
  cInvName?: string | null,
  /** 计划开工日期 */
  StartDate?: string | null,
  /** 完工日期 */
  EndDate?: string | null,
  /** 计划数量 */
  IssueQty?: number | null,
  /** 工序ID */
  OpId?: string | null,
  /** 工序行号 */
  OpSeq?: string | null,
  /** 工序编码 */
  OpCode?: string | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 资源类型<br/>
  1 = DEVICE，设备<br/>
  2 = ARTIFICIAL，人工<br/>
  100 = ALL，全部 */
  ResType?: number | null,
  /** 资源ID(设备或班组ID) */
  ResId?: string | null,
  /** 资源编码 */
  ResCode?: string | null,
  /** 资源名称（设备的话拼上型号一起返回） */
  ResName?: string | null,
  /** 资源产能 */
  ResAging?: number | null,
  /** 排产数量 */
  ApsQty?: number | null,
  /** 派工数量 */
  ShiftQty?: number | null,
  /** 开始时间 */
  StartTime?: string | null,
  /** 结束时间 */
  EndTime?: string | null,
  /** 是否关闭 */
  BClose?: boolean,
  /** 表体备注 */
  DRemark?: string | null,
  }

export interface QueryAPSDocInfoReqDto {
  /** 排产单ID */
  ApsId?: string | null,
  /** 排产车间ID */
  WorkShopId?: string | null,
  /** 排产开始日期 */
  StartDate?: string | null,
  /** 排产结束日期 */
  EndDate?: string | null,
  /** 计划开工开始日期 */
  StartBeginDate?: string | null,
  /** 计划开工结束日期 */
  StartEndDate?: string | null,
  }

export interface QueryCanShiftApsListReqDto {
  /** 排产车间 */
  WorkShopId?: string | null,
  /** 开始日期 */
  StartDate?: string | null,
  /** 结束日期 */
  EndDate?: string | null,
  /** 设备ID */
  DeviceId?: string | null,
  /** 班组ID */
  TeamId?: string | null,
  /** 排产单ID集合 */
  ApsIds: string[],
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListCanShiftApsListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: CanShiftApsListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface CanShiftApsListDto {
  /** 排产单主表ID */
  Id?: string | null,
  /** 排产车间ID */
  WorkShopId?: string | null,
  /** 排产车间 */
  WorkShop?: string | null,
  /** 排产单号 */
  ApsCode?: string | null,
  /** 计划ID */
  PlanId?: string | null,
  /** 计划单号 */
  PlanCode?: string | null,
  /** 生产订单号 */
  MoCode?: string | null,
  /** 产品编码 */
  cInvCode?: string | null,
  /** 零件号 */
  cInvAddCode?: string | null,
  /** 产品名称 */
  cInvName?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 计量单位编码 */
  cComUnitCode?: string | null,
  /** 计量单位名称 */
  cComUnitName?: string | null,
  /** 排产开始日期 */
  StartDate?: string | null,
  /** 排产结束日期 */
  EndDate?: string | null,
  /** 计划下达数量 */
  IssueQty?: number | null,
  /** 排产人 */
  CreatedUserName?: string | null,
  /** 排产时间 */
  CreatedTime?: string | null,
  /** 工序列表 */
  OpDtos?: CanShiftOpDetailDto[],
  }

export interface CanShiftOpDetailDto {
  /** 排产明细ID */
  ApsDId?: string | null,
  /** 排产数量 */
  ApsQty?: number | null,
  /** 班组ID */
  TeamId?: string | null,
  /** 班组名称 */
  TeamName?: string | null,
  /** 开始时间 */
  StartTime?: string | null,
  /** 结束时间 */
  EndTime?: string | null,
  /** 工序ID */
  OpId?: string | null,
  /** 工序行号 */
  OpSeq?: string | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 模具ID */
  MoldId?: string | null,
  /** 模具名称 */
  MoldName?: string | null,
  /** 设备ID */
  DeviceId?: string | null,
  /** 设备名称 */
  DeviceName?: string | null,
  /** 累计派工数量 */
  ShiftQty?: number | null,
  /** 剩余可派工数量 */
  SyShiftQty?: number | null,
  }

export interface MomAPSSaveReqDto {
  /** 排产单ID（修改时需传） */
  ApsId?: string | null,
  /** 单据状态-默认草稿<br/>
  0 = Draft，草稿<br/>
  1 = Normal，正常<br/>
  100 = ALL，全部 */
  DocState?: number | null,
  /** 是否插单 */
  BInsert?: boolean,
  /** 插单处理方式<br/>
  0 = CLOSE，关闭<br/>
  1 = DELAY，顺延 */
  HandleWay?: number | null,
  /** 查单原因 */
  InsertReason?: string | null,
  /** 排产的工序集合 */
  OpSaveDtos?: MomAPSOpSaveDto[],
  /** 排产车间ID */
  WorkShopId: string,
  /** 排产日期开始 */
  StartDate: string,
  /** 排产日期结束 */
  EndDate: string,
  }

export interface MomAPSOpSaveDto {
  /** 计划ID */
  PlanId?: string | null,
  /** 工序ID */
  OpId?: string | null,
  /** 排产数量 */
  ApsQty?: number | null,
  /** 排产资源集合 */
  ResDtos?: MomAPSResSaveDto[],
  }

export interface MomAPSResSaveDto {
  /** 排产子表ID */
  APSDId?: string | null,
  /** 资源类型<br/>
  1 = DEVICE，设备<br/>
  2 = ARTIFICIAL，人工<br/>
  100 = ALL，全部 */
  ResType?: number | null,
  /** 资源ID */
  ResId?: string | null,
  /** 开始时间 */
  StartTime?: string | null,
  /** 结束时间 */
  EndTime?: string | null,
  }

export interface QueryApsInsertEffectListReqDto {
  /** 插单排产单主表ID */
  ApsId: string,
  /** 计划ID */
  PlanId: string,
  /** 工序ID */
  OpId?: string | null,
  /** 查询类型<br/>
  0 = AUTO，自动排产<br/>
  1 = MANUAL，手动排产 */
  QueryType?: number | null,
  /** 资源类型<br/>
  1 = DEVICE，设备<br/>
  2 = ARTIFICIAL，人工<br/>
  100 = ALL，全部 */
  ResType?: number | null,
  /** 资源ID */
  ResId?: string | null,
  /** 开始时间 */
  StartTime?: string | null,
  /** 结束时间 */
  EndTime?: string | null,
  }

export interface LJsonResultListApsInsertEffectListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: ApsInsertEffectListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface ApsInsertEffectListDto {
  /** 排产单主表ID */
  Id?: string | null,
  /** 排产单子表 */
  ApsDId?: string | null,
  /** 是否紧急插单 */
  BInsert?: boolean,
  /** 查单原因 */
  InsertReason?: string | null,
  /** 插单处理方式<br/>
  0 = CLOSE，关闭<br/>
  1 = DELAY，顺延 */
  InsertHandleWay?: number | null,
  /** 是否已经派工 */
  BShift?: boolean,
  /** 单据状态<br/>
  0 = Draft，草稿<br/>
  1 = Normal，正常<br/>
  100 = ALL，全部 */
  DocState?: number | null,
  /** 单据状态说明 */
  DocStateDesc?: string | null,
  /** 排产人 */
  CreatedUserName?: string | null,
  /** 排产时间 */
  CreatedTime?: string | null,
  /** 排产单号 */
  ApsCode?: string | null,
  /** 计划ID */
  PlanId?: string | null,
  /** 计划单号 */
  PlanCode?: string | null,
  /** 生产订单号 */
  MoCode?: string | null,
  /** 产品编码 */
  cInvCode?: string | null,
  /** 零件号 */
  cInvAddCode?: string | null,
  /** 产品名称 */
  cInvName?: string | null,
  /** 计划开工日期 */
  StartDate?: string | null,
  /** 完工日期 */
  EndDate?: string | null,
  /** 计划数量 */
  IssueQty?: number | null,
  /** 工序ID */
  OpId?: string | null,
  /** 工序行号 */
  OpSeq?: string | null,
  /** 工序编码 */
  OpCode?: string | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 资源类型<br/>
  1 = DEVICE，设备<br/>
  2 = ARTIFICIAL，人工<br/>
  100 = ALL，全部 */
  ResType?: number | null,
  /** 资源ID(设备或班组ID) */
  ResId?: string | null,
  /** 资源编码 */
  ResCode?: string | null,
  /** 资源名称（设备的话拼上型号一起返回） */
  ResName?: string | null,
  /** 资源产能 */
  ResAging?: number | null,
  /** 排产数量 */
  ApsQty?: number | null,
  /** 派工数量 */
  ShiftQty?: number | null,
  /** 开始时间 */
  StartTime?: string | null,
  /** 结束时间 */
  EndTime?: string | null,
  /** 是否关闭 */
  BClose?: boolean,
  /** 表体备注 */
  DRemark?: string | null,
  }

export interface QueryMomIssueDetailListReqDto {
  /** 需求完工日期开始 */
  dPreMoDateBegin?: string | null,
  /** 需求完工日期结束 */
  dPreMoDateEnd?: string | null,
  /** 开工日期开始 */
  StartDateBegin?: string | null,
  /** 开工日期结束 */
  StartDateEnd?: string | null,
  /** 存货编码开始 */
  cInvCodeStart?: string | null,
  /** 存货编码结束 */
  cInvCodeEnd?: string | null,
  /** 是否已完成 */
  bComplete?: boolean,
  /** 生产部门 */
  mDeptCode?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListJHXDMomDetailDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: JHXDMomDetailDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface JHXDMomDetailDto {
  /** 生产订单主表ID */
  MoId?: number | null,
  /** 生产订单子表ID */
  MoDId?: number | null,
  /** 生产订单号 */
  MoCode?: string | null,
  /** 行号 */
  SortSeq?: number | null,
  /** 存货编码 */
  InvCode?: string | null,
  /** 存货分类编码 */
  cInvCCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 计量单位编码 */
  cComUnitCode?: string | null,
  /** 计量单位名称 */
  cComUnitName?: string | null,
  /** 生产订单数量 */
  Qty?: number | null,
  /** 合格入库数量 */
  QuanlifiedInQty?: number | null,
  /** MRP数量 */
  MrpQty?: number | null,
  /** 销售订单号 */
  SoCode?: string | null,
  /** 计划代号 */
  PlanCode?: string | null,
  /** 生产部门编码 */
  MDeptCode?: string | null,
  /** 生产部门 */
  cDepName?: string | null,
  /** 客户编码 */
  cCusCode?: string | null,
  /** 客户名称 */
  cCusName?: string | null,
  /** 开工日期 */
  StartDate?: string | null,
  /** 完工日期 */
  DueDate?: string | null,
  /** 需求完工日期 */
  dPreMoDate?: string | null,
  /** 累计计划下达数量 */
  JHXDQty?: number | null,
  /** 默认工艺路线ID */
  PRoutingId?: string | null,
  /** 默认工艺路线版本说明 */
  PRoutingVer?: string | null,
  /** 预入仓库编码 */
  WhCode?: string | null,
  /** 预入仓库名称 */
  cWhName?: string | null,
  /** 模具ID */
  MoldId?: string | null,
  /** 模具编码 */
  MoldCode?: string | null,
  /** 模具名称 */
  MoldName?: string | null,
  /** 工序列表 */
  OpDtos?: JHXDMomOpDetailDto[],
  }

export interface JHXDMomOpDetailDto {
  /** 工序ID */
  OpId?: string | null,
  /** 工序行号 */
  OpSeq?: number | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 是否首道工序 */
  BFirstFlag?: boolean,
  /** 是否末道工序 */
  BLastFlag?: boolean,
  }

export interface MomPlanIssueSaveDto {
  /** 表体明细 */
  IssueDtos?: MomPlanIssueBaseDto[],
  }

export interface MomPlanIssueBaseDto {
  /** 计划ID-修改时需传 */
  Id?: string | null,
  /** 生产订单主表ID */
  MoId?: number | null,
  /** 生产订单子表ID */
  MoDId?: number | null,
  /** 销售订单号 */
  cSoCode?: string | null,
  /** 生产订单号 */
  MoCode: string,
  /** 行号 */
  SortSeq?: number | null,
  /** 存货编码 */
  InvCode: string,
  /** 生产订单数量 */
  MoQty?: number | null,
  /** 下达数量(必须大于等于生产数量) */
  IssueQty?: number | null,
  /** 开工日期 */
  StartDate: string,
  /** 开工时段 */
  StartPeriod?: number | null,
  /** 完工日期 */
  DueDate: string,
  /** 完工时段 */
  DuePeriod?: number | null,
  /** 需求完工日期 */
  dPreMoDate?: string | null,
  /** 工艺路线ID */
  PRoutingId: string,
  /** 模具ID */
  MoldId?: string | null,
  /** 备注 */
  Remark?: string | null,
  /** 工序设备列表 */
  OpDtos?: MomPlanIssueOpDto[],
  }

export interface MomPlanIssueOpDto {
  /** 计划ID */
  PlanId?: string | null,
  /** 工序ID */
  OpId: string,
  /** 设备ID */
  DeviceId: string,
  }

export interface QueryJHXDMrpListReqDto {
  /** 开工日期开始 */
  StartDateBegin?: string | null,
  /** 开工日期结束 */
  StartDateEnd?: string | null,
  /** 存货编码开始 */
  cInvCodeStart?: string | null,
  /** 存货编码结束 */
  cInvCodeEnd?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListJHXDMrpDetailDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: JHXDMrpDetailDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface JHXDMrpDetailDto {
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 计量单位编码 */
  cComUnitCode?: string | null,
  /** 计量单位名称 */
  cComUnitName?: string | null,
  /** 物料ID */
  PartId?: number | null,
  /** 开工日期 */
  StartDate?: string | null,
  /** 完工日期 */
  DueDate?: string | null,
  /** 计划数量 */
  PlanQty?: number | null,
  /** 已下达数量（已下达生产订单数量） */
  CrdQty?: number | null,
  /** MRP子表ID */
  DemandId?: number | null,
  /** 计划单号 */
  PlanCode?: string | null,
  /** 预入仓库编码 */
  cWhCode?: string | null,
  /** 预入仓库名称 */
  cWhName?: string | null,
  /** 默认工艺路线ID */
  PRoutingId?: string | null,
  /** 默认工艺路线版本说明 */
  PRoutingVer?: string | null,
  /** 工序列表 */
  OpDtos?: JHXDMomOpDetailDto[],
  }

export interface MomPlanSaveReqDto {
  /** 部门编码 */
  MDeptCode: string,
  /** 开工日期 */
  StartDate: string,
  /** 完工日期 */
  DueDate: string,
  /** 备注 */
  cMemo?: string | null,
  /** 生产计划表体 */
  Bodys: MomPlanBodyDto[],
  }

export interface MomPlanBodyDto {
  /** 行号 */
  RowNum?: number | null,
  /** 存货编码 */
  cInvCode: string,
  /** 计划数量 */
  PQty?: number | null,
  /** 部门编码 */
  MDeptCode?: string | null,
  /** 开工日期 */
  StartDate?: string | null,
  /** 完工日期 */
  DueDate?: string | null,
  /** 工艺露馅ID */
  PRoutingId: string,
  /** 备注 */
  cbMemo?: string | null,
  /** MRP计划子表ID */
  DemandId?: number | null,
  /** MRP计划单号 */
  PlanCode?: string | null,
  /** 工序资料子表 */
  SubBodys: MomPlanSubBodyDto[],
  }

export interface MomPlanSubBodyDto {
  /** 工艺路线子表ID */
  PRoutingDId?: number | null,
  /** 工序ID */
  OperationId?: number | null,
  /** 工序行号 */
  OpSeq: string,
  /** 工序的开工日期 */
  StartDate?: string | null,
  /** 工序的完工日期 */
  DueDate?: string | null,
  /** 备注 */
  Remark?: string | null,
  /** 设备ID */
  DeviceId?: string | null,
  }

export interface MomPlanIssueEditDto {
  /** 修改时需传 */
  Id: string,
  /** 下达数量(必须大于等于生产数量) */
  IssueQty?: number | null,
  /** 开工日期 */
  StartDate?: string | null,
  /** 完工日期 */
  DueDate?: string | null,
  /** 工艺路线ID */
  PRoutingId: string,
  /** 备注 */
  Remark?: string | null,
  }

export interface QueryInfoBaseReqDto {
  /** ID */
  Id: string,
  }

export interface LJsonResultMomPlanIssueInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: MomPlanIssueInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface MomPlanIssueInfoDto {
  /** 计划单号 */
  PlanCode?: string | null,
  /** 料品代码 */
  cInvAddCode?: string | null,
  /** 料品名称 */
  cInvName?: string | null,
  /** 料品规格 */
  cInvStd?: string | null,
  /** 计量单位编码 */
  cComUnitCode?: string | null,
  /** 计量单位名称 */
  cComUnitName?: string | null,
  /** 是否已派工 */
  BSchedu?: boolean,
  /** 是否已完工 */
  BFinish?: boolean,
  /** 工艺路线版本说明 */
  PRoutingVer?: string | null,
  /** 模具名称 */
  MoldName?: string | null,
  /** 生产部门编码 */
  mDepCode?: string | null,
  /** 生产部门 */
  mDepName?: string | null,
  /** 计划人 */
  CreatedUserName?: string | null,
  /** 计划时间 */
  CreatedTime?: string | null,
  /** 关闭方式<br/>
  0 = FULL，整单<br/>
  1 = PART，部分<br/>
  100 = ALL，全部 */
  dCloseType?: number | null,
  /** 是否关闭 */
  bClose?: boolean,
  /** 关闭人 */
  cCloser?: string | null,
  /** 关闭时间 */
  dCloseTime?: string | null,
  /** 关闭原因 */
  dCloseMemo?: string | null,
  /** 可关闭数量 */
  canCloseQty?: number | null,
  /** 关闭后计划量 */
  dCloseIssueQty?: number | null,
  /** 工序资料 */
  RoutingDetailDtos?: MomRoutingDetailBaseDto[],
  /** 计划ID-修改时需传 */
  Id?: string | null,
  /** 生产订单主表ID */
  MoId?: number | null,
  /** 生产订单子表ID */
  MoDId?: number | null,
  /** 销售订单号 */
  cSoCode?: string | null,
  /** 生产订单号 */
  MoCode: string,
  /** 行号 */
  SortSeq?: number | null,
  /** 存货编码 */
  InvCode: string,
  /** 生产订单数量 */
  MoQty?: number | null,
  /** 下达数量(必须大于等于生产数量) */
  IssueQty?: number | null,
  /** 开工日期 */
  StartDate: string,
  /** 开工时段 */
  StartPeriod?: number | null,
  /** 完工日期 */
  DueDate: string,
  /** 完工时段 */
  DuePeriod?: number | null,
  /** 需求完工日期 */
  dPreMoDate?: string | null,
  /** 工艺路线ID */
  PRoutingId: string,
  /** 模具ID */
  MoldId?: string | null,
  /** 备注 */
  Remark?: string | null,
  /** 工序设备列表 */
  OpDtos?: MomPlanIssueOpDto[],
  }

export interface MomRoutingDetailBaseDto {
  /** 工序组行号 */
  OpGroupSeq?: number | null,
  /** 工序组ID */
  OpGroupId?: string | null,
  /** 工序组名称 */
  OpGroupName?: string | null,
  /** 是否末道工序组 */
  BLastFlag?: boolean,
  /** 是否首道工序组 */
  BFirstFlag?: boolean,
  /** 是否平行工序 */
  BParallel?: boolean,
  /** 工序ID */
  OpId?: string | null,
  /** 工序行号 */
  OpSeq?: number | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 设备ID */
  DeviceId?: string | null,
  /** 设备名称 */
  DeviceName?: string | null,
  /** 是否委外工序 */
  BForeignOp?: boolean,
  /** 可用合格数量 */
  BalQualifiedQty?: number | null,
  /** 可用报检量 */
  BalDeclareQty?: number | null,
  /** 可用加工数量 */
  BalMachiningQty?: number | null,
  /** 合格数量 */
  QualifiedQty?: number | null,
  /** 报废数量 */
  ScrapQty?: number | null,
  /** 累计派工数量 */
  ShiftQty?: number | null,
  /** 累计完工数量 */
  CompleteQty?: number | null,
  /** 已关闭数量 */
  CloseQty?: number | null,
  }

export interface QueryMomPlanIssuePageReqDto {
  /** 是否已派工 */
  BSchedu?: boolean,
  /** 是否已完工 */
  BFinish?: boolean,
  /** 需求完工日期开始 */
  dPreMoDateBegin?: string | null,
  /** 需求完工日期结束 */
  dPreMoDateEnd?: string | null,
  /** 计划日期开始 */
  StartDateBegin?: string | null,
  /** 计划日期结束 */
  StartDateEnd?: string | null,
  /** 存货编码开始 */
  cInvCodeStart?: string | null,
  /** 存货编码结束 */
  cInvCodeEnd?: string | null,
  /** 生产部门 */
  mDeptCode?: string | null,
  /** 是否查询已生码的数据 */
  bFilterRawCode?: boolean,
  /** 关闭方式<br/>
  0 = FULL，整单<br/>
  1 = PART，部分<br/>
  100 = ALL，全部 */
  CloseType?: number | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListMomPlanIssueInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: MomPlanIssueInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface MomPlanIssueRawCodeReqDto {
  /** 计划ID集合 */
  PlanIds: string[],
  /** 包装数(不传默认以下达数量作为生码的包装数) */
  PackQty?: number | null,
  }

export interface MomPlanIssueCloseReqDto {
  /** 关闭方式<br/>
  0 = FULL，整单<br/>
  1 = PART，部分<br/>
  100 = ALL，全部 */
  CloseType?: number | null,
  /** 关闭的计划ID集合 */
  PlanIds: string[],
  /** 关闭数量 */
  CloseQty?: number | null,
  /** 原因说明 */
  dCloseMemo?: string | null,
  }

export interface QueryMomShiftDetailPageReqDto {
  /** 计划开始时间 */
  PlanStartDate?: string | null,
  /** 计划结束时间 */
  PlanEndDate?: string | null,
  /** 存货编码开始 */
  cInvCodeStart?: string | null,
  /** 存货编码结束 */
  cInvCodeEnd?: string | null,
  /** 工序组ID */
  OpGroupId?: string | null,
  /** 工序ID */
  OpId?: string | null,
  /** 生产部门编码 */
  mDeptCode?: string | null,
  /** 计划ID集合 */
  PlanIds: string[],
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListMomShiftDetailListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: MomShiftDetailListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface MomShiftDetailListDto {
  /** 存货名称 */
  cInvName?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 计量单位编码 */
  cComUnitCode?: string | null,
  /** 计量单位名称 */
  cComUnitName?: string | null,
  /** 默认工艺路线版本说明 */
  PRoutingVer?: string | null,
  /** 模具名称 */
  MoldName?: string | null,
  /** 工序组行号 */
  OpGroupSeq?: number | null,
  /** 工序组ID */
  OpGroupId?: string | null,
  /** 工序组名称 */
  OpGroupName?: string | null,
  /** 是否末道工序组 */
  BLastFlag?: boolean,
  /** 是否首道工序组 */
  BFirstFlag?: boolean,
  /** 计划人 */
  PlanUser?: string | null,
  /** 计划下达日期 */
  PlanDate?: string | null,
  /** 工序列表 */
  OpDtos?: MomShiftOpBaseDto[],
  /** 关闭后计划量 */
  dCloseIssueQty?: number | null,
  /** 计划ID-修改时需传 */
  Id?: string | null,
  /** 生产订单主表ID */
  MoId?: number | null,
  /** 生产订单子表ID */
  MoDId?: number | null,
  /** 销售订单号 */
  cSoCode?: string | null,
  /** 生产订单号 */
  MoCode: string,
  /** 行号 */
  SortSeq?: number | null,
  /** 存货编码 */
  InvCode: string,
  /** 生产订单数量 */
  MoQty?: number | null,
  /** 下达数量(必须大于等于生产数量) */
  IssueQty?: number | null,
  /** 开工日期 */
  StartDate: string,
  /** 开工时段 */
  StartPeriod?: number | null,
  /** 完工日期 */
  DueDate: string,
  /** 完工时段 */
  DuePeriod?: number | null,
  /** 需求完工日期 */
  dPreMoDate?: string | null,
  /** 工艺路线ID */
  PRoutingId: string,
  /** 模具ID */
  MoldId?: string | null,
  /** 备注 */
  Remark?: string | null,
  }

export interface MomShiftOpBaseDto {
  /** 工序ID */
  OpId?: string | null,
  /** 工序行号 */
  OpSeq?: string | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 模具ID */
  MoldId?: string | null,
  /** 模具名称 */
  MoldName?: string | null,
  /** 设备ID */
  DeviceId?: string | null,
  /** 设备名称 */
  DeviceName?: string | null,
  /** 累计派工数量 */
  ShiftQty?: number | null,
  /** 剩余可派工数量 */
  SyShiftQty?: number | null,
  }

export interface MomShiftSaveReqDto {
  /** 保存时需传 */
  Id?: string | null,
  /** 派工单号 */
  MSCode: string,
  /** 工序组Id */
  OpGroupId?: string | null,
  /** 是否平行工序的工序组 */
  BParallel?: boolean,
  /** 开工日期 */
  StartDate: string,
  /** 完工日期 */
  DueDate: string,
  /** 备注 */
  Remark?: string | null,
  /** 来源派工单主表ID(转单会有) */
  SourceId?: string | null,
  /** 所属车间ID */
  WorkShopId?: string | null,
  /** 子表集合 */
  DetailDtos: MomShiftDetailBaseDto[],
  }

export interface MomShiftDetailBaseDto {
  /** 表体ID */
  Id?: string | null,
  /** 生产计划ID */
  PlanId: string,
  /** 派工数量 */
  ShiftQty?: number | null,
  /** 转单数量（不用传后台计算） */
  TransQty?: number | null,
  /** 原始派工数量 */
  OriShiftQty?: number | null,
  /** 班组ID */
  TeamGroupId: string,
  /** 派工人元编码列表 */
  PersonCodeList: string[],
  /** 模具ID */
  MoldId?: string | null,
  /** 设备ID */
  DeviceId?: string | null,
  /** 开工日期 */
  StartDate?: string | null,
  /** 完工日期 */
  DueDate?: string | null,
  /** 开工时段 */
  StartPeriod?: number | null,
  /** 完工时段 */
  DuePeriod?: number | null,
  /** 需求完工日期 */
  dPreMoDate?: string | null,
  /** 工序ID */
  OpId: string,
  /** 排产单表体ID(参照排产时需要传) */
  ApsDId?: string | null,
  /** 自定义项1 */
  Define1?: string | null,
  /** 自定义项2 */
  Define2?: string | null,
  /** 自定义项3 */
  Define3?: string | null,
  /** 自定义项4 */
  Define4?: string | null,
  /** 自定义项5 */
  Define5?: string | null,
  /** 自定义项6 */
  Define6?: string | null,
  /** 自定义项7 */
  Define7?: string | null,
  /** 自定义项8 */
  Define8?: string | null,
  /** 自定义项9 */
  Define9?: string | null,
  /** 自定义项10 */
  Define10?: string | null,
  }

export interface LJsonResultMomShiftMainDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: MomShiftMainDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface MomShiftMainDto {
  /** 派工单ID */
  Id?: string | null,
  /** 派工单号 */
  MSCode?: string | null,
  /** 工序组ID */
  OpGroupId?: string | null,
  /** 工序组编码 */
  OpGroupCode?: string | null,
  /** 工序组名称 */
  OpGroupName?: string | null,
  /** 是否平行工序的工序组 */
  BParallel?: boolean,
  /** 开工日期 */
  StartDate?: string | null,
  /** 完工日期 */
  DueDate?: string | null,
  /** 备注 */
  Remark?: string | null,
  /** 审核意见 */
  AuditRmind?: string | null,
  /** 审核状态<br/>
  0 = ALL，全部<br/>
  1 = PENDING，待审核<br/>
  2 = AUDITED，已审核<br/>
  3 = REJECT，驳回 */
  AuditState?: number | null,
  /** 审核人名称 */
  AuditorName?: string | null,
  /** 审核时间 */
  AuditTime?: string | null,
  /** 制单时间 */
  CreatedTime?: string | null,
  /** 制单人 */
  CreatedUserName?: string | null,
  /** 表体集合 */
  DetailDtos?: MomShiftDetailDto[],
  /** 源单ID */
  SourceId?: string | null,
  /** 是否班组长已接收 */
  BRevice?: boolean,
  /** 是否全部完工 */
  BFinish?: boolean,
  /** 是否来源排产 */
  BFromAps?: boolean,
  /** 所属车间ID */
  WorkShopId?: string | null,
  /** 所属车间 */
  WorkShop?: string | null,
  }

export interface MomShiftDetailDto {
  /** 派工单表体主键(拼上工序组ID) */
  DId?: string | null,
  /** 计划人 */
  PlanUser?: string | null,
  /** 计划下达日期 */
  PlanDate?: string | null,
  /** 下达数量 */
  IssueQty?: number | null,
  /** 计划单号 */
  PlanCode?: string | null,
  /** 计划行号 */
  PSortSeq?: number | null,
  /** 生产订单主表ID */
  MoId?: number | null,
  /** 生产订单子表ID */
  MoDId?: number | null,
  /** 销售订单号 */
  cSoCode?: string | null,
  /** 生产订单号 */
  MoCode?: string | null,
  /** 行号 */
  SortSeq?: number | null,
  /** 工艺路线ID */
  PRoutingId?: string | null,
  /** 工艺路线说明 */
  PRoutingVer?: string | null,
  /** 班组名称 */
  TeamGroup?: string | null,
  /** 存货编码 */
  InvCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 计量单位编码 */
  cComUnitCode?: string | null,
  /** 计量单位名称 */
  cComUnitName?: string | null,
  /** 工序行号 */
  OpSeq?: number | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 模具名称 */
  MoldName?: string | null,
  /** 设备名称 */
  DeviceName?: string | null,
  /** 累计报工数量 */
  BillQty?: number | null,
  /** 关闭数量 */
  CloseQty?: number | null,
  /** 派工人元名称列表 */
  PersonNames: string[],
  /** 表体ID */
  Id?: string | null,
  /** 生产计划ID */
  PlanId: string,
  /** 派工数量 */
  ShiftQty?: number | null,
  /** 转单数量（不用传后台计算） */
  TransQty?: number | null,
  /** 原始派工数量 */
  OriShiftQty?: number | null,
  /** 班组ID */
  TeamGroupId: string,
  /** 派工人元编码列表 */
  PersonCodeList: string[],
  /** 模具ID */
  MoldId?: string | null,
  /** 设备ID */
  DeviceId?: string | null,
  /** 开工日期 */
  StartDate?: string | null,
  /** 完工日期 */
  DueDate?: string | null,
  /** 开工时段 */
  StartPeriod?: number | null,
  /** 完工时段 */
  DuePeriod?: number | null,
  /** 需求完工日期 */
  dPreMoDate?: string | null,
  /** 工序ID */
  OpId: string,
  /** 排产单表体ID(参照排产时需要传) */
  ApsDId?: string | null,
  /** 自定义项1 */
  Define1?: string | null,
  /** 自定义项2 */
  Define2?: string | null,
  /** 自定义项3 */
  Define3?: string | null,
  /** 自定义项4 */
  Define4?: string | null,
  /** 自定义项5 */
  Define5?: string | null,
  /** 自定义项6 */
  Define6?: string | null,
  /** 自定义项7 */
  Define7?: string | null,
  /** 自定义项8 */
  Define8?: string | null,
  /** 自定义项9 */
  Define9?: string | null,
  /** 自定义项10 */
  Define10?: string | null,
  }

export interface QueryMomShiftPageReqDto {
  /** 派工开始时间 */
  ShiftStartDate?: string | null,
  /** 派工结束时间 */
  ShiftEndDate?: string | null,
  /** 存货编码开始 */
  cInvCodeStart?: string | null,
  /** 存货编码结束 */
  cInvCodeEnd?: string | null,
  /** 审核状态<br/>
  0 = ALL，全部<br/>
  1 = PENDING，待审核<br/>
  2 = AUDITED，已审核<br/>
  3 = REJECT，驳回 */
  AuditState?: number | null,
  /** 工序组ID */
  OpGroupId?: string | null,
  /** 工序ID */
  OpId?: string | null,
  /** 生产部门编码 */
  mDepCode?: string | null,
  /** 所属车间ID */
  WorkShopId?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListMomShiftListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: MomShiftListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface MomShiftListDto {
  /** 派工单ID */
  MId?: string | null,
  /** 派工单号 */
  MSCode?: string | null,
  /** 审核意见 */
  AuditRmind?: string | null,
  /** 审核状态<br/>
  0 = ALL，全部<br/>
  1 = PENDING，待审核<br/>
  2 = AUDITED，已审核<br/>
  3 = REJECT，驳回 */
  AuditState?: number | null,
  /** 审核人名称 */
  AuditorName?: string | null,
  /** 审核时间 */
  AuditTime?: string | null,
  /** 备注 */
  Remark?: string | null,
  /** 制单时间 */
  CreatedTime?: string | null,
  /** 制单人 */
  CreatedUserName?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 计量单位编码 */
  cComUnitCode?: string | null,
  /** 计量单位名称 */
  cComUnitName?: string | null,
  /** 默认工艺路线版本说明 */
  PRoutingVer?: string | null,
  /** 工艺路线ID */
  PRoutingId?: string | null,
  /** 模具名称 */
  MoldName?: string | null,
  /** 班组名称 */
  TeamGroup?: string | null,
  /** 工序组行号 */
  OpGroupSeq?: number | null,
  /** 工序组ID */
  OpGroupId?: string | null,
  /** 工序组名称 */
  OpGroupName?: string | null,
  /** 是否末道工序组 */
  BLastFlag?: boolean,
  /** 是否首道工序组 */
  BFirstFlag?: boolean,
  /** 工序行号 */
  OpSeq?: number | null,
  /** 工序编码 */
  OpCode?: string | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 所属工作中心编码 */
  WcCode?: string | null,
  /** 设备名称 */
  DeviceName?: string | null,
  /** 计划人 */
  PlanUser?: string | null,
  /** 计划下达日期 */
  PlanDate?: string | null,
  /** 下达数量 */
  IssueQty?: number | null,
  /** 计划单号 */
  PlanCode?: string | null,
  /** 计划行号 */
  PSortSeq?: number | null,
  /** 生产订单主表ID */
  MoId?: number | null,
  /** 生产订单子表ID */
  MoDId?: number | null,
  /** 销售订单号 */
  cSoCode?: string | null,
  /** 生产订单号 */
  MoCode?: string | null,
  /** 行号 */
  SortSeq?: number | null,
  /** 累计报工数量 */
  BillQty?: number | null,
  /** 派工人员名称 */
  PersonNames: string[],
  /** 生产部门编码 */
  mDepCode?: string | null,
  /** 生产部门 */
  mDepName?: string | null,
  /** 所属车间ID */
  WorkShopId?: string | null,
  /** 所属车间 */
  WorkShop?: string | null,
  /** 表体ID */
  Id?: string | null,
  /** 生产计划ID */
  PlanId: string,
  /** 派工数量 */
  ShiftQty?: number | null,
  /** 转单数量（不用传后台计算） */
  TransQty?: number | null,
  /** 原始派工数量 */
  OriShiftQty?: number | null,
  /** 班组ID */
  TeamGroupId: string,
  /** 派工人元编码列表 */
  PersonCodeList: string[],
  /** 模具ID */
  MoldId?: string | null,
  /** 设备ID */
  DeviceId?: string | null,
  /** 开工日期 */
  StartDate?: string | null,
  /** 完工日期 */
  DueDate?: string | null,
  /** 开工时段 */
  StartPeriod?: number | null,
  /** 完工时段 */
  DuePeriod?: number | null,
  /** 需求完工日期 */
  dPreMoDate?: string | null,
  /** 工序ID */
  OpId: string,
  /** 排产单表体ID(参照排产时需要传) */
  ApsDId?: string | null,
  /** 自定义项1 */
  Define1?: string | null,
  /** 自定义项2 */
  Define2?: string | null,
  /** 自定义项3 */
  Define3?: string | null,
  /** 自定义项4 */
  Define4?: string | null,
  /** 自定义项5 */
  Define5?: string | null,
  /** 自定义项6 */
  Define6?: string | null,
  /** 自定义项7 */
  Define7?: string | null,
  /** 自定义项8 */
  Define8?: string | null,
  /** 自定义项9 */
  Define9?: string | null,
  /** 自定义项10 */
  Define10?: string | null,
  }

export interface QueryShiftTaskPageReqDto {
  /** 生产订单号 */
  MoCode?: string | null,
  /** 派工单号 */
  MSCode?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 任务状态<br/>
  0 = PENDING，待接收<br/>
  1 = RECEIVED，已接收<br/>
  2 = SUSPEND，挂起<br/>
  3 = RECOVERY，已恢复<br/>
  4 = STARTED，已开工<br/>
  5 = FINISHED，已完工<br/>
  6 = TRANSED，已转单<br/>
  7 = CLOSED，已关闭<br/>
  100 = ALL，全部 */
  TaskState?: number | null,
  /** 工序ID */
  OpId?: string | null,
  /** 班组ID */
  TeamId?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListMoShiftTaskDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: MoShiftTaskDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface MoShiftTaskDto {
  /** 计划ID */
  PlanId?: string | null,
  /** 计划单号 */
  PlanCode?: string | null,
  /** 生产订单号 */
  MoCode?: string | null,
  /** 生产订单行号 */
  SortSeq?: number | null,
  /** 生产数量 */
  MoQty?: number | null,
  /** 部门编码 */
  MDeptCode?: string | null,
  /** 计划员 */
  Plantor?: string | null,
  /** 计划下达时间 */
  IssueTime?: string | null,
  /** 部门名称 */
  MDeptName?: string | null,
  /** 派工单ID */
  ShiftMainId?: string | null,
  /** 派工单子表ID */
  ShiftDetailId?: string | null,
  /** 派工单号 */
  ShiftCode?: string | null,
  /** 派工数量 */
  ShiftQty?: number | null,
  /** 派工时间 */
  ShiftTime?: string | null,
  /** 工序ID */
  OpId?: string | null,
  /** 工序行号 */
  OpSeq?: number | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 班组ID */
  TeamId?: string | null,
  /** 班组名称 */
  TeamName?: string | null,
  /** 班组长 */
  TeamLeader?: string | null,
  /** 模具ID */
  MoldId?: string | null,
  /** 模具名称 */
  MoldName?: string | null,
  /** 设备ID */
  DeviceId?: string | null,
  /** 设备名称 */
  DeviceName?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 任务状态<br/>
  0 = PENDING，待接收<br/>
  1 = RECEIVED，已接收<br/>
  2 = SUSPEND，挂起<br/>
  3 = RECOVERY，已恢复<br/>
  4 = STARTED，已开工<br/>
  5 = FINISHED，已完工<br/>
  6 = TRANSED，已转单<br/>
  7 = CLOSED，已关闭<br/>
  100 = ALL，全部 */
  TaskState?: number | null,
  /** 任务状态说明 */
  TaskStateStr?: string | null,
  /** 接收时间 */
  ReceiveTime?: string | null,
  /** 接收人 */
  Receiver?: string | null,
  }

export interface MomShiftTransReqDto {
  /** 派工单ID */
  ShiftId: string,
  }

export interface MomShiftPrintReqDto {
  /** 派工单ID */
  Id: string,
  }

export interface QueryMoRoutingBillPageReqDto {
  /** 班组ID */
  TeamId?: string | null,
  /** 工序组ID */
  OpGroupId?: string | null,
  /** 工序ID */
  OpId?: string | null,
  /** 开启日期 */
  StartDate?: string | null,
  /** 结束日期 */
  EndDate?: string | null,
  /** 存货编码开始 */
  cInvCodeStart?: string | null,
  /** 存货编码结束 */
  cInvCodeEnd?: string | null,
  /** 生产部门 */
  mDepCode?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListMoRoutingBillListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: MoRoutingBillListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface MoRoutingBillListDto {
  /** 报工单ID */
  Id?: string | null,
  /** 报工单号 */
  VouchCode?: string | null,
  /** 单据日期 */
  VouchDate?: string | null,
  /** 生产订单号 */
  MoCode?: string | null,
  /** 生产订单主表ID */
  MoId?: number | null,
  /** 计划单号 */
  PlanCode?: string | null,
  /** 计划ID */
  PlanId?: string | null,
  /** 不良入库单号集合 */
  ScrapRdCodeList: string[],
  /** 入库单号集合 */
  RdCodeList: string[],
  /** 报工时间 */
  CreatedTime?: string | null,
  /** 报工人员 */
  CreatedUserName?: string | null,
  /** 表体ID */
  DId?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 计量单位 */
  cComUnitName?: string | null,
  /** 班组ID */
  TeamId?: string | null,
  /** 班组名称 */
  TeamName?: string | null,
  /** 工序组ID */
  OpGroupId?: string | null,
  /** 工序组行号 */
  OpGroupSeq?: number | null,
  /** 工序组名称 */
  OpGroupName?: string | null,
  /** 工序ID */
  OpId?: string | null,
  /** 工序行号 */
  OpSeq?: number | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 工序制作人 */
  cPersonCode?: string | null,
  /** 工序制作人名称 */
  cPerson?: string | null,
  /** 报工人编码集合 */
  cPersonCodes: string[],
  /** 报工人名称 */
  cPersonList: string[],
  /** 合格数量 */
  QualifiedQty?: number | null,
  /** 不良数量 */
  ScrapQty?: number | null,
  /** 报检数量 */
  DeclareQty?: number | null,
  /** 报工总数量 */
  ReportQty?: number | null,
  /** 总的有效工时 */
  EffectWHours?: number | null,
  /** 总的无效工时 */
  InvaildWHours?: number | null,
  /** 实际总的有效工时 */
  SJEffectWHours?: number | null,
  /** 实际总的无效工时 */
  SJInvaildWHours?: number | null,
  /** 生产部门编码 */
  mDepCode?: string | null,
  /** 生产部门 */
  mDepName?: string | null,
  }

export interface QueryMoRoutingBillInfoReqDto {
  /** 单据ID */
  Id?: string | null,
  /** 查询方式<br/>
  0 = ALL，默认<br/>
  1 = FIRST，第一张<br/>
  2 = PREVIOUS，上一页<br/>
  3 = NEXT，下一页<br/>
  4 = FINAL，最后一页 */
  Way?: number | null,
  }

export interface LJsonResultMoRoutingInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: MoRoutingInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface MoRoutingInfoDto {
  /** 报工单ID */
  Id?: string | null,
  /** 报工单号 */
  VouchCode?: string | null,
  /** 单据日期 */
  VouchDate?: string | null,
  /** 生产订单号 */
  MoCode?: string | null,
  /** 生产订单主表ID */
  MoId?: number | null,
  /** 计划单号 */
  PlanCode?: string | null,
  /** 计划ID */
  PlanId?: string | null,
  /** 不良入库单号集合 */
  ScrapRdCodeList: string[],
  /** 入库单号集合 */
  RdCodeList: string[],
  /** 报工时间 */
  CreatedTime?: string | null,
  /** 报工人员 */
  CreatedUserName?: string | null,
  /** 表体行 */
  DetailDtos?: MoRoutingBillDetailDto[],
  }

export interface MoRoutingBillDetailDto {
  /** 表体ID */
  Id?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 计量单位名称 */
  cComUnitName?: string | null,
  /** 工序组ID */
  OpGroupId?: string | null,
  /** 工序组行号 */
  OpGroupSeq?: number | null,
  /** 工序组名称 */
  OpGroupName?: string | null,
  /** 工序ID */
  OpId?: string | null,
  /** 工序行号 */
  OpSeq?: number | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 工序制作人 */
  cPersonCode?: string | null,
  /** 工序制作人名称 */
  cPerson?: string | null,
  /** 工序制作人名称列表 */
  cPersons: string[],
  /** 报工人编码集合 */
  cPersonCodes: string[],
  /** 合格数量 */
  QualifiedQty?: number | null,
  /** 不良数量 */
  ScrapQty?: number | null,
  /** 报检数量 */
  DeclareQty?: number | null,
  /** 报工总数量 */
  ReportQty?: number | null,
  /** 总的有效工时 */
  EffectWHours?: number | null,
  /** 总的无效工时 */
  InvaildWHours?: number | null,
  /** 实际总的有效工时 */
  SJEffectWHours?: number | null,
  /** 实际总的无效工时 */
  SJInvaildWHours?: number | null,
  /** 报废的原因列表 */
  ScrapDtos?: MoRoutingBillScrapDto[],
  }

export interface MoRoutingBillScrapDto {
  /** 不良数量 */
  ScrapQty?: number | null,
  /** 不良原因编码 */
  ReasonCode?: string | null,
  /** 不良原因 */
  Reason?: string | null,
  }

export interface LJsonResultOMOrderHeadDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: OMOrderHeadDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface OMOrderHeadDto {
  /** 委外订单ID */
  moid?: string | null,
  /** 业务类型 */
  cbustype?: string | null,
  /** 委外订单号 */
  ccode: string,
  /** 订单日期 */
  ddate: string,
  /** 供应商编码 */
  cvencode: string,
  /** 部门编码 */
  cdepcode?: string | null,
  /** 人员编码 */
  cpersoncode?: string | null,
  /** 汇率 */
  nflat?: string | null,
  /** 税率 */
  itaxrate?: string | null,
  /** 采购类型 */
  cptcode: string,
  /** 采购类型 */
  cptname?: string | null,
  /** 币种 */
  cexch_name?: string | null,
  /** 备注 */
  cmemo?: string | null,
  }

export interface OMOrderSaveReqDto {
  /** 表头 */
  Head: OMOrderHeadDto,
  /** 表体信息 */
  Bodys?: OMOrderBodyDto[],
  }

export interface OMOrderBodyDto {
  /** 存货编码 */
  cinvcode?: string | null,
  /** 数量 */
  iquantity?: string | null,
  /** 预计到货时间 */
  darrivedate?: string | null,
  /** 项目编码 */
  citemcode?: string | null,
  /** 原币无税单价 */
  iunitprice?: string | null,
  /** 项目大类 */
  citem_class?: string | null,
  /** 税率 */
  ipertaxrate?: string | null,
  /** 表体备注 */
  cbmemo?: string | null,
  /** 计划下达日期 */
  dstartdate?: string | null,
  }

export interface OMOrderAuditReqDto {
  /** 委外订单ID */
  MOID?: string | null,
  /** 审核操作<br/>
  0 = UNAUDIT，弃审<br/>
  1 = AUDIT，审核<br/>
  100 = ALL，全部 */
  AuditAction?: number | null,
  }

export interface QueryOMOrderInfoReqDto {
  /** 订单号 */
  ccode?: string | null,
  /** 查询方式<br/>
  0 = ALL，默认<br/>
  1 = FIRST，第一张<br/>
  2 = PREVIOUS，上一页<br/>
  3 = NEXT，下一页<br/>
  4 = FINAL，最后一页 */
  QueryWay?: number | null,
  }

export interface LJsonResultOMOrderInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: OMOrderInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface OMOrderInfoDto {
  /** 业务类型（中文名称） */
  cbustype?: string | null,
  /** 委外订单号 */
  ccode?: string | null,
  /** 主表ID */
  moid?: string | null,
  /** 订单日期 */
  ddate?: string | null,
  /** 供应商编码 */
  cvencode?: string | null,
  /** 供应商名称 */
  cvenname?: string | null,
  /** 部门编码 */
  cdepcode?: string | null,
  /** 部门名称 */
  cdepname?: string | null,
  /** 人员编码 */
  cpersoncode?: string | null,
  /** 业务员名称 */
  cpersonname?: string | null,
  /** 汇率 */
  nflat?: number | null,
  /** 税率 */
  itaxrate?: number | null,
  /** 币种名称 */
  cexch_name?: string | null,
  /** 委外类型编码 */
  cptcode?: string | null,
  /** 委外类型 */
  cptname?: string | null,
  /** 备注 */
  cmemo?: string | null,
  /** 审核状态 2：审核通过 0 ：待审核 */
  iverifystateex?: number | null,
  /** 制单人 */
  cmaker?: string | null,
  /** 审核人 */
  cverifier?: string | null,
  /** 制单时间 */
  cmaketime?: string | null,
  /** 审核时间 */
  daudittime?: string | null,
  /** 表体集合 */
  bodys?: OMOrderBodyInfoDto[],
  }

export interface OMOrderBodyInfoDto {
  /** 子表ID */
  id?: string | null,
  /** 主表ID */
  moid?: string | null,
  /** 项目大类 */
  citem_class?: string | null,
  /** 项目编码 */
  citemcode?: string | null,
  /** 项目名称 */
  citemname?: string | null,
  /** 项目大类名称 */
  citem_name?: string | null,
  /** 存货编码 */
  cinvcode?: string | null,
  /** 存货代码 */
  cinvaddcode?: string | null,
  /** 存货名称 */
  cinvname?: string | null,
  /** 规格型号 */
  cinvstd?: string | null,
  /** 主计量 */
  cinvm_unit?: string | null,
  /** 数量 */
  iquantity?: number | null,
  /** 计划到货时间 */
  darrivedate?: string | null,
  /** 收货人 */
  revicer?: string | null,
  /** 原币含税单价 */
  itaxprice?: number | null,
  /** 原币单价 */
  iunitprice?: number | null,
  /** 原币金额 */
  imoney?: number | null,
  /** 原币税额 */
  itax?: number | null,
  /** 原币价税合计 */
  isum?: number | null,
  /** 税率 */
  ipertaxrate?: number | null,
  /** 图号 */
  cinvdefine1?: string | null,
  /** 图纸版本 */
  cinvdefine2?: string | null,
  /** 图面材质 */
  cinvdefine3?: string | null,
  /** 备注 */
  cbmemo?: string | null,
  /** 行关闭人 */
  cbcloser?: string | null,
  /** 行关闭时间 */
  cbclosetime?: string | null,
  }

export interface QueryPoOrderPageReqDto {
  /** 供应商编码开始 */
  VenCodeBegin?: string | null,
  /** 供应商编码结束 */
  VenCodeEnd?: string | null,
  /** 订单日期开始 */
  dPoDateBegin?: string | null,
  /** 订单日期结束 */
  dPoDateEnd?: string | null,
  /** 订单号开始 */
  cPoIdBegin?: string | null,
  /** 订单号结束 */
  cPoIdEnd?: string | null,
  /** 存货编码开始 */
  cInvCodeBegin?: string | null,
  /** 存货编码结束 */
  cInvCodeEnd?: string | null,
  /** 审核状态<br/>
  0 = UNAUDIT，弃审<br/>
  1 = AUDIT，审核<br/>
  100 = ALL，全部 */
  AuditState?: number | null,
  /** 采购类型编码 */
  cPtCode?: string | null,
  /** 业务类型 */
  cBusType?: string | null,
  /** 供应商接收状态<br/>
  0 = UNREVICE，未接收<br/>
  1 = PARTREVICE，部分接收<br/>
  2 = REVICED，已全部接收<br/>
  100 = ALL，全部 */
  ReviceState?: number | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListOMOrderListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: OMOrderListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface OMOrderListDto {
  /** 业务类型（中文名称） */
  cbustype?: string | null,
  /** 委外订单号 */
  ccode?: string | null,
  /** 主表ID */
  moid?: string | null,
  /** 订单日期 */
  ddate?: string | null,
  /** 供应商编码 */
  cvencode?: string | null,
  /** 供应商名称 */
  cvenname?: string | null,
  /** 部门编码 */
  cdepcode?: string | null,
  /** 部门名称 */
  cdepname?: string | null,
  /** 人员编码 */
  cpersoncode?: string | null,
  /** 业务员名称 */
  cpersonname?: string | null,
  /** 汇率 */
  nflat?: number | null,
  /** 税率 */
  itaxrate?: number | null,
  /** 币种名称 */
  cexch_name?: string | null,
  /** 委外类型编码 */
  cptcode?: string | null,
  /** 委外类型 */
  cptname?: string | null,
  /** 备注 */
  cmemo?: string | null,
  /** 审核状态 2：审核通过 0 ：待审核 1:审核中 */
  iverifystatenew?: number | null,
  /** 制单人 */
  cmaker?: string | null,
  /** 审核人 */
  cverifier?: string | null,
  /** 制单时间 */
  dcreatetime?: string | null,
  /** 审核时间 */
  dverifytime?: string | null,
  /** 关闭人 */
  cbcloser?: string | null,
  /** 关闭时间 */
  dclosetime?: string | null,
  /** 子表ID */
  modetailsid?: string | null,
  /** 存货编码 */
  cinvcode?: string | null,
  /** 存货代码 */
  cinvaddcode?: string | null,
  /** 存货名称 */
  cinvname?: string | null,
  /** 规格型号 */
  cinvstd?: string | null,
  /** 主计量 */
  cinvm_unit?: string | null,
  /** 数量 */
  iquantity?: number | null,
  /** 计划到货时间 */
  darrivedate?: string | null,
  /** 原币含税单价 */
  itaxprice?: number | null,
  /** 原币单价 */
  iunitprice?: number | null,
  /** 原币金额 */
  imoney?: number | null,
  /** 原币税额 */
  itax?: number | null,
  /** 原币价税合计 */
  isum?: number | null,
  /** 税率 */
  ipertaxrate?: number | null,
  /** 图号 */
  cinvdefine1?: string | null,
  /** 图纸版本 */
  cinvdefine2?: string | null,
  /** 图面材质 */
  cinvdefine3?: string | null,
  /** 供应商接收状态<br/>
  0 = UNREVICE，未接收<br/>
  1 = PARTREVICE，部分接收<br/>
  2 = REVICED，已全部接收<br/>
  100 = ALL，全部 */
  reviceState?: number | null,
  /** 供应商接收数量 */
  reviceQty?: number | null,
  }

export interface OperationSaveReqDto {
  /** ID修改需传 */
  Id?: string | null,
  /** 工序编码 */
  OpCode: string,
  /** 工序名称 */
  OpName: string,
  /** 所属工作中心编码 */
  WcCode: string,
  /** 设备ID */
  DeviceId?: string | null,
  /** 备注/说明 */
  Remark?: string | null,
  /** 是否关键工序（领料控制） */
  BKeyOp?: boolean,
  /** 是否报工点 */
  BReportFlag?: boolean,
  /** 是否倒冲工序 */
  BFFlag?: boolean,
  /** 是否扫描工序 */
  BScan?: boolean,
  /** 设备ID集合 */
  DeviceIdList: string[],
  }

export interface LJsonResultOperationInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: OperationInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface OperationInfoDto {
  /** 创建人 */
  CreatedUserName?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 工作中心 */
  WcName?: string | null,
  /** 设备名称 */
  DeviceName?: string | null,
  /** 设备ID集合 */
  DeviceIds?: string | null,
  /** 设备集合 */
  DeviceList?: BaseSelectDto[],
  /** ID修改需传 */
  Id?: string | null,
  /** 工序编码 */
  OpCode: string,
  /** 工序名称 */
  OpName: string,
  /** 所属工作中心编码 */
  WcCode: string,
  /** 设备ID */
  DeviceId?: string | null,
  /** 备注/说明 */
  Remark?: string | null,
  /** 是否关键工序（领料控制） */
  BKeyOp?: boolean,
  /** 是否报工点 */
  BReportFlag?: boolean,
  /** 是否倒冲工序 */
  BFFlag?: boolean,
  /** 是否扫描工序 */
  BScan?: boolean,
  /** 设备ID集合 */
  DeviceIdList: string[],
  }

export interface QueryOperationPageReqDto {
  /** 工作中心 */
  WcCode?: string | null,
  /** 工序类型（默认全部） */
  OpTypes: number[],
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListOperationInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: OperationInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface OpGroupSaveReqDto {
  /** 修改时需要传 */
  Id?: string | null,
  /** 编码 */
  Code?: string | null,
  /** 名称 */
  Name: string,
  /** 是否平行工序的工序组 */
  BParallel?: boolean,
  /** 备注 */
  Remark?: string | null,
  /** APP显示图标 */
  Icon?: string | null,
  /** 表体行集合 */
  DetailDtos?: OpGroupDetailDto[],
  }

export interface OpGroupDetailDto {
  /** 工序行号 */
  OpSeq?: number | null,
  /** 工序ID */
  OpId?: string | null,
  /** 工序代号 */
  OpCode?: string | null,
  /** 工序名称 */
  OpDesc?: string | null,
  /** 备注（说明） */
  DRemark?: string | null,
  /** 设备ID */
  DeviceId?: string | null,
  /** 设备名称 */
  DeviceName?: string | null,
  /** 是否关键工序（领料控制） */
  BKeyOp?: boolean,
  /** 是否报工点 */
  BReportFlag?: boolean,
  }

export interface QueryOpGroupInfoReqDto {
  /** 工序组 ID */
  Id: string,
  }

export interface LJsonResultOpGroupInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: OpGroupInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface OpGroupInfoDto {
  /** 创建人 */
  CreatedUserName?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 修改时需要传 */
  Id?: string | null,
  /** 编码 */
  Code?: string | null,
  /** 名称 */
  Name: string,
  /** 是否平行工序的工序组 */
  BParallel?: boolean,
  /** 备注 */
  Remark?: string | null,
  /** APP显示图标 */
  Icon?: string | null,
  /** 表体行集合 */
  DetailDtos?: OpGroupDetailDto[],
  }

export interface LPJsonResultListOpGroupListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: OpGroupListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface OpGroupListDto {
  /** ID修改需传 */
  Id?: string | null,
  /** 编码 */
  Code?: string | null,
  /** 名称 */
  Name: string,
  /** 是否平行工序的工序组 */
  BParallel?: boolean,
  /** 备注 */
  Remark?: string | null,
  /** APP显示图标 */
  Icon?: string | null,
  /** 创建人 */
  CreatedUserName?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  }

export interface LJsonResultListOpGroupDetailDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: OpGroupDetailDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface OtherOutSaveReqDto {
  /** 日期 */
  dDate?: string | null,
  /** 仓库 */
  cWhCode: string,
  /** 类别编码 */
  cRdCode?: string | null,
  /** 备注 */
  Remark?: string | null,
  /** 是否生单即审核 */
  BSaveAndCheck?: boolean,
  /** 存货列表 */
  InvDtos?: StockInvBaseDto[],
  }

export interface StockInvBaseDto {
  /** 存货编码 */
  cInvCode?: string | null,
  /** 数量 */
  Qty?: number | null,
  /** 货位 */
  cPosCode?: string | null,
  /** 批号 */
  cBatch?: string | null,
  }

export interface LJsonResultListNoCheckOtherOutRdDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: NoCheckOtherOutRdDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface NoCheckOtherOutRdDto {
  /** 单据主表ID */
  Id?: number | null,
  /** 单据来源 */
  cSource?: string | null,
  /** 业务类型 */
  cBusType?: string | null,
  /** 仓库编码 */
  cWhCode?: string | null,
  /** 仓库名称 */
  cWhName?: string | null,
  /** 单据日期 */
  dDate?: string | null,
  /** 单号 */
  cCode?: string | null,
  /** 备注 */
  cMemo?: string | null,
  /** 单据条码 */
  csysbarcode?: string | null,
  }

export interface LJsonResultListOtherOutRdInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: OtherOutRdInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface OtherOutRdInfoDto {
  /** 单号 */
  cCode?: string | null,
  /** 出库单主表ID */
  Id?: number | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 仓库编码 */
  cWhCode?: string | null,
  /** 仓库名称 */
  cWhName?: string | null,
  /** 是否启用货位 */
  bWhPos?: boolean,
  /** 是否启用批次 */
  bInvBatch?: boolean,
  /** 子表ID */
  AutoId?: number | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 数量 */
  Qty?: number | null,
  /** 货位 */
  cPosCode?: string | null,
  /** 批号 */
  cBatch?: string | null,
  }

export interface SaleOutCheckReqDto {
  /** 销售出库单ID */
  Id?: number | null,
  /** 销售出库存货信息集合 */
  InputDtos: SaleOutBaseDto[],
  }

export interface SaleOutBaseDto {
  /** 表体ID */
  AutoId?: number | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 出库数量 */
  iQuantity?: number | null,
  /** 货位编码 */
  cPosition?: string | null,
  /** 批号 */
  cBatch?: string | null,
  }

export interface OtherRdSaveReqDto {
  /** 日期 */
  dDate?: string | null,
  /** 仓库 */
  cWhCode: string,
  /** 类别编码 */
  cRdCode?: string | null,
  /** 备注 */
  Remark?: string | null,
  /** 是否生单即审核 */
  BSaveAndCheck?: boolean,
  /** 存货列表 */
  InvDtos?: StockInvBaseDto[],
  }

export interface PieceQuoteBaseDto {
  /** ID */
  Id?: string | null,
  /** 产品编码 */
  cInvCode: string,
  /** 工序ID */
  OpId: string,
  /** 班组ID */
  TeamId: string,
  /** 设备ID */
  DeviceId?: string | null,
  /** 计件单价 */
  QuotePrice?: number | null,
  }

export interface LJsonResultPieceQuoteInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: PieceQuoteInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface PieceQuoteInfoDto {
  /** 存货名称 */
  cInvName?: string | null,
  /** 计量单位 */
  cComUnitName?: string | null,
  /** 计量单位编码 */
  cComUnitCode?: string | null,
  /** 工序编码 */
  OpCode?: string | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 设备名称 */
  DeviceName?: string | null,
  /** 班组名称 */
  TeamName?: string | null,
  /** ID */
  Id?: string | null,
  /** 产品编码 */
  cInvCode: string,
  /** 工序ID */
  OpId: string,
  /** 班组ID */
  TeamId: string,
  /** 设备ID */
  DeviceId?: string | null,
  /** 计件单价 */
  QuotePrice?: number | null,
  }

export interface QueryPieceQuotePageReqDto {
  /** 工序ID */
  OpId?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 设备ID */
  DeviceId?: string | null,
  /** 班组ID */
  TeamId?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListPieceQuoteInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: PieceQuoteInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface PieceWageCalcReqDto {
  /** 计算开始日期 */
  BeginDate: string,
  /** 计算结束日期 */
  EndDate: string,
  /** 备注 */
  Remark?: string | null,
  }

export interface PieceWageReCalcReqDto {
  /** 计件工资主表ID */
  Id: string,
  }

export interface QueryPieceWageMainListReqDto {
  /** 开始日期 */
  BeginDate?: string | null,
  /** 结束日期 */
  EndDate?: string | null,
  /** 审核状态<br/>
  0 = ALL，全部<br/>
  1 = PENDING，待审核<br/>
  2 = AUDITED，已审核<br/>
  3 = REJECT，驳回 */
  AuditState?: number | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListPieceWageMainDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: PieceWageMainDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface PieceWageMainDto {
  /** 主键 */
  Id?: string | null,
  /** 工资单号 */
  WageNo?: string | null,
  /** 计算开始日期 */
  BeginDate?: string | null,
  /** 计算结束日期 */
  EndDate?: string | null,
  /** 工资总额 */
  WageAmount?: number | null,
  /** 实际工资总额 */
  SJWageAmount?: number | null,
  /** 备注 */
  Remark?: string | null,
  /** 审核意见 */
  AuditRmind?: string | null,
  /** 审核状态<br/>
  0 = ALL，全部<br/>
  1 = PENDING，待审核<br/>
  2 = AUDITED，已审核<br/>
  3 = REJECT，驳回 */
  AuditState?: number | null,
  /** 审核人名称 */
  AuditorName?: string | null,
  /** 审核时间 */
  AuditTime?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 创建者名称 */
  CreatedUserName?: string | null,
  }

export interface QueryPieceWageDetailListReqDto {
  /** 主表ID */
  MainId: string,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListPieceWageDetailDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: PieceWageDetailDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface PieceWageDetailDto {
  /** 明细行ID */
  Id?: string | null,
  /** 报工单号 */
  BillCode?: string | null,
  /** 报工单子表ID */
  BillDetailId?: string | null,
  /** 产品编码 */
  cInvCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 所属班组ID */
  TeamId?: string | null,
  /** 班组名称 */
  TeamName?: string | null,
  /** 所属工人 */
  cPersonCode?: string | null,
  /** 工人名字 */
  cPersonName?: string | null,
  /** 工序ID */
  OpId?: string | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 报工工时 */
  BillHours?: number | null,
  /** 报工工资 */
  BillWage?: number | null,
  /** 实际工时 */
  SJHours?: number | null,
  /** 实际工资 */
  SJWage?: number | null,
  }

export interface PieceWageDetailUpdateReqDto {
  /** 明细行ID */
  Id?: string | null,
  /** 实际工资 */
  SJWage?: number | null,
  }

export interface QueryPieceWageReqportReqDto {
  /** 查询关键字（工资单号/备注/报工单号/） */
  KeyWord?: string | null,
  /** 开始日期 */
  BeginDate?: string | null,
  /** 结束日期 */
  EndDate?: string | null,
  /** 产品编码 */
  cInvCode?: string | null,
  /** 工序ID */
  OpId?: string | null,
  /** 人员编码 */
  cPersonCode?: string | null,
  /** 班子ID */
  TeamId?: string | null,
  /** 审核状态<br/>
  0 = ALL，全部<br/>
  1 = PENDING，待审核<br/>
  2 = AUDITED，已审核<br/>
  3 = REJECT，驳回 */
  AuditState?: number | null,
  }

export interface LJsonResultListPieceWageReportDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: PieceWageReportDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface PieceWageReportDto {
  /** 计件工资主表ID */
  Id?: string | null,
  /** 工资单号 */
  WageNo?: string | null,
  /** 计算开始日期 */
  BeginDate?: string | null,
  /** 计算结束日期 */
  EndDate?: string | null,
  /** 所属工人 */
  cPersonCode?: string | null,
  /** 人员名字 */
  cPersonName?: string | null,
  /** 部门编码 */
  cDepCode?: string | null,
  /** 部门名称 */
  cDepName?: string | null,
  /** 报工总工时 */
  BillHours?: number | null,
  /** 报工总工资 */
  BillWage?: number | null,
  /** 实际总工时 */
  SJHours?: number | null,
  /** 实际总工资 */
  SJWage?: number | null,
  /** 工序工时工资集合 */
  OpWageDtos?: PersonOpWageDto[],
  }

export interface PersonOpWageDto {
  /** 工序ID */
  OpId?: string | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 报工工时 */
  BillHours?: number | null,
  /** 报工工资 */
  BillWage?: number | null,
  /** 实际工时 */
  SJHours?: number | null,
  /** 实际工资 */
  SJWage?: number | null,
  }

export interface LJsonResultPoOrderHeadDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: PoOrderHeadDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface PoOrderHeadDto {
  /** 业务类型（中文名称） */
  cbustype?: string | null,
  /** 采购订单号 */
  cpoid: string,
  /** 订单日期 */
  dpodate?: string | null,
  /** 供应商编码 */
  cvencode: string,
  /** 部门编码 */
  cdepcode?: string | null,
  /** 人员编码 */
  cpersoncode?: string | null,
  /** 汇率 */
  nflat?: string | null,
  /** 税率 */
  itaxrate?: string | null,
  /** 币种名称 */
  cexch_name?: string | null,
  /** 采购类型编码 */
  cptcode?: string | null,
  /** 采购类型 */
  cptname?: string | null,
  /** 备注 */
  cmemo?: string | null,
  /** 表体集合 */
  bodys?: PoOrderBodyDto[],
  }

export interface PoOrderBodyDto {
  /** 存货编码 */
  cinvcode?: string | null,
  /** 数量 */
  iquantity?: string | null,
  /** 预计到货时间 */
  darrivedate?: string | null,
  /** 项目编码 */
  citemcode?: string | null,
  /** 原币无税单价 */
  iunitprice?: string | null,
  /** 项目大类 */
  citem_class?: string | null,
  /** 税率 */
  ipertaxrate?: string | null,
  /** 表体备注 */
  cbmemo?: string | null,
  }

export interface PoOrderSaveReqDto {
  /** 业务类型（中文名称） */
  cbustype?: string | null,
  /** 采购订单号 */
  cpoid: string,
  /** 订单日期 */
  dpodate?: string | null,
  /** 供应商编码 */
  cvencode: string,
  /** 部门编码 */
  cdepcode?: string | null,
  /** 人员编码 */
  cpersoncode?: string | null,
  /** 汇率 */
  nflat?: string | null,
  /** 税率 */
  itaxrate?: string | null,
  /** 币种名称 */
  cexch_name?: string | null,
  /** 采购类型编码 */
  cptcode?: string | null,
  /** 采购类型 */
  cptname?: string | null,
  /** 备注 */
  cmemo?: string | null,
  /** 表体集合 */
  bodys?: PoOrderBodyDto[],
  }

export interface PoOrderAuditReqDto {
  /** 采购订单ID */
  POID?: string | null,
  /** 审核操作<br/>
  0 = UNAUDIT，弃审<br/>
  1 = AUDIT，审核<br/>
  100 = ALL，全部 */
  AuditAction?: number | null,
  }

export interface QueryPoOrderInfoReqDto {
  /** 采购订单号 */
  cpoid?: string | null,
  /** 查询方式<br/>
  0 = ALL，默认<br/>
  1 = FIRST，第一张<br/>
  2 = PREVIOUS，上一页<br/>
  3 = NEXT，下一页<br/>
  4 = FINAL，最后一页 */
  QueryWay?: number | null,
  }

export interface LJsonResultPoOrderInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: PoOrderInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface PoOrderInfoDto {
  /** 业务类型（中文名称） */
  cbustype?: string | null,
  /** 采购订单号 */
  cpoid?: string | null,
  /** 主表ID */
  poid?: string | null,
  /** 订单日期 */
  dpodate?: string | null,
  /** 供应商编码 */
  cvencode?: string | null,
  /** 供应商名称 */
  cvenname?: string | null,
  /** 部门编码 */
  cdepcode?: string | null,
  /** 部门名称 */
  cdepname?: string | null,
  /** 人员编码 */
  cpersoncode?: string | null,
  /** 业务员名称 */
  cpersonname?: string | null,
  /** 汇率 */
  nflat?: number | null,
  /** 税率 */
  itaxrate?: number | null,
  /** 币种名称 */
  cexch_name?: string | null,
  /** 采购类型编码 */
  cptcode?: string | null,
  /** 采购类型 */
  cptname?: string | null,
  /** 备注 */
  cmemo?: string | null,
  /** 审核状态 2：审核通过 0 ：待审核 */
  iverifystateex?: number | null,
  /** 制单人 */
  cmaker?: string | null,
  /** 审核人 */
  cverifier?: string | null,
  /** 制单时间 */
  cmaketime?: string | null,
  /** 审核时间 */
  caudittime?: string | null,
  /** 表体集合 */
  bodys?: PoOrderBodyInfoDto[],
  }

export interface PoOrderBodyInfoDto {
  /** 子表ID */
  id?: string | null,
  /** 主表ID */
  poid?: string | null,
  /** 项目大类 */
  citem_class?: string | null,
  /** 项目编码 */
  citemcode?: string | null,
  /** 项目名称 */
  citemname?: string | null,
  /** 项目大类名称 */
  citem_name?: string | null,
  /** 存货编码 */
  cinvcode?: string | null,
  /** 存货代码 */
  cinvaddcode?: string | null,
  /** 存货名称 */
  cinvname?: string | null,
  /** 规格型号 */
  cinvstd?: string | null,
  /** 主计量 */
  cinvm_unit?: string | null,
  /** 数量 */
  iquantity?: number | null,
  /** 计划到货时间 */
  darrivedate?: string | null,
  /** 收货人 */
  revicer?: string | null,
  /** 原币含税单价 */
  itaxprice?: number | null,
  /** 原币单价 */
  iunitprice?: number | null,
  /** 原币金额 */
  imoney?: number | null,
  /** 原币税额 */
  itax?: number | null,
  /** 原币价税合计 */
  isum?: number | null,
  /** 税率 */
  ipertaxrate?: number | null,
  /** 图号 */
  cinvdefine1?: string | null,
  /** 图纸版本 */
  cinvdefine2?: string | null,
  /** 图面材质 */
  cinvdefine3?: string | null,
  /** 备注 */
  cbmemo?: string | null,
  /** 行关闭人 */
  cbcloser?: string | null,
  /** 行关闭时间 */
  cbclosetime?: string | null,
  }

export interface LPJsonResultListPoOrderListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: PoOrderListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface PoOrderListDto {
  /** 业务类型（中文名称） */
  cbustype?: string | null,
  /** 采购订单号 */
  cpoid?: string | null,
  /** 主表ID */
  poid?: string | null,
  /** 订单日期 */
  dpodate?: string | null,
  /** 供应商编码 */
  cvencode?: string | null,
  /** 供应商名称 */
  cvenname?: string | null,
  /** 部门编码 */
  cdepcode?: string | null,
  /** 部门名称 */
  cdepname?: string | null,
  /** 人员编码 */
  cpersoncode?: string | null,
  /** 业务员名称 */
  cpersonname?: string | null,
  /** 汇率 */
  nflat?: number | null,
  /** 税率 */
  itaxrate?: number | null,
  /** 币种名称 */
  cexch_name?: string | null,
  /** 采购类型编码 */
  cptcode?: string | null,
  /** 采购类型 */
  cptname?: string | null,
  /** 备注 */
  cmemo?: string | null,
  /** 审核状态 2：审核通过 0 ：待审核 */
  iverifystateex?: number | null,
  /** 制单人 */
  cmaker?: string | null,
  /** 审核人 */
  cverifier?: string | null,
  /** 制单时间 */
  cmaketime?: string | null,
  /** 审核时间 */
  caudittime?: string | null,
  /** 子表ID */
  id?: string | null,
  /** 存货编码 */
  cinvcode?: string | null,
  /** 存货代码 */
  cinvaddcode?: string | null,
  /** 存货名称 */
  cinvname?: string | null,
  /** 规格型号 */
  cinvstd?: string | null,
  /** 主计量 */
  cinvm_unit?: string | null,
  /** 数量 */
  iquantity?: number | null,
  /** 计划到货时间 */
  darrivedate?: string | null,
  /** 原币含税单价 */
  itaxprice?: number | null,
  /** 原币单价 */
  iunitprice?: number | null,
  /** 原币金额 */
  imoney?: number | null,
  /** 原币税额 */
  itax?: number | null,
  /** 原币价税合计 */
  isum?: number | null,
  /** 税率 */
  ipertaxrate?: number | null,
  /** 图号 */
  cinvdefine1?: string | null,
  /** 图纸版本 */
  cinvdefine2?: string | null,
  /** 图面材质 */
  cinvdefine3?: string | null,
  /** 行关闭人 */
  cbcloser?: string | null,
  /** 行关闭时间 */
  cbclosetime?: string | null,
  /** 供应商接收状态<br/>
  0 = UNREVICE，未接收<br/>
  1 = PARTREVICE，部分接收<br/>
  2 = REVICED，已全部接收<br/>
  100 = ALL，全部 */
  reviceState?: number | null,
  /** 供应商接收数量 */
  reviceQty?: number | null,
  }

export interface QueryArrInfoReqDto {
  /** 到货单单号/条码/ASN单号/ASN条码 */
  BarCode: string,
  }

export interface LJsonResultArrInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: ArrInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface ArrInfoDto {
  /** 到货单号 */
  cCode?: string | null,
  /** ASN单号 */
  ASNCode?: string | null,
  /** 订单日期 */
  dDate?: string | null,
  /** 到货单ID */
  Id?: string | null,
  /** 供应商编码 */
  cVenCode?: string | null,
  /** 供应商名称 */
  cVenName?: string | null,
  /** 业务类型 */
  cBusType?: string | null,
  /** 来源订单号（采购/委外） */
  cpocode?: string | null,
  /** 表体信息集合 */
  BodyDtos?: ArrBodyDto[],
  }

export interface ArrBodyDto {
  /** 表体ID */
  Autoid?: number | null,
  /** 到货单ID */
  ID?: number | null,
  /** 仓库编码 */
  cWhCode?: string | null,
  /** 仓库名称 */
  cWhName?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 数量 */
  iQuantity?: number | null,
  /** 已入库数量 */
  fValidInQuan?: number | null,
  /** 剩余可入库数量 */
  SyInQuan?: number | null,
  /** 批号 */
  cBatch?: string | null,
  /** 是否启用货位 */
  bWhPos?: boolean,
  /** 是否启用批次 */
  bInvBatch?: boolean,
  /** 来源订单号 */
  cordercode?: string | null,
  }

export interface PoRdReqDto {
  /** 到货单号（后期可扩展采购订单） */
  cCode: string,
  /** 入库日期（不传默认当天） */
  dInDate?: string | null,
  /** 表体集合 */
  Bodys?: PoRdBodyDto[],
  }

export interface PoRdBodyDto {
  /** 表体ID */
  AutoId?: number | null,
  /** 存货编码 */
  cInvCode: string,
  /** 入库数量 */
  iQuantity?: number | null,
  /** 批号 */
  cBatch?: string | null,
  /** 仓库编码 */
  cWhCode: string,
  /** 货位编码 */
  cPosCode?: string | null,
  /** 一品多点 */
  cFree1?: string | null,
  }

export interface PRoutingSaveReqDto {
  /** ID修改需传 */
  Id?: string | null,
  /** 工艺路线类型编码（来源数据字典） */
  RoutingTypeCode: string,
  /** 料品编码 */
  cInvCode: string,
  /** 版本号 */
  Version?: number | null,
  /** 版本说明 */
  VersionDesc?: string | null,
  /** 备注 */
  Remark?: string | null,
  /** 是否启用 */
  IsEnabled?: boolean,
  /** 子表集合 */
  DetailDtos?: PRoutingDetailBaseDto[],
  }

export interface PRoutingDetailBaseDto {
  /** 主表ID */
  MainId?: string | null,
  /** 工序组行号 */
  OpGroupSeq?: number | null,
  /** 工序组ID */
  OpGroupId: string,
  /** 工序组编码 */
  OpGroupCode: string,
  /** 工序组名称 */
  OpGroupName: string,
  /** 是否末道工序组 */
  BLastFlag?: boolean,
  /** 是否首道工序组 */
  BFirstFlag?: boolean,
  /** 工序行号 */
  OpSeq?: number | null,
  /** 工序ID */
  OpId?: string | null,
  /** 工序编码 */
  OpCode?: string | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 模具ID */
  MoldId?: string | null,
  /** 模具名称 */
  MoldName?: string | null,
  /** 设备ID */
  DeviceId?: string | null,
  /** 设备名称 */
  DeviceName?: string | null,
  /** 备注 */
  DRemark?: string | null,
  }

export interface QueryPRoutingInfoReqDto {
  /** 工艺路线ID */
  Id: string,
  }

export interface LJsonResultPRoutingInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: PRoutingInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface PRoutingInfoDto {
  /** 工艺路线ID */
  Id?: string | null,
  /** 料品代码 */
  cInvAddCode?: string | null,
  /** 料品名称 */
  cInvName?: string | null,
  /** 料品规格 */
  cInvStd?: string | null,
  /** 计量单位编码 */
  cComUnitCode?: string | null,
  /** 计量单位名称 */
  cComUnitName?: string | null,
  /** 工艺路线类型 */
  RoutingType?: string | null,
  /** 审核意见 */
  AuditRmind?: string | null,
  /** 审核状态<br/>
  0 = ALL，全部<br/>
  1 = PENDING，待审核<br/>
  2 = AUDITED，已审核<br/>
  3 = REJECT，驳回 */
  AuditState?: number | null,
  /** 审核人ID */
  AuditorId?: string | null,
  /** 审核人名称 */
  AuditorName?: string | null,
  /** 审核时间 */
  AuditTime?: string | null,
  /** 创建人 */
  CreatedUserName?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 工艺路线类型编码（来源数据字典） */
  RoutingTypeCode: string,
  /** 料品编码 */
  cInvCode: string,
  /** 版本号 */
  Version?: number | null,
  /** 版本说明 */
  VersionDesc?: string | null,
  /** 备注 */
  Remark?: string | null,
  /** 是否启用 */
  IsEnabled?: boolean,
  /** 子表集合 */
  DetailDtos?: PRoutingDetailBaseDto[],
  }

export interface QueryPRoutingPageReqDto {
  /** 料品编码开始 */
  cInvCodeStart?: string | null,
  /** 料品编码结束 */
  cInvCodeEnd?: string | null,
  /** 版本号开始 */
  VersionStart?: number | null,
  /** 版本号结束 */
  VersionEnd?: number | null,
  /** 审核状态<br/>
  0 = ALL，全部<br/>
  1 = PENDING，待审核<br/>
  2 = AUDITED，已审核<br/>
  3 = REJECT，驳回 */
  AuditState?: number | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListPRoutingMainDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: PRoutingMainDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface PRoutingMainDto {
  /** 工艺路线ID */
  Id?: string | null,
  /** 工艺路线类型编码（来源数据字典） */
  RoutingTypeCode: string,
  /** 料品编码 */
  cInvCode: string,
  /** 版本号 */
  Version?: number | null,
  /** 版本说明 */
  VersionDesc?: string | null,
  /** 备注 */
  Remark?: string | null,
  /** 料品代码 */
  cInvAddCode?: string | null,
  /** 料品名称 */
  cInvName?: string | null,
  /** 料品规格 */
  cInvStd?: string | null,
  /** 计量单位编码 */
  cComUnitCode?: string | null,
  /** 计量单位名称 */
  cComUnitName?: string | null,
  /** 工艺路线类型 */
  RoutingType?: string | null,
  /** 审核状态<br/>
  0 = ALL，全部<br/>
  1 = PENDING，待审核<br/>
  2 = AUDITED，已审核<br/>
  3 = REJECT，驳回 */
  AuditState?: number | null,
  }

export interface PRoutingAuditReqDto {
  /** ID */
  Id: string,
  /** 审核状态<br/>
  0 = ALL，全部<br/>
  1 = PENDING，待审核<br/>
  2 = AUDITED，已审核<br/>
  3 = REJECT，驳回 */
  AuditState: number,
  /** 审核意见 */
  AuditRmind?: string | null,
  }

export interface LJsonResultListPRoutingSelectDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: PRoutingSelectDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface PRoutingSelectDto {
  /** 工艺路线ID */
  Id?: string | null,
  /** 工艺路线类型编码（来源数据字典） */
  RoutingTypeCode?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 版本号 */
  Version?: number | null,
  /** 版本说明 */
  VersionDesc?: string | null,
  /** 工艺路线类型 */
  RoutingType?: string | null,
  }

export interface AppUpdateReqDto {
  /** APP客户端版本号 */
  Version: string,
  /** appID */
  AppId?: string | null,
  /** 应用名称 */
  Name?: string | null,
  /** 版本编码 */
  VersionCode?: string | null,
  }

export interface LJsonResultAppUpdateResDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: AppUpdateResDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface AppUpdateResDto {
  /** 当前版本号 */
  Version?: string | null,
  /** 是否需要升级 */
  BNeedUpdate?: boolean,
  /** 升级说明 */
  UpdateDesc?: string | null,
  /** 整包升级地址 */
  PkgSrc?: string | null,
  /** WGT升级地址 */
  WgtSrc?: string | null,
  /** APP更新方式 */
  UpdateType?: string | null,
  }

export interface QueryMoldReportReqDto {
  /** 模具状态<br/>
  1 = COLLECT，领用<br/>
  2 = RETURN，归还<br/>
  3 = WAITCOLLECT，待领用<br/>
  4 = UNASSIGNED，未分配<br/>
  -1 = ALL，全部 */
  CollectState?: number | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListMoldReportDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: MoldReportDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface MoldReportDto {
  /** 模具ID */
  MoldId?: string | null,
  /** 模具名称 */
  MoldName?: string | null,
  /** 模具编码 */
  MoldCode?: string | null,
  /** 模号 */
  Model?: string | null,
  /** 模具类型编码 */
  MoldTypeCode?: string | null,
  /** 模具类型 */
  MoldType?: string | null,
  /** 模具状态<br/>
  1 = COLLECT，领用<br/>
  2 = RETURN，归还<br/>
  3 = WAITCOLLECT，待领用<br/>
  4 = UNASSIGNED，未分配<br/>
  -1 = ALL，全部 */
  CollectState?: number | null,
  /** 生产订单号 */
  MoCode?: string | null,
  /** 使用班组ID */
  TeamId?: string | null,
  /** 使用班组名称 */
  TeamName?: string | null,
  /** 产品编码 */
  cInvCode?: string | null,
  /** 产品名称 */
  cInvName?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 所做工序ID */
  OpId?: string | null,
  /** 所做工序名称 */
  OpName?: string | null,
  /** 领用时间 */
  CollectTime?: string | null,
  /** 归还时间 */
  ReturnTime?: string | null,
  }

export interface LPJsonResultListDeviceReportDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: DeviceReportDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface DeviceReportDto {
  /** 设备ID */
  DevcieId?: string | null,
  /** 设备编码 */
  DeviceCode?: string | null,
  /** 设备名称 */
  DeviceName?: string | null,
  /** 型号 */
  Model?: string | null,
  /** 设备类型编码 */
  DeviceTypeCode?: string | null,
  /** 设备类型 */
  DeviceType?: string | null,
  /** 设备状态<br/>
  1 = COLLECT，领用<br/>
  2 = RETURN，归还<br/>
  3 = WAITCOLLECT，待领用<br/>
  4 = UNASSIGNED，未分配<br/>
  -1 = ALL，全部 */
  CollectState?: number | null,
  /** 生产订单号 */
  MoCode?: string | null,
  /** 使用班组ID */
  TeamId?: string | null,
  /** 使用班组名称 */
  TeamName?: string | null,
  /** 产品编码 */
  cInvCode?: string | null,
  /** 产品名称 */
  cInvName?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 所做工序ID */
  OpId?: string | null,
  /** 所做工序名称 */
  OpName?: string | null,
  /** 领用时间 */
  CollectTime?: string | null,
  /** 归还时间 */
  ReturnTime?: string | null,
  }

export interface QueryMoOpProcessReqDto {
  /** 开始日期 */
  StartDate?: string | null,
  /** 结束日期 */
  EndDate?: string | null,
  /** 生产订单号 */
  MoCode?: string | null,
  /** 计划单号 */
  PlanCode?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 班组ID */
  TeamId?: string | null,
  /** 工序组ID */
  OpGroupId?: string | null,
  /** 部门编码 */
  mDepCode?: string | null,
  }

export interface LJsonResultListMoOpReportDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: MoOpReportDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface MoOpReportDto {
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 成品库存 */
  StQty?: number | null,
  /** 生产订单数量 */
  MoQty?: number | null,
  /** 计划下达数量 */
  IssQty?: number | null,
  /** 已下达数量 */
  ShiftQty?: number | null,
  /** 在制总数 */
  OpQty?: number | null,
  /** 计划ID集合 */
  PlanIds: string[],
  /** 工序在制情况集合 */
  OpDtos?: OpInfoQtyDto[],
  }

export interface OpInfoQtyDto {
  /** 已完工数量 */
  CompleteQty?: number | null,
  /** 工序代码 */
  OpId?: string | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 在制数量 */
  Qty?: number | null,
  /** 报废数量 */
  ScrapQty?: number | null,
  }

export interface QueryMoPlanAllcatesReqDto {
  /** 计划ID集合 */
  PlanIds: string[],
  }

export interface LJsonResultListMoAllcateCollectDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: MoAllcateCollectDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface MoAllcateCollectDto {
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 现存量 */
  StQty?: number | null,
  /** 应领数量 */
  IssQty?: number | null,
  /** 已领数量 */
  IssedQty?: number | null,
  /** 基础用量分子 */
  BaseQtyN?: number | null,
  /** 基础用量分母 */
  BaseQtyD?: number | null,
  }

export interface QueryMomPlanReportReqDto {
  /** 设备ID */
  DevcieId?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 生产订单号 */
  MoCode?: string | null,
  /** 生产部门编码 */
  mDepCode?: string | null,
  /** 开始日期 */
  BeginDate?: string | null,
  /** 结束日期 */
  EndDate?: string | null,
  }

export interface LJsonResultListMomPlanReportDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: MomPlanReportDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface MomPlanReportDto {
  /** 生产部门编码 */
  mDepCode?: string | null,
  /** 生产部门名称 */
  mDepName?: string | null,
  /** 设备ID */
  DeviceId?: string | null,
  /** 设备名称 */
  DeviceName?: string | null,
  /** 存货编码 */
  InvCode?: string | null,
  /** 存货名称 */
  InvName?: string | null,
  /** 存货代码 */
  InvAddCode?: string | null,
  /** 规格型号 */
  InvStd?: string | null,
  /** 计划下达数量 */
  IssueQty?: number | null,
  /** 完工数量（取入库数量） */
  ComQty?: number | null,
  /** 开工日期 */
  StartDate?: string | null,
  /** 完工日期 */
  DueDate?: string | null,
  /** 实际开工时间 */
  RealStartTime?: string | null,
  /** 实际完工时间 */
  RealDueTime?: string | null,
  /** 生产订单号 */
  MoCode?: string | null,
  /** 完工后下一生产产品编码 */
  NextInvCode?: string | null,
  /** 完工后下一生产产品名称 */
  NextInvName?: string | null,
  }

export interface QueryDispatchInfoReqDto {
  /** 发货单条码或单号 */
  BarCode?: string | null,
  }

export interface LJsonResultDispatchHeadDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: DispatchHeadDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface DispatchHeadDto {
  /** 发货单号 */
  cDLCode?: string | null,
  /** 发货日期 */
  dDate?: string | null,
  /** 发货单ID */
  DLID?: number | null,
  /** 客户编码 */
  cCusCode?: string | null,
  /** 客户名称 */
  cCusName?: string | null,
  /** 表体信息 */
  BodyDtos?: DispatchBodyDto[],
  }

export interface DispatchBodyDto {
  /** 表体ID */
  AutoId?: number | null,
  /** 发货单ID */
  DLID?: number | null,
  /** 预出库仓库编码 */
  cWhCode?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 发货单数量 */
  iQuantity?: number | null,
  /** 剩余可出库数量 */
  SyOutQty?: number | null,
  /** 货位编码 */
  cPosition?: string | null,
  /** 批号 */
  cBatch?: string | null,
  /** 是否启用货位 */
  bWhPos?: boolean,
  /** 是否启用批次 */
  bInvBatch?: boolean,
  }

export interface SaleOutSaveReqDto {
  /** 销售出库存货信息集合 */
  InputDtos: SaleOutInputDto[],
  }

export interface SaleOutInputDto {
  /** 表体ID */
  AutoId?: number | null,
  /** 发货单ID */
  DLID?: number | null,
  /** 出库仓库编码 */
  cWhCode: string,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 出库数量 */
  iQuantity?: number | null,
  /** 货位编码 */
  cPosition?: string | null,
  /** 批号 */
  cBatch?: string | null,
  }

export interface LJsonResultListNoCheckSaleOutListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: NoCheckSaleOutListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface NoCheckSaleOutListDto {
  /** 销售出库单ID */
  Id?: number | null,
  /** 单号 */
  cCode?: string | null,
  /** 单据日期 */
  dDate?: string | null,
  /** 出库仓库编码 */
  cWhCode?: string | null,
  /** 出库仓库名称 */
  cWhName?: string | null,
  /** 客户编码 */
  cCusCode?: string | null,
  /** 客户名称 */
  cCusName?: string | null,
  /** 来源单号（发货单号） */
  cBusCode?: string | null,
  /** 订单来源 */
  cSource?: string | null,
  /** 单据条码 */
  csysbarcode?: string | null,
  }

export interface LJsonResultListSaleOutInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: SaleOutInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface SaleOutInfoDto {
  /** 出库单号 */
  cCode?: string | null,
  /** 出库单主表ID */
  Id?: number | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 发货单号 */
  cDLCode?: string | null,
  /** 仓库编码 */
  cWhCode?: string | null,
  /** 仓库名称 */
  cWhName?: string | null,
  /** 是否启用货位 */
  bWhPos?: boolean,
  /** 是否启用批次 */
  bInvBatch?: boolean,
  /** 表体ID */
  AutoId?: number | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 出库数量 */
  iQuantity?: number | null,
  /** 货位编码 */
  cPosition?: string | null,
  /** 批号 */
  cBatch?: string | null,
  }

export interface ShiftCalendarSaveReqDto {
  /** 是否批量排班 */
  BBlukShift?: boolean,
  /** 开始日期-格式：yyyy-MM-dd */
  StartDate?: string | null,
  /** 结束日期-格式：yyyy-MM-dd */
  EndDate?: string | null,
  /** 排班日期-格式：yyyy-MM-dd */
  ShiftDate?: string | null,
  /** 班次ID */
  ShiftId: string,
  /** 班组ID集合 */
  TeamIds: string[],
  /** 备注 */
  Remark?: string | null,
  }

export interface QueryCalendarInfoReqDto {
  /** 排班日期 */
  shiftDate?: string | null,
  /** ID */
  Id?: string | null,
  }

export interface LJsonResultShiftCalendarInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: ShiftCalendarInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface ShiftCalendarInfoDto {
  /** 排班日期 */
  ShiftDate?: string | null,
  /** 排班日期字符串 */
  ShiftDateStr?: string | null,
  /** 班次信息 */
  ShiftDtos?: TeamShiftDto[],
  }

export interface TeamShiftDto {
  /** 所排班次ID */
  ShiftId?: string | null,
  /** 班次编码 */
  ShiftCode?: string | null,
  /** 班次名称 */
  ShiftName?: string | null,
  /** 开始工作时间 */
  WorkStartTime?: string | null,
  /** 结束工作时间 */
  WorkEndTime?: string | null,
  /** 休息开始时间 */
  RestStartTime?: string | null,
  /** 休息结束时间 */
  RestEndTime?: string | null,
  /** 班组列表 */
  TeamDtos?: BaseSelectDto[],
  }

export interface QueryShiftCalendarListReqDto {
  /** 开始日期-格式：yyyy-MM-dd */
  StartDate?: string | null,
  /** 结束日期-格式：yyyy-MM-dd */
  EndDate?: string | null,
  /** 班次ID */
  ShiftId?: string | null,
  /** 班组ID */
  TeamId?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListShiftCalendarListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: ShiftCalendarListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface ShiftCalendarListDto {
  /** 排班日期 */
  ShiftDate?: string | null,
  /** 排班日期字符串 */
  ShiftDateStr?: string | null,
  /** 所排班次ID */
  ShiftId?: string | null,
  /** 班次编码 */
  ShiftCode?: string | null,
  /** 班次名称 */
  ShiftName?: string | null,
  /** 开始工作时间 */
  WorkStartTime?: string | null,
  /** 结束工作时间 */
  WorkEndTime?: string | null,
  /** 休息开始时间 */
  RestStartTime?: string | null,
  /** 休息结束时间 */
  RestEndTime?: string | null,
  /** 班次ID */
  TeamId?: string | null,
  /** 班组编码 */
  TeamCode?: string | null,
  /** 班组名称 */
  TeamName?: string | null,
  /** 备注/说明 */
  Remark?: string | null,
  /** ID */
  Id?: string | null,
  /** 是否启用 */
  IsEnabled?: boolean,
  /** 排班人 */
  CreatedUserName?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  }

export interface StationSaveReqDto {
  /** ID修改需传 */
  Id?: string | null,
  /** 工位编码 */
  Code?: string | null,
  /** 工位名称 */
  Name: string,
  /** 所属工作中心编码 */
  WcCode?: string | null,
  /** 备注/说明 */
  Remark?: string | null,
  /** 是否启用 */
  IsEnabled?: boolean,
  }

export interface QueryStationPageReqDto {
  /** 工作中心 */
  WcCode?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListStationInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: StationInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface StationInfoDto {
  /** ID */
  Id?: string | null,
  /** 创建人 */
  CreatedUserName?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 工作中心 */
  WcName?: string | null,
  /** 工位编码 */
  Code?: string | null,
  /** 工位名称 */
  Name: string,
  /** 所属工作中心编码 */
  WcCode?: string | null,
  /** 备注/说明 */
  Remark?: string | null,
  /** 是否启用 */
  IsEnabled?: boolean,
  }

export interface SysAppBaseDto {
  /** ID */
  Id?: string | null,
  /** 编码 */
  Code: string,
  /** 名称 */
  Name: string,
  /** 是否默认 */
  IsDefault?: boolean,
  /** 排序码 */
  SortCode?: number | null,
  /** 是否外链 */
  IsUrl?: boolean,
  /** 外链地址 */
  UrlLink?: string | null,
  }

export interface LJsonResultListSysAppBaseDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: SysAppBaseDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface QueryRoleListReqDto {
  /** 权限类型<br/>
  1 = PERSON，人员<br/>
  2 = AUTHORITY，权限 */
  AuthType?: number | null,
  /** 查询关键字 */
  KeyWord?: string | null,
  }

export interface LJsonResultListSysRoleBaseDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: SysRoleBaseDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface SysRoleBaseDto {
  /** ID */
  Id?: string | null,
  /** 角色编码 */
  Code: string,
  /** 角色名称 */
  Name: string,
  /** 排序码 */
  Sort?: number | null,
  /** 备注 */
  Remark?: string | null,
  /** 是否启用 */
  IsEnabled?: boolean,
  }

export interface QueryRoleUserListReqDto {
  /** 角色ID */
  RoleId: string,
  /** 关键字 */
  KeyWord?: string | null,
  }

export interface LJsonResultListOpUserDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: OpUserDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface OpUserDto {
  /** 人员编码 */
  cPersonCode?: string | null,
  /** 人员名称 */
  cPersonName?: string | null,
  /** 部门名称 */
  cDepName?: string | null,
  /** 邮箱 */
  cUserEmail?: string | null,
  /** 手机号 */
  cUserHand?: string | null,
  }

export interface LJsonResultListTreeMenuDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: TreeMenuDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface TreeMenuDto {
  /** 菜单编码 */
  code?: string | null,
  /** 图标 */
  icon?: string | null,
  /** 页面地址/链接 */
  path?: string | null,
  /** 是否是目录 */
  isDir?: boolean,
  /** 是否是按钮 */
  isBtn?: boolean,
  /** 是否隐藏 */
  isHid?: boolean,
  /** 所属应用ID */
  appId?: string | null,
  id?: string | null,
  title?: string | null,
  parentId?: string | null,
  hasChildren?: boolean,
  children?: TreeMenuDto[],
  }

export interface SysAuthDelReqDto {
  /** 权限类型<br/>
  1 = PERSON，人员<br/>
  2 = AUTHORITY，权限 */
  AuthType?: number | null,
  /** 删除的对象ID集合（人员即编码集合/权限即ID集合） */
  ObjIds: string[],
  }

export interface AddDicTypeDto {
  /** 名称 */
  Name: string,
  /** 所属父级 */
  ParenntId?: string | null,
  /** 编码 */
  Code?: string | null,
  /** 排序 */
  Sort?: number | null,
  /** 备注 */
  Remark?: string | null,
  /** 是否启用 */
  IsEnabled?: boolean,
  }

export interface UpdateDicTypeDto {
  /** ID */
  Id: string,
  /** 名称 */
  Name: string,
  /** 所属父级 */
  ParenntId?: string | null,
  /** 编码 */
  Code?: string | null,
  /** 排序 */
  Sort?: number | null,
  /** 备注 */
  Remark?: string | null,
  /** 是否启用 */
  IsEnabled?: boolean,
  }

export interface LPJsonResultListDicTypeInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: DicTypeInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface DicTypeInfoDto {
  /** 分类ID */
  Id?: string | null,
  /** 创建人 */
  CreatedUserName?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 名称 */
  Name: string,
  /** 所属父级 */
  ParenntId?: string | null,
  /** 编码 */
  Code?: string | null,
  /** 排序 */
  Sort?: number | null,
  /** 备注 */
  Remark?: string | null,
  /** 是否启用 */
  IsEnabled?: boolean,
  }

export interface SaveDicDataDto {
  /** 字典数据ID(修改时必传) */
  Id?: string | null,
  /** 字典类型Id */
  TypeId: string,
  /** 值 */
  Value: string,
  /** 编码 */
  Code: string,
  /** 排序 */
  Sort?: number | null,
  /** 备注 */
  Remark?: string | null,
  }

export interface QueryDicDataPageReqDto {
  /** 字典分类ID */
  TypeId?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListDicDataInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: DicDataInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface DicDataInfoDto {
  /** 字典数据ID */
  Id?: string | null,
  /** 分类名称 */
  TypeName?: string | null,
  /** 创建人 */
  CreatedUserName?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 字典类型Id */
  TypeId: string,
  /** 值 */
  Value: string,
  /** 编码 */
  Code: string,
  /** 排序 */
  Sort?: number | null,
  /** 备注 */
  Remark?: string | null,
  }

export interface SysIpWhiteBaseDto {
  /** ID 修改需要传递 */
  Id?: string | null,
  /** 内网IP */
  InnerIp?: string | null,
  /** 外网IP */
  OutIp?: string | null,
  /** 备注 */
  Remark?: string | null,
  /** 是否启用 */
  IsEnabled?: boolean,
  }

export interface LJsonResultListSysIpWhiteListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: SysIpWhiteListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface SysIpWhiteListDto {
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 更新时间 */
  UpdatedTime?: string | null,
  /** 创建者名称 */
  CreatedUserName?: string | null,
  /** 修改者名称 */
  UpdatedUserName?: string | null,
  /** ID 修改需要传递 */
  Id?: string | null,
  /** 内网IP */
  InnerIp?: string | null,
  /** 外网IP */
  OutIp?: string | null,
  /** 备注 */
  Remark?: string | null,
  /** 是否启用 */
  IsEnabled?: boolean,
  }

export interface SysMenuBaseDto {
  /** 菜单ID */
  Id?: string | null,
  /** 应用ID */
  AppId: string,
  /** 所属父级ID */
  ParentId?: string | null,
  /** 编码 */
  Code: string,
  /** 名称 */
  Name: string,
  /** 图标 */
  Icon?: string | null,
  /** 页面地址/链接 */
  Path?: string | null,
  /** 排序码 */
  SortCode?: number | null,
  /** 备注 */
  Remark?: string | null,
  /** 是否是目录 */
  IsDir?: boolean,
  /** 是否是按钮 */
  IsBtn?: boolean,
  /** 是否隐藏 */
  IsHid?: boolean,
  /** 是否启用 */
  IsEnabled?: boolean,
  }

export interface QuerySysMenuPageReqDto {
  /** 所属父级 */
  ParentId?: string | null,
  /** 应用ID */
  AppId?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListSysMenuInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: SysMenuInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface SysMenuInfoDto {
  /** 上级菜单 */
  ParentName?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 创建者名称 */
  CreatedUserName?: string | null,
  /** 菜单ID */
  Id?: string | null,
  /** 应用ID */
  AppId: string,
  /** 所属父级ID */
  ParentId?: string | null,
  /** 编码 */
  Code: string,
  /** 名称 */
  Name: string,
  /** 图标 */
  Icon?: string | null,
  /** 页面地址/链接 */
  Path?: string | null,
  /** 排序码 */
  SortCode?: number | null,
  /** 备注 */
  Remark?: string | null,
  /** 是否是目录 */
  IsDir?: boolean,
  /** 是否是按钮 */
  IsBtn?: boolean,
  /** 是否隐藏 */
  IsHid?: boolean,
  /** 是否启用 */
  IsEnabled?: boolean,
  }

export interface LJsonResultListSysMenuTreeListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: SysMenuTreeListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface SysMenuTreeListDto {
  /** 编码 */
  Code: string,
  /** 名称 */
  Name: string,
  /** 图标 */
  Icon?: string | null,
  /** 页面地址/链接 */
  Path?: string | null,
  /** 排序码 */
  SortCode?: number | null,
  /** 备注 */
  Remark?: string | null,
  /** 是否是目录 */
  IsDir?: boolean,
  /** 是否是按钮 */
  IsBtn?: boolean,
  /** 是否隐藏 */
  IsHid?: boolean,
  /** 是否启用 */
  IsEnabled?: boolean,
  /** 上级菜单 */
  ParentName?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 创建者名称 */
  CreatedUserName?: string | null,
  /** 应用ID */
  AppId?: string | null,
  id?: string | null,
  title?: string | null,
  parentId?: string | null,
  hasChildren?: boolean,
  children?: SysMenuTreeListDto[],
  }

export interface LPJsonResultListSysRoleInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: SysRoleInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface SysRoleInfoDto {
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 创建者名称 */
  CreatedUserName?: string | null,
  /** ID */
  Id?: string | null,
  /** 角色编码 */
  Code: string,
  /** 角色名称 */
  Name: string,
  /** 排序码 */
  Sort?: number | null,
  /** 备注 */
  Remark?: string | null,
  /** 是否启用 */
  IsEnabled?: boolean,
  }

export interface SysRolePersonAssReqDto {
  /** 角色ID集合 */
  RoleIds: string[],
  /** 人员编码集合 */
  PersonCodes: string[],
  }

export interface SysRoleAuthorityReqDto {
  /** 角色ID */
  RoleId: string,
  /** 权限明细ID集合(包含父级) */
  ItemIds: string[],
  }

export interface QueryPersonPageReqDto {
  /** 部门编码 */
  cDepCode?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListUserInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: UserInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface UserInfoDto {
  /** 角色ID集合 */
  RoleIds: string[],
  /** 角色名称列表 */
  RoleNames: string[],
  /** 人员编码 */
  cPersonCode?: string | null,
  /** 人员名称 */
  cPersonName?: string | null,
  /** 部门名称 */
  cDepName?: string | null,
  /** 邮箱 */
  cUserEmail?: string | null,
  /** 手机号 */
  cUserHand?: string | null,
  }

export interface LJsonResultSysUserAuthDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: SysUserAuthDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface SysUserAuthDto {
  /** 有权限的APP列表 */
  Apps?: BaseSelectDto[],
  /** 有权限的菜单列表 */
  Menus?: TreeMenuDto[],
  }

export interface QueryTaskListReqDto {
  /** 查询关键字 */
  KeyWord?: string | null,
  /** 任务状态（默认待接收）<br/>
  0 = PENDING，待接收<br/>
  1 = NORMAL，正常<br/>
  2 = SUSPEND，挂起 */
  TaskState?: number | null,
  }

export interface LJsonResultListTaskBaseDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: TaskBaseDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface TaskBaseDto {
  /** 派工单号 */
  MSCode?: string | null,
  /** 任务ID */
  TaskId?: string | null,
  /** 生产订单号 */
  MoCode?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 计划代号 */
  PlanCode?: string | null,
  /** 计划ID */
  PlanId?: string | null,
  /** 计划下达数量 */
  IssQty?: number | null,
  /** 关闭后计划量 */
  dCloseIssueQty?: number | null,
  /** 派工数量 */
  ShiftQty?: number | null,
  /** 工序组ID */
  OpGroupId?: string | null,
  /** 工序组名称 */
  OpGroup?: string | null,
  /** 工序ID */
  OpId?: string | null,
  /** 工序行号 */
  OpSeq?: number | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 任务状态<br/>
  0 = PENDING，待接收<br/>
  1 = RECEIVED，已接收<br/>
  2 = SUSPEND，挂起<br/>
  3 = RECOVERY，已恢复<br/>
  4 = STARTED，已开工<br/>
  5 = FINISHED，已完工<br/>
  6 = TRANSED，已转单<br/>
  7 = CLOSED，已关闭<br/>
  100 = ALL，全部 */
  TaskState?: number | null,
  /** 任务状态说明 */
  TaskStateStr?: string | null,
  /** 设备ID */
  DeviceId?: string | null,
  /** 设备编码 */
  DeviceCode?: string | null,
  /** 设备名称 */
  DeviceName?: string | null,
  /** 磨具ID */
  MoldId?: string | null,
  /** 磨具编码 */
  MoldCode?: string | null,
  /** 模具名称 */
  MoldName?: string | null,
  }

export interface TaskActionReqDto {
  /** 任务ID */
  TaskId?: string | null,
  /** 操作<br/>
  1 = RECEIVED，已接收<br/>
  2 = SUSPEND，挂起<br/>
  3 = RECOVERY，恢复<br/>
  4 = STARTED，开工<br/>
  5 = FINISHED，完工<br/>
  6 = CLOSED，关闭<br/>
  7 = OPENED，打开 */
  Action?: number | null,
  /** 备注/原因/说明-挂起时最好需要传一下 */
  Remark?: string | null,
  }

export interface TeamGroupSaveReqDto {
  /** ID修改需传 */
  Id?: string | null,
  /** 班组长人员编码集合 */
  ForemanCodes: string[],
  /** 上班时间列表 */
  WorkTimes: string[],
  /** 是否强制更新班组长 */
  BForceUpdForeman?: boolean,
  /** 班组编码 */
  Code?: string | null,
  /** 班组名称 */
  Name: string,
  /** 所属车间ID */
  WorkShopId?: string | null,
  /** 所属工作中心编码 */
  WcCode?: string | null,
  /** 所属部门编码 */
  cDepCode?: string | null,
  /** 备注/说明 */
  Remark?: string | null,
  /** 班组休息时间 08:00-20:00 这种样式 */
  WorkTimme?: string | null,
  /** 是否启用 */
  IsEnabled?: boolean,
  /** 是否启用 */
  IsEnabledStr?: string | null,
  }

export interface QueryTeamGroupPageReqDto {
  /** 工作中心 */
  WcCode?: string | null,
  /** 所属部门 */
  cDepCode?: string | null,
  /** 所属车间ID */
  WorkShopId?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListTeamGroupInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: TeamGroupInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface TeamGroupInfoDto {
  /** 工作中心 */
  WcName?: string | null,
  /** 部门名称 */
  cDepName?: string | null,
  /** 班组长姓名列表 */
  ForemanNames: string[],
  /** 班组长 */
  ForemanNameStr?: string | null,
  /** 所属车间名称 */
  WorkShop?: string | null,
  /** 创建人 */
  CreatedUserName?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  /** ID修改需传 */
  Id?: string | null,
  /** 班组长人员编码集合 */
  ForemanCodes: string[],
  /** 上班时间列表 */
  WorkTimes: string[],
  /** 是否强制更新班组长 */
  BForceUpdForeman?: boolean,
  /** 班组编码 */
  Code?: string | null,
  /** 班组名称 */
  Name: string,
  /** 所属车间ID */
  WorkShopId?: string | null,
  /** 所属工作中心编码 */
  WcCode?: string | null,
  /** 所属部门编码 */
  cDepCode?: string | null,
  /** 备注/说明 */
  Remark?: string | null,
  /** 班组休息时间 08:00-20:00 这种样式 */
  WorkTimme?: string | null,
  /** 是否启用 */
  IsEnabled?: boolean,
  /** 是否启用 */
  IsEnabledStr?: string | null,
  }

export interface PersonAllotmentReqDto {
  /** 班组ID */
  Id: string,
  /** 人员编码列表 */
  cPersonCode: string[],
  }

export interface QueryTeamPersonReqDto {
  /** 班组ID */
  Id?: string | null,
  /** 关键字 */
  keyWord?: string | null,
  }

export interface LJsonResultListTeamPersonDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: TeamPersonDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface TeamPersonDto {
  /** 是否班组长 */
  IsForeman?: boolean,
  /** 班组ID */
  TeamId?: string | null,
  /** 人员编码 */
  cPersonCode?: string | null,
  /** 人员名称 */
  cPersonName?: string | null,
  /** 部门编码 */
  cDepCode?: string | null,
  /** 部门名称 */
  cDepName?: string | null,
  }

export interface DeleteTeamPersonReqDto {
  /** 班组ID集合 */
  Ids: string[],
  /** 人员编码列表 */
  cPersonCodes: string[],
  /** 删除对象 1：班组 2：人员<br/>
  1 = TEAM，班组<br/>
  2 = PERSON，人员<br/>
  101 = MENUDIR，菜单目录<br/>
  102 = MENU，菜单<br/>
  103 = BUTTON，按钮 */
  ObjType?: number | null,
  }

export interface TeamShiftSaveReqDto {
  /** ID修改需传 */
  Id?: string | null,
  /** 班次编码 */
  Code?: string | null,
  /** 班次名称 */
  Name: string,
  /** 开始工作时间 */
  WorkStartTime?: string | null,
  /** 结束工作时间 */
  WorkEndTime?: string | null,
  /** 休息开始时间 */
  RestStartTime?: string | null,
  /** 休息结束时间 */
  RestEndTime?: string | null,
  /** 备注/说明 */
  Remark?: string | null,
  /** 是否启用 */
  IsEnabled?: boolean,
  /** 是否启用 */
  IsEnabledStr?: string | null,
  }

export interface LPJsonResultListTeamShiftInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: TeamShiftInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface TeamShiftInfoDto {
  /** ID */
  Id?: string | null,
  /** 创建人 */
  CreatedUserName?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 班次编码 */
  Code?: string | null,
  /** 班次名称 */
  Name: string,
  /** 开始工作时间 */
  WorkStartTime?: string | null,
  /** 结束工作时间 */
  WorkEndTime?: string | null,
  /** 休息开始时间 */
  RestStartTime?: string | null,
  /** 休息结束时间 */
  RestEndTime?: string | null,
  /** 备注/说明 */
  Remark?: string | null,
  /** 是否启用 */
  IsEnabled?: boolean,
  /** 是否启用 */
  IsEnabledStr?: string | null,
  }

export interface QueryTemTransferDocPageReqDto {
  /** 是否跨车间借调 */
  bCrossWorkShop?: boolean,
  /** 来源车间Id */
  sWorkShopId?: string | null,
  /** 来源班组ID */
  sTeamGroupId?: string | null,
  /** 目的车间Id */
  tWorkShopId?: string | null,
  /** 目的班组ID */
  tTeamGroupId?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListTemTransferDocInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: TemTransferDocInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface TemTransferDocInfoDto {
  /** 来源车间名称 */
  sWorkShop?: string | null,
  /** 目的车间名称 */
  tWorkShop?: string | null,
  /** 来源班组名称 */
  sTeamGroup?: string | null,
  /** 目的班组名称 */
  tTeamGroup?: string | null,
  /** 制单人 */
  CreatedUserName?: string | null,
  /** 制单日期 */
  CreatedTime?: string | null,
  /** 生效状态 */
  IsEnabled?: boolean,
  /** 生效状态 */
  IsEnabledStr?: string | null,
  /** 修改时需要传 */
  Id: string,
  /** 单号 */
  DocCode?: string | null,
  /** 是否跨车间借调 */
  bCrossWorkShop?: boolean,
  /** 是否跨车间借调 */
  bCrossWorkShopStr?: string | null,
  /** 来源车间Id */
  sWorkShopId: string,
  /** 目的车间Id */
  tWorkShopId: string,
  /** 来源班组Id */
  sTeamGroupId: string,
  /** 目的班组Id */
  tTeamGroupId: string,
  /** 借调人员编码 */
  cPersonCode: string,
  /** 借调人员名称 */
  cPerson?: string | null,
  /** 开始时间 */
  StartTime: string,
  /** 结束时间 */
  EndTime: string,
  /** 借调原因 */
  Reason?: string | null,
  }

export interface TemTransferDocSaveReqDto {
  /** 修改时需要传 */
  Id: string,
  /** 单号 */
  DocCode?: string | null,
  /** 是否跨车间借调 */
  bCrossWorkShop?: boolean,
  /** 是否跨车间借调 */
  bCrossWorkShopStr?: string | null,
  /** 来源车间Id */
  sWorkShopId: string,
  /** 目的车间Id */
  tWorkShopId: string,
  /** 来源班组Id */
  sTeamGroupId: string,
  /** 目的班组Id */
  tTeamGroupId: string,
  /** 借调人员编码 */
  cPersonCode: string,
  /** 借调人员名称 */
  cPerson?: string | null,
  /** 开始时间 */
  StartTime: string,
  /** 结束时间 */
  EndTime: string,
  /** 借调原因 */
  Reason?: string | null,
  }

export interface LJsonResultListWHListResDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: WHListResDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface WHListResDto {
  /** 仓库名字 */
  cWhName?: string | null,
  /** 仓库编码 */
  cWhCode?: string | null,
  /** 是否启用货位 */
  bWhPos?: boolean,
  /** 仓库类型 */
  iWHProperty?: string | null,
  /** 仓库算法 */
  cWhValueStyle?: string | null,
  }

export interface QueryWhInvPosStockReqDto {
  /** 仓库编码 */
  cWhCode: string,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 货位编码(当货位编码为空时，查询仓库存量) */
  cPosCode?: string | null,
  }

export interface LJsonResultListWhInvPosStockDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: WhInvPosStockDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface WhInvPosStockDto {
  /** 仓库编码 */
  cWhCode?: string | null,
  /** 仓库名称 */
  cWhName?: string | null,
  /** 货位编码 */
  cPosCode?: string | null,
  /** 货位名称 */
  cPosName?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 批次 */
  cBatch?: string | null,
  /** 现存量 */
  Qty?: number | null,
  }

export interface LJsonResultListPositionListResDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: PositionListResDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface PositionListResDto {
  /** 货位编码 */
  cPosCode?: string | null,
  /** 货位名称 */
  cPosName?: string | null,
  /** 货位存量 */
  iQuantity?: number | null,
  }

export interface TransVouchSaveReqDto {
  /** 调拨单ID */
  Id?: number | null,
  /** 调拨日期-不穿的话默认当天 */
  dTVDate?: string | null,
  /** 调出仓库编码 */
  cOWhCode: string,
  /** 出库类别编码 */
  cORdCode?: string | null,
  /** 调入仓库编码 */
  cIWhCode: string,
  /** 入库类别编码 */
  cIRdCode?: string | null,
  /** 转出部门编码 */
  cODepCode: string,
  /** 转入部门编码 */
  cIDepCode: string,
  /** 调拨备注 */
  cTVMemo?: string | null,
  /** 调拨明细 */
  InvDtos?: TransInvDto[],
  }

export interface TransInvDto {
  /** 子表ID */
  AutoId?: number | null,
  /** 存货编码 */
  cInvCode: string,
  /** 调拨数量 */
  iTVQuantity?: number | null,
  /** 调拨批次 */
  cTVBatch?: string | null,
  /** 调出货位编码 */
  coutposcode?: string | null,
  /** 调入货位编码 */
  cinposcode?: string | null,
  }

export interface LJsonResultListWaitAuditTransVouchDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: WaitAuditTransVouchDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface WaitAuditTransVouchDto {
  /** 调拨单ID */
  Id?: number | null,
  /** 调拨单号 */
  cTVCode?: string | null,
  /** 单据日期 */
  dTVDate?: string | null,
  /** 调出仓库编码 */
  cOWhCode?: string | null,
  /** 调出仓库是否启用货位 */
  bOWhPos?: boolean,
  /** 调入仓库是否启用货位 */
  bIWhPos?: boolean,
  /** 调出仓库名称 */
  cOWhName?: string | null,
  /** 调入仓库编码 */
  cIWhCode?: string | null,
  /** 调入仓库名称 */
  cIWhName?: string | null,
  /** 调出类别编码 */
  cORdCode?: string | null,
  /** 调出类别名称 */
  cORdName?: string | null,
  /** 调入类别编码 */
  cIRdCode?: string | null,
  /** 调入部门编码 */
  cIDepCode?: string | null,
  /** 调出部门编码 */
  cODepCode?: string | null,
  /** 调入类别名称 */
  cIRdName?: string | null,
  /** 备注 */
  cTVMemo?: string | null,
  /** 单据条码 */
  csysbarcode?: string | null,
  }

export interface LJsonResultListTransVouchInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: TransVouchInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface TransVouchInfoDto {
  /** 调拨单号 */
  cTVCode?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 是否启用批次 */
  bInvBatch?: boolean,
  /** 数量 */
  iTVQuantity?: number | null,
  /** 调拨批次 */
  cTVBatch?: string | null,
  /** 子表ID */
  autoId?: number | null,
  /** 主表ID */
  ID?: number | null,
  /** 调出货位 */
  coutposcode?: string | null,
  /** 调出货位名称 */
  coutposname?: string | null,
  /** 调入货位 */
  cinposcode?: string | null,
  /** 调入货位名称 */
  cinposname?: string | null,
  }

export interface LJsonResultListWorkCenterDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: WorkCenterDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface WorkCenterDto {
  /** 工作中心ID */
  WcId?: number | null,
  /** 工作中心编码 */
  WcCode?: string | null,
  /** 工作中心名称 */
  WcDesc?: string | null,
  /** 部门编码 */
  DeptCode?: string | null,
  /** 部门名称 */
  DeptName?: string | null,
  }

export interface LPJsonResultListPersonDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: PersonDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface PersonDto {
  /** 人员编码 */
  cPersonCode?: string | null,
  /** 人员名称 */
  cPersonName?: string | null,
  /** 部门编码 */
  cDepCode?: string | null,
  /** 部门名称 */
  cDepName?: string | null,
  }

export interface LPJsonResultListOpUserDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: OpUserDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface LJsonResultListInvClassTreeDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: InvClassTreeDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface InvClassTreeDto {
  /** 存货分类编码 */
  cInvCCode?: string | null,
  /** 存货分类名称 */
  cInvCName?: string | null,
  id?: string | null,
  title?: string | null,
  parentId?: string | null,
  hasChildren?: boolean,
  children?: InvClassTreeDto[],
  }

export interface QueryInvPageReqDto {
  /** 存货分类编码 */
  cInvCCode?: string | null,
  /** 供应商编码 */
  cVenCode?: string | null,
  /** 是否生产耗用 */
  bComsume?: boolean,
  /** 是否是BOM查询 */
  bBomQuery?: boolean,
  /** 是否只查委外的存货 */
  bProxyForeign?: boolean,
  /** 是否允许生产订单 */
  bProductBill?: boolean,
  /** 是否查询已生码的数据 */
  bFilterRawCode?: boolean,
  /** 是否过滤自制件 */
  bSelf?: boolean,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListInventoryDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: InventoryDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface InventoryDto {
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 存货分类编码 */
  cInvCCode?: string | null,
  /** 存货分类名称 */
  cInvCName?: string | null,
  /** 计量单位编码 */
  cComUnitCode?: string | null,
  /** 计量单位名称 */
  cComUnitName?: string | null,
  /** 存货是否启用批次 */
  bInvBatch?: boolean,
  /** 是否启用一品多点 */
  bInvFree?: boolean,
  /** 是否保质期管理 */
  bInvQuality?: boolean,
  /** 保质期 */
  iMassDate?: number | null,
  /** 保质期单位 */
  cMissUnit?: number | null,
  /** 保质期单位<br/>
  1 = YEAR，年<br/>
  2 = MONTH，月<br/>
  3 = DAY，日 */
  MissUnit?: number | null,
  /** 颜色 */
  cInvDefine1?: string | null,
  /** 版本号 */
  cInvDefine2?: string | null,
  /** 穴号 */
  cInvDefine3?: string | null,
  /** 模具编码 */
  cInvDefine4?: string | null,
  /** 项目负责人 */
  cInvDefine5?: string | null,
  /** 机器吨位 */
  cInvDefine6?: string | null,
  /** 工艺流程 */
  cInvDefine7?: string | null,
  /** 对应客户编码 */
  cInvDefine8?: string | null,
  /** 默认项目编码 */
  cDefItemCode?: string | null,
  /** 默认仓库编码 */
  cDefWareHouse?: string | null,
  /** 默认仓库名称 */
  cDefWareHouseName?: string | null,
  /** 默认货位 */
  cPosCode?: string | null,
  /** 工艺路线ID */
  PRoutingId?: string | null,
  /** 是否允许生产订单 */
  bProductBill?: boolean,
  /** 生产单位 */
  cProductUnit?: string | null,
  /** 原币单价 */
  iUnitPrice?: number | null,
  /** 原币含税单价 */
  iTaxUnitPrice?: number | null,
  /** 税率 */
  iTaxRate?: number | null,
  /** 供应倍数-包装数 */
  fSupplyMulti?: number | null,
  /** BOMID(最新生效的) */
  BomId?: string | null,
  /** PartId */
  PartId?: string | null,
  /** 存货属性 */
  cInvAtrr?: string | null,
  /** 默认部门编码 */
  cDefDepCode?: string | null,
  /** 默认部门名称 */
  cDefDepName?: string | null,
  /** 供应类型 */
  iSupplyType?: number | null,
  /** 供应类型名称 */
  SupplyType?: string | null,
  /** 是否自制 */
  bSelf?: boolean,
  /** 是否采购 */
  bPurchase?: boolean,
  /** 是否委外 */
  bProxyForeign?: boolean,
  /** 是否生产耗用 */
  bComsume?: boolean,
  /** 是否应税劳务 */
  bService?: boolean,
  /** 是否内销 */
  bSale?: boolean,
  }

export interface LPJsonResultListCusBaseDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: CusBaseDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface CusBaseDto {
  /** 客户编码 */
  cCusCode?: string | null,
  /** 客户名称 */
  cCusName?: string | null,
  /** 客户简称 */
  cCusAbbName?: string | null,
  /** 客户分类编码 */
  cCCCode?: string | null,
  /** 客户分类名称 */
  cCCName?: string | null,
  /** 客户地址 */
  cCusAddress?: string | null,
  /** 客户联系人 */
  cCusPerson?: string | null,
  /** 联系人邮箱 */
  cCusEmail?: string | null,
  /** 联系人手机 */
  cCusPhone?: string | null,
  }

export interface QueryWhListReqDto {
  /** 是否代管仓 */
  bProxyWh?: boolean,
  /** 是否资产仓 */
  bWhAsset?: boolean,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListWarehouseBaseDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: WarehouseBaseDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface QueryPositionPageReqDto {
  /** 仓库编码 */
  WhCode?: string | null,
  /** 是否查询已生码的数据 */
  bFilterRawCode?: boolean,
  /** 货位编码开始 */
  posCodeBegin?: string | null,
  /** 货位编码结束 */
  posCodeEnd?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListPositionDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: PositionDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface PositionDto {
  /** 货位编码 */
  cPosCode?: string | null,
  /** 货位名称 */
  cPosName?: string | null,
  /** 是否末级 */
  bPosEnd?: boolean,
  /** 仓库编码 */
  cWhCode?: string | null,
  /** 仓库名称 */
  cWhName?: string | null,
  /** 备注 */
  cMemo?: string | null,
  }

export interface QueryVenPageReqDto {
  /** 是否过滤只查采购 */
  BPurchase?: boolean,
  /** 是否过滤只查委外 */
  bProxyForeign?: boolean,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListVendorDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: VendorDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface VendorDto {
  /** 供应商编码 */
  cVenCode?: string | null,
  /** 供应商名称 */
  cVenName?: string | null,
  /** 供应商简称 */
  cVenAbbName?: string | null,
  /** 供应商分类编码 */
  cVCCode?: string | null,
  /** 供应商分类名称 */
  cVCName?: string | null,
  /** 开发日期 */
  dVenDevDate?: string | null,
  /** 联系人 */
  cVenPerson?: string | null,
  /** 供应商总公司编码 */
  cVenHeadCode?: string | null,
  /** 币种 */
  cVenExch_name?: string | null,
  /** 税率 */
  iVenTaxRate?: string | null,
  /** 是否货物（采购） */
  bVenCargo?: boolean,
  /** 是否委外 */
  bProxyForeign?: boolean,
  /** 是否服务 */
  bVenService?: boolean,
  }

export interface QueryMomRdPageReqDto {
  /** 是否只查询MES创建的入库单 */
  BQueryMesCreate?: boolean,
  /** 存货编码开始 */
  cInvCodeStart?: string | null,
  /** 存货编码结束 */
  cInvCodeEnd?: string | null,
  /** 单据日期开始 */
  dDateBegin?: string | null,
  /** 单据日期结束 */
  dDateEnd?: string | null,
  /** 是否查询已生码的数据 */
  bFilterRawCode?: boolean,
  /** 入库单号 */
  cCode?: string | null,
  /** 部门编码 */
  cDepCode?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListMomRdListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: MomRdListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface MomRdListDto {
  /** 主表ID */
  ID?: number | null,
  /** 入库单号 */
  cCode?: string | null,
  /** 入库仓库编码 */
  cWhCode?: string | null,
  /** 入库仓库 */
  cWhName?: string | null,
  /** 入库日期 */
  dDate?: string | null,
  /** 部门编码 */
  cDepCode?: string | null,
  /** 部门名称 */
  cDepName?: string | null,
  /** 制单人 */
  cMaker?: string | null,
  /** 入库单子表ID */
  AutoID?: number | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 计量单位编码 */
  cComUnitCode?: string | null,
  /** 计量单位名称 */
  cComUnitName?: string | null,
  /** 入库数量 */
  iQuantity?: number | null,
  /** 批次 */
  cBatch?: string | null,
  /** 生产订单子表ID */
  iMPoIds?: number | null,
  /** 生产订单号 */
  cmocode?: string | null,
  /** 来源 */
  cDefine1?: string | null,
  }

export interface QueryPuArrPageReqDto {
  /** 存货编码开始 */
  cInvCodeStart?: string | null,
  /** 存货编码结束 */
  cInvCodeEnd?: string | null,
  /** 单据日期开始 */
  dDateBegin?: string | null,
  /** 单据日期结束 */
  dDateEnd?: string | null,
  /** 是否查询已生码的数据 */
  bFilterRawCode?: boolean,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListPuArrListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: PuArrListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface PuArrListDto {
  /** 主表ID */
  ID?: number | null,
  /** 业务类型 */
  cBusType?: string | null,
  /** 到货单号 */
  cCode?: string | null,
  /** 单据日期 */
  dDate?: string | null,
  /** 供应商编码 */
  cVenCode?: string | null,
  /** 供应商名称 */
  cVenName?: string | null,
  /** 部门编码 */
  cDepCode?: string | null,
  /** 部门名称 */
  cDepName?: string | null,
  /** 制单人 */
  cMaker?: string | null,
  /** 制单时间 */
  cMakeTime?: string | null,
  /** 到货单子表ID */
  AutoID?: number | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 存货名称 */
  cInvName?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 计量单位编码 */
  cComUnitCode?: string | null,
  /** 计量单位名称 */
  cComUnitName?: string | null,
  /** 入库数量 */
  iQuantity?: number | null,
  /** 到货仓库编码 */
  cWhCode?: string | null,
  /** 批次 */
  cBatch?: string | null,
  /** 行号 */
  ivouchrowno?: number | null,
  }

export interface QueryWhPosBatchStockReqDto {
  /** 存货编码 */
  cInvCode: string,
  /** 仓库编码 */
  cWhCode?: string | null,
  /** 货位编码 */
  cPosCode?: string | null,
  }

export interface LJsonResultListInvWhPosBatchStockDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: InvWhPosBatchStockDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface InvWhPosBatchStockDto {
  /** 仓库编码 */
  cWhCode?: string | null,
  /** 仓库名称 */
  cWhName?: string | null,
  /** 货位编码 */
  cPosCode?: string | null,
  /** 批次 */
  cBatch?: string | null,
  /** 存量 */
  Qty?: number | null,
  }

export interface QueryWhStockSumReqDto {
  /** 仓库编码 */
  cWhCode?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 批号 */
  cBatch?: string | null,
  }

export interface LJsonResultListWHStockSumDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: WHStockSumDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface WHStockSumDto {
  /** 仓库编码 */
  cWhCode?: string | null,
  /** 仓库名称 */
  cWhName?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 现存量 */
  Qty?: number | null,
  /** 批号 */
  cBatch?: string | null,
  /** 是否启用货位 */
  bWhPos?: boolean,
  }

export interface LJsonResultListRdStyleDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: RdStyleDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface RdStyleDto {
  /** 类别编码 */
  cRdCode?: string | null,
  /** 类别名称 */
  cRdName?: string | null,
  }

export interface QuerySfcOperationListReqDto {
  /** 工作中心ID */
  WcId?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListSfcOperationDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: SfcOperationDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface SfcOperationDto {
  /** 工序ID */
  OperationId?: number | null,
  /** 工序编码 */
  OpCode?: string | null,
  /** 工序名称 */
  Description?: string | null,
  /** 工序中心ID */
  WcId?: number | null,
  /** 工作中心名称 */
  WcName?: string | null,
  /** 是否是计划委外工序 */
  PlanSubFlag?: boolean,
  /** 是否是委外工序 */
  SubFlag?: boolean,
  /** 是否是倒冲工序 */
  BFFlag?: boolean,
  /** 是否是报告点 */
  ReportFlag?: boolean,
  /** 是否是计费点 */
  FeeFlag?: boolean,
  }

export interface QuerySfcPRoutingListReqDto {
  /** 料品编码开始 */
  cInvCodeBegin?: string | null,
  /** 料品编码结束 */
  cInvCodeEnd?: string | null,
  /** 存货编码 */
  cInvCodes: string[],
  /** 工艺路线ID */
  ProutingIds: number[],
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListSfcPRoutingDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: SfcPRoutingDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface SfcPRoutingDto {
  /** 唯一ID */
  UId?: string | null,
  /** 料品工艺路线ID */
  PRoutingId?: number | null,
  /** 工艺路线类型 1：主要 2：替代 */
  RountingType?: number | null,
  /** 版本号 */
  Version?: string | null,
  /** 版本说明 */
  VersionDesc?: string | null,
  /** 版本生效日期 */
  VersionEffDate?: string | null,
  /** 版本失效日期 */
  VersionEndDate?: string | null,
  /** 料品ID */
  PartId?: number | null,
  /** 料品编码 */
  cInvCode?: string | null,
  /** 料品名称 */
  cInvName?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 存货代码 */
  cInvAddCode?: string | null,
  /** 计量单位编码 */
  cComUnitCode?: string | null,
  /** 计量单位名称 */
  cComUnitName?: string | null,
  }

export interface LJsonResultListSfcPRoutingDetailDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: SfcPRoutingDetailDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface SfcPRoutingDetailDto {
  /** 工艺路线字表ID */
  PRoutingDId?: number | null,
  /** 工艺路线ID */
  PRoutingId?: number | null,
  /** 工序行号 */
  OpSeq?: string | null,
  /** 生效日期 */
  EffBegDate?: string | null,
  /** 失效日期 */
  EffEndDate?: string | null,
  /** 是否末道工序 */
  LastFlag?: boolean,
  /** 工序ID */
  OperationId?: number | null,
  /** 工序编码 */
  OpCode?: string | null,
  /** 工序名称 */
  Description?: string | null,
  /** 工序中心ID */
  WcId?: number | null,
  /** 工作中心名称 */
  WcName?: string | null,
  /** 是否是计划委外工序 */
  PlanSubFlag?: boolean,
  /** 是否是委外工序 */
  SubFlag?: boolean,
  /** 是否是倒冲工序 */
  BFFlag?: boolean,
  /** 是否是报告点 */
  ReportFlag?: boolean,
  /** 是否是计费点 */
  FeeFlag?: boolean,
  }

export interface QueryInvBomListReqDto {
  /** 存货编码 */
  cInvCode: string,
  }

export interface LJsonResultListInvBomVersionDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: InvBomVersionDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface InvBomVersionDto {
  /** 版本号 */
  Version?: number | null,
  /** 版本说明 */
  VersionDesc?: string | null,
  /** 生效日期 */
  VersionEffDate?: string | null,
  /** BOMID */
  BomId?: number | null,
  }

export interface QueryBomRootReqDto {
  /** 存货编码 */
  cInvCode?: string | null,
  /** 母件多阶查询时版本号 */
  Version?: string | null,
  /** 物料ID */
  PartId?: string | null,
  /** 母件多阶查询时必传 */
  BomId?: string | null,
  /** BOM查询方式<br/>
  0 = PARENT，母件全阶<br/>
  1 = COMPONENT，子件全阶 */
  QueryWay?: number | null,
  /** 是否查询根节点 */
  BQueryRoot?: boolean,
  }

export interface LJsonResultListBomLeftListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: BomLeftListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface BomLeftListDto {
  /** 物料编码 */
  cInvCode?: string | null,
  /** 物料代码 */
  cInvAddCode?: string | null,
  /** 物料名称 */
  cInvName?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** BOMID */
  BomId?: number | null,
  /** 物料ID */
  PartId?: number | null,
  /** 是否末级 */
  BLevelEnd?: boolean,
  /** 版本 */
  Version?: number | null,
  /** 子件查询时用 */
  BomIds: number[],
  }

export interface QueryBomInfoReqDto {
  /** 物料ID */
  PartId: number,
  /** BOM ID */
  BomId: number,
  /** 母件多阶查询时版本号 */
  Version?: string | null,
  /** BOM 查询方式<br/>
  0 = PARENT，母件全阶<br/>
  1 = COMPONENT，子件全阶 */
  QueryWay?: number | null,
  }

export interface LJsonResultBomInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: BomInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface BomInfoDto {
  /** 存货编码 */
  InvCode?: string | null,
  /** 存货代码 */
  InvAddCode?: string | null,
  /** 存货名称 */
  InvName?: string | null,
  /** 规格型号 */
  InvStd?: string | null,
  /** 物料属性 */
  InvAttr?: string | null,
  /** 计量单位 */
  UnitName?: string | null,
  /** 版本代号 */
  Version?: string | null,
  /** 版本说明 */
  VersionDesc?: string | null,
  /** 版本日期 */
  VersionEffDate?: string | null,
  /** 母件损耗率 */
  ParentScrap?: number | null,
  /** BOMID */
  BomId?: string | null,
  /** BOM表体数据 */
  Bodys?: BomBodyDto[],
  }

export interface BomBodyDto {
  /** 行号 */
  SortSeq?: number | null,
  /** 存货编码 */
  DInvCode?: string | null,
  /** 存货代码 */
  DInvAddCode?: string | null,
  /** 存货名称 */
  DInvName?: string | null,
  /** 规格型号 */
  DInvStd?: string | null,
  /** 物料属性 */
  DPartAttr?: string | null,
  /** 计量单位 */
  DUnitName?: string | null,
  /** 版本代号 */
  Version?: string | null,
  /** 版本说明 */
  VersionDesc?: string | null,
  /** 版本日期 */
  VersionEffDate?: string | null,
  /** 基本用量 */
  BaseQtyN?: number | null,
  /** 基础用量 */
  BaseQtyD?: number | null,
  /** 供应类型 */
  WIPType?: string | null,
  /** 供应类型 */
  DWIPType?: string | null,
  /** 生效日期 */
  EffBegDate?: string | null,
  /** 失效日期 */
  EffEndDate?: string | null,
  /** 仓库代号 */
  WhCode?: string | null,
  /** 仓库名称 */
  WhName?: string | null,
  /** 图号 */
  DInvDefine_1?: string | null,
  /** 图纸版本 */
  DInvDefine_2?: string | null,
  /** 图面材质 */
  DInvDefine_3?: string | null,
  /** 项目编码 */
  DInvDefine_5?: string | null,
  }

export interface VendorUpdatePassReqDto {
  /** 老密码 */
  OldPass: string,
  /** 新密码 */
  NewPass: string,
  }

export interface VenResetPassReqDto {
  /** 供应商编码 */
  cVenCode: string,
  /** 重置后的密码（不传就重置为默认密码） */
  Pass?: string | null,
  }

export interface QueryVenOrderPageReqDto {
  /** 订单日期开始 */
  dPoDateBegin?: string | null,
  /** 订单日期结束 */
  dPoDateEnd?: string | null,
  /** 订单号开始 */
  cPoIdBegin?: string | null,
  /** 订单号结束 */
  cPoIdEnd?: string | null,
  /** 存货编码开始 */
  cInvCodeBegin?: string | null,
  /** 存货编码结束 */
  cInvCodeEnd?: string | null,
  /** 供应商接收状态<br/>
  0 = UNREVICE，未接收<br/>
  1 = PARTREVICE，部分接收<br/>
  2 = REVICED，已全部接收<br/>
  100 = ALL，全部 */
  ReviceState?: number | null,
  /** 订单类型<br/>
  0 = POORDER，采购订单<br/>
  1 = QM01，来料报检单<br/>
  1 = QM01，来料报检单<br/>
  2 = OtherRd，其他入库单<br/>
  3 = RdRecord，采购入库单<br/>
  4 = PuArr，采购到货单<br/>
  5 = QM05，产品不良品处理单<br/>
  6 = QMCheckVoucher，来料检验单<br/>
  16 = QM16，工序不良品处理单<br/>
  17 = SoMain，销售订单<br/>
  18 = QM18，发退货不良品处理单<br/>
  19 = QM19，其他不良品处理单<br/>
  21 = MomOrder，生产订单<br/>
  26 = SaleBillZVouch，销售专用发票<br/>
  27 = SaleBillVouch，销售发票<br/>
  31 = FC31，生产订单工序转移单<br/>
  48 = RR，收款单<br/>
  49 = RP，付款单<br/>
  71 = Dispatch，销售发货单<br/>
  90 = MomReport，订单报工<br/>
  111 = PurBillVouch，采购发票<br/>
  112 = PurBillZVouch，采购专用发票<br/>
  121 = HYMomOrder，委外加工单<br/>
  303 = SaleOut，销售出库单<br/>
  313 = Adjust，货位调整单<br/>
  314 = ScrapVoucher，不合格品记录单<br/>
  411 = Rdrecord10，产成品入库单<br/>
  411 = Rdrecord10，产成品入库单<br/>
  412 = MaterialOutStock，材料出库单 */
  OrderType?: number | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListVenPoOrderListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: VenPoOrderListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface VenPoOrderListDto {
  /** 业务类型（中文名称） */
  cbustype?: string | null,
  /** 采购订单号 */
  cpoid?: string | null,
  /** 主表ID */
  poid?: string | null,
  /** 订单日期 */
  dpodate?: string | null,
  /** 部门编码 */
  cdepcode?: string | null,
  /** 部门名称 */
  cdepname?: string | null,
  /** 人员编码 */
  cpersoncode?: string | null,
  /** 业务员名称 */
  cpersonname?: string | null,
  /** 币种名称 */
  cexch_name?: string | null,
  /** 采购类型编码 */
  cptcode?: string | null,
  /** 采购类型 */
  cptname?: string | null,
  /** 备注 */
  cmemo?: string | null,
  /** 子表ID */
  id?: string | null,
  /** 存货编码 */
  cinvcode?: string | null,
  /** 存货代码 */
  cinvaddcode?: string | null,
  /** 存货名称 */
  cinvname?: string | null,
  /** 规格型号 */
  cinvstd?: string | null,
  /** 主计量 */
  cinvm_unit?: string | null,
  /** 数量 */
  iquantity?: number | null,
  /** 计划到货时间 */
  darrivedate?: string | null,
  /** 图号 */
  cinvdefine1?: string | null,
  /** 图纸版本 */
  cinvdefine2?: string | null,
  /** 图面材质 */
  cinvdefine3?: string | null,
  /** 供应商接收状态<br/>
  0 = UNREVICE，未接收<br/>
  1 = PARTREVICE，部分接收<br/>
  2 = REVICED，已全部接收<br/>
  100 = ALL，全部 */
  reviceState?: number | null,
  /** 供应商接收数量 */
  reviceQty?: number | null,
  /** 剩余可接收数量 */
  syReviceQty?: number | null,
  }

export interface VenOrderReviceReqDto {
  /** 接收明细集合 */
  ReviceDtos: VenOrderReviceDto[],
  /** 订单类型<br/>
  0 = POORDER，采购订单<br/>
  1 = QM01，来料报检单<br/>
  1 = QM01，来料报检单<br/>
  2 = OtherRd，其他入库单<br/>
  3 = RdRecord，采购入库单<br/>
  4 = PuArr，采购到货单<br/>
  5 = QM05，产品不良品处理单<br/>
  6 = QMCheckVoucher，来料检验单<br/>
  16 = QM16，工序不良品处理单<br/>
  17 = SoMain，销售订单<br/>
  18 = QM18，发退货不良品处理单<br/>
  19 = QM19，其他不良品处理单<br/>
  21 = MomOrder，生产订单<br/>
  26 = SaleBillZVouch，销售专用发票<br/>
  27 = SaleBillVouch，销售发票<br/>
  31 = FC31，生产订单工序转移单<br/>
  48 = RR，收款单<br/>
  49 = RP，付款单<br/>
  71 = Dispatch，销售发货单<br/>
  90 = MomReport，订单报工<br/>
  111 = PurBillVouch，采购发票<br/>
  112 = PurBillZVouch，采购专用发票<br/>
  121 = HYMomOrder，委外加工单<br/>
  303 = SaleOut，销售出库单<br/>
  313 = Adjust，货位调整单<br/>
  314 = ScrapVoucher，不合格品记录单<br/>
  411 = Rdrecord10，产成品入库单<br/>
  411 = Rdrecord10，产成品入库单<br/>
  412 = MaterialOutStock，材料出库单 */
  OrderType?: number | null,
  }

export interface VenOrderReviceDto {
  /** 订单子表ID */
  IPOSID: string,
  /** 接收数量 */
  RQty?: number | null,
  /** 备注说明 */
  Remark?: string | null,
  }

export interface QueryVenDeliveryOrderReqDto {
  /** 订单日期开始 */
  dPoDateBegin?: string | null,
  /** 订单日期结束 */
  dPoDateEnd?: string | null,
  /** 订单号开始 */
  cPoIdBegin?: string | null,
  /** 订单号结束 */
  cPoIdEnd?: string | null,
  /** 存货编码开始 */
  cInvCodeBegin?: string | null,
  /** 存货编码结束 */
  cInvCodeEnd?: string | null,
  /** 订单类型<br/>
  0 = POORDER，采购订单<br/>
  1 = QM01，来料报检单<br/>
  1 = QM01，来料报检单<br/>
  2 = OtherRd，其他入库单<br/>
  3 = RdRecord，采购入库单<br/>
  4 = PuArr，采购到货单<br/>
  5 = QM05，产品不良品处理单<br/>
  6 = QMCheckVoucher，来料检验单<br/>
  16 = QM16，工序不良品处理单<br/>
  17 = SoMain，销售订单<br/>
  18 = QM18，发退货不良品处理单<br/>
  19 = QM19，其他不良品处理单<br/>
  21 = MomOrder，生产订单<br/>
  26 = SaleBillZVouch，销售专用发票<br/>
  27 = SaleBillVouch，销售发票<br/>
  31 = FC31，生产订单工序转移单<br/>
  48 = RR，收款单<br/>
  49 = RP，付款单<br/>
  71 = Dispatch，销售发货单<br/>
  90 = MomReport，订单报工<br/>
  111 = PurBillVouch，采购发票<br/>
  112 = PurBillZVouch，采购专用发票<br/>
  121 = HYMomOrder，委外加工单<br/>
  303 = SaleOut，销售出库单<br/>
  313 = Adjust，货位调整单<br/>
  314 = ScrapVoucher，不合格品记录单<br/>
  411 = Rdrecord10，产成品入库单<br/>
  411 = Rdrecord10，产成品入库单<br/>
  412 = MaterialOutStock，材料出库单 */
  OrderType?: number | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListVenDeliveryPoOrderListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: VenDeliveryPoOrderListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface VenDeliveryPoOrderListDto {
  /** 业务类型（中文名称） */
  cbustype?: string | null,
  /** 采购订单号 */
  cpoid?: string | null,
  /** 主表ID */
  poid?: string | null,
  /** 订单日期 */
  dpodate?: string | null,
  /** 部门编码 */
  cdepcode?: string | null,
  /** 部门名称 */
  cdepname?: string | null,
  /** 人员编码 */
  cpersoncode?: string | null,
  /** 业务员名称 */
  cpersonname?: string | null,
  /** 币种名称 */
  cexch_name?: string | null,
  /** 采购类型编码 */
  cptcode?: string | null,
  /** 采购类型 */
  cptname?: string | null,
  /** 备注 */
  cmemo?: string | null,
  /** 子表ID */
  id?: string | null,
  /** 存货编码 */
  cinvcode?: string | null,
  /** 存货代码 */
  cinvaddcode?: string | null,
  /** 存货名称 */
  cinvname?: string | null,
  /** 规格型号 */
  cinvstd?: string | null,
  /** 主计量 */
  cinvm_unit?: string | null,
  /** 数量 */
  iquantity?: number | null,
  /** 计划到货时间 */
  darrivedate?: string | null,
  /** 图号 */
  cinvdefine1?: string | null,
  /** 图纸版本 */
  cinvdefine2?: string | null,
  /** 图面材质 */
  cinvdefine3?: string | null,
  /** 是否启用批次 */
  bInvBatch?: boolean,
  /** 接收总数量 */
  reviceQty?: number | null,
  /** 已发货数量 */
  deliveryQty?: number | null,
  /** 剩余可发货数量 */
  syDeliveryQty?: number | null,
  }

export interface LPJsonResultListVenOMOrderListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: VenOMOrderListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface VenOMOrderListDto {
  /** 业务类型（中文名称） */
  cbustype?: string | null,
  /** 委外订单号 */
  ccode?: string | null,
  /** 主表ID */
  moid?: string | null,
  /** 订单日期 */
  ddate?: string | null,
  /** 部门编码 */
  cdepcode?: string | null,
  /** 部门名称 */
  cdepname?: string | null,
  /** 人员编码 */
  cpersoncode?: string | null,
  /** 业务员名称 */
  cpersonname?: string | null,
  /** 币种名称 */
  cexch_name?: string | null,
  /** 委外类型编码 */
  cptcode?: string | null,
  /** 委外类型 */
  cptname?: string | null,
  /** 备注 */
  cmemo?: string | null,
  /** 子表ID */
  modetailsid?: string | null,
  /** 存货编码 */
  cinvcode?: string | null,
  /** 存货代码 */
  cinvaddcode?: string | null,
  /** 存货名称 */
  cinvname?: string | null,
  /** 规格型号 */
  cinvstd?: string | null,
  /** 主计量 */
  cinvm_unit?: string | null,
  /** 数量 */
  iquantity?: number | null,
  /** 计划到货时间 */
  darrivedate?: string | null,
  /** 图号 */
  cinvdefine1?: string | null,
  /** 图纸版本 */
  cinvdefine2?: string | null,
  /** 图面材质 */
  cinvdefine3?: string | null,
  /** 供应商接收状态<br/>
  0 = UNREVICE，未接收<br/>
  1 = PARTREVICE，部分接收<br/>
  2 = REVICED，已全部接收<br/>
  100 = ALL，全部 */
  reviceState?: number | null,
  /** 供应商接收数量 */
  reviceQty?: number | null,
  /** 剩余可接收数量 */
  syReviceQty?: number | null,
  }

export interface LPJsonResultListVenDeliveryOMOrderListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: VenDeliveryOMOrderListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface VenDeliveryOMOrderListDto {
  /** 业务类型（中文名称） */
  cbustype?: string | null,
  /** 委外订单号 */
  ccode?: string | null,
  /** 主表ID */
  moid?: string | null,
  /** 订单日期 */
  ddate?: string | null,
  /** 部门编码 */
  cdepcode?: string | null,
  /** 部门名称 */
  cdepname?: string | null,
  /** 人员编码 */
  cpersoncode?: string | null,
  /** 业务员名称 */
  cpersonname?: string | null,
  /** 币种名称 */
  cexch_name?: string | null,
  /** 委外类型编码 */
  cptcode?: string | null,
  /** 委外类型 */
  cptname?: string | null,
  /** 备注 */
  cmemo?: string | null,
  /** 子表ID */
  modetailsid?: string | null,
  /** 存货编码 */
  cinvcode?: string | null,
  /** 存货代码 */
  cinvaddcode?: string | null,
  /** 存货名称 */
  cinvname?: string | null,
  /** 规格型号 */
  cinvstd?: string | null,
  /** 主计量 */
  cinvm_unit?: string | null,
  /** 数量 */
  iquantity?: number | null,
  /** 计划到货时间 */
  darrivedate?: string | null,
  /** 图号 */
  cinvdefine1?: string | null,
  /** 图纸版本 */
  cinvdefine2?: string | null,
  /** 图面材质 */
  cinvdefine3?: string | null,
  /** 是否启用批次 */
  bInvBatch?: boolean,
  /** 接收总数量 */
  reviceQty?: number | null,
  /** 已发货数量 */
  deliveryQty?: number | null,
  /** 剩余可发货数量 */
  syDeliveryQty?: number | null,
  }

export interface LJsonResultListOpGroupIconDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data?: OpGroupIconDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface OpGroupIconDto {
  /** ID */
  Id?: string | null,
  /** 名称 */
  Name?: string | null,
  /** 图标 */
  Icon?: string | null,
  }

export interface QueryReportInfoReqDto {
  /** 工序组ID */
  OpGroupId?: string | null,
  /** 条码/或搜索关键字 */
  BarCode?: string | null,
  }

export interface LJsonResultMomOpReportDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: MomOpReportDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface MomOpReportDto {
  /** 生产订单号 */
  MoCode?: string | null,
  /** 存货编码 */
  InvCode?: string | null,
  /** 存货代码 */
  InvAddCode?: string | null,
  /** 规格型号 */
  InvStd?: string | null,
  /** 预入仓库编码 */
  cWhCode?: string | null,
  /** 预入仓库名称 */
  cWhName?: string | null,
  /** 预入仓库是否启用货位 */
  bWhPos?: boolean,
  /** 预入货位编码 */
  cPosCode?: string | null,
  /** 预入货位名称 */
  cPosName?: string | null,
  /** 是否启用批次 */
  BInvBatch?: boolean,
  /** 是否需要检验 */
  BGsp?: boolean,
  /** 是否启用一品多点 */
  BInvFree?: boolean,
  /** 存货名称 */
  InvName?: string | null,
  /** 开工日期 */
  StartDate?: string | null,
  /** 完工日期 */
  DueDate?: string | null,
  /** 生产订单数量 */
  MoQty?: number | null,
  /** 计划下达数量 */
  IssQty?: number | null,
  /** 关闭后计划量 */
  dCloseIssueQty?: number | null,
  /** 派工数量 */
  ShiftQty?: number | null,
  /** 是否是平行工序组 */
  BParallel?: boolean,
  /** 工序组下面对应所有工序进度列表 */
  AllOpList?: OpProcessDto[],
  /** 可报工的工序列表 */
  OpList?: OpProcessBaseDto[],
  /** 完工进度 */
  ComRateDtos?: MomOpComRateDto[],
  /** 计划ID */
  PlanId?: string | null,
  /** 当前条码数量 */
  BarCodeQty?: number | null,
  /** 工序批号 */
  OpBatch?: string | null,
  }

export interface OpProcessDto {
  /** 完工数量 */
  ComQty?: number | null,
  /** 完工比例 */
  ComRate?: number | null,
  /** 总的派工数量 */
  ShiftQty?: number | null,
  /** 任务ID */
  TaskId?: string | null,
  /** 班组ID */
  TeamId?: string | null,
  /** 派工单明细ID */
  ShiftDetailId?: string | null,
  /** 派工人员编码集合 */
  PersonCodeList: string[],
  /** 派工单ID */
  ShiftId?: string | null,
  /** 工序ID */
  OpId?: string | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 工序行号 */
  OpSeq?: number | null,
  /** 工序编码 */
  OpCode?: string | null,
  /** 剩余可报工数量 */
  SyQty?: number | null,
  /** 是否末道工序-(末道工序前端提示是否入库) */
  BLastFlag?: boolean,
  /** 是否首道工序组 */
  BFirstFlag?: boolean,
  /** 是否领料完成是否可报工 */
  BReport?: boolean,
  /** 是否多人制作 */
  BMultiOper?: boolean,
  /** 工序组ID */
  OpGroupId?: string | null,
  /** 工序组名称 */
  OpGroup?: string | null,
  /** 工序组排序 */
  OpGroupSeq?: number | null,
  /** 工序领料情况 */
  PickDtos?: OpPickProcessDto[],
  }

export interface OpProcessBaseDto {
  /** 任务ID */
  TaskId?: string | null,
  /** 班组ID */
  TeamId?: string | null,
  /** 派工单明细ID */
  ShiftDetailId?: string | null,
  /** 派工人员编码集合 */
  PersonCodeList: string[],
  /** 派工单ID */
  ShiftId?: string | null,
  /** 工序ID */
  OpId?: string | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 工序行号 */
  OpSeq?: number | null,
  /** 工序编码 */
  OpCode?: string | null,
  /** 剩余可报工数量 */
  SyQty?: number | null,
  /** 是否末道工序-(末道工序前端提示是否入库) */
  BLastFlag?: boolean,
  /** 是否首道工序组 */
  BFirstFlag?: boolean,
  /** 是否领料完成是否可报工 */
  BReport?: boolean,
  /** 是否多人制作 */
  BMultiOper?: boolean,
  /** 工序组ID */
  OpGroupId?: string | null,
  /** 工序组名称 */
  OpGroup?: string | null,
  /** 工序组排序 */
  OpGroupSeq?: number | null,
  /** 工序领料情况 */
  PickDtos?: OpPickProcessDto[],
  }

export interface MomOpComRateDto {
  /** 完工数量 */
  ComQty?: number | null,
  /** 完工比例 */
  ComRate?: number | null,
  /** 计划下达数量 */
  IssueQty?: number | null,
  /** 工序ID */
  OpId?: string | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 工序行号 */
  OpSeq?: number | null,
  /** 工序编码 */
  OpCode?: string | null,
  }

export interface OpPickProcessDto {
  /** 工序ID */
  OpId?: string | null,
  /** 工序编码 */
  OpCode?: string | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 工序排序 */
  OpSeq?: number | null,
  /** 材料编码 */
  cInvCode?: string | null,
  /** 材料名称 */
  cInvName?: string | null,
  /** 基础用量分子 */
  BaseQtyN?: number | null,
  /** 基础用量分母 */
  BaseQtyD?: number | null,
  /** 应领数量 */
  Qty?: number | null,
  /** 已领数量 */
  IssQty?: number | null,
  /** 领用比例 */
  IssRate?: number | null,
  }

export interface MoRoutingSaveReqDto {
  /** 工序组ID */
  OpGroupId: string,
  /** 计划ID */
  PlanId: string,
  /** 工序集合 */
  OpDtos?: MoRoutingOpInfoDto[],
  }

export interface MoRoutingOpInfoDto {
  /** 所属工人 */
  cPersonCode?: string | null,
  /** 所属工人列表 */
  cPersonCodes: string[],
  /** 良品数量 */
  QualifiedQty?: number | null,
  /** 不良总数 */
  ScrapQty?: number | null,
  /** 总的报工数量（良+不良） */
  ReportQty?: number | null,
  /** 工序ID */
  OpId: string,
  /** 任务ID */
  TaskId: string,
  /** 工序批号 */
  OpBatch: string,
  /** 不良原因列表 */
  ScrapDtos?: MoRoutingBillScrapDto[],
  /** 入库参数(末道工序或不良) */
  InWareDto: MoRoutingBillInWareBaseDto,
  }

export interface MoRoutingBillInWareBaseDto {
  /** 入库批号 */
  CBtach?: string | null,
  /** 一品多点 */
  CFree1?: string | null,
  /** 良品仓库集合 */
  QualifiedWhDtos?: WhPosQtyBaseDto[],
  /** 不良品仓库集合 */
  ScrapWhDtos?: WhPosQtyBaseDto[],
  }

export interface WhPosQtyBaseDto {
  /** 仓库编码 */
  WhCode?: string | null,
  /** 货位编码 */
  PosCode?: string | null,
  /** 数量 */
  Qty?: number | null,
  }

export interface LJsonResultMoRoutingResDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: MoRoutingResDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface MoRoutingResDto {
  /** 报工单号 */
  FcVouchCode?: string | null,
  /** 不良入库单号 */
  ScrapRdCodes: string[],
  /** 良品入库单号 */
  RdCodes: string[],
  /** 返回消息 */
  Msg?: string | null,
  /** 处理状态 */
  State?: boolean,
  }

export interface QueryWorkHourListReqDto {
  /** 班组ID */
  TeamId?: string | null,
  /** 工序ID */
  OpId?: string | null,
  /** 人员编码 */
  cPersonCode?: string | null,
  /** 存货编码 */
  cInvCode?: string | null,
  /** 开始日期 */
  BeginDate?: string | null,
  /** 结束日期 */
  EndDate?: string | null,
  /** 审核状态<br/>
  0 = ALL，全部<br/>
  1 = PENDING，待审核<br/>
  2 = AUDITED，已审核<br/>
  3 = REJECT，驳回 */
  AuditState?: number | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListWorkHourListDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: WorkHourListDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface WorkHourListDto {
  /** 主键 */
  Id?: string | null,
  /** 班组ID */
  TeamId?: string | null,
  /** 班组名称 */
  TeamName?: string | null,
  /** 产品编码 */
  cInvCode?: string | null,
  /** 产品名称 */
  cInvName?: string | null,
  /** 人员编码 */
  cPersonCode?: string | null,
  /** 人员名称 */
  cPersonName?: string | null,
  /** 工序ID */
  OpId?: string | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 开工时间 */
  StartTime?: string | null,
  /** 完工时间 */
  DueTime?: string | null,
  /** 总计工时 */
  TotalWHours?: number | null,
  /** 有效工时 */
  EffectWHours?: number | null,
  /** 无效工时 */
  InvaildWHours?: number | null,
  /** 实际总计工时 */
  SJTotalWHours?: number | null,
  /** 实际有效工时 */
  SJEffectWHours?: number | null,
  /** 实际无效工时 */
  SJInvaildWHours?: number | null,
  /** 审核意见 */
  AuditRmind?: string | null,
  /** 审核状态<br/>
  0 = ALL，全部<br/>
  1 = PENDING，待审核<br/>
  2 = AUDITED，已审核<br/>
  3 = REJECT，驳回 */
  AuditState?: number | null,
  /** 审核人名称 */
  AuditorName?: string | null,
  /** 审核时间 */
  AuditTime?: string | null,
  }

export interface WorkHourUpdateReqDto {
  /** 记录ID */
  Id?: number | null,
  /** 实际有效工时 */
  SJEffectWHours?: number | null,
  /** 实际无效工时 */
  SJInvaildWHours?: number | null,
  }

export interface WorkHourAuditReqDto {
  /** 审核状态<br/>
  0 = ALL，全部<br/>
  1 = PENDING，待审核<br/>
  2 = AUDITED，已审核<br/>
  3 = REJECT，驳回 */
  AuditStatus?: number | null,
  /** 审核意见 */
  AuditRmind?: string | null,
  /** 删除的ID集合 */
  Ids: string[],
  }

export interface WorkJobSaveReqDto {
  /** 单据ID 修改时需传 */
  Id?: string | null,
  /** 单号 */
  DocNo?: string | null,
  /** 作业对象类型<br/>
  1 = MOLD，模具<br/>
  2 = DEVICE，设备<br/>
  -1 = ALL，全部 */
  ObjType: number,
  /** 作业对象ID */
  ObjId: string,
  /** 所属车间ID */
  WorkShopId?: string | null,
  /** 派工单主表ID */
  ShiftId?: string | null,
  /** 备注 */
  Remark?: string | null,
  /** 作业单状态<br/>
  1 = WAITING，待开工<br/>
  2 = SUSPEND，暂停<br/>
  3 = RECOVERY，已恢复<br/>
  4 = STARTED，已开工<br/>
  5 = FINISHED，已完工<br/>
  7 = CLOSED，已关闭<br/>
  8 = UPKEEP，保养<br/>
  9 = REPAIR，维修<br/>
  100 = ALL，全部 */
  State?: number | null,
  /** 派工单明细ID */
  ShiftDetailId?: string | null,
  /** 计划开工时间 */
  StartTime: string,
  /** 计划完工时间 */
  DueTime: string,
  /** 加工产品编码 */
  cInvCode: string,
  /** 加工工序ID */
  OpId: string,
  /** 加工数量 */
  Qty?: number | null,
  }

export interface LJsonResultWorkJobInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 获取 返回数据 */
  data: WorkJobInfoDto,
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface WorkJobInfoDto {
  /** 作业单ID */
  Id?: string | null,
  /** 单号 */
  DocNo?: string | null,
  /** 作业对象类型<br/>
  1 = MOLD，模具<br/>
  2 = DEVICE，设备<br/>
  -1 = ALL，全部 */
  ObjType?: number | null,
  /** 对象类型 */
  ObjTypeName?: string | null,
  /** 作业对象ID */
  ObjId?: string | null,
  /** 对象编码 */
  ObjCode?: string | null,
  /** 对象名称 */
  ObjName?: string | null,
  /** 所属车间ID */
  WorkShopId?: string | null,
  /** 作业车间 */
  WorkShop?: string | null,
  /** 派工单主表ID */
  ShiftId?: string | null,
  /** 派工单号 */
  ShiftNo?: string | null,
  /** 备注 */
  Remark?: string | null,
  /** 作业单状态<br/>
  1 = WAITING，待开工<br/>
  2 = SUSPEND，暂停<br/>
  3 = RECOVERY，已恢复<br/>
  4 = STARTED，已开工<br/>
  5 = FINISHED，已完工<br/>
  7 = CLOSED，已关闭<br/>
  8 = UPKEEP，保养<br/>
  9 = REPAIR，维修<br/>
  100 = ALL，全部 */
  State?: number | null,
  /** 状态 */
  StateDesc?: string | null,
  /** 派工单明细ID */
  ShiftDetailId?: string | null,
  /** 计划开工时间 */
  StartTime?: string | null,
  /** 计划完工时间 */
  DueTime?: string | null,
  /** 加工产品编码 */
  cInvCode?: string | null,
  /** 加工产品代码 */
  cInvAddCode?: string | null,
  /** 加工产品名称 */
  cInvName?: string | null,
  /** 规格型号 */
  cInvStd?: string | null,
  /** 计量单位 */
  cUnitName?: string | null,
  /** 加工工序ID */
  OpId?: string | null,
  /** 工序编码 */
  OpCode?: string | null,
  /** 工序名称 */
  OpName?: string | null,
  /** 加工数量 */
  Qty?: number | null,
  /** 制单时间 */
  CreatedTime?: string | null,
  /** 制单人 */
  CreatedUserName?: string | null,
  /** 子表集合 */
  ActionRecordEntities?: JobActionRecordEntity[],
  }

export interface JobActionRecordEntity {
  /** 作业单ID */
  JobId?: string | null,
  /** 操作类型<br/>
  2 = SUSPEND，挂起<br/>
  3 = RECOVERY，恢复<br/>
  4 = STARTED，开工<br/>
  5 = FINISHED，完工 */
  Action?: number | null,
  /** 备注说明 */
  Remark?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 更新时间 */
  UpdatedTime?: string | null,
  /** 创建者Id */
  CreatedUserId?: string | null,
  /** 创建者名称 */
  CreatedUserName?: string | null,
  /** 修改者Id */
  UpdatedUserId?: string | null,
  /** 修改者名称 */
  UpdatedUserName?: string | null,
  /** 软删除 */
  IsDeleted?: boolean,
  /** 是否启用 */
  IsEnabled?: boolean,
  /** U8账套号 */
  AccId?: string | null,
  /** 主键Id */
  Id?: string | null,
  }

export interface QueryWorkJobPageReqDto {
  /** 作业对象类型<br/>
  1 = MOLD，模具<br/>
  2 = DEVICE，设备<br/>
  -1 = ALL，全部 */
  ObjType?: number | null,
  /** 作业车间ID */
  WorkShopId?: string | null,
  /** 状态<br/>
  1 = WAITING，待开工<br/>
  2 = SUSPEND，暂停<br/>
  3 = RECOVERY，已恢复<br/>
  4 = STARTED，已开工<br/>
  5 = FINISHED，已完工<br/>
  7 = CLOSED，已关闭<br/>
  8 = UPKEEP，保养<br/>
  9 = REPAIR，维修<br/>
  100 = ALL，全部 */
  State?: number | null,
  /** 开始时间 */
  StartDate?: string | null,
  /** 结束时间 */
  EndDate?: string | null,
  /** 存货编码开始 */
  cInvCodeStart?: string | null,
  /** 存货编码结束 */
  cInvCodeEnd?: string | null,
  /** 总记录数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 每页条数 */
  limit?: number | null,
  /** 页码 */
  page?: number | null,
  /** 查询关键字 */
  keyWord?: string | null,
  /** 状态<br/>
  0 = ALL，全部<br/>
  1 = ENABLE，启用<br/>
  2 = DISANLE，禁用 */
  state?: number | null,
  }

export interface LPJsonResultListWorkJobInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: WorkJobInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface WorkJobUpdateStateReqDto {
  /** 单据ID */
  Id: string,
  /** 操作<br/>
  2 = SUSPEND，挂起<br/>
  3 = RECOVERY，恢复<br/>
  4 = STARTED，开工<br/>
  5 = FINISHED，完工 */
  Action: number,
  /** 备注说明 */
  Remark?: string | null,
  }

export interface WorkShopSaveReqDto {
  /** ID修改需传 */
  Id?: string | null,
  /** 车间编码 */
  Code?: string | null,
  /** 车间名称 */
  Name: string,
  /** 开始工作时间 */
  WorkStartTime: string,
  /** 结束工作时间 */
  WorkEndTime: string,
  /** 工作中心编码-来源U8工作中心 */
  WcCode?: string | null,
  /** 工作中心-来源U8工作中心 */
  WcName?: string | null,
  /** 关联部门编码 */
  DeptCode?: string | null,
  /** 关联部门名称 */
  DeptName?: string | null,
  /** 负责人名称-来源U8人员档案 */
  Principal?: string | null,
  /** 负责人编码-来源U8人员档案 */
  PrincipalCode?: string | null,
  /** 备注/说明 */
  Remark?: string | null,
  /** 是否启用 */
  IsEnabled?: boolean,
  /** 是否启用 */
  IsEnabledStr?: string | null,
  }

export interface LPJsonResultListWorkShopInfoDto {
  /** 操作结果类型<br/>
  0 = success，<br/>
  200 = info，<br/>
  204 = empty，<br/>
  206 = alert，<br/>
  300 = warning，<br/>
  1001 = logout，<br/>
  -403 = authlimit，<br/>
  -401 = noauth，<br/>
  -300 = error， */
  code?: number | null,
  /** 总数 */
  count?: number | null,
  /** 总页数 */
  pages?: number | null,
  /** 获取 返回数据 */
  data?: WorkShopInfoDto[],
  /** 获取 消息内容 */
  msg?: string | null,
  }

export interface WorkShopInfoDto {
  /** ID */
  Id?: string | null,
  /** 创建人 */
  CreatedUserName?: string | null,
  /** 创建时间 */
  CreatedTime?: string | null,
  /** 车间编码 */
  Code?: string | null,
  /** 车间名称 */
  Name: string,
  /** 开始工作时间 */
  WorkStartTime: string,
  /** 结束工作时间 */
  WorkEndTime: string,
  /** 工作中心编码-来源U8工作中心 */
  WcCode?: string | null,
  /** 工作中心-来源U8工作中心 */
  WcName?: string | null,
  /** 关联部门编码 */
  DeptCode?: string | null,
  /** 关联部门名称 */
  DeptName?: string | null,
  /** 负责人名称-来源U8人员档案 */
  Principal?: string | null,
  /** 负责人编码-来源U8人员档案 */
  PrincipalCode?: string | null,
  /** 备注/说明 */
  Remark?: string | null,
  /** 是否启用 */
  IsEnabled?: boolean,
  /** 是否启用 */
  IsEnabledStr?: string | null,
  }
