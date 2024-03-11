import CounterPage from '@/pages/CounterPage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import MatchingTestPage from '@/pages/MatchingTestPage.vue'
import { userState } from '@/states/user.js'

const routes = [
  {
    path: '/',
    meta: {
      auth: false,
    },
    component: CounterPage,
  },
  {
    path: '/about',
    meta: {
      auth: false,
    },
    component: AboutPage,
  },
  {
    path: '/page/:id',
    meta: {
      auth: true,
    },
    component: MatchingTestPage,
  },
  {
    path: '/sign-in',
    meta: {
      auth: false,
    },
    component: AboutPage,
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
});



router.beforeEach(async (to) => {
  if (to.meta.auth && !userState.getIsSignIn.value) {
    userState.signIn();
    if (!userState.getIsSignIn.value) {
      return '/sign-in'
    }
  }
})
