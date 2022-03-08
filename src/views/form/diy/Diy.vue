<script lang="ts" setup>
import { h, reactive, ref, watch } from "vue";
import useForm from "/@/components/VeForm/hooks/useForm";
import VeForm from "/@/components/VeForm/index.vue";
import { FormSchema } from "/@/components/VeForm/types";

const schemas: FormSchema[] = [
  {
    field: "name",
    label: "姓名",
    component: "Input",
  },
  {
    field: "age",
    label: "年纪",
    component: "InputNumber",
  },
  {
    field: "city",
    label: "城市",
    component: "Select",
    componentProps: {
      options: [
        {
          label: "杭州",
          value: 1,
        },
        {
          label: "上海",
          value: 2,
        },
      ],
    },
  },
  {
    field: "sex",
    label: "性别",
    component: "Radio",
    componentProps: {
      label: "xxx",
    },
  },
  {
    field: "like",
    label: "爱好",
    component: "Checkbox",
    componentProps: {
      label: "xxx",
    },
  },
  {
    field: "date",
    label: "生日",
    component: "DatePicker",
  },
];

const formData = reactive({
  name: "Tome",
  age: 18,
  city: 1,
  sex: "男",
  like: [1],
  date: "2022/03/08",
});

watch(formData, () => {
  console.log("formData ======", formData);
});

const rules = reactive({
  name: [
    {
      required: true,
      message: "Please input Activity name",
      trigger: "blur",
    },
    {
      min: 3,
      max: 5,
      message: "Length should be 3 to 5",
      trigger: "blur",
    },
  ],
  region: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
  date1: [
    {
      type: "date",
      required: true,
      message: "Please pick a date",
      trigger: "change",
    },
  ],
  date2: [
    {
      type: "date",
      required: true,
      message: "Please pick a time",
      trigger: "change",
    },
  ],
  type: [
    {
      type: "array",
      required: true,
      message: "Please select at least one activity type",
      trigger: "change",
    },
  ],
  resource: [
    {
      required: true,
      message: "Please select activity resource",
      trigger: "change",
    },
  ],
  desc: [
    {
      required: true,
      message: "Please input activity form",
      trigger: "blur",
    },
  ],
});

const { register, methods } = useForm({
  model: formData,
  rules,
  schemas,
});

const submitForm = () => {
  methods.validate((valid: any) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = () => {
  methods.resetFields();
};
const onClick = () => {
  console.log(formData);
};
</script>

<template>
  <VeForm :formData="formData" @register="register"> </VeForm>
  <ElButton @click="onClick">onClick</ElButton>
</template>

<style scoped lang="less"></style>
