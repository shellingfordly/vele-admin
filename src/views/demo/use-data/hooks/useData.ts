import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

export const parentData = ref('parentData')

export default function useData(){
  const data = reactive({
    msg: 'this is a message!'
  })

  const change = ()=>{
    setTimeout(()=>{
      data.msg = "useData changed message"
    },1000)
  }


  // onMounted(()=>{
  //   setTimeout(()=>{
  //     parentData.value = "useData changed parentData"
  //   },4000)
  // })

  return {
    data,
    change
  }
}