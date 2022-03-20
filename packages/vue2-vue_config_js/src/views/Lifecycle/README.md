<!--
 * @Author: hy
 * @Date: 2022-03-20 00:06:53
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-03-20 19:21:45
 * @FilePath: /interview-questions/packages/vue2-vue_config_js/src/views/Lifecycle/README.md
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
# Lifecycle

> --
> 
> 文档：[Lifecycle](https://cn.vuejs.org/v2/guide/instance.html#%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)
> 
> ![生命周期](https://cn.vuejs.org/images/lifecycle.png)
>
>



## components lifecycle

- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestroy
- destoryed

## router guard in components lifecycle

- 导航被触发
- 在失活的组件里调用 `beforeRouteLeave` 守卫
- 全局前置守卫 `beforeEach`
- 在重用的组件里调用 `beforeRouteUpdate` 守卫
- 组件内的守卫 `beforeRouteEnter` 的 to,from 执行 
- 调用全局的 `beforeResolve` 守卫
- 导航被确认
- 调用全局的 afterEach 钩子
- 触发 DOM 更新
- beforeCreate
- created
- beforeMount
- 组件内的守卫 beforeRouteEnter 的 next 执行（调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数，创建好的组件实例会作为回调函数的参数传入） 
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
