import Vue from 'vue'
import VueRouter from 'vue-router'


// client
import ClientHome from '../pages/Client/Home.vue'
import videos from '../pages/Client/videos.vue'
import images from '../pages/Client/images.vue'
import about from '../pages/Client/about.vue'
import contact from '../pages/Client/contact.vue'
import video_preview from '../pages/Client/video_preview.vue'


// dashboard
import Home from '../pages/Dashboard/Home.vue'
import setting from '../pages/Dashboard/setting.vue'
import login from '@/pages/Dashboard/auth/login.vue'
import forget from '@/pages/Dashboard/auth/forget.vue'
import reset from '@/pages/Dashboard/auth/reset.vue'
import posts from '@/pages/Dashboard/posts.vue'
import users from '@/pages/Dashboard/users.vue'
import component from '@/pages/Dashboard/component.vue'
import profile from '@/pages/Dashboard/profile.vue'
import notFound from '@/pages/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'notFound',
    component: notFound
  },

// client
  {
    path: '/',
    name: 'ClientHome',
    component: ClientHome
  },
  {
    path: '/videos',
    name: 'videos',
    component: videos
  },
  {
    path: '/images',
    name: 'images',
    component: images
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/video_preview/:id',
    name: 'video_preview',
    props:true,
    component: video_preview
  },

  // dashboard
  {
    path: '/Dashboard/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Dashboard/setting',
    name: 'setting',
    component: setting
  },
  {
    path: '/Dashboard/login',
    name: 'login',
    component: login
  },
  {
    path: '/Dashboard/forget',
    name: 'forget',
    component: forget
  },
  {
    path: '/Dashboard/reset',
    name: 'reset',
    component: reset
  },
  {
    path: '/Dashboard/posts',
    name: 'posts',
    component: posts
  },
  {
    path: '/Dashboard/users',
    name: 'users',
    component: users
  },
  {
    path: '/Dashboard/component',
    name: 'component',
    component: component
  },
  {
    path: '/Dashboard/profile',
    name: 'profile',
    component: profile
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
