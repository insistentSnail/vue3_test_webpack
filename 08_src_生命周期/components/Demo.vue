<template>
  <!-- vue3可以没有根标签 -->
  <h2>当前求和为：{{count}}</h2>
  <button @click="count++">点我+1</button>
</template>

<script>
import {onBeforeMount, onBeforeUpdate, onMounted, onUpdated, onBeforeUnmount,onUnmounted,ref} from "vue"
export default {
  name: 'Demo',
  // setup 相当于 beforeCreate + created
  setup(){
    const count = ref(0)
    onBeforeMount(()=>{
      console.log("---onBeforeMount---")
    })
    onMounted(()=>{
      console.log("---onMounted---")
    })
    onBeforeUpdate(()=>{
      console.log("---onBeforeUpdate---")
    })
    onUpdated(()=>{
      console.log("---onUpdated---")
    })
    onBeforeUnmount(() => {
      console.log("---onBeforeUnmount---")     
    })
    onUnmounted(() => {
      console.log("---onUnmounted---")    
    })

    return {
      count
    }
  }
}
</script>

