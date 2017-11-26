import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import login from '@/view/login'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)
var router = new Router()

router.beforeEach((to,from,next)=>{
  if(to.path=='/login'){
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if(!user&&to.path!='/login'){
    next({path:'/login'})
  }else{
    next()
  }
})
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
   {
    path: '/layout',
    component: layout
   }
  ]
})
