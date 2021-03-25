export function underline2Camel(s: string) {
  return s.replace(/_(\w)/g, function (_: any, letter: string) {
    return letter.toUpperCase();
  });
}

export function camel2Underline(s: string) {
  return s.replace(/([A-Z])/g, '_$1').toLowerCase();
}

export function jsonToCamel(obj: any, deleteKey = true) {
  if (obj instanceof Array) {
    obj.forEach(function (v) {
      jsonToCamel(v, deleteKey);
    });
  } else if (obj instanceof Object) {
    Object.keys(obj).forEach(function (key) {
      const newKey = underline2Camel(key);
      if (newKey !== key) {
        obj[newKey] = obj[key];
        if (deleteKey) delete obj[key];
      }
      jsonToCamel(obj[newKey], deleteKey);
    });
  }
  return obj;
}

export function jsonToUnderline(obj: any, deleteKey = true) {
  if (obj instanceof Array) {
    obj.forEach(function (v) {
      jsonToUnderline(v, deleteKey);
    });
  } else if (obj instanceof Object) {
    Object.keys(obj).forEach(function (key) {
      const newKey = camel2Underline(key);
      if (newKey !== key) {
        obj[newKey] = obj[key];
        if (deleteKey) delete obj[key];
      }
      jsonToUnderline(obj[newKey], deleteKey);
    });
  }
  return obj;
}
