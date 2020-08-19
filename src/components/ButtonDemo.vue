<template>
  <div>Button组件</div>
  <h1>示例1</h1>
  <div>
    <Button @click="onClick" @focus="onClick" @mouseover="onClick" size="small">你好</Button>
  </div>
</template>

<script>
import Button from '../lib/Button.vue'

export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log('hi')
    }
    return { onClick }
  }
}
</script>

<style lang="scss" scoped>

</style>
