<template>
  <div class="son">
    <h2>我是孙组件{{name}}----{{price}}</h2>

    <teleport to='body'>
      <!-- <div class="mask"> -->
        <button @click="name+='~'">改变名字</button>
      <!-- </div> -->

    </teleport>
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
  /* .mask{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
  } */
</style>