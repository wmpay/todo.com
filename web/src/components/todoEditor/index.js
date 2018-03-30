import template from './todoEditor.html';
import todoService from '../../services/todo';

export default {
  data: () => {
    return {
      todo: {
        name: null,
        description: null,
        dueDate: null,
        compelete: false,
      },
    };
  },
  methods: {
    saveTodo: function() {
      const payload = JSON.stringify(this.$data.todo);
      todoService.post(payload).then(() => {
        this.$modal.hide('todoEditor');
        // this is a hack, use events instead?
        this.$parent.$parent.$parent.$children[0].reloadTodos();
      });
    },
  },
  template: template,
};
