<script lang="ts" setup>
const list: {
  title: string;
  content: {
    val: string;
    text?: string;
    url: string;
  }[];
}[] = [
  {
    title: "项目信息",
    content: [
      {
        val: "Github",
        text: "vele-admin",
        url: "https://github.com/shellingfordly/vue3-admin",
      },
      {
        val: "预览地址",
        url: "https://shellingfordly.github.io/vue3-admin",
      },
    ],
  },
  {
    title: "相关库",
    content: [
      {
        val: "Vue3",
        url: "https://v3.vuejs.org/",
      },
      {
        val: "Vue-Router-Next",
        url: "https://next.router.vuejs.org/",
      },
      {
        val: "Vuex-Module-Decorators",
        url: "https://github.com/championswimmer/vuex-module-decorators",
      },
      {
        val: "Vite",
        url: "https://vitejs.dev/",
      },
      {
        val: "TypeScript",
        url: "https://www.typescriptlang.org/",
      },
      {
        val: "Element-Plus",
        url: "https://element-plus.gitee.io/zh-CN/",
      },
      {
        val: "Mock.js",
        url: "https://github.com/nuysoft/Mock",
      },
    ],
  },

  {
    title: "参考项目",
    content: [
      {
        val: "vue-vben-admin",
        url: "https://github.com/anncwb/vue-vben-admin",
      },
      {
        val: "vue-element-admin",
        url: "https://github.com/PanJiaChen/vue-element-admin",
      },
    ],
  },
];
</script>

<template>
  <div class="about-container">
    <div class="info-item">
      <div class="title">介绍</div>
      这是一个基于VUE3.0，Vite2.0，Element-Plus组件库，Vuex，Vue-Router，TypeScript搭建的后台管理Demo.
    </div>

    <div class="info-item" v-for="item in list">
      <div class="title">{{ item.title }}</div>
      <ul>
        <li v-for="k in item.content">
          <div>{{ k.val }}</div>
          <div>
            <a :href="k.url">{{ k?.text || k.val }}</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.about-container {
  .info-item {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #eee;

    .title {
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: 600;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      width: 100%;

      li {
        display: flex;
        width: 50%;

        div {
          width: 50%;
          height: 40px;
          text-align: center;
          line-height: 40px;
          border: 1px solid #ddd;
        }

        div:first-child {
          background-color: #eee;
        }
      }
    }
  }
}
</style>
