<template>
  <input type="text" v-model="keyWord">
  <h2>{{keyWord}}</h2>
</template>

<script>
import {customRef, ref} from 'vue'
export default {
  name: 'App',
  setup(){
    function myRef(value,delay){
      let timer = null
      return customRef((track,trigger)=>{
        return {
          set(newVal){
            clearInterval(timer)
            timer = setTimeout(()=>{
              value = newVal
              trigger()  //通知vue去重新解析模板
            },delay)
          },
          get(){
            track()   //通知vue去追踪value的变化
            return value
          }
        }
      })
    }

    const keyWord = myRef("123",500)
    // const keyWord = ref("123")
    return {keyWord}
  }
}
</script>

