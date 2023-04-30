<template>
  <ContentBase>
    <el-row :gutter="20" class="item">
      <el-col :span="12">
        <el-card shadow="always">
          <h3 class="title">2023蓝桥杯总结</h3>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card shadow="always">
          <h3 class="title">2023天梯赛总结</h3>
        </el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-card shadow="always">
        <h3>题解</h3>

        <el-table
          :data="problemsolving"
          style="width:100%"
        >
          <el-table-column
            label="题目"
          >
            <template slot-scope="scope">
              {{ scope.row.title }}
            </template>
          </el-table-column>

          <el-table-column
            label="作者"
          >
            <template slot-scope="scope">
              {{ scope.row.author }}
            </template>
          </el-table-column>

          <el-table-column
            label="链接"
          >
            <template slot-scope="{row}">
              <div class="problemsolving" @click="problemContent(row)">{{ row.type }}</div>
            </template>
          </el-table-column>
        </el-table>

      </el-card>
    </el-row>
  </ContentBase>
</template>

<script>
import ContentBase from '@/components/ContentBase.vue'
import problemsolving from '@/api/problemsolving'

export default {
  name: 'Training',
  components: { ContentBase },
  data() {
    return {
      problemsolving: problemsolving.problemsolving
    }
  },
  methods: {
    problemContent(row) {
      if (row.type === 'problemA') {
        this.$router.push({
          path: '/summary/problem/A.vue',
          name: 'ProblemA',
          params: {
            row: row
          }
        })
      } else if (row.type === 'problemB') {
        this.$router.push({
          path: '/summary/problem/B.vue',
          name: 'ProblemB',
          params: {
            row: row
          }
        })
      } else if (row.type === 'problemC') {
        this.$router.push({
          path: '/summary/problem/C.vue',
          name: 'ProblemC',
          params: {
            row: row
          }
        })
      } else if (row.type === 'problemD') {
        this.$router.push({
          path: '/summary/problem/D.vue',
          name: 'ProblemD',
          params: {
            row: row
          }
        })
      } else if (row.type === 'problemE') {
        this.$router.push({
          path: '/summary/problem/E.vue',
          name: 'ProblemE',
          params: {
            row: row
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.item {
  margin-bottom: 20px;
}

.item .title {
  text-align: center;
}
.problemsolving {
  color: #409EFF;
}
.problemsolving:hover {
  cursor: pointer;
  text-decoration-line: underline;
}
</style>
