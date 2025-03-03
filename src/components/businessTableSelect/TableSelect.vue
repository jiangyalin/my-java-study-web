<!--存货弹窗选择-->
<template>
  <div class="g-table-select-box">
    <div
      class="u-search"
      @click="open"
    >
      <el-icon><Search /></el-icon>
    </div>
    <MDialog
      class="m-dialog g-business-table-select-box"
      dataCover
      title="选择存货"
      :width="1100"
      :minInsideHeight="403"
      :maxInsideHeight="600"
      v-model="thingVisible"
      destroyOnClose
      appendToBody
      resize
      draggable
    >
      <div
        class="u-bd"
        v-loading="loading"
      >
        <div class="m-type">
          <el-tree
            :data="_this.filter.typeOptions"
            nodeKey="value"
            :props="defaultProps"
            highlightCurrent
            :defaultExpandedKeys="_this.formInline.expandedKeys"
            @currentChange="select"
          ></el-tree>
        </div>
        <div class="m-master-piece j-table-select-box">
          <!--过滤-->
          <div class="m-inline">
            <div class="u-it-gp">
              <el-input
                class="u-it input"
                :size="props.size"
                v-model="_this.formInline.search"
                placeholder="请输入存货名称"
                @change="toPage()"
              />
            </div>
            <div class="u-btn-gp">
              <el-button
                type="primary"
                icon="Search"
                :size="props.size"
                @click="toPage()"
              >
                搜索
              </el-button>
            </div>
          </div>

          <!--表格-->
          <div
            class="m-table j-business-table"
            dataCover
            current
          >
            <MTable
              class="s-table"
              :data="_this.tableData"
              :size="props.size"
              ref="table"
              :height="remainingSpace.height.value"
              :rowClassName="tableRowClassName"
              highlightCurrentRow
              stripe
              border
              scrollbarAlwaysOn
              @currentChange="handleCurrentChange"
              @rowDblclick="doubleClick"
              @selectionChange="selectionChange"
            >
              <el-table-column
                type="selection"
                :width="tableSelectionWidth"
                v-if="multiple"
              />
              <el-table-column
                showOverflowTooltip
                v-for="item in _this.tableTitle"
                :key="item.prop"
                :prop="item.prop"
                :label="item.label"
                :minWidth="item.minWidth"
              />
            </MTable>
          </div>

          <!--分页-->
          <div
            class="m-page"
            dataCover
          >
            <el-pagination
              v-model:currentPage="_this.formInline.page.currentPage"
              v-model:pageSize="_this.formInline.page.pageSize"
              :small="props.size === 'small'"
              :pageSizes="_this.formInline.page.pageSizesOptions"
              layout="total, prev, pager, next, sizes"
              :total="_this.formInline.page.total"
              @currentChange="toPage"
              @sizeChange="toPage(_this.formInline.page.currentPage)"
            />
          </div>
        </div>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button
            :size="props.size"
            @click="thingCancel"
          >
            取消
          </el-button>
          <el-button
            type="primary"
            :size="props.size"
            @click="thingSubmit"
          >
            确定
          </el-button>
        </div>
      </template>
    </MDialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, nextTick, computed, ref, watch } from 'vue'
import api from '@/api'
import type { InvItem } from '@/components/businessTableSelect/type'
import type { InvClassTreeDto } from '@/api/interface/system'
import { ElMessage } from 'element-plus'
import { useRemainingSpace } from 'br-dionysus'
// import useRemainingSpace from './../../../../dionysus/packages/Hook/useRemainingSpace/useRemainingSpace'
// import MDialog from './../../../../dionysus/packages/MDialog/src/MDialog.vue'

const defaultProps = {
  children: 'children',
  label: 'label'
}
const props = withDefaults(defineProps<{
  /** 是否多选 */
  multiple?: boolean,
  bBomQuery?: boolean, // 是否是bom查询
  pRouting?: boolean, // 是否校验工艺路线存在 计划下达使用了
  /** 禁用无工艺路线id的数据 */
  disabledNoPRId?: boolean,
  size?: string // 组件大小
}>(), {
  multiple: false,
  bBomQuery: false,
  PRouting: false,
  disabledNoPRId: false,
  size: 'default'
})

