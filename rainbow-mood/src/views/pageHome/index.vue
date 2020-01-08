<template>
  <div id="pageHome" class="pageHome-content">
    <div class="top-feature-row">
      <h1 class="fes-title" style="font-family: 'Ubuntu', sans-serif;">
        <i class="fa fa-anchor" aria-hidden="true"></i> START:DASH!!
      </h1>
      <div class="top-feature-v2">
        <div class="the-feature square from_left_and_right">
          <a href="/theme-sakura/" target="_blank"
            ><div class="img">
              <img
                src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.3.2/img/other/sakura.md.png"
              />
            </div>
            <div class="info">
              <h3>Sakura</h3>
              <p>本站 WordPress 主题</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home"
  // components: {
  //   HelloWorld
  // }
};
</script>
<style>
.top-feature-row {
  width: 100%;
  height: auto;
  margin-top: 55px;
}
.top-feature-v2 {
  display: inline-block;
}
h1.fes-title,
h1.main-title {
  color: #666;
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 5px;
  margin-bottom: 30px;
  border-bottom: 1px dashed #ececec;
}
.the-feature {
  position: relative;
  -webkit-transition: all 0.35s ease-in-out;
  -moz-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.the-feature,
.the-feature * {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.the-feature a {
  color: #333;
}
.the-feature a:hover {
  text-decoration: none;
}
.the-feature img {
  height: 160px;
  width: 257px;
}
.the-feature.from_left_and_right {
  position: relative;
  height: 160px;
  width: 257px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  border-radius: 10px;
}
.the-feature.from_left_and_right .img {
  -webkit-transition: all 0.35s ease-in-out;
  -moz-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}
.the-feature.from_left_and_right .info {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: #333;
  background: rgba(0, 0, 0, 0.6);
  visibility: hidden;
  opacity: 0;
  -webkit-transition: all 0.35s ease-in-out;
  -moz-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.the-feature.from_left_and_right .info h3 {
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  font-size: 17px;
  padding: 10px;
  background: #111;
  margin: 30px 0 0;
  -webkit-transition: all 0.35s ease-in-out;
  -moz-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
  -webkit-transform: translateX(-100%);
  -moz-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  -o-transform: translateX(-100%);
  transform: translateX(-100%);
}
.the-feature.from_left_and_right .info p {
  font-style: italic;
  font-size: 12px;
  position: relative;
  color: #bbb;
  padding: 20px;
  text-align: center;
  -webkit-transition: all 0.35s 0.1s linear;
  -moz-transition: all 0.35s 0.1s linear;
  transition: all 0.35s 0.1s linear;
  -webkit-transform: translateX(100%);
  -moz-transform: translateX(100%);
  -ms-transform: translateX(100%);
  -o-transform: translateX(100%);
  transform: translateX(100%);
}
.the-feature.from_left_and_right a:hover .img {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
}
.the-feature.from_left_and_right a:hover .info {
  visibility: visible;
  opacity: 1;
}
.the-feature.from_left_and_right a:hover .info h3,
.the-feature.from_left_and_right a:hover .info p {
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -ms-transform: translateX(0);
  -o-transform: translateX(0);
  transform: translateX(0);
}
</style>
