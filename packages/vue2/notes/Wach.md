<!--
 * @Author: hy
 * @Date: 2022-05-07 22:41:22
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-08 00:06:25
 * @FilePath: /interview-questions/packages/vue2/notes/Wach.md
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
# Watch


### 注意点

组件的props不可以直接被watch监听,因为我们watch只能监听外部改变组件的props改变，不能监听内部直接对props值的更改，最好data or computed 做代理更改
会报错：`vue.runtime.esm.js?6730:619 [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "abc"`避免直接改变prop，因为每当父组件重新渲染时，该值将被覆盖。相反，应使用基于道具值的数据或计算属性。道具被改变:“item” 
