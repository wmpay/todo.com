import Vue from 'vue';
import template from './toolbar.html';
import todoService from '../../services/todo';
import todoEditorModalTemplate from './todoEditorModal.html';

export default {
  data: () => {
    return {
    };
  },
  methods: {
    createNewTodo: function () {
      this.$modal.show({
        template: todoEditorModalTemplate,
      });
    },
  },
  template: template,
};
