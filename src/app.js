import Vue from 'vue';
import button from './button.vue';
import icon from './icon.vue'
import carousel from './carousel'
import carouselItem from './carousel-item'

Vue.component('le-button', button)
Vue.component('le-icon', icon)
Vue.component('le-carousel', carousel)
Vue.component('le-carousel-item', carouselItem)
new Vue({
  el: '#app',
  data: {
    message: 'hi',
    loading1: false,
  }
})