const tableSelectionWidth = computed(() => {
  if (props.size === 'small') return 30
  if (props.size === 'default') return 40
  if (props.size === 'large') return 50
  return 30
})

const remainingSpace = useRemainingSpace('j-table-select-box', 'j-business-table')
watch(
  () => remainingSpace.height.value,
  () => {
    document.documentElement.style.setProperty(
      '--remaining-space-height',
      `${remainingSpace.height.value + 80}px`
    )
  }
)

const emit = defineEmits(['select'])

interface Form {
  formInline: {
    type: string,
    search: string,
    cInvCode: string[],
    expandedKeys: string[],
    page: {
      total: number,
      pageSize: number,
      currentPage: number,
      pageSizesOptions: number[]
    }
  },
  id: string,
  selectRow: string[],
  tableData: InvItem[],
  tableTitle: TableTitle[],
  filter: {
    typeOptions: any[]
  }
}

const loading = ref<boolean>(false)
const thingVisible = ref<boolean>(false)

const _this: Form = reactive({
  formInline: {
    type: '',
    search: '',
    cInvCode: [],
    expandedKeys: [],
    page: {
      total: 0,
      pageSize: 50,
      currentPage: 1,
      pageSizesOptions: [50, 100, 300, 500, 800]
    }
  },
  id: '',
  selectRow: [],
  tableData: [],
  tableTitle: [{
    prop: 'cInvCode',
    label: '存货编码',
    minWidth: '120px'
  }, {
    prop: 'cInvAddCode',
    label: '存货代码',
    minWidth: '120px'
  }, {
    prop: 'cInvName',
    label: '存货名称',
    minWidth: '200px'
  }, {
    prop: 'cInvStd',
    label: '规格型号',
    minWidth: '80px'
  }, {
    prop: 'cComUnitName',
    label: '计量单位',
    minWidth: '80px'
  }, {
    prop: 'cInvCCode',
    label: '分类编码',
    minWidth: '100px'
  }, {
    prop: 'cInvCName',
    label: '分类名称',
    minWidth: '120px'
  }],
  filter: {
    typeOptions: []
  }
})

