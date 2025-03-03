export interface AccSubjDto {
  /** 主键 */
  pk_accsubj?: string | null,
  /** 是否末级 */
  endflag?: string | null,
  /** 科目编码 */
  subjcode?: string | null,
  /** 科目层级 */
  subjlev?: number | null,
  /** 科目名称 */
  subjname?: string | null,
}

export interface AccountBillDetailReportDto {
  /** 主表Id */
  mainId?: string | null,
  /** 科目编码 */
  subjCode?: string | null,
  /** 中台单号 */
  code?: string | null,
  /** 销售公司编码 */
  soComanyCode?: string | null,
  /** 销售公司名称 */
  soComanyName?: string | null,
  /** 科目名称 */
  subjName?: string | null,
  /** 店铺编码 */
  shopCode?: string | null,
  /** 店铺名称 */
  shopName?: string | null,
  /** 交易日期 */
  tradedate?: string | null,
  /** 原始单号 */
  tradeno2?: string | null,
  /** 收入 */
  income?: number | null,
  /** 支出 */
  expend?: number | null,
  /** 凭证摘要 */
  digest?: string | null,
  /** 原始摘要 */
  digest2?: string | null,
  /** 交易日期--格式化 */
  tradedateStr?: string | null,
}

export interface AccountBillReport {
  /** 唯一Id */
  id?: string | null,
  /** 单号 */
  code?: string | null,
  /** 创建者名称 */
  createdUserName?: string | null,
  /** 创建日期- */
  createdTime?: string | null,
  /** 创建日期--格式化 */
  createdTimeStr?: string | null,
}

export interface AdjustPriceDetailAddDto {
  /** 行号 */
  rowNum?: number | null,
  operType: EnumAdjustPriceOperType,
  /** 存货编码 */
  invCode: string,
  /** 存货名称 */
  invName?: string | null,
  /** 含税单价（是本币还是原币由表头币种来决定） */
  unitTaxPrice?: number | null,
  /** 无税单价（是本币还是原币由表头币种来决定） */
  unitPrice?: number | null,
  /** 税率 */
  taxRatio?: number | null,
  /** 数量下限 */
  quantityLimit?: number | null,
  /** 生效日期 */
  effectiveDate?: string | null,
  /** 失效日期 */
  expirationDate?: string | null,
}

export interface AdjustPriceDetailForm {
  /** 行号 */
  rowNum?: number | null,
  operType: EnumAdjustPriceOperType,
  /** 存货编码 */
  invCode: string,
  /** 存货名称 */
  invName?: string | null,
  /** 含税单价（是本币还是原币由表头币种来决定） */
  unitTaxPrice?: number | null,
  /** 无税单价（是本币还是原币由表头币种来决定） */
  unitPrice?: number | null,
  /** 税率 */
  taxRatio?: number | null,
  /** 数量下限 */
  quantityLimit?: number | null,
  /** 生效日期 */
  effectiveDate?: string | null,
  /** 失效日期 */
  expirationDate?: string | null,
  /** 操作类型描述 */
  operTypeDesc?: string | null,
  /** 生效日期--格式化 */
  effectiveDateStr?: string | null,
  /** 失效日期--格式化 */
  expirationDateStr?: string | null,
}

export interface AdjustPriceDetailUpdDto {
  /** 行号 */
  rowNum?: number | null,
  operType: EnumAdjustPriceOperType,
  /** 存货编码 */
  invCode: string,
  /** 存货名称 */
  invName?: string | null,
  /** 含税单价（是本币还是原币由表头币种来决定） */
  unitTaxPrice?: number | null,
  /** 无税单价（是本币还是原币由表头币种来决定） */
  unitPrice?: number | null,
  /** 税率 */
  taxRatio?: number | null,
  /** 数量下限 */
  quantityLimit?: number | null,
  /** 生效日期 */
  effectiveDate?: string | null,
  /** 失效日期 */
  expirationDate?: string | null,
}

export interface AdjustPriceMainAddDto {
  /** 单号 */
  code: string,
  /** 供应商编码 */
  vendorCode: string,
  /** 供应商名称 */
  vendorName: string,
  /** 币种编码 */
  currencyCode: string,
  /** 币种名称 */
  currencyName: string,
  priceType: EnumPriceType,
  /** 调价日期 */
  busDate?: string | null,
  /** 备注 */
  remark?: string | null,
  /** 明细 */
  details: AdjustPriceDetailAddDto[],
}

export interface AdjustPriceMainForm {
  /** 单号 */
  code: string,
  /** 供应商编码 */
  vendorCode: string,
  /** 供应商名称 */
  vendorName: string,
  /** 币种编码 */
  currencyCode: string,
  /** 币种名称 */
  currencyName: string,
  priceType: EnumPriceType,
  /** 调价日期 */
  busDate?: string | null,
  /** 备注 */
  remark?: string | null,
  /** 主键Id */
  id?: string | null,
  /** 业务日期--格式化 */
  busDateStr?: string | null,
  billStatus: EnumBillStatus,
  /** 单据状态描述 */
  billStatusDesc?: string | null,
  /** 创建者姓名 */
  createdUserName?: string | null,
  /** 是否启用流程 */
  isEnableFlow?: boolean,
  /** 流程实例状态：【0-保存、1-处理、2-通过、3-驳回、4-撤销、5-终止】. */
  flowStatus?: number | null,
  /** 当前页为第一页：First  当前也为最后一页：Last */
  firstOrLast?: string | null,
  /** 是否可编辑表单 */
  isEditForm?: boolean,
  /** 明细 */
  details?: AdjustPriceDetailForm[],
}

export interface AdjustPriceMainUpdDto {
  /** 单号 */
  code: string,
  /** 供应商编码 */
  vendorCode: string,
  /** 供应商名称 */
  vendorName: string,
  /** 币种编码 */
  currencyCode: string,
  /** 币种名称 */
  currencyName: string,
  priceType: EnumPriceType,
  /** 调价日期 */
  busDate?: string | null,
  /** 备注 */
  remark?: string | null,
  /** 主表Id */
  id?: string | null,
  /** 明细 */
  details: AdjustPriceDetailUpdDto[],
}

export interface AdjustPriceReportDto {
  /** 主键Id */
  id?: string | null,
  /** 单号 */
  code?: string | null,
  /** 供应商编码 */
  vendorCode?: string | null,
  /** 供应商名称 */
  vendorName?: string | null,
  /** 币种名称 */
  currencyName?: string | null,
  /** 业务日期--格式化 */
  busDateStr?: string | null,
  priceType: EnumPriceType,
  billStatus: EnumBillStatus,
  /** 单据状态描述 */
  billStatusDesc?: string | null,
  /** 创建者姓名 */
  createdUserName?: string | null,
  /** 备注 */
  remark?: string | null,
  /** 是否启用流程 */
  isEnableFlow?: boolean,
  /** 流程实例状态：【0-草稿、1-处理、2-通过、3-驳回、4-撤销、5-终止】. */
  flowStatus?: number | null,
  operType: EnumAdjustPriceOperType,
  /** 操作类型描述 */
  operTypeDesc?: string | null,
  /** 存货编码 */
  invCode?: string | null,
  /** 存货名称 */
  invName?: string | null,
  /** 含税单价（是本币还是原币由表头币种来决定） */
  unitTaxPrice?: number | null,
  /** 无税单价（是本币还是原币由表头币种来决定） */
  unitPrice?: number | null,
  /** 数量下限 */
  quantityLimit?: number | null,
  /** 生效日期--格式化 */
  effectiveDateStr?: string | null,
  /** 失效日期--格式化 */
  expirationDateStr?: string | null,
}

export interface BusAPILogOutput {
  /** 业务描述 */
  busDesc?: string | null,
  /** 中台业务单号 */
  busCode?: string | null,
  /** 异常内容 */
  errorMsg?: string | null,
}

export interface BusGenCodeOutput {
  /** 是否自动生成 null表示没有配置 true表示自动生成 false表示手动输入 */
  isAutoGen?: boolean,
  /** 生成的编码 */
  code?: string | null,
  /** 生成编码的数量 */
  codeNum?: number | null,
  /** 流水号长度 */
  fLowLen?: number | null,
  /** 流水号步长 */
  fLowStep?: number | null,
  /** 前缀 */
  prefix?: string | null,
  /** 是否有表单数据 */
  isHasFormData?: boolean,
}

export interface CollectMainForm {
  /** 单号 */
  code: string,
  /** 业务日期 */
  busDate?: string | null,
  /** 到下次订货天数 */
  nextOrderDays?: number | null,
  /** 安全库存天数 */
  safetyInvDays?: number | null,
  /** 活动消耗天数 */
  consumeDays?: number | null,
  /** 备注 */
  remark?: string | null,
  /** 主表Id */
  id?: string | null,
  /** 业务日期--格式化 */
  busDateStr?: string | null,
  billStatus: EnumBillStatus,
  /** 单据状态描述 */
  billStatusDesc?: string | null,
  /** 是否可编辑表单 */
  isEditForm?: boolean,
  /** 创建者姓名 */
  createdUserName?: string | null,
  /** 是否启用流程 */
  isEnableFlow?: boolean,
  /** 流程实例状态：【0-保存、1-处理、2-通过、3-驳回、4-撤销、5-终止】. */
  flowStatus?: number | null,
  /** 当前页为第一页：First  当前也为最后一页：Last */
  firstOrLast?: string | null,
  /** 明细 */
  details?: CollectPRFormDetail[],
}

