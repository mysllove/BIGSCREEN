<template>
  <div id="main-container">
    <div class="headertop filter-dot" style="height: auto;">
      <div id="banner_wave_1"></div>
      <div id="banner_wave_2"></div>
      <figure id="centerbg" class="centerbg" style="height: 937px;">
        <div class="focusinfo no-select" :style="{ top: size }">
          <h1
            class="center-text glitch is-glitching Ubuntu-font"
            data-text="Hi, Mashiro!"
          >
            Hi, Mashiro!
          </h1>
          <div class="header-info">
            <p>
              <i class="fa fa-quote-left"></i>You got to put the past behind you
              before you can move on.
              <i class="fa fa-quote-right"></i>
            </p>
            <div class="top-social_v2">
              <li id="bg-pre">
                <img
                  class="flipx"
                  src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/next-b.svg"
                />
              </li>
              <li>
                <a
                  href="http://github.com/mashirozx"
                  target="_blank"
                  class="social-github"
                >
                  <Tooltip
                    content="content of tooltip"
                    placement="bottom"
                    theme="light"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/github.png"
                    /> </Tooltip
                ></a>
              </li>
              <li>
                <a
                  href="http://weibo.com/mashirozx?is_all=1"
                  target="_blank"
                  class="social-sina"
                  title="sina"
                  ><img
                    src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/sina.png"
                /></a>
              </li>
              <li>
                <a
                  href="https://t.me/SakurasoNoMashiro"
                  target="_blank"
                  class="social-lofter"
                  title="telegram"
                  ><img
                    src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/telegram.svg"
                /></a>
              </li>
              <li>
                <a
                  href="https://music.163.com/m/user/home?id=2655217"
                  target="_blank"
                  class="social-wangyiyun"
                  title="CloudMusic"
                  ><img
                    src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/wangyiyun.png"
                /></a>
              </li>
              <li>
                <a
                  href="https://twitter.com/2hengxin"
                  target="_blank"
                  class="social-wangyiyun"
                  title="Twitter"
                  ><img
                    src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/twitter.png"
                /></a>
              </li>
              <li>
                <a
                  href="https://www.zhihu.com/people/young-dolphin"
                  target="_blank"
                  class="social-wangyiyun"
                  title="Zhihu"
                  ><img
                    src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/zhihu.png"
                /></a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/users/8083009/mashiro?tab=profile"
                  target="_blank"
                  class="social-wangyiyun"
                  title="StackOverflow"
                  ><img
                    src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.5.3/img/Sakura/images/sns/stackoverflow.svg"
                /></a>
              </li>
              <li>
                <a onclick="mail_me()" class="social-wangyiyun" title="E-mail"
                  ><img
                    src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/email.svg"
                /></a>
              </li>
              <li id="bg-next">
                <img
                  src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/next-b.svg"
                />
              </li>
            </div>
          </div>
        </div>
      </figure>
      <div id="video-container" style="">
        <video
          id="bgvideo"
          class="video"
          @canplay="videoCanPlay()"
          @timeupdate="videoTimeUpdate()"
          src=""
          width="100%"
          heigt="100%"
          ref="video"
        ></video>
        <!-- 播放按钮 -->
        <div
          id="video-btn"
          class="loadvideo videolive"
          :class="[vcIsPlay ? 'video-play' : 'video-pause']"
          @click="videoPlay()"
        ></div>
        <!-- 播放时间 -->
      </div>

      <div class="headertop-down faa-float animated" onclick="headertop_down()">
        <span><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
      </div>
    </div>

    <div id="page" class="site wrapper">
      <header
        class="site-header no-select is-homepage"
        role="banner"
        v-bind:class="{
          yya: isActive2,
          gizle: isActive1,
          sabit: isActive3
        }"
      >
        <div class="site-top">
          <div class="site-branding">1</div>
          <div class="lower-cantiner">
            <div class="lower">
              <div id="show-nav" class="showNav mobile-fit">
                <div class="line line1"></div>
                <div class="line line2"></div>
                <div class="line line3"></div>
              </div>
              <nav class="mobile-fit-control hide">
                <Menu mode="horizontal" active-name="1">
                  <MenuItem name="1">
                    <Icon type="ios-paper" />
                    内容管理
                  </MenuItem>
                  <MenuItem name="2">
                    <Icon type="ios-people" />
                    用户管理
                  </MenuItem>
                  <Submenu name="3">
                    <template slot="title">
                      <Icon type="ios-stats" />
                      统计分析
                    </template>
                    <MenuGroup title="使用">
                      <MenuItem name="3-1">新增和启动</MenuItem>
                      <MenuItem name="3-2">活跃分析</MenuItem>
                      <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                      <MenuItem name="3-4">用户留存</MenuItem>
                      <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                  </Submenu>
                  <MenuItem name="4">
                    <Icon type="ios-construct" />
                    综合设置
                  </MenuItem>
                </Menu>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div>
        <router-view />
      </div>
      <a
        @click="backTop"
        class="cd-top faa-float animated"
        :class="{ active: isActive }"
        v-bind:style="{ top: topValue + 'px' }"
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      //此数据是控制动画快慢的
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      vcIsPlay: true,
      isActive: false,
      isActive1: false,
      isActive2: false,
      isActive3: false,
      size: "",
      topValue: "-900"
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    videoPlay() {
      if (this.vcIsPlay) {
        this.$refs.video.pause();
        this.size = "-999px";
      } else {
        this.$refs.video.play();
        this.size = "49.3%";
      }
      this.vcIsPlay = !this.vcIsPlay;
    },
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 10) {
        that.topValue = "-13";
        this.isActive1 = true;
        this.isActive2 = true;
        this.isActive3 = false;
      } else {
        this.isActive2 = false;
        this.isActive3 = true;
        that.topValue = "-900";
      }
    }
  }
};
</script>

