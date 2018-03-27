import Vue from 'vue';

import appComponent from './components/app/index';
import todoList from './components/todoList/index';
import todoListItem from './components/todoListItem/index';
import toolbar from './components/toolbar/index';
import VModal from 'vue-js-modal';
import { AsyncDataPlugin } from 'vue-async-data-2';

Vue.component('app-component', appComponent);
Vue.component('todo-list', todoList);
Vue.component('todo-list-item', todoListItem);
Vue.component('toolbar', toolbar);
Vue.use(VModal, {dynamic: true});
Vue.use(AsyncDataPlugin);

const app = new Vue({
  el: '#app',
});
