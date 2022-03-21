<!--
 * @Author: hy
 * @Date: 2022-03-20 19:58:07
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-03-21 23:02:55
 * @FilePath: /interview-questions/packages/vue2-vue_config_js/src/views/Computed/index.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->

<template>
  <div>
    <h1>计算属性</h1>
    <div>msg:{{ msg }}</div>
    <div>reversed msg by computed:{{ _msg }}</div>
    <div>reversed msg by methods: "{{ reversedMessage() }}"</div>
    <div>
      计算属性是基于它们的响应式依赖进行缓存的,所以只在相关响应式依赖发生改变时它们才会重新求值
    </div>
    <div>{{ nowDate }}</div>
    <div>{{ fullName }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "msg",
      firstName: "zhang",
      lastName: "san",
    };
  },
  computed: {
    _msg: function () {
      // `this` 指向 vm 实例
      return this.msg.split("").reverse().join("");
    },
    nowDate: function () {
      return new Date();
    },
    fullName: {
      // getter
      get: function () {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set: function (val) {
        console.log("set val =>>", val);
        // var names = val.split(" ");
        // this.firstName = names[0];
        // this.lastName = names[names.length - 1];
      },
    },
  },
  methods: {
    reversedMessage: function () {
      return this.msg.split("").reverse().join("");
    },
  },
};
</script>
