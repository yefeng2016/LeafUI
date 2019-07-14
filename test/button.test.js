const expect = chai.expect
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
  it('存在', () => {
    expect(Button).to.be.ok
  })
  it('存在icon，存在settings，显示为#icon-settings', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings' // 设置为settings
      }
    })
    vm.$mount() // 不挂载，直接放在内存中
    // 测试svg属性是否正确
    let useElement = vm.$el.querySelector('use') // 获取use标签
    let href = useElement.getAttribute('xlink:href') // 获取xlink:href属性
    expect(href).to.eq('#icon-settings') // 判断是否正确的icon属性
    vm.$el.remove()
    vm.$destroy()
  })
  it('同时存在settings和loading，显示为loading状态', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        loading: true,
        icon: 'settings'
      }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loading')
    vm.$el.remove()
    vm.$destroy()
  })
  it('判断iconPosition 的order的默认位置 1', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings'
      }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
    div.remove()
  })
  it('修改iconPosition位置为right，svg的order为2', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: "settings",
        iconPosition: 'right'
      }
    })
    vm.$mount(div)
    const svg = vm.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.equal('2')
    vm.$el.remove()
    vm.$destroy()
    div.remove()
  })
  it('点击button，触发click事件,执行回调', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings'
      }
    })
    vm.$mount()
    const callback = sinon.fake() // 函数记录是否被调用
    vm.$on('click', callback)
    vm.$el.click()
    // callback.should.have.been.called
    expect(callback).to.have.been.called
    vm.$el.remove()
    vm.$destroy()
  })
})