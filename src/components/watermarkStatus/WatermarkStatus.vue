<!--状态水印-->
<template>
  <div class="g-watermark-box">
    <div
      class="u-box"
      :data-status="item.className"
    >
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { BillStatus } from '@/typings/enum'

const props = withDefaults(defineProps<{
  billStatus: BillStatus | null // 单据状态
}>(), {
  billStatus: null
})

const item = computed(() => {
  const map = {
    [BillStatus.ALL]: {
      text: '',
      className: 'default'
    },
    [BillStatus.PENDING]: {
      text: '待审核',
      className: 'default'
    },
    [BillStatus.AUDITED]: {
      text: '已审核',
      className: 'success'
    },
    [BillStatus.REJECT]: {
      text: '驳回',
      className: 'warn'
    }
  }

  if (props.billStatus === null) {
    return {
      text: '',
      className: ''
    }
  }
  return map[props.billStatus] || {}
})
</script>

<style scoped lang="scss">
.g-watermark-box {
  position: absolute;
  top: 5px;
  right: 24px;
  z-index: 99;
  pointer-events: none;

  .u-box {
    display: none;
    position: relative;
    width: 64px;
    height: 64px;
    font-size: 16px;
    color: var(--status-color);
    align-items: center;
    justify-content: center;
    border: 2px solid var(--status-color);
    border-radius: 50%;
    transform: rotate(18deg);
    box-sizing: border-box;
    opacity: 0.6;

    &[data-status='default'] {
      display: flex;
      --status-color: var(--el-color-primary)
    }

    &[data-status='success'] {
      display: flex;
      --status-color: var(--el-color-success)
    }

    &[data-status='warn'] {
      display: flex;
      --status-color: var(--el-color-warning)
    }

    &[data-status='err'] {
      display: flex;
      --status-color: var(--el-color-danger)
    }

    &:after {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      content: '';
      width: 54px;
      height: 54px;
      border: 1px solid var(--status-color);
      //border-right: 1px solid #2b2728;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      box-sizing: border-box;
    }

    //&:before {
    //  position: absolute;
    //  top: 50%;
    //  left: 50%;
    //  z-index: 2;
    //  content: '';
    //  width: 58px;
    //  height: 30px;
    //  background-color: #a84242;
    //  border-radius: 9px;
    //  transform: translate(-50%, -50%);
    //  box-sizing: border-box;
    //}
  }
}
</style>
