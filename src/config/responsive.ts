export const BREAKPOINTS = {
  sm: 1024,
  md: 1366,
  lg: 1920,
  xl: 2560
}

interface ChartConfig {
  fontSize: number
  symbolSize: number
  barWidth: string
}

export const CHART_CONFIGS: Record<string, ChartConfig> = {
  small: {
    fontSize: 12,
    symbolSize: 4,
    barWidth: '15%'
  },
  medium: {
    fontSize: 14,
    symbolSize: 6,
    barWidth: '20%'
  },
  large: {
    fontSize: 16,
    symbolSize: 8,
    barWidth: '25%'
  }
}

export const getChartConfig = (width: number): ChartConfig => {
  if (width < BREAKPOINTS.md) return CHART_CONFIGS.small
  if (width < BREAKPOINTS.lg) return CHART_CONFIGS.medium
  return CHART_CONFIGS.large
}
