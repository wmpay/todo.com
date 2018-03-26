import Vue from 'vue';

import appComponent from './components/app/index';

Vue.component('app-component', appComponent);

const app = new Vue({
  el: '#app',
});