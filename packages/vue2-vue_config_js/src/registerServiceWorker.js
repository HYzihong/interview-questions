/**
 * @Author: hy
 * @Date: 2022-03-17 23:39:02
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-03-17 23:39:03
 * @FilePath: /interview-questions/packages/vue2-vue_config_js/src/registerServiceWorker.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/

/* eslint-disable no-console */

import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated() {
      console.log("New content is available; please refresh.");
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    },
  });
}
