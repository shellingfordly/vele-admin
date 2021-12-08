import http from "../utils/http";
import { RrrorMessageEnum } from "/@/enums/httpEnum";

enum Api {
  Login = "/login",
  GetUserInfo = "/getuserinfo",
  TableList = "/table/list",
  TableTreeList = "/table/treelist",
}

/**
 * @description: user login api
 */
export function loginApi(params: any, mode = RrrorMessageEnum.MODEL) {
  // 返回token
  return http.request<RES.UserInfo>(
    {
      url: Api.Login,
      method: "POST",
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo(params: any) {
  return http.get<any>(Api.GetUserInfo, params);
}

export function getTableList(params?: any) {
  return http.get<any>(Api.TableList, params);
}

export function getTableTreeList(params?: any) {
  return http.get<any>(Api.TableTreeList, params);
}