<style>
.headertop {
  position: relative;
  overflow: hidden;
  height: 0;
}
.headertop,
.pattern-center {
  animation: header 1s;
}
@keyframes header {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.headertop.filter-dot:before {
  background-image: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/dot.gif);
}
.headertop:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-attachment: fixed;
}
.centerbg {
  background-image: url(https://api.2heng.xin/cover/);
  background-position: center center;
  background-attachment: inherit;
}
#centerbg {
  width: 100%;
  height: 550px;
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  z-index: -1;
}
.focusinfo {
  position: relative;
  max-width: 800px;
  padding: 0 10px;
  top: 49.3%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  text-align: center;
  z-index: 99;
  -webkit-transition: 0.4s ease all;
  -moz-transition: 0.4s ease all;
  -o-transition: 0.4s ease all;
  transition: 0.4s ease all;
}

.Ubuntu-font {
  font-family: "Ubuntu", sans-serif;
}
.glitch {
  position: relative;
  color: #fff;
  mix-blend-mode: lighten;
}
.center-text {
  margin: auto;
  font-family: "Ubuntu", sans-serif;
  font-size: 80px;
  text-transform: uppercase;
}
.glitch:before {
  left: -1px;
  text-shadow: 1px 0 #ff3f1a;
}
.glitch:before,
.glitch:after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  clip: rect(0, 0, 0, 0);
}
.glitch:after {
  left: 1px;
  text-shadow: -1px 0 #00a7e0;
}
.glitch:before,
.glitch:after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  clip: rect(0, 0, 0, 0);
}
.glitch:hover:before {
  text-shadow: 4px 0 #ff3f1a;
  animation: glitch-loop-1 0.8s infinite ease-in-out alternate-reverse;
}
.glitch:hover:after {
  text-shadow: -5px 0 #00a7e0;
  animation: glitch-loop-2 0.8s infinite ease-in-out alternate-reverse;
}
@-webkit-keyframes glitch-loop-1 {
  0% {
    clip: rect(36px, 9999px, 9px, 0);
  }

  25% {
    clip: rect(25px, 9999px, 99px, 0);
  }

  50% {
    clip: rect(50px, 9999px, 102px, 0);
  }

  75% {
    clip: rect(30px, 9999px, 92px, 0);
  }

  100% {
    clip: rect(91px, 9999px, 98px, 0);
  }
}
@-webkit-keyframes glitch-loop-2 {
  0% {
    top: -1px;
    left: 1px;
    clip: rect(65px, 9999px, 119px, 0);
  }

  25% {
    top: -6px;
    left: 4px;
    clip: rect(79px, 9999px, 19px, 0);
  }

  50% {
    top: -3px;
    left: 2px;
    clip: rect(68px, 9999px, 11px, 0);
  }

  75% {
    top: 0;
    left: -4px;
    clip: rect(95px, 9999px, 53px, 0);
  }

  100% {
    top: -1px;
    left: -1px;
    clip: rect(31px, 9999px, 149px, 0);
  }
}
.header-info {
  width: 63%;
  margin: auto;
  font-size: 16px;
  color: #eaeadf;
  background: rgba(0, 0, 0, 0.5);
  padding: 15px;
  margin-top: 22px;
  letter-spacing: 0;
  line-height: 30px;
  border-radius: 10px;
  box-sizing: initial;
  white-space: nowrap;
}
.header-info:before {
  content: "";
  position: absolute;
  top: 112px;
  left: 30%;
  margin-left: -15px;
  border-width: 15px;
  border-style: solid;
  border-color: transparent transparent rgba(0, 0, 0, 0.5) transparent;
}
.header-info p {
  margin: 0;
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
}
.top-social_v2 {
  height: 32px;
  margin-bottom: -15px;
  margin-left: 10px;
  list-style: none;
  display: inline-block;
}

