import { Size } from '@/stores/skin/state'
import { SYNC_SKIN, SYNC_TABLECOLWidth } from '@/stores/atom-type'
import type { SkinConfig } from '@/stores/skin/state'

export interface SyncSkinParameter {
  darkTheme?: boolean,
  followSystem?: boolean,
  size?: Size,
  primaryColor?: string,
}

export default {
  /** 同步皮肤数据 */
  [SYNC_SKIN] (state: SkinConfig, { darkTheme, followSystem, size, primaryColor }: SyncSkinParameter) {
    if (darkTheme !== undefined) state.darkTheme = darkTheme
    if (followSystem !== undefined) state.followSystem = followSystem
    if (size !== undefined) state.size = size
    if (primaryColor !== undefined) state.primaryColor = primaryColor
  },
  [SYNC_TABLECOLWidth]: (state: SkinConfig, size: SyncSkinParameter['size']) => {
    if (size === Size.SMALL) state.selectionWidth = 30
    if (size === Size.DEFAULT) state.selectionWidth = 40
    if (size === Size.LARGE) state.selectionWidth = 50
  }
}
