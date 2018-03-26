import template from './todoList.html';
import todoService from '../../services/todo';

export default {
  data: () => {
    // todoService.get().then((data) => {
    //   data.todos = todos;
    // })
    return {
      todos: [{
        id: 1,
        name: 'cool todo',
        description: 'code',
        dueDate: 'right now',
      },
      {
        id: 2,
        name: 'another one',
        description: 'more coding',
        due_date: 'now',
      }],
    };
  },
  template: template,
};
