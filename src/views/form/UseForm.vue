<script lang="ts" setup>
import VeForm, { useForm } from "../../components/VeForm";
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
    component: "RadioGroup",
    componentProps: {
      options: [
        {
          label: "男",
          value: 1,
        },
        {
          label: "女",
          value: 2,
        },
      ],
    },
  },
  {
    field: "like",
    label: "爱好",
    component: "CheckboxGroup",
    componentProps: {
      options: [
        {
          label: "足球",
          value: 1,
        },
        {
          label: "篮球",
          value: 2,
        },
        {
          label: "游泳",
          value: 3,
        },
      ],
    },
  },
  {
    field: "date",
    label: "生日",
    component: "DatePicker",
  },
];

const formData = reactive({
  name: "111",
  age: undefined,
  city: null,
  sex: null,
  like: [],
  date: "",
});

const rules = reactive({
  name: [
    {
      required: true,
      message: "Please input name",
      trigger: "blur",
    },
    {
      min: 3,
      max: 5,
      message: "Length should be 3 to 5",
      trigger: "blur",
    },
  ],
  age: [
    {
      required: true,
      message: "Please input age",
      trigger: "blur",
    },
  ],

  like: [
    {
      type: "array",
      required: true,
      message: "Please select like",
      trigger: "change",
    },
  ],
  sex: [
    {
      type: "number",
      required: true,
      message: "Please select sex",
      trigger: "change",
    },
  ],
  city: [
    {
      type: "number",
      required: true,
      message: "Please input city",
      trigger: "blur",
    },
  ],
});

const { register, methods } = useForm({
  model: formData,
  rules,
  schemas,
});

const formRef = ref();

const submitForm = () => {
  methods.validate((valid: any) => {
    if (valid) {
      console.log("submit!", valid);
    } else {
      console.log("error submit!", valid);
      return false;
    }
  });
};

const resetForm = () => {
  formRef.value.resetFields();
};

const clearValidate = () => {
  formRef.value.clearValidate();
};
</script>

<template>
  <VeForm ref="formRef" @register="register" />

  <ElButton @click="submitForm">submitForm</ElButton>
  <ElButton @click="resetForm">resetForm</ElButton>
  <ElButton @click="clearValidate">clearValidate</ElButton>
</template>

<style scoped lang="less"></style>
