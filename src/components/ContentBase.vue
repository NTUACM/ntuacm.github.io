<template>
  <div class="container">
    <el-card class="content">
      <slot></slot>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ContentBase'
}
</script>

<style scoped>
.container {
  width: 1200px;
  height: 100%;
  margin: 20px auto;
}
</style>
