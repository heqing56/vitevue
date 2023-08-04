

<template>
    1111{{ num }}
</template>
<script >
import { ref, toRefs } from 'vue';
export default {
    setup(prop, { expose }) {

        const num = ref(4);
        // expose(num)
        return {
            ...toRefs(num)
        }

    }
}
// defineExpose({
//     num
// })
</script>