export interface CollectPRAdd {
  /** 单号 */
  code: string,
  /** 业务日期 */
  busDate?: string | null,
  /** 到下次订货天数 */
  nextOrderDays?: number | null,
  /** 安全库存天数 */
  safetyInvDays?: number | null,
  /** 活动消耗天数 */
  consumeDays?: number | null,
  /** 备注 */
  remark?: string | null,
  /** 主表Id */
  id?: string | null,
  /** 明细 */
  details: CollectPRDetailAddUpdDto[],
}

export interface CollectPRDetail {
  /** 行号 */
  rowNum?: number | null,
  /** 品牌编码 */
  brandCode?: string | null,
  /** 品牌名称 */
  brandName?: string | null,
  /** 存货编码 */
  invCode?: string | null,
  /** 存货名称 */
  invName?: string | null,
  /** 规格 */
  invSpec?: string | null,
  /** 型号 */
  invType?: string | null,
  /** 主计量单位编码 */
  measCode?: string | null,
  /** 主计量单位名称 */
  measName?: string | null,
  /** 主推店铺编码 */
  mainlyShopCode?: string | null,
  /** 主推店铺名称 */
  mainlyShopName?: string | null,
  /** 是否新媒体 */
  isNewMedia?: boolean,
  /** 运营总日销 */
  saleQty?: number | null,
  /** 现有库存 */
  currentStock?: number | null,
  /** 库存可订购量 */
  availableQuantity?: number | null,
  /** 现有在途 */
  purchaseQuantity?: number | null,
  /** 可支撑天数 */
  supportabilityDays?: number | null,
  /** 应支撑天数 */
  shouldSupportDays?: number | null,
  /** 运营总订货量（请购数量）不含经销商订货量 */
  shopPRQuantityA?: number | null,
  /** 运营总订货量（修正）不含经销商订货量 */
  shopPRQuantityB?: number | null,
  /** 订货后支撑天数 */
  orderedSupplyDays?: number | null,
  /** 经销商订货量（请购数量） */
  dealerPRQuantityA?: number | null,
  /** 经销商订货量（修正） */
  dealerPRQuantityB?: number | null,
  /** 总订货量 */
  totalPRQuantity?: number | null,
  /** 本次备货 */
  stockUpStock?: number | null,
  /** 已备库存 */
  alreadyStock?: number | null,
  /** 订单起订量（最小订货量） */
  invMinOrder?: number | null,
  /** 包材起定量 */
  packageMinOrder?: number | null,
  /** 生产周期 */
  invProdCycle?: number | null,
  /** 成本单价 */
  invCostUnit?: number | null,
  /** 运营订货资金 */
  prAmount?: number | null,
  /** 总库存资金 */
  totalAmount?: number | null,
  /** 订货原因 */
  orderReason?: string | null,
  /** 采购数量 */
  poQuantity?: number | null,
  /** 请购子表Id集合 */
  prDetailIds: string[],
  /** 汇总明细来自哪些要货（请购明细）--不含经销商的 */
  shopRefencePRDetails?: RefencePRDetail[],
  /** 汇总明细来自哪些要货（请购明细）--经销商的 */
  dealerRefencePRDetails?: RefencePRDetail[],
}

export interface CollectPRDetailAddUpdDto {
  /** 行号 */
  rowNum?: number | null,
  /** 品牌编码 */
  brandCode?: string | null,
  /** 品牌名称 */
  brandName?: string | null,
  /** 存货编码 */
  invCode?: string | null,
  /** 存货名称 */
  invName?: string | null,
  /** 规格 */
  invSpec?: string | null,
  /** 型号 */
  invType?: string | null,
  /** 主计量单位编码 */
  measCode?: string | null,
  /** 主计量单位名称 */
  measName?: string | null,
  /** 主推店铺编码 */
  mainlyShopCode?: string | null,
  /** 主推店铺名称 */
  mainlyShopName?: string | null,
  /** 是否新媒体 */
  isNewMedia?: boolean,
  /** 运营总日销 */
  saleQty?: number | null,
  /** 现有库存 */
  currentStock?: number | null,
  /** 库存可订购量 */
  availableQuantity?: number | null,
  /** 现有在途 */
  purchaseQuantity?: number | null,
  /** 可支撑天数 */
  supportabilityDays?: number | null,
  /** 应支撑天数 */
  shouldSupportDays?: number | null,
  /** 运营总订货量（请购数量）不含经销商订货量 */
  shopPRQuantityA?: number | null,
  /** 运营总订货量（修正）不含经销商订货量 */
  shopPRQuantityB?: number | null,
  /** 订货后支撑天数 */
  orderedSupplyDays?: number | null,
  /** 经销商订货量（请购数量） */
  dealerPRQuantityA?: number | null,
  /** 经销商订货量（修正） */
  dealerPRQuantityB?: number | null,
  /** 总订货量 */
  totalPRQuantity?: number | null,
  /** 本次备货 */
  stockUpStock?: number | null,
  /** 已备库存 */
  alreadyStock?: number | null,
  /** 订单起订量（最小订货量） */
  invMinOrder?: number | null,
  /** 包材起定量 */
  packageMinOrder?: number | null,
  /** 生产周期 */
  invProdCycle?: number | null,
  /** 成本单价 */
  invCostUnit?: number | null,
  /** 运营订货资金 */
  prAmount?: number | null,
  /** 总库存资金 */
  totalAmount?: number | null,
  /** 订货原因 */
  orderReason?: string | null,
  /** 采购数量 */
  poQuantity?: number | null,
  /** 子表Id--前端不用传 */
  id?: string | null,
  /** 请购子表Id集合 */
  prDetailIds: string[],
  /** 日销量 */
  saleDaliys?: SaleDaliyAddUpd[],
}

export interface CollectPRFormDetail {
  /** 行号 */
  rowNum?: number | null,
  /** 品牌编码 */
  brandCode?: string | null,
  /** 品牌名称 */
  brandName?: string | null,
  /** 存货编码 */
  invCode?: string | null,
  /** 存货名称 */
  invName?: string | null,
  /** 规格 */
  invSpec?: string | null,
  /** 型号 */
  invType?: string | null,
  /** 主计量单位编码 */
  measCode?: string | null,
  /** 主计量单位名称 */
  measName?: string | null,
  /** 主推店铺编码 */
  mainlyShopCode?: string | null,
  /** 主推店铺名称 */
  mainlyShopName?: string | null,
  /** 是否新媒体 */
  isNewMedia?: boolean,
  /** 运营总日销 */
  saleQty?: number | null,
  /** 现有库存 */
  currentStock?: number | null,
  /** 库存可订购量 */
  availableQuantity?: number | null,
  /** 现有在途 */
  purchaseQuantity?: number | null,
  /** 可支撑天数 */
  supportabilityDays?: number | null,
  /** 应支撑天数 */
  shouldSupportDays?: number | null,
  /** 运营总订货量（请购数量）不含经销商订货量 */
  shopPRQuantityA?: number | null,
  /** 运营总订货量（修正）不含经销商订货量 */
  shopPRQuantityB?: number | null,
  /** 订货后支撑天数 */
  orderedSupplyDays?: number | null,
  /** 经销商订货量（请购数量） */
  dealerPRQuantityA?: number | null,
  /** 经销商订货量（修正） */
  dealerPRQuantityB?: number | null,
  /** 总订货量 */
  totalPRQuantity?: number | null,
  /** 本次备货 */
  stockUpStock?: number | null,
  /** 已备库存 */
  alreadyStock?: number | null,
  /** 订单起订量（最小订货量） */
  invMinOrder?: number | null,
  /** 包材起定量 */
  packageMinOrder?: number | null,
  /** 生产周期 */
  invProdCycle?: number | null,
  /** 成本单价 */
  invCostUnit?: number | null,
  /** 运营订货资金 */
  prAmount?: number | null,
  /** 总库存资金 */
  totalAmount?: number | null,
  /** 订货原因 */
  orderReason?: string | null,
  /** 采购数量 */
  poQuantity?: number | null,
  /** 汇总明细Id */
  id?: string | null,
  /** 请购子表Id集合 */
  prDetailIds: string[],
  /** 汇总明细来自哪些要货（请购明细）--不含经销商的 */
  shopRefencePRDetails?: RefencePRDetail[],
  /** 汇总明细来自哪些要货（请购明细）--经销商的 */
  dealerRefencePRDetails?: RefencePRDetail[],
  /** 日销量 */
  saleDaliys?: SaleDaliyForm[],
}

export interface CollectPRRefenceDetailQuery {
  /** 表单Id集合 */
  mainIds: string[],
}

export interface CollectPRRefenceMainDto {
  /** 单号 */
  code: string,
  /** 业务日期 */
  busDate?: string | null,
  /** 到下次订货天数 */
  nextOrderDays?: number | null,
  /** 安全库存天数 */
  safetyInvDays?: number | null,
  /** 活动消耗天数 */
  consumeDays?: number | null,
  /** 备注 */
  remark?: string | null,
  /** 主表Id */
  id?: string | null,
  /** 业务日期--格式化 */
  busDateStr?: string | null,
  billStatus: EnumBillStatus,
  /** 单据状态描述 */
  billStatusDesc?: string | null,
  /** 创建者姓名 */
  createdUserName?: string | null,
}

