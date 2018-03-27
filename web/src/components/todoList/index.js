import template from './todoList.html';
import todoService from '../../services/todo';

export default {
  asyncData: {
    todos() {
      return new Promise((resolve) => {
        resolve(todoService.get());
      });
    },
  },
  template: template,
};
