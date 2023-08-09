<template>
  <div>测试用户</div>
  <Testexpose ref="Testexpose"></Testexpose>
</template>

<script setup>
import { ref } from 'vue';
import Testexpose from './components/Testexpose.vue';
    defineOptions({
        name:'testuser',
        title:'测试用户',
        order:2
    })
    const testexpose=ref(null)
</script>

<style>

</style>