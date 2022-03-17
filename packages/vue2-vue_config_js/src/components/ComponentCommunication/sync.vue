<!--
 * @Author: hy
 * @Date: 2022-03-17 23:34:41
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-03-17 23:34:41
 * @FilePath: /interview-questions/packages/vue2-vue_config_js/src/components/ComponentCommunication/sync.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->

<template>
  <div>
    .sync :
    <div>{{ add }}</div>
    <button @click="$emit('update:add', add + 1)">add sync</button>
  </div>
</template>
<script>
export default {
  // see at https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6
  name: "Sync",
  props: {
    add: Number,
  },
  // data() {
  //   return {};
  // },
  // methods: {},
};
</script>
