<!--
 * @Author: hy
 * @Date: 2022-03-17 23:33:50
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-03-17 23:33:50
 * @FilePath: /interview-questions/packages/vue2-vue_config_js/src/components/ComponentCommunication/index.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->

<template>
  <div>
    <!-- v-model -->
    <VModel v-model="v_model_input_value"></VModel>
    <VmodelModel v-model="v_model_model_value"></VmodelModel>
    <!-- ./ v-model -->
    <!-- sync -->
    <!-- 旧写法 -->
    <!-- <Sync :value="add_sync" v-on:update:add="add_sync = $event" /> -->
    <!-- 新写法 -->
    <!-- <Sync :add.sync="add_sync" /> -->
    <!-- <Sync v-bind:add.sync="add_sync" /> -->
    <!-- <Sync :value="add_sync" :add.sync="add_sync" /> -->
    <!-- 别名 -->
    <a-sync :value="add_sync" :add.sync="add_sync" />
    <!-- ./ sync -->
  </div>
</template>

<script>
import VModel from "./vmodel.vue";
import VmodelModel from "./vmodel-model.vue";
import Sync from "./sync.vue";
export default {
  components: {
    VModel,
    VmodelModel,
    // Sync,
    // 别名
    "a-sync": Sync,
  },
  props: {},
  data() {
    return {
      v_model_input_value: "v-model input value",
      v_model_model_value: true,
      add_sync: 1,
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
