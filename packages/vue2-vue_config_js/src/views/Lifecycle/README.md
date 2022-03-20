<!--
 * @Author: hy
 * @Date: 2022-03-20 00:06:53
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-03-20 17:24:38
 * @FilePath: /interview-questions/packages/vue2-vue_config_js/src/views/Lifecycle/README.md
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
# Lifecycle

## components lifecycle
- (beforeRouteEnter 的 to,from 执行 )
- beforeCreate
- created
- beforeMount
- (beforeRouteEnter 的 next 执行 )
- mounted
- beforeUpdate
- updated
- beforeDestroy
- destoryed

## father and son components lifecycle

- beforeCreate
- created
- beforeMount
- child beforeCreate
- child created
- child beforeMount
- (beforeRouteEnter.next 执行)
- child  mounted
- mounted
- beforeUpdate
- child  beforeUpdate
- child  updated
- updated


#### No component communication

- child  beforeUpdate
- child  updated
- child  beforeUpdate
- child  updated
- ...... 



#### Have component communication

-   beforeUpdate
- child  beforeUpdate
- child  updated
-   updated
-   beforeUpdate
- child  beforeUpdate
- child  updated
-   updated
- ...... 

#### destroy son component

- beforeUpdate
- child  beforeDestroy
- child  destroyed
- updated

## keep-alive：
- [activated](https://cn.vuejs.org/v2/api/#activated)
- [deactivated](https://cn.vuejs.org/v2/api/#deactivated)


---

#### other:

不要在选项 property 或回调上使用箭头函数 ==>

比如 `created: () => console.log(this.a)` 或 `vm.$watch('a', newValue => this.myMethod())`。

因为箭头函数并没有 `this`，`this` 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 `Uncaught TypeError: Cannot read property of undefined` 或 `Uncaught TypeError: this.myMethod is not a function` 之类的错误。
