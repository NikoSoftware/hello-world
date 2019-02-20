// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {post, fetch, patch, put} from './net/http'
import { Icon } from 'ant-design-vue';

Vue.config.productionTip = false

Vue.use(Icon);
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
