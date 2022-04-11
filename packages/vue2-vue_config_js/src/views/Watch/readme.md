<!--
 * @Author: hy
 * @Date: 2022-04-10 13:05:30
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-04-10 13:47:58
 * @FilePath: /interview-questions/packages/vue2-vue_config_js/src/views/Watch/readme.md
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->




### watch


##### 基础使用

> 官网文档: [文档>](https://cn.vuejs.org/v2/api/#watch)

```js

  var vm = new Vue({
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: {
      f: {
        g: 5
      }
    }
  },
  watch: {
    a(val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
    // 方法名
    b: 'someMethod',
    // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
    c: {
      handler: function (val, oldVal) { /* ... */ },
      deep: true
    },
    // 该回调将会在侦听开始之后被立即调用
    d: {
      handler: 'someMethod',
      immediate: true
    },
    // 你可以传入回调数组，它们会被逐一调用
    e: [
      'handle1',
      function handle2 (val, oldVal) { /* ... */ },
      {
        handler: function handle3 (val, oldVal) { /* ... */ },
        /* ... */
      }
    ],
    // watch vm.e.f's value: {g: 5}
    'e.f': function (val, oldVal) { /* ... */ }
  }
})
vm.a = 2 // => new: 2, old: 1

```

-  注意，不应该使用箭头函数来定义 watcher 函数
    -  (例如 `searchQuery: newValue => this.updateAutocomplete(newValue)`)。理由是箭头函数绑定了父级作用域的上下文，所以 `this` 将不会按照期望指向 `Vue` 实例，`this.updateAutocomplete` 将是 `undefined。`

> 响应式时的 `Watcher` 类 三种分别是？ `user-watcher`

``` js

export default {
  watch: {
    name(newName) {...}
    // or
    name:{
      handler(newVal,oldVal){...}
    }
  }
}

```

其实它只是this.$watch这个API的一种封装：

``` js

export default {
  created() {
    this.$watch('name', newName => {...})
  }
}

``` 
