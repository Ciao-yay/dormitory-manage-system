<template>
  <div class="login">
    <h1 class="title">宿舍管理系统</h1>
    <el-form
      class="loginInput"
      :label-position="labelPosition"
      label-width="80px"
      :model="formData"
    >
      <el-form-item label="用户名">
        <el-input v-model="formData.acount"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.password" type="password"></el-input>
      </el-form-item>
      <el-button
        type="primary"
        class="submit"
        @click="login"
        v-loading.fullscreen.lock="fullscreenLoading"
        >登录</el-button
      >
    </el-form>
  </div>
</template>
<script>
import { reqLogin } from "../../api";
export default {
  data() {
    return {
      labelPosition: "top",
      formData: {
        acount: "",
        password: "",
      },
      fullscreenLoading: false,
    };
  },
  methods: {
    async login() {
      this.fullscreenLoading = true;
      const { acount, password } = this.formData;
      if (acount.length > 0 && password.length > 0) {
        try {
          let result = await reqLogin(this.formData);
          result = result.data;
          this.fullscreenLoading = false;
          if (result.code === 1) {
            this.open2();
            this.$router.replace("/home");
          } else {
            this.open4();
          }
        } catch (e) {
          this.fullscreenLoading = false;
          this.open4();
          console.log(e);
        }
      } else {
        this.fullscreenLoading = true;
        alert("请输入账号或密码");
      }
    },
    open2() {
      this.$message({
        showClose: true,
        message: "登陆成功",
        type: "success",
      });
    },
    open4() {
      this.$message({
        showClose: true,
        message: "登陆失败",
        type: "error",
      });
    },
  },
};
</script>
<style >
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
}
.title {
  font-size: 30px;
  margin-bottom: 50px;
}
.loginInput {
  width: 350px;
  border: 1px solid rgb(216, 216, 216);
  padding: 20px;
  border-radius: 10px;
}
.submit {
  width: 100%;
}
</style>