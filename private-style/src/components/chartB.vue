<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
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
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["45%", "70%"],
            center: ["50%", "50%"],
            label: false,
            color: [
              "#3294e6",
              "#dbc533",
              "#37d5de",
              "#7dbf1f",
              "#ca2760",
              "#c849c8"
            ],
            data: [
              { value: 335, name: "类别1" },
              { value: 310, name: "类别2" },
              { value: 234, name: "类别3" },
              { value: 135, name: "类别4" },
              { value: 148, name: "类别5" },
              { value: 208, name: "类别6" }
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
