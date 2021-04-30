export enum MenuColorEnum {
  BACKGROUND_COLOR = '#282c34',
  TEXT_COLOR = "#fff",
  ACTIVE_TEXT_COLOR = "#1890ff"
}


export function getMenuColor() {
  return {
    'background-color': MenuColorEnum.BACKGROUND_COLOR,
    'text-color': MenuColorEnum.TEXT_COLOR,
    'active-text-color': MenuColorEnum.ACTIVE_TEXT_COLOR
  }
}