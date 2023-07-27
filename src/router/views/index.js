import login from '@/views/login.vue'
import index from '@/views/index.vue'
import pages from '../pages'
const routes = [
    {
        path: '/login',
        name:'login',
        component: login
    },
    {
        path: '/',
        name:'index',
        component: index,
        redirect:'/default/index',
        meta:{
            requireAuth:true,
        },
        children: [
            ...pages
         ]
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        meta: {
            requireAuth: true,
        },
        component: () => import('@/views/404.vue')
    },

]
export default routes