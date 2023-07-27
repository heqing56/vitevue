import * as VueRouter from 'vue-router'
import views from './views'
import {getStore} from '@/utils/store'
 
const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  // history: VueRouter.createWebHashHistory(),
  history: VueRouter.createWebHistory(),
  routes:views, // `routes: routes` 的缩写
})
router.beforeEach((to, from, next) => {
    let token = getStore({name:'token'})
    if (to.meta.requireAuth) {
      // 如果用户未能验证身份，则 `next` 会被调用两次
      if (to.name !== 'login' && !token) {
        next({
          name: 'login'
        })
      } else {
        next()
      }
    } else {
      next()
    }
  })

export default router