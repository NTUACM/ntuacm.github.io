<template>
  <ContentBase>
    <el-row :gutter="20" class="item">
      <el-col :span="8">
        <el-card :body-style="{ padding: '10px' }" class="content">
          <h3 class="title">欢迎加入NTUACM！</h3>
          <img src="@/assets/images/ACMQQ.png" class="ACMQQ">
        </el-card>
      </el-col>

      <el-col :span="16">
        <el-card class="content">
          <h3 class="title">新生选拔题</h3>
          <el-card class="notice">
            <div>
              这里填写本次选拔的注意事项
            </div>
            <el-button type="primary" plain round class="btn" size="small">
              <el-link href="https://vjudge.net" target="_blank" :underline="false" type="primary">
                <span class="url">题目链接</span>
              </el-link>
            </el-button>
          </el-card>
        </el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-card :body-style="{ padding: '10px' }" class="content">
        <h3>技能树</h3>
        <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick" />
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

<style lang="scss" scoped>
.item {
  padding: 20px 0;
  box-sizing: border-box;
}

.title {
  text-align: center;
}

.item .content .notice {
  padding: 15px;
  position: relative;
  height: 350px;
}

.btn {
  position: absolute;
  right: 20px;
  bottom: 15px;
}

.btn:hover {
  .url {
    color: white;
  }
}

.ACMQQ {
  width: 100%;
  display: block;
}
</style>
