/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue';
import router from "./routes/router";
Vue.use(ElementUI)
// Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
// Vue.component("app", require("./App.vue"));
// Vue.component('example-component', require('./components/ExampleComponent.vue'));
// Vue.component('topbar', require('./components/layouts/TopBar.vue'));
// Vue.component('footerbar', require('./components/layouts/FooterBar.vue'));
// import Header from './components/layouts/Header.vue'
// import App from './App.vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);

const app = new Vue({
    el: "#app",
    router,
    render: h => h(App),
});
