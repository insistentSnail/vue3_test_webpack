<template>
  <!-- vue3可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h2>姓：<input type="text" v-model="person.firstName"> </h2>
  <h2>名：<input type="text" v-model="person.lastName"> </h2>
  <h2>全名：{{person.fullName}}</h2>
  <h2>全名：<input type="text" v-model="person.fullName"> </h2>
</template>

<script>
import {reactive,computed} from "vue"
export default {
  name: 'Demo',
  setup(props,context){

    let person = reactive({
      firstName:"刘",
      lastName:"鑫"
    })

    // 简写形式  默认只有get
    // person.fullName = computed(()=>{
    //   return person.firstName + '-' + person.lastName
    // })

    // 完整写法
    person.fullName = computed({
      get(){
         return person.firstName + '-' + person.lastName
      },
      set(val){
        const arr = val.split("-")
        person.firstName = arr[0]
        person.lastName = arr[1]
      }
    })

    return {
      person
    }
  }
}
</script>

