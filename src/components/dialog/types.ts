export interface DialogPropsModel {
  title?: string;
  width?: string | number;
  fullscreen?: boolean | false;
  top?: string;
  modal?: boolean;
  appenToBody?: boolean;
  lockScroll?: boolean;
  customClass?: string;
  openDelay?: number;
  closeDelay?: number;
  closeOnClickModal?: boolean;
  closeOnPressEscape?: boolean;
  showClose?: boolean;
  beforeClose?: (done: any) => void;
  center?: boolean;
  destroyOnClose?: boolean;
  open?: () => void;
  opened?: () => void;
  close?: () => void;
  closed?: () => void;
}

export interface MethodsModel {
  actionDialog: (bool?: boolean) => void;
  setProps: (props: any) => void;
}

export type ResultModel = [(...args: any) => viod, MethodsModel];
