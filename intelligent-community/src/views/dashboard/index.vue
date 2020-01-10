<template>
  <div class="dashboard-container">
    <survey class="community-profile" />
    <el-divider />
    <discover class="intelligent-discovery" />
    <el-divider />
    <equipment class="equipment-operation" />
  </div>
</template>

<script>
import Survey from './components/Survey'
import Discover from './components/Discover'
import Equipment from './components/Equipment'

export default {
  name: 'Dashboard',
  components: {
    Survey, Discover, Equipment
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
