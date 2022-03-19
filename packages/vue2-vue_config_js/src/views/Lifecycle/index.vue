<!--
 * @Author: hy
 * @Date: 2022-03-19 20:37:32
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-03-20 00:17:05
 * @FilePath: /interview-questions/packages/vue2-vue_config_js/src/views/Lifecycle/index.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div id="lifecycle">
    <div ref="ddd">ref ddd</div>
    <div>father lifecycle : {{ message }}</div>
    <LifecycleChild />
  </div>
</template>
<script>
import LifecycleChild from "./LifecycleChild.vue";
export default {
  beforeRouteEnter(to, from, next) {
    console.log("---------- beforeRouteEnter ----------");
    // console.log("--beforeRouteEnter--");
    console.log("to ==>", to);
    console.log("from ==>", from);
    console.log("next ==>", next);
    next((_this) => {
      console.log("--------- next ---------");
      console.log("next this ==>", _this);
      // console.log("next this ==>", _this.msg);
      _this.logMessage("beforeRouteEnter", () => {
        console.log("因为当钩子执行前，组件实例还没被创建");
      });
      console.log("--------- ./ next ---------------");
    });
    console.log("---------- ./ beforeRouteEnter ----------");
  },
  beforeRouteUpdate(to, from, next) {
    console.log("---------- beforeRouteUpdate ----------");
    // console.log("--beforeRouteEnter--");
    console.log("to ==>", to);
    console.log("from ==>", from);
    console.log("next ==>", next);
    next((_this) => {
      console.log("--------- next ---------");
      console.log("next this ==>", _this);
      // console.log("next this ==>", _this.msg);
      _this.logMessage("beforeRouteUpdate", () => {
        console.log("因为当钩子执行前，组件实例还没被创建");
      });
      console.log("--------- ./ next ---------------");
    });
    console.log("---------- ./ beforeRouteUpdate ----------");
  },
  beforeRouteLeave(to, from, next) {
    console.log("---------- beforeRouteLeave ----------");
    // console.log("--beforeRouteEnter--");
    console.log("to ==>", to);
    console.log("from ==>", from);
    console.log("next ==>", next);
    next((_this) => {
      console.log("--------- next ---------");
      console.log("next this ==>", _this);
      // console.log("next this ==>", _this.msg);
      _this.logMessage("beforeRouteLeave", () => {
        console.log("因为当钩子执行前，组件实例还没被创建");
      });
      console.log("--------- ./ next ---------------");
    });
    console.log("---------- ./ beforeRouteLeave ----------");
  },
  components: {
    LifecycleChild,
  },
  props: {},
  data() {
    return {
      msg: "",
      message: "",
    };
  },
  watch: {},
  computed: {},
  beforeCreate() {
    console.log("<------------");
    console.log(`--------- beforeCreate ---------`);
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
      this.msg = "created";
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
    // 文档: https://cn.vuejs.org/v2/api/#updated
    // 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用。
    // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
    // 然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。
    // 这里不能执行this.data导致触发的视图更新 造成死循环。
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
    logMessage(msg, func) {
      console.log("<------------");
      console.log(`--------- ${msg} ---------`);
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
