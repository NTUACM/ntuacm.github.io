<template>
  <ContentBase>
    <el-row class="content">
      <el-row class="item">
        <el-card>
          <h2>教材</h2>
          <el-table
            :data="textbook"
            style="width:100%"
            :show-header="false"
          >
            <el-table-column>
              <template slot-scope="scope">
                {{ scope.row.name }}
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-row>

      <el-row class="item">
        <el-card>
          <h2>算法练习平台</h2>
          <el-table
            :data="onlinejudge"
            style="width:100%"
          >
            <el-table-column
              label="平台名称"
              width="400"
            >
              <template slot-scope="scope">
                {{ scope.row.name }}
              </template>
            </el-table-column>
            <el-table-column
              label="平台网址"
              width="600"
            >
              <template slot-scope="{row}">
                <el-link :href="row.url" target="_blank" class="url" :underline="false">{{ row.url }}</el-link>
              </template>
            </el-table-column>
          </el-table>

        </el-card>
      </el-row>
    </el-row>
  </ContentBase>
</template>

<script>
import ContentBase from '@/components/ContentBase.vue'
import onlinejudge from '@/api/onlinejudge'
import textbook from '@/api/textbook'

export default {
  name: 'Data',
  components: { ContentBase },
  data() {
    return {
      onlinejudge: onlinejudge.onlinejudge,
      textbook: textbook.textbook
    }
  }
}
</script>

<style scoped>

.content .item {
  padding: 20px 0;
}

</style>
