<template>
  <div class="dashboard-container">
    <el-row :gutter="10">
      <el-col :xs="8"
              :sm="6"
              :md="4"
              :lg="3"
              :xl="6">
        <div class="grid-content">
          <el-tabs v-model="activeName"
                   @tab-click="handleClick">
            <el-tab-pane label="技能掌握"
                         name="first">
              <transition name="fade">
                <christmasLights />
              </transition>
            </el-tab-pane>
            <el-tab-pane label="个人技能"
                         name="second">
              <div class="chart-container">
                <funnel
                  v-if="'second' === activeName"
                  height="100%"
                  width="100%" />
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ChristmasLights from '@/components/ChristmasLights'
import Funnel from './components/Funnel'
export default {
  name: 'Dashboard',
  components: { ChristmasLights, Funnel },
  data() {
    return { activeName: 'first' }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.dashboard-container{
padding: 20px;
}
.chart-container{
  position: relative;
  width: 100%;
  height: 400px;
}
</style>
