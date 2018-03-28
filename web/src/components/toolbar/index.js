import template from './toolbar.html';
import todoEditor from '../todoEditor/index';

export default {
  data: () => {
    return {
      filterState: {
        dueSoon: false,
        pastDue: false,
      },
    };
  },
  methods: {
    createNewTodo: function () {
      this.$modal.show(todoEditor, {
      }, {
        adaptive: true,
        minHeight: 450,
        name: 'todoEditor',
      });
    },
    toggleFilterState: function(filter) {
      Object.keys(this.filterState).forEach((key) => {
        if (key !== filter) {
          this.filterState[key] = false;
        }
      });
      this.filterState[filter] = !this.filterState[filter];
      this.$parent.reloadTodos(this.filterState);
    },
  },
  template: template,
};
