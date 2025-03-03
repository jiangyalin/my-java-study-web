<template>
  <MSelectTable
    :class="props.isSearchShow?'selectTable-ms':'selectTable-m'"
    v-model="modelValue"
    ref="mSelectTableRef"
    filterable
    remote
    :placeholder="props.placeholder"
    :remoteMethod="remoteMethod"
    :options="commodityOptions"
    :tableTitle="commodityOptionsTitle"
    :size="props.size"
    :disabled="props.disabled"
    :total="props.paging ? page.total : null"
    focusShow
    :popupWidth="800"
    border
    @paste="paste"
    @selected="(_: any, data: InvItem) => emit('selected', data)"
  ></MSelectTable>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import api from '@/api'
import type { InvItem } from '@/components/businessTableSelect/type'
import { Page } from '@/typings/class'
const props = withDefaults(defineProps<{
  modelValue?: string,
  placeholder?: string,
  /** 聚焦显示(没有搜索值时是否显示) */
  focusShow?: boolean,
  /** 禁用 */
  disabled?: boolean,
  /** 是否是bom查询 */
  bBomQuery?: boolean,
  /** 是否是允许生产订单 */
  bProductBill?: boolean,
  /** 是否分页 */
  paging?: boolean,
  /** 是否显示清除按钮 */
  clearable?: boolean,
  /** 禁用无工艺路线id的数据 */
  disabledNoPRId?: boolean,
  /** 组件大小 */
  size?: string,
  /** 显示编码 */
  isShowCode?: boolean
  /** 是否BOM子件 */
  bBomSubQuery?: boolean
  /** 母件编码 bBomSubQuery为true时 必须传 */
  parentCode?: string,
  /** 供应商编码 */
  cVenCode?: string
  /** 是否采购属性查询条件 */
  bPurQuery?: boolean | null
  /** 是否与弹出框一起使用 */
  isSearchShow?: boolean
  /** 是否允许bom子件 */
  bBomSub?: any
  /** 是否允许bom母件 */
  bBomMain?: any
}>(), {
  modelValue: '',
  placeholder: '请输入存货编码',
  focusShow: false,
  disabled: false,
  bBomQuery: false,
  paging: false,
  clearable: false,
  bProductBill: false,
  disabledNoPRId: false,
  bBomSubQuery: false,
  size: 'default',
  isShowCode: false,
  parentCode: '',
  cVenCode: '',
  bPurQuery: null,
  isSearchShow: false,
  bBomSub: null,
  bBomMain: null
})

const modelValue = ref<string>(props.modelValue)
watch(
  () => props.modelValue,
  () => {
    modelValue.value = props.modelValue
  }
)
watch(
  () => modelValue.value,
  () => {
    emit('update:modelValue', modelValue.value)
  }
)

const commodityOptions = ref<InvItem[]>([])
const commodityOptionsTitle: TableTitle[] = [{
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
  minWidth: '90px'
}, {
  prop: 'cComUnitName',
  label: '计量单位',
  minWidth: '90px'
}, {
  prop: 'cInvCCode',
  label: '分类编码',
  minWidth: '90px'
}, {
  prop: 'cInvCName',
  label: '分类名称',
  minWidth: '90px'
}]

const emit = defineEmits(['update:modelValue', 'selected', 'paste'])

const keyword = ref<string>('')

const page = new Page({ pageSize: 5 })
const cInvCodes = ref<string[]>([])
const remoteMethod = (query: string, val:Page) => {
  // if (clearLoad) return false
  cInvCodes.value = []
  if (query) {
    cInvCodes.value = query.trim().split(' ')
  }
  keyword.value = query.trim() || props.modelValue.trim()
  // _this.showPanel = true
  if (!query && !props.focusShow) {
    commodityOptions.value = []
    return false
  }
  page.currentPage = val.currentPage
  page.pageSize = val.pageSize
  getInfo()
}

