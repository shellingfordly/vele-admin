import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import { CreateAxiosOptions, RequestOptions, Result } from '/@/types/http'
import { userStore } from '/@/store/modules/user';
import {
  responseInterceptorsCatch,
  beforeRequestHook,
  transformRequestHook,
  requestCatchHook,
  supportFormData,
} from './transform'
import AxiosCanceler from './cancel'
import { deepClone } from '../help/obj';
import { isFunc } from '../help/is';
import { RrrorMessageEnum, RequestEnum, ContentTypeEnum } from '/@/enums/httpEnum';
import { jsonToCamel } from './codeStyle';
import { errorResult } from './const'

export class Http {
  private config: CreateAxiosOptions
  private instance: AxiosInstance

  constructor(config: CreateAxiosOptions) {
    this.config = config
    this.instance = axios.create(config)
    this.setInterceptors(this.instance)
  }

  get getConfig() {
    return this.config
  }

  get getinstance() {
    return this.instance
  }

  /**
   * @description: 创建新的axios instance
   */
  private create(config: CreateAxiosOptions): void {
    this.instance = axios.create(config);
  }


  /**
   * @description: 设置请求头
   */
  setHeader(headers: any): void {
    if (!this.instance) {
      return;
    }
    Object.assign(this.instance.defaults.headers, headers);
  }

  /**
   * @description: 拦截器 配置
   */
  private setInterceptors(instance: AxiosInstance) {
    const axiosCanceler = new AxiosCanceler()
    // 请求拦截器
    instance.interceptors.request.use(config => {
      // 添加loading

      const {
        headers: { ignoreCancelToken },
      } = config;

      const ignoreCancel =
        ignoreCancelToken !== undefined
          ? ignoreCancelToken
          : this.config.requestOptions?.ignoreCancelToken;

      !ignoreCancel && axiosCanceler.addPending(config);

      // 配置token
      config.headers.Authorization = userStore.getTokenState || ''


      return config;
    }, undefined)


    // 响应结束
    instance.interceptors.response.use(response => {
      // 移除请求
      response && axiosCanceler.removePending(response.config);

      return response
    }, responseInterceptorsCatch)
  }

  /**
   * @description: 重新配置 axios
   */
  configAxios(config: CreateAxiosOptions) {
    if (!this.instance) {
      return;
    }
    this.create(config);
  }


  /**
   * @description: 发起请求
   */
  request<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    let conf: AxiosRequestConfig = deepClone(config);

    const { requestOptions } = this.config;

    const opt: RequestOptions = Object.assign({}, requestOptions, options);

    conf = beforeRequestHook(conf, opt);
    conf = supportFormData(conf);

    return new Promise((resolve, reject) => {
      this.instance
        .request<any, AxiosResponse<Result>>(conf)
        .then((res: AxiosResponse<Result>) => {
          if (transformRequestHook && isFunc(transformRequestHook)) {
            const ret = transformRequestHook(res, opt);
            jsonToCamel(ret, false);
            ret !== errorResult ? resolve(ret) : reject(new Error('request error!'));
            return;
          }
          jsonToCamel(res, false);
          resolve((res as unknown) as Promise<T>);
        })
        .catch((e: Error) => {
          if (requestCatchHook && isFunc(requestCatchHook)) {
            reject(requestCatchHook(e));
            return;
          }
          reject(e);
        });
    });
  }

  get<T = any>(url: string, params?: any, options?: RequestOptions): Promise<T> {
    return this.request({ url, params, method: RequestEnum.GET }, options);
  }

  post<T = any>(url: string, params?: any, options?: RequestOptions): Promise<T> {
    return this.request({ url, params, method: RequestEnum.POST }, options);
  }

  put<T = any>(url: string, params?: any, options?: RequestOptions): Promise<T> {
    return this.request({ url, params, method: RequestEnum.PUT }, options);
  }

  delete<T = any>(url: string, params?: any, options?: RequestOptions): Promise<T> {
    return this.request({ url, params, method: RequestEnum.DELETE }, options);
  }

}

function createHttp(config: Partial<CreateAxiosOptions> = {}) {
  return new Http({
    // baseURL: '/test/api/gravity',
    timeout: 10000,
    withCredentials: true,
    headers: {
      'Content-Type': ContentTypeEnum.JSON,
      'sateway-app-id': 'app_ry92remq8j'
    },
    requestOptions: {
      isTransformRequestResult: true, // 是否对返回数据进行处理
      formatDate: true, // 格式化提交参数时间
      apiUrl: '', // 接口地址
      errorMessageMode: RrrorMessageEnum.MESSAGE, // 错误消息提示
      isCacheData: false, // 是否缓存获取的数据
      ignoreCancelToken: true, // 忽略重复请求
    },
    ...config,
  })

}

const http = createHttp()
export default http