export interface CollectPRReportDto {
  /** 主表Id */
  id?: string | null,
  /** 单号 */
  code?: string | null,
  /** 业务日期--格式化 */
  busDateStr?: string | null,
  billStatus: EnumBillStatus,
  /** 单据状态描述 */
  billStatusDesc?: string | null,
  /** 到下次订货天数 */
  nextOrderDays?: number | null,
  /** 安全库存天数 */
  safetyInvDays?: number | null,
  /** 活动消耗天数 */
  consumeDays?: number | null,
  /** 创建者姓名 */
  createdUserName?: string | null,
  /** 备注 */
  remark?: string | null,
  /** 是否启用流程 */
  isEnableFlow?: boolean,
  /** 流程实例状态：【0-草稿、1-处理、2-通过、3-驳回、4-撤销、5-终止】. */
  flowStatus?: number | null,
  /** 品牌编码 */
  brandCode?: string | null,
  /** 品牌名称 */
  brandName?: string | null,
  /** 存货编码 */
  invCode?: string | null,
  /** 存货名称 */
  invName?: string | null,
  /** 规格 */
  invSpec?: string | null,
  /** 型号 */
  invType?: string | null,
  /** 主计量单位编码 */
  measCode?: string | null,
  /** 主计量单位名称 */
  measName?: string | null,
  /** 主推店铺编码 */
  mainlyShopCode?: string | null,
  /** 主推店铺名称 */
  mainlyShopName?: string | null,
  /** 是否新媒体 */
  isNewMedia?: boolean,
  /** 运营总日销 */
  saleQty?: number | null,
  /** 现有库存 */
  currentStock?: number | null,
  /** 库存可订购量 */
  availableQuantity?: number | null,
  /** 现有在途 */
  purchaseQuantity?: number | null,
  /** 可支撑天数 */
  supportabilityDays?: number | null,
  /** 应支撑天数 */
  shouldSupportDays?: number | null,
  /** 运营总订货量（请购数量）不含经销商订货量 */
  shopPRQuantityA?: number | null,
  /** 运营总订货量（修正）不含经销商订货量 */
  shopPRQuantityB?: number | null,
  /** 订货后支撑天数 */
  orderedSupplyDays?: number | null,
  /** 经销商订货量（请购数量） */
  dealerPRQuantityA?: number | null,
  /** 经销商订货量（修正） */
  dealerPRQuantityB?: number | null,
  /** 总订货量 */
  totalPRQuantity?: number | null,
  /** 本次备货 */
  stockUpStock?: number | null,
  /** 已备库存 */
  alreadyStock?: number | null,
  /** 订单起订量（最小订货量） */
  invMinOrder?: number | null,
  /** 包材起定量 */
  packageMinOrder?: number | null,
  /** 生产周期 */
  invProdCycle?: number | null,
  /** 成本单价 */
  invCostUnit?: number | null,
  /** 运营订货资金 */
  prAmount?: number | null,
  /** 总库存资金 */
  totalAmount?: number | null,
  /** 订货原因 */
  orderReason?: string | null,
}

export interface CollectPRUpd {
  /** 单号 */
  code: string,
  /** 业务日期 */
  busDate?: string | null,
  /** 到下次订货天数 */
  nextOrderDays?: number | null,
  /** 安全库存天数 */
  safetyInvDays?: number | null,
  /** 活动消耗天数 */
  consumeDays?: number | null,
  /** 备注 */
  remark?: string | null,
  /** 主表Id */
  id?: string | null,
  /** 明细 */
  details: CollectPRDetailAddUpdDto[],
}

export interface DelIdsInput {
  /** Id集合 */
  ids: string[],
}

export interface DigestCodeMapAddUpd {
  /** 明细数据 */
  details: DigestCodeMapTempAddUpd[],
}

export interface DigestCodeMapReportDto {
  /** 摘要 */
  digest: string,
  /** 科目编码 */
  subjCode: string,
  /** 主键Id */
  id?: string | null,
  /** 科目名称 */
  subjName?: string | null,
}

export interface DigestCodeMapTempAddUpd {
  /** 摘要 */
  digest: string,
  /** 科目编码 */
  subjCode: string,
}

/** 调价类型<br />&nbsp;新增 Add = 1<br />&nbsp;修改 Upd = 2<br />&nbsp;删除 Del = 3<br /> */
export type EnumAdjustPriceOperType = 1 | 2 | 3

/** 单据状态<br />&nbsp;保存 ToReviewed = 0<br />&nbsp;已审核 Approved = 1<br />&nbsp;已生效 Effect = 2<br />&nbsp;已失效 Invalid = 3<br />&nbsp;已终止 Termination = 4<br />&nbsp;已关闭 Closed = 5<br /> */
export type EnumBillStatus = 0 | 1 | 2 | 3 | 4 | 5

/** 采购订单来源<br />&nbsp;空白新增 Empty = 1<br />&nbsp;参照汇总 Refence = 2<br /> */
export type EnumPOFromSource = 1 | 2

/** 价格类型<br />&nbsp; UnitTaxPrice = 1<br />&nbsp; UnitPrice = 2<br /> */
export type EnumPriceType = 1 | 2

export interface ExamineBillInput {
  /** 单据Id */
  id?: string | null,
  billStatus: EnumBillStatus,
  /** 审核意见 */
  handleOpinion?: string | null,
  /** 待办Id */
  taskOpId?: string | null,
  /** 审批按钮 */
  approveBtn?: string | null,
  /** 转办人员Id */
  freeApproverUserId?: string | null,
}

export interface ExamineBusAPIOutput {
  /** 业务Id */
  id?: string | null,
  /** 同步业务数据是否全部成功 */
  isSuccess?: boolean,
}

export interface ExportResultViewModel {
  /** 导入是否成功 */
  isSuccess?: boolean,
  /** 文件下载路径 */
  filePath?: string | null,
}

export interface GenSoGJSoBillDto {
  /** 管家订单号 */
  tradeno?: string | null,
  /** 交易时间 */
  tradetime?: string | null,
  /** 原始单号 */
  tradeno2?: string | null,
  /** 店铺名 */
  shopname?: string | null,
  /** 仓库名 */
  warehousename?: string | null,
  /** 仓库编号 */
  warehouseno?: string | null,
  /** 货品编号 */
  goodsno?: string | null,
  /** 品名 */
  goodsname?: string | null,
  /** 规格名 */
  specname?: string | null,
  /** 单位 */
  unit?: string | null,
  /** 数量 */
  goodscount?: string | null,
  /** 单价 */
  price?: string | null,
  /** 金额 */
  goodsmoney?: string | null,
}

export interface InvBomDefaultVerQuery {
  datas?: InvBomVer[],
}

export interface InvBomPoCompany {
  /** 存货编码 */
  invCode?: string | null,
  /** 版本号 */
  invBomVer?: string | null,
  /** 采购公司编码 */
  poComanyCode?: string | null,
  /** 采购公司名称 */
  poComanyName?: string | null,
  /** 是否委外 */
  isOutSource?: boolean,
}

export interface InvBomVer {
  /** 存货编码 */
  invCode?: string | null,
  /** 存货品牌 */
  brandCode?: string | null,
}

export interface InvBomVersionDto {
  /** 存货编码 */
  invCode?: string | null,
  /** 存货名称 */
  invName?: string | null,
  /** 自由项1 */
  zyx1?: string | null,
  /** 自由项2 */
  zyx2?: string | null,
  /** 自由项3 */
  zyx3?: string | null,
  /** 自由项4 */
  zyx4?: string | null,
  /** 自由项5 */
  zyx5?: string | null,
  /** 版本号 */
  invBomVer?: string | null,
  /** 备注 */
  memo?: string | null,
  /** 是否默认 */
  isDefault?: string | null,
}

export interface NoGenSoDetailSummary {
  /** 行号 */
  rowNum?: number | null,
  /** 品牌编码 */
  brandCode?: string | null,
  /** 品牌名称 */
  brandName?: string | null,
  /** 存货编码 */
  invCode?: string | null,
  /** 存货名称 */
  invName?: string | null,
  /** 规格 */
  invSpec?: string | null,
  /** 型号 */
  invType?: string | null,
  /** 主计量单位编码 */
  measCode?: string | null,
  /** 主计量单位名称 */
  measName?: string | null,
  /** 数量 */
  soQuantity?: number | null,
  /** 税率 */
  taxRatio?: number | null,
  /** 原币含税单价 */
  unitTaxPrice?: number | null,
  /** 原币无税单价 */
  unitPrice?: number | null,
  /** 原币无税金额 */
  iMoney?: number | null,
  /** 原币税额 */
  iTax?: number | null,
  /** 原币价税合计 */
  iSum?: number | null,
  /** 原币含税单价--管家,前端不要展示也不要修改该字段的值 */
  unitTaxPriceGJ?: number | null,
  /** 原币无税单价--管家,前端不要展示也不要修改该字段的值 */
  unitPriceGJ?: number | null,
  /** 原币无税金额--管家,前端不要展示也不要修改该字段的值 */
  iMoneyGJ?: number | null,
  /** 原币税额--管家,前端不要展示也不要修改该字段的值 */
  iTaxGJ?: number | null,
  /** 原币价税合计--管家,前端不要展示也不要修改该字段的值 */
  iSumGJ?: number | null,
}

