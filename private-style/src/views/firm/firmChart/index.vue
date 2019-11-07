<template>
  <div class="ok">
    <ChartAa class="echarts" />
  </div>
</template>

<script>
import ChartAa from "@/components/chartAa.vue";
export default {
  name: "firmChart",
  components: { ChartAa }
};
</script>

<style>
.ok {
  position: relative;
  z-index: 1111;
  color: #fff;
  border: 1px solid #00feff;
}
</style>
