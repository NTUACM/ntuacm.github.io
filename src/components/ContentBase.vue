<template>
  <div class="container">
    <el-card class="content" shadow="never" :body-style="{ border:'1px solid #D2D2D2' }">
      <slot />
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
