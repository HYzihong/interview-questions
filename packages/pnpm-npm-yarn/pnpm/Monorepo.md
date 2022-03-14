<!--
 * @Author: hy
 * @Date: 2022-03-13 18:53:51
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-03-14 15:00:02
 * @FilePath: /interview-questions/packages/pnpm-npm-yarn/Pnpm/Monorepo.md
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
-->

# monorepo

### 设置 workspace

通过 glob 语法将 packages 下的所有文件夹都当做一个 package，添加到 monorepo 中进行管理。

pnpm-workspace.yaml

```yaml
packages:
  - "packages/**"
```

### 添加依赖

##### 全局依赖

```bash

# 安装 一些通用的依赖 比如 测试 ts
pnpm install typescript jest -D -W

```

##### 局部依赖

```bash

#   使用 -r 代替  -W
#  --filter 后面接 @namespace/packageName
pnpm install vue -r --filter @namespace/packageName
```

#### package 之间的相互引用（link 机制）

```bash

# 通过 软链接 的方式 在 web 中引入  tools 这个依赖
pnpm i @abc/tools -r --filter @abc/web

```

> 在代码执行`pnpm publish`时，使用 workspace 的 link 引入的依赖会变成外部依赖，很好的解决不同环境的依赖问题。

### 项目开发

#### 多个 package 同时启动

```JSON

{
  ...
  "scripts": {
    "start": "pnpm -C ./packages/xxx dev & pnpm -C ./packages/xxx dev",
  }
  ...
}

```

> 删除项目下的所有的依赖 node_modules `"clean": "rm -rf node_modules **/*/node_modules",`

### 使用场景

- 组件库的开发,可以抽离每个组件和 tools、theme 可以被单独引入到项目。
- 也可以在项目中 以不同的环境来为一个 package,比如 pc 端、h5、桌面端，方便开发
- 开发工具链的时候也可以方便的拆分不同的模块，来完成集成和发布

---

参考：

- https://zhuanlan.zhihu.com/p/422740629
