<template>
  <button class="le-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <le-icon v-if="loading" class="loading icon" name="loading"></le-icon>
    <le-icon class="icon" v-if="icon && !loading" :name="icon"></le-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from './icon'
export default {
  components: {
    'le-icon': Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
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
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .le-button {
    cursor: pointer;
    height: var(--button-height); border-radius: var(--border-radius); background: var(--button-bg);
    border: 1px solid var(--border-color); padding: 0 1em; font: inherit;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    line-height: 1;
    &:hover { border-color: var(--border-color-hover); }
    &:active { background-color: var(--button-active-bg); }
    &:focus { outline: none; }
    > .icon { order: 1; margin-right: .2em;}
    > .content { order: 2; }
    &.icon-right {
      > .icon { order: 2; margin-right: 0; margin-left: .2em;  }
      > .content { order: 1; }
    }
    > .loading {
      animation: spin 2s linear infinite;
    }
  }
</style>
