<template>
  <div>
    <div
      :id="id"
      :class="className"
      :style="{ height: height, width: width }"
    />
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "350px"
    },
    height: {
      type: String,
      default: "230px"
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));
      this.chart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color: ["#ff4517", "#42c3ff"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: [0, "70%"],

            label: {
              normal: {
                position: "inner"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "危化企业", selected: true },
              { value: 979, name: "全部企业" }
            ]
          }
        ]
      });
    }
  }

  // this.chart.on("click", param => {
  //   // 可以使用下面的方式进行路由的切换
  //   if (param.name == "大型") {
  //     this.$router.push({
  //       path: "/firm/firmChart",
  //       name: "firmChart"
  //     });
  //   }
  // });
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
