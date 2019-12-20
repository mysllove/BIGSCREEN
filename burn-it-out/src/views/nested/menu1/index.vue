<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :xs="8"
              :sm="6"
              :md="4"
              :lg="3"
              :xl="18">
        <div class="grid-content bg-purple">
          <transition name="el-fade-in-linear">
            <router-view />
          </transition>
        </div>
      </el-col>
      <el-col :xs="4"
              :sm="6"
              :md="8"
              :lg="9"
              :xl="6">
        <div class="grid-content bg-purple-light">
          <el-menu
            :default-active="this.$route.path"
            class="el-menu-vertical-demo"
            background-color="transparent">
            <router-link tag="li"
                         class="nav-link"
                         to="subpage/subpagePage">
              <a class="list-group-item list-group-item-action">最新新闻</a>
            </router-link>
            <router-link tag="li"
                         class="nav-link"
                         to="menu1-2-1">
              <a class="list-group-item list-group-item-action">联系方式</a>
            </router-link>

          </el-menu>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
