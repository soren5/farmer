
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('api-form', require('./components/ApiForm.vue'));
Vue.component('search-box', require('./components/SearchBox.vue'));
Vue.component('stats-panel', require('./components/StatsPanel.vue'));
Vue.component('chart-panel', require('./components/ChartPanel.vue'));
Vue.component('live-counter-panel', require('./components/LiveCounterPanel.vue'));

new Vue({
    el: '#app'
});