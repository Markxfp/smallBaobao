import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/msite.vue'
import Search from '../pages/Search/search.vue'
import Order from '../pages/Order/order.vue'
import Profile from '../pages/Profile/profile.vue'
import Login from '../pages/Login/Login.vue'
Vue.use(VueRouter)

export default new VueRouter({
    linkActiveClass: 'footer',
    mode: 'history',
    routes: [{
        name: 'msite',
        path: '/msite',
        meta: {
            showFooter: true
        },
        component: Msite
    }, {
        name: 'search',
        path: '/search',
        meta: {
            showFooter: true
        },
        component: Search
    }, {
        name: 'order',
        path: '/order',
        meta: {
            showFooter: true
        },
        component: Order
    }, {
        name: 'profile',
        path: '/profile',
        meta: {
            showFooter: true
        },
        component: Profile
    }, {
        name: 'login',
        path: '/login',
        component: Login
    }, {
        name: 'home',
        path: '/',
        redirect: Msite

    }]
})