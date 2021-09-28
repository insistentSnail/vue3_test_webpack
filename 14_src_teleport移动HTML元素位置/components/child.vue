<template>
  <div class="child">
    <h2>我是子组件</h2>
    <son/>
  </div>
</template>

<script>
import son from '@/components/son'
export default {
  name:"Child",
  components:{
    son
  }
}
</script>

<style>
  .child{
    background: #0f0;
    padding: 10px;
  }
</style>