import Vue from "vue";
import VueRouter from "vue-router";
import layout from "@/layout";
Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "layout",
    component: layout,
    redirect: "/firm",
    children: [{
            path: "/firm",
            name: "firm",
            component: function() {
                return import (
                    /* webpackChunkName: "about" */
                    "../views/firm/index.vue"
                );
            }
        },
        {
            path: "/about",
            name: "about",
            component: function() {
                return import ( /* webpackChunkName: "about" */ "../views/About.vue");
            }
        }
    ]
}];

const router = new VueRouter({
    routes
});

export default router;