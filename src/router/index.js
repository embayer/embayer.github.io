import Vue from 'vue'
import Router from 'vue-router'
import ViewIndex from '@/components/ViewIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ViewIndex',
      component: ViewIndex,
      props: (route) => ({
        lastCigarette: route.query.lastCigarette
      })
    }
  ]
})
