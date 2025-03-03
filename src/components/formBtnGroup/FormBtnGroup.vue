<template>
  <div class="g-form-btn-group-box">
    <el-button
      type="primary"
      :size="props.size"
      icon="Plus"
      v-if="showBtnStatus.add && !slots.add"
      @click="emit('clickAdd')"
    >
      新增
    </el-button>
    <slot name="add"></slot>
    <el-button
      type="info"
      :size="props.size"
      icon="Back"
      v-if="showBtnStatus.cancel && !slots.cancel"
      @click="emit('clickCancel')"
    >
      取消
    </el-button>
    <slot name="cancel"></slot>
    <el-button
      type="primary"
      :size="props.size"
      icon="FolderChecked"
      v-if="showBtnStatus.save && !slots.save"
      @click="emit('clickSave')"
    >
      保存
    </el-button>
    <slot name="save"></slot>
    <!--<el-button-->
    <!--  type="primary"-->
    <!--  size="small"-->
    <!--  v-if="showBtnStatus.submit && !slots.submit"-->
    <!--  @click="emit('clickSubmit')"-->
    <!--&gt;-->
    <!--  提交-->
    <!--</el-button>-->
    <!--<slot name="submit"></slot>-->
    <el-popconfirm
      title="是否确认删除?"
      v-if="showBtnStatus.remove && !slots.remove"
      @confirm="emit('clickRemove')"
    >
      <template #reference>
        <el-button
          type="danger"
          :size="props.size"
          icon="Delete"
        >
          删除
        </el-button>
      </template>
    </el-popconfirm>
    <slot name="remove"></slot>
    <el-button
      type="primary"
      :size="props.size"
      icon="EditPen"
      v-if="showBtnStatus.edit && !slots.edit"
      @click="emit('clickEdit')"
    >
      编辑
    </el-button>
    <slot name="edit"></slot>
    <el-button
      type="success"
      :size="props.size"
      icon="Check"
      v-if="showBtnStatus.review && !slots.review"
      @click="openOpinion();emit('clickReview')"
    >
      审核
    </el-button>
    <slot name="review"></slot>
    <el-button
      type="warning"
      :size="props.size"
      icon="Close"
      v-if="showBtnStatus.abandonment && !slots.abandonment"
      @click="abandonment();emit('clickAbandonment')"
    >
      弃审
    </el-button>
    <slot name="abandonment"></slot>
    <el-button
      type="info"
      :size="props.size"
      icon="Printer"
      v-if="showBtnStatus.print && !slots.print"
      @click="print();emit('clickPrint')"
    >
      打印
    </el-button>
    <slot name="print"></slot>
    <slot name="other"></slot>

    <!--审批意见-->
    <m-dialog
      class="m-dialog"
      title="审批意见"
      width="400px"
      dataCover
      resize
      draggable
      v-model="opinion.visible"
    >
      <el-input
        type="textarea"
        v-model="opinion.tips"
        placeholder="请输入审批意见"
        :rows="4"
      />
      <template #footer>
        <div class="dialog-footer">
          <el-button
            type="primary"
            :size="props.size"
            @click="review"
          >
            通过
          </el-button>
          <el-button
            :size="props.size"
            @click="reject"
          >
            驳回
          </el-button>
        </div>
      </template>
    </m-dialog>
  </div>
</template>

