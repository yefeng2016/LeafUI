<template>
  <button class="le-button" :class="{[`icon-${iconPosition}`]: true}">
    <le-icon v-if="icon" :name="icon"></le-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  props: {
    icon: {},
    iconPosition: {
      default: 'left',
      type: String,
      validator (val) {
        return val === 'left' || val === 'right'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .le-button {
    cursor: pointer;
    height: var(--button-height); border-radius: var(--border-radius); background: var(--button-bg);
    border: 1px solid var(--border-color); padding: 0 1em; font: inherit;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover { border-color: var(--border-color-hover); }
    &:active { background-color: var(--button-active-bg); }
    &:focus { outline: none; }
    > .le-icon { order: 1; margin-right: .2em;}
    > .content { order: 2; }
    &.icon-right {
      > .le-icon { order: 2; margin-right: 0; margin-left: .2em;  }
      > .content { order: 1; }
    }
  }
</style>
