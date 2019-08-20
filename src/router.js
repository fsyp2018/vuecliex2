import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '/',
          name: 'Carousel',
          component: () => import('./components/Carousel.vue')
        },
        {
          path: 'character',
          name: 'Character',
          component: () => import('./components/Character.vue')
        },
        {
          path: 'storyrole',
          name: 'Storyrole',
          component: () => import('./components/Storyrole.vue')
        },
        {
          path: 'career',
          name: 'Career',
          component: () => import('./components/Career.vue')
        },
        {
          path: 'orderform',
          name: 'OrderForm',
          component: () => import('./components/OrderForm.vue')
        },
        {
          path: 'ordercheckout/:orderId',
          name: 'OrderCheckout',
          component: () => import('./components/OrderCheckout.vue')
        },
        {
          path: 'PurchaseItem',
          name: 'PurchaseItem',
          component: () => import('./components/PurchaseItem.vue')
        }
        // {
        //   path: 'buyitem',
        //   name: 'BuyItem',
        //   component: () => import('./views/BuyItem.vue'),
        //   children: [
        //     {
        //       path: '/',
        //       name: 'Sword',
        //       component: () => import('./components/Sword.vue')
        //     },
        //     {
        //       path: 'shield',
        //       name: 'Shield',
        //       component: () => import('./components/Shield.vue')
        //     },
        //     {
        //       path: 'prop',
        //       name: 'Prop',
        //       component: () => import('./components/Prop.vue')
        //     }
        //   ]
        // }
      ]
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: () => import('./views/Dashboard.vue'),
      children: [
        {
          path: 'products',
          name: 'Products',
          component: () => import('./components/Products.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'orderlist',
          name: 'Orderlist',
          component: () => import('./components/OrderList.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'coupon',
          name: 'Coupon',
          component: () => import('./components/Coupon.vue'),
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
