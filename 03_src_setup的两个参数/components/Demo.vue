<template>
  <!-- vue3可以没有根标签 -->
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <slot name="header"></slot>
  <button @click="submit">点我</button>
</template>

<script>
import {reactive} from "vue"
export default {
  name: 'Demo',
  props:['msg','school'],
  emits:['show'],
  beforeCreate(){
    console.log('beforeCreate')
  },
  setup(props,context){
    console.log('setup')
    console.log(props,context) //从组件外部传过来的参数
    console.log(context.attrs) //从组件外部传过来但是没有在props接收的参数、相当于vue2 的this.$attrs
    console.log(context.slots) //收到的插槽内容、相当于vue2 的this.$slots
    // console.log(context.emit) //分发自定义事件的函数 相当于vue2 的this.$emit
    let person = reactive({
      name:"刘鑫",
      age:25
    })

    function submit() {
      context.emit("show",123456789)
    }

    return {
      person,
      submit
    }
  }
}
</script>

