<template>
  <button @click="isShow = !isShow">显示/隐藏</button>
  <Demo v-if="isShow">
  </Demo>
</template>

<script>
import {ref} from 'vue'
import Demo from '@/components/Demo'
export default {
  name: 'App',
  components:{
    Demo
  },
  setup(){
    const isShow = ref(true)
    return {isShow}
  }
}
</script>

