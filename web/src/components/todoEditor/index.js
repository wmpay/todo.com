import template from './todoEditor.html';
import todoService from '../../services/todo';

export default {
  data: () => {
    return {
      todo: {
        name: null,
        description: null,
        dueDate: null,
      },
    };
  },
  methods: {
    saveTodo: function() {
      const payload = JSON.stringify(this.$data.todo); 
    },
  },
  template: template,
};
