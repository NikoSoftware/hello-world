// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {post, fetch, patch, put} from './net/http'
import  Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.use(Antd);
Vue.prototype.$post = post
Vue.prototype.$fetch = fetch
Vue.prototype.$patch = patch
Vue.prototype.$put = put

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
