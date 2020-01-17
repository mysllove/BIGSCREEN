import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [{
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },
    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/gis',
        children: [{
            path: 'gis',
            name: 'gis',
            component: () =>
                import ('@/views/gis/index'),
            meta: { title: 'Gis', icon: 'Gis' }
        }]
    },
    {
        path: '/dashboard',
        component: Layout,
        children: [{
            path: 'dashboard',
            name: 'dashboard',
            component: () =>
                import ('@/views/dashboard/index'),
            meta: { title: '分析', icon: 'analyze' }
        }]
    },
    {
        path: '/table',
        component: Layout,
        children: [{
            path: 'index',
            name: 'table',
            component: () =>
                import ('@/views/table/index'),
            meta: { title: '户档', icon: 'module' }
        }]
    },
    {
        path: '/committee',
        component: Layout,
        children: [{
            path: 'index',
            name: 'committee',
            component: () =>
                import ('@/views/committee/index'),
            meta: { title: '物业', icon: 'committee' }
        }]
    },
    {
        path: '/realEstate',
        component: Layout,
        children: [{
            path: 'index',
            name: 'realEstate',
            component: () =>
                import ('@/views/realEstate/index'),
            meta: { title: '居委', icon: 'realEstate' }
        }]
    },
    {
        path: '/operation',
        component: Layout,
        children: [{
            path: 'index',
            name: 'operation',
            component: () =>
                import ('@/views/operation/index'),
            meta: { title: '运营', icon: 'operation' }
        }]
    },
    {
        path: '/setting',
        component: Layout,
        children: [{
            path: 'index',
            name: 'setting',
            component: () =>
                import ('@/views/setting/index'),
            meta: { title: '设置', icon: 'setting' }
        }]
    },
    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router