const masterPieceLoading = ref<boolean>(false)
const getInfo = async () => {
  masterPieceLoading.value = true
  const bBomSubMY = (props.bBomMain || props.bBomQuery) ? undefined : props.bBomSub
  const bBomMainMY = (props.bBomSub || props.bBomQuery) ? undefined : props.bBomMain
  const bPurQueryMY = (props.bBomSub || props.bBomQuery) ? undefined : props.bPurQuery
  const bProductBillMY = (props.bBomSub || props.bBomQuery) ? undefined : props.bProductBill
  commodityOptions.value = []
  page.total = 0
  const res = await api.ufmanage.postUfmanageInvlist({
    keyWord: cInvCodes.value.length > 1 ? '' : keyword.value,
    bBomQuery: props.bBomQuery,
    bProductBill: bProductBillMY,
    bBomSubQuery: props.bBomSubQuery,
    invParCode: props.bBomSubQuery ? props.parentCode : '',
    cVenCode: props.cVenCode,
    bPurQuery: bPurQueryMY,
    bBomSub: bBomSubMY,
    bBomMain: bBomMainMY,
    page: page.currentPage,
    limit: cInvCodes.value.length > 1 ? cInvCodes.value.length : page.pageSize,
    bComsume: props.bBomSub ? true : undefined,
    cInvCodes: cInvCodes.value.length > 1 ? cInvCodes.value : null
  // bComsume
  })
  masterPieceLoading.value = false
  commodityOptions.value = (res.data || []).map(item => ({
    value: item.cInvCode || '',
    label: props.isShowCode ? item.cInvCode : item.cInvName,
    cInvCode: item.cInvCode || '',
    cInvAddCode: item.cInvAddCode || '',
    cInvName: item.cInvName || '',
    cInvStd: item.cInvStd || '',
    cInvCCode: item.cInvCCode || '',
    cInvCName: item.cInvCName || '',
    cComUnitName: item.cComUnitName || '',
    PRoutingId: item.PRoutingId || '',
    iSupplyType: item.iSupplyType || 0,
    cInvAtrr: item.cInvAtrr || 0,
    BomId: item.BomId || 0,
    PartId: item.PartId || 0,
    BomVer: item.BomVer || '',
    bInvBatch: item.bInvBatch || false,
    disabled: props.disabledNoPRId ? !item.PRoutingId : false
  }))
  page.total = res.count || 0
  if (cInvCodes.value.length > 1) {
    emit('paste', commodityOptions.value, changeIndex)
  }
}
let changeIndex = 0
const paste = (e:any) => {
  const changeRowKey = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.__vnode.key
  const nodeS = Array.from(e.target.offsetParent.offsetParent.offsetParent.offsetParent.parentNode.parentNode.parentNode.parentNode.children)
  changeIndex = nodeS.findIndex((item:any) => item.__vnode.key === changeRowKey)
}
const mSelectTableRef = ref<any>(null)
const close = () => {
  if (!mSelectTableRef.value) return false
  mSelectTableRef.value.close()
}

defineExpose({
  close
})
</script>

<style lang="scss" scoped>
.g-search-table-select-box {
  width: 100%;
  position: relative;
  line-height: normal;

  .m-table-box {
    position: fixed;
    //top: 100%;
    //left: 0;
    z-index: 9;
    padding: 8px;
    width: 500px;
    border: 1px solid #E4E7ED;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    background: #FFF;
    border-radius: 4px;
    //transform: translateY(10px);
  }

  .m-mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 8;
    width: 100%;
    height: 100%;
  }
}
</style>

<style lang="scss">
.selectTable-m {
  width: 100%;
}
.el-table__empty-text img{
  width: 100px;
}
.selectTable-ms .el-select__wrapper {
  padding-right: 30px;
}
.selectTable-ms .el-select__suffix {
  display: none;
}
.selectTable-ms .is-hovering .el-select__suffix{
  height: 100%;
  line-height: 50%;
  display: block;
}
</style>
