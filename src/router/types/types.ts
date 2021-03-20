
import { defineComponent } from 'vue';

export type Component<T extends any = any> =
| ReturnType<typeof defineComponent>
| (() => Promise<typeof import('*.vue')>)
| (() => Promise<T>);

export interface RouteMeta {
  // title
  title: string;
  // Whether to ignore permissions
  ignoreAuth?: boolean;
  // role info
  roles?: string[];
  // Whether not to cache
  ignoreKeepAlive?: boolean;
  // Is it fixed on tab
  affix?: boolean;
  // icon on tab
  icon?: string;
  activeIcon?: string;

  frameSrc?: string;

  // current page transition
  transitionName?: string;

  // Whether the route has been dynamically added
  hideBreadcrumb?: boolean;

  // Carrying parameters
  carryParam?: boolean;

  // Used internally to mark single-level menus
  single?: boolean;

  // Currently active menu
  currentActiveMenu?: string;

  // Never show in tab
  hideTab?: boolean;

  // Never show in menu
  hideMenu?: boolean;

  menuNum?: number;
}

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: any;
  fullPath?: string;
}