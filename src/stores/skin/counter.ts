import { defineStore } from 'pinia'
import type { SkinConfig } from '@/stores/skin/state'
import state, { Size } from '@/stores/skin/state'
import type { SyncSkinParameter } from '@/stores/skin/atom'
import atom from '@/stores/skin/atom'
import { SYNC_SKIN, SYNC_TABLECOLWidth } from '@/stores/atom-type'

export const useSkinStore = defineStore('skin', {
  state,
  actions: {
    syncSkin (syncSkinParameter: SyncSkinParameter) {
      atom[SYNC_SKIN](this, syncSkinParameter)
      atom[SYNC_TABLECOLWidth](this, syncSkinParameter.size)
    }
  },
  getters: {
    isSmall: (state: SkinConfig) => state.size === Size.SMALL,
    tableSelectionWidth: (state: SkinConfig): number => {
      if (state.size === Size.SMALL) return 30
      if (state.size === Size.DEFAULT) return 40
      if (state.size === Size.LARGE) return 50
      return 30
    }
  }
})
