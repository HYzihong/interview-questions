<!--
 * @Author: hy
 * @Date: 2022-03-17 23:35:26
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-03-17 23:35:26
 * @FilePath: /interview-questions/packages/vue2-vue_config_js/src/components/ComponentCommunication/vmodel-model.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->

<template>
  <div>
    v-model model :
    <div>
      <input
        type="checkbox"
        :checked="checked"
        v-on:change="$emit('change', $event.target.checked)"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: "checked",
    event: "change",
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
