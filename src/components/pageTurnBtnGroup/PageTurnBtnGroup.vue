<!--翻页按钮组-->
<template>
  <div class="g-page-turn-btn-group">
    <el-button
      type="info"
      :size="props.size"
      :disabled="!pageTurnBtnStatus.first"
      @click="toPage(1)"
    >
      首页
    </el-button>
    <el-button
      type="info"
      :size="props.size"
      :disabled="!pageTurnBtnStatus.upper"
      @click="toPage(2)"
    >
      上页
    </el-button>
    <el-button
      type="info"
      :size="props.size"
      :disabled="!pageTurnBtnStatus.next"
      @click="toPage(3)"
    >
      下页
    </el-button>
    <el-button
      type="info"
      :size="props.size"
      :disabled="!pageTurnBtnStatus.last"
      @click="toPage(4)"
    >
      末页
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { FirstOrLast } from '@/typings/enum'
import bus from '@/tool/bus'

const router = useRouter()

const props = withDefaults(defineProps<{
  formId?: string, // 表单id
  formSn?:string, // 表单单号
  firstOrLast?: FirstOrLast | '', // 首页还是尾页
  size?: string // 组件大小
}>(), {
  formId: '',
  formSn: '',
  firstOrLast: '',
  size: 'default'
})

// 翻页类型
const pageTurnType = ref<string>('')
onMounted(() => {
  pageTurnType.value = props.formId ? router.currentRoute.value?.query?.pageTurnType : 'last'
})
// 翻页按钮状态
const pageTurnBtnStatus = reactive({
  first: true, // 第一页
  upper: true, // 上一页
  next: true, // 下一页
  last: true // 最后一页
})
watch(
  () => props.formId,
  () => {
    pageTurnBtnStatus.last = Boolean(props.formId)
  }
)
watch(
  () => props.firstOrLast,
  () => {
    init()
  }
)
onMounted(() => {
  init()
})
const init = () => {
  pageTurnBtnStatus.first = props.firstOrLast !== 'one' && props.firstOrLast !== 'First'
  pageTurnBtnStatus.upper = props.firstOrLast !== 'one' && props.firstOrLast !== 'First'
  pageTurnBtnStatus.next = props.firstOrLast !== 'one' && props.firstOrLast !== 'Last'
  pageTurnBtnStatus.last = props.firstOrLast !== 'one' && props.firstOrLast !== 'Last'
}

const toPage = (type: number) => {
  const idUrl = props.formId || null
  const infoPath = router.currentRoute.value.path
  const formSn = props.formSn || null
  bus.emit('jumpAndClose', infoPath + '?formId=' + idUrl + '&formSn=' + formSn + '&pageTurnType=' + type + '&mark=' + Date.now())
  // router.push({
  //   path: router.currentRoute.value.path,
  //   query: {
  //     formId: props.formId,
  //     formSn: props.formSn,
  //     pageTurnType: type,
  //     mark: router.currentRoute.value.query.mark || Date.now()
  //   }
  // })
}
</script>

<style scoped lang="scss">
</style>