export interface NoGenSoMainSummary {
  /** 销售公司编码 */
  soComanyCode?: string | null,
  /** 销售公司名称 */
  soComanyName?: string | null,
  /** 店铺编码 */
  shopCode?: string | null,
  /** 店铺名称 */
  shopName?: string | null,
  /** 业务日期 */
  busDate?: string | null,
  /** 客户编码 */
  cusCode?: string | null,
  /** 客户名称 */
  cusName?: string | null,
  /** 部门编码 */
  deptCode?: string | null,
  /** 部门名称 */
  deptName?: string | null,
  /** 业务员编码 */
  personCode?: string | null,
  /** 业务员名称 */
  personName?: string | null,
  /** 总金额--含税汇总的价税合计 */
  totalAmount?: number | null,
  /** 管家总金额--管家,前端不要展示也不要修改该字段的值 */
  totalAmountGJ?: number | null,
  /** 明细 */
  details?: NoGenSoDetailSummary[],
}

export interface NoGenSoQuery {
  /** 店铺编码 */
  shopCode: string,
  /** 开始交易时间 */
  beginTradeTime: string,
  /** 结束交易时间 */
  endTradeTime: string,
}

export interface PODetailAddUpd {
  /** 行号 */
  rowNum?: number | null,
  /** 品牌编码 */
  brandCode?: string | null,
  /** 品牌名称 */
  brandName?: string | null,
  /** 存货编码 */
  invCode: string,
  /** 存货名称 */
  invName?: string | null,
  /** 规格 */
  invSpec?: string | null,
  /** 型号 */
  invType?: string | null,
  /** 主计量单位编码 */
  measCode?: string | null,
  /** 主计量单位名称 */
  measName?: string | null,
  /** 采购数量 */
  poQuantity?: number | null,
  /** 税率 */
  taxRatio?: number | null,
  /** 原币含税单价 */
  unitTaxPrice?: number | null,
  /** 原币无税单价 */
  unitPrice?: number | null,
  /** 原币无税金额 */
  iMoney?: number | null,
  /** 原币税额 */
  iTax?: number | null,
  /** 原币价税合计 */
  iSum?: number | null,
  /** 本币含税单价 */
  natUnitTaxPrice?: number | null,
  /** 本币无税单价 */
  natUnitPrice?: number | null,
  /** 本币无税金额 */
  iNatMoney?: number | null,
  /** 本币税额 */
  iNatTax?: number | null,
  /** 本币价税合计 */
  iNatSum?: number | null,
  /** 是否委外 */
  isOutSource?: boolean,
  /** BOM版本号 */
  invBomVer?: string | null,
  /** 请购明细Id集合 */
  prDetailIds: string[],
}

export interface PODetailFormDetail {
  /** 行号 */
  rowNum?: number | null,
  /** 品牌编码 */
  brandCode?: string | null,
  /** 品牌名称 */
  brandName?: string | null,
  /** 存货编码 */
  invCode: string,
  /** 存货名称 */
  invName?: string | null,
  /** 规格 */
  invSpec?: string | null,
  /** 型号 */
  invType?: string | null,
  /** 主计量单位编码 */
  measCode?: string | null,
  /** 主计量单位名称 */
  measName?: string | null,
  /** 采购数量 */
  poQuantity?: number | null,
  /** 税率 */
  taxRatio?: number | null,
  /** 原币含税单价 */
  unitTaxPrice?: number | null,
  /** 原币无税单价 */
  unitPrice?: number | null,
  /** 原币无税金额 */
  iMoney?: number | null,
  /** 原币税额 */
  iTax?: number | null,
  /** 原币价税合计 */
  iSum?: number | null,
  /** 本币含税单价 */
  natUnitTaxPrice?: number | null,
  /** 本币无税单价 */
  natUnitPrice?: number | null,
  /** 本币无税金额 */
  iNatMoney?: number | null,
  /** 本币税额 */
  iNatTax?: number | null,
  /** 本币价税合计 */
  iNatSum?: number | null,
  /** 是否委外 */
  isOutSource?: boolean,
  /** BOM版本号 */
  invBomVer?: string | null,
  /** 管家采购订单号 */
  gjpoCode?: string | null,
  /** 管家采购订单行号 */
  gjpoRowNum?: number | null,
  /** 采购公司编码 */
  poComanyCode?: string | null,
  /** 采购公司名称 */
  poComanyName?: string | null,
  /** ERP采购订单号流水/委外单号流水 */
  erppoCodeNum?: number | null,
  /** ERP采购订单号 */
  erppoCode?: string | null,
  /** ERP采购订单行号 */
  erppoRowNum?: number | null,
  /** 请购明细Id集合 */
  prDetailIds: string[],
}

export interface POMainAdd {
  /** 单号 */
  code: string,
  /** 供应商编码 */
  vendorCode: string,
  /** 供应商名称 */
  vendorName: string,
  /** 币种编码 */
  currencyCode: string,
  /** 币种名称 */
  currencyName: string,
  /** 汇率 */
  adjustRate?: number | null,
  /** 业务日期 */
  busDate?: string | null,
  /** 仓库编码 */
  whCode: string,
  /** 仓库名称 */
  whName: string,
  /** 备注 */
  remark?: string | null,
  fromSource: EnumPOFromSource,
  /** 明细 */
  details: PODetailAddUpd[],
}

export interface POMainForm {
  /** 单号 */
  code: string,
  /** 供应商编码 */
  vendorCode: string,
  /** 供应商名称 */
  vendorName: string,
  /** 币种编码 */
  currencyCode: string,
  /** 币种名称 */
  currencyName: string,
  /** 汇率 */
  adjustRate?: number | null,
  /** 业务日期 */
  busDate?: string | null,
  /** 仓库编码 */
  whCode: string,
  /** 仓库名称 */
  whName: string,
  /** 备注 */
  remark?: string | null,
  fromSource: EnumPOFromSource,
  /** 主键Id */
  id?: string | null,
  /** 业务日期--格式化 */
  busDateStr?: string | null,
  billStatus: EnumBillStatus,
  /** 单据状态描述 */
  billStatusDesc?: string | null,
  /** 是否可编辑表单 */
  isEditForm?: boolean,
  /** 创建人 */
  createdUserName?: string | null,
  /** 流程实例状态：【0-保存、1-处理、2-通过、3-驳回、4-撤销、5-终止】. */
  flowStatus?: number | null,
  /** 是否启用流程 */
  isEnableFlow?: boolean,
  /** 当前页为第一页：First  当前也为最后一页：Last */
  firstOrLast?: string | null,
  /** 管家采购订单号 */
  gjpoCode?: string | null,
  /** 管家采购订单行号 */
  gjpoRowNum?: number | null,
  /** 采购公司编码 */
  poComanyCode?: string | null,
  /** 采购公司名称 */
  poComanyName?: string | null,
  /** ERP采购订单号 */
  erppoCode?: string | null,
  /** ERP采购订单行号 */
  erppoRowNum?: number | null,
  /** 明细 */
  details?: PODetailFormDetail[],
}

export interface POMainUpd {
  /** 单号 */
  code: string,
  /** 供应商编码 */
  vendorCode: string,
  /** 供应商名称 */
  vendorName: string,
  /** 币种编码 */
  currencyCode: string,
  /** 币种名称 */
  currencyName: string,
  /** 汇率 */
  adjustRate?: number | null,
  /** 业务日期 */
  busDate?: string | null,
  /** 仓库编码 */
  whCode: string,
  /** 仓库名称 */
  whName: string,
  /** 备注 */
  remark?: string | null,
  fromSource: EnumPOFromSource,
  /** 主表Id */
  id?: string | null,
  /** 明细 */
  details: PODetailAddUpd[],
}

export interface PORefenceDetailDto {
  /** 行号 */
  rowNum?: number | null,
  /** 品牌编码 */
  brandCode?: string | null,
  /** 品牌名称 */
  brandName?: string | null,
  /** 存货编码 */
  invCode?: string | null,
  /** 存货名称 */
  invName?: string | null,
  /** 规格 */
  invSpec?: string | null,
  /** 型号 */
  invType?: string | null,
  /** 主计量单位编码 */
  measCode?: string | null,
  /** 主计量单位名称 */
  measName?: string | null,
  /** 入库数量 */
  rdQuantity?: number | null,
  /** 税率 */
  taxRatio?: number | null,
  /** 原币含税单价 */
  unitTaxPrice?: number | null,
  /** 原币无税单价 */
  unitPrice?: number | null,
  /** 原币无税金额 */
  iMoney?: number | null,
  /** 原币税额 */
  iTax?: number | null,
  /** 原币价税合计 */
  iSum?: number | null,
  /** 本币含税单价 */
  natUnitTaxPrice?: number | null,
  /** 本币无税单价 */
  natUnitPrice?: number | null,
  /** 本币无税金额 */
  iNatMoney?: number | null,
  /** 本币税额 */
  iNatTax?: number | null,
  /** 本币价税合计 */
  iNatSum?: number | null,
  /** 采购公司编码 */
  poComanyCode?: string | null,
  /** 采购公司名称 */
  poComanyName?: string | null,
  /** 采购单号 */
  poCode?: string | null,
  /** 采购主表Id */
  poMainId?: string | null,
  /** 采购子表Id */
  poDetailId?: string | null,
}

