export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}

export function isString(val: unknown): val is string {
  return is(val, 'String')
}

export function isFunc(val: unknown): val is Function {
  return typeof val === 'function';
}

export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}

export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object');
}

export function isDate(val: unknown): val is Date {
  return is(val, 'Date');
}

export function isObjOrArr(val: unknown): boolean {
  return typeof val === 'object'
}
