import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/Products'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