export interface PORefenceDetailQuery {
  /** 表单Id--每次只能参照一个采购订单 */
  mainId?: string | null,
}

export interface PORefenceMainDto {
  /** 主键Id */
  id?: string | null,
  /** 单号 */
  code?: string | null,
  /** 供应商编码 */
  vendorCode?: string | null,
  /** 供应商名称 */
  vendorName?: string | null,
  /** 币种编码 */
  currencyCode?: string | null,
  /** 币种名称 */
  currencyName?: string | null,
  /** 汇率 */
  adjustRate?: number | null,
  /** 业务日期--格式化 */
  busDateStr?: string | null,
  billStatus: EnumBillStatus,
  /** 单据状态描述 */
  billStatusDesc?: string | null,
  /** 仓库编码 */
  whCode?: string | null,
  /** 仓库名称 */
  whName?: string | null,
  /** 备注 */
  remark?: string | null,
}

export interface POReportDto {
  /** 主键Id */
  id?: string | null,
  /** 单号 */
  code?: string | null,
  /** 供应商编码 */
  vendorCode?: string | null,
  /** 供应商名称 */
  vendorName?: string | null,
  /** 币种编码 */
  currencyCode?: string | null,
  /** 币种名称 */
  currencyName?: string | null,
  /** 汇率 */
  adjustRate?: number | null,
  /** 业务日期--格式化 */
  busDateStr?: string | null,
  /** 仓库编码 */
  whCode?: string | null,
  /** 仓库名称 */
  whName?: string | null,
  billStatus: EnumBillStatus,
  /** 单据状态描述 */
  billStatusDesc?: string | null,
  /** 创建人 */
  createdUserName?: string | null,
  /** 备注 */
  remark?: string | null,
  /** 是否启用流程 */
  isEnableFlow?: boolean,
  /** 流程实例状态：【0-草稿、1-处理、2-通过、3-驳回、4-撤销、5-终止】. */
  flowStatus?: number | null,
  /** 品牌编码 */
  brandCode?: string | null,
  /** 品牌名称 */
  brandName?: string | null,
  /** 存货编码 */
  invCode?: string | null,
  /** 存货名称 */
  invName?: string | null,
  /** 规格 */
  invSpec?: string | null,
  /** 型号 */
  invType?: string | null,
  /** 主计量单位编码 */
  measCode?: string | null,
  /** 主计量单位名称 */
  measName?: string | null,
  /** 采购数量 */
  poQuantity?: number | null,
  /** 税率 */
  taxRatio?: number | null,
  /** 原币含税单价 */
  unitTaxPrice?: number | null,
  /** 原币无税单价 */
  unitPrice?: number | null,
  /** 原币无税金额 */
  iMoney?: number | null,
  /** 原币税额 */
  iTax?: number | null,
  /** 原币价税合计 */
  iSum?: number | null,
  /** 本币含税单价 */
  natUnitTaxPrice?: number | null,
  /** 本币无税单价 */
  natUnitPrice?: number | null,
  /** 本币无税金额 */
  iNatMoney?: number | null,
  /** 本币税额 */
  iNatTax?: number | null,
  /** 本币价税合计 */
  iNatSum?: number | null,
  /** 管家采购订单号 */
  gjpoCode?: string | null,
  /** 管家采购订单行号 */
  gjpoRowNum?: number | null,
  /** 采购公司编码 */
  poComanyCode?: string | null,
  /** 采购公司名称 */
  poComanyName?: string | null,
  /** ERP采购订单号 */
  erppoCode?: string | null,
  /** ERP采购订单行号 */
  erppoRowNum?: number | null,
  /** 是否委外 */
  isOutSource?: boolean,
  /** BOM版本号 */
  invBomVer?: string | null,
}

export interface PRDetailFormDetail {
  /** 行号 */
  rowNum?: number | null,
  /** 品牌编码 */
  brandCode?: string | null,
  /** 品牌名称 */
  brandName?: string | null,
  /** 存货编码 */
  invCode: string,
  /** 存货名称 */
  invName?: string | null,
  /** 规格 */
  invSpec?: string | null,
  /** 型号 */
  invType?: string | null,
  /** 主计量单位编码 */
  measCode?: string | null,
  /** 主计量单位名称 */
  measName?: string | null,
  /** 请购数量 */
  prQuantity?: number | null,
  /** 请购汇总数量 */
  collectPRQuantity?: number | null,
  /** 采购数量 */
  poQuantity?: number | null,
  /** 需求日期 */
  demandDate?: string | null,
  /** 仓库编码 */
  whCode?: string | null,
  /** 仓库名称 */
  whName?: string | null,
  /** 需求日期--格式化 */
  demandDateStr?: string | null,
}

export interface PRDetailUpd {
  /** 行号 */
  rowNum?: number | null,
  /** 品牌编码 */
  brandCode?: string | null,
  /** 品牌名称 */
  brandName?: string | null,
  /** 存货编码 */
  invCode: string,
  /** 存货名称 */
  invName?: string | null,
  /** 规格 */
  invSpec?: string | null,
  /** 型号 */
  invType?: string | null,
  /** 主计量单位编码 */
  measCode?: string | null,
  /** 主计量单位名称 */
  measName?: string | null,
  /** 请购数量 */
  prQuantity?: number | null,
  /** 请购汇总数量 */
  collectPRQuantity?: number | null,
  /** 采购数量 */
  poQuantity?: number | null,
  /** 需求日期 */
  demandDate?: string | null,
  /** 仓库编码 */
  whCode?: string | null,
  /** 仓库名称 */
  whName?: string | null,
}

export interface PRMainAdd {
  /** 单号 */
  code: string,
  /** 店铺编码 */
  shopCode: string,
  /** 店铺名称 */
  shopName: string,
  /** 渠道编码 */
  channelCode?: string | null,
  /** 渠道名称 */
  channelName?: string | null,
  /** 业务日期 */
  busDate?: string | null,
  /** 备注 */
  remark?: string | null,
  /** 明细 */
  details: PRDetailUpd[],
}

export interface PRMainForm {
  /** 单号 */
  code: string,
  /** 店铺编码 */
  shopCode: string,
  /** 店铺名称 */
  shopName: string,
  /** 渠道编码 */
  channelCode?: string | null,
  /** 渠道名称 */
  channelName?: string | null,
  /** 业务日期 */
  busDate?: string | null,
  /** 备注 */
  remark?: string | null,
  /** 主键Id */
  id?: string | null,
  /** 业务日期--格式化 */
  busDateStr?: string | null,
  billStatus: EnumBillStatus,
  /** 单据状态描述 */
  billStatusDesc?: string | null,
  /** 是否可编辑表单 */
  isEditForm?: boolean,
  /** 创建人 */
  createdUserName?: string | null,
  /** 是否启用流程 */
  isEnableFlow?: boolean,
  /** 流程实例状态：【0-保存、1-处理、2-通过、3-驳回、4-撤销、5-终止】. */
  flowStatus?: number | null,
  /** 当前页为第一页：First  当前也为最后一页：Last */
  firstOrLast?: string | null,
  /** 明细 */
  details?: PRDetailFormDetail[],
}

export interface PRMainUpd {
  /** 单号 */
  code: string,
  /** 店铺编码 */
  shopCode: string,
  /** 店铺名称 */
  shopName: string,
  /** 渠道编码 */
  channelCode?: string | null,
  /** 渠道名称 */
  channelName?: string | null,
  /** 业务日期 */
  busDate?: string | null,
  /** 备注 */
  remark?: string | null,
  /** 主键Id */
  id?: string | null,
  /** 明细 */
  details: PRDetailUpd[],
}

export interface PRQuery {
  /** 请购子表Id集合 */
  prDetailIds: string[],
}

export interface PRRefenceDetailDto {
  /** 主表Id */
  mainId?: string | null,
  /** 子表Id */
  id?: string | null,
  /** 品牌编码 */
  brandCode?: string | null,
  /** 品牌名称 */
  brandName?: string | null,
  /** 存货编码 */
  invCode?: string | null,
  /** 存货名称 */
  invName?: string | null,
  /** 规格 */
  invSpec?: string | null,
  /** 型号 */
  invType?: string | null,
  /** 请购数量 */
  prQuantity?: number | null,
  /** 需求日期 */
  demandDate?: string | null,
  /** 需求日期--格式化 */
  demandDateStr?: string | null,
  /** 仓库编码 */
  whCode?: string | null,
  /** 仓库名称 */
  whName?: string | null,
}

export interface PRRefenceDetailQuery {
  /** 表单Id集合 */
  mainIds: string[],
}

export interface PRRefenceMainDto {
  /** 主键Id */
  id?: string | null,
  /** 单号 */
  code?: string | null,
  /** 店铺编码 */
  shopCode?: string | null,
  /** 店铺名称 */
  shopName?: string | null,
  /** 渠道编码 */
  channelCode?: string | null,
  /** 渠道名称 */
  channelName?: string | null,
  /** 业务日期--格式化 */
  busDateStr?: string | null,
  billStatus: EnumBillStatus,
  /** 单据状态描述 */
  billStatusDesc?: string | null,
}

