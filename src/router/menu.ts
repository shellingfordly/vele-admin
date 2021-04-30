
import type { AppRouteRecordRaw } from '/@/router/types/types';
import { MenuModel } from '/@/types/router/menu'
import { menuStore } from '../store/modules/menu'

export default function parseMenu(routes: AppRouteRecordRaw[]) {
  const menus = traverse(routes)
  menuStore.setMenusAction(menus)
}

function traverse(routes: AppRouteRecordRaw[], path = '') {
  const menus: MenuModel[] = []
  routes.sort((a, b) => {
    if (a.meta.menuNum && b.meta.menuNum) return a.meta.menuNum - b.meta.menuNum
    return 1
  })

  routes.forEach(route => {
    if(!route.meta.hideMenu) {
      const menu: MenuModel = {
        path: path ? parsePath([path, route.path]) : route.path,
        name: route.meta.title,
        icon: route.meta.icon || '',
        children: []
      }
      if (route.children && route.children.length !== 0) {
        menu.children = traverse(route.children, menu.path)
      }
      menus.push(menu)
    }
  })

  return menus
}

function parsePath(arr: string[]) {
  return arr.reduce((pre, next) => {
    pre = pre.trim().replace('/', '')
    next = next.trim().replace('/', '')
    return `/${pre}/${next}`
  })
}