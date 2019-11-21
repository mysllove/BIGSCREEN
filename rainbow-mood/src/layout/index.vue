<template>
  <div class="platform-wrapper">
    <header id="header">
      <div class="view-wrap">
        <div class="platform-head">
          <div class="logo">浦东智慧安监学习平台</div>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :router="true"
            @select="handleSelect"
          >
            <el-menu-item index="/">专题班</el-menu-item>
            <el-menu-item index="courseCenter">课程中心</el-menu-item>
            <el-menu-item index="3">我的考试</el-menu-item>
            <el-menu-item index="4">我的学习</el-menu-item>
            <el-menu-item index="5">返回首页</el-menu-item>
          </el-menu>
        </div>
      </div>
    </header>
    <div class="banner">
      <div class="view-wrap">
        <div class="user-info">
          <div class="avatar">
            <el-avatar
              :size="50"
              :src="circleUrl"
              class="avatarImg"
            ></el-avatar>
            <span class="avatarName">王维尼</span>
          </div>
        </div>
      </div>
    </div>
    <transition name="el-zoom-in-center">
      <div class="view-wrap">
        <router-view />
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
#header {
  height: 61px;
  .el-menu--horizontal > .el-menu-item.is-active {
    background-color: #d1e2f3;
  }
}
.avatarImg {
  margin-right: 15px;
}
.avatarName {
  color: #fff;
}
.view-wrap {
  width: 1280px;
  height: 100%;
  margin: 0 auto;
}
.platform-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.avatar {
  display: flex;
  align-items: center;
}
.banner {
  height: 100px;
  background: url("~@/assets/images/conformity.png") no-repeat;
  background-size: 100% 100%;
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      activeIndex: "/",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
