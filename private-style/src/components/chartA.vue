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
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: ["#2fc4fc", "#2ea1fc", "#1ddffa", "#74f7f9"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["25%", "70%"],
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "大型" },
              { value: 310, name: "中型" },
              { value: 234, name: "小型" },
              { value: 135, name: "微型" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });

      this.chart.on("click", param => {
        // 可以使用下面的方式进行路由的切换
        if (param.name == "大型") {
          this.$router.push({
            path: "/firm/firmChart",
            name: "firmChart"
          });
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
