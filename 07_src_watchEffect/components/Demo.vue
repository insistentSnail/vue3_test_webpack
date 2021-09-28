<template>
  <!-- vue3可以没有根标签 -->
  <h2>当前求和为：{{count}}</h2>
  <button @click="count++">点我+1</button>
  <hr>
  <h2>当前信息为：{{msg}}</h2>
  <button @click="msg+='!'">修改信息</button>
  <hr>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>工资：{{person.job.j1.salary}}K</h2>
  <button @click="person.name+='~'">修改名字</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import {ref,reactive, watchEffect} from "vue"
export default {
  name: 'Demo',
  setup(){
    const count = ref(0)
    const msg = ref("你好呀")
    const person = reactive({
      name:"张三",
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    // watchEffect 里面用到哪个属性就监听哪个属性
    watchEffect(()=>{
      const x = person.job.j1.salary
      console.log("监听工资变化")
    })


    return {
      count,
      msg,
      person
    }
  }
}
</script>

