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
        <h3>技能树</h3>
        <el-tree :data="problemset" :props="defaultProps" accordion @node-click="handleNodeClick" />
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
