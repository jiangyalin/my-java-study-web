<template>
  <m-dialog
    class="m-dialog"
    v-model="visible"
    :title="title"
    dataCover
    resize
    draggable
    zIndex="4"
    width="50%"
    @closed="empty"
  >
    <div
      class="g-box g-emp-skill-add-box"
      v-loading="loading"
    >
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        labelWidth="80px"
        :size="skinStore.size"
        :disabled="disabled"
      >
        <div class="u-box">
          <div class="u-row">
            <div class="u-col">
              <el-form-item
                label="工序"
                prop="OpId"
                data-item
              >
                <el-select
                  v-model="ruleForm.OpId"
                  placeholder="请选择工序"
                  clearable
                  filterable
                >
                  <el-option
                    v-for="item in filter.operationOptions.value"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </div>
            <div class="u-col">
              <el-form-item
                label="班组"
                prop="TeamId"
                data-item
              >
                <el-select
                  v-model="ruleForm.TeamId"
                  clearable
                  collapseTags
                  placeholder="请选择班组"
                  @change="asspersonsOptions.filterOptionsValue({ Id: ruleForm.TeamId });ruleForm.PersonCode = ''"
                >
                  <el-option
                    v-for="item in filter.teamOptions.value"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </div>
          </div>
          <div class="u-row">
            <div class="u-col">
              <el-form-item
                label="人员"
                prop="PersonCode"
              >
                <el-select
                  v-model="ruleForm.PersonCode"
                  clearable
                  collapseTags
                  :disabled="!ruleForm.TeamId"
                  placeholder="请选择人员"
                >
                  <el-option
                    v-for="item in filter.asspersonsOptions.value"
                    :key="item.value"
                    :label="'['+item.value+']'+item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </div>
            <div class="u-col">
              <el-form-item
                label="培训日期"
                prop="TrainDate"
              >
                <el-date-picker
                  v-model="ruleForm.TrainDate"
                  type="date"
                  placeholder="请选择培训日期"
                />
              </el-form-item>
            </div>
          </div>
          <div class="u-row">
            <div class="u-col">
              <el-form-item
                label="熟练程度"
                prop="Proficiency"
              >
                <div class="m-it-gp">
                  <MInputNumber
                    v-model="ruleForm.Proficiency"
                    :min="0"
                    :max="100"
                    :step="0.01"
                    placeholder="请输入熟练程度"
                    :size="skinStore.size"
                  ></MInputNumber>
                  <p class="u-suffix">%</p>
                </div>
              </el-form-item>
            </div>
            <div class="u-col">
              <el-form-item
                label="备注"
                prop="Remark"
              >
                <el-input
                  v-model="ruleForm.Remark"
                  placeholder="请输入备注"
                  showWordLimit
                  type="textarea"
                />
              </el-form-item>
            </div>
          </div>
        </div>
      </el-form>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button
          :size="skinStore.size"
          @click="empty"
        >
          取消
        </el-button>
        <el-button
          type="primary"
          :size="skinStore.size"
          @click="submit"
          :disabled="disabled"
        >
          确定
        </el-button>
      </div>
    </template>
  </m-dialog>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import api from '@/api'
import { ElMessage } from 'element-plus'
import { useSkinStore } from '@/stores/skin/counter'
import type { Filter } from '@/typings/interface'
import { useAsspersonsOptions, useOperationOptions, useTeamOptions, useWcListOptions } from '@/hook/useOptions'
import type { EmpSkillFormType, EmpSkillListItemType } from '@/views/console/empSkill/empSkillType'

const skinStore = useSkinStore()

