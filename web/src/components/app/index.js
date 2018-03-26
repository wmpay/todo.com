import Vue from 'vue';
import template from './app.html';

const appComponent = {
  data: () => {
    return {
      message: 'Hello World',
    };
  },
  template: template,
};

export { appComponent as default };
