<template>
  <!-- vue3可以没有根标签 -->
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>工资：{{job.j1.salary}}K</h2>
  <button @click="name+='~'">修改名字</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import {reactive, readonly, shallowReadonly, toRefs,toRaw, markRaw} from "vue"
export default {
  name: 'Demo',
  setup(){
    let person = reactive({
      name:"张三",
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    // readonly后就不行修改响应式数据了
    // person = readonly(person)

    // shallowReadonly后第一层不能修改，salary可以修改
    // person = shallowReadonly(person)


    // toRaw将reactive生成的响应式对象转换为普通对象
    function change() {
      const p = toRaw(person)
      console.log(p)
    }

    // markRaw标记一个对象，使其永远不会成为响应式
    function addCar() {
      let car = {name:"奔驰",prcie:"40"}
      person.car = markRaw(car)
    }

    return {
      ...toRefs(person),
      change,
      addCar
    }
  }
}
</script>

