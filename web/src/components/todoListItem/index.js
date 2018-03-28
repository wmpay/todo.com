import template from './todoListItem.html';
import todoService from '../../services/todo';
import moment from 'moment';

export default {
  props: [
    'id',
    'name',
    'description',
    'dueDate',
    'complete',
  ],
  methods: {
    deleteTodo: function () {
      todoService.delete(this.id).then(() => {
        // use event here
        this.$parent.reloadTodos();
      });
    },
    completeTodo: function () {
      todoService.patch(this.id, JSON.stringify({complete: true})).then(() => {
        // use event here
        this.$parent.reloadTodos();
      });
    },
    formatDate: (date) => {
      // this is a hack, format the dates beforehand
      return moment(date).format('MMM DD, YYYY');
    },
  },
  computed: {
    dueSoon: function () {
      // buggy due to timezone?
      const today = moment();
      const dueDate = moment(this.dueDate)
      const diff = dueDate.diff(today, 'days');

      return 0 === diff || diff === 1;
    },
    pastDue: function () {
      const today = moment();
      const dueDate = moment(this.dueDate)
      const diff = dueDate.diff(today, 'days');

      return diff < 0;
    },
  },
  template: template,
};
