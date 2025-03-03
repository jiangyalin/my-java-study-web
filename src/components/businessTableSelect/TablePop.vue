<!--设备弹窗选择-->
<template>
  <div class="g-table-select-box">
    <div
      class="u-search"
      @click="open"
    >
      <el-icon><Search /></el-icon>
    </div>
    <m-dialog
      class="m-dialog"
      dataCover
      title="选择设备"
      :width="1000"
      v-model="_this.thingVisible"
      destroyOnClose
      appendToBody
      resize
      draggable
    >
      <div
        class="u-bd"
        v-loading="_this.loading"
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
        <div class="m-master-piece">
          <!--过滤-->
          <div class="m-inline">
            <div class="u-it-gp">
              <el-input
                class="u-it input"
                :size="props.size"
                v-model="_this.formInline.search"
                placeholder="请输入设备编码、名称、类型编码、名称"
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
            class="m-table"
            dataCover
          >
            <el-table
              class="s-table"
              :data="_this.tableData"
              :size="props.size"
              ref="table"
              highlightCurrentRow
              :maxHeight="420"
              @currentChange="handleCurrentChange"
              @rowDblclick="doubleClick"
              @selectionChange="selectionChange"
              scrollbarAlwaysOn
            >
              <el-table-column
                showOverflowTooltip
                v-for="item in _this.tableTitle"
                :key="item.prop"
                :prop="item.prop"
                :label="item.label"
              >
                <template
                  #default="scope"
                  v-if="['DeviceStateDesc',].includes(item.prop)"
                >
                  <el-tag
                    v-if="item.prop === 'DeviceStateDesc'"
                    class="u-tag"
                    :type="tagItem(scope.row.DeviceState)?.className"
                    :size="props.size"
                  >
                    {{ scope.row.DeviceStateDesc }}
                  </el-tag>
                </template>
              </el-table-column>
              <template #empty>
                <img src="@/assets/empty.png" />
              </template>
            </el-table>
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
    </m-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, nextTick } from 'vue'
import api from '@/api'
import type { DevItem } from '@/components/businessTableSelect/type'
import type { TreeSelectDto } from '@/api/interface/system'
import { DevceStatus } from '@/typings/enum'
import dayjs from 'dayjs'
const defaultProps = {
  children: 'children',
  label: 'label'
}

const props = withDefaults(defineProps<{
  /** 是否多选 */
  multiple?: boolean,
  bBomQuery?: boolean, // 是否是bom查询
  pRouting?: boolean, // 是否校验工艺路线存在 计划下达使用了
  size?: string // 组件大小
}>(), {
  multiple: false,
  bBomQuery: false,
  PRouting: false,
  size: 'default'
})

const emit = defineEmits(['select'])

interface Code {
  thingVisible: boolean,
  loading: boolean,
  formInline: {
    type: string,
    search: string,
    code: string[],
    expandedKeys: string[],
    TypeCodes:string[],
    WorkShopId:string,
    page: {
      total: number,
      pageSize: number,
      currentPage: number,
      pageSizesOptions: number[]
    }
  },
  id: string,
  selectRow: string[],
  tableData: DevItem[],
  tableTitle: {
    prop: string,
    label: string
  }[],
  filter: {
    typeOptions: any[]
  }
}

