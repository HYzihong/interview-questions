<!--
 * @Author: hy
 * @Date: 2022-04-09 18:35:25
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-04-11 23:25:55
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
  </div>
</template>

<script>
// const wa = this.$watch("a", function (newVal, oldVal) {
//   console.log("can close watch , a ==>", newVal, oldVal);
// });
export default {
  data() {
    return {
      a: 1,
      obj: { a: 1, b: 1 },
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
      "aLog", // 1
      // 可以不不写函数名，这里只是为了规范化
      function handler(val) {
        // 2
        console.log("watch a 2 ==>", val);
      },
      {
        handler: "aLog", // 3
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
      deep: true,
    },
    "obj.a": {
      handler: function (newVal, oldVal) {
        console.log("watch obj a ==>", newVal, oldVal);
      },
      deep: true,
    },
    // TODO 取消侦听
  },
  created() {
    // wa();
  },
  mounted() {},
  methods: {
    aAdd() {
      this.a++;
    },
    aLog(val) {
      console.log("watch a  by a log==>", val);
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
  },
};
</script>
