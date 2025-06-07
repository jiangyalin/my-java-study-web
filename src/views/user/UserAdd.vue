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
                label="昵称"
                prop="nickName"
              >
                <el-input
                  v-model="ruleForm.nickName"
                  placeholder="请输入昵称"
                />
              </el-form-item>
            </div>
            <div class="u-col">
              <el-form-item
                label="邮箱"
                prop="email"
              >
                <el-input
                  v-model="ruleForm.email"
                  placeholder="请输入邮箱"
                />
              </el-form-item>
            </div>
            <div class="u-col">
              <el-form-item
                label="手机"
                prop="phone"
              >
                <el-input
                  v-model="ruleForm.phone"
                  placeholder="请输入手机"
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
import type { UserItemType } from '@/views/user/userType'

const skinStore = useSkinStore()

const props = withDefaults(
  defineProps<{
    disabled: boolean
  }>(),
  {
    disabled: false
  }
)
const emit = defineEmits(['submit'])
const isAddMode = computed(() => !ruleForm.id)
const loading = ref(false)
const visible = ref<boolean>(false)
const title = computed(() => {
  return isAddMode.value ? '新增用户' : props.disabled ? '查看用户' : '编辑用户'
})
const ruleForm: UserItemType = reactive<UserItemType>({
  /** @description 创建时间 */
  createdAt: '',
  /** @description 邮箱 */
  email: '',
  /** @description 用户id */
  id: '',
  /** @description 昵称 */
  nickName: '',
  /** @description 手机 */
  phone: '',
  /** @description 修改时间 */
  updatedAt: ''
})
const rules = reactive({
  email: [{ required: true, message: '请输入邮箱', trigger: 'change' }],
  nickName: [{ required: false, message: '请输入昵称', trigger: 'change' }],
  phone: [{ required: true, message: '请输入手机', trigger: 'change' }]
})
const open = async (id?: string) => {
  visible.value = true
  if (!id) return
  ruleForm.id = id || ''
  await getInfo()
}
const getInfo = async () => {
  const res = await api.user.getUserInfoById({
    id: ruleForm.id
  })
  ruleForm.createdAt = res.data.createdAt ?? ''
  ruleForm.email = res.data.email ?? ''
  ruleForm.nickName = res.data.nickName ?? ''
  ruleForm.phone = res.data.phone ?? ''
  ruleForm.updatedAt = res.data.updatedAt ?? ''
}
const ruleFormRef = ref<any | null>(null)
const empty = () => {
  visible.value = false
  const ruleFormValidate: any = ruleFormRef.value
  if (!ruleFormValidate) return false
  ruleFormValidate.resetFields()
  ruleForm.createdAt = ''
  ruleForm.email = ''
  ruleForm.id = ''
  ruleForm.nickName = ''
  ruleForm.phone = ''
  ruleForm.updatedAt = ''
}
const submit = async () => {
  const ruleFormValidate: any = ruleFormRef.value
  if (!ruleFormValidate) return
  const valid = await ruleFormValidate.validate()
  if (!valid) return false
  try {
    if (!ruleForm.id) {
      await api.user.postUserAdd({
        /** 邮箱 */
        email: ruleForm.email,
        /** 昵称 */
        nickName: ruleForm.nickName,
        /** 手机号 */
        phone: ruleForm.phone
      })
      ElMessage.success('新增成功')
    }
    if (ruleForm.id) {
      await api.user.postUserUpdate({
        id: ruleForm.id,
        /** 邮箱 */
        email: ruleForm.email,
        /** 昵称 */
        nickName: ruleForm.nickName,
        /** 手机号 */
        phone: ruleForm.phone
      })
      ElMessage.success('编辑成功')
    }
    emit('submit')
  } finally {
    visible.value = false
  }
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
}

.u-tt {
  margin-bottom: 12px;
  font-size: var(--m-fs-title);
  color: var(--m-fc-title);
  line-height: 24px;
}

.u-row {
  display: flex;
  flex-wrap: wrap;

  .u-col {
    width: 50%;
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
