<template>
  <div class="app">
    <h2>我是祖组件{{name}}---{{price}}</h2>
    <child/>
  </div>
</template>

<script>
import { toRefs,reactive,provide } from 'vue'
import child from './components/child.vue'
export default {
  name: 'App',
  components:{
    child
  },
  setup(){
    const obj = reactive({
      name:"奥迪",
      price:40
    })

    provide('car',obj)

    return {
      ...toRefs(obj)
    }
  }
}
</script>
<style>
  .app{
    background: #f00;
    padding: 10px;
  }
</style>

