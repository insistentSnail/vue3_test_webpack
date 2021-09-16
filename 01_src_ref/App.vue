<template>
  <!-- vue3可以没有根标签 -->
  <h1>{{name}}</h1>
  <h2>{{count}}</h2>
  <h2>性别：{{obj.type}}</h2>
  <input type="text" v-model.number="val">
  <br/>
  <br/>
  <button @click="add">+{{val}}</button>
  <br/>
  <br/>
  <button @click="change">改变性别</button>
</template>

<script>
import {ref} from "vue"
export default {
  name: 'App',
  setup(){

    // ref用于定义基本数据类型的响应式数据  也可以定义数据和对象 内部会调用reactive

    let name = ref("刘鑫")
    let count = ref(0)
    let val = ref(null)
    let obj = ref({
      type:"男"
    })

    function add() {
      count.value += val.value
    }

    function change() {
      obj.value.type = "女"
    }
    return {
      name,
      count,
      val,
      add,
      obj,
      change
    }
  }
}
</script>

<style>

</style>