.focusinfo img {
  width: 130px;
  height: auto;
  padding: 2px;
  border-radius: 100%;
}
.top-social_v2 img {
  height: 35px;
  width: 35px;
  padding: 6px;
  background: 0 0;
}
.top-social_v2 li {
  float: left;
  margin-right: 13px;
}
.flipx {
  -moz-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
}
img {
  height: auto;
  max-width: 100%;
}

.ivu-menu-light {
  background: transparent !important;
}
.no-select {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.wrapper {
  animation: fade-in;
  animation-duration: 0.5s;
  -webkit-animation: fade-in 0.5s;
}
.site-header {
  width: 100%;
  height: 75px;
  background: 0 0;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  position: fixed;
  z-index: 9999;
  top: 0;
}
.site-header:after {
  clear: both;
}
.site-header:before {
  content: "";
  display: table;
  table-layout: fixed;
  clear: both;
}
.site-header:hover {
  background-color: #fff;
}
.site-branding {
  float: left;
  position: relative;
  height: 75px;
  line-height: 75px;
  margin-left: -6px;
  animation: sitetop 1s;
}
.gizle {
  top: -100px;
  top: 0;
  z-index: 9999;
}
.sabit {
  top: 0;
  z-index: 9999;
}

.yya {
  position: fixed;
  left: 0;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 40px -8px rgba(0, 0, 0, 0.5);
}
.site-top {
  width: 100%;
  display: block;
  margin: 0 auto;
  padding: 0 20px;
}
@keyframes sitetop {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.site-top .lower-cantiner {
  position: absolute;
  left: 50%;
  min-width: 758.4px;
  pointer-events: none;
}
.site-header.is-homepage .lower-cantiner {
  display: none;
}
.site-header.is-homepage.yya .lower-cantiner {
  display: block;
}
.site-header:hover.is-homepage .lower-cantiner {
  display: block;
}

.site-top .lower {
  display: inline-block;
  margin: 15px 0 0 10px;
  font-size: 16px;
  position: relative;
  left: -50%;
  pointer-events: auto !important;
}
.site-top .lower {
  animation: searchbox 1s;
}
.site-top .lower nav {
  display: block !important;
}
.site-top .lower nav {
  position: relative;
  float: right;
  display: none;
  animation: searchbox 0.2s;
}
@keyframes searchbox {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.cd-top {
  position: fixed;
  right: 25px;
  top: -900px;
  z-index: 99;
  width: 70px;
  height: 900px;
  background: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/scroll.png)
    no-repeat center;
  background-size: contain;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  opacity: 1;
}
.faa-float.animated {
  -webkit-animation: float 2s linear infinite;
  animation: float 2s linear infinite;
}
@keyframes float {
  0% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-6px);
    -ms-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}
.isActive {
  opacity: 1;
  top: -326px;
}
#bgvideo {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  min-width: 99.999%;
  min-height: 550px;
  z-index: 0;
}

