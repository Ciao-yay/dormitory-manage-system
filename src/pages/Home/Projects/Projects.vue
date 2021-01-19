<template>
  <div class="projects">
    <div class="projectsHeader">
      <el-button type="primary" icon="el-icon-circle-plus-outline" size="mini"
        >创建新项目</el-button
      >
      <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">项目管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>所有项目</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-divider></el-divider>
    <!-- 项目列表 -->
    <div class="projectsContent">
      <div class="project">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          alt=""
        />
        <div class="describe">
          项目一

          <button class="delete"><i class="el-icon-delete"></i></button>
          <button class="change"><i class="el-icon-edit"></i></button>
        </div>
      </div>
      <div class="project">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          alt=""
        />
        <div class="describe">
          项目一

          <button class="delete"><i class="el-icon-delete"></i></button>
          <button class="change"><i class="el-icon-edit"></i></button>
        </div>
      </div>
      <div class="project">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          alt=""
        />
        <div class="describe">
          项目一

          <button class="delete"><i class="el-icon-delete"></i></button>
          <button class="change"><i class="el-icon-edit"></i></button>
        </div>
      </div>
      <div class="project">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          alt=""
        />
        <div class="describe">
          项目一

          <button class="delete"><i class="el-icon-delete"></i></button>
          <button class="change"><i class="el-icon-edit"></i></button>
        </div>
      </div>
      <div class="project">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          alt=""
        />
        <div class="describe">
          项目一

          <button class="delete"><i class="el-icon-delete"></i></button>
          <button class="change"><i class="el-icon-edit"></i></button>
        </div>
      </div>
      <div class="project">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          alt=""
        />
        <div class="describe">
          项目一

          <button class="delete"><i class="el-icon-delete"></i></button>
          <button class="change"><i class="el-icon-edit"></i></button>
        </div>
      </div>
      <div class="project">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          alt=""
        />
        <div class="describe">
          项目一

          <button class="delete"><i class="el-icon-delete"></i></button>
          <button class="change"><i class="el-icon-edit"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style >
.projectsHeader {
  text-align: left;
}
.breadcrumb {
  margin-top: 20px;
}
.projectsContent .card {
  padding: 0 !important;
}
.project {
  float: left;
  width: 20%;
  margin: 0 2.5% 30px;
  border-radius: 10px;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.project img {
  width: 100%;
  border-radius: 10px 10px 0 0;
}
.project > .describe {
  padding-left: 5px;
  line-height: 40px;
}
.project button {
  border-radius: 50%;
  height: 30px;
  width: 30px;
  color: #fff;
  padding: 2px 5px;
  float: right;
  margin: 10px;
}
.project .change {
  background-color: #409eff;
}
.project .delete {
  background-color: #f56c6c;
}
</style>