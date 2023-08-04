<template>
    <div>option---------</div>
    <div>state{{ counter }}</div>
    <div>getter{{ doubleCount }}</div>
    <div @click="counter--">点击counter--</div>
    <div @click="increment">点击counter++</div>
    <div>composition------------</div>
    <div>num{{ num }}</div>
    <div>getter{{ numdoubleCount }}</div>
    <div @click="num--">点击num--</div>
    <div @click="numincrement">点击num++</div>
</template>
<script>
import { onMounted, onBeforeMount, toRefs, reactive } from 'vue'
import { useOptionStore } from '../../storePinia/useOptionStore'
import { useCompositionStore } from '../../storePinia/useCompositionStore'
import { storeToRefs } from 'pinia'

export default {
    name: 'compositionapi',
    title: 'compositionapi',
    setup() {
        const userStore = useOptionStore()
        const compositionStore = useCompositionStore()
        // state和getters
        const { counter, doubleCount } = storeToRefs(userStore)
        const { num, numdoubleCount} = storeToRefs(compositionStore)
        // actions 方法
        const { increment } = userStore
        const { numincrement } = compositionStore
        const state = reactive({
            counter,
            doubleCount,
            increment,
            num,
            numdoubleCount,
            numincrement

        })
        onBeforeMount(() => {
            console.log('onBeforeMount')
        })
        onMounted(() => {
            console.log('onMounted')
        })
        return {
            ...toRefs(state)
        }
    },

}
</script>
<style scoped></style>