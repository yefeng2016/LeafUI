import Vue from 'vue';
import button from './button.vue';
import icon from './icon.vue'

Vue.component('le-button', button)
Vue.component('le-icon', icon)
new Vue({
  el: '#app',
  data: {
    message: 'hi'
  }
})