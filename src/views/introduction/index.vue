<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="6">
        <!-- 比赛通知 -->
        <el-card class="notice">
          <h2>比赛通知</h2>
          <ul>
            <li>2023年NTUACM新生选拔赛</li>
            <li>ACM第一场校赛</li>
            <li>ACM第二场校赛</li>
            <li>ACM第三场校赛</li>
          </ul>
        </el-card>
        <!-- 集训队简介 -->
        <el-card class="introduction">
          <h2>集训队简介</h2>
          集训队由陈翔老师于2016年成立，主要引导并组织学生进行算法能力的训练，
          从中选拔出优秀的学生参加各类程序算法类竞赛。

          <p>集训队适合的学生:</p>
          <ul>
            <li>希望培养良好的编程能力和数学基础</li>
            <li>希望培养良好的自学能力</li>
            <li>希望能够保研或考研到更好的学校</li>
            <li>希望能够在找到好的工作</li>
          </ul>
        </el-card>
      </el-col>
      <el-col :span="18">
        <el-card class="news">
          <h2>新闻</h2>
          <p><strong>2023.4：第十四届蓝桥杯</strong></p>
          <p>集训队成员在第十四届蓝桥杯江苏省比赛中取得佳绩，xxx获得江苏省一等奖，xxx获得江苏省二等奖，xx获得江苏省三等奖.......</p>
          <p><strong>2023.4：第六届中国高校计算机大赛——团体程序设计天梯赛</strong></p>
          <p><a href="https://news.ntu.edu.cn/2023/0425/c9a211147/page.htm">集训队在第八届中国高校计算机大赛——团体程序设计天梯赛中获得佳绩</a></p>
          <p><img src="@/assets/images/Ladder_race.jpg" alt="ladder_race"></p>
          <h2 id="goal"><a href="#goal" class="headerlink" title="goal"></a>目标</h2>
          <p><del><a target="_blank">赛季目标？</a></del></p>
          <h2 id="responsibility"><a href="#responsibility" class="headerlink" title="responsibility"></a>职责</h2>
          <p><del><a target="_blank">待补充</a></del></p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Introduction'
}
</script>

<style scoped>
.container {
  margin: 20px;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}

.notice {
  height: 300px;
  margin-bottom: 20px;
}
</style>
