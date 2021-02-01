<template>
  <div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="所有用户" name="first">
        <!-- 用户列表 -->
        <el-table
          ref="singleTable"
          :data="users"
          highlight-current-row
          @current-change="handleCurrentChange"
          style="width: 100%"
        >
          <el-table-column type="index" width="50" label="#"> </el-table-column>
          <el-table-column label="日期" width="120">
            <template slot-scope="scope">
              {{ scope.row.birth_date | date_format }}
            </template>
          </el-table-column>
          <el-table-column property="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column property="gender" label="性别"> </el-table-column>
          <el-table-column property="telphone" label="电话号码">
          </el-table-column>
          <el-table-column property="post" label="权限"> </el-table-column>
          <el-table-column property="manageRange" label="管理范围">
          </el-table-column>
          <el-table-column label="操作" min-width="150px" align="center">
            <template slot-scope="scope">
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
        <!-- 表格弹窗 -->
        <el-dialog title="用户信息" :visible.sync="dialogFormVisible">
          <el-form :model="user">
            <el-form-item label="名字" :label-width="formLabelWidth">
              <el-input v-model="user.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号码" :label-width="formLabelWidth">
              <el-input v-model="user.telphone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="职务" :label-width="formLabelWidth">
              <el-select v-model="user.post" :placeholder="user.post">
                <el-option label="主管" value="主管"></el-option>
                <el-option label="宿管" value="宿管"></el-option>
                <el-option label="维护" value="维护"></el-option>
                <el-option label="安保" value="安保"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false"
              >确 定</el-button
            >
          </div>
        </el-dialog>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapState } from "vuex";
import {removeUser } from "../../../api";
export default {
  computed: {
    ...mapState(["users"]),
  },
  mounted(){
    this.$store.dispatch('getUsers')
  },
  data() {
    return {
      activeName: "first",
      currentRow: null,
      dialogFormVisible: false,
      user: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    handleEdit(index, row) {
      this.user = row;
      this.dialogFormVisible = true;
    },
    handleDelete(index, row) {
      this.$confirm("是否移除该用户?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        try {
          let result = await removeUser(row.id);
          const {
            data: { code },
          } = result;
          if (code === 1) {
            await this.initUsers();
            this.$message({
              showClose: true,
              type: "success",
              message: "移除成功!",
            });
          } else {
            console.log(code, result);
            this.$message({
              showClose: true,
              type: "error",
              message: "移除失败！",
            });
          }
        } catch (e) {
          console.log(e);
          this.$message({
            showClose: true,
            type: "error",
            message: "移除失败！",
          });
        }
      });
      // 点击取消后的回调
      // .catch(() => {});
    },
  },
};
</script>
<style >
</style>