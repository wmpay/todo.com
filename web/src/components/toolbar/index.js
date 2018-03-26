import Vue from 'vue';
import template from './toolbar.html';
import todoService from '../../services/todo';

export default {
  data: () => {
    return {
      showTodoEditor: false,
    };
  },
  methods: {
    createNewTodo: function () {
      console.log('button pressed');
      console.log(this.$data.showTodoEditor);
    },
  },
  template: template,
};
