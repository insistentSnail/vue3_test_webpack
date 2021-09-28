<template>
  <!-- vue3可以没有根标签 -->
  <h2>{{person}}</h2>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>工资：{{salary}}K</h2>
  <button @click="name+='~'">修改名字</button>
  <button @click="age++">修改年龄</button>
  <button @click="salary++">涨薪</button>
</template>

<script>
import {reactive, toRef, toRefs} from "vue"
export default {
  name: 'Demo',
  setup(){
    const person = reactive({
      name:"张三",
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    // toRef的指向还是person    直接person.name是个字符串，不是响应式数据   直接name:ref(person.name)则改变name ,person里的name并不会改变

    // toRefs只能展开第一层
    return {
      person,
      // name:toRef(person,"name"),
      // age:toRef(person,"age"),
      salary:toRef(person.job.j1,"salary"),
      ...toRefs(person)
    }
  }
}
</script>

