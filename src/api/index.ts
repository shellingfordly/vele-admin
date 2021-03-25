import { LoginParams, GetUserInfoByUserIdModel, GetImageCodeResultModel } from './model';
import http from '../utils/http';
import { RrrorMessageEnum } from '/@/enums/httpEnum';

enum Api {
  Login = '/register/auth.login/1.0.0',
  Logout = '/register/auth.logout/1.0.0',
  ImageCode = '/register/auth.captcha/1.0.0',
  GetUserInfo = '/register/auth.info/1.0.0',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode = RrrorMessageEnum.MODEL) {
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
 * @description: getImageCode
 */
export function getImageCode(params = {}) {
  return http.request<GetImageCodeResultModel>({
    url: Api.ImageCode,
    method: 'GET',
    params,
  });
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return http.request<GetUserInfoByUserIdModel>({
    url: Api.GetUserInfo,
    method: 'GET',
  });
}
