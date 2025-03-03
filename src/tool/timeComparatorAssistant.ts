import dayjs from 'dayjs'
// timeA 组件返回时间
// timeB 要对比的时间
// sameDayOnly 是否开启当天 一般开始的时候开启 结束不开启 就能实现两个组件选择同一天
const timeComparatorAssistant = (timeA: Date | string, timeB: string | Date, sameDayOnly: boolean = false) => {
  if (!timeB) return false
  const formattedTime = dayjs(timeA)
  const formattedEndTime = dayjs(timeB)
  return sameDayOnly ? formattedTime.isAfter(formattedEndTime) : formattedTime.isSameOrAfter(formattedEndTime, 'day')
}

const disabledHours = (startTime: Date| string, endTime: Date| string, isSelectStart: boolean = false) => {
  // 禁用开始时间的小时
  const disabledHoursStart = () => {
    if (!endTime) return []

    const end = dayjs(endTime)
    const start = dayjs(startTime)

    // 判断是否是同一天
    if (start.isSame(end, 'day')) {
      const disabled = []
      for (let i = end.hour() + 1; i <= 24; i++) {
        disabled.push(i)
      }
      return disabled
    }
    return []
  }
  // 禁用结束时间的小时
  const disabledHoursEnd = () => {
    if (!startTime) return []

    const start = dayjs(startTime)
    const end = dayjs(endTime)

    // 判断是否是同一天
    if (start.isSame(end, 'day')) {
      const disabled = []
      for (let i = 0; i < start.hour(); i++) {
        disabled.push(i)
      }
      return disabled
    }
    return []
  }
  return isSelectStart ? disabledHoursStart() : disabledHoursEnd()
}
const disabledMinutes = (startTime: Date| string, endTime: Date| string, isSelectStart: boolean = false) => {
// 禁用开始时间的分钟
  const disabledMinutesStart = () => {
    if (!endTime) return []

    const end = dayjs(endTime)
    const start = dayjs(startTime)

    // 判断是否是同一天并且同一个小时
    if (start.isSame(end, 'hour')) {
      const disabled = []
      for (let i = end.minute() + 1; i <= 60; i++) {
        disabled.push(i)
      }
      return disabled
    }
    return []
  }
  // 禁用结束时间的分钟
  const disabledMinutesEnd = () => {
    if (!startTime) return []

    const start = dayjs(startTime)
    const end = dayjs(endTime)

    // 判断是否是同一天并且同一个小时
    if (start.isSame(end, 'hour')) {
      const disabled = []
      for (let i = 0; i < start.minute(); i++) {
        disabled.push(i)
      }
      return disabled
    }
    return []
  }

  return isSelectStart ? disabledMinutesStart() : disabledMinutesEnd()
}
const disabledSeconds = (startTime: Date| string, endTime: Date| string, isSelectStart: boolean = false) => {
// 禁用开始时间的秒
  const disabledSecondsStart = () => {
    if (!endTime) return []

    const end = dayjs(endTime)
    const start = dayjs(startTime)

    // 判断是否是同一天，同一个小时并且同一分钟
    if (start.isSame(end, 'minute')) {
      const disabled = []
      for (let i = end.second() + 1; i <= 60; i++) {
        disabled.push(i)
      }
      return disabled
    }
    return []
  }

  // 禁用结束时间的秒
  const disabledSecondsEnd = () => {
    if (!startTime) return []

    const start = dayjs(startTime)
    const end = dayjs(endTime)

    // 判断是否是同一天，同一个小时并且同一分钟
    if (start.isSame(end, 'minute')) {
      const disabled = []
      for (let i = 0; i < start.second(); i++) {
        disabled.push(i)
      }
      return disabled
    }
    return []
  }
  return isSelectStart ? disabledSecondsStart() : disabledSecondsEnd()
}
export { disabledHours, disabledMinutes, disabledSeconds }
export default timeComparatorAssistant
