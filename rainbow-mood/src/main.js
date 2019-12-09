import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css/normalize.css"; // a modern alternative to CSS resets
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/index.scss"; // global css

Vue.use(ElementUI);
Vue.config.productionTip = false;
import { mockXHR } from "../mock";
if (process.env.NODE_ENV === "production") {
  mockXHR();
}
new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
