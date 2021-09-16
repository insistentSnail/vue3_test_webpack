<template>
<Demo msg="你好呀" school="atguigu" @show="showMsg">
  <template v-slot:header>
    <span>123</span>
  </template>
</Demo>
</template>

<script>
import Demo from '@/components/Demo'
export default {
  name: 'App',
  components:{
    Demo
  },
  setup(){
    function showMsg(val) {
      alert(`从子组件传递的${val}`)
    }
    return {
      showMsg
    }
  }
}
</script>

