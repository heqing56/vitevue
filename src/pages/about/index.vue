<template>
  <div class="content" v-for="(item,index) in list" :key="index">{{ item }}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import {des} from '@/api/about'
export default {
  name:'about',
  title:'关于我',
  icon:'User',
  order:2,
  setup(){
    const state=reactive({
      list:[],
      getDesFn(){
        des().then(res=>{
          if(res.code){
            state.list=res.data
          }
        })
      },
    })
    state.getDesFn()
    return {
      ...toRefs(state)
    }
  }
}
</script>
<style scoped>
.content{
  text-indent: 2em;
  padding: 10px;
  line-height: 32px;
  letter-spacing: 1.8px;
}
</style>
