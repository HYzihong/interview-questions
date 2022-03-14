<!--
 * @Author: hy
 * @Date: 2022-03-14 13:07:09
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-03-14 14:44:58
 * @FilePath: /interview-questions/packages/pnpm-npm-yarn/pnpm/base.md
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
-->

# pnpm

### 屁话

> Fast, disk space efficient package manager.(快速、磁盘空间高效的包管理器。)

`pnpm` 由 `npm/yarn` 衍生而来，但却解决了 `npm` / `yarn` 内部潜在的 bug，并且极大了地优化了性能，扩展了使用场景。

### 关键词:

##### 1. 速度比`npm` / `yarn` 快得多

> [ yarn PnP 安装模式](https://classic.yarnpkg.com/en/docs/pnp/)
> 直接去掉 `node_modules`，将依赖包内容写在磁盘，节省了 `node` 文件` I/O` 的开销，这样也能提升安装速度。

##### 2. 高效利用磁盘空间

- `pnpm` 内部使用基于内容寻址的文件系统来存储磁盘上所有的文件
- 不会重复安装同一个包（安装一次，后续使用(hardlink)硬链接的方式引入
- `pnpm`在同一个第三方包的代码更新也有优化，未更新的代码文件会以 hardlink 的方式引入

#### 3. 直接支持 `monorepo` 模式

#### 4. 防止 node_module 的扁平结构中的一些包的非法引用问题，更安全的依赖管理方式

- `npm1/npm2` 中是嵌套结构,会造成依赖层层嵌套，依赖的路径过长、不同第三方包的同一个依赖会多次下载安装等问题
- 模块实例不能共享
- 虽然 npm3 和 yarn 实现了`扁平化依赖`,但是 node_modules 变的复杂
- 虽然`.pnpm`目录下虽然呈现的是扁平的目录结构，但是软链接的本质还是嵌套的结构

### 使用

##### ` pnpm install`

```bash

// 安装 axios
pnpm install axios
// 安装 axios 并将 axios 添加至 devDependencies
pnpm install axios -D
// 安装 axios 并将 axios 添加至 dependencies
pnpm install axios -S
// 在 monorepo 模式下 使用 --filter 来指定 package
pnpm install vite -r --filter @abc/def
pnpm uninstall vite -r --filter @abc/def


```

##### 依赖版本更新

```bash

pnpm up

```

---

参考：

1. https://juejin.cn/post/6932046455733485575
