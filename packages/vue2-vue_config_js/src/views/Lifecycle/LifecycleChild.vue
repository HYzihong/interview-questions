<!--
 * @Author: hy
 * @Date: 2022-03-19 22:31:24
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-03-20 16:57:07
 * @FilePath: /interview-questions/packages/vue2-vue_config_js/src/views/Lifecycle/LifecycleChild.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div>
    <div>child</div>
    <div>child lifecycle : {{ message }}</div>
    <div>
      {{ _num }}
      <button @click="add">add</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    num: Number,
  },
  data() {
    return {
      // num: 0,
      msg: "",
      message: "beforeCreate",
    };
  },
  watch: {},
  computed: {
    _num: function () {
      return this.num;
    },
  },
  beforeCreate() {
    console.log("<------------");
    console.log(`--------- child beforeCreate ---------`);
    console.log(`
      实例初始化之后
    
      this指向创建的实例
      数据观测（data observer）和event/watcher配置尚未完成
      不能访问到methods、data、computed、watch上的方法和数据
    `);
    console.log("this.data.msg ==>", this.msg);
    console.log("this.methods.logMessage ==>", this.logMessage);
    // this.logMessage("beforeCreate");
    console.log("------------>");
  },
  created() {
    this.message += " created";
    this.logMessage("created", () => {
      this.msg = "create";
    });
  },
  beforeMount() {
    this.message += " beforeMount";
    this.logMessage("beforeMount", () => {
      this.msg = "beforeMount";
    });
  },
  mounted() {
    this.message += " mounted";
    this.logMessage("mounted", () => {
      this.msg = "mounted";
    });
  },
  beforeUpdate() {
    this.message += " beforeUpdate";
    this.logMessage("beforeUpdate", () => {
      this.msg = "beforeUpdate";
    });
  },
  updated() {
    // if (this.message.indexOf("updated")) {
    // this.message += " updated";
    // }
    // this.message = this.message + " updated";
    this.logMessage("updated", () => {
      this.msg = "updated";
    });
  },
  beforeDestroy() {
    this.message += " beforeDestroy";
    this.logMessage("beforeDestroy", () => {
      this.msg = "beforeDestroy";
    });
  },
  destroyed() {
    this.message += " destroyed";
    this.logMessage("destroyed", () => {
      this.msg = "destroyed";
    });
  },
  methods: {
    add() {
      let temp = this._num;
      this.$emit("add", temp + 1);
    },
    logMessage(msg, func) {
      console.log("<------------");
      console.log(`--------- child  ${msg} ---------`);
      if (func) func();
      console.log("this.data ==>", this._data);
      console.log("this.data.msg ==>", this.msg);
      console.log("this.$el ==>", this.$el);
      console.log("this.$refs ddd ==>", this.$refs.ddd);
      console.log("this.methods ==>", this);
      console.log("this.methods.logMessage ==>", this.logMessage);
      console.log("------------>");
    },
  },
};
</script>
