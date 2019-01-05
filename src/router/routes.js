import Home from '@/pages/Home'
import Mall from '@/pages/Mall'
import Cart from '@/pages/Cart'
import Details from '@/pages/Details'
import Mine from '@/pages/Mine'

import Tabbar from '@/components/Tabbar'

const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      isNav: false,
      tabbar: Tabbar,
      icon: '&#xe62e'
    }
  },
  {
    path: '/home',
    meta: {
      title: '首页',
      isNav: true,
      icon: '&#xe62e'
    },
    components: {
      default: Home,
      tabbar: Tabbar
    }
  },
  {
    path: '/mall',
    meta: {
      title: '商城',
      isNav: true,
      icon: '&#xe62e;'
    },
    components: {
      default: Mall,
      tabbar: Tabbar
    }
  },
  {
    path: '/mine',
    meta: {
      title: '我的',
      isNav: true,
      icon: '&#xe632;'
    },
    components: {
      default: Mine,
      tabbar: Tabbar
    }
  },
  {
    path: '/cart',
    meta: {
      title: '购物车',
      isNav: true,
      icon: '&#xe639;'
    },
    components: {
      default: Cart,
      tabbar: Tabbar
    }
  },
  {
    path: '/details/:id',
    meta: {
      isNav: false
    },
    components: {
      default: Details
    }
  }
]

export default routes
