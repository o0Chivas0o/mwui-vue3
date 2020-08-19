<template>
  <div :size="size">
    <button v-bind="rest">
      <slot/>
    </button>
  </div>

</template>

<script lang="ts">
import {ref} from 'vue'

export default {
  name: 'MWButton',
  inheritAttrs: false,
  props: {
    size: String,
    disabled: Boolean
  },
  setup(props, context) {
    const {size, ...rest} = context.attrs
    return {size, rest}
  }
}
</script>

<style lang="scss" scoped>

</style>
