import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Rutas from '@/components/Rutas/Rutas'
import Informacion from '@/components/Informacion/Informacion'
import Planpastoral from '@/components/Informacion/Planpastoral'
import Lista from '@/components/Lista/Lista'
import Galeria from '@/components/Galeria/Galeria'
import Eventos from '@/components/Eventos/Eventos'
import Digital from '@/components/Informacion/Digital'

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
    },
    {
      path: '/informacion',
      name: 'Informacion',
      component: Informacion
    },
    {
      path: '/lista',
      name: 'Lista',
      component: Lista
    },
    {
      path: '/galeria',
      name: 'Galeria',
      component: Galeria
    },
    {
      path: '/eventos',
      name: 'Eventos',
      component: Eventos
    },
    {
      path: '/planpastoral',
      name: 'Planpastoral',
      component: Planpastoral
    },
    {
      path: '/digital',
      name: 'Digital',
      component: Digital
    }
  ]
})
