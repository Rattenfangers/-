import Vue from 'vue'
import Router from 'vue-router'
import CSSTest from '@/components/CSSTest'
import JSTest from '@/components/JSTest'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/CSSTest',
      name: 'CSSTest',
      component: CSSTest
    },
    {
      path: '/JSTest',
      name: 'JSTest',
      component: JSTest
    },
    {
      path: '/',
      redirect: '/CSSTest'
    }
  ]
})
