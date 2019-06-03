import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import pin2Directive from './shared/pin2-directive.js';
import currencyFilter from './shared/currency-filter';
import store from './store';

Vue.config.productionTip = false;
Vue.directive('pin2', pin2Directive); // make it globally available in all components
Vue.filter('currency', currencyFilter);

new Vue({
  render: h => h(App),
  router,
  store,

}).$mount('#app');
