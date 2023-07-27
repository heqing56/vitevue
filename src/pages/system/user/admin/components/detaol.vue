<template>
  <div>
    <el-dialog
      v-model="show"
      :title="type[props.types]"
      width="60%"
      :before-close="handleClose"
    >
      <div>
        <el-form
          :disabled="props.types === 'Detail'"
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
          :size="formSize"
          status-icon
        >
          <el-form-item label="名字" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入" />
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-select-v2
              v-model="ruleForm.age"
              placeholder="请选择"
              :options="options"
              style="width: 100%"
            />
          </el-form-item>
          <el-form-item label="注册时间" prop="date">
            <el-date-picker
              v-model="ruleForm.date"
              type="date"
              label="Pick a date"
              placeholder="请选择"
              format="YYYY/MM/DD"
              value-format="YYYY-MM-DD"
              style="width: 100%"
            />
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="ruleForm.sex">
              <el-radio :label="true">男</el-radio>
              <el-radio :label="false">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="住址" prop="addr">
            <el-cascader
              style="width: 100%"
              v-model="ruleForm.addr"
              :options="address"
              :props="{ value: 'code', label: 'name' }"
              @change="addressHandleChange"
            />
          </el-form-item>

          <el-form-item label="备注" prop="desc">
            <el-input v-model="ruleForm.desc" type="textarea" />
          </el-form-item>
          <el-form-item v-if="props.types !== 'Detail'">
            <el-button type="primary" @click="submitForm(ruleFormRef)">
              {{ type[props.types] }}
            </el-button>
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import {  reactive, ref } from "vue";
import address from "@/utils/address.json";
defineOptions({
  name: "adminAdd",
});
/**组件传值 */
const props = defineProps({
  rows: {
    type: Object,
    default: () => {},
  },
  types: {
    type: String,
    default: "Add",
  },
});
/**组件事件 */
const emits = defineEmits(["returnFn"]);
/**默认显示弹框 */
const show = ref(true);
/**默认表单字体大小 */
const formSize = ref("default");
/**表单的ref 用于验证*/
const ruleFormRef = ref();
/**弹框类型 常量 */
const type = reactive({
  Add: "新增",
  Edit: "修改",
  Detail: "查看",
});
/**表单字段 初始数据*/
const ruleForm = reactive({
  name: "",
  age: "18",
  sex: true,
  addrName: "",
  addr: [],
  date: "",
  desc: "",
  ...props.rows,
});
/**表单验证规则 */
const rules = reactive({
  name: [
    { required: true, message: "请输入名字", trigger: "blur" },
    { min: 2, max: 8, message: "名字长度2-8个字符", trigger: "blur" },
  ],
  age: [
    {
      required: true,
      message: "请选择年龄",
      trigger: "change",
    },
  ],
  date: [
    {
      type: "date",
      required: true,
      message: "请选择注册日期",
      trigger: "change",
    },
  ],
  sex: [
    {
      required: true,
      message: "请选择性别",
      trigger: "change",
    },
  ],
  addr: [
    {
      required: true,
      message: "请选择住址",
      trigger: "change",
    },
  ],
});
/**年龄选择项 */
const options = Array.from({ length: 11 }).map((_, idx) => ({
  value: `${idx + 18}`,
  label: `${idx + 18}`,
}));
/**提交表单 新增或修改按钮 */
const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      emits("returnFn", ruleForm);
    } else {
      console.log("error submit!", fields);
    }
  });
};
/**重置表单 修改时重置未被改之前的数据，不会清空表单 */
const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};
/**右上角 关闭弹框 */
const handleClose = () => {
  emits("returnFn");
};
/**选择城市后触发 提取中文名字给addrName 源数据未addr */
const addressHandleChange = (v) => {
  ruleForm.addrName = recursionName(address, v);
};
/**addrName 递归提取中午方法 */
const recursionName = (arr, list) => {
  let value = "";
  let data;
  for (let index in list) {
    if (index == 0) {
      data = _recursionFn(arr, list[index]);
      value = data.name;
    } else {
      data = _recursionFn(data.children, list[index]);
      value += "-" + data.name;
    }
  }
  // 递归
  function _recursionFn(children, code) {
    return children.find((item) => {
      if (item.code == code) {
        return item;
      }
    });
  }
  return value;
};
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>