export interface PRReportDto {
  /** 主键Id */
  id?: string | null,
  /** 单号 */
  code?: string | null,
  /** 店铺编码 */
  shopCode?: string | null,
  /** 店铺名称 */
  shopName?: string | null,
  /** 渠道编码 */
  channelCode?: string | null,
  /** 渠道名称 */
  channelName?: string | null,
  /** 业务日期--格式化 */
  busDateStr?: string | null,
  billStatus: EnumBillStatus,
  /** 单据状态描述 */
  billStatusDesc?: string | null,
  /** 创建人 */
  createdUserName?: string | null,
  /** 是否启用流程 */
  isEnableFlow?: boolean,
  /** 流程实例状态：【0-草稿、1-处理、2-通过、3-驳回、4-撤销、5-终止】. */
  flowStatus?: number | null,
  /** 品牌编码 */
  brandCode?: string | null,
  /** 品牌名称 */
  brandName?: string | null,
  /** 存货编码 */
  invCode?: string | null,
  /** 存货名称 */
  invName?: string | null,
  /** 请购数量 */
  prQuantity?: number | null,
  /** 请购汇总数量 */
  collectPRQuantity?: number | null,
  /** 采购数量 */
  poQuantity?: number | null,
  /** 需求日期--格式化 */
  demandDateStr?: string | null,
  /** 仓库编码 */
  whCode?: string | null,
  /** 仓库名称 */
  whName?: string | null,
}

export interface PageResult_AccountBillDetailReportDto {
  pageNo?: number | null,
  pageSize?: number | null,
  totalPage?: number | null,
  totalRows?: number | null,
  rows?: AccountBillDetailReportDto[],
}

export interface PageResult_AccountBillReport {
  pageNo?: number | null,
  pageSize?: number | null,
  totalPage?: number | null,
  totalRows?: number | null,
  rows?: AccountBillReport[],
}

export interface PageResult_AdjustPriceReportDto {
  pageNo?: number | null,
  pageSize?: number | null,
  totalPage?: number | null,
  totalRows?: number | null,
  rows?: AdjustPriceReportDto[],
}

export interface PageResult_CollectPRRefenceMainDto {
  pageNo?: number | null,
  pageSize?: number | null,
  totalPage?: number | null,
  totalRows?: number | null,
  rows?: CollectPRRefenceMainDto[],
}

export interface PageResult_CollectPRReportDto {
  pageNo?: number | null,
  pageSize?: number | null,
  totalPage?: number | null,
  totalRows?: number | null,
  rows?: CollectPRReportDto[],
}

export interface PageResult_DigestCodeMapReportDto {
  pageNo?: number | null,
  pageSize?: number | null,
  totalPage?: number | null,
  totalRows?: number | null,
  rows?: DigestCodeMapReportDto[],
}

export interface PageResult_GenSoGJSoBillDto {
  pageNo?: number | null,
  pageSize?: number | null,
  totalPage?: number | null,
  totalRows?: number | null,
  rows?: GenSoGJSoBillDto[],
}

export interface PageResult_PORefenceMainDto {
  pageNo?: number | null,
  pageSize?: number | null,
  totalPage?: number | null,
  totalRows?: number | null,
  rows?: PORefenceMainDto[],
}

export interface PageResult_POReportDto {
  pageNo?: number | null,
  pageSize?: number | null,
  totalPage?: number | null,
  totalRows?: number | null,
  rows?: POReportDto[],
}

export interface PageResult_PRRefenceMainDto {
  pageNo?: number | null,
  pageSize?: number | null,
  totalPage?: number | null,
  totalRows?: number | null,
  rows?: PRRefenceMainDto[],
}

export interface PageResult_PRReportDto {
  pageNo?: number | null,
  pageSize?: number | null,
  totalPage?: number | null,
  totalRows?: number | null,
  rows?: PRReportDto[],
}

export interface PageResult_RDReportDto {
  pageNo?: number | null,
  pageSize?: number | null,
  totalPage?: number | null,
  totalRows?: number | null,
  rows?: RDReportDto[],
}

export interface PageResult_SOReportDto {
  pageNo?: number | null,
  pageSize?: number | null,
  totalPage?: number | null,
  totalRows?: number | null,
  rows?: SOReportDto[],
}

export interface QueryBillById {
  /** 业务主表Id */
  id?: string | null,
}

export interface RDDetailAddUpd {
  /** 行号 */
  rowNum?: number | null,
  /** 品牌编码 */
  brandCode?: string | null,
  /** 品牌名称 */
  brandName?: string | null,
  /** 存货编码 */
  invCode?: string | null,
  /** 存货名称 */
  invName?: string | null,
  /** 规格 */
  invSpec?: string | null,
  /** 型号 */
  invType?: string | null,
  /** 主计量单位编码 */
  measCode?: string | null,
  /** 主计量单位名称 */
  measName?: string | null,
  /** 入库数量 */
  rdQuantity?: number | null,
  /** 税率 */
  taxRatio?: number | null,
  /** 原币含税单价 */
  unitTaxPrice?: number | null,
  /** 原币无税单价 */
  unitPrice?: number | null,
  /** 原币无税金额 */
  iMoney?: number | null,
  /** 原币税额 */
  iTax?: number | null,
  /** 原币价税合计 */
  iSum?: number | null,
  /** 本币含税单价 */
  natUnitTaxPrice?: number | null,
  /** 本币无税单价 */
  natUnitPrice?: number | null,
  /** 本币无税金额 */
  iNatMoney?: number | null,
  /** 本币税额 */
  iNatTax?: number | null,
  /** 本币价税合计 */
  iNatSum?: number | null,
  /** 管家入库订单号 */
  gjrdCode?: string | null,
  /** 管家入库订单行号 */
  gjrdRowNum?: number | null,
  /** 采购公司编码 */
  poComanyCode?: string | null,
  /** 采购公司名称 */
  poComanyName?: string | null,
  /** ERP入库订单号 */
  erprdCode?: string | null,
  /** ERP入库订单行号 */
  erprdRowNum?: number | null,
  /** 采购单号 */
  poCode?: string | null,
  /** 采购主表Id */
  poMainId?: string | null,
  /** 采购子表Id */
  poDetailId?: string | null,
}

export interface RDDetailFormDetail {
  /** 行号 */
  rowNum?: number | null,
  /** 品牌编码 */
  brandCode?: string | null,
  /** 品牌名称 */
  brandName?: string | null,
  /** 存货编码 */
  invCode?: string | null,
  /** 存货名称 */
  invName?: string | null,
  /** 规格 */
  invSpec?: string | null,
  /** 型号 */
  invType?: string | null,
  /** 主计量单位编码 */
  measCode?: string | null,
  /** 主计量单位名称 */
  measName?: string | null,
  /** 入库数量 */
  rdQuantity?: number | null,
  /** 税率 */
  taxRatio?: number | null,
  /** 原币含税单价 */
  unitTaxPrice?: number | null,
  /** 原币无税单价 */
  unitPrice?: number | null,
  /** 原币无税金额 */
  iMoney?: number | null,
  /** 原币税额 */
  iTax?: number | null,
  /** 原币价税合计 */
  iSum?: number | null,
  /** 本币含税单价 */
  natUnitTaxPrice?: number | null,
  /** 本币无税单价 */
  natUnitPrice?: number | null,
  /** 本币无税金额 */
  iNatMoney?: number | null,
  /** 本币税额 */
  iNatTax?: number | null,
  /** 本币价税合计 */
  iNatSum?: number | null,
  /** 管家入库订单号 */
  gjrdCode?: string | null,
  /** 管家入库订单行号 */
  gjrdRowNum?: number | null,
  /** 采购公司编码 */
  poComanyCode?: string | null,
  /** 采购公司名称 */
  poComanyName?: string | null,
  /** ERP入库订单号 */
  erprdCode?: string | null,
  /** ERP入库订单行号 */
  erprdRowNum?: number | null,
  /** 采购单号 */
  poCode?: string | null,
  /** 采购主表Id */
  poMainId?: string | null,
  /** 采购子表Id */
  poDetailId?: string | null,
}

export interface RDMainAdd {
  /** 单号 */
  code: string,
  /** 供应商编码 */
  vendorCode?: string | null,
  /** 供应商名称 */
  vendorName?: string | null,
  /** 币种编码 */
  currencyCode?: string | null,
  /** 币种名称 */
  currencyName?: string | null,
  /** 汇率 */
  adjustRate?: number | null,
  /** 业务日期 */
  busDate?: string | null,
  /** 仓库编码 */
  whCode?: string | null,
  /** 仓库名称 */
  whName?: string | null,
  /** 备注 */
  remark?: string | null,
  /** 明细 */
  details: RDDetailAddUpd[],
}

