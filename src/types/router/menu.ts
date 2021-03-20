export interface MenuModel {
  name: string
  path: string
  icon: string
  children: MenuModel[] | []
}