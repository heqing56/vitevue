<template>
  <div>
    <Buttoncom @click="logouFn">退出</Buttoncom>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { clearStore } from "@/utils/store";
import { logout } from "@/api/login";
defineOptions({
  name: "systemlogout",
  title: "退出",
  order: 11,
});

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
