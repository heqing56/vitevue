<template>
  <div class="admin">
    <div class="header">
      <div>用户列表</div>
      <el-button :loading="false" @click="addFn">新增</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" class="table" border stripe>
      <el-table-column label="序号" fixed type="index" width="60" />
      <el-table-column prop="name" label="名字" width="120" />
      <el-table-column prop="age" label="年龄" width="80" />
      <el-table-column prop="sex" label="性别" width="80">
        <template #default="scope">
          {{ scope.row.sex ? "男" : "女" }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="注册时间" width="160" />
      <el-table-column prop="addrName" label="住址" width="auto" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="handleClick(scope, 'Detail')"
            >查看</el-button
          >
          <el-button
            link
            type="primary"
            size="small"
            @click="handleClick(scope, 'Edit')"
            >修改</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-affix position="bottom" :offset="10">
      <div class="pages">
        <el-pagination
          v-model:current-page="pages.currentPage"
          v-model:page-size="pages.pageSize"
          :page-sizes="[10, 15, 20, 30]"
          :small="true"
          :disabled="false"
          :background="true"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pages.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-affix>
    <KeepAlive>
      <div v-if="addOrEdit.showDialog">
        <adminAdd
          :types="addOrEdit.types"
          :rows="addOrEdit.rows"
          @returnFn="returnFn"
          ref="adminref"
        ></adminAdd>
      </div>
    </KeepAlive>
  </div>
</template>

<script setup>
import { onBeforeMount, reactive } from "vue";
import { getAdminList } from "@/api/system";
import adminAdd from "./components/detaol.vue";
defineOptions({
  name: "admin",
  title: "管理员管理",
});

/**弹框信息 */
const addOrEdit = reactive({
  rows: {},
  types: "Add",
  index: 0,
  showDialog: false,
});
/**分页信息 */
const pages = reactive({
  currentPage: 1,
  pageSize: 10,
  total: 0,
});
/**列表数据 */
const tableData = reactive([]);
/**初始加载数据 */
onBeforeMount(() => {
  getList();
});
/**获取数据列表 */
const getList = () => {
  getAdminList(pages).then((res) => {
    if (res.code) {
      tableData.length = 0;
      tableData.push(...res.data.list);
      pages.total = res.data.total;
    }
  });
};
/**点击行 的查看或修改 */
const handleClick = (scope, type) => {
  let row = scope.row;
  addOrEdit.rows = row;
  if (type === "Detail") {
    addOrEdit.types = "Detail";
    addOrEdit.showDialog = true;
  } else if (type === "Edit") {
    addOrEdit.index = scope.$index;
    addOrEdit.types = "Edit";
    addOrEdit.showDialog = true;
  }
};
/**查看修改新增弹框的返回结果 */
const returnFn = (e) => {
  addOrEdit.showDialog = false;
  if (!e) return;
  if (addOrEdit.types === "Add") {
    tableData.unshift(e);
    tableData.length = 10;
  } else if (addOrEdit.types === "Edit") {
    tableData[addOrEdit.index] = { ...e };
  }
};
/**点击新增按钮 弹出新增框 */
const addFn = () => {
  addOrEdit.types = "Add";
  addOrEdit.rows = {};
  addOrEdit.showDialog = true;
};
/**点击页码 重新加载 */
const handleCurrentChange = (val) => {
  getList();
};
/**修改每页显示条数 重新加载*/
const handleSizeChange = (val) => {
  pages.currentPage = 1;
  getList();
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
.table {
  /* margin-bottom: 40px; */
}
.pages {
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
  position: relative;
  bottom: -10px;
  /* right: 0; */
  z-index: 2;
  box-sizing: border-box;
  width: 100%;
  background: #fff;
}
</style>