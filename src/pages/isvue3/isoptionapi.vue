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
        console.log('created')
    },
    mounted() {
        console.log('mounted')
        // let arr=[
        //     {id:1,name:'张三1',sex:'男'},
        //     {id:2,name:'张三2',sex:'男'},
        //     {id:3,name:'张三2',sex:'女'},
        //     {id:4,name:'张三2',sex:'男'},
        //     {id:5,name:'张三5',sex:'男'},
        // ]
        // let maparr=new Map()
        // for(let item of arr){
        //     maparr.set(item.name+item.sex,item)
        // }
        // let newarr=[...maparr.values()]
        // console.log(newarr)

        let arr=[[1,2,3,4],[2,3,4,5],[1,2,3,4],[3,4,5,6]]
        let setArr=[...new Set(arr.map(item=>item.join()))].map(item=>{
            return item.split(',').map(it=>~~it)
        })
        console.log(arr,setArr)
    },
    unmounted() {
        console.log('unmounted')
    }
}
</script>
<style scoped>

</style>