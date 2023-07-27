<template>
  <div class="login">
    <div class="card loginForm">
      <h2 class="title">登录</h2>
      <el-form
        ref="ruleFormRef"
        :model="form"
        label-width="60px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="账号"
          prop="name"
          :rules="[{ required: true, message: '账号必填' }]"
        >
          <el-input v-model.number="form.name" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          :rules="[{ required: true, message: '密码必填' }]"
        >
          <el-input
            v-model.number="form.password"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item>
          <Buttoncom type="primary" @click="submitForm(ruleFormRef)"
            >登录</Buttoncom
          >
        </el-form-item>
      </el-form>
      <div class="desc">注：账号密码随便填</div>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive, ref } from "vue";
import { login } from "@/api/login";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      ruleFormRef: ref("ruleFormRef"),
      form: { name: "", password: null },
      loginBtn: {
        type: "primary",
        loading: false,
      },
      submitForm(formEl) {
        if (!formEl) return;
        formEl.validate((valid, fields) => {
          if (valid) {
            login({ name: state.form.name }).then((res) => {
              if (res.code) {
                let user = res.data.userInfo;
                user.name = state.form.name;
                store.commit("setToken", res.data.token);
                store.commit("setUserInfo", user);
                router.push("/");
              }
            });
          } else {
            console.log("error submit!", fields);
          }
        });
      },
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: url(../assets/imgs/bglogin.jpg) no-repeat;
  background-size: cover;
}
.loginForm {
  width: 420px;
  background: #fff;
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  padding: 40px 40px;
}
.title {
  border-bottom: 5px solid orange;
  margin-bottom: 30px;
}
.btn {
  margin-top: 30px;
  width: 100%;
}
.desc {
  font-size: 12px;
  text-indent: 2em;
}
</style>