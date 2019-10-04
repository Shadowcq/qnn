import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Old from '@/views/old_new'
import Hotsell from '@/views/hotsell'
import Detail from '@/views/detail'
import Parts from '@/views/parts'
import Login from '@/views/login'
import Register from '@/views/register'
import Cart from '@/views/cart'
import Login1 from '@/components/login/login1'
import Login2 from '@/components/login/login2'

import Sell1 from '@/components/hotsell/sell1'
import Sell2 from '@/components/hotsell/sell2'
import Sell3 from '@/components/hotsell/sell3'
import Sell4 from '@/components/hotsell/sell4'

Vue.use(Router)

let router=  new Router({
  scrollBehavior(to,from,savedPosition){
    return{x:0,y:0}
  },
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        isShow1: true,
        topShow: true,
        top1Show: true
      }
    },
    {
      path: '/old',
      name: 'Old',
      component: Old,
      meta: {
        isShow1: false,
        topShow: false,
        top1Show: true
      }
    },
    {
      path: '/detail/:gid',
      name: 'Detail',
      component: Detail,
      meta: {
        isShow1: false,
        topShow: true,
        top1Show: true
      },
      children: [
        {
          path: '',
          component: Sell1,
          meta: {
        isShow1: false,
        topShow: false,
        top1Show: true
      },
        },
        {
          path: 'sell2',
          component: Sell2,
          meta: {
        isShow1: false,
        topShow: false,
        top1Show: true
      },
        },
        {
          path: 'sell3',
          component: Sell3,
          meta: {
        isShow1: false,
        topShow: false,
        top1Show: true
      },
        },
        {
          path: 'sell4',
          component: Sell4,
          meta: {
        isShow1: false,
        topShow: false,
        top1Show: true
      },
        }
       ]
    },
    {
    path: '/hotsell/',
    name: 'Hotsell',
    component: Hotsell,
    meta: {
      isShow1: false,
      topShow: true,
      top1Show: true
    },
      children: [
        {
          path: '',
          component: Sell1,
          meta: {
        isShow1: false,
        topShow: false,
        top1Show: true
      },
        },
        {
          path: 'sell2',
          component: Sell2,
          meta: {
        isShow1: false,
        topShow: false,
        top1Show: true
      },
        },
        {
          path: 'sell3',
          component: Sell3,
          meta: {
        isShow1: false,
        topShow: false,
        top1Show: true
      },
        },
        {
          path: 'sell4',
          component: Sell4,
          meta: {
        isShow1: false,
        topShow: false,
        top1Show: true
      },
        }
       ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        isShow1: false,
        topShow: false,
        top1Show: true,
        login:true,
      }
    },
    {
      path: '/parts',
      name: 'Parts',
      component: Parts,
      meta: {
        isShow1: false,
        topShow: false,
        top1Show: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        topShow: false,
        top1Show: false
      },
       children: [
        {
          path: '',
          component: Login1,
          meta:{
            index:0,
          }
        },
        {
          path: 'login2',
          component: Login2,
          meta:{
            index:1,
          }
        }
       ]
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        topShow: false,
        top1Show: false
      }
    },
  ]
})
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};
//进入d导航之前
router.beforeEach((to,from,next)=>{
  if(to.meta.login){
    let info=router.app.$local.fetch("user").userName;
    if(info){
      next();
    }else{
      alert("请先登录")
      router.push("/login");
    }
  }else{
    next();
  }
})
export default router