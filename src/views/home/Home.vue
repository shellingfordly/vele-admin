<template>
  <div>
    <div>Home {{ aaa }}</div>
    <div>
      <ul>
        <li v-for="v in obj">
          {{ v }}
        </li>
      </ul>
    </div>
    <div>
      <el-button @click="onClick">获取用户信息</el-button>
      <el-button @click="actionDialog()">open dialog</el-button>
      <home-form @register="registerDialog" />
    </div>
    <div>
      <el-button @click="() => actionDrawer()">打开 Drawer</el-button>
      <home-drawer @register="registerDrawer" />
    </div>
    <div>
      <Switch>
        <template #1> 1 </template>
        <template #2> 2 </template>
        <template #3> 3 </template>
        <template #default> default </template>
      </Switch>
    </div>
  </div>
</template>
<script lang="ts">
import { useDialog } from "../../components/dialog/useDialog";
import { useDrawer } from "/@/components/drawer/useDrawer";
import { defineComponent, onMounted } from "vue";
import { userStore } from "/@/store/modules/user";
import HomeForm from "./components/HomeForm.vue";
import HomeDrawer from "./components/HomeDrawer.vue";
import Switch from "/@/components/switch/Switch.vue";

export default defineComponent({
  components: { HomeForm, HomeDrawer, Switch },
  setup() {
    const [registerDialog, { actionDialog }] = useDialog({ title: "sss" });
    const [registerDrawer, { actionDrawer }] = useDrawer({ title: "测试" });

    async function onClick() {
      const userInfo = await userStore.getUserInfoAction();
      console.log(userInfo);
    }

    onMounted(() => {});

    class Int extends Number {
      _value;
      constructor(_value: number) {
        super();
        this._value = _value;
      }

      value() {
        return this._value;
      }

      format() {
        return this.value + "%";
      }
    }

    // function fn(...a: Int[]) {
    //   a.reduce((a, b) => a.value + b.value);
    // }

    const arr = [
      {
        value: 1,
      },
      {
        value: 2,
      },
    ];

    const res = arr.reduce((a, b) => {
      console.log(a,b);
      
      return a.value + b.value;
    });
    console.log("res", res);

    return {
      onClick,
      registerDialog,
      actionDialog,
      registerDrawer,
      actionDrawer,
    };
  },
});
</script>
