import template from './todoListItem.html';

export default {
  props: [
    'id',
    'name',
    'description',
    'dueDate',
  ],
  template: template,
};
