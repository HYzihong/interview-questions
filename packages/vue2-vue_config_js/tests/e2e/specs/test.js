/**
 * @Author: hy
 * @Date: 2022-03-16 14:46:44
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-03-16 15:10:53
 * @FilePath: /interview-questions/packages/vue2-vue_config_js/tests/e2e/specs/test.js
 * @Copyright 2022 hy, All Rights Reserved. 
 * @仅供学习使用~
 **/
// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    // @ts-ignore
    cy.visit("/");
    cy.contains("h1", "Welcome to Your Vue.js App");
  });
});
