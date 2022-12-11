import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Auth/LoginView.vue'
import RegistroView from '../views/Auth/RegistroView.vue'
import LugarView from '../views/lugares/AgregarLugarView.vue'
import LugaresView from '../views/lugares/LugaresView.vue'
import LugarDetalleView from '../views/lugares/LugarDetalleView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/registro',
    name: 'Registro',
    component: RegistroView
  },
  {
    path: '/lugar',
    name: 'lugar',
    component: LugarView
  },
  {
    path: '/lugares',
    name: 'lugares',
    component: LugaresView
  },
  {
    path: '/lugares/:id',
    name: 'LugarDetalle',
    component: () => LugarDetalleView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