export interface RDMainForm {
  /** 单号 */
  code: string,
  /** 供应商编码 */
  vendorCode?: string | null,
  /** 供应商名称 */
  vendorName?: string | null,
  /** 币种编码 */
  currencyCode?: string | null,
  /** 币种名称 */
  currencyName?: string | null,
  /** 汇率 */
  adjustRate?: number | null,
  /** 业务日期 */
  busDate?: string | null,
  /** 仓库编码 */
  whCode?: string | null,
  /** 仓库名称 */
  whName?: string | null,
  /** 备注 */
  remark?: string | null,
  /** 主键Id */
  id?: string | null,
  /** 业务日期--格式化 */
  busDateStr?: string | null,
  billStatus: EnumBillStatus,
  /** 单据状态描述 */
  billStatusDesc?: string | null,
  /** 是否可编辑表单 */
  isEditForm?: boolean,
  /** 创建人 */
  createdUserName?: string | null,
  /** 流程实例状态：【0-保存、1-处理、2-通过、3-驳回、4-撤销、5-终止】. */
  flowStatus?: number | null,
  /** 是否启用流程 */
  isEnableFlow?: boolean,
  /** 当前页为第一页：First  当前也为最后一页：Last */
  firstOrLast?: string | null,
  /** 管家入库订单号 */
  gjrdCode?: string | null,
  /** 管家入库订单行号 */
  gjrdRowNum?: number | null,
  /** 采购公司编码 */
  poComanyCode?: string | null,
  /** 采购公司名称 */
  poComanyName?: string | null,
  /** ERP入库订单号 */
  erprdCode?: string | null,
  /** ERP入库订单行号 */
  erprdRowNum?: number | null,
  /** 明细 */
  details?: RDDetailFormDetail[],
}

export interface RDMainUpd {
  /** 单号 */
  code: string,
  /** 供应商编码 */
  vendorCode?: string | null,
  /** 供应商名称 */
  vendorName?: string | null,
  /** 币种编码 */
  currencyCode?: string | null,
  /** 币种名称 */
  currencyName?: string | null,
  /** 汇率 */
  adjustRate?: number | null,
  /** 业务日期 */
  busDate?: string | null,
  /** 仓库编码 */
  whCode?: string | null,
  /** 仓库名称 */
  whName?: string | null,
  /** 备注 */
  remark?: string | null,
  /** 主表Id */
  id?: string | null,
  /** 明细 */
  details: RDDetailAddUpd[],
}

export interface RDReportDto {
  /** 主键Id */
  id?: string | null,
  /** 单号 */
  code?: string | null,
  /** 供应商编码 */
  vendorCode?: string | null,
  /** 供应商名称 */
  vendorName?: string | null,
  /** 币种编码 */
  currencyCode?: string | null,
  /** 币种名称 */
  currencyName?: string | null,
  /** 汇率 */
  adjustRate?: number | null,
  /** 业务日期--格式化 */
  busDateStr?: string | null,
  /** 仓库编码 */
  whCode?: string | null,
  /** 仓库名称 */
  whName?: string | null,
  billStatus: EnumBillStatus,
  /** 单据状态描述 */
  billStatusDesc?: string | null,
  /** 创建人 */
  createdUserName?: string | null,
  /** 备注 */
  remark?: string | null,
  /** 是否启用流程 */
  isEnableFlow?: boolean,
  /** 流程实例状态：【0-草稿、1-处理、2-通过、3-驳回、4-撤销、5-终止】. */
  flowStatus?: number | null,
  /** 品牌编码 */
  brandCode?: string | null,
  /** 品牌名称 */
  brandName?: string | null,
  /** 存货编码 */
  invCode?: string | null,
  /** 存货名称 */
  invName?: string | null,
  /** 规格 */
  invSpec?: string | null,
  /** 型号 */
  invType?: string | null,
  /** 主计量单位编码 */
  measCode?: string | null,
  /** 主计量单位名称 */
  measName?: string | null,
  /** 入库数量 */
  rdQuantity?: number | null,
  /** 税率 */
  taxRatio?: number | null,
  /** 原币含税单价 */
  unitTaxPrice?: number | null,
  /** 原币无税单价 */
  unitPrice?: number | null,
  /** 原币无税金额 */
  iMoney?: number | null,
  /** 原币税额 */
  iTax?: number | null,
  /** 原币价税合计 */
  iSum?: number | null,
  /** 本币含税单价 */
  natUnitTaxPrice?: number | null,
  /** 本币无税单价 */
  natUnitPrice?: number | null,
  /** 本币无税金额 */
  iNatMoney?: number | null,
  /** 本币税额 */
  iNatTax?: number | null,
  /** 本币价税合计 */
  iNatSum?: number | null,
  /** 管家入库订单号 */
  gjrdCode?: string | null,
  /** 管家入库订单行号 */
  gjrdRowNum?: number | null,
  /** 采购公司编码 */
  poComanyCode?: string | null,
  /** 采购公司名称 */
  poComanyName?: string | null,
  /** ERP入库订单号 */
  erprdCode?: string | null,
  /** ERP入库订单行号 */
  erprdRowNum?: number | null,
}

export interface RefenceCollectPRWhDetail {
  /** 仓库编码 */
  whCode?: string | null,
  /** 仓库名称 */
  whName?: string | null,
  /** 订货量 */
  prQuantity?: number | null,
  /** 请购明细Id集合 */
  prDetailIds: string[],
  /** 汇总表主表Id */
  mainId?: string | null,
  /** 品牌编码 */
  brandCode?: string | null,
  /** 品牌名称 */
  brandName?: string | null,
  /** 存货编码 */
  invCode?: string | null,
  /** 存货名称 */
  invName?: string | null,
  /** 规格 */
  invSpec?: string | null,
  /** 型号 */
  invType?: string | null,
  /** 主计量单位编码 */
  measCode?: string | null,
  /** 主计量单位名称 */
  measName?: string | null,
  /** 采购公司编码 */
  poComanyCode?: string | null,
  /** 采购公司名称 */
  poComanyName?: string | null,
  /** 是否委外 */
  isOutSource?: boolean,
  /** BOM版本号 */
  invBomVer?: string | null,
}

export interface RefencePRDetail {
  /** 仓库编码 */
  whCode?: string | null,
  /** 仓库名称 */
  whName?: string | null,
  /** 订货量 */
  prQuantity?: number | null,
  /** 请购明细Id集合 */
  prDetailIds: string[],
}

export interface SODetailAddUpd {
  /** 行号 */
  rowNum?: number | null,
  /** 品牌编码 */
  brandCode?: string | null,
  /** 品牌名称 */
  brandName?: string | null,
  /** 存货编码 */
  invCode: string,
  /** 存货名称 */
  invName: string,
  /** 规格 */
  invSpec?: string | null,
  /** 型号 */
  invType?: string | null,
  /** 主计量单位编码 */
  measCode?: string | null,
  /** 主计量单位名称 */
  measName?: string | null,
  /** 数量 */
  soQuantity?: number | null,
  /** 税率 */
  taxRatio?: number | null,
  /** 原币含税单价 */
  unitTaxPrice?: number | null,
  /** 原币无税单价 */
  unitPrice?: number | null,
  /** 原币无税金额 */
  iMoney?: number | null,
  /** 原币税额 */
  iTax?: number | null,
  /** 原币价税合计 */
  iSum?: number | null,
  /** 原币含税单价--管家 */
  unitTaxPriceGJ?: number | null,
  /** 原币无税单价--管家 */
  unitPriceGJ?: number | null,
  /** 原币无税金额--管家 */
  iMoneyGJ?: number | null,
  /** 原币税额--管家 */
  iTaxGJ?: number | null,
  /** 原币价税合计--管家 */
  iSumGJ?: number | null,
}

export interface SODetailFormDetail {
  /** 行号 */
  rowNum?: number | null,
  /** 品牌编码 */
  brandCode?: string | null,
  /** 品牌名称 */
  brandName?: string | null,
  /** 存货编码 */
  invCode: string,
  /** 存货名称 */
  invName: string,
  /** 规格 */
  invSpec?: string | null,
  /** 型号 */
  invType?: string | null,
  /** 主计量单位编码 */
  measCode?: string | null,
  /** 主计量单位名称 */
  measName?: string | null,
  /** 数量 */
  soQuantity?: number | null,
  /** 税率 */
  taxRatio?: number | null,
  /** 原币含税单价 */
  unitTaxPrice?: number | null,
  /** 原币无税单价 */
  unitPrice?: number | null,
  /** 原币无税金额 */
  iMoney?: number | null,
  /** 原币税额 */
  iTax?: number | null,
  /** 原币价税合计 */
  iSum?: number | null,
}

export interface SOMainAdd {
  /** 单号 */
  code: string,
  /** 销售公司编码 */
  soComanyCode: string,
  /** 销售公司名称 */
  soComanyName: string,
  /** 店铺编码 */
  shopCode: string,
  /** 店铺名称 */
  shopName: string,
  /** 业务日期 */
  busDate?: string | null,
  /** 客户编码 */
  cusCode: string,
  /** 客户名称 */
  cusName: string,
  /** 部门编码 */
  deptCode: string,
  /** 部门名称 */
  deptName: string,
  /** 业务员编码 */
  personCode?: string | null,
  /** 业务员名称 */
  personName?: string | null,
  /** 总金额--含税汇总的价税合计 */
  totalAmount: number,
  /** 管家总金额--管家、前端不要展示也不要修改该字段的值 */
  totalAmountGJ?: number | null,
  /** 备注 */
  remark?: string | null,
  query: NoGenSoQuery,
  /** 明细 */
  details: SODetailAddUpd[],
}

