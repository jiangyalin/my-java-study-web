export enum envType {
  /** 正式 */
  PROD = 'prod',
  /** 开发 */
  DEV = 'dev',
}

interface Config {
  /** 环境 */
  env: envType,
  /** 接口地址 */
  serverApi: string,
  /** 接口地址(内) */
  _serverApi: string,
  /** 默认皮肤配置（只有当用户为设置皮肤时生效） */
  defaultSkinConfig: {
    /** 是否为深色主题 */
    darkTheme: boolean,
    /** 是否跟随系统 */
    followSystem: boolean,
    /** 大小 */
    size: string,
    /** 滚动条宽度 */
    scrollBarWidth: number,
    /** 主题色 */
    primaryColor: string,
    /** 成功色 */
    successColor: string,
    /** 警告色 */
    warningColor: string,
    /** 危险色 */
    dangerColor: string,
    /** 信息色 */
    infoColor: string,
  }
}

const config: Config = {
  env: envType.DEV,
  serverApi: 'http://192.168.0.199:10205',
  _serverApi: 'http://192.168.0.199:10205',

  defaultSkinConfig: {
    darkTheme: false,
    followSystem: false,
    size: 'small',
    scrollBarWidth: 5,
    primaryColor: '#646CFF',
    successColor: '#67c23a',
    warningColor: '#e6a23c',
    dangerColor: '#f56c6c',
    infoColor: '#909399'
  }
}

switch (import.meta.env.VITE_APP_LOGOTYPE) {
case 'prod':
  config.env = envType.PROD
  config.serverApi = 'http://172.18.11.174:10203'
  config._serverApi = 'http://172.18.11.174:10203'
  break
case 'dev':
  config.env = envType.DEV
  config.serverApi = 'http://192.168.3.35:10203'// http://183.195.216.114:12501
  config._serverApi = 'http://192.168.3.35:10203' // http://192.168.3.35:10203/
  break
default:
  config.env = envType.DEV
  config.serverApi = 'http://192.168.0.199:10205'
  config._serverApi = 'http://192.168.0.199:10205'
}

const getConfig = () => config

export default getConfig()
