import template from './toolbar.html';
import todoEditor from '../todoEditor/index';

export default {
  methods: {
    createNewTodo: function () {
      this.$modal.show(todoEditor, {
      }, {
        adaptive: true,
        minHeight: 450,
      });
    },
  },
  template: template,
};
