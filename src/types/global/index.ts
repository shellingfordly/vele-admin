declare type Indexable<T extends any = any> = {
  [key: string]: T;
};