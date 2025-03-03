export namespace ApiAuth {
  export interface ResPostLogin {
    tenantId?: number, // 租户id
    account: string, // 账号
    password: string // 密码
  }
}
