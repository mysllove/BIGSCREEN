<template>
  <div class="functionSet">
    <saying />
    <div class="introduce">
    </div>
  </div>
</template>

<script>
import Saying from './components/Saying'
export default {
  name: 'Function',
  components: { Saying },
  data() {
    return {

    }
  }
}
</script>
<style>
.functionSet {
  padding: 0 15px;
}
</style>
