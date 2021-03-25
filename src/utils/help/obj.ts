import { isArray, isDate, isObjOrArr } from './is'

export function deepClone(obj: any) {
  const newObj: any = isArray(obj) ? [] : {};

  for (const key in obj) {
    if (Reflect.has(obj, key)) {
      const item = obj[key];
      if (isObjOrArr(item)) {
        newObj[key] = deepClone(item);
      } else if (isDate(item)) {
        newObj[key] = new Date(item);
      }
      else {
        newObj[key] = item;
      }
    }
  }
  return newObj
}
