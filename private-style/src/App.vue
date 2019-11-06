<template>
  <div id="app">
    <div class="amap-wrapper">
      <div style="width:100%;height:100%" id="container"></div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
.amap-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 888;
}
</style>
<script>
import AMap from "AMap";

export default {
  data() {
    return {};
  },
  mounted() {
    this.map = new AMap.Map("container", {
      resizeEnable: true,
      rotateEnable: false,
      pitchEnable: false,
      zoom: 11.8,
      pitch: 47,
      rotation: 5,
      viewMode: "3D",
      center: [121.705381, 31.016378],
      mapStyle: "amap://styles/9f27821a314a60a1dabdb0fd5f390c4a"
    });
  }
};
</script>
