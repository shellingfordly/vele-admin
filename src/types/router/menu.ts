export interface MenuModel {
  name: string
  path: string
  icon: string
  children: MenuModel[] | []
}


export interface MenuBarModel extends MenuModel {
  isSubmenu: boolean
}
