<template>
  <div class="navbar">
    <!-- <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" /> -->
    <h1 class="systemTitle">智慧社区联勤联动系统<span class="small">（银桥居委）</span></h1>
    <div class="right-menu">
      <div class="right-menu-container" trigger="click">
        <div class="nav-item">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-tool">
          <span style="display:block;">admin</span>
        </div>
        <div class="nav-item" @click="logout">
          <img :src="imgSrc" class="user-tool">
          <span style="display:block;">退出</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Hamburger from '@/components/Hamburger'

export default {
  components: {
    // Hamburger
  },
  data() {
    return {
      imgSrc: require('@/assets/out.png')
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'login'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>

.systemTitle{
      margin: 0;
    float: left;
    line-height: 60px;
        text-align: left;
    font-size: 27px;
    color: #ff7f00;
    letter-spacing: 0.2em;
    padding-left: 70px;
    background-image: url(../../assets/logo.png);
    background-repeat: no-repeat;
        background-position-y: center;
    background-position-x: 10px;
    font-family: 'sanyl';
    .small{
      font-size: 18px;
    }
}
.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  background: url(../../assets/bg.png) no-repeat;
  background-size: 100% 100%;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    display: flex;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;
        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .right-menu-container{
      display: flex;
      .nav-item {
        position: relative;
            height: 100%;
                margin-right: 30px;
 display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
                  span{
            color: #555;
            font-size: 14px
          }
        .user-tool {
          cursor: pointer;
          width: 30px;
          height: 30px;
          border-radius: 10px;
                    margin-bottom: 5px
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
