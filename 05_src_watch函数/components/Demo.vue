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
import {ref,watch,reactive} from "vue"
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

    // wacth监听一个ref数据
    watch(count,(newVal,oldVal)=>{
      console.log(newVal,oldVal)
    },{immediate:true})

    // watch监听多个ref数据
    watch([count,msg],(newVal,oldVal)=>{
      console.log(newVal,oldVal)
    },{immediate:true})

    /*watch监听reactive定义的全部属性
      1.注意：此处无法正确获取oldVal
      2.注意：强制开启了深度监视（deep配置无效）
    */  
    watch(person,(newVal,oldVal)=>{
      console.log(newVal,oldVal)
    })

    // watch监听reactive定义的某个属性
    watch(()=>person.age,(newVal,oldVal)=>{
      console.log(newVal,oldVal)
    })

    // watch监听reactive定义的某些属性
    watch([()=>person.age,()=>person.name],(newVal,oldVal)=>{
      console.log(newVal,oldVal)
    })

    //watch监听reactive定义的某个属性依然是一个对象，要开启深度监视  这里也拿不到oldVal
    watch(()=>person.job,(newVal,oldVal)=>{
       console.log(newVal,oldVal)
    },{deep:true})

    return {
      count,
      msg,
      person
    }
  }
}
</script>

