import type { VNode } from "vue";

export type ComponentType =
  | "Input"
  | "InputNumber"
  | "Select"
  | "RadioGroup"
  | "CheckboxGroup"
  | "Cascader"
  | "DatePicker"
  | "TimePicker"
  | "TimeSelect"
  | "Switch"
  | "Upload"
  | "Slider"
  | "Rate"
  | "Divider";

export interface FormSchema {
  // 字段属性名
  field: string;
  // 标签上显示的自定义内容
  label: string | VNode;
  component: ComponentType;
  // 子组件 属性
  componentProps?: object;
  // 子组件
  render?: VNode;
}

export interface FormProps {
  schemas?: FormSchema[];
  // 表单数据对象
  model?: Recordable;
  // 表单验证规则
  rules: any;
  // 	行内表单模式
  inline: boolean;
  // 表单域标签的位置， 如果值为 left 或者 right 时，则需要设置 label-width
  labelPosition: string;
  // 表单域标签的宽度，例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。 支持 auto。
  labelWidth: string | number;
  // 表单域标签的后缀
  labelSuffix: string;
  // 是否显示必填字段的标签旁边的红色星号
  hideRequiredAsterisk: boolean;
  // 是否显示校验错误信息
  showMessage: boolean;
  // 是否以行内形式展示校验信息
  inlineMessage: boolean;
  // 是否在输入框中显示校验结果反馈图标
  statusIcon: boolean;
  // 是否在 rules 属性改变后立即触发一次验证
  validateOnRuleChange: boolean;
  // 用于控制该表单内组件的尺寸	strin
  size: string;
  // 是否禁用该表单内的所有组件。 若设置为 true，则表单内组件上的 disabled 属性不再生效
  disabled: boolean;
}

export interface FormActionType {
  setProps: (props: Partial<FormProps>) => void;
  validate: (callback: (valid: any) => void) => void;
  resetFields: () => void;
  clearValidate: (props?: string | string[]) => void;
}

export interface FormItemActionType {
  
}