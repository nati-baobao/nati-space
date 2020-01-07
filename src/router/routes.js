
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MyLayout.vue'),
    children: [
      { path: 'base', name:"base" ,component: () => import(/* webpackChunkName: "nati" */'src/pages/base/index.vue') },
      { path: 'js', name:"js" ,component: () => import(/* webpackChunkName: "nati" */'src/pages/js/index.vue') },
      { path: 'vue', name:"vue" ,component: () => import(/* webpackChunkName: "nati" */'src/pages/vue/index.vue') },
      { path: 'other', name:"other" ,component: () => import(/* webpackChunkName: "nati" */'src/pages/other/index.vue') },
   
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('src/pages/error/Error404.vue')
  })
}

export default routes
