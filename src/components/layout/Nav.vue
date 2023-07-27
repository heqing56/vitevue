<template>
  <div class="nav">
    <el-menu :default-active="path" class="el-menu-vertical-demo" router>
        <NavItem :list="list"></NavItem>
    </el-menu>
  </div>
</template>

<script>
import { onBeforeMount } from "vue";
import { reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import pages from "@/router/pages";
import NavItem from './NavItem.vue';
export default {
  components: { NavItem },
  setup() {
    const route = useRoute();
    onBeforeMount(() => {
      state.path = route.path;
    });
    const state = reactive({
      path: "/",
      list: pages,
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped lang="scss">
.nav {
  border-right: 1px solid var(--el-border-color);
  box-sizing: border-box;
  user-select: none;
}
.el-menu {
  border: none;
}

</style>