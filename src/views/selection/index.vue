<template>
  <ContentBase>
    <el-row :gutter="20" class="item">
      <el-col :span="8">
        <el-card shadow="hover" :body-style="{ padding: '10px' }" class="content">
          <img src="@/assets/images/ACMQQ.png" class="ACMQQ">
        </el-card>
      </el-col>

      <el-col :span="16">
        <el-card class="content" shadow="hover">
          <el-tag effect="dark">
            <svg-icon icon-class="ontop" style="fill: greenyellow;font-size: 18px" />
            新生选拔题
          </el-tag>
          <br><br>
          <el-card class="notice" shadow="hover">
            <el-row>
              这里填写本次选拔的注意事项
            </el-row>
            <el-button type="primary" plain round class="btn" size="small">
              <el-link href="https://vjudge.net" target="_blank" class="url" :underline="false" type="primary">
                题目链接
              </el-link>
            </el-button>
          </el-card>
        </el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-card shadow="hover" :body-style="{ padding: '10px' }" class="content">
        <h3>技能树</h3>
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
      </el-card>
    </el-row>
  </ContentBase>
</template>

<script>
import ContentBase from '@/components/ContentBase.vue'
import skill from '@/api/skill'

export default {
  name: 'Selection',
  components: { ContentBase },
  data() {
    return {
      data: skill.skill
    }
  }
}
</script>

<style scoped>
.item {
  padding: 20px 0;
}

.item .content {
  height: 388px;
}

.item .content .notice {
  padding: 15px;
}

.btn {
  float: right;
  margin-top: 10px;
}

.ACMQQ {
  width: 100%;
  display: block;
}
</style>
