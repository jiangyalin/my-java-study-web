// 安全质量数据
export interface SafetyQualityData {
  safety: {
    minor: string;
    capacity: string;
  };
  quality: {
    minor: string;
    capacity: string;
  };
}

// 每日报废数据
export interface ScrapData {
  // key为日期(1-7),value为报废数量
  [key: string]: string;
  monthlyTotal?: string; // 新增: 本月累计报废数
}

// 设备状态数据
export interface EquipmentData {
  // key为设备编号(1-24),value为开机率
  [key: string]: string;
  monthlyFaultTime?: string; // 新增: 本月故障时间
  averageOEE?: string; // 新增: 平均OEE
}

// 生产过程管理数据
export interface ProcessManagementData {
  qualityInspection: string; // 质量巡检完成率
  hierarchicalAudit: string; // 分层审核完成率
  equipmentMaintenance: string; // 设备保养达成率
  moldMaintenance: string; // 模具保养达成率
}

// 新增统计数据接口
export interface StatisticsData {
  sheets: {
    consumption: string; // 耗用
    output: string; // 产出
    scrap: string; // 报废
    rate?: string; // 投入产出率
  };
  tons: {
    consumption: string; // 耗用
    output: string; // 产出
    scrap: string; // 报废
    rate?: string; // 投入产出率
  };
}

// 添加新的类型定义
interface PlanItem {
  PlanQty: number
  RealQty: number
  ComRate: number
}

interface PlanComRateData {
  InvType: number
  InvTypeName: string
  ShipItem: PlanItem
  MoItem: PlanItem
}

interface OrderProgressItem {
  MoCode: string
  InvAddCode: string
  InvName: string
  IssueQty: number
  Process: number
}

interface RiskDeliveryItem {
  NoNum: number
  cinvaddcode: string
  QlQty: number
}

// 整体数据结构
export interface DashboardData {
  safetyQuality: SafetyQualityData;
  scrapData: ScrapData;
  equipmentData: EquipmentData;
  processManagement: ProcessManagementData;
  statistics: StatisticsData; // 新增统计数据
  cyPlanData?: PlanComRateData
  qjdPlanData?: PlanComRateData
  orderProgress?: OrderProgressItem[]
  riskDelivery?: RiskDeliveryItem[]
}
