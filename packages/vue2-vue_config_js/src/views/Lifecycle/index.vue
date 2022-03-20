<!--
 * @Author: hy
 * @Date: 2022-03-19 20:37:32
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-03-20 18:02:08
 * @FilePath: /interview-questions/packages/vue2-vue_config_js/src/views/Lifecycle/index.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div id="lifecycle">
    <div ref="ddd">ref ddd</div>
    <div>father lifecycle : {{ message }}</div>
    <LifecycleChild v-if="isChild" :num="num" @add="add" />
    <button @click="showChild">
      {{ !isChild ? "show" : "disabled" }} child
    </button>
  </div>
</template>
<script>
import LifecycleChild from "./LifecycleChild.vue";
export default {
  beforeRouteEnter(to, from, next) {
    console.log("---------- beforeRouteEnter ----------");
    console.log("组件内的守卫 beforeRouteEnter ~");
    console.log("to ==>", to);
    console.log("from ==>", from);
    console.log("next ==>", next);
    // TODO 为什么这里跟文档不一样 我们还是可以获取到this 实例。文档地址 https://v3.router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E7%BB%84%E4%BB%B6%E5%86%85%E7%9A%84%E5%AE%88%E5%8D%AB
    next((_this) => {
      console.log("--------- next ---------");
      console.log("next this ==>", _this);
      // console.log("next this ==>", _this.msg);
      _this.logMessage("beforeRouteEnter", () => {
        console.log(
          `
          在渲染该组件的对应路由被 (window.confirm)confirm 前调用
          文档中因为当钩子执行前，组件实例还没被创建。
          但是会在child  beforeMount 和 child  mounted 之中执行，也会获取到this
          `
        );
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
        console.log(` 
        在当前路由改变，但是该组件被复用时调用
        举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        可以访问组件实例 this
     `);
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
    // next((_this) => {
    //   console.log("--------- next ---------");
    //   console.log("next this ==>", _this);
    //   _this.logMessage("beforeRouteLeave", () => {
    //     console.log(`
    //     导航离开该组件的对应路由时调用
    //     可以访问组件实例 this
    //     `);
    //   });
    //   console.log("--------- ./ next ---------------");
    // });
    console.log(
      `
    导航离开该组件的对应路由时调用
    可以访问组件实例 this
      `
    );
    const answer = window.confirm(
      "Do you really want to leave? you have unsaved changes!"
    );
    if (answer) {
      next();
    } else {
      next(false);
    }
    console.log("---------- ./ beforeRouteLeave ----------");
  },
  components: {
    LifecycleChild,
  },
  props: {},
  data() {
    return {
      isChild: true,
      num: 0, // child
      msg: "",
      message: "beforeCreate",
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
    add(e) {
      console.log("add ==>", e);
      this.num = e;
    },
    showChild() {
      this.isChild = !this.isChild;
    },
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
