<!--
 * @Author: hy
 * @Date: 2022-03-17 23:38:20
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-03-20 20:18:15
 * @FilePath: /interview-questions/packages/vue2-vue_config_js/src/App.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->

<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>| -->
      <router-link to="/component_communication">
        Component Communication(组件通讯) </router-link
      >| <router-link to="/lifecycle">Lifecycle(生命周期)</router-link>|
      <router-link to="/computed">Computed(计算属性)</router-link>|
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
