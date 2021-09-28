<template>
  <!-- vue3可以没有根标签 -->
  <h2>当前求和为：{{count}}</h2>
  <button @click="count++">点我+1</button>
  <h2>鼠标点击的坐标 X：{{point.x}} Y：{{point.y}}</h2>
</template>

<script>
import {ref} from "vue"
import usePoint from '../Hooks/savePoint'
export default {
  name: 'Demo',
  // setup 相当于 beforeCreate + created
  setup(){
    const count = ref(0)

    const point = usePoint()

    // const point = reactive({
    //   x:0,
    //   y:0
    // })
    // function savePoint(e) {
    //   point.x = e.pageX
    //   point.y = e.pageY
    // }

    // onMounted(()=>{
    //   window.addEventListener("click",savePoint)
    // })

    // onBeforeUnmount(() => {
    //   window.removeEventListener("click",savePoint)
    // })

    return {
      count,
      point
    }
  }
}
</script>

