<template>
  <!-- vue3可以没有根标签 -->
  <h1>{{person.name}}</h1>
  <h2>{{person.obj.a}}</h2>
  <h2 v-show="person.age">年龄：{{person.age}}</h2>
  <h2 v-show="person.sex">性别：{{person.sex}}</h2>
  <h2>爱好：{{person.hobby}}</h2>
  <br/>
  <br/>
  <button @click="change">改变</button>
  <br/>
  <br/>
  <button @click="add">添加属性</button>
  <br/>
  <br/>
  <button @click="remove">删除属性</button>
</template>

<script>
import {reactive} from "vue"
export default {
  name: 'App',
  setup(){

    // reactive用来定义数组和对象的响应式数据

    let person = reactive({
      name:"刘鑫",
      age:25,
      obj:{
        a:999
      },
      hobby:['唱','跳','rap']
    })

    function change() {
      person.name = "liuxin"
      person.obj.a = 666
      person.hobby[0] = '起飞'
    }

    // vue2中 进行对象属性的添加、删除、以及数组直接通过下标修改数据 存在数据修改，视图未更新问题  得用$set解决
    // vue3中 可直接进行修改，因为reactive用的是es6 的proxy代理
    function add() {
      person.sex = "男"
    }

    function remove() {
      delete person.age
    }

    return {
      person,
      change,
      add,
      remove
    }
  }
}
</script>

<style>

</style>
