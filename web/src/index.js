import Vue from 'vue';

import appComponent from './components/app/index';
import todoList from './components/todoList/index';
import todoListItem from './components/todoListItem/index';

Vue.component('app-component', appComponent);
Vue.component('todo-list', todoList);
Vue.component('todo-list-item', todoListItem);


const app = new Vue({
  el: '#app',
});