<template>
  <div class="login">
    <div class="login-form mx-6">
      <div class="login-form__content">
        <div class="login-card">
          <span
            class="item"
            :class="{ active: formData.type == 'mobile' }"
            @click="formData.type = 'mobile'"
          >
            手机登录
          </span>
          <span class="seperator"></span>
          <span
            class="item"
            :class="{ active: formData.type == 'email' }"
            @click="formData.type = 'email'"
          >
            邮箱登录
          </span>
        </div>

        <el-form
          class="mx-auto mt-5"
          :model="formData"
          :rules="formRules"
          ref="formRef"
        >
          <el-form-item label="账号" prop="account">
            <el-input v-model="formData.account" placeholder="请输入登录账号">
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="formData.password"
              placeholder="请输入登录密码"
            >
            </el-input>
          </el-form-item>
          <el-row>
            <el-col :span="14">
              <el-form-item label="验证码" prop="imgcode">
                <el-input
                  v-model="formData.imgcode"
                  placeholder="请输入验证码"
                  @keyup.enter="login"
                >
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item :style="{ 'text-align': 'right' }">
                <img
                  v-if="imgB64"
                  class="img-code"
                  :src="imgB64"
                  @click="changeImg"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item>
            <el-button
              type="primary"
              size="large"
              class="rounded-sm"
              :block="true"
              @click="login"
              :loading="formState.loading"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, unref, toRaw } from "vue";
import md5 from "md5";
import { userStore } from "/@/store/modules/user";
import { ElMessage, ElNotification } from "element-plus";
import { getImageCode } from "/@/api";

export default defineComponent({
  setup() {
    const formRef = ref<any>(null);

    const formData = reactive({
      type: "mobile",
      account: "15990117821",
      password: "2",
      imgcode: "",
    });

    const formState = reactive({
      loading: false,
    });

    const formRules = reactive({
      account: [
        {
          required: true,
          trigger: "blur",
          validator: (_: any, value: string) => {
            let pattern = /^([\d]{11})$/;
            if (formData.type === "email") {
              pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            }
            if (!pattern.test(value)) {
              return Promise.reject(
                formData.type === "email"
                  ? "请填写正确的邮箱地址"
                  : "请填写正确的手机号码"
              );
            }
            return Promise.resolve();
          },
        },
      ],
      password: [
        { required: true, message: "密码不能为空！", trigger: "blur" },
      ],
      imgcode: [
        { required: true, message: "验证码不能为空！", trigger: "blur" },
      ],
    });

    let imgB64 = ref<any>("");
    let imgB64Id = ref<string>("");
    async function changeImg() {
      try {
        const data = await getImageCode();
        imgB64.value = data.b64s;
        imgB64Id.value = data.captcha_id;
      } catch (error) {
        ElMessage.error("验证码获取失败，可以尝试刷新页面重新获取。");
      }
    }

    changeImg();

    function handleLogin() {
      const form = unref(formRef);
      if (!form) return;
      formState.loading = true;
      try {
        form.validate(async (valid: string) => {
          if (valid) {
            const userInfo = await userStore.loginAction(
              toRaw({
                type: formData.type,
                account: formData.account,
                captcha_id: imgB64Id.value,
                captcha_value: formData.imgcode,
                password: md5(formData.password),
              })
            );
            if (userInfo) {
              ElNotification({
                title: "登录成功",
                message: `欢迎回来: ${userInfo.name}`,
                type: "success",
              });
            } else {
              changeImg();
            }
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      } catch (error) {
        changeImg();
      } finally {
        formState.loading = false;
      }
    }
    return {
      imgB64,
      changeImg,
      formRef,
      formData,
      formState,
      formRules,
      login: handleLogin,
    };
  },
});
</script>
<style lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(to bottom, #4286f4, #2e6bad);

  &-header {
    display: flex;
    justify-content: space-between;
    padding: 12px 120px;
    background: #f9f9f9;

    .desc {
      font-size: 20px;
      font-weight: bold;
    }
  }

  &-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60px;
    font-size: 15px;
    text-align: center;
    background: #fff;
  }

  &-title {
    display: flex;
    width: 100%;
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logo-image {
      width: 260px;
    }
  }

  &-card {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 0 0 30px;

    .item {
      padding: 20px;
      font-size: 18px;
      text-align: center;
      flex-grow: 1;
      background: #f5f5f5;
    }

    .active {
      color: blue;
      border-bottom: 2px solid blue;
    }
  }

  &-form {
    width: 400px;
    background: #fff;
    border: 10px solid rgba(255, 255, 255, 0.5);
    border-width: 8px;
    border-radius: 4px;
    background-clip: padding-box;

    &__main {
      margin: 30px auto 0 auto !important;
    }

    &-wrap {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }

    &__content {
      position: relative;
      width: 100%;
      height: 100%;
      // padding: 60px 0 40px 0;
      padding-bottom: 20px;
      border: 1px solid #999;
      border-radius: 2px;

      header {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          display: inline-block;
          width: 48px;
        }

        h1 {
          margin-bottom: 0;
          font-size: 24px;
          text-align: center;
        }
      }

      form {
        width: 80%;
        margin: auto;

        .img-code {
          width: 100px;
          height: 40px;
        }
      }
    }
  }
}
</style>
