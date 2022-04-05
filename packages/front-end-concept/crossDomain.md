<!--
 * @Author: hy
 * @Date: 2022-04-04 23:16:56
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-04-05 20:15:57
 * @FilePath: /interview-questions/packages/front-end-concept/crossDomain.md
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->

# cross-domain 跨域

### 基本概念

- 跨域：由于浏览器的`同源策略`，为了防范`跨站脚本的攻击`，禁止客户端脚本对不同域下的文档或脚本进行跨站调用资源。


- 同源： protocol（协议）、domain（域名）、port（端口）三者同时一致时才是同源状态。

> 同源是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSFR等攻击。

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
|https://www.HYzihong.com`/a.html`|false|同源页面|
|https://www.HYzihong.com`/a.js`|false|同源脚本|


### 常见跨域解决方案

#### 1. vue proxyTable or proxy

vue 开发状态下`vue-cli` 提供的**跨域的代理中转服务器服务**, 是基于 `webpack` 的 [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware) 插件实现的。

```javascript

// vue-cli2
// webpack.config.js
proxyTable: {
  '/api': {
     target: 'http://localhost:3000',
  }
},

// vue-cli3
// vue.config.js
module.exports = {
    devServer: {
        port: 8000,
        secure: true, // https
        open: true,
        overlay: {
          warnings: false,
          errors: true
        }
        // ...
        proxy: {
            "/api": {
                target: "http://localhost:3000"
             }
        }
    }
};


```


#### 2. CORS

> [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)
> 摘要：
> - 跨源资源共享 (CORS)（或通俗地译为跨域资源共享）是一种基于 HTTP 头的机制，该机制通过允许服务器标示除了它自己以外的其它origin（域，协议和端口），这样浏览器可以访问加载这些资源。跨源资源共享还通过一种机制来检查服务器是否会允许要发送的真实请求，该机制通过浏览器发起一个到服务器托管的跨源资源的"预检"请求。在预检中，浏览器发送的头中标示有HTTP方法和真实请求中会用到的头。
> - 跨源HTTP请求的一个例子：运行在 `https://domain-a.com` 的 JavaScript 代码使用 XMLHttpRequest 来发起一个到 `https://domain-b.com/data.json` 的请求。
> 出于安全性，浏览器限制脚本内发起的跨源HTTP请求。 例如，`XMLHttpRequest` 和 `Fetch API` 遵循同源策略。这意味着使用这些 API 的 Web 应用程序只能从加载应用程序的同一个域请求 HTTP 资源，除非响应报文包含了正确 CORS 响应头。

- W3C标准
- "跨域资源共享"（Cross-origin resource sharing）
- 基于 ` HTTP 头`的机制
- 它允许浏览器向跨源服务器
- 在服务端进行控制是否允许跨域，可自定义规则
> 在服务端配置`Access-Control-Allow-Origin: https://www.HYzihong.com`则只允许 `https://www.HYzihong.com`可以访问这个服务端接口（浏览器发送的请求中的`Origin`字段会携带请求地址），最好服务端不要配置成通配符的形式 `Access-Control-Allow-Origin:*` ,这样才可以相对安全的响应附带身份凭证的请求
> 图片防盗链也是这个原理？
- 支持各种请求方式
-  `<audio>`、`<video>` 、`<img>`、`<link>` 和 `<script>` 均有一个跨域属性 (crossOrigin property)，它允许你配置元素获取数据的 CORS 请求。


#### 3. JSONP

- 这些标签链接的静态资源，本质上也是通过get请求获取到的，所以这些标签上的
- jsonp跨域只能用get请求



#### 4. nginx反向代理

#### 5. window.postMessage

#### 6. WebSocket协议跨域

#### 7. Iframe 
> 参考：https://juejin.cn/post/6844904126246027278
  - `document.domain` + `Iframe`

    「该方式只能用于二级域名相同的情况下，比如 a.test.com 和 b.test.com 适用于该方式」。 只需要给页面添加 document.domain ='test.com' 表示二级域名都相同就可以实现跨域。
    ```html

      <!-- a.test.com -->
      <body>
        hello a
        <iframe
          src="http://b.test.com/b.html"
          frameborder="0"
          onload="load()"
          id="frame"
        >
        </iframe>
        <script>
          document.domain = "test.com";
          function load() {
              console.log(frame.contentWindow.a);
            }
          </script>
      </body>
      <!-- b.test.com -->
      <body>
          hello b
          <script>
            document.domain = "test.com";
            var a = 100;
          </script>
      </body>

    ```

  - `window.location.hash` + `Iframe`

      实现原理
      原理就是通过 url 带 hash ，通过一个非跨域的中间页面来传递数据。
      实现流程
      一开始 a.html 给 c.html 传一个 hash 值，然后 c.html 收到 hash 值后，再把 hash 值传递给 b.html，最后 b.html 将结果放到 a.html 的 hash 值中。 同样的，a.html 和 b.htm l 是同域的，都是 http://localhost:8000，而 c.html 是http://localhost:8080

      ```html

      // a.html
      <iframe src="http://localhost:8080/hash/c.html#name1"></iframe>
      <script>
        console.log(location.hash);
        window.onhashchange = function() {
          console.log(location.hash);
        };
      </script>

      // b.html
      <script>
        window.parent.parent.location.hash = location.hash;
      </script>

      // c.html
      <body></body>
      <script>
        console.log(location.hash);
        const iframe = document.createElement("iframe");
        iframe.src = "http://localhost:8000/hash/b.html#name2";
        document.body.appendChild(iframe);
      </script>

      ```
  - `window.name` + `Iframe`

    window 对象的 name 属性是一个很特别的属性，当该 window 的 location 变化，然后重新加载，它的 name 属性可以依然保持不变。
    其中 a.html 和 b.html 是同域的，都是http://localhost:8000，而 c.html 是http://localhost:8080





    ```html

      // a.html
      <iframe  src="http://localhost:8080/name/c.html"  frameborder="0"  onload="load()"  id="iframe"></iframe>
      <script>
        let first = true;
        // onload事件会触发2次，第1次加载跨域页，并留存数据于window.name
        function load() {
            if (first) {
                // 第1次onload(跨域页)成功后，切换到同域代理页面
                iframe.src = "http://localhost:8000/name/b.html";
                first = false;
              } else {
                 // 第2次onload(同域b.html页)成功后，读取同域window.name中数据
                 console.log(iframe.contentWindow.name);
              }  
        }
      </script>


      // b.html 为中间代理页，与 a.html 同域，内容为空。
      // b.html
      <div></div>

      // c.html
      <script>
        window.name = "秋风的笔记";
      </script> 

    ```
