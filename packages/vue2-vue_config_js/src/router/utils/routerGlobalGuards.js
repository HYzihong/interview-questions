/**
 * @Author: hy
 * @Date: 2022-03-20 18:30:54
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-03-20 18:54:55
 * @FilePath: /interview-questions/packages/vue2-vue_config_js/src/router/utils/routerGlobalGuards.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/
function routerGlobalGuards(router) {
  /*******
   * @description: 全局前置守卫
   * @param {*}
   * @return {*}
   */
  router.beforeEach((to, from, next) => {
    console.log("---------- beforeEach ----------");
    console.log("全局前置守卫 beforeEach ~");
    console.log("to ==>", to);
    console.log("from ==>", from);
    console.log("next ==>", next);
    next((_this) => {
      console.log("--------- next ---------");
      console.log("next this ==>", _this);
      console.log("--------- ./ next ---------------");
    });
    console.log("---------- ./ beforeEach ----------");
  });

  /*******
   * @description: 全局解析守卫
   * @param {*}
   * @return {*}
   */
  router.beforeResolve((to, from, next) => {
    console.log("---------- beforeResolve ----------");
    console.log("全局解析守卫 beforeResolve ~");
    console.log("to ==>", to);
    console.log("from ==>", from);
    console.log("next ==>", next);
    next((_this) => {
      console.log("--------- next ---------");
      console.log("next this ==>", _this);
      console.log("--------- ./ next ---------------");
    });
    console.log("---------- ./ beforeResolve ----------");
  });

  /*******
   * @description: 全局后置钩子
   * @param {*}
   * @return {*}
   */
  router.afterEach((to, from) => {
    console.log("---------- afterEach ----------");
    console.log("全局后置钩子 afterEach~");
    console.log("to ==>", to);
    console.log("from ==>", from);
    console.log("---------- ./ afterEach ----------");
  });
}

export default routerGlobalGuards;
