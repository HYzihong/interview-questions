<!--
 * @Author: hy
 * @Date: 2022-03-20 00:06:53
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-03-20 00:15:16
 * @FilePath: /interview-questions/packages/vue2-vue_config_js/src/views/Lifecycle/README.md
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
# Lifecycle

## components lifecycle
(beforeRouteEnter 的 to,from 执行 )
beforeCreate
created
beforeMount
(beforeRouteEnter 的 next 执行 )
mounted
beforeUpdate
updated
beforeDestroy
destoryed

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

--- 

No component communication：
- child  beforeUpdate
- child  updated

---

have component communication

## keep-alive：
- [activated](https://cn.vuejs.org/v2/api/#activated)
- [deactivated](https://cn.vuejs.org/v2/api/#deactivated)

