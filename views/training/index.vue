<template>
  <ContentBase>
    <el-row :gutter="20" class="item">
      <el-col :span="12">
        <el-card shadow="always" :body-style="{ padding: '10px' }" class="notice">
          <div class="title">
            寒暑假集训计划
          </div>
          <div class="content">
            今年暑假我们的训练计划......
          </div>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card shadow="always" class="ranklist">
          <h2>CF排行榜</h2>
          <el-table
            :data="rank"
            style="width:100%"
          >
            <el-table-column
              label="姓名"
            >
              <template slot-scope="scope">
                {{ scope.row.name }}
              </template>
            </el-table-column>

            <el-table-column
              label="昵称"
            >
              <template slot-scope="scope">
                {{ scope.row.username }}
              </template>
            </el-table-column>

            <el-table-column
              label="Rating"
            >
              <template slot-scope="scope">
                {{ scope.row.rating }}
              </template>
            </el-table-column>
          </el-table>

        </el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-card shadow="hover" :body-style="{ padding: '10px' }" class="content">
        <h3>CCPC/ICPC训练</h3>
        <el-table
          :data="problemset"
          style="width:100%"
        >
          <el-table-column
            label="知识点"
          >
            <template slot-scope="scope">
              {{ scope.row.title }}
            </template>
          </el-table-column>

          <el-table-column
            label="练习题"
          >
            <template slot-scope="{row}">
              <el-link :href="row.addr" target="_blank" class="addr" :underline="false" type="primary">{{ row.name }}</el-link>
            </template>
          </el-table-column>

          <el-table-column
            label="难度"
          >
            <template slot-scope="scope">
              <el-tag :type="renderColor(scope.row.hard)">{{ scope.row.hard }}</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-row>
  </ContentBase>
</template>

<script>
import ContentBase from '@/components/ContentBase.vue'
import rank from '@/api/rank'
import problemset from '@/api/problemset'

export default {
  name: 'Summary',
  components: { ContentBase },
  data() {
    return {
      rank: rank.rank,
      problemset: problemset.problemset
    }
  },
  methods: {
    renderColor(hard) {
      if (hard === '简单') {
        return 'success'
      } else if (hard === '中等') {
        return 'warning'
      } else if (hard === '困难') { return 'danger' }
    }
  }
}
</script>

<style scoped>
.item {
  padding: 20px 0;
}

.item .notice {
  background-image: url(../../assets/images/blackboard.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 90%;
  width: 100%;
  height: 560px;
  margin: 0 auto;
}

.item .notice .title {
  height: 36px;
  font-size: 24px;
  width: 80%;
  margin: 0 auto;
  margin-top: 200px;
  color: white;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(51, 51, 51, 0.25);
  line-height: 24px
}

.item .notice .content {
  height: 150px;
  font-size: 20px;
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  color: white;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;
  line-height: 26px
}

.item .ranklist {
  height: 560px;
}
</style>
