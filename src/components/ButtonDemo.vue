<template>
  <div>Button组件</div>
  <h1>示例1</h1>
  <div class="tip">theme属性，可选值:button、link、text，默认不填为button</div>
  <div>
    <Button>你好</Button>
    <Button theme="button">button</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
  </div>
  <h1>示例2</h1>
  <div class="tip">size属性，可选值:big、normal、small，默认不填为normal</div>
  <div>
    <Button size="big">big</Button>
    <Button>normal</Button>
    <Button size="small">small</Button>
  </div>
  <h1>示例3</h1>
  <div class="tip">level属性，可选值:danger、main、normal，默认不填为normal</div>
  <div>
    <p>
      <Button level="danger">danger</Button>
      <Button level="normal">normal</Button>
      <Button level="main">main</Button>
    <p/>
    <p>
      <Button level="danger" theme="link">danger</Button>
      <Button level="normal" theme="link">normal</Button>
      <Button level="main" theme="link">main</Button>
    </p>
    <p>
      <Button level="danger" theme="text">danger</Button>
      <Button level="normal" theme="text">normal</Button>
      <Button level="main" theme="text">main</Button>
    </p>
  </div>
  <h1>示例4</h1>
  <div class="tip">disable属性(值为boolean)，可选值:false、true，默认不填为false</div>
  <div>
    <Button>:disabled:false</Button>
    <Button :disabled="true">:disabled:true</Button>
  </div>
  <h1>示例5</h1>
  <div class="tip">loading属性(值为boolean)，可选值:false、true，默认不填为false</div>
  <div>
    <Button>:loading:false</Button>
    <Button :loading="true">:loading:true</Button>
  </div>
</template>

<script>
import Button from '../lib/Button.vue'

export default {
  components: { Button },
  inheritAttrs: false
}
</script>

<style>
h1, .tip {margin: 10px 0;}
</style>
