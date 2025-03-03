import type { Ref } from 'vue'

/** 下拉选项及枚举映射集合 */
export interface Filter {
  [x: string]: any
  [propName: OptionsKeys]: Ref<Option[]>
}
