/**
 * @description: Request result set
 */
 export enum ResultEnum {
  SUCCESS = 10000,
  ERROR = 10001,
  TIMEOUT = 401,
  TYPE = 'success',
}

export enum CodeStyleEnum {
  UNDERLINE = 'underline',
  CAMEL = 'camel',
  MIX = 'mix',
}


/**
 * @description: 错误消息提示
 */
export enum RrrorMessageEnum {
  MESSAGE = 'message',
  MODEL = 'model',
}


/**
 * @description: request method
 */
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

/**
 * @description:  contentTyp
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
