
require('./bootstrap');


import Vue from 'vue'
import router from './router'
import VueRouter from 'vue-router'
import Vuetify from './vuetify';

Vue.use(VueRouter);
Vue.use(Vuetify);

window.Vue = Vue;


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('User', require('./components/User.vue'));


const app = new Vue({
    el: '#app',
    router,
});
app.$mount('#app')