<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>我的信息</span>
      </div>
    </template>
    <div class="content">
      <el-avatar shape="square" style="margin: 8px;" :size="120" :src="ruleForm.headerImg" />
      <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      label-width="auto"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item label="名字" prop="name">
        {{ ruleForm.name }}
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        {{ ruleForm.age }}
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        {{ ruleForm.sex }}
      </el-form-item>
      <el-form-item label="住址" prop="addr">
        {{ ruleForm.addrName }}
      </el-form-item>
      
      <el-form-item label="备注" prop="desc">
        {{ ruleForm.desc }}
      </el-form-item>
      <el-form-item label="注册时间" prop="date">
        {{ ruleForm.date }}
      </el-form-item>
    </el-form>
    </div>
   
  </el-card>
</template>

<script setup>
import {ref,reactive} from 'vue'
import {useStore} from 'vuex'
defineOptions({
  name: "myinfo",
  title: "我的信息",
})
const store=useStore()
const formSize = ref("default");
const ruleForm = reactive({
  ...store.state.login.userInfo
});
</script>

<style scoped>
.content{
  display: flex;
  /* align-items: center; */
}
</style>