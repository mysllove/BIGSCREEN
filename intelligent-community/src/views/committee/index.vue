
<template>
  <div class="app-container">
    <el-tabs type="card">
      <el-tab-pane>
        <span slot="label" @click="toggleTabs('propertyManagement')">物业管理</span>
        <tabsForm :toggle-data="toggleData" />
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label" @click="toggleTabs('personnelManagement')">人员管理</span>
        <tabsForm :toggle-data="toggleData" />
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
import TabsForm from './components/TabsForm'
export default {
  components: {
    TabsForm
  },
  data() {
    return {
      toggleData: ''
    }
  },
  mounted() {
    this.toggleTabs('propertyManagement')
  },
  methods: {
    toggleTabs(item) {
      this.toggleData = item
      console.log(this.toggleData)
    }
  }
}
</script>