const _this: Code = reactive({
  thingVisible: false,
  loading: false,
  formInline: {
    type: '',
    search: '',
    code: [],
    expandedKeys: [],
    TypeCodes: [],
    WorkShopId: '',
    page: {
      total: 0,
      pageSize: 10,
      currentPage: 1,
      pageSizesOptions: [10, 20, 50, 100]
    }
  },
  id: '',
  selectRow: [],
  tableData: [],
  tableTitle: [{
    prop: 'Code',
    label: '设备编码'
  }, {
    prop: 'Name',
    label: '设备名称'
  }, {
    prop: 'Model',
    label: '设备型号'
  }, {
    prop: 'SN',
    label: '设备序列号'
  }, {
    prop: 'PurDate',
    label: '采购日期'
  }, {
    prop: 'DeviceStateDesc',
    label: '设备状态'
  }, {
    prop: 'TypeName',
    label: '分类名称'
  }, {
    prop: 'WorkShop',
    label: '车间'
  }],
  filter: {
    typeOptions: []
  }
})
// 设备状态映射
const tagItem = (state: DevceStatus) => {
  const map = {
    [DevceStatus.NORMAL]: {
      className: ''
    },
    [DevceStatus.REPAIR]: {
      className: 'warning'
    },
    [DevceStatus.MAINTENANCE]: {
      className: 'success'
    },
    [DevceStatus.SCRAP]: {
      className: 'danger'
    },
    [DevceStatus.ALL]: {
      className: ''
    }
  }
  return map[state] || {}
}
const init = async () => {
  _this.loading = true
  const res = await api.device.getDeviceTypetree({})
  _this.loading = false
  _this.filter.typeOptions = treeMap(res.data)
  nextTick(() => {
    _this.formInline.expandedKeys = (res.data || []).map((k: any) => k.id)
    const typecode = _this.filter.typeOptions[0].children[0]?.value || ''
    _this.formInline.TypeCodes = [typecode]
    _this.formInline.WorkShopId = _this.formInline.expandedKeys[0]
  })
}
const treeMap: any = (data: TreeSelectDto[] = []) => {
  return data.map((item) => ({
    value: item.id,
    label: item.title,
    children: item.children ? treeMap(item.children) : null
  }))
}
const thingSubmit = () => {
  if (!_this.selectRow.length) return false
  const tableSelectItems = _this.tableData.filter((item: DevItem) => _this.selectRow.includes(item.Code))

  if (props.multiple) {
    emit(
      'select',
      _this.selectRow,
      tableSelectItems
    )
  } else {
    emit('select', _this.selectRow[0], tableSelectItems)
  }

  _this.thingVisible = false
}
const thingCancel = () => {
  _this.thingVisible = false
}
const handleCurrentChange = (currentRow: DevItem) => {
  if (!props.multiple) _this.selectRow = [currentRow.Code]
}
// 双击
const doubleClick = (row: DevItem) => {
  _this.selectRow = [row.Code]
  thingSubmit()
}
const select = (selectedKeys: any) => {
  _this.formInline.type = selectedKeys.value
  toPage()
}
const getList = async () => {
  try {
    _this.loading = true
    const res = await api.device.postDevicePage({
      keyWord: _this.formInline.search,
      TypeCodes: _this.formInline.TypeCodes,
      WorkShopId: _this.formInline.WorkShopId,
      page: _this.formInline.page.currentPage,
      limit: _this.formInline.page.pageSize
    })
    _this.loading = false

    _this.tableData = (res.data || []).map(item => ({
      Code: item.Code || '',
      Name: item.Name || '',
      Model: item.Model || '',
      SN: item.SN || '',
      PurDate: item.PurDate ? dayjs(item.PurDate).format('YYYY-MM-DD') : '',
      DeviceStateDesc: item.DeviceStateDesc || '',
      WorkShop: item.WorkShop || '',
      TypeName: item.TypeName || '',
      Id: item.Id || ''
    }))
    _this.formInline.page.total = res.count as number
  } finally {
    _this.loading = false
  }
}
const toPage = (page = 1) => {
  _this.formInline.page.currentPage = page
  getList()
}
const open = (Code: any = []) => {
  _this.formInline.code = Code
  _this.filter.typeOptions = []
  _this.tableData = []
  _this.formInline.type = ''
  _this.formInline.page.currentPage = 1
  _this.formInline.page.pageSize = 10
  _this.formInline.page.total = 0
  _this.thingVisible = true
  init()
  toPage()
}
const selectionChange = (val: DevItem[]) => {
  _this.selectRow = val.map((item) => item.Code)
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
    width: 35%;
    margin-right: 50%;
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

  .m-type {
    width: 28%;
    text-align: left;
    border-right: 1px solid #f0f0f0;
  }

  .m-master-piece {
    padding-left: 10px;
    width: 70%;
  }
}

.m-inline {
  display: flex;
  padding-bottom: 12px;
  justify-content: space-between;
  .u-it-gp {
    width: 260px;
  }
}

.m-page {
  display: flex;
  margin-top: 16px;
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

}
.el-table__empty-text img{
  width: 100px;
}
</style>
