<!--
 * @Author: hy
 * @Date: 2022-04-04 23:16:56
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-04-04 23:17:24
 * @FilePath: /interview-questions/packages/front-end-concept/crossDomain.md
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->

# cross-domain 跨域

### 基本概念

- 跨域：由于浏览器的同源策略，为了防范`跨站脚本的攻击`，禁止客户端脚本对不同域下的文档或脚本进行跨站调用资源。


- 同源： protocol（协议）、domain（域名）、port（端口）三者同时一致时才是同源状态。

同源是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSFR等攻击。

- `https://www.HYzihong.com(:80)/index.html?key1=value1&key2=value2#基本概念`
  - https —— 协议(`protocol`)
  - www.HYzihong.com —— 域名(`domain`)
  - :443 —— 端口号(`port`)
    - https(:443)
    - http(:80)
  - /index.html —— 请求路径
  - ?key1=value1&key2=value2 —— 请求参数
  - #基本概念 —— 页面锚点



所以协议、域名、端口有其中一个不一样就算是跨域。
> 浏览器会报错：`No 'Access-Control-Allow-Origin' header`

示例：
原地址 https://www.HYzihong.com(:443)

|地址|是否跨域|原因|
|-|-|-|
|`http:`//www.HYzihong.com|true|协议不一致|
|https://`www.HYzihong.cn`|true|域名不一致|
|https://`api.HYzihong.com`|true|域名不一致|
|https://www.HYzihong.com`:8888`|true|端口不一致|












