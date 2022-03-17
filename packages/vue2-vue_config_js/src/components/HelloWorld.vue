<!--
 * @Author: hy
 * @Date: 2022-03-17 23:36:55
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-03-17 23:36:55
 * @FilePath: /interview-questions/packages/vue2-vue_config_js/src/components/ComponentCommunication/HelloWorld.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
