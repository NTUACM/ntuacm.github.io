<template>
  <div class="container">
    <el-row :gutter="20" class="content">
      <el-row class="item">
        <el-card>
          <h2>队长</h2>
          <h3>队长1:周杰</h3>
          <strong>职责:</strong><p>负责ICPC队员的训练</p>
          <h3>队长2:肖如航</h3>
          <strong>职责:</strong><p>负责新生的训练</p>
          <h3>队长3:蔡巧颖</h3>
          <strong>职责:</strong><p>负责算法的报名和组织，协助队长1和队长2</p>
        </el-card>
      </el-row>

      <el-row class="item">
        <el-card>
          <h2>现役队员</h2>
          <strong>2022级:</strong><p>肖如航 赵迪 余阳程</p>
          <strong>2021级:</strong><p>张鑫 陆玺洲 孙长江 陆思燕 刘洋</p>
          <strong>2020级:</strong><p>周杰 张世梁 蔡巧颖 吴高杰 韩愈</p>
        </el-card>
      </el-row>

      <el-row class="item">
        <el-card>
          <h2>退役队员</h2>
          <strong>2019级 </strong><p>苏展（保研浙江大学） 缪芸（保研南京大学）李佳帆（就业）</p>
          <strong>2018级:</strong><p>叶盛 （就业） 缪祺（就业） 季炎（就业） 奴成昊（考研南京航空航天大学） 吴媛媛 （保研南京大学）</p>
          <strong>2017级:</strong><p>赵静珂（保研天津大学） 沈天任（保研西北工业大学）</p>
          <strong>2016级:</strong><p>王淦（保研天津大学） 李昊洋（保研同济大学）</p>
          <strong>2015级:</strong><p>沈宇翔（考研苏州大学） 谢隽丰（考研复旦大学） 刘猛（考研南京大学）</p>
        </el-card>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Member'
}
</script>

<style scoped>
.container {
  /* background-color: aqua; */
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}

.content {
  margin-top: 20px;
}

.container .content .item {
  padding: 18px 0;
}
</style>
