<template>
  <div class="statistics-collection">
    <!-- <div v-for="(chardata, index) in msg" :key="index">
      <echartscom :chartData="chardata" autoresize />
    </div> -->
    <ve-ring
      :data="chartData"
      width="350px"
      height="230px"
      :legend-visible="false"
      :settings="chartSettings"
      :events="chartEvents"
      :theme="theme"
    ></ve-ring>
  </div>
</template>

<script>
// import echartscom from "@/components/echartscom.vue";
export default {
  data() {
    this.chartSettings = {
      radius: ["20%", "60%"],
      offsetY: 110
    };
    this.theme = {
      color: ["#2fc4fc", "#2ea1fc", "#1ddffa", "#74f7f9"]
    };
    var self = this;
    this.chartEvents = {
      click: function(e) {
        self.name = e.name;
        if (e.dataIndex == 1) {
          alert(1);
        }
      }
    };
    return {
      chartData: {
        columns: ["日期", "访问用户"],
        rows: [
          { 日期: "大型\n3286", 访问用户: 6119 },
          { 日期: "中型\n3286", 访问用户: 12642 },
          { 日期: "小型\n3286", 访问用户: 6283 },
          { 日期: "微型\n3286", 访问用户: 3286 }
        ]
      }
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style>
.echarts {
  width: 350px;
  height: 230px;
}
.statistics-collection {
  position: relative;
  z-index: 9999;
  color: #fff;
  border: 1px solid #00feff;
  display: flex;
}
.statistics-collection::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: #1a3779;
  opacity: 0.8;
}
</style>