#video-btn,
#video-add {
  position: absolute;
  bottom: 3px;
  right: 5px;
  width: 32px;
  height: 32px;
  z-index: 7;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  opacity: 0.8;
  -moz-animation: poi-face 10s linear infinite alternate;
  -webkit-animation: poi-face 10s linear infinite alternate;
  -o-animation: poi-face 10s linear infinite alternate;
  animation: poi-face 10s linear infinite alternate;
}

#video-btn:hover,
#video-add:hover {
  opacity: 1;
}

.video-play,
.loadvideo {
  background-image: url("https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/play@32x32.png");
}

.video-pause {
  background-image: url("https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/pause@32x32.png");
}

#video-add {
  background-image: url("https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/add@32x32.png");
  bottom: 45px;
  display: none;
}
#video-add {
  display: none !important;
}
.video-stu {
  position: absolute;
  bottom: -100px;
  left: 0;
  right: 0;
  margin: auto;
  padding: 6px 15px;
  text-align: center;
  color: #fff;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 0;
  font-size: 18px;
  -webkit-transition: 0.4s ease all;
  -moz-transition: 0.4s ease all;
  -o-transition: 0.4s ease all;
  transition: 0.4s ease all;
}
@keyframes poi-face {
  2%,
  24%,
  80% {
    -webkit-transform: translate(0, 1.5px) rotate(1.5deg);
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4%,
  68%,
  98% {
    -webkit-transform: translate(0, -1.5px) rotate(-0.5deg);
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  38%,
  6% {
    -webkit-transform: translate(0, 1.5px) rotate(-1.5deg);
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8%,
  86% {
    -webkit-transform: translate(0, -1.5px) rotate(-1.5deg);
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10%,
  72% {
    -webkit-transform: translate(0, 2.5px) rotate(1.5deg);
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12%,
  64%,
  78%,
  96% {
    -webkit-transform: translate(0, -0.5px) rotate(1.5deg);
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14%,
  54% {
    -webkit-transform: translate(0, -1.5px) rotate(1.5deg);
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    -webkit-transform: translate(0, -0.5px) rotate(-1.5deg);
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18%,
  22% {
    -webkit-transform: translate(0, 0.5px) rotate(-1.5deg);
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20%,
  36%,
  46% {
    -webkit-transform: translate(0, -1.5px) rotate(2.5deg);
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  26%,
  50% {
    -webkit-transform: translate(0, 0.5px) rotate(0.5deg);
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    -webkit-transform: translate(0, 0.5px) rotate(1.5deg);
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30%,
  40%,
  62%,
  76%,
  88% {
    -webkit-transform: translate(0, -0.5px) rotate(2.5deg);
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32%,
  34%,
  66% {
    -webkit-transform: translate(0, 1.5px) rotate(-0.5deg);
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  42% {
    -webkit-transform: translate(0, 2.5px) rotate(-1.5deg);
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44%,
  70% {
    -webkit-transform: translate(0, 1.5px) rotate(0.5deg);
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  48%,
  74%,
  82% {
    -webkit-transform: translate(0, -0.5px) rotate(0.5deg);
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  52%,
  56%,
  60% {
    -webkit-transform: translate(0, 2.5px) rotate(2.5deg);
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    -webkit-transform: translate(0, 0.5px) rotate(2.5deg);
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  84% {
    -webkit-transform: translate(0, 1.5px) rotate(2.5deg);
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  90% {
    -webkit-transform: translate(0, 2.5px) rotate(-0.5deg);
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    -webkit-transform: translate(0, 0.5px) rotate(-0.5deg);
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    -webkit-transform: translate(0, 2.5px) rotate(0.5deg);
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  0%,
  100% {
    -webkit-transform: translate(0, 0) rotate(0);
    transform: translate(0, 0) rotate(0);
  }
}
</style>
