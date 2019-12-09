<template>

  <div>
    <div v-for="ok in info"
         :key="ok.index">{{ok.title}}
      <el-button @click="$emit('enlarge-text',1)">默认按钮</el-button>
    </div></div>

</template>
<script>
export default {
  name: 'DialogComponent',
  props: {
    info: {
      type: Array,
      default: function() {
        return 'info'
      }
    }
  },

  data() {
    return {

    }
  },
  watch: {
    info: function(newValue) {
      console.log(newValue)
    }
  },
  mounted: {

  }
}
</script>
