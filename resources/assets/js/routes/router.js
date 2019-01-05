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
                },
                {
                    path: 'lottery',
                    component: resolve => void require(["../page/lottery/draw.vue"], resolve)
                }
            ]
        },
        {
            path: "/sign",
            name: "sign",
            component: resolve => void require(["../page/layouts/style.vue"], resolve),
            children: [
                {
                  path: 'ready',
                  component: resolve => void require(["../page/sign/index.vue"], resolve),
                },
                {
                  path: 'draw',
                  component: resolve => void require(["../page/sign/draw.vue"], resolve),
                },
                {
                  path: 'checkdraw',
                  component: resolve => void require(["../page/sign/checkdraw.vue"], resolve),
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
        }
    ],
});
