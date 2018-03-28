import template from './todoList.html';
import todoService from '../../services/todo';

export default {
  asyncData: {
    todos() {
      return new Promise((resolve) => {
        resolve(todoService.get(this.filter));
      });
    },
  },
  methods: {
    reloadTodos: function(filter) {
      this.filter = filter;
      this.asyncReload('todos');
    },
  },
  template: template,
};
