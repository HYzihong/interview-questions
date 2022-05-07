<!--
 * @Author: hy
 * @Date: 2022-04-09 18:35:25
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-08 00:20:00
 * @FilePath: /interview-questions/packages/vue2-vue_config_js/src/views/Watch/index.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div>
    <div>a:{{ a }}<button @click="aAdd">add</button></div>
    <!-- <div>obj:{{ obj }}<button @click="objAdd">add</button></div> -->
    <div>
      obj:{{ obj }}<button @click="objAAdd">add a</button
      ><button @click="objBAdd">add b</button>
    </div>
    <div>
      children
      <Item :item="item" />
      <button @click="childrenAdd">child add</button>
    </div>
  </div>
</template>

<script>
import Item from "./item.vue";
export default {
  data() {
    return {
      a: 1,
      obj: { a: 1, b: 1 },
      item: 1,
    };
  },
  watch: {
    // 使用方法1：
    // a(val) {
    // console.log("watch a ==>", val);
    // },
    // 使用方法2：
    // a: "aLog",
    // 使用方法3：
    // a: {
    //   handler: "aLog",
    //   immediate: true, // 立即出发
    // },
    // 使用方法4：
    // a: {
    //   handler(val) {
    //     console.log("watch a ==>", val);
    //   },
    //   immediate: true,
    // },
    // 使用方法5： 从上到下，依次执行
    a: [
      "aLog",
      // 可以不不写函数名，这里只是为了规范化
      function handler(val) {
        // 2
        console.log("watch a 2 ==>", val);
      },
      {
        handler: "aLog",
        immediate: true,
      },
      {
        handler(val) {
          // 4
          console.log("watch a 4 ==>", val);
        },
        immediate: true,
      },
      {
        handler(val) {
          //
          console.log("watch a 5 ==>", val);
        },
        immediate: true,
      },
    ],
    // obj(newVal, oldVal) {
    //   console.log(newVal, oldVal);
    // },
    obj: {
      handler: function (newVal, oldVal) {
        console.log("watch obj ==>", newVal.a, oldVal.a);
      },
      // 在变更 (不是替换) 对象或数组时，旧值将与新值相同，因为它们的引用指向同一个对象/数组。Vue 不会保留变更之前值的副本。
      deep: true,
    },
    "obj.a": {
      handler: function (newVal, oldVal) {
        console.log("watch obj a ==>", newVal, oldVal);
      },
      deep: true,
    },
    $route: {
      handler(to, from) {
        console.log("route to ==>", to);
        if (to.name === "Watch") console.log("router on watch .");
        console.log("route from ==>", from);
      },
      immediate: true,
    },
    // vue router 实例
    // $router: {
    //   handler(to, from) {
    //     console.log("router to ==>", to);
    //     console.log("router from ==>", from);
    //   },
    //   immediate: true,
    // },
  },
  created() {
    // wa();
  },
  mounted() {
    // 实现只监听一次的效果
    // const unwatch = this.$watch("a", function (newValue, oldValue) {
    //   console.log("mounted watch a ==>", newValue, oldValue);
    //   unwatch();
    // });
    this.aOneOffWatch();
  },
  methods: {
    aAdd() {
      this.a++;
    },
    aLog(val) {
      console.log("watch a  by a log==>", val);
    },
    aOneOffWatch() {
      // vm.$watch 返回一个取消观察函数，用来停止触发回调：
      const unwatch = this.$watch("a", function (newValue, oldValue) {
        console.log("mounted watch a ==>", newValue, oldValue);
        unwatch();
        //  注意在带有 immediate 选项时，你不能在第一次回调时取消侦听给定的 property
      });
    },
    objAdd() {
      this.obj.a++;
    },
    objAAdd() {
      this.obj.a++;
    },
    objBAdd() {
      this.obj.b++;
    },
    objLog(val) {
      console.log("watch obj by obj log==>", val);
    },
    // child
    childrenAdd() {
      this.item++;
    },
  },
  components: { Item },
};
</script>
