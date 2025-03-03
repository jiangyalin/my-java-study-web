/** 判断是否是内网IP */
const isInner = (ip: string) => {
  const parts = ip.split('.')

  // 转换 IPv4 地址的各个部分为整数。
  const nums = parts.map(part => parseInt(part, 10))

  // 检查 IP 地址是否有效。
  if (parts.length !== 4 || nums.includes(NaN)) {
    return false // 或者抛出一个错误。
  }

  // 检查是否为10.x.x.x
  if (nums[0] === 10) {
    return true
  }

  // 检查是否为172.16.x.x - 172.31.x.x
  if (nums[0] === 172 && nums[1] >= 16 && nums[1] <= 31) {
    return true
  }

  // 检查是否为192.168.x.x
  if (nums[0] === 192 && nums[1] === 168) {
    return true
  }

  // 如果不是内网IP地址，返回false。
  return false
}

export default isInner
