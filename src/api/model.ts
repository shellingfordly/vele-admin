/**
 * @description: Login interface parameters
 */
 export interface LoginParams {
  type: string;
  account: string;
  password: string;
  captcha_id: string;
  captcha_value: string;
}

/**
 * @description: Get user information
 */
export interface GetUserInfoByUserIdParams {
  userId: string | number;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number;
  token: string;
  role: RoleInfo;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoByUserIdModel {
  // role: RoleInfo;
  // // 用户id
  // userId: string | number;
  // // 用户名
  // username: string;
  // // 真实名字
  // realName: string;
  // // 介绍
  // desc?: string;
  company: number;
  created_at: string;
  group: number;
  email: string;
  id: number;
  // 权限
  level: string;
  // 用户电话
  mobile: string;
  // 用户名
  name: string;
  platform: string;
  position: number;
  roles: string;
  updated_at: string;
}

export interface GetImageCodeResultModel {
  b64s: string;
  captcha_id: string;
}
