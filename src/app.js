import Vue from 'vue';
import Button from './button.vue';
import ButtonGroup from './button-group.vue';
import Icon from './icon.vue'

Vue.component('le-button', Button)
Vue.component('le-button-group', ButtonGroup)
Vue.component('le-icon', Icon)
// //
// Vue.component('le-icon2', {
//   name: 'le-icon2',
//   data() {
//     return {
//       aa: 'dsadsadsa'
//     }
//   },
//   template: '<div>{{aa}}</div>'
// })
new Vue({
  el: '#app',
  data: {
    message: 'hi',
    loading1: false,
  }
})

// 单元测试
// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)
// const expect = chai.expect
// try {

//   // 用例1 ： 存在icon，存在settings，显示为#icon-settings
//   {
//     // 动态实例化一个button
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'settings' // 设置为settings
//       }
//     })
//     vm.$mount() // 不挂载，直接放在内存中
//     // 测试svg属性是否正确
//     let useElement = vm.$el.querySelector('use') // 获取use标签
//     let href = useElement.getAttribute('xlink:href') // 获取xlink:href属性
//     expect(href).to.eq('#icon-settings') // 判断是否正确的icon属性
//     vm.$el.remove()
//     vm.$destroy()
//   }
  
//   // 用例2 ： 同时存在settings和loading，显示为loading状态
//   {
//     // 动态实例化一个button
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'settings', // 设置为settings
//         loading: true
//       }
//     })
//     vm.$mount() // 不挂载，直接放在内存中
//     // 测试svg属性是否正确
//     let useElement = vm.$el.querySelector('use') // 获取use标签
//     let href = useElement.getAttribute('xlink:href') // 获取xlink:href属性
//     expect(href).to.eq('#icon-loading') // 同时存在settings和loading，显示为loading
//     vm.$el.remove()
//     vm.$destroy()
//   }
  
//   // 用例2 ： 判断iconPosition 的order的默认位置 1
//   {
//     // 动态实例化一个button
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'settings', // 设置为settings
//       }
//     })
//     vm.$mount(div)
//     // 获取svg的所有css属性getComputedStyle方法
//     let svg = vm.$el.querySelector('svg')
//     let { order } = window.getComputedStyle(svg)
//     expect(order).to.eq('1')
//     vm.$el.remove()
//     vm.$destroy()
//     div.remove()
//   }
  
//   // 用例2 ： 判断iconPosition 的order的位置2
//   {
//     // 动态实例化一个button
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         iconPosition: 'right',
//         icon: 'settings', // 设置为settings
//       }
//     })
//     vm.$mount(div)
//     // 测试svg属性是否正确
//     let svg = vm.$el.querySelector('svg')
//     let { order } = window.getComputedStyle(svg)
//     expect(order).to.eq('2') // 同时存在settings和loading，显示为loading
//     vm.$el.remove()
//     vm.$destroy()
//     div.remove()
//   }
  
//   // 使用chai-spies库监听事件
//   // 测试click事件
//   {
//     // 动态实例化一个button
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'settings', // 设置为settings
//       }
//     })
//     vm.$mount()
//     // 监听spy函数
//     const spy = chai.spy(function (){})
//     vm.$on('click', spy)
//     vm.$el.click()
//     expect(spy).has.been.called()
//     vm.$el.remove()
//     vm.$destroy()
//   }
// } catch (error) {
//   window.errors = [error]
// } finally {
//   window.errors && window.errors.forEach(err => {
//     console.error(err)
//   });
// }

