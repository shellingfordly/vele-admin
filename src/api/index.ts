import http from '../utils/http';
import { RrrorMessageEnum } from '/@/enums/httpEnum';

enum Api {
  Login = '/login',
  Logout = '/logout',
  GetUserInfo = '/getuserinfo',
}

/**
 * @description: user login api
 */
export function loginApi(params: any, mode = RrrorMessageEnum.MODEL) {
  // 返回token
  return http.request<string>(
    {
      url: Api.Login,
      method: 'POST',
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

/**
 * @description: logoutApi
 */
export function logoutApi(params: {} = {}) {
  return http.request<null>({
    url: Api.Logout,
    method: 'POST',
    params,
  });
}


/**
 * @description: getUserInfo
 */
export function getUserInfo(params: any) {
  return http.get<any>(Api.GetUserInfo, params);
}


export function getTest() {
  return http.get('/test')
}