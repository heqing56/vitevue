<template>
  <div class="err">
    <h1>404</h1>
    <Buttoncom :loading="false" @click="banckFn">返回主页</Buttoncom>
  </div>
</template>
<script>
  import { reactive, toRefs } from "vue";
  import { useRouter } from "vue-router";
  export default {
    setup() {
      const router = useRouter();
      const state = reactive({
        banckFn() {
          router.push("/");
        },
      });
      return {
        ...toRefs(state),
      };
    },
  };
</script>
<style scoped>
.err {
  text-align: center;
}
</style>