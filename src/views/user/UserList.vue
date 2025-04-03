<template>
  <div
    class="g-box g-emp-skill-list-box j-emp-skill-list-box"
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
          v-hasBtnPermission="'empSkillAdd'"
        >
          新增
        </el-button>
        <el-button
          type="success"
          :size="skinStore.size"
          icon="Edit"
          :disabled="multipleSelection.length !== 1"
          @click="edit(multipleSelection[0])"
          v-hasBtnPermission="'empSkillEdit'"
        >
          编辑
        </el-button>
        <el-button
          type="warning"
          :size="skinStore.size"
          icon="Delete"
          :disabled="multipleSelection.length < 1"
          @click="remove(multipleSelection)"
          v-hasBtnPermission="'empSkillDel'"
        >
          删除
        </el-button>
        <el-button
          :size="skinStore.size"
          icon="Download"
          @click="exportExcel"
          v-hasBtnPermission="'empSkillExport'"
        >
          导出
        </el-button>
        <el-button
          type="info"
          :size="skinStore.size"
          icon="Goods"
          v-hasBtnPermission="'empSkillExport'"
          @click="templateDown"
        >
          模板下载
        </el-button>
        <el-upload
          class="m-load"
          :onChange="changeUpload"
          :action="`${config.serverApi}/empskill/import`"
          :headers="{ Access_token: Cookies.get('token') }"
        >
          <el-button
            type="primary"
            :size="skinStore.size"
            icon="Sell"
            v-hasBtnPermission="'empSkillExport'"
          >
            导入
          </el-button>
        </el-upload>
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
          <!--<el-form-item-->
          <!--  label="状态"-->
          <!--  data-item-->
          <!--  prop="DeviceState"-->
          <!--&gt;-->
          <!--  <el-select-->
          <!--    v-model="formInline.state"-->
          <!--    clearable-->
          <!--    filterable-->
          <!--  >-->
          <!--    <el-option-->
          <!--      v-for="item in filter.stateOptions.value"-->
          <!--      :key="item.value"-->
          <!--      :label="item.label"-->
          <!--      :value="item.value"-->
          <!--    />-->
          <!--  </el-select>-->
          <!--</el-form-item>-->
          <el-form-item
            label="工序"
            prop="OpId"
            data-item
          >
            <el-select
              v-model="formInline.OpId"
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
          <el-form-item
            label="班组"
            prop="TeamId"
            data-item
          >
            <el-select
              v-model="formInline.TeamId"
              clearable
              collapseTags
              placeholder="请选择班组"
            >
              <el-option
                v-for="item in filter.teamOptions.value"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
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
      ref="userAddRef"
      @submit="toPage()"
    ></UserAdd>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '@/api'
import { ElMessageBox, ElMessage } from 'element-plus'
import { useRemainingSpace, useTableConfig, useFormInline } from 'br-dionysus'
import type { Filter } from '@/typings/interface'
import downFile from '@/tool/downFile'
import { useSkinStore } from '@/stores/skin/counter'
import dayjs from 'dayjs'
import type { EmpSkillListItemType } from '@/views/console/empSkill/empSkillType'
import UserAdd from '@/views/user/UserAdd.vue'
import config from '@/config'
import { useOperationOptions, useTeamOptions } from '@/hook/useOptions'
import Cookies from 'js-cookie'
const skinStore = useSkinStore()

const filter: Filter = {
  operationOptions: useOperationOptions(),
  teamOptions: useTeamOptions().options,
  stateOptions: ref([{
    label: '全部',
    value: 0
  }, {
    label: '启用',
    value: 1
  }, {
    label: '禁用',
    value: 2
  }])
}
const loading = ref(false)

const remainingSpace = useRemainingSpace('j-emp-skill-list-box', 'j-table')

const tableData = ref<EmpSkillListItemType[]>([])

