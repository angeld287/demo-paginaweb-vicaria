import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Rutas from '@/components/Rutas/Rutas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: '/rutas',
      name: 'Rutas',
      component: Rutas
    }
  ]
})
