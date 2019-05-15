<template>
  <svg class="le-icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style lang="scss" scoped>
  .le-icon {
    height: 1em;
    width: 1em;
  }
</style>

