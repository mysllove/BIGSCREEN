<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <h2>{{ counts }}</h2>
    <button @click="increment">+</button>
    <button @click="jian">-</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    counts() {
      return this.$store.getters.doneTodosCount;
    },
    ...mapState([
      // 映射 this.count 为 store.state.count
      "count"
    ])
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    jian() {
      this.$store.commit("jian");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
