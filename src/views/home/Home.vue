<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <div>总销售额</div>
            <el-button class="button" type="text">查看</el-button>
          </div>
        </template>
        <div class="info">
          <div>￥ 20,000,000</div>
          <el-icon>
            <data-analysis />
          </el-icon>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <div>总支出</div>
            <el-button class="button" type="text">查看</el-button>
          </div>
        </template>
        <div class="info">
          <div>￥ 100,000</div>
          <el-icon>
            <trophy />
          </el-icon>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <div>总销量</div>
            <el-button class="button" type="text">查看</el-button>
          </div>
        </template>
        <div class="info">
          <div>￥ 500,000</div>
          <el-icon>
            <sell />
          </el-icon>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <div>月销量</div>
            <el-button class="button" type="text">查看</el-button>
          </div>
        </template>
        <div class="info">
          <div>￥ 30,000</div>
          <el-icon>
            <shopping-cart />
          </el-icon>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <el-row class="chart-container">
    <el-col :span="8">
      <el-card class="box-card">
        <template #header>
          <div>总销量</div>
        </template>
        <div class="chartPie" ref="chartThreeRef"></div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card class="box-card">
        <template #header>
          <div>总销量</div>
        </template>
        <div class="chartPie" ref="chartFourRef"></div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card>
        <template #header>
          <div>总销量</div>
        </template>
        <div class="chartPie" ref="chartFiveRef"></div>
      </el-card>
    </el-col>
  </el-row>
  <el-row class="chart-container">
    <el-col :span="12">
      <el-card class="box-card">
        <template #header>
          <div>总销量</div>
        </template>
        <div class="chart" ref="chartOneRef"></div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card>
        <template #header>
          <div>总销量</div>
        </template>
        <div class="chart" ref="chartTwoRef"></div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import {
  DataAnalysis,
  Sell,
  ShoppingCart,
  Trophy,
} from "@element-plus/icons-vue";
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import {
  chartOneOptions,
  chartTwoOptions,
  chartFiveOptions,
  chartFourOptions,
  chartThreeOptions,
} from "./const";

const chartOneRef = ref<HTMLElement>();
const chartTwoRef = ref<HTMLElement>();
const chartThreeRef = ref<HTMLElement>();
const chartFourRef = ref<HTMLElement>();
const chartFiveRef = ref<HTMLElement>();

onMounted(() => {
  const chartOne = echarts.init(chartOneRef.value as HTMLElement);
  const chartTwo = echarts.init(chartTwoRef.value as HTMLElement);
  const chartThree = echarts.init(chartThreeRef.value as HTMLElement);
  const chartFour = echarts.init(chartFourRef.value as HTMLElement);
  const chartFive = echarts.init(chartFiveRef.value as HTMLElement);
  chartOne.setOption(chartOneOptions);
  chartTwo.setOption(chartTwoOptions);
  chartThree.setOption(chartThreeOptions);
  chartFour.setOption(chartFourOptions);
  chartFive.setOption(chartFiveOptions);
});
</script>

<style lang="less" scoped>
:deep(.el-card__header) {
  padding: 10px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  padding: 10px 0;

  svg {
    font-size: 20px;
  }
}

.chart-container {
  padding: 20px 0;

  .box-card {
    width: calc(100% - 20px);
  }

  .chart {
    width: 100%;
    height: 300px;
  }

  .chartPie {
    width: 100%;
    height: 260px;
  }
}
</style>
