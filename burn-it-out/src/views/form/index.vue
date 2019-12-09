<template>
  <div class="app-container">
    <zdy @my-event="doSomething" />
  </div>
</template>

<script>
import zdy from './components/zdy'
export default {
  name: 'Zdy',
  components: { zdy },
  data() {
    return {

    }
  },
  methods: {
    doSomething() {
      alert(2)
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

