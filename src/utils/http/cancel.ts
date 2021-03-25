import axios from 'axios'
import type { AxiosRequestConfig, Canceler } from 'axios';
import {isFunc }from '/@/utils/help/is'

let pendingMap = new Map<string, Canceler>();

export default class AxiosCanceler {
  /**
   * @description: 添加请求
   */
  addPending(config: AxiosRequestConfig){
    this.removePending(config);
    const url = getPendingUrl(config);
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken((cancel) => {
        if (!pendingMap.has(url)) {
          pendingMap.set(url, cancel);
        }
      });
    
  }

  /**
   * @description: 移除所有请求
   */
   removeAllPending() {
    pendingMap.forEach((cancel) => {
      cancel && isFunc(cancel) && cancel();
    });
    pendingMap.clear();
  }

  /**
   * @description: 移除请求
   */
  removePending(config: AxiosRequestConfig){
    const url = getPendingUrl(config);
    if (pendingMap.has(url)) {
      const cancel = pendingMap.get(url);
      cancel && cancel(url);
      pendingMap.delete(url);
    }
  }

  /**
   * @description: 重置
   */
  reset(): void {
    pendingMap = new Map<string, Canceler>();
  }
  
}



export function getPendingUrl (config: AxiosRequestConfig){
  const params = config.params;
  let query = '';
  if (params)
    query = Reflect.ownKeys(params).reduce((query: any, next: any) => {
      if (next === '_t') return query;
      query += next + '=' + params[next] + '&';
      return query;
    }, '?') as string;
  return [config.method, config.url, query].join('&');
};