<!--
 * @Author: hy
 * @Date: 2022-05-08 12:24:28
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-08 13:20:21
 * @FilePath: /interview-questions/packages/vue2/notes/Computed.md
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
# Computed 计算属性

初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。例如：
```

<div id="example">
  {{ message.split('').reverse().join('') }}
</div>

```