export interface SOMainForm {
  /** 单号 */
  code: string,
  /** 销售公司编码 */
  soComanyCode: string,
  /** 销售公司名称 */
  soComanyName: string,
  /** 店铺编码 */
  shopCode: string,
  /** 店铺名称 */
  shopName: string,
  /** 业务日期 */
  busDate?: string | null,
  /** 客户编码 */
  cusCode: string,
  /** 客户名称 */
  cusName: string,
  /** 部门编码 */
  deptCode: string,
  /** 部门名称 */
  deptName: string,
  /** 业务员编码 */
  personCode?: string | null,
  /** 业务员名称 */
  personName?: string | null,
  /** 总金额--含税汇总的价税合计 */
  totalAmount: number,
  /** 管家总金额--管家、前端不要展示也不要修改该字段的值 */
  totalAmountGJ?: number | null,
  /** 备注 */
  remark?: string | null,
  /** 主键Id */
  id?: string | null,
  /** 业务日期--格式化 */
  busDateStr?: string | null,
  billStatus: EnumBillStatus,
  /** 单据状态描述 */
  billStatusDesc?: string | null,
  /** 是否可编辑表单 */
  isEditForm?: boolean,
  /** 创建人 */
  createdUserName?: string | null,
  /** 流程实例状态：【0-保存、1-处理、2-通过、3-驳回、4-撤销、5-终止】. */
  flowStatus?: number | null,
  /** 是否启用流程 */
  isEnableFlow?: boolean,
  /** 当前页为第一页：First  当前也为最后一页：Last */
  firstOrLast?: string | null,
  query: NoGenSoQuery,
  /** 明细 */
  details?: SODetailFormDetail[],
}

export interface SOMainUpd {
  /** 单号 */
  code: string,
  /** 销售公司编码 */
  soComanyCode: string,
  /** 销售公司名称 */
  soComanyName: string,
  /** 店铺编码 */
  shopCode: string,
  /** 店铺名称 */
  shopName: string,
  /** 业务日期 */
  busDate?: string | null,
  /** 客户编码 */
  cusCode: string,
  /** 客户名称 */
  cusName: string,
  /** 部门编码 */
  deptCode: string,
  /** 部门名称 */
  deptName: string,
  /** 业务员编码 */
  personCode?: string | null,
  /** 业务员名称 */
  personName?: string | null,
  /** 总金额--含税汇总的价税合计 */
  totalAmount: number,
  /** 管家总金额--管家、前端不要展示也不要修改该字段的值 */
  totalAmountGJ?: number | null,
  /** 备注 */
  remark?: string | null,
  query: NoGenSoQuery,
  /** 主表Id */
  id?: string | null,
  /** 明细 */
  details: SODetailAddUpd[],
}

export interface SOReportDto {
  /** 主键Id */
  id?: string | null,
  /** 单号 */
  code?: string | null,
  /** 销售公司编码 */
  soComanyCode?: string | null,
  /** 销售公司名称 */
  soComanyName?: string | null,
  /** 店铺编码 */
  shopCode?: string | null,
  /** 店铺名称 */
  shopName?: string | null,
  /** 业务日期--格式化 */
  busDateStr?: string | null,
  /** 客户编码 */
  cusCode?: string | null,
  /** 客户名称 */
  cusName?: string | null,
  /** 部门编码 */
  deptCode?: string | null,
  /** 部门名称 */
  deptName?: string | null,
  /** 业务员编码 */
  personCode?: string | null,
  /** 业务员名称 */
  personName?: string | null,
  billStatus: EnumBillStatus,
  /** 单据状态描述 */
  billStatusDesc?: string | null,
  /** 创建人 */
  createdUserName?: string | null,
  /** 备注 */
  remark?: string | null,
  /** 是否启用流程 */
  isEnableFlow?: boolean,
  /** 流程实例状态：【0-草稿、1-处理、2-通过、3-驳回、4-撤销、5-终止】. */
  flowStatus?: number | null,
  /** 品牌编码 */
  brandCode?: string | null,
  /** 品牌名称 */
  brandName?: string | null,
  /** 存货编码 */
  invCode?: string | null,
  /** 存货名称 */
  invName?: string | null,
  /** 规格 */
  invSpec?: string | null,
  /** 型号 */
  invType?: string | null,
  /** 主计量单位编码 */
  measCode?: string | null,
  /** 主计量单位名称 */
  measName?: string | null,
  /** 数量 */
  soQuantity?: number | null,
  /** 税率 */
  taxRatio?: number | null,
  /** 原币含税单价 */
  unitTaxPrice?: number | null,
  /** 原币无税单价 */
  unitPrice?: number | null,
  /** 原币无税金额 */
  iMoney?: number | null,
  /** 原币税额 */
  iTax?: number | null,
  /** 原币价税合计 */
  iSum?: number | null,
}

export interface SaleDaliyAddUpd {
  /** 行号 */
  rowNum?: number | null,
  /** 仓库编码 */
  whCode: string,
  /** 仓库名称 */
  whName: string,
  /** 日销量 */
  saleDaliyQty?: number | null,
}

export interface SaleDaliyForm {
  /** 行号 */
  rowNum?: number | null,
  /** 仓库编码 */
  whCode: string,
  /** 仓库名称 */
  whName: string,
  /** 日销量 */
  saleDaliyQty?: number | null,
}

export interface VenInvPrice {
  operType: EnumAdjustPriceOperType,
  /** 存货编码 */
  invCode?: string | null,
  /** 存货名称 */
  invName?: string | null,
  /** 税率 */
  taxRatio?: number | null,
  /** 含税单价（是本币还是原币由表头币种来决定） */
  unitTaxPrice?: number | null,
  /** 无税单价（是本币还是原币由表头币种来决定） */
  unitPrice?: number | null,
}

export interface VenInvQty {
  /** 存货编码 */
  invCode?: string | null,
  /** 数量 */
  quantity?: number | null,
}

export interface VendInvPriceQuery {
  /** 供应商编码 */
  vendorCode?: string | null,
  /** 币种编码 */
  currencyCode?: string | null,
  /** 业务日期 */
  busDate?: string | null,
  /** 供应商存货数量 */
  venInvQty?: VenInvQty[],
}

export interface XnRestfulResult_AdjustPriceMainForm {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: AdjustPriceMainForm,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_BusGenCodeOutput {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: BusGenCodeOutput,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_CollectMainForm {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: CollectMainForm,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_ExamineBusAPIOutput {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: ExamineBusAPIOutput,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_ExportResultViewModel {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: ExportResultViewModel,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_Int64 {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  /** 数据 */
  data?: string | null,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_List_AccSubjDto {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  /** 数据 */
  data?: AccSubjDto[],
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_List_BusAPILogOutput {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  /** 数据 */
  data?: BusAPILogOutput[],
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_List_CollectPRDetail {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  /** 数据 */
  data?: CollectPRDetail[],
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_List_InvBomPoCompany {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  /** 数据 */
  data?: InvBomPoCompany[],
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_List_InvBomVersionDto {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  /** 数据 */
  data?: InvBomVersionDto[],
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_List_PORefenceDetailDto {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  /** 数据 */
  data?: PORefenceDetailDto[],
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_List_PRRefenceDetailDto {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  /** 数据 */
  data?: PRRefenceDetailDto[],
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_List_RefenceCollectPRWhDetail {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  /** 数据 */
  data?: RefenceCollectPRWhDetail[],
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_List_SaleDaliyForm {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  /** 数据 */
  data?: SaleDaliyForm[],
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_List_VenInvPrice {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  /** 数据 */
  data?: VenInvPrice[],
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_NoGenSoMainSummary {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: NoGenSoMainSummary,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_POMainForm {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: POMainForm,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_PRMainForm {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: PRMainForm,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_PageResult_AccountBillDetailReportDto {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: PageResult_AccountBillDetailReportDto,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_PageResult_AccountBillReport {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: PageResult_AccountBillReport,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_PageResult_AdjustPriceReportDto {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: PageResult_AdjustPriceReportDto,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_PageResult_CollectPRRefenceMainDto {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: PageResult_CollectPRRefenceMainDto,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_PageResult_CollectPRReportDto {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: PageResult_CollectPRReportDto,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_PageResult_DigestCodeMapReportDto {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: PageResult_DigestCodeMapReportDto,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_PageResult_GenSoGJSoBillDto {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: PageResult_GenSoGJSoBillDto,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_PageResult_PORefenceMainDto {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: PageResult_PORefenceMainDto,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_PageResult_POReportDto {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: PageResult_POReportDto,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_PageResult_PRRefenceMainDto {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: PageResult_PRRefenceMainDto,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_PageResult_PRReportDto {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: PageResult_PRReportDto,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_PageResult_RDReportDto {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: PageResult_RDReportDto,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_PageResult_SOReportDto {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: PageResult_SOReportDto,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_RDMainForm {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: RDMainForm,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_SOMainForm {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  data: SOMainForm,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}

export interface XnRestfulResult_String {
  /** 执行成功 */
  success?: boolean,
  /** 状态码 */
  code?: number | null,
  /** 错误信息 */
  message: any,
  /** 数据 */
  data?: string | null,
  /** 附加数据 */
  extras: any,
  /** 时间戳 */
  timestamp?: string | null,
}
