<!--
 * @Author: hy
 * @Date: 2022-05-07 23:32:30
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-08 00:00:52
 * @FilePath: /interview-questions/packages/vue2-vue_config_js/src/views/Watch/item.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div>
    <input type="text" v-model="item" />
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    item: Number,
  },
  data() {
    return {};
  },
  watch: {
    item(newVal, oldVal) {
      console.log("item oldVal ==>", oldVal);
      console.log("item newVal ==>", newVal);
      /*
      item oldVal ==> 1
      item.vue?bc0b:29 item newVal ==> 2
      vue.runtime.esm.js?6730:619 [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "item"
      ...
      item.vue?bc0b:28 item oldVal ==> 2
      item.vue?bc0b:29 item newVal ==> 21
      */
    },
  },
  computed: {
    _item() {
      return this.item;
    },
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
