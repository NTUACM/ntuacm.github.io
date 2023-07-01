export default {
  // 代办事项
  skill: [{
    label: '基础算法',
    children: [{
      label: '前缀和'
    }, {
      label: '差分'
    }, {
      label: '二分'
    }, {
      label: '双指针'
    }, {
      label: '递推'
    }, {
      label: '递归'
    }]
  }, {
    label: '数据结构',
    children: [{
      label: '栈'
    }, {
      label: '堆'
    }, {
      label: '队列'
    }, {
      label: '单调栈'
    }, {
      label: '单调队列'
    }, {
      label: '并查集'
    }, {
      label: '哈希表'
    }, {
      label: 'KMP'
    }, {
      label: 'Trie'
    }, {
      label: '树状数组'
    }, {
      label: '线段树'
    }]
  }, {
    label: '图论',
    children: [{
      label: 'DFS'
    }, {
      label: 'BFS'
    }, {
      label: '拓扑排序'
    }, {
      label: 'Dijkstra'
    }, {
      label: 'SPFA'
    }, {
      label: 'Floyd'
    }, {
      label: '最小生成树'
    }, {
      label: '最近公共祖先'
    }, {
      label: '二分图'
    }]
  }, {
    label: '数学知识',
    children: [{
      label: '筛质数'
    }, {
      label: '最大公约数'
    }, {
      label: '快速幂'
    }, {
      label: '组合计数'
    }, {
      label: '博弈论'
    }, {
      label: '矩阵乘法'
    }]
  }, {
    label: '动态规划',
    children: [{
      label: '背包DP'
    }, {
      label: '线性DP'
    }, {
      label: '区间DP'
    }, {
      label: '树形DP'
    }]
  }],
  defaultProps: {
    children: 'children',
    label: 'label'
  }

}
