### koa-cors 的原理知道吗，猜了一个响应头里的字段

koa-cors 是一个 Koa 中间件，用于解决跨域访问问题。基本原理是在服务器端设置 Access-Control-Allow-Origin 响应头，该响应头告诉浏览器是否允许跨域请求。

当浏览器发送一个跨域请求时，首先会向服务器发送一个预检请求（Preflight Request），该请求使用 OPTIONS 方法发送，目的是为了让服务器告知浏览器是否允许该跨域请求。预检请求中会带有一些 CORS 相关的请求头信息，如 Origin、Access-Control-Request-Method、Access-Control-Request-Headers 等。

如果服务器设置了 Access-Control-Allow-Origin 响应头，说明该服务器允许跨域请求，则会返回一个带有 Access-Control-Allow-Origin 响应头的正常响应。此时，浏览器才会接受该跨域响应并进行处理。

koa-cors 主要做了以下几件事：

1. 设置 Access-Control-Allow-Origin 响应头，告诉浏览器允许跨域请求。
2. 处理预检请求，设置 Access-Control-Allow-Methods、Access-Control-Allow-Headers、Access-Control-Allow-Credentials 等响应头，告诉浏览器允许的跨域请求方法、请求头和是否允许携带 Cookie 等相关信息。
3. 可以配置不同的参数，如 origin、methods、headers、credentials 等，以根据实际需求设置响应头，增强跨域安全。

总之，koa-cors 的主要原理就是在服务器端设置 Access-Control-Allow-Origin 响应头，同时处理预检请求，从而解决跨域问题。
