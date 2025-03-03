/**
 * @description 颜色计算
 * @param {string} hex 颜色
 * @param {string} percent 明度-100到100
 * @return {string} 颜色
 */
const computeColor = (hex: string, percent: number = 100): string => {
  hex = hex.replace('#', '').toLowerCase()

  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('')
  }

  let r: any = parseInt(hex.substring(0, 2), 16)
  let g: any = parseInt(hex.substring(2, 4), 16)
  let b: any = parseInt(hex.substring(4, 6), 16)

  // 变亮
  if (percent > 0) {
    r += Math.round((255 - r) * (percent / 100))
    g += Math.round((255 - g) * (percent / 100))
    b += Math.round((255 - b) * (percent / 100))
  }
  // 变暗
  if (percent <= 0) {
    r += Math.round(r * (percent / 100))
    g += Math.round(g * (percent / 100))
    b += Math.round(b * (percent / 100))
  }

  r = r.toString(16).padStart(2, '0')
  g = g.toString(16).padStart(2, '0')
  b = b.toString(16).padStart(2, '0')

  // 返回十六进制颜色值
  return `#${r}${g}${b}`
}

export default computeColor
