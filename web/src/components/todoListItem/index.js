import template from './todoListItem.html';
import todoService from '../../services/todo';

export default {
  props: [
    'id',
    'name',
    'description',
    'dueDate',
  ],
  methods: {
  	deleteTodo: function () {
  		todoService.delete(this.id).then(() => {
  			this.$parent.reloadTodos();
  		});
  	}
  },
  template: template,
};
