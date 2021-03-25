import { ContentTypeEnum, RequestEnum, ResultEnum, RrrorMessageEnum } from '/@/enums/httpEnum';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { RequestOptions, Result } from '/@/types/http';
import { ElNotification, ElMessage } from 'element-plus'
import { userStore } from '/@/store/modules/user';
import { isString } from '../help/is';
import { createNow, formatRequestDate } from '../help/http';
import { errorResult, errorMessage } from './const'
import qs from 'qs'


function isSuccess(code: number) {
  return 10000 + (code % 10000) === ResultEnum.SUCCESS;
}

/**
   * @description: 请求之前处理config
   */
export function beforeRequestHook(config: AxiosRequestConfig, options: RequestOptions) {
  const { isCacheData, apiUrl, formatDate } = options;

  if (apiUrl && isString(apiUrl)) {
    config.url = `${apiUrl}${config.url}`;
  }

  const params = config.params || {};
  if (config.method?.toUpperCase() === RequestEnum.GET) {
    if (!isString(params)) {
      // 是否从缓存中拿数据，如果不，则给 get 请求加上时间戳参数
      !isCacheData && (config.params = Object.assign(params || {}, createNow(false)));
    } else {
      // 兼容restful风格
      config.url = config.url + params + `${isCacheData ? '' : createNow(true)}`;
      config.params = undefined;
    }
  } else {
    if (!isString(params)) {
      formatDate && formatRequestDate(params);
      config.data = params;
      config.params = undefined;
    } else {
      // 兼容restful风格
      config.url = config.url + params;
      config.params = undefined;
    }
  }
  return config;
}

/**
  * @description: 处理请求数据
  */
export const transformRequestHook = (res: AxiosResponse<Result>, options: RequestOptions) => {
  const { isTransformRequestResult } = options;
  // 不进行任何处理，直接返回
  // 用于页面代码可能需要直接获取code，data，message这些信息时开启
  if (!isTransformRequestResult) {
    return res.data;
  }
  // 错误的时候返回

  if (!res.data) {
    // return '[HTTP] Request has no return value';
    return errorResult;
  }
  //  这里 code，result，message为 后台统一的字段，需要在 types.ts内修改为项目自己的接口返回格式
  const { code, data, message } = res.data;
  const msg = message || res.data.msg;

  // 这里逻辑可以根据项目进行修改
  const hasSuccess = isSuccess(code) && (data || msg);

  if (!hasSuccess) {
    if (msg) {
      // errorMessageMode=‘modal’的时候会显示modal错误弹窗，而不是消息提示，用于一些比较重要的错误
      if (options.errorMessageMode === RrrorMessageEnum.MODEL) {
        ElNotification({ title: '错误提示', message: msg });
      } else if (options.errorMessageMode === 'message') {
        ElMessage.error(msg);
      }
    }
    Promise.reject(new Error(msg));
    return errorResult;
  }

  // 接口请求成功，直接返回结果
  if (isSuccess(code)) {
    return data || msg;
  }
  // 登录超时
  if (code === ResultEnum.TIMEOUT) {
    const timeoutMsg = '登录超时,请重新登录!'
    ElNotification({
      title: '操作失败',
      message: timeoutMsg,
    });
    Promise.reject(new Error(timeoutMsg));
    return errorResult;
  }
  // 接口请求错误，统一提示错误信息
  if (!isSuccess(code)) {
    if (msg) {
      ElMessage.error(msg);
      Promise.reject(new Error(msg));
    } else {
      const msg = '操作失败,系统异常!';
      ElMessage.error(msg);
      Promise.reject(new Error(msg));
    }
    return errorResult;
  }
  return errorResult;
}

/**
  * @description: 请求失败
  */
export function requestCatchHook(err: any) {
  return err
}

/**
  * @description: 请求失败
  */

export function supportFormData(config: AxiosRequestConfig) {
  const headers = config?.headers;
  const contentType = headers?.['Content-Type'] || headers?.['content-type'];

  if (
    contentType !== ContentTypeEnum.FORM_URLENCODED ||
    !Reflect.has(config, 'data') ||
    config.method?.toUpperCase() === RequestEnum.GET
  ) {
    return config;
  }

  return {
    ...config,
    data: qs.stringify(config.data),
  };
}

/**
 * @description: 请求拦截器
 */
export function requestInterceptorsCatch(error: any) {
  const { response } = error || {};
  const msg: string = response?.data?.error?.message ?? '';
  const err: string = error?.toString?.() ?? '';
  if (response) {
    checkStatus(error?.response?.status, msg)
    return Promise.reject(response);
  }

  if (!(window.navigator as any).online) { // 断网处理
    checkStatus(502)
    return -1;
  }

  return Promise.reject(err)
}

/**
 * @description: 响应错误处理
 */
export function responseInterceptorsCatch(error: any) {
  const { response, code, message } = error || {};
  const msg: string = response?.data?.error?.message ?? '';
  const err: string = error?.toString?.() ?? '';
  try {
    if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
      ElNotification({
        title: '请求失败',
        message: error.message,
        type: 'error'
      });
    }
    if (err?.includes('Network Error')) {
      ElNotification({
        title: '网络异常',
        message: '请检查您的网络连接是否正常！',
        type: 'error'
      })
    }
  } catch (error) {
    throw new Error(error);
  }
  checkStatus(error?.response?.status, msg);
  return Promise.reject(error);
}

/**
 * @description: 状态码 报错
 */
function checkStatus(status: number, msg?: string) {
  switch (status) {
    case 400:
      ElMessage.error(msg);
      break;
    case 401:
      ElMessage.error(errorMessage['401']);
      userStore.logout();
      break;
    case 403:
      ElMessage.error(errorMessage['403']);
      break;
    // 404请求不存在
    case 404:
      ElMessage.error(errorMessage['404']);
      break;
    case 405:
      ElMessage.error(errorMessage['405']);
      break;
    case 408:
      ElMessage.error(errorMessage['408']);
      break;
    case 500:
      ElMessage.error(errorMessage['500']);
      break;
    case 501:
      ElMessage.error(errorMessage['501']);
      break;
    case 502:
      ElMessage.error(errorMessage['502']);
      break;
    case 503:
      ElMessage.error(errorMessage['503']);
      break;
    case 504:
      ElMessage.error(errorMessage['504']);
      break;
    case 505:
      ElMessage.error(errorMessage['505']);
      break;
    default:
  }

}