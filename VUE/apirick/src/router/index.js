import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Character from '../views/Characters.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/character/:id',
    name: 'Character',
    component:  Character
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
