<template>
  <div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="所有用户" name="first">
        <!-- 用户列表 -->
        <el-table
          ref="singleTable"
          :data="tableData"
          highlight-current-row
          @current-change="handleCurrentChange"
          style="width: 100%"
        >
          <el-table-column type="index" width="50" label="#"> </el-table-column>
          <el-table-column property="date" label="日期" width="120">
          </el-table-column>
          <el-table-column property="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column property="gender" label="性别"> </el-table-column>
          <el-table-column property="phone" label="电话号码"> </el-table-column>
          <el-table-column property="jurisdiction" label="权限">
          </el-table-column>
          <el-table-column property="manageRange" label="管理范围">
          </el-table-column>
          <el-table-column label="操作" min-width="150px" align="center">
            <template slot-scope="scope" >
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      currentRow: null,
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>
<style >

</style>