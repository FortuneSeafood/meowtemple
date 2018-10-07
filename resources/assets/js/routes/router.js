import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Vue.use(VueRouter);
// Vue.config.debug = true;

// import Home from '../page/home/home';
// import Style from '../page/layouts/style';
// const page = (name) => {
//     const importPage = () => import(`../page/${name}.vue`);
//     return importPage;
//   };

export default new VueRouter({
    routes: [
        {
            path: "/",
            name: "meow",
            component: resolve => void require(["../page/layouts/style.vue"], resolve),
            children: [
                {
                    path: 'home',
                    component: resolve => void require(["../page/home/home.vue"], resolve),
                }
            ]
        },
        {
            path: "/tarot",
            name: "tarot",
            component: resolve => void require(["../page/layouts/style.vue"], resolve),
            children: [
                {
                  path: 'draw',
                  component: resolve => void require(["../page/tarot/draw.vue"], resolve),
                }
            ]
        },
    ],
});
