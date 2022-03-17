<!--
 * @Author: hy
 * @Date: 2022-03-17 23:36:19
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-03-17 23:36:22
 * @FilePath: /interview-questions/packages/vue2-vue_config_js/src/components/ComponentCommunication/vmodel.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->

<template>
  <div>
    v-model :
    <div>
      <input
        type="text"
        :value="currentValue"
        @input="$emit('input', $event.target.value)"
      />
      <!-- 
        <input
        type="text"
        :value="currentValue"
        @input="handleInput"
      />
       -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: [String, Number],
  },
  data() {
    return {
      currentValue:
        this.value === undefined || this.value === null ? "" : this.value,
    };
  },
  methods: {
    handleInput(event) {
      const value = event.target.value;
      this.$emit("input", value);
    },
  },
};
</script>
