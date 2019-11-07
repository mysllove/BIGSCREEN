import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import "@/styles/index.scss"; // global css
import echarts from "echarts";

Vue.use(echarts);
Vue.use(ViewUI);

new Vue({
    router,
    store,
    render: function(h) {
        return h(App);
    }
}).$mount("#app");