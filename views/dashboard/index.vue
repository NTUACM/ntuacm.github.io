<template>
  <ContentBase>
    <div class="container">
      <el-row :gutter="20" class="item">
        <!-- 比赛通知 -->
        <el-col class="notice" :span="12">
          <el-card>
            <h3 class="title">比赛通知</h3>
            <el-table
              :data="notice"
              style="width:100%"
            >
              <el-table-column
                label="内容"
              >
                <template slot-scope="scope">
                  {{ scope.row.name }}
                </template>
              </el-table-column>
              <el-table-column
                label="时间"
              >
                <template slot-scope="scope">
                  {{ scope.row.time }}
                </template>
              </el-table-column>
              <el-table-column
                label="地点"
              >
                <template slot-scope="scope">
                  {{ scope.row.addr }}
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <el-col :span="12">
          <!-- 集训队简介 -->
          <el-card class="introduction">
            <h3 class="title">集训队简介</h3>
            <p>
              集训队由陈翔老师于2016年成立，主要引导并组织学生进行算法能力的训练，
              从中选拔出优秀的学生参加各类程序算法类竞赛。
            </p>
            <p>集训队适合的学生:</p>

            <p/><li class="el-icon-check" />希望培养良好的编程能力和数学基础</p>
            <p/><li class="el-icon-check" />希望培养良好的自学能力</p>
            <p/><li class="el-icon-check" />希望能够保研或考研到更好的学校</p>
            <p/><li class="el-icon-check" />希望能够在找到好的工作</p>

          </el-card>
        </el-col>
      </el-row>

      <el-row class="item" :gutter="20">

        <el-card class="news">
          <h3>新闻</h3>
          <p><strong>2023.5.13：2023国际大学生程序设计竞赛全国邀请赛（陕西）</strong></p>
          <p>集训队成员在今年的ICPC2023全国邀请赛西安站中取得佳绩，由周杰，韩愈，张世梁三位同学组成的“集思广益队”在众多队伍中脱颖而出，斩获铜牌！</p>
          <el-col :span="12">
            <el-card class="image">
              <img
                src="@/assets/images/ICPC2023-Xian-Invention.jpg"
                style="width: 450px;
                height: 100%"
              >
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card>
              <img
                src="@/assets/images/ICPC2023-Xian-bronze.jpg"
                style="width: 450px;
                height: 100%"
              >
            </el-card>
          </el-col>
          <p><strong>2023.4：第十四届蓝桥杯</strong></p>
          <p>集训队成员在第十四届蓝桥杯江苏省比赛中取得佳绩，xxx获得江苏省一等奖，xxx获得江苏省二等奖，xx获得江苏省三等奖.......</p>
          <p><strong>2023.4：第六届中国高校计算机大赛——团体程序设计天梯赛</strong></p>
          <p><a href="https://news.ntu.edu.cn/2023/0425/c9a211147/page.htm">集训队在第八届中国高校计算机大赛——团体程序设计天梯赛中获得佳绩</a></p>
          <p><img src="@/assets/images/Ladder_race.jpg" alt="ladder_race"></p>
          <h3 id="goal"><a href="#goal" class="headerlink" title="goal" />目标</h3>
          <p><del><a target="_blank">赛季目标？</a></del></p>
          <h3 id="responsibility"><a href="#responsibility" class="headerlink" title="responsibility" />职责</h3>
          <p><del><a target="_blank">待补充</a></del></p>
        </el-card>
      </el-row>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from '@/components/ContentBase.vue'
import notice from '@/api/notice'

export default {
  name: 'Dashboard',
  components: { ContentBase },
  data() {
    return {
      notice: notice.notice
    }
  }
}
</script>

<style scoped>
.item {
  margin-bottom: 20px;
}

.introduction {
  margin-bottom: 20px;
}

.el-icon-check {
  color: green;
  margin-right: 5px;
  font-weight: bolder;
}

.container .item .news .image {
  padding: 0;
}
</style>
