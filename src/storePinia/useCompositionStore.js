import {defineStore} from 'pinia'
import { reactive,computed, toRefs } from 'vue'


export const useCompositionStore=defineStore('composition',()=>{
    const state=reactive({
        num:1
    })
    const numdoubleCount=computed(()=>state.num * 2)
    const numincrement=()=>state.num++
    return {
       ...toRefs(state),
        numdoubleCount,
        numincrement
    }
})