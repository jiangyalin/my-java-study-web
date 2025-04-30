<template>
  <div
    class="g-box g-user-list-box j-user-list-box"
    v-loading="loading"
  >
    <!--筛选-->
    <MInline
      :size="skinStore.size"
      :configKey="formInlineKey"
      :model="formInline"
    >
      <template #inlineBtn>
        <el-button
          type="primary"
          :size="skinStore.size"
          icon="Plus"
          @click="add"
        >
          新增
        </el-button>
        <el-button
          type="success"
          :size="skinStore.size"
          icon="Edit"
          :disabled="multipleSelection.length !== 1"
          @click="edit(multipleSelection[0])"
        >
          编辑
        </el-button>
        <el-button
          type="warning"
          :size="skinStore.size"
          icon="Delete"
          :disabled="multipleSelection.length < 1"
          @click="remove(multipleSelection)"
        >
          删除
        </el-button>
      </template>
      <template #default>
        <el-form
          :model="formInline"
          labelWidth="80px"
          :showMessage="false"
          @submit.prevent
          :size="skinStore.size"
          data-box
        >
          <el-form-item
            label="关键字"
            prop="keyWord"
            data-item
          >
            <el-input
              v-model.trim="formInline.keyWord"
              clearable
              placeholder="请输入人员编码/名称"
              @keydown.enter="toPage()"
            >
            </el-input>
          </el-form-item>
        </el-form>
      </template>
      <template #submitBtn>
        <el-button
          type="primary"
          icon="Search"
          :size="skinStore.size"
          @click="toPage()"
        >
          搜索
        </el-button>
      </template>
    </MInline>

    <!--列表-->
    <div
      class="m-table s-table-config"
      dataCover
    >
      <MTable
        class="j-table"
        :data="tableData"
        border
        :size="skinStore.size"
        :height="remainingSpace.height.value"
        @selectionChange="handleSelectionChange"
        @headerDragend="headerDragend"
        scrollbarAlwaysOn
        v-model:tableConfig="tableConfig"
        :tableConfigKey="tableConfigKey"
      >
        <el-table-column
          fixed="left"
          type="selection"
          :width="skinStore.tableSelectionWidth"
        />
        <MTableColumn
          v-for="item in tableTitle"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :minWidth="item.minWidth"
          :filters="item.filters"
          :headerAlign="item.headerAlign"
          :fixed="item.fixed"
          :align="item.align"
          showOverflowTooltip
        ></MTableColumn>
      </MTable>
    </div>

    <!--分页-->
    <div
      class="m-page"
      dataCover
    >
      <el-pagination
        v-model:currentPage="page.currentPage"
        v-model:pageSize="page.pageSize"
        :small="skinStore.isSmall"
        :pageSizes="page.pageSizesOptions"
        layout="total, prev, pager, next, sizes"
        :total="page.total"
        @currentChange="toPage"
        @sizeChange="toPage(page.currentPage, $event)"
      />
    </div>

    <UserAdd
      v-if="0"
      ref="userAddRef"
      @submit="toPage()"
    ></UserAdd>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '@/api'
import { ElMessageBox } from 'element-plus'
import { useRemainingSpace, useTableConfig, useFormInline } from 'br-dionysus'
import { useSkinStore } from '@/stores/skin/counter'
import dayjs from 'dayjs'
import UserAdd from '@/views/user/UserAdd.vue'
import type { UserItemType } from '@/views/user/userType'
const skinStore = useSkinStore()

const loading = ref(false)

const remainingSpace = useRemainingSpace('j-user-list-box', 'j-table')

const tableData = ref<UserItemType[]>([])

const tableConfigKey = 'UserList'
const { tableTitle, headerDragend, tableConfig, page } = useTableConfig(
  tableConfigKey,
  [{
    label: '昵称',
    prop: 'nickName',
    minWidth: '134px'
  }, {
    label: '手机',
    prop: 'phone',
    minWidth: '134px'
  }, {
    label: '邮箱',
    prop: 'email',
    minWidth: '134px'
  }, {
    label: '创建时间',
    prop: 'createdAt',
    minWidth: '134px'
  }, {
    label: '修改时间',
    prop: 'updatedAt',
    minWidth: '134px'
  }],
  tableData
)

const toPage = (currentPage: number = 1, pageSize: number = page.value.pageSize) => {
  page.value.currentPage = currentPage
  page.value.pageSize = pageSize
  info()
}

const info = async () => {
  try {
    loading.value = true
    const res = await api.user.getUserList({
      /** 关键字 */
      keyWord: formInline.keyWord,
      /** 页码 */
      currentPage: page.currentPage,
      /** 分页大小 */
      pageSize: page.pageSize
    })
    tableData.value = (res.data.list || []).map(item => ({
      createdAt: item.createdAt ? dayjs(item.createdAt).format('YYYY-MM-DD HH:mm:ss') : '',
      email: item.email || '',
      id: item.id || '',
      nickName: item.nickName || '',
      phone: item.phone || '',
      updatedAt: item.updatedAt ? dayjs(item.updatedAt).format('YYYY-MM-DD HH:mm:ss') : ''
    }))
    page.value.total = res.data.total || 0
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  toPage()
})

// 列表过滤条件表单
const formInlineKey = 'UserList'
const formInline = useFormInline(formInlineKey, {
  keyWord: ''
})

const userAddRef = ref<InstanceType<typeof UserAdd> | null>(null)
const add = () => {
  if (!userAddRef.value) return
  userAddRef.value.open()
}

const edit = (id: string) => {
  if (!userAddRef.value) return
  userAddRef.value.open(tableData.value.find(item => item.id === id))
}

const remove = () => {
  ElMessageBox.confirm('是否确定删除数据', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    // api.empskill.postEmpskillDelete({
    //   Ids: ids
    // }).then(() => {
    //   ElMessage({
    //     message: '操作成功',
    //     type: 'success'
    //   })
    //   toPage()
    // })
  })
}

// 选中项
const multipleSelection = ref<string[]>([])
const handleSelectionChange = (val: UserItemType[]) => {
  multipleSelection.value = val.map(item => item.id)
}
</script>

<style scoped lang="scss">
.g-user-list-box {
  padding: var(--m-inside-spacing-size);
  box-sizing: border-box;
}

.m-inline {
  padding-bottom: 14px;
}

.m-load {
  display: inline-block;
  margin-left: 12px;

  .el-upload {
    display: block;
  }
}
</style>

<style lang="scss">
.m-load .el-upload {
  display: block;
}

.m-load .el-upload-list {
  display: none;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
