declare type Indexable<T extends any = any> = {
  [key: string]: T;
};
declare type Nullable<T> = T | null;
declare type Recordable<T = any> = Record<string, T>;
