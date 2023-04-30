<template>
  <ContentBase>
    <el-row :gutter="20" class="ICPC">
      <el-card shadow="hover">
        <h3>ICPC简介</h3>
        <p>
          国际大学生程序设计竞赛（英文全称：International Collegiate Programming Contest，
          简称ICPC）是由美国计算机协会（ACM）主办的年度竞赛，旨在展示大学生创新能力、团队精神和在压力下
          编写程序、分析和解决问题能力。经过近40年的发展，ACM国际大学生程序设计竞赛已经发展成为
          全球最具影响力的大学生程序设计竞赛，赛事由AWS、华为和Jetbrains赞助，在北京大学设有ICPC北京总部，
          用于组织东亚区域赛
        </p>
      </el-card>
    </el-row>
    <el-row :gutter="20" class="CCPC">
      <el-card shadow="hover" :body-style="{ transition: '500ms' }">
        <h3>CCPC简介</h3>
        <p>
          中国大学生程序设计竞赛（China Collegiate Programming Contest， CCPC）是由教育部高等学校
          计算机类专业教学指导委员会主办的面向全国高校大学生的年度学科竞赛，旨在激发学生学习计算机领域专业知识
          与技能的兴趣，鼓励学生主动灵活地运用计算机知识和技能解决实际问题，有效提升算法设计、逻辑推理、
          数学建模、编程实现和计算机系统能力，培养团队合作意识、挑战精神和创新能力。
        </p>
      </el-card>
    </el-row>
    <el-row :gutter="20" class="lanqiao">
      <el-card shadow="hover">
        <h3>蓝桥杯简介</h3>
        <p>
          蓝桥杯全国软件和信息技术专业人才大赛，简称蓝桥杯。比赛内容涵盖计算机基础知识、程式设计能力、
          算法设计、数字电路和模拟电路等。2021年，入选中国高等教育学会高校竞赛评估与管理体系研究工作组发布的
          2020全国普通高校大学生竞赛排行榜第36名。大赛分为软件类和电子类两大类别，
          软件类个人赛包括C/C++程序设计、Java设计，电子类竞赛包括单片机和嵌入式。
          大赛的赛程分为省赛和国赛两阶段，省赛比赛时间为每年的4月初左右，国赛为每年的5月下旬，
          省赛一等奖获得者有资格参加国赛。
        </p>
      </el-card>
    </el-row>
    <el-row :gutter="20" class="tianti">
      <el-card shadow="hover">
        <h3>天梯赛简介</h3>
        <p>
          团体程序设计天梯赛是中国高校计算机大赛的竞赛版块之一，赛旨在提升学生计算机问题求解水平，
          增强学生程序设计能力，培养团队合作精神，提高大学生的综合素质，同时丰富校园学术气氛，
          促进校际交流，提高全国高校的程序设计教学水平。比赛重点考查参赛队伍的基础程序设计能力、
          数据结构与算法应用能力，并通过团体成绩体现高校在程序设计教学方面的整体水平。
          竞赛题目均为在线编程题，由搭建在网易服务器上的PAT在线裁判系统自动评判。
          难度分3个梯级：基础级、进阶级、登顶级。以个人独立竞技、团体计分的方式进行排名。
        </p>
      </el-card>
    </el-row>
  </ContentBase>
</template>

<script>
import ContentBase from '@/components/ContentBase.vue'

export default {
  name: 'Match',
  components: { ContentBase }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 1px;
}

.el-card:hover {
    box-shadow: 2px 2px 10px lightgrey;
    transition: 500ms;
}

</style>
