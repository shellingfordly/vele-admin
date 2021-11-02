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
</template>
<script lang="ts" setup>
import { DataAnalysis, Sell, ShoppingCart, Trophy } from '@element-plus/icons'
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
</style>


