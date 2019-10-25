import store from '../store/index'
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('components/Home.vue'),
        beforeEnter (to, from, next) {
          store.dispatch('auth/authenticate').then(() => {
            next({ name: 'chat' })
          }).catch(() => {
            next()
          })
        }
      },
      {
        path: '/signUp',
        name: 'signUp',
        component: () => import('components/SignUp.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('components/Login.vue')
      },
      {
        path: '/chat',
        name: 'chat',
        component: () => import('components/Chat/Chat.vue'),
        beforeEnter (to, from, next) {
          store.dispatch('auth/authenticate').then(() => {
            next()
          }).catch(() => {
            next({ name: 'home' })
          })
        }
      }
    ]
  }
]
// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
