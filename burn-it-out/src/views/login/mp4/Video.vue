<template>
  <div class="homepage-hero-module">
    <div class="video-container">
      <div :style="fixStyle"
           class="filter"></div>
      <video :style="fixStyle"
             autoplay
             loop
             class="fillWidth"
             @canplay="canplay">
        <source src="@/assets/mp4/Zhangjiajie.mp4"
                type="video/mp4">
        浏览器不支持 video 标签，建议升级浏览器。
        <!-- <source src="@/assets/mp4/screen.webm" type="video/webm">
        浏览器不支持 video 标签，建议升级浏览器。 -->
      </video>
      <div v-if="!vedioCanPlay"
           class="poster hidden">
        <img :style="fixStyle"
             src="@/assets/mp4/screen.jpg"
             alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Video',
  data() {
    return {
      vedioCanPlay: false,
      fixStyle: ''
    }
  },
  mounted: function() {
    window.onresize = () => {
      const windowWidth = document.body.clientWidth
      const windowHeight = document.body.clientHeight
      const windowAspectRatio = windowHeight / windowWidth
      let videoWidth
      let videoHeight
      if (windowAspectRatio < 0.5625) {
        videoWidth = windowWidth
        videoHeight = videoWidth * 0.5625
        this.fixStyle = {
          height: windowWidth * 0.5625 + 'px',
          width: windowWidth + 'px',
          'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
          'margin-left': 'initial'
        }
      } else {
        videoHeight = windowHeight
        videoWidth = videoHeight / 0.5625
        this.fixStyle = {
          height: windowHeight + 'px',
          width: windowHeight / 0.5625 + 'px',
          'margin-left': (windowWidth - videoWidth) / 2 + 'px',
          'margin-bottom': 'initial'
        }
      }
    }
    window.onresize()
  },
  methods: {
    canplay() {
      this.vedioCanPlay = true
    }
  }
}
</script>

<style scoped>
.homepage-hero-module,
.video-container {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.video-container .poster img,
.video-container video {
  z-index: 0;
  position: absolute;
}

.video-container .filter {
  z-index: 1;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
}
</style>