<script setup lang="ts">
import { useSlots, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { BillStatus } from '@/typings/enum'
import routerToBtnPermissions from '@/components/formBtnGroup/routerToBtnPermissions'
import config from '@/config'
import { ElMessage } from 'element-plus'

const props = withDefaults(defineProps<{
  formId?: string,
  formStatus?: BillStatus | null, // 单据状态
  isInfoMode?: boolean, // 是否为详情模式
  isEditMode?: boolean, // 是否为编辑模式
  isAddMode?: boolean, // 是否为新增模式
  isNoStatus?: boolean, // 是否不存在审核状态
  size?: string, // 组件大小
  bClose?: boolean
}>(), {
  formId: '',
  formStatus: null,
  isInfoMode: false,
  isEditMode: false,
  isAddMode: false,
  isNoStatus: false,
  size: 'default',
  bClose: false
})

const emit = defineEmits<{
  clickAdd: [] // 新增
  clickCancel: [] // 取消
  clickSave: [] // 保存
  clickEdit: [] // 编辑
  clickSubmit: [] // 提交
  clickRemove: [] // 删除
  clickReview: [] // 审核
  clickAbandonment: [] // 弃审
  approvalFinish: [data: any] // 审批完成
  clickPrint: [] // 打印
}>()

const slots = useSlots()
const router = useRouter()

interface ShowBtnStatus {
  /** 新增 */
  add: boolean,
  /** 取消 */
  cancel: boolean,
  /** 保存 */
  save: boolean,
  /** 编辑 */
  edit: boolean,
  // /** 提交 */
  // submit: boolean,
  /** 删除 */
  remove: boolean,
  /** 审核 */
  review: boolean,
  /** 弃审 */
  abandonment: boolean,
  /** 打印 */
  print: boolean
}

const permissions: string[] = JSON.parse(localStorage.getItem('buttonPermissions') || '[]')
const hasPermission = (target:string|string[]) => {
  if (typeof target === 'string') return permissions.includes(target)
  if (Array.isArray(target)) return target.some(item => permissions.includes(item))
  return false
}
const thisPermissions: any = routerToBtnPermissions[router.currentRoute.value.path] || {}
const showBtnStatus: ShowBtnStatus = reactive<ShowBtnStatus>({
  add: (props.isEditMode || props.isInfoMode) && hasPermission(thisPermissions.add), // 新增
  cancel: props.isEditMode || props.isAddMode,
  save: (props.isEditMode || props.isAddMode) && hasPermission(thisPermissions.save), // 保存
  edit: ((props.formStatus !== null && props.formStatus !== 2) || props.isNoStatus) && hasPermission(thisPermissions.edit), // 编辑
  remove: (props.formStatus === 1 || props.formStatus === 3 || props.isNoStatus) && hasPermission(thisPermissions.remove), // 删除
  review: props.formStatus === 1 && hasPermission(thisPermissions.review), // 审核
  abandonment: !props.bClose && props.formStatus === 2 && hasPermission(thisPermissions.abandonment), // 弃审
  print: props.formStatus !== null && hasPermission(thisPermissions.print)
})
watch(
  () => props.formId,
  () => {
    getWorkFlowBtnStatus()
  }
)
watch(
  () => props.formStatus,
  () => {
    getWorkFlowBtnStatus()
  }
)
watch(
  () => props.bClose,
  () => {
    getWorkFlowBtnStatus()
  }
)
const getWorkFlowBtnStatus = async () => {
  showBtnStatus.add = (props.isEditMode || props.isInfoMode) && hasPermission(thisPermissions.add)
  showBtnStatus.cancel = props.isEditMode || props.isAddMode
  showBtnStatus.save = (props.isEditMode || props.isAddMode) && hasPermission(thisPermissions.save)
  showBtnStatus.edit = ((props.formStatus !== null && props.formStatus !== 2) || props.isNoStatus) && hasPermission(thisPermissions.edit)
  showBtnStatus.remove = (props.formStatus === 1 || props.formStatus === 3 || props.isNoStatus) && hasPermission(thisPermissions.remove)
  showBtnStatus.review = props.formStatus === 1 && hasPermission(thisPermissions.review)
  showBtnStatus.abandonment = !props.bClose && props.formStatus === 2 && hasPermission(thisPermissions.abandonment)
  showBtnStatus.print = props.formStatus !== null && hasPermission(thisPermissions.print)
}

/** 审批类型 */
const enum ApprovedTypeEnum {
  /** 审核 */
  REVIEW = 'review',
  /** 弃审 */
  ABANDONMENT = 'abandonment',
  /** 驳回 */
  REJECT = 'reject'
}

// 审批意见
const opinion = reactive({
  visible: false,
  tips: ''
})

// const router = useRouter()

const notFlowApprovedForm = async (type: ApprovedTypeEnum) => {
  if (type === ApprovedTypeEnum.REJECT && !opinion.tips) return ElMessage.warning('驳回时，审批意见不能为空')
  const api: Function | null = thisPermissions.reviewApi
  if (!api) return false
  let AuditState: number = 0
  if (type === ApprovedTypeEnum.REVIEW) AuditState = 2
  if (type === ApprovedTypeEnum.ABANDONMENT) AuditState = 1
  if (type === ApprovedTypeEnum.REJECT) AuditState = 3
  const { data } = await api({
    Id: props.formId, // 单据Id
    AuditState,
    AuditRmind: opinion.tips
  })

  opinion.visible = false
  ElMessage.success(data?.msg || '操作成功')
  emit('approvalFinish', data)
  getWorkFlowBtnStatus()
}

const openOpinion = () => {
  opinion.visible = true
  opinion.tips = ''
}

const review = () => notFlowApprovedForm(ApprovedTypeEnum.REVIEW)
const reject = () => notFlowApprovedForm(ApprovedTypeEnum.REJECT)
const abandonment = () => notFlowApprovedForm(ApprovedTypeEnum.ABANDONMENT)

/** 打印 */
const print = () => {
  const api: Function | null = thisPermissions.printApi
  if (!api) return false
  api({
    Id: props.formId
  }).then((res: any) => {
    window.open(config.serverApi + res.data.FileSrc, '_blank')
  })
}

defineExpose({
  getWorkFlowBtnStatus
})
</script>

<style scoped lang="scss">
.g-form-btn-group-box {
  display: flex;
  flex: 1;
}
</style>

<style lang="scss">
.g-form-btn-group-box {
  .el-button + .g-err-log-box {
    margin-left: 12px;
  }
}
</style>
