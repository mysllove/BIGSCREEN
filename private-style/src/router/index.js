import Vue from "vue";
import VueRouter from "vue-router";
import layout from "@/layout";
Vue.use(VueRouter);

const routes = [{
        path: "/",
        component: layout,
        hidden: true,
        children: [{
            path: "/layout",
            component: () =>
                import ("@/layout/index")
        }]
    },
    {
        path: "/firm",
        component: layout,
        children: [{
            path: "/firm",
            component: () =>
                import ("@/views/firm/index"),
            name: "firm"
        }]
    }
];

const router = new VueRouter({
    routes
});

export default router;