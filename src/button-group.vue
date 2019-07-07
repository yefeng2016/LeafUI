<template>
  <div class="l-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted () {
    // 检测子元素是是否为l-button，否则警告
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn('l-button-group的子元素需要为l-button, 你添加的是' + name + '元素')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .l-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .le-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:first-of-type{
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-of-type {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>

