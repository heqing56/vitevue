<template>
    <div>123</div>
    <div @click="changeNew">{{ name }}</div>
    <div @click="debounceFn">防抖{{ num }}</div>
    <div @click="throttleeFn">节流{{ num }}</div>
</template>
<script>
import debounce from '../../utils/debounce'
import throttle from '../../utils/throttle'
export default {
    name: 'optionpai',
    title: 'optionpai',
    data() {
        return {
            name: '张三',
            num:1,
            debounceFn:debounce(()=>this.num--,500),
            throttleeFn:throttle(()=>this.num++,500)
        }
    },
    methods: {
        chengeFn() {
            this.name = '瓜娃子'
        },

    },
    created() {
      
    },
    mounted() {
     
        let arr=[[1,2,3,4],[2,3,4,5],[1,2,3,4],[3,4,5,6]]
        let setArr=[...new Set(arr.map(item=>item.join()))].map(item=>{
            return item.split(',').map(it=>~~it)
        })
   
    },
    unmounted() {
      
    }
}
</script>
<style scoped>

</style>