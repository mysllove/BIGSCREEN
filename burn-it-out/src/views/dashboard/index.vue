<template>
  <div class="dashboard-container">
    <el-row :gutter="10">
      <el-col :xs="8"
              :sm="6"
              :md="4"
              :lg="3"
              :xl="8">
        <div class="grid-content">
          <el-tabs v-model="activeName">
            <el-tab-pane label="用户管理"
                         name="first">
              <div class="christmasLight">
                <christmasLights />
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
export default {
  name: 'Dashboard',
  components: { ChristmasLights },
  data() {
    return { activeName: 'first' }
  }
}
</script>

<style>
.dashboard-container .christmasLight{
      padding: 15px;
  }
</style>
