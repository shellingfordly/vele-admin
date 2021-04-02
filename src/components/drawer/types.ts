type Direction = 'rtl' | 'ltr' | 'ttb' | 'btt'

export interface DrawerPropsModel {
  appendToBody?: boolean    // Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true	boolean	—	false
  beforeClose?: (done: () => void) => void  // 关闭前的回调，会暂停 Drawer 的关闭	function(done)，done 用于关闭 Drawer	—	—
  closeOnPressEscape?: boolean  // 是否可以通过按下 ESC 关闭 Drawer	boolean	—	true
  customClass?: string      // Drawer 的自定义类名	string	—	—
  destroyOnClose?: boolean  // 控制是否在关闭 Drawer 之后将子元素全部销毁	boolean	-	false
  modal?: boolean           // 是否需要遮罩层	boolean	—	true
  direction?: Direction     // Drawer 打开的方向	Direction	rtl / ltr / ttb / btt	rtl
  showClose?: boolean       // 是否显示关闭按钮	boolean	—	true
  size?: string | number    // Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 
  title?: string            // Drawer 的标题，也可通过具名 slot （见下表）传入	string	—	—
  withHeader?: boolean      // 控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效	boolean	-	true
  handleClose?: () => void  // 用于关闭 Drawer, 该方法会调用传入的 before-close 方法
  open?: () => void         // Drawer 打开的回调	—
  opened?: () => void       // Drawer 打开动画结束时的回调	—
  close?: () => void        // Drawer 关闭的回调	—
  closed?: () => void       // Drawer 关闭动画结束时的回调
}

export interface MethodsModel {
  actionDrawer: (bool?: boolean) => void
  setProps: (props: any) => void
}

export type ResultModel = [Function, MethodsModel]