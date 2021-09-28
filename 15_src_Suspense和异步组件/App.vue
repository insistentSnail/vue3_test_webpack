<template>
  <div class="app">
    <h2>我是祖组件</h2>
    <Suspense>
      <template v-slot:default>
        <child/>
      </template>
      <template v-slot:fallback>
        <h2>正在加载...</h2>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
// import child from './components/child.vue'  //静态组件
const child = defineAsyncComponent(()=>import('./components/child.vue')) //异步组件
export default {
  name: 'App',
  components:{
    child
  }
}
</script>
<style>
  .app{
    background: #f00;
    padding: 10px;
  }
</style>

