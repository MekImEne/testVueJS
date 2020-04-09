import Vue from "vue";
import App from "./App.vue";
import {
    BootstrapVue,
    IconsPlugin
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import './assets/sass/index.sass';

//import VueRouter from "vue-router";
//import Vuex from "vuex";
//import "es6-promise/auto";
import store from "./store/index";
import router from "./router";
//Vue.use(VueRouter);
//Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false

new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
});