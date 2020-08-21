/*
入口js
*/
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store'
// import './mock/mockServer' //加载mockserver
new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
})