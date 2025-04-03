export interface EmpSkillListItemType {
  sn: number;
  /** @description 工序名称 */
  OpName: string;
  /** @description 熟练程度 */
  ProficiencyStr: string;
  /** @description 创建时间 */
  CreatedTime: string;
  /** @description 创建者名称 */
  CreatedUserName: string;
  /** @description ID 编辑可传 */
  Id: string;
  /** @description 工序ID */
  OpId: string;
  /** @description 班组ID */
  TeamId: string;
  /** @description 班组名称 */
  TeamName: string;
  /** @description 人员编码 */
  PersonCode: string;
  /** @description 人员名称 */
  PersonName: string;
  /** @description 培训日期 */
  TrainDate: string;
  /** @description 熟练程度 */
  Proficiency: number | null;
  /** @description 备注说明 */
  Remark: string;
}

export interface EmpSkillFormType {
  /** @description ID 编辑可传 */
  Id: string;
  /** @description 工序ID */
  OpId: string;
  /** @description 班组ID */
  TeamId: string;
  // /** @description 班组名称 */
  // TeamName: string;
  /** @description 人员编码 */
  PersonCode: string;
  // /** @description 人员名称 */
  // PersonName: string;
  /** @description 培训日期 */
  TrainDate: string;
  /** @description 熟练程度 */
  Proficiency: number | null;
  /** @description 备注说明 */
  Remark: string;
}
