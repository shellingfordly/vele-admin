export interface MenuModel {
  title: string
  name: string
  path: string
  icon: string
  children: MenuModel[] | []
}