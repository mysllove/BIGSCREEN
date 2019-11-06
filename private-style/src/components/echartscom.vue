<template>
  <div class="chart-collection">
    <div
      style="width:350px;height:230px;"
      :id="echarts"
      class="echarts"
      ref="echarts"
    ></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "echartscom",
  props: {
    chartData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {
    drawCharts() {
      var myChart = echarts.init(document.getElementById(this.echarts));
      myChart.setOption({
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
            label: {
              formatter: "{b} : {c}"
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            data: this.chartData
          }
        ]
      });
      window.onresize = function() {
        myChart.resize();
      };
    }
  },
  computed: {
    echarts() {
      return "echarts" + Math.random() * 100000;
    }
  },
  mounted() {
    this.drawCharts();
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
