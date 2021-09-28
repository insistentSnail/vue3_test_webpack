import {onMounted, onBeforeUnmount, reactive} from "vue"
// hooks类似vue2中的mixin
export default function () {
  const point = reactive({
    x:0,
    y:0
  })
  function savePoint(e) {
    point.x = e.pageX
    point.y = e.pageY
  }

  onMounted(()=>{
    window.addEventListener("click",savePoint)
  })

  onBeforeUnmount(() => {
    window.removeEventListener("click",savePoint)
  })

  return point
}