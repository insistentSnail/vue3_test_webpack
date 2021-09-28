<template>
  <div class="child">
    <h2>我是子组件</h2>
    {{sum}}
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name:"Child",
  async setup(){
    const sum = ref(0)

    const p = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve({sum})
      },2000)
    })


    // return Promise 需要Suspense和异步组件的配合

    return await p
    // return new Promise((resolve,reject)=>{
    //   setTimeout(()=>{
    //     resolve({sum})
    //   },2000)
    // })
  }
}
</script>

<style>
  .child{
    background: #0f0;
    padding: 10px;
  }
</style>