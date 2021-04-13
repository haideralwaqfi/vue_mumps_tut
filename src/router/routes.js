
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/example1', component: () => import('pages/Example1.vue') },
      { path: '/dashboard', component: () => import('pages/Dashboard.vue') },
      { path: '/donorregister', component: () => import('pages/Donorregister.vue') },
      { path: '/donorlist', component: () => import('pages/Donorlist.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
