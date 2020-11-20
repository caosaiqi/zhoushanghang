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
    icon: 'svg-name'             the icon show in the sidebar
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
    component: () => import('@/views/login'),
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/auction/home.vue'),
      meta: { title: '首页', icon: 'home',bool:false }
    },
    
    {
      path: 'publish',
      name: 'publish',
      component: () => import('@/views/auction/publish.vue'),
      meta: { title: '开源需求发布', icon: 'publish',bool:false }
    },
    {
      path: 'achievement',
      name: 'achievement',
      component: () => import('@/views/auction/index.vue'),
      meta: { title: '军工科技成果', icon: 'achievement',bool:false }
    },
    {
      path: 'advanced',
      name: 'advanced',
      component: () => import('@/views/auction/advanced.vue'),
      meta: { title: '先进前沿技术', icon: 'advanced',bool:false }
    },
    {
      path: 'emerging',
      name: 'emerging',
      component: () => import('@/views/auction/emerging.vue'),
      meta: { title: '新兴军工产业', icon:'emerging',bool:false }
    },
    {
      path: 'innovate',
      name: 'innovate',
      component: () => import('@/views/auction/innovate.vue'),
      meta: { title: '创新资源要素', icon:'innovate',bool:false }
    },
    {
      path: 'service',
      name: 'service',
      component: () => import('@/views/auction/service.vue'),
      meta: { title: '数字赋能服务', icon:'service',bool:false }
    },
    {
      path: 'exhibition',
      name: 'exhibition',
      component: () => import('@/views/auction/exhibition.vue'),
      meta: { title: '新兴军工产业详情', icon:'exhibition',bool:false }
    },
    {
      path: 'register',
      name: 'register',
      component: () => import('@/views/auction/register.vue'),
      meta: { title: '注册', icon:'register',bool:false }
    },
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
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
