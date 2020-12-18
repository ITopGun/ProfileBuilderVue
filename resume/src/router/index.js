import Vue from 'vue'
import Router from 'vue-router'
import ResumeEditor from '@/components/ResumeEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ResumeEditor',
      component: ResumeEditor
    }
  ]
})
