import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout/enteriseLayout'

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
    redirect: '/home',
    hidden: false,
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/enterisePages/home/index'),
      meta: { title: '首页' }
    }]
  },
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/list',
  //   name: 'Example',
  //   meta: {
  //     title: 'Example',
  //     icon: 'el-icon-s-help'
  //   },
  //   children: [
  //     {
  //       path: 'edit/:id(\\d+)',
  //       component: () => import('@/views/example/edit'),
  //       name: 'EditArticle',
  //       meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
  //       hidden: true
  //     },
  //     {
  //       path: 'list',
  //       component: () => import('@/views/example/list'),
  //       name: 'ArticleList',
  //       meta: { title: 'Article List', icon: 'list' }
  //     }
  //   ]
  // },
  {
    path: '/enteriseData',
    component: Layout,
    redirect: '/enteriseData/list',
    hidden: false,
    name: 'EnteriseData',
    meta: { title: '企业数据' },
    children: [
      {
        path: 'list',
        name: 'EnteriseDataList',
        component: () => import('@/views/enterisePages/enteriseData/index'),
        meta: { title: '企业数据' }
      },
      {
        path: 'eInfos',
        component: () => import('@/views/enterisePages/enteriseData/sub/index'),
        name: 'EInfos',
        meta: { title: '企业数据详情', noCache: true, activeMenu: '/enteriseData/list' },
        hidden: true
      }
    ]
  },
  {
    path: '/staff',
    component: Layout,
    redirect: '/staff/list',
    hidden: false,
    name: 'Staff',
    meta: { title: '人员数据' },
    children: [
      {
        path: 'list',
        name: 'StaffList',
        component: () => import('@/views/enterisePages/staff/index'),
        meta: { title: '人员数据' }
      },
      {
        path: 'sInfos',
        component: () => import('@/views/enterisePages/staff/sub/index'),
        name: 'SInfos',
        meta: { title: '人员数据详情', noCache: true, activeMenu: '/staff/list' },
        hidden: true
      }
    ]
  },
  {
    path: '/project',
    component: Layout,
    redirect: '/project/list',
    hidden: false,
    name: 'Project',
    meta: { title: '项目数据' },
    children: [
      {
        path: 'list',
        name: 'ProjectList',
        component: () => import('@/views/enterisePages/project/index'),
        meta: { title: '项目数据' }
      },
      {
        path: 'pInfos',
        component: () => import('@/views/enterisePages/project/sub/index'),
        name: 'PInfos',
        meta: { title: '项目数据详情', noCache: true, activeMenu: '/project/list' },
        hidden: true
      }
    ]
  },
  {
    path: '/statistics',
    component: Layout,
    redirect: '/statistics/list',
    hidden: true,
    name: 'Statistics',
    meta: { title: '数据统计' },
    children: [
      {
        path: 'list',
        name: 'StatisticsList',
        component: () => import('@/views/enterisePages/statistics/index'),
        meta: { title: '数据统计' }
      },
      {
        path: 'tInfos',
        component: () => import('@/views/enterisePages/statistics/sub/index'),
        name: 'TInfos',
        meta: { title: '数据统计详情', noCache: true, activeMenu: '/statistics/list' },
        hidden: true
      }
    ]
  },
  // {
  //   path: '/tInfos',
  //   component: Layout,
  //   redirect: '/staff/tInfos',
  //   hidden: true,
  //   children: [
  //     {
  //       path: '/staff/tInfos',
  //       name: 'tInfos',
  //       component: () => import('@/views/enterisePages/statistics/sub/index'),
  //       meta: { title: '数据统计详情' }
  //     }
  //   ]
  // },
  {
    path: '/search',
    component: Layout,
    redirect: '/search',
    hidden: true,
    children: [
      {
        path: '/search',
        name: 'search',
        component: () => import('@/views/enterisePages/search/index'),
        meta: { title: '搜索列表' }
      }
    ]
  },
  {
    path: '/searchCopy',
    component: Layout,
    redirect: '/searchCopy',
    hidden: true,
    children: [
      {
        path: '/searchCopy',
        name: 'searchCopy',
        component: () => import('@/views/enterisePages/searchCopy/index'),
        meta: { title: '搜索列表' }
      }
    ]
  },
  // 404 page must be placed at the end !!! 这里本来到404页面，现在到首页
  { path: '*', redirect: '/', hidden: true }
]
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
