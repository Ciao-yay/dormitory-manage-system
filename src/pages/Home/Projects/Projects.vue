<template>
  <div class="projects">
    <div class="projectsHeader">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="所有项目" name="first">
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
        </el-tab-pane>
        <el-tab-pane label="添加新项目" name="second">
          <div class="newProject">
            <el-form
              :label-position="labelPosition"
              label-width="80px"
              :model="formData"
            >
              <el-form-item label="项目编号">
                <el-input v-model="formData.id"></el-input>
              </el-form-item>
              <el-form-item label="项目名称">
                <el-input v-model="formData.name"></el-input>
              </el-form-item>
              <el-form-item label="楼栋数量">
                <el-input v-model="formData.count"></el-input>
              </el-form-item>
              <el-form-item label="楼栋数量">
                <el-input v-model="formData.count"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      labelPosition: "right",
      formData: {
        name: "",
        region: "",
        type: "",
      },
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log("submit!");
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
.newProject {
  width: 50%;
}
</style>