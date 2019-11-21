import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        todos: [
            { id: 1, text: ".wo", done: true },
            { id: 2, text: ".aa", done: false }
        ]
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        jian(state) {
            state.count--;
        }
    },
    actions: {},
    modules: {}
});