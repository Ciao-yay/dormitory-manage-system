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
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
      <el-button type="primary" class="submit">登录</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
    data() {
      return {
        labelPosition: 'top',
        formData: {
          name: '',
          password: ''
        }
      };
    }
  }
</script>
<style >

.login{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
}
.title{
  font-size: 30px;
  margin-bottom: 50px;
  
}
.loginInput{
  width: 350px;
  border: 1px solid rgb(216, 216, 216);
  padding: 20px;
  border-radius: 10px;

}
.submit{
  width: 100%;
}
</style>