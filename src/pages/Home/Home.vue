<template>
  <el-container class="home">
    <el-header class="headerTop">
      <el-col :span="22"
        ><div class="grid-content bg-purple">
          <h1 class="title">宿舍管理系统</h1>
        </div></el-col
      >
      <el-col :span="2"
        ><div class="grid-content bg-purple-light logout" @click="logout">
          退出
        </div></el-col
      >
    </el-header>
    <el-container>
      <el-aside width="200px" class="aside">
        <div class="grid-content bg-purple">
          <el-col :span="24">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              background-color="#d3dce6"
              text-color="#000"
              active-text-color="#409EFF"
            >
              <el-menu-item
                index="1"
                @click="$router.replace('/home/projects')"
              >
                <i class="el-icon-suitcase"></i>
                <span slot="title">项目管理</span>
              </el-menu-item>
              <el-menu-item
                index="2"
                @click="$router.replace('/home/jurisdiction')"
              >
                <i class="el-icon-key"></i>
                <span slot="title">权限管理</span>
              </el-menu-item>
              <el-menu-item index="3" @click="$router.replace('/home/checkin')">
                <i class="el-icon-top-right"></i>
                <span slot="title">入住管理</span>
              </el-menu-item>
              <el-menu-item
                index="4"
                @click="$router.replace('/home/maintain')"
              >
                <i class="el-icon-s-tools"></i>
                <span slot="title">维修管理</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </div>
      </el-aside>
      <el-main class="main">
        <el-card shadow="always" class="content">
          <router-view></router-view>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$confirm("是否退出并清空缓存?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$store.dispatch("logout");
          this.$router.replace("/login");
          this.$message({
            showClose: true,
            type: "error",
            message: "退出成功!",
          });
        })
        .catch(() => {
          this.$message({
            showClose: true,
            type: "info",
            message: "已取消",
          });
        });
    },
  },
};
</script>
<style >
.home {
  height: 100%;
}
.headerTop {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.logout:hover {
  /* color: white; */
  transition: background-color 0.5s;
  background-color: #a9b0b8;
}
.aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.main {
  background-color: #e9eef3;
  color: #333;
}
.content {
  background-color: #fff;
  height: 100%;
}
.title {
  font-size: 25px;
  font-weight: 600;
  color: #fff;
}

.exit {
  font-size: 15px;
  font-weight: normal;
}

.grid-content {
  min-height: 36px;
}
</style>