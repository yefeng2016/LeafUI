<template>
  <button class="l-button">按钮</button>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .l-button {
    height: var(--button-height);
    border-radius: var(--border-radius);
    background: var(--button-bg);
    border: 1px solid var(--border-color);
    padding: 0 1em;
    font: inherit;
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background-color: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
  }
</style>
