/**
 * @Author: hy
 * @Date: 2022-03-17 23:37:30
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-03-20 18:54:37
 * @FilePath: /interview-questions/packages/vue2-vue_config_js/src/router/index.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import routerGlobalGuards from "./utils/routerGlobalGuards";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/lifecycle",
    name: "Lifecycle",
    component: () =>
      import(
        /* webpackChunkName: "lifecycle" */ "../views/Lifecycle/index.vue"
      ),
  },
  {
    path: "/component_communication",
    name: "ComponentCommunication",
    component: () =>
      import(
        /* webpackChunkName: "component_communication" */ "../views/ComponentCommunication/index.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 全局路由守卫
routerGlobalGuards(router);

export default router;
