import Vue from 'vue';
import button from './button.vue';

Vue.component('l-button', button)
new Vue({
  el: '#app',
  data: {
    message: 'hi'
  }
})