const tableConfigKey = 'DeviceListTable'
const { tableTitle, headerDragend, tableConfig, page } = useTableConfig(
  tableConfigKey,
  [{
    label: '序号',
    prop: 'sn',
    minWidth: '80px',
    fixed: 'left'
  }, {
    label: '工序名称',
    prop: 'OpName',
    minWidth: '134px'
  }, {
    label: '熟练程度',
    prop: 'ProficiencyStr',
    minWidth: '134px'
  }, {
    label: '创建时间',
    prop: 'CreatedTime',
    minWidth: '134px'
  }, {
    label: '创建者名称',
    prop: 'CreatedUserName',
    minWidth: '134px'
  }, {
  //   label: 'ID 编辑可传',
  //   prop: 'Id',
  //   minWidth: '134px'
  // }, {
  //   label: '工序ID',
  //   prop: 'OpId',
  //   minWidth: '134px'
  // }, {
  //   label: '班组ID',
  //   prop: 'TeamId',
  //   minWidth: '134px'
  // }, {
    label: '班组名称',
    prop: 'TeamName',
    minWidth: '134px'
  }, {
    label: '人员编码',
    prop: 'PersonCode',
    minWidth: '134px'
  }, {
    label: '人员名称',
    prop: 'PersonName',
    minWidth: '134px'
  }, {
    label: '培训日期',
    prop: 'TrainDate',
    minWidth: '134px'
  }, {
  //   label: '熟练程度(%)',
  //   prop: 'Proficiency',
  //   minWidth: '134px'
  // }, {
    label: '备注说明',
    prop: 'Remark',
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
    const res = await api.empskill.postEmpskillPage({
      /** @description 工序ID */
      OpId: formInline.OpId,
      /** @description 班组ID */
      TeamId: formInline.TeamId,
      /** @description 每页条数 */
      limit: page.value.pageSize,
      /** @description 页码 */
      page: page.value.currentPage,
      /** @description 查询关键字 */
      keyWord: formInline.keyWord,
      /**
       * @description 状态<br/>
       * 0 = ALL，全部<br/>
       * 1 = ENABLE，启用<br/>
       * 2 = DISANLE，禁用
       * @enum {number}
       */
      state: formInline.state
    })
    tableData.value = (res.data || []).map((item, index) => ({
      sn: index + 1,
      /** @description 工序名称 */
      OpName: item.OpName || '',
      /** @description 熟练程度 */
      ProficiencyStr: item.ProficiencyStr || '',
      /** @description 创建时间 */
      CreatedTime: item.CreatedTime ? dayjs(item.CreatedTime).format('YYYY-MM-DD HH:mm:ss') : '',
      /** @description 创建者名称 */
      CreatedUserName: item.CreatedUserName || '',
      /** @description ID 编辑可传 */
      Id: item.Id || '',
      /** @description 工序ID */
      OpId: item.OpId || '',
      /** @description 班组ID */
      TeamId: item.TeamId || '',
      /** @description 班组名称 */
      TeamName: item.TeamName || '',
      /** @description 人员编码 */
      PersonCode: item.PersonCode || '',
      /** @description 人员名称 */
      PersonName: item.PersonName || '',
      /** @description 培训日期 */
      TrainDate: item.TrainDate || '',
      /** @description 熟练程度 */
      Proficiency: (item.Proficiency || 0) * 100,
      /** @description 备注说明 */
      Remark: item.Remark || ''
    }))
    page.value.total = res.count || 0
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  toPage()
})

// 列表过滤条件表单
const formInlineKey = 'EmpSkillList'
const formInline = useFormInline(formInlineKey, {
  keyWord: '',
  OpId: '',
  TeamId: '',
  state: 0
})

const add = () => {
  if (!empSkillAddRef.value) return
  empSkillAddRef.value.open()
}

const edit = (id: string) => {
  if (!empSkillAddRef.value) return
  empSkillAddRef.value.open(tableData.value.find(item => item.Id === id))
}

const remove = (ids: string[]) => {
  ElMessageBox.confirm('是否确定删除数据', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    api.empskill.postEmpskillDelete({
      Ids: ids
    }).then(() => {
      ElMessage({
        message: '操作成功',
        type: 'success'
      })
      toPage()
    })
  })
}

const templateDown = async () => {
  const res = await api.empskill.getEmpskillExltmpl()
  downFile(res.data.FileSrc || '')
}
const changeUpload = (_: any, f: any[]) => {
  if (f[0].status === 'success') {
    const res = f[0].response
    if (!res?.code) {
      ElMessage({
        message: res.msg,
        type: 'success'
      })
      loading.value = false
      info()
    } else {
      ElMessage({
        message: res.msg,
        type: 'error'
      })
      loading.value = false
    }
  }
}

const exportExcel = async () => {
  loading.value = true

  const { data } = await api.empskill.postEmpskillExport({
    /** @description 工序ID */
    OpId: formInline.OpId,
    /** @description 班组ID */
    TeamId: formInline.TeamId,
    // /** @description 每页条数 */
    // limit: page.value.pageSize,
    // /** @description 页码 */
    // page: page.value.currentPage,
    /** @description 查询关键字 */
    keyWord: formInline.keyWord,
    /**
     * @description 状态<br/>
     * 0 = ALL，全部<br/>
     * 1 = ENABLE，启用<br/>
     * 2 = DISANLE，禁用
     * @enum {number}
     */
    state: formInline.state
  })
  loading.value = false
  downFile(data.FileSrc as string)
}

// 选中项
const multipleSelection = ref<string[]>([])
const handleSelectionChange = (val: EmpSkillListItemType[]) => {
  multipleSelection.value = val.map((item) => item.Id)
}

const userAddRef = ref<InstanceType<typeof UserAdd> | null>(null)
</script>

<style scoped lang="scss">
.g-emp-skill-list-box {
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
