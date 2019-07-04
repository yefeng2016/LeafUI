import Vue from 'vue';
import Button from './button.vue';
import ButtonGroup from './button-group.vue';
import Icon from './icon.vue'

Vue.component('le-button', Button)
Vue.component('le-button-group', ButtonGroup)
Vue.component('le-icon', Icon)
new Vue({
  el: '#app',
  data: {
    message: 'hi',
    loading1: false,
  }
})

// 