const props = withDefaults(
  defineProps<{
    formId?: string,
    disabled:boolean
  }>(),
  {
    formId: '',
    disabled: false
  }
)
const teamOptionsOptions = useTeamOptions()
const asspersonsOptions = useAsspersonsOptions()
const filter: Filter = {
  wcOptions: useWcListOptions(),
  asspersonsOptions: asspersonsOptions.options,
  teamOptions: teamOptionsOptions.options,
  operationOptions: useOperationOptions()
}
const emit = defineEmits(['submit'])
const isAddMode = computed(() => !ruleForm.Id)
const loading = ref(false)
const visible = ref<boolean>(false)
const title = computed(() => {
  return isAddMode.value ? '新增员工技能培训记录' : props.disabled ? '查看新增员工技能培训记录' : '编辑新增员工技能培训记录'
})
const ruleForm: EmpSkillFormType = reactive<EmpSkillFormType>({
  /** @description ID 编辑可传 */
  Id: '',
  /** @description 工序ID */
  OpId: '',
  /** @description 班组ID */
  TeamId: '',
  // /** @description 班组名称 */
  // TeamName: '',
  /** @description 人员编码 */
  PersonCode: '',
  // /** @description 人员名称 */
  // PersonName: '',
  /** @description 培训日期 */
  TrainDate: '',
  /** @description 熟练程度 */
  Proficiency: null,
  /** @description 备注说明 */
  Remark: ''
})
const rules = reactive({
  OpId: [{ required: true, message: '请选择工序', trigger: 'change' }],
  TeamId: [{ required: true, message: '请选择班组', trigger: 'change' }],
  PersonCode: [{ required: true, message: '请选择人员', trigger: 'change' }],
  TrainDate: [{ required: true, message: '请选择培训日期', trigger: 'change' }],
  Proficiency: [{ required: true, message: '请输入熟练程度', trigger: 'change' }]
})
const open = (form: EmpSkillListItemType | null = null) => {
  visible.value = true
  if (!form) return
  ruleForm.Id = form.Id || ''
  ruleForm.OpId = form.OpId || ''
  ruleForm.TeamId = form.TeamId || ''
  // ruleForm.TeamName = form.TeamName || ''
  ruleForm.PersonCode = form.PersonCode || ''
  // ruleForm.PersonName = form.PersonName || ''
  ruleForm.TrainDate = form.TrainDate || ''
  ruleForm.Proficiency = form.Proficiency as number
  ruleForm.Remark = form.Remark || ''
}
const empty = () => {
  visible.value = false
  ruleForm.Id = ''
  ruleForm.OpId = ''
  ruleForm.TeamId = ''
  // ruleForm.TeamName = ''
  ruleForm.PersonCode = ''
  // ruleForm.PersonName = ''
  ruleForm.TrainDate = ''
  ruleForm.Proficiency = null
  ruleForm.Remark = ''
}
const submit = async () => {
  api.empskill.postEmpskillSave({
    /** @description ID 编辑可传 */
    Id: ruleForm.Id,
    /** @description 工序ID */
    OpId: ruleForm.OpId,
    /** @description 班组ID */
    TeamId: ruleForm.TeamId,
    /** @description 班组名称 */
    TeamName: filter.teamOptions.value.find(item => item.value === ruleForm.TeamId)?.label as string || '',
    /** @description 人员编码 */
    PersonCode: ruleForm.PersonCode,
    /** @description 人员名称 */
    PersonName: filter.asspersonsOptions.value.find(item => item.value === ruleForm.PersonCode)?.label as string || '',
    /** @description 培训日期 */
    TrainDate: ruleForm.TrainDate,
    /** @description 熟练程度 */
    Proficiency: (ruleForm.Proficiency || 0) / 100,
    /** @description 备注说明 */
    Remark: ruleForm.Remark
  }).then(res => {
    ElMessage.success(res.msg)
    emit('submit')
    visible.value = false
  })
}
defineExpose({
  open
})
</script>

<style scoped lang="scss">
.g-emp-skill-add-box {
  position: relative;
  //padding: 24px;
  box-sizing: border-box;

  &[data-edit-pwd-mode='true'] {
    .u-row .u-col {
      width: 100%;
    }
  }
}

.u-tt {
  margin-bottom: 12px;
  font-size: var(--m-fs-title);
  color: var(--m-fc-title);
  line-height: 24px;
}

.u-row {
  display: flex;

  .u-col {
    width: 100%;
  }

  .u-col-flex {
    display: flex;

    .el-form-item {
      width: 50%;
    }
  }
}

.u-avatar-gp {
  display: flex;
  align-items: center;

  .u-avatar {
    margin-left: 12px;
    height: 100px;
    cursor: pointer;
  }
}
</style>

<style lang="scss">
.g-emp-skill-add-box {
  .m-it-gp {
    position: relative;
    width: 100%;

    .u-suffix {
      position: absolute;
      top: 50%;
      right: 0;
      width: 24px;
      text-align: center;
      transform: translateY(-50%);
    }
  }
}
</style>
