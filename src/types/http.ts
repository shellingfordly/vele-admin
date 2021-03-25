import type { AxiosRequestConfig } from 'axios';
import { RrrorMessageEnum } from '/@/enums/httpEnum';

export interface RequestOptions {
  errorMessageMode?: RrrorMessageEnum; // 消息提示类型
  isTransformRequestResult?: boolean; // 需要对返回数据进行处理
  formatDate?: boolean;  // 格式化提交参数时间
  apiUrl?: string; // 接口前缀
  isCacheData?: boolean; // 是否缓存获取的数据
  ignoreCancelToken?: boolean; // 忽略重复请求
}

export interface CreateAxiosOptions extends AxiosRequestConfig {
  requestOptions?: RequestOptions
}

export interface Result<T = any> {
  code: number;
  type: 'success' | 'error' | 'warning';
  msg: string;
  message?: string;
  data: T;
}