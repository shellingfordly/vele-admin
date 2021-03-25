import { isObject, isString } from './is';

export function createNow<T extends boolean>(
  restful: T
): T extends true ? string : object;

export function createNow(restful = false): string | object {
  const now = new Date().getTime();
  if (restful) {
    return `?_t=${now}`;
  }
  return { _t: now };
}

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm';
/**
 * @description: Format request parameter time
 */
export function formatRequestDate(params: any) {
  for (const key in params) {
    if (params[key] && params[key]._isAMomentObject) {
      params[key] = params[key].format(DATE_TIME_FORMAT);
    }
    if (isString(key)) {
      const value = params[key];
      if (value) {
        try {
          params[key] = isString(value) ? value.trim() : value;
        } catch (error) {
          throw new Error(error);
        }
      }
    }
    if (isObject(params[key])) {
      formatRequestDate(params[key]);
    }
  }
}
