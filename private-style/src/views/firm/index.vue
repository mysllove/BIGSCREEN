<template>
  <div class="warp">
    <div class="statistics-collection">
      <div class="echartGroupItem">
        <ChartB class="echarts" v-if="model1 === 'select2'" />
        <ChartA class="echarts" v-else />
        <Select v-model="model1" style="width:200px">
          <Option
            v-for="item in selectData"
            :value="item.value"
            :key="item.value"
            >{{ item.label }}</Option
          >
        </Select>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import ChartA from "@/components/chartA.vue";
import ChartB from "@/components/chartB.vue";
export default {
  name: "firm",
  components: { ChartA, ChartB },
  data() {
    return {
      selectData: [
        {
          value: "select1",
          label: "企业规模"
        },
        {
          value: "select2",
          label: "涉危企业"
        }
      ],
      model1: ""
    };
  }
};
</script>

<style>
.echartGroupItem {
  text-align: center;
}
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
