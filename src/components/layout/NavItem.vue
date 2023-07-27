<template>
  <template v-for="ite in list" :key="ite.id">
    <el-sub-menu :index="ite.path + ''" v-if="ite.children">
      <template #title>
        <el-icon><Icon :type="ite.meta.icon" /></el-icon>
        <span>{{ ite.meta.title }}</span>
      </template>
      <navItem :list="ite.children"></navItem>
    </el-sub-menu>
    <template v-else>
      <el-menu-item :index="ite.path + ''">
        <el-icon><Icon :type="ite.meta.icon" /></el-icon>
        <span>{{ ite.meta.title }}</span>
      </el-menu-item>
    </template>
  </template>
</template>
  
  <script>
export default {
    name:'navItem',
    props:{
        list:{
            type:Array,
            default:[]
        }
    },
};
</script>
  
  <style scoped lang="scss">
.children {
  text-indent: 1em;
}
</style>