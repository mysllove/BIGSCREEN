
<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";
.app-main {
  /*50 = navbar  */
     /* min-height: calc(100vh - 60px); */
    height: calc(100vh - 60px);
    margin-left: $sideBarWidth;
    position: relative;
    overflow-y: auto;
        overflow-x: hidden;
    -webkit-transition: margin-left .28s;
    transition: margin-left .28s;
    left: 0;
    right: 0;
}
.fixed-header+.app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