const init = async () => {
  try {
    loading.value = true
    const res = await api.ufmanage.getUfmanageInvclstree({})
    loading.value = false
    _this.filter.typeOptions = treeMap(res.data)

    nextTick(() => {
      _this.formInline.expandedKeys = (res.data || []).map((k: any) => k.cInvCCode)
    })
  } finally {
    loading.value = false
  }
}
const treeMap: any = (data: InvClassTreeDto[] = []) => {
  return data.map((item) => ({
    value: item.cInvCCode,
    label: item.cInvCName,
    children: item.children ? treeMap(item.children) : null
  }))
}
const thingSubmit = () => {
  if (!_this.selectRow.length) return false
  // 是否校验存货工艺路线 pRouting
  const tableSelectItems = _this.tableData.filter((item: InvItem) => _this.selectRow.includes(item.cInvCode))
  const idxPR = tableSelectItems.findIndex((e) => !e.PRoutingId)

  if (props.pRouting && idxPR > -1) {
    ElMessage({
      message: '您选择的数据中，没有维护工艺路线，请先维护工艺路线',
      type: 'warning'
    })
    return false
  }

  if (props.multiple) {
    emit(
      'select',
      _this.selectRow,
      tableSelectItems
    )
  } else {
    emit('select', _this.selectRow[0], tableSelectItems)
  }

  thingVisible.value = false
}
const thingCancel = () => {
  thingVisible.value = false
}
const handleCurrentChange = (currentRow: InvItem | null) => {
  if (!currentRow?.cInvCode) _this.selectRow = []
  if (!props.multiple && currentRow?.cInvCode) _this.selectRow = [currentRow.cInvCode]
}
// 双击
const doubleClick = (row: InvItem | null) => {
  if (!row?.cInvCode) _this.selectRow = []
  if (row?.cInvCode) _this.selectRow = [row.cInvCode]
  thingSubmit()
}
const select = (selectedKeys: any) => {
  _this.formInline.type = selectedKeys.value
  toPage()
}
const getList = async () => {
  loading.value = true
  const res = await api.ufmanage.postUfmanageInvlist({
    keyWord: _this.formInline.search,
    cInvCCode: _this.formInline.type,
    bBomQuery: props.bBomQuery,
    bSelf: true, // _this.formInline.bSelf
    bProductBill: true, // _this.formInline.bProductBill
    page: _this.formInline.page.currentPage,
    limit: _this.formInline.page.pageSize
  })
  loading.value = false

  _this.tableData = (res.data || []).map(item => ({
    // ...item,
    cInvCode: item.cInvCode || '',
    cInvName: item.cInvName || '',
    cInvStd: item.cInvStd || '',
    cInvCCode: item.cInvCCode || '',
    cInvCName: item.cInvCName || '',
    cComUnitName: item.cComUnitName || '',
    PRoutingId: item.PRoutingId || '',
    cInvAddCode: item.cInvAddCode || '',
    disabled: props.disabledNoPRId ? !item.PRoutingId : false,
    bInvBatch: item.bInvBatch || false,
    className: props.disabledNoPRId && !item.PRoutingId ? 's-disabled' : ''
  }))
  _this.formInline.page.total = res.count as number
}
const toPage = (page = 1) => {
  _this.formInline.page.currentPage = page
  getList()
}
const open = (cInvCode: any = []) => {
  _this.formInline.cInvCode = cInvCode
  _this.filter.typeOptions = []
  _this.tableData = []
  _this.formInline.type = ''
  _this.formInline.page.currentPage = 1
  _this.formInline.page.pageSize = 50
  _this.formInline.page.total = 0
  thingVisible.value = true
  setTimeout(() => {
    remainingSpace.init()
  })
  init()
  toPage()
}
const selectionChange = (val: InvItem[]) => {
  _this.selectRow = val.map((item) => item.cInvCode)
}

const tableRowClassName = ({ row }: { row: any, rowIndex: number }): string => {
  return row.className
}
</script>

<style lang="scss" scoped>
.g-table-select-box {
  position: relative;
}

.u-gp {
  display: flex;
  margin-bottom: 16px;
  // width: 300px;
  align-items: center;

  .input {
    width: 45%;
    border: 1px solid red;
    // margin-right: 50%;
  }
  .u-lbl {
    width: 110px;
  }
}
.u-input {
  width: 100%;
}

.u-bd {
  display: flex;
  height: 100%;

  .m-type {
    width: 250px;
    height: var(--remaining-space-height);
    text-align: left;
    overflow: auto;
    border-right: 1px solid #f0f0f0;
  }

  .m-master-piece {
    padding-left: 10px;
    width: calc(100% - 250px);
  }
}

.m-inline {
  display: flex;
  padding-bottom: 12px;
  justify-content: space-between;
}

.m-page {
  display: flex;
  justify-content: flex-start;
}

.u-search {
  //position: absolute;
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%, -50%);
  //display: block;
  //width: 14px;
  //height: 14px;
  //align-items: center;
  //justify-content: center;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.m-dialog {
  display: flex;
}
</style>

<style lang="scss">
.g-table-select-box {
  .u-search {
    .el-icon {
      display: block;
      line-height: 14px;
    }
    //display: block;
    //width: 14px;
    //height: 14px;
    //align-items: center;
    //justify-content: center;
  }

  .s-disabled {
    color: var(--el-disabled-text-color);
    cursor: not-allowed;

    .el-table__cell {
      pointer-events: none;
    }
  }

  .m-page[dataCover] .el-pagination {
    padding: 24px 0 0 0;
  }

  .br-u-bdoy {
    min-height: 395px;
  }
}
</style>
