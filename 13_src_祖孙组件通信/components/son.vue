<template>
  <div class="son">
    <h2>我是孙组件{{name}}----{{price}}</h2>
    <button @click="name+='~'">改变名字</button>
  </div>
</template>

<script>
import { inject, toRefs } from 'vue'
export default {
  name:"Son",
  setup(){
    const car = inject('car')
    return {...toRefs(car)}
  }
}
</script>

<style>
  .son{
    background: #00f;
    padding: 10px;
  }
</style>