import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('@/views/layout/index.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home/index.vue'),
                meta: {
                    title: '首页'
                }
            },
            {
                path: '/mine',
                name: 'mine',
                component: () => import('@/views/mine/index.vue'),
                meta: {
                    title: '我的'
                }
            }

        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/login/register.vue'),
        meta: {
            title: '注册账号'
        }
    },
    {
        path: '/revise',
        name: 'revise',
        component: () => import('@/views/login/revise.vue'),
        meta: {
            title: '修改密码'
        }
    },
    {
        path: '/guide/revise',
        name: 'guideRevise',
        component: () => import('@/views/guide/revise.vue'),
        meta: {
            title: '修改个人信息'
        }
    },
    {
        path: '/enterstore',
        name: 'enterStore',
        component: () => import('@/views/guide/enterStore.vue'),
        meta: {
            title: '我的商家'
        }
    },
    {
        path: '/addplay',
        name: 'addplay',
        component: () => import('@/views/guide/addplay.vue'),
        meta: {
            title: '选择商家'
        }
    },
    {
        path: '/playinfo',
        name: 'playinfo',
        component: () => import('@/views/guide/playinfo.vue'),
        meta: {
            title: '选择项目'
        }
    },
    {
        path: '/playlist',
        name: 'playList',
        component: () => import('@/views/guide/playlist.vue'),
        meta: {
            title: '带客列表'
        }
    },
    {
        path: '/balance',
        name: 'balance',
        component: () => import('@/views/guide/balance.vue'),
        meta: {
            title: '立即结算'
        }
    },
    {
        path: '/order',
        name: 'order',
        component: () => import('@/views/mine/order.vue'),
        meta: {
            title: '游客订单'
        }
    },
    {
        path: '/orderinfo',
        name: 'orderInfo',
        component: () => import('@/views/mine/orderinfo.vue'),
        meta: {
            title: '订单详情'
        }
    },
    {
        path: '/listInfo',
        name: 'listInfo',
        component: () => import('@/views/guide/playlistInfo.vue'),
        meta: {
            title: '带客详情'
        }
    },
    {
        path: '/merchant/project',
        name: 'merchantProject',
        component: () => import('@/views/merchant/project.vue'),
        meta: {
            title: '商家详情'
        }
    },
    {
        path: '/merchant/enter',
        name: 'merchantEnter',
        component: () => import('@/views/merchant/enter.vue'),
        meta: {
            title: '入驻新商家'
        }
    },
    {
        path: '/info',
        name: 'info',
        component: () => import('@/views/mine/info.vue'),
        meta: {
            title: '带客详情'
        }
    },

]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
router.beforeEach((to, from, next) =>{
    document.title = to.meta.title || '默认标题'
    next()
})
export default router