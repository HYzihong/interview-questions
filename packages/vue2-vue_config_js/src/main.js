/**
 * @Author: hy
 * @Date: 2022-03-17 23:39:26
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-03-17 23:39:27
 * @FilePath: /interview-questions/packages/vue2-vue_config_js/src/main.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/

import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
