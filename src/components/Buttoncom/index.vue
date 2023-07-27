<template>
  <el-button @click="clickFn" :loading="loading" v-bind="$attrs">
    <slot></slot>
  </el-button>
</template>

<script>
import { toRefs, reactive } from "vue";
import debounce from "@/utils/debounce";
export default {
  emits: ["click"],
  setup(props, { emit }) {
    const newClick = debounce(() => {
      emit("click");
      state.loading = false;
    }, 500);
    const state = reactive({
      loading: false,
      clickFn() {
        state.loading = true;
        newClick();
      },
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style>
</style>