import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/introduction',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Introduction',
      component: () => import('@/views/introduction'),
      meta: { title: '简介', icon: 'el-icon-user' }
    }]
  },

  {
    path: '/member',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Member',
      component: () => import('@/views/member'),
      meta: { title: '成员', icon: 'el-icon-time' }
    }]
  },

  {
    path: '/match',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Match',
      component: () => import('@/views/match'),
      meta: { title: '比赛', icon: 'el-icon-tickets' }
    }]
  },

  {
    path: '/data',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Data',
      component: () => import('@/views/data'),
      meta: { title: '资料', icon: 'el-icon-files' }
    }]
  },

  {
    path: '/selection',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Selection',
      component: () => import('@/views/selection'),
      meta: { title: '队员选拔', icon: 'el-icon-user' }
    }]
  },

  {
    path: '/training',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Training',
      component: () => import('@/views/training'),
      meta: { title: '队员集训', icon: 'el-icon-user' }
    }]
  },

  {
    path: '/summary',
    component: Layout,
    redirect: '/summary/index',
    children: [
      {
        path: 'index',
        name: 'Summary',
        component: () => import('@/views/summary/index.vue'),
        meta: { title: '比赛总结', icon: 'el-icon-user' }
      },
      {
        path: '/summary/problem',
        name: 'ProblemA',
        hidden: true,
        meta: { title: 'problemA' },
        component: () => import('@/views/summary/problem/A.vue')
      },
      {
        path: '/summary/problem',
        name: 'ProblemB',
        hidden: true,
        meta: { title: 'problemB' },
        component: () => import('@/views/summary/problem/B.vue')
      },
      {
        path: '/summary/problem',
        name: 'ProblemC',
        hidden: true,
        meta: { title: 'problemC' },
        component: () => import('@/views/summary/problem/C.vue')
      },
      {
        path: '/summary/problem',
        name: 'ProblemD',
        hidden: true,
        meta: { title: 'problemD' },
        component: () => import('@/views/summary/problem/D.vue')
      },
      {
        path: '/summary/problem',
        name: 'ProblemE',
        hidden: true,
        meta: { title: 'problemE' },
        component: () => import('@/views/summary/problem/E.vue')
      }
    ]
  },

  {
    path: '/achievement',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Achievement',
      component: () => import('@/views/achievement'),
      meta: { title: '历史成绩', icon: 'el-icon-user' }
    }]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
// export const asyncRoutes = [

// ]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
