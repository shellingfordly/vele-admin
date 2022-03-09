import {
  ElInput,
  ElInputNumber,
  ElCascader,
  ElDatePicker,
  ElTimePicker,
  ElTimeSelect,
  ElSwitch,
  ElUpload,
  ElSlider,
  ElRate,
  ElDivider,
} from "element-plus";
import { ComponentType } from "./types";
import type { Component } from "vue";
import VeSelect from "/@/components/VeSelect/index.vue";
import VeCheckboxGroup from '/@/components/VeCheckbox/VeCheckboxGroup.vue'
import VeRadioGroup from '/@/components/VeRadio/VeRadioGroup.vue'

const componentMap = new Map<ComponentType, Component>();

componentMap.set("Input", ElInput);
componentMap.set("InputNumber", ElInputNumber);
componentMap.set("Select", VeSelect);
componentMap.set("RadioGroup", VeRadioGroup);
componentMap.set("CheckboxGroup", VeCheckboxGroup);
componentMap.set("Cascader", ElCascader);
componentMap.set("DatePicker", ElDatePicker);
componentMap.set("TimePicker", ElTimePicker);
componentMap.set("TimeSelect", ElTimeSelect);
componentMap.set("Switch", ElSwitch);
componentMap.set("Upload", ElUpload);
componentMap.set("Slider", ElSlider);
componentMap.set("Rate", ElRate);
componentMap.set("Divider", ElDivider);

export function add(compName: ComponentType, component: Component) {
  componentMap.set(compName, component);
}

export function del(compName: ComponentType) {
  componentMap.delete(compName);
}

export { componentMap };
