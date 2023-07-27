<template>
  <Buttoncom @click="logouFn">测试退出</Buttoncom>
</template>

<script setup>
defineOptions({ name: "testlogout", title: "测试退出" });
import { useRouter } from "vue-router";
import { clearStore } from "@/utils/store";
import { logout } from "@/api/login";
const router = useRouter();
const logouFn = () => {
  logout().then((res) => {
    if (res.code) {
      clearStore();
      router.push("/login");
    }
  });
};
</script>

<style>
</style>