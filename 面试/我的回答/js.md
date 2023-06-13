- [介绍 js 的基本数据类型。](#介绍-js-的基本数据类型)
- [JavaScript 有几种类型的值？你能画一下他们的内存图吗？](#javascript-有几种类型的值你能画一下他们的内存图吗)
- [什么是堆？什么是栈？它们之间有什么区别和联系？](#什么是堆什么是栈它们之间有什么区别和联系)
- [内部属性 `[[Class]]` 是什么？](#内部属性-class-是什么)
- [介绍 js 有哪些内置对象？](#介绍-js-有哪些内置对象)
- [6. undefined 与 undeclared 的区别？](#6-undefined-与-undeclared-的区别)
- [7. null 和 undefined 的区别？](#7-null-和-undefined-的区别)
- [8. 如何获取安全的 undefined 值？](#8-如何获取安全的-undefined-值)
- [9. 说几条写 JavaScript 的基本规范？](#9-说几条写-javascript-的基本规范)
- [10. JavaScript 原型，原型链？ 有什么特点？](#10-javascript-原型原型链-有什么特点)
- [11. js 获取原型的方法？](#11-js-获取原型的方法)
- [12. 在 js 中不同进制数字的表示方式](#12-在-js-中不同进制数字的表示方式)
- [13. js 中整数的安全范围是多少？](#13-js-中整数的安全范围是多少)
- [14. typeof NaN 的结果是什么？](#14-typeof-nan-的结果是什么)
- [15. isNaN 和 Number.isNaN 函数的区别？](#15-isnan-和-numberisnan-函数的区别)
- [16. Array 构造函数只有一个参数值时的表现？](#16-array-构造函数只有一个参数值时的表现)
- [17 JS 中类型转换有哪几种？](#17-js-中类型转换有哪几种)
  - [17.1 其他值到字符串的转换规则？](#171-其他值到字符串的转换规则)
  - [17.2 其他值到数字值的转换规则？](#172-其他值到数字值的转换规则)
  - [17.3 其他值到布尔类型的值的转换规则？](#173-其他值到布尔类型的值的转换规则)
- [18. {} 和 \[\] 的 valueOf 和 toString 的结果是什么？](#18--和--的-valueof-和-tostring-的结果是什么)
- [19. 什么是假值对象？](#19-什么是假值对象)
- [20. ~ 操作符的作用？](#20--操作符的作用)
- [21. 解析字符串中的数字和将字符串强制类型转换为数字的返回结果都是数字，它们之间的区别是什么？](#21-解析字符串中的数字和将字符串强制类型转换为数字的返回结果都是数字它们之间的区别是什么)
- [22. + 操作符什么时候用于字符串的拼接？](#22--操作符什么时候用于字符串的拼接)
- [25. 什么情况下会发生布尔值的隐式强制类型转换？](#25-什么情况下会发生布尔值的隐式强制类型转换)
- [26. || 和 \&\& 操作符的返回值？](#26--和--操作符的返回值)
- [27. Symbol 值的强制类型转换？](#27-symbol-值的强制类型转换)
- [28. == 操作符的强制类型转换规则？](#28--操作符的强制类型转换规则)
- [29. 如何将字符串转化为数字，例如 &#39;12.3b&#39;?](#29-如何将字符串转化为数字例如-123b)
- [31. 常用正则表达式](#31-常用正则表达式)
- [32. 生成随机数的各种方法？](#32-生成随机数的各种方法)
- [34. javascript 创建对象的几种方式？](#34-javascript-创建对象的几种方式)
- [面向对象的设计一定是好的设计吗？](#面向对象的设计一定是好的设计吗)
- [从设计思想上谈谈继承本身的问题](#从设计思想上谈谈继承本身的问题)
- [37. Javascript 的作用域链？](#37-javascript-的作用域链)
- [38. 谈谈 This 对象的理解。](#38-谈谈-this-对象的理解)
- [DOM 事件绑定](#dom-事件绑定)
- [39. eval 是做什么的？](#39-eval-是做什么的)
- [40. 什么是 DOM 和 BOM？](#40-什么是-dom-和-bom)
- [42. 事件是什么？IE 与火狐的事件机制有什么区别？ 如何阻止冒泡？说一说冒泡和事件捕获？](#42-事件是什么ie-与火狐的事件机制有什么区别-如何阻止冒泡说一说冒泡和事件捕获)
- [43. 三种事件模型是什么？](#43-三种事件模型是什么)
- [44. 事件委托是什么？什么场景应用，使用过代码实现吗](#44-事件委托是什么什么场景应用使用过代码实现吗)
- [45. \[&#34;1&#34;, &#34;2&#34;, &#34;3&#34;\].map(parseInt) 答案是多少？](#45-1-2-3mapparseint-答案是多少)
- [什么是闭包，为什么要用它？](#什么是闭包为什么要用它)
- [闭包有哪些表现形式?](#闭包有哪些表现形式)
- [如何解决下面的循环输出问题？](#如何解决下面的循环输出问题)
- [javascript 代码中的 &#34;use strict&#34;; 是什么意思 ? 使用它区别是什么？](#javascript-代码中的-use-strict-是什么意思--使用它区别是什么)
- [48. 如何判断一个对象是否属于某个类？](#48-如何判断一个对象是否属于某个类)
- [49. instanceof 的作用？](#49-instanceof-的作用)
- [new 操作符具体干了什么呢？如何实现？](#new-操作符具体干了什么呢如何实现)
- [new bind 过后的函数 this 的问题?](#new-bind-过后的函数-this-的问题)
- [Javascript 中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？](#javascript-中有一个函数执行时对象查找时永远不会去查找原型这个函数是)
- [52. 对于 JSON 的了解？](#52-对于-json-的了解)
- [53. \[\].forEach.call($$(&#34;_"),function(a){a.style.outline="1px solid #"+(~~(Math.random()_(1\<\<24))).toString(16)}) 能解释一下这段代码的意思吗？](#53-foreachcallfunctionaastyleoutline1px-solid-mathrandom124tostring16-能解释一下这段代码的意思吗)
- [54. js 延迟加载的方式有哪些？](#54-js-延迟加载的方式有哪些)
- [63. 模块化开发怎么做？](#63-模块化开发怎么做)
- [64. js 的几种模块规范？](#64-js-的几种模块规范)
- [65. AMD 和 CMD 规范的区别？](#65-amd-和-cmd-规范的区别)
- [66. ES6 模块与 CommonJS 模块、AMD、CMD 的差异。](#66-es6-模块与-commonjs-模块amdcmd-的差异)
- [67. requireJS 的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何 缓存的？）](#67-requirejs-的核心原理是什么如何动态加载的如何避免多次加载的如何-缓存的)
- [68. JS 模块加载器的轮子怎么造，也就是如何实现一个模块加载器？](#68-js-模块加载器的轮子怎么造也就是如何实现一个模块加载器)
- [69. ECMAScript6 怎么写 class，为什么会出现 class 这种东西?](#69-ecmascript6-怎么写-class为什么会出现-class-这种东西)
- [70. documen.write 和 innerHTML 的区别？](#70-documenwrite-和-innerhtml-的区别)
- [71. DOM 操作——怎样添加、移除、移动、复制、创建和查找节点？](#71-dom-操作怎样添加移除移动复制创建和查找节点)
- [72. innerHTML 与 outerHTML 的区别？](#72-innerhtml-与-outerhtml-的区别)
- [73. .call() 和 .apply() 的区别？](#73-call-和-apply-的区别)
- [74. JavaScript 类数组对象的定义？](#74-javascript-类数组对象的定义)
- [75.数组有哪些原生方法？](#75数组有哪些原生方法)
- [76. 数组的 fill 方法？](#76-数组的-fill-方法)
- [77. \[,,,\] 的长度？](#77--的长度)
- [78. JavaScript 中的作用域、函数提升与变量声明提升？](#78-javascript-中的作用域函数提升与变量声明提升)
- [79. 如何编写高性能的 Javascript ？](#79-如何编写高性能的-javascript-)
- [81. 哪些操作会造成内存泄漏？](#81-哪些操作会造成内存泄漏)
- [82.需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？](#82需求实现一个页面操作不会整页刷新的网站并且能在浏览器前进后退时正确响应给出你的技术实现方案)
- [83. 如何判断当前脚本运行在浏览器还是 node 环境中？（阿里）](#83-如何判断当前脚本运行在浏览器还是-node-环境中阿里)
- [84. 把 script 标签放在页面的最底部的 body 封闭之前和封闭之后有什么区别？浏览器会如何解析它们？](#84-把-script-标签放在页面的最底部的-body-封闭之前和封闭之后有什么区别浏览器会如何解析它们)
- [85. 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？](#85-移动端的点击事件的有延迟时间是多久为什么会有-怎么解决这个延时)
- [86. 什么是“前端路由”？什么时候适合使用“前端路由”？“前端路由”有哪些优点和缺点？](#86-什么是前端路由什么时候适合使用前端路由前端路由有哪些优点和缺点)
- [87. 如何测试前端代码么？ 知道 BDD, TDD, Unit Test 么？ 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)？](#87-如何测试前端代码么-知道-bdd-tdd-unit-test-么-知道怎么测试你的前端工程么mocha-sinon-jasmin-qunit)
- [88. 检测浏览器版本版本有哪些方式？](#88-检测浏览器版本版本有哪些方式)
- [89. 什么是 Polyfill ？](#89-什么是-polyfill-)
- [90. 使用 JS 实现获取文件扩展名？](#90-使用-js-实现获取文件扩展名)
- [91. 介绍一下 js 的节流与防抖？](#91-介绍一下-js-的节流与防抖)
- [92. Object.is() 与原来的比较操作符 “===”、“==” 的区别？ ==和===之间的区别？](#92-objectis-与原来的比较操作符--的区别-和之间的区别)
- [93. escape,encodeURI,encodeURIComponent 有什么区别？](#93-escapeencodeuriencodeuricomponent-有什么区别)
- [94. Unicode 和 UTF-8 之间的关系？](#94-unicode-和-utf-8-之间的关系)
- [95. js 的事件循环是什么？](#95-js-的事件循环是什么)
- [js 中的深浅拷贝实现？](#js-中的深浅拷贝实现)
- [对于\[{&#39;a&#39;:1},{&#39;b&#39;:2}\]，最快的深拷贝的方法是什么 ？](#对于a1b2最快的深拷贝的方法是什么-)
- [为什么 0.1 + 0.2 != 0.3？如何解决这个问题？](#为什么-01--02--03如何解决这个问题)
- [100. 原码、反码和补码的介绍](#100-原码反码和补码的介绍)
- [101. toPrecision 和 toFixed 和 Math.round 的区别？](#101-toprecision-和-tofixed-和-mathround-的区别)
- [106. 什么是点击劫持？如何防范点击劫持？](#106-什么是点击劫持如何防范点击劫持)
- [108. 什么是 MVVM？比之 MVC 有什么区别？什么又是 MVP ？](#108-什么是-mvvm比之-mvc-有什么区别什么又是-mvp-)
- [110. Object.defineProperty 介绍？](#110-objectdefineproperty-介绍)
- [111. 使用 Object.defineProperty() 来进行数据劫持有什么缺点？](#111-使用-objectdefineproperty-来进行数据劫持有什么缺点)
- [114. 什么是 requestAnimationFrame ？](#114-什么是-requestanimationframe-)
- [116. offsetWidth/offsetHeight,clientWidth/clientHeight 与 scrollWidth/scrollHeight 的区别？](#116-offsetwidthoffsetheightclientwidthclientheight-与-scrollwidthscrollheight-的区别)
- [117. 谈一谈你理解的函数式编程？](#117-谈一谈你理解的函数式编程)
- [118. 异步编程的实现方式？](#118-异步编程的实现方式)
- [119. Js 动画与 CSS 动画区别及相应实现](#119-js-动画与-css-动画区别及相应实现)
- [120. get 请求传参长度的误区](#120-get-请求传参长度的误区)
- [121. URL 和 URI 的区别？](#121-url-和-uri-的区别)
- [122. get 和 post 请求在缓存方面的区别](#122-get-和-post-请求在缓存方面的区别)
- [124. mouseover 和 mouseenter 的区别？](#124-mouseover-和-mouseenter-的区别)
- [125. js 拖拽功能的实现](#125-js-拖拽功能的实现)
- [126. 为什么使用 setTimeout 实现 setInterval？怎么模拟？](#126-为什么使用-settimeout-实现-setinterval怎么模拟)
- [127. let 和 const ,var 的注意点？如果用 const 定义变量可以不赋初始值吗？为什么不行？](#127-let-和-const-var-的注意点如果用-const-定义变量可以不赋初始值吗为什么不行)
- [128. 什么是 rest 参数？](#128-什么是-rest-参数)
- [129. 什么是尾调用，使用尾调用有什么好处？](#129-什么是尾调用使用尾调用有什么好处)
- [130. Symbol 类型的注意点？](#130-symbol-类型的注意点)
- [131. Set 和 WeakSet 结构？](#131-set-和-weakset-结构)
- [Map 和 WeakMap 结构？](#map-和-weakmap-结构)
- [map 和 set 区别 map.set()两次 symbol 会怎样?](#map-和-set-区别-mapset两次-symbol-会怎样)
- [133. 什么是 Proxy ？](#133-什么是-proxy-)
- [134. Reflect 对象创建目的？](#134-reflect-对象创建目的)
- [135. require 模块引入的查找方式？](#135-require-模块引入的查找方式)
- [136. 什么是 Promise 对象，什么是 Promises/A+ 规范？](#136-什么是-promise-对象什么是-promisesa-规范)
- [138. 如何检测浏览器所支持的最小字体大小？](#138-如何检测浏览器所支持的最小字体大小)
- [139. 怎么做 JS 代码 Error 统计？](#139-怎么做-js-代码-error-统计)
- [140. 单例模式模式是什么？](#140-单例模式模式是什么)
- [141. 策略模式是什么？](#141-策略模式是什么)
  - [模式是什么？](#模式是什么)
- [143. 中介者模式是什么？](#143-中介者模式是什么)
- [144. 适配器模式是什么？](#144-适配器模式是什么)
- [145. 观察者模式和发布订阅模式有什么不同？](#145-观察者模式和发布订阅模式有什么不同)
- [157. 开发中常用的几种 Content-Type ？](#157-开发中常用的几种-content-type-)
- [165. 如何确定页面的可用性时间，什么是 Performance API？](#165-如何确定页面的可用性时间什么是-performance-api)
- [166. js 中的命名规则](#166-js-中的命名规则)
- [167. js 语句末尾分号是否可以省略？](#167-js-语句末尾分号是否可以省略)
- [168. Object.assign()](#168-objectassign)
- [169. Math.ceil 和 Math.floor](#169-mathceil-和-mathfloor)
- [171. 一个列表，假设有 100000 个数据，这个该怎么办？](#171-一个列表假设有-100000-个数据这个该怎么办)
- [172. js 中倒计时的纠偏实现？](#172-js-中倒计时的纠偏实现)
- [175. ele.getElementsByClassName 和 ele.querySelectorAll 的区别？](#175-elegetelementsbyclassname-和-elequeryselectorall-的区别)
- [函数作用域和块级作用域](#函数作用域和块级作用域)
- [DOM 常用 API](#dom-常用-api)
- [事件流](#事件流)
- [点击一个 input 依次触发的事件](#点击一个-input-依次触发的事件)
- [addEventListener](#addeventlistener)
- [typeof 和 instanceof 的区别](#typeof-和-instanceof-的区别)
- [执行上下文](#执行上下文)
- [渐进式网络应用（PWA）](#渐进式网络应用pwa)
- [CommonJS 规范、AMD 规范、CMD 规范、ES6 Modules 规范](#commonjs-规范amd-规范cmd-规范es6-modules-规范)
- [babel 编译原理](#babel-编译原理)
- [null 是对象吗？为什么？](#null-是对象吗为什么)
- [&#39;1&#39;.toString()为什么可以调用？](#1tostring为什么可以调用)
- [什么是 BigInt?](#什么是-bigint)
- [instanceof 能否判断基本数据类型？](#instanceof-能否判断基本数据类型)
- [\[\] == !\[\]结果是什么？为什么？](#--结果是什么为什么)
- [对象转原始类型是根据什么流程运行的？](#对象转原始类型是根据什么流程运行的)
- [如何让 if(a == 1 \&\& a == 2)条件成立？](#如何让-ifa--1--a--2条件成立)
- [原型对象和构造函数有何关系？](#原型对象和构造函数有何关系)
- [能不能描述一下原型链？](#能不能描述一下原型链)
- [什么是高阶函数？](#什么是高阶函数)
- [filter](#filter)
- [sort](#sort)
- [for...in 和 for...of 的区别，可枚举类型和可迭代类型的区别，在其他语言是否有实现](#forin-和-forof-的区别可枚举类型和可迭代类型的区别在其他语言是否有实现)
- [JS 如何遍历对象的属性？](#js-如何遍历对象的属性)
- [如何数组取最后一个元素？](#如何数组取最后一个元素)
- [ES6 新特性了解吗？](#es6-新特性了解吗)
- [调用函数的时候，函数的参数是值传递还是引用传递？函数调用的时候，为什么会修改调用方的参数？要避免函数的参数被修改，调用前应该做什么？](#调用函数的时候函数的参数是值传递还是引用传递函数调用的时候为什么会修改调用方的参数要避免函数的参数被修改调用前应该做什么)
- [如何修改 div 的内容](#如何修改-div-的内容)

### 介绍 js 的基本数据类型。

> js 一共有 7 种基本数据类型，分别是 Undefined、Null、Boolean、Number、String，还有在 ES6 中新增的 Symbol 和 ES10 中新增的 BigInt 类型。
> ● Symbol （符号）是原始值，且 Symbol （符号）实例是唯一、不可变的。 Symbol （符号）的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险。
> ● BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。

《JavaScript 高级程序设计第 4 版》 第三章 3.4 数据类型

### JavaScript 有几种类型的值？你能画一下他们的内存图吗？

> 基本数据类型有：Undefined，Null，Number，Boolean，Bigint，String，Symbol。
> 引用数据类型: 对象 Object（包含普通对象-Object，数组对象-Array，正则对象-RegExp，日期对象-Date，数学函数-Math，函数对象-Function）
> 两种类型间的主要区别是它们的存储位置不同，基本数据类型的值直接保存在栈中，而复杂数据类型的值保存在堆中，通过使用在栈中保存对应的指针来获取堆中的值。闭包变量是存在堆内存中的。对于赋值操作，原始类型的数据直接完整地复制变量值，对象数据类型的数据则是复制引用地址。

内存图：
`<img title="" src="https://cdn.nlark.com/yuque/0/2022/png/26096776/1662902382431-ef6b77b2-60df-4e72-aba7-60bc4808dd2e.png#averageHue=%23bfbfbf&clientId=udc955f15-51a6-4&from=paste&height=348&id=u723dcd75&name=image.png&originHeight=632&originWidth=364&originalType=binary&ratio=1&rotation=0&showTitle=false&size=33034&status=done&style=none&taskId=uc5417b72-5263-4b66-b7f7-eadfadac6ad&title=&width=200.6666717529297" alt="image.png" width="164"><img title="" src="https://cdn.nlark.com/yuque/0/2022/png/26096776/1662902397172-947de821-c6be-4daa-b417-98f616167b73.png#averageHue=%23c1c1c1&clientId=udc955f15-51a6-4&from=paste&height=347&id=LyUOS&name=image.png&originHeight=625&originWidth=925&originalType=binary&ratio=1&rotation=0&showTitle=false&size=78034&status=done&style=none&taskId=ud935f7ea-9513-4de0-a180-a24f6e11246&title=&width=514" alt="image.png" width="420">`

《JavaScript 高级程序设计第 4 版》 第四章变量、作用域与内存

> ● 栈：原始数据类型（Undefined、Null、Boolean、Number、String，Symbol,Bigint）
> ● 堆：引用数据类型（对象、数组和函数）
> 两种类型的区别在于存储位置的不同：
> ● 原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
> ● 引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；
> 引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。
> 堆和栈的概念存在于数据结构和操作系统内存中，在数据结构中：
> ● 在数据结构中，栈中数据的存取方式为先进后出。
> ● 堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。

### 什么是堆？什么是栈？它们之间有什么区别和联系？

> 堆和栈的概念存在于数据结构中和操作系统内存中。
> ● 在数据结构中，栈中数据的存取方式为先进后出。而堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。完全二叉树是堆的一种实现方式。
> 在操作系统中，内存被分为栈区和堆区：
> ● 栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。
> ● 堆区内存一般由开发着分配释放，若开发者不释放，程序结束时可能由垃圾回收机制回收。

### 内部属性 `[[Class]]` 是什么？

> 所有 typeof 返回值为 "object" 的对象（如数组）都包含一个内部属性 [[Class]]（我们可以把它看作一个内部的分类，而非传统的面向对象意义上的类）。这个属性无法直接访问，一般通过 `Object.prototype.toString(..)` 来查看。例如：

```js
Object.prototype.toString.call([1, 2, 3]);
// "[object Array]"
Object.prototype.toString.call(/regex-literal/i);
// "[object RegExp]"
// 我们自己创建的类就不会有这份特殊待遇，因为 toString() 找不到 toStringTag 属性时只好返回默认的 Object 标签
// 默认情况类的[[Class]]返回[object Object]
class Class1 {}
Object.prototype.toString.call(new Class1()); // "[object Object]"
// 需要定制[[Class]]
class Class2 {
  get [Symbol.toStringTag]() {
    return "Class2";
  }
}
Object.prototype.toString.call(new Class2()); // "[object Class2]"
```

你不知道的 JS 中 3.1 内部属性 [[Class]]

### 介绍 js 有哪些内置对象？

> js 中的内置对象主要指的是在程序执行前存在全局作用域里的由 js 定义的一些全局值属性、函数和用来实例化其他对象的构造函数对象。一般我们经常用到的如全局变量值 NaN、undefined，全局函数如 parseInt()、parseFloat() 用来实例化对象的构造函数如 Date、Object 等，还有提供数学计算的单体内置对象如 Math 对象。

[《标准内置对象的分类》](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects) [《JS 所有内置对象属性和方法汇总》](https://segmentfault.com/a/1190000011467723#articleHeader24)
《JavaScript 高级程序设计第四版》5.4 单例内置对象

> 全局的对象（ global objects ）或称标准内置对象，不要和 "全局对象（global object）" 混淆。这里说的全局的对象是说在全局作用域里的对象。全局作用域中的其他对象可以由用户的脚本创建或由宿主程序提供。

标准内置对象的分类

（1）值属性，这些全局属性返回一个简单值，这些值没有自己的属性和方法。

例如 Infinity、NaN、undefined、null 字面量

（2）函数属性，全局函数可以直接调用，不需要在调用时指定所属对象，执行结束后会将结果直接返回给调用者。

例如 eval()、parseFloat()、parseInt() 等

（3）基本对象，基本对象是定义或使用其他对象的基础。基本对象包括一般对象、函数对象和错误对象。

例如 Object、Function、Boolean、Symbol、Error 等

（4）数字和日期对象，用来表示数字、日期和执行数学计算的对象。

例如 Number、Math、Date

（5）字符串，用来表示和操作字符串的对象。

例如 String、RegExp

（6）可索引的集合对象，这些对象表示按照索引值来排序的数据集合，包括数组和类型数组，以及类数组结构的对象。例如 Array

（7）使用键的集合对象，这些集合对象在存储数据时会使用到键，支持按照插入顺序来迭代元素。

例如 Map、Set、WeakMap、WeakSet

（8）矢量集合，SIMD 矢量集合中的数据会被组织为一个数据序列。

例如 SIMD 等

（9）结构化数据，这些对象用来表示和操作结构化的缓冲区数据，或使用 JSON 编码的数据。

例如 JSON 等

（10）控制抽象对象

例如 Promise、Generator 等

（11）反射

例如 Reflect、Proxy

（12）国际化，为了支持多语言处理而加入 ECMAScript 的对象。

例如 Intl、Intl.Collator 等

（13）WebAssembly

（14）其他

例如 arguments

> ECMA-262 对内置对象的定义是“任何由 ECMAScript 实现提供、与宿主环境无关，并在 ECMAScript 程序开始执行时就存在的对象”。
> 这就意味着，开发者不用显式地实例化内置对象，因为它们已经实例化好了。
> 前面我们已经接触了大部分内置对象，包括 Object、Array 和 String。

内置对象：在脚本开始运行时由 JS 运行环境提供的对象。所有的标准对象都是内置对象。

### 6. undefined 与 undeclared 的区别？

> 已在作用域中声明但还没有赋值的变量，是 undefined 的。相反，还没有在作用域中声明过的变量，是 undeclared 的。

对于 undeclared 变量的引用，浏览器会报引用错误，如 ReferenceError: b is not defined 。
但是我们可以使用 typeof 的安全防范机制来避免报错，因为对于 undeclared（或者 not defined ）变量，typeof 会返回 "undefined"。

《JavaScript 高级程序设计第四版》 3.5.3 布尔操作符 2. 逻辑与 3.4.2 Undefined 类型 《你不知道的 JS 中》1.3 值和类型

### null 和 undefined 的区别？

> 据 C 语言的传统, null 被设计成可以自动转为 0.但是, JavaScript 的设计者，觉得这样做还不够，主要有以下两个原因。

1.null 被当成一个对象。JavaScript 的数据类型分成原始类型(primitive)和合成类型(complex)两大类，作者觉得表示"无"的值最好不是对象。

2.JavaScript 的最初版本没有包括错误处理机制，发生数据类型不匹配时，往往是自动转换类型或者默默地失败。作者觉得，如果 null 自动转为 0，很不容易发现错误。因此, 作者又设计了一个 undefined。

这里注意:先有 null 后有 undefined，出来 undefined 是为了填补之前的坑。

3.具体区别
JavaScript 的最初版本是这样区分的: null 是一个表示"无"的对象（空对象指针)，转为数值时为 0; undefined 是一个表示"无"的原始值,转为数值时为 NaN.

null

null 是一个语言关键字，求值为一个特殊值，通常用于表示某个值不存在。
对 null 使用 typeof 操作符返回字符串"object"，表明可以将 null 看成一种特殊对象，表示“没有对象”。
null 通常被当作它自己类型的唯一成员，可以用来表示数值、字符串以及对象“没有值”。

undefined

JavaScript 中的 undefined 也表示值不存在，但 undefined 表示一种更深层次的不存在。
undefined 是一个预定义的全局常量而非像 null 那样的语言关键字，这个常量的初始化值就是 undefined。
对 undefined 应用 typeof 操作符会返回"undefined"，表示这个值是该特殊类型的唯一成员。

什么时候会有 null:
1、作为函数的参数，表示该函数的参数不是对象
2、作为对象原型链的终点

什么时候会出现 undefined:
1、变量被声明了。但是没有赋值，就等于 undefined.var a;console.log(a);
2、调用函数时，应该提供的参数没有提供，该参数就等于 undefined。
3、对象没有赋值的属性，该属性的值为 undefined。
4、函数没有返回值时，默认返回 undefined。

区别

null 和 undefined 都可以表示某个值不存在，经常被混用。
相等操作符==认为它们相等（要区分它们，必须使用全等操作符 ===）。它们俩都是假性值，在需要布尔值的情况下，它们都可以当作 false 使用
null 和 undefined 都没有属性或方法。事实上，使用.或[]访问这两个值的属性或方法会导致 TypeError。

本题相关知识点：

《JavaScript 权威指南第 7 版》 3.5 null 与 undefined

### 8. 如何获取安全的 undefined 值？

> 因为 undefined 是一个标识符，所以可以被当作变量来使用和赋值，但是这样会影响 undefined 的正常判断。

表达式 void \_\_\_ 没有返回值，因此返回结果是 undefined。void 并不改变表达式的结果，只是让表达式不返回值。

按惯例我们用 void 0 来获得 undefined。

本题相关知识点：

《你不知道的 JS 中》 2.4.2 undefined

### 9. 说几条写 JavaScript 的基本规范？

> 在平常项目开发中，我们遵守一些这样的基本规范，比如说：
> （1）一个函数作用域中所有的变量声明应该尽量提到函数首部，用一个 var 声明，不允许出现两个连续的 var 声明，声明时如果变量没有值，应该给该变量赋值对应类型的初始值，便于他人阅读代码时，能够一目了然的知道变量对应的类型值。
> （2）代码中出现地址、时间等字符串时需要使用常量代替。
> （3）在进行比较的时候吧，尽量使用'===', '!=='代替'==', '!='。
> （4）不要在内置对象的原型上添加方法，如 Array, Date。
> （5）switch 语句必须带有 default 分支。
> （6）for 循环必须使用大括号。
> （7）if 语句必须使用大括号。

### 10. JavaScript 原型，原型链？ 有什么特点？

在 js 中我们是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个 prototype 属性值，这个属性值是一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。当我们使用构造函数新建一个对象后，在这个对象的内部将包含一个指针，这个指针指向构造函数的 prototype 属性对应的值，在 ES5 中这个指针被称为对象的原型。一般来说我们是不应该能够获取到这个值的，但是现在浏览器中都实现了 **proto** 属性来让我们访问这个属性，但是我们最好不要使用这个属性，因为它不是规范中规定的。ES5 中新增了一个 Object.getPrototypeOf() 方法，我们可以通过这个方法来获取对象的原型。

当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是 Object.prototype 所以这就是我们新建的对象为什么能够使用 toString() 等方法的原因。

特点：

JavaScript 对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变。

本题相关知识点：

《JavaScript 高级程序设计第四版》

### 11. js 获取原型的方法？

```
p.__proto__
p.constructor.prototype
Object.getPrototypeOf(p)
```

本题相关知识点：

《JavaScript 高级程序设计第四版》

### 12. 在 js 中不同进制数字的表示方式

> ● 以 0X、0x 开头的表示为十六进制。
> ● 以 0、0O、0o 开头的表示为八进制。
> ● 以 0B、0b 开头的表示为二进制格式。

本题相关知识点：

《JavaScript 高级程序设计第四版》

### 13. js 中整数的安全范围是多少？

> 整数的安全范围指的是在这个范围内的整数转化为二进制存储的时候不会出现精度丢失

数字的呈现方式决定了“整数”的安全值范围远远小于 Number.MAX_VALUE。
MAX_VALUE 属性值接近于 1.79E+308。大于 MAX_VALUE 的值代表 "Infinity"。

最小整数是 -9007199254740991（-(2^53 - 1)），在 ES6 中被定义为 Number.MIN_SAFE_INTEGER

能够被“安全”呈现的最大整数是 2^53 - 1，即 9007199254740991，在 ES6 中被定义为 Number.MAX_SAFE_INTEGER。

JavaScript 的数字类型无法精确呈现 64 位数值，所以必须将它们保存（转换）为字符串。

JavaScript 使用有限数字表示法（finite numeric representation，即之前介绍过的 IEEE 754 浮点数），
所以和纯粹的数学运算不同，JavaScript 的运算结果有可能溢出，此时结果为 Infinity 或者
-Infinity。

规范规定，如果数学运算（如加法）的结果超出处理范围，则由 IEEE 754 规范中的“就近取整”（round-to-nearest）模式来决定最后的结果。
例如，相对于 Infinity，Number.MAX_VALUE + Math.pow(2, 969) 与 Number.MAX_VALUE 更为接近，因此它被“向下取整”（round down）；
而 Number.MAX_VALUE + Math.pow(2, 970) 与 Infinity 更为接近，所以它被“向上取整”（round up）。

计算结果一旦溢出为无穷数（infinity）就无法再得到有穷数。换句话说，就是你可以从有穷走向无穷，但无法从无穷回到有穷。

《你不知道的 JS 中》2.3.3 　整数的安全范围 2.4.3 　特殊的数字 《JavaScript 高级程序设计第四版》 3.4.5 Number 类型

### 14. typeof NaN 的结果是什么？

> NaN 意指“不是一个数字”（not a number），将它理解为“无效数值”“失败数值”或者“坏数值”可能更准确些

如果数学运算的操作数不是数字类型（或者无法解析为常规的十进制或十六进制数字），就无法返回一个有效的数字，这种情况下返回值为 NaN。

不是数字的数字”仍然是数字类型 typeof NaN; // "number"

NaN 是一个“警戒值”（sentinel value，有特殊用途的常规值），用于指出数字类型中的错误情况，即“执行数学运算没有成功，这是失败后返回的结果”。
NaN 是一个特殊值，它和自身不相等，是唯一一个非自反（自反，reflexive，即 x === x 不成立）的值。而 NaN != NaN 为 true

判断 NaN

① 使用内建的全局工具函数 isNaN(..) 来判断一个值是否是 NaN。
"foo" 不是一个数字，但是它也不是 NaN。
② 从 ES6 开始我们可以使用工具函数 Number.isNaN(..)
③ 利用 NaN 不等于自身这个特点。NaN 是 JavaScript 中唯一一个不等于自身的值

本题相关知识点：

《你不知道的 JS 中》 2.4.3 　 1. 特殊的数字

### 15. isNaN 和 Number.isNaN 函数的区别？

> ① 使用内建的全局工具函数 isNaN(..) 来判断一个值是否是 NaN。 会把参数先转换为数值类型，在进行判断，会导致 bug。"foo" 不是一个数字，但是它也不是 NaN。
> ② 从 ES6 开始我们可以使用工具函数 Number.isNaN(..) 会首先判断传入参数是否为数字，再进行 NaN 的判断。

本题相关知识点：

《你不知道的 JS 中》 2.4.3 　特殊的数字 1. 不是数字的数字
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1666955937927-7f9304d3-9773-4eed-83a5-d5f564ae45d0.png#averageHue=%23201f1f&clientId=u06ace8d3-19c7-4&from=paste&height=427&id=ud3209a11&name=image.png&originHeight=640&originWidth=1257&originalType=binary&ratio=1&rotation=0&showTitle=false&size=460659&status=done&style=none&taskId=u7e897806-4529-42e0-bf1d-90fc96c6ee2&title=&width=838)

### 16. Array 构造函数只有一个参数值时的表现？

> Array 构造函数只带一个数、字参数的时候，该参数会被作为数组的预设长度（length），而非只充当数组中的一个元素。更为关键的是，数组并没有预设长度这个概念。
> 这样创建出来的只是一个空数组，只不过它的 length 属性被设置成了指定的值。

构造函数 Array(..) 不要求必须带 new 关键字。不带时，它会被自动补上。

本题相关知识点：

《你不知道的 JS 中》3.4.1 Array(..)

### 17 JS 中类型转换有哪几种？

JS 中，类型转换只有三种：

- 转换成数字
- 转换成布尔值
- 转换成字符串

转换具体规则如下:

#### 17.1 其他值到字符串的转换规则？

> 规范的 9.8 节中定义了抽象操作 ToString ，它负责处理非字符串到字符串的强制类型转换。

（1）Null 和 Undefined 类型 ，null 转换为 "null"，undefined 转换为 "undefined"，

（2）Boolean 类型，true 转换为 "true"，false 转换为 "false"。

（3）Number 类型的值直接转换，不过那些极小和极大的数字会使用指数形式。

（4）Symbol 类型的值直接转换，但是只允许显式强制类型转换，使用隐式强制类型转换会产生错误。

（5）对普通对象来说，除非自行定义 toString() 方法，否则会调用 toString()（Object.prototype.toString()）
来返回内部属性 [[Class]] 的值，如"[object Object]"。如果对象有自己的 toString() 方法，字符串化时就会
调用该方法并使用其返回值。

本题相关知识点：

《JavaScript 权威指南第七版》3.9 类型转换 《JavaScript 高级程序设计第四版》3.4.6 String 类型 3. 转换为字符串

#### 17.2 其他值到数字值的转换规则？

> 有时我们需要将非数字值当作数字来使用，比如数学运算。为此 ES5 规范在 9.3 节定义了抽象操作 ToNumber。

（1）Undefined 类型的值转换为 NaN。

（2）Null 类型的值转换为 0。

（3）Boolean 类型的值，true 转换为 1，false 转换为 0。

（4）String 类型的值转换如同使用 Number() 函数进行转换，如果包含非数字值则转换为 NaN，空字符串为 0。

（5）Symbol 类型的值不能转换为数字，会报错。

（6）对象（包括数组）会首先被转换为相应的基本类型值，如果返回的是非数字的基本类型值，则再遵循以上规则将其强制转换为数字。

为了将值转换为相应的基本类型值，抽象操作 ToPrimitive 会首先（通过内部操作 DefaultValue）检查该值是否有 valueOf() 方法。
如果有并且返回基本类型值，就使用该值进行强制类型转换。如果没有就使用 toString() 的返回值（如果存在）来进行强制类型转换。
如果 valueOf() 和 toString() 均不返回基本类型值，会产生 TypeError 错误。

本题相关知识点：

《你不知道的 JS 中》4.2.2 ToNumber 《JavaScript 权威指南第七版》3.9 类型转换 《JavaScript 高级程序设计第四版》3.4.6 String 类型 3. 转换为字符串

#### 17.3 其他值到布尔类型的值的转换规则？

> ES5 规范 9.2 节中定义了抽象操作 ToBoolean，列举了布尔强制类型转换所有可能出现的结果。

以下这些是假值：
• undefined
• null
• false
• +0、-0 和 NaN
• ""
• 0N
假值的布尔强制类型转换结果为 false。从逻辑上说，假值列表以外的都应该是真值。

本题相关知识点：

《你不知道的 JS 中》4.2.3 ToBoolean 《JavaScript 权威指南第七版》3.9 类型转换 《JavaScript 高级程序设计第四版》3.4.4 Boolean 类型

### 18. {} 和 [] 的 valueOf 和 toString 的结果是什么？

{} 的 valueOf 结果为 {} ，toString 的结果为 "[object Object]"

[] 的 valueOf 结果为 [] ，toString 的结果为 ""

本题相关知识点：

《JavaScript 权威指南第七版》3.9 类型转换 14.4.7 Symbol.toPrimitive

### 19. 什么是假值对象？

> 浏览器在某些特定情况下，在常规 JavaScript 语法基础上自己创建了一些外来值，这些就是“假值对象”。假值对象看起来和普通对象并无二致（都有属性，等等），但将它们强制类型转换为布尔值时结果为 false

最常见的例子是 document.all，它是一个类数组对象，包含了页面上的所有元素，由 DOM（而不是 JavaScript 引擎）提供给 JavaScript 程序使用。

document.all 以前曾是一个真正意义上的对象，布尔强制类型转换结果为 true，不过现在它是一个假值对象。
document.all 并不是一个标准用法，早就被废止了。

《你不知道的 JS 中》2. 假值对象（falsy object）

### 20. ~ 操作符的作用？

> 字位运算符只适用于 32 位整数，运算符会强制操作数使用 32 位格式。这是通过抽象操作 ToInt32 来实现的（ES5 规范 9.5 节）。

~操作符首先将值强制类型转换为 32 位数字，然后执行字位操作“非”（对每一个字位进行反转）。因此我们可以使用 ~ 来进行取整操作。

ToInt32 首先执行 ToNumber 强制类型转换，比如 "123" 会先被转换为 123，然后再执行 ToInt32。

按位非操作符用波浪符（~）表示，它的作用是返回数值的一补数。按位非是 ECMAScript 中为数
不多的几个二进制数学操作符之一。

按位非的最终效果是对数值取反并减 1，~x 大致等同于 -(x+1)。

本题相关知识点：

《JavaScript 高级程序设计第四版》3.5.2 位操作符 1. 按位非 《你不知道的 JS 中》4.3.1 　字符串和数字之间的显式转换 2. 奇特的 ~ 运算符

### 21. 解析字符串中的数字和将字符串强制类型转换为数字的返回结果都是数字，它们之间的区别是什么？

> parseInt()函数更专注于字符串是否包含数值模式。

字符串最前面的空格会被忽略，从第一个非空格字符开始转换。
如果第一个字符不是数值字符、加号或减号，parseInt()立即返回 NaN。
这意味着空字符串也会返回 NaN（这一点跟 Number()不一样，它返回 0）。

如果第一个字符是数值字符、加号或减号，则继续依次检测每个字符，直到字符串末尾，或碰到非数值字符。
比如，"1234blue"会被转换为 1234，因为"blue"会被完全忽略。类似地，"22.5"会被转换为 22，因为小数
点不是有效的整数字符。

如果遇到非数字字符就停止。而转换（如 Number ()）不允许出现非数字字符，否则会失败并返回 NaN。

本题相关知识点：

《JavaScript 高级程序设计第四版》3.4.5 Number 类型 4. 数值转换

### 22. + 操作符什么时候用于字符串的拼接？

> 如果有一个操作数是字符串，则要应用如下规则：
> 如果两个操作数都是字符串，则将第二个字符串拼接到第一个字符串后面；
> 如果只有一个操作数是字符串，则将另一个操作数转换为字符串，再将两个字符串拼接在一起。

本题相关知识点：

《JavaScript 高级程序设计第四版》3.5.6 加性操作符 《你不知道的 JS 中》 4.4.2 字符串和数字之间的隐式强制类型转换

- 《JavaScript 高级程序设计第四版》3.5.6 加性操作符

如果有一个操作数是字符串，则要应用如下规则：
如果两个操作数都是字符串，则将第二个字符串拼接到第一个字符串后面；
如果只有一个操作数是字符串，则将另一个操作数转换为字符串，再将两个字符串拼接在一起。

- 《你不知道的 JS 中》 4.4.2 字符串和数字之间的隐式强制类型转换

根据 ES5 规范 11.6.1 节，如果某个操作数是字符串或者能够通过以下步骤转换为字符串的话，+ 将进行拼接操作。如果其
中一个操作数是对象（包括数组），则首先对其调用 ToPrimitive 抽象操作，该抽象操作再调用 [[DefaultValue]]，以
数字作为上下文。如果不能转换为字符串，则会将其转换为数字类型来进行计算。

简单来说就是，如果 + 的其中一个操作数是字符串（或者通过以上步骤最终得到字符串），则执行字符串拼接，否则执行数字
加法。

那么对于除了加法的运算符来说，只要其中一方是数字，那么另一方就会被转为数字。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1666886998949-36c5628f-3806-49eb-b03d-72e9c98b74a1.png#averageHue=%231f1e1e&clientId=uf41a44d9-f5a9-4&from=paste&height=266&id=ud28de980&name=image.png&originHeight=399&originWidth=1100&originalType=binary&ratio=1&rotation=0&showTitle=false&size=240609&status=done&style=none&taskId=uf846a104-e4d4-4c6e-83dd-640abbdcadc&title=&width=733.3333333333334)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1666887450157-6d1b5c8b-4fe2-41d6-84cc-88068818199d.png#averageHue=%2320201f&clientId=ub7bd0e10-87d8-4&from=paste&height=149&id=u051fb837&name=image.png&originHeight=224&originWidth=1059&originalType=binary&ratio=1&rotation=0&showTitle=false&size=162444&status=done&style=none&taskId=u40c85a52-9382-4280-8d65-2cb41980cba&title=&width=706)

### 25. 什么情况下会发生布尔值的隐式强制类型转换？

> (1) if (..) 语句中的条件判断表达式。
> (2) for ( .. ; .. ; .. ) 语句中的条件判断表达式（第二个）。
> (3) while (..) 和 do..while(..) 循环中的条件判断表达式。
> (4) ? : 中的条件判断表达式。
> (5) 逻辑运算符 ||（逻辑或）和 &&（逻辑与）左边的操作数（作为条件判断表达式）。

以上情况中，非布尔值会被隐式强制类型转换为布尔值，遵循前面介绍过的 ToBoolean 抽
象操作规则。

《你不知道的 JS 中》4.4.4 隐式强制类型转换为布尔值

### 26. || 和 && 操作符的返回值？

> || 和 && 首先会对第一个操作数执行条件判断，如果其不是布尔值就先进行 ToBoolean 强制类型转换，然后再执行条件
> 判断。

对于 || 来说，如果条件判断结果为 true 就返回第一个操作数的值，如果为 false 就返回第二个操作数的值。

&& 则相反，如果条件判断结果为 true 就返回第二个操作数的值，如果为 false 就返回第一个操作数的值。

|| 和 && 返回它们其中一个操作数的值，而非条件判断的结果

《你不知道的 JS 中》4.4.4 隐式强制类型转换为布尔值

### 27. Symbol 值的强制类型转换？

> ES6 允许从符号到字符串的显式强制类型转换(String)，然而隐式强制类型（使用"+"）转换会产生错误。

不能将符号转换为数值，对符号使用所有数学运算符都会引发错误，

无论对符号使用哪种数学运算符都会导致错误，但使用逻辑运算符则不会，
因为符号值在逻辑运算中会被认为等价于 true （就像 JS 中其他的非空值那样。显式和隐式结果都是 true ）。

《深入浅出 ES6》第六章 符号与符号属性 符号值的转换 《你不知道的 JS 中》 4.4.6 符号的强制类型转换

### 28. == 操作符的强制类型转换规则？

（1）字符串和数字之间的相等比较，将字符串转换为数字之后再进行比较。

（2）其他类型和布尔类型之间的相等比较，先将布尔值转换为数字后，再应用其他规则进行比较。

（3）null 和 undefined 之间的相等比较，结果为真。其他值和它们进行比较都返回假值。

（4）对象和非对象之间的相等比较，对象先调用 ToPrimitive 抽象操作后，再进行比较。

（5）如果一个操作值为 NaN ，则相等比较返回 false（ NaN 本身也不等于 NaN ）。

（6）如果两个操作值都是对象，则比较它们是不是指向同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回 true，否则，返回 false。

《[ECMAScript 6 入门](https://es6.ruanyifeng.com/)》读懂 ECMAScript 规格 4.相等运算符

> 1 如果 x 不是正常值（比如抛出一个错误），中断执行。
> 2 如果 y 不是正常值，中断执行。
> 3 如果 Type(x)与 Type(y)相同，执行严格相等运算 x === y。
> 4 如果 x 是 null，y 是 undefined，返回 true。
> 5 如果 x 是 undefined，y 是 null，返回 true。
> 6 如果 Type(x)是数值，Type(y)是字符串，返回 x == ToNumber(y)的结果。
> 7 如果 Type(x)是字符串，Type(y)是数值，返回 ToNumber(x) == y 的结果。
> 8 如果 Type(x)是布尔值，返回 ToNumber(x) == y 的结果。
> 9 如果 Type(y)是布尔值，返回 x == ToNumber(y)的结果。
> 10 如果 Type(x)是字符串或数值或 Symbol 值，Type(y)是对象，返回 x == ToPrimitive(y)的结果。
> 11 如果 Type(x)是对象，Type(y)是字符串或数值或 Symbol 值，返回 ToPrimitive(x) == y 的结果。
> 12 返回 false。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1667264155981-0e68ec68-ee49-420b-a0e8-a23b86ee16df.png#averageHue=%23c2c2c1&clientId=u493acfdc-7ee5-4&from=paste&height=279&id=udb2435d5&name=image.png&originHeight=419&originWidth=1319&originalType=binary&ratio=1&rotation=0&showTitle=false&size=75522&status=done&style=none&taskId=u27ff7dc4-3f2b-40b1-ac46-6c596891889&title=&width=879.3333333333334)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1667264264528-af106ac0-b619-4f88-bbbb-44ad6b0ad18b.png#averageHue=%23bfbdbd&clientId=u493acfdc-7ee5-4&from=paste&height=170&id=u0981e733&name=image.png&originHeight=255&originWidth=1090&originalType=binary&ratio=1&rotation=0&showTitle=false&size=47701&status=done&style=none&taskId=u29a1fbe4-ae7f-4a38-b166-e87985db027&title=&width=726.6666666666666)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1666887524745-e08e3e93-50c5-4f01-86f4-7913750b825c.png#averageHue=%23222120&clientId=ub7bd0e10-87d8-4&from=paste&height=266&id=u57cb3ec9&name=image.png&originHeight=399&originWidth=731&originalType=binary&ratio=1&rotation=0&showTitle=false&size=226241&status=done&style=none&taskId=ueb7f88e7-3c1a-41e9-a5b6-28b5049394a&title=&width=487.3333333333333)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1666955886358-a7526736-3584-4769-815e-ff1030309cd0.png#averageHue=%231e1e1e&clientId=u06ace8d3-19c7-4&from=paste&height=303&id=ue3252175&name=image.png&originHeight=454&originWidth=1216&originalType=binary&ratio=1&rotation=0&showTitle=false&size=353298&status=done&style=none&taskId=u7e1a7b45-a60d-432a-993d-2b92c63f3f0&title=&width=810.6666666666666)

### 29. 如何将字符串转化为数字，例如 '12.3b'?

> （1）使用 Number() 方法，前提是所包含的字符串不包含不合法字符。

（2）使用 parseInt() 方法，parseInt() 函数可解析一个字符串，并返回一个整数。还可以设置要解析的数字的基数。
当基数的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。

（3）使用 parseFloat() 方法，该函数解析一个字符串参数并返回一个浮点数。

（4）使用 + 操作符的隐式转换，前提是所包含的字符串不包含不合法字符。

《JavaScript 高级程序设计第四版》3.4.5 Number 类型 4. 数值转换

### 31. 常用正则表达式

```javascript
// （1）匹配 16 进制颜色值
var regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;

// （2）匹配日期，如 yyyy-mm-dd 格式
var regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

// （3）匹配 qq 号
var regex = /^[1-9][0-9]{4,10}$/g;

// （4）手机号码正则
var regex = /^1[34578]\d{9}$/g;

// （5）用户名正则
var regex = /^[a-zA-Z\$][a-zA-Z0-9_\$]{4,16}$/;
```

### 32. 生成随机数的各种方法？

```javascript
1. [) 使用四舍五入    Math.round
2. [] 使用Math.floor + Math.random()
```

[《JS - 生成随机数的方法汇总（不同范围、类型的随机数）》](http://www.hangge.com/blog/cache/detail_1872.html)
《JavaScript 高级程序设计第四版》 5.4.2 Math 4. random()方法

### 34. javascript 创建对象的几种方式？

> 我们一般使用字面量的形式直接创建对象，但是这种创建方式对于创建大量相似对象的时候，会产生大量的重复代码。但 js
> 和一般的面向对象的语言不同，在 ES6 之前它没有类的概念。但是我们可以使用函数来进行模拟，从而产生出可复用的对象
> 创建方式，我了解到的方式有这么几种：

（1）第一种是工厂模式，工厂模式的主要工作原理是用函数来封装创建对象的细节，从而通过调用函数来达到复用的目的。
但是它有一个很大的问题就是创建出来的对象无法和某个类型联系起来，它只是简单的封装了复用代码，而没有建立起对象和类型间的关系。

（2）第二种是构造函数模式。js 中每一个函数都可以作为构造函数，只要一个函数是通过 new 来调用的，那么我们就可以把它称为构造函数。
执行构造函数首先会创建一个对象，然后将对象的原型指向构造函数的 prototype 属性，然后将执行上下文中的 this 指向这个对象，最后再执行整个函数，
如果返回值不是对象，则返回新建的对象。因为 this 的值指向了新建的对象，因此我们可以使用 this 给对象赋值。
构造函数模式相对于工厂模式的优点是，所创建的对象和构造函数建立起了联系，因此我们可以通过原型来识别对象的类型。
但是构造函数存在一个缺点就是，造成了不必要的函数对象的创建，因为在 js 中函数也是一个对象，因此如果对象属性中如果包含函数的话，
那么每次我们都会新建一个函数对象，浪费了不必要的内存空间，因为函数是所有的实例都可以通用的。

（3）第三种模式是原型模式，因为每一个函数都有一个 prototype 属性，这个属性是一个对象，它包含了通过构造函数创建的所有实例都能共享的属性和方法。
因此我们可以使用原型对象来添加公用属性和方法，从而实现代码的复用。这种方式相对于构造函数模式来说，解决了函数对象的复用问题。
但是这种模式也存在一些问题，一个是没有办法通过传入参数来初始化值，另一个是如果存在一个引用类型如 Array 这样的值，
那么所有的实例将共享一个对象，一个实例对引用类型值的改变会影响所有的实例。

（4）第四种模式是组合使用构造函数模式和原型模式，这是创建自定义类型的最常见方式。
因为构造函数模式和原型模式分开使用都存在一些问题，因此我们可以组合使用这两种模式，通过构造函数来初始化对象的属性，通过原型对象来实现函数方法的复用。
这种方法很好的解决了两种模式单独使用时的缺点，但是有一点不足的就是，因为使用了两种不同的模式，所以对于代码的封装性不够好。

（5）第五种模式是动态原型模式，这一种模式将原型方法赋值的创建过程移动到了构造函数的内部，
通过对属性是否存在的判断，可以实现仅在第一次调用函数时对原型对象赋值一次的效果。这一种方式很好地对上面的混合模式进行了封装。

（6）第六种模式是寄生构造函数模式，这一种模式和工厂模式的实现基本相同，
我对这个模式的理解是，它主要是基于一个已有的类型，在实例化时对实例化的对象进行扩展。这样既不用修改原来的构造函数，也达到了扩展对象的目的。
它的一个缺点和工厂模式一样，无法实现对象的识别。

```javascript
// 我了解的 js 中实现继承的几种方式有：

// （1）第一种是以原型链的方式来实现继承，但是这种实现方式存在的缺点是，在包含有引用类型的数据时，会被所有的实例对象所共享，容易造成修改的混乱。还有就是在创建子类型的时候不能向超类型传递参数。

// 共享 + 不能传参
function SuperType() {
  this.property = true;
}
SuperType.prototype.getSuperValue = function () {
  return this.property;
};
function SubType() {
  this.subproperty = false;
}
// 继承 SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
  return this.subproperty;
};
let instance = new SubType();
console.log(instance.getSuperValue()); // true

// （2）第二种方式是使用借用构造函数的方式，这种方式是通过在子类型的函数中调用超类型的构造函数来实现的，这一种方法解决了不能向超类型传递参数的缺点，但是它存在的一个问题就是无法实现函数方法的复用，并且超类型原型定义的方法子类型也没有办法访问到。

// 函数方法不能复用

function SuperType(name) {
  this.name = name;
}
function SubType() {
  // 继承 SuperType 并传参
  SuperType.call(this, "Nicholas");
  // 实例属性
  this.age = 29;
}
let instance = new SubType();
console.log(instance.name); // "Nicholas";
console.log(instance.age); // 29

// （3）第三种方式是组合继承，组合继承是将原型链和借用构造函数组合起来使用的一种方式。
//     通过借用构造函数的方式来实现类型的属性的继承，通过将子类型的原型设置为超类型的实例来实现方法的继承。
//     这种方式解决了上面的两种模式单独使用时的问题，但是由于我们是以超类型的实例来作为子类型的原型，所以调用了两次超类的构造函数，
//     造成了子类型的原型中多了很多不必要的属性。

// 原型选择弊端

function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
  console.log(this.name);
};
function SubType(name, age) {
  // 继承属性
  SuperType.call(this, name);
  this.age = age;
}
// 继承方法
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function () {
  console.log(this.age);
};

// test
let instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
console.log(instance1.colors); // "red,blue,green,black"
instance1.sayName(); // "Nicholas";
instance1.sayAge(); // 29
let instance2 = new SubType("Greg", 27);
console.log(instance2.colors); // "red,blue,green"
instance2.sayName(); // "Greg";
instance2.sayAge(); // 27

// （4）第四种方式是原型式继承，原型式继承的主要思路就是基于已有的对象来创建新的对象，实现的原理是，
//     向函数中传入一个对象，然后返回一个以这个对象为原型的对象。这种继承的思路主要不是为了实现创造一种新的类型，
//     只是对某个对象实现一种简单继承，ES5 中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同。

function object(o) {
  function F() { }
  F.prototype = o;
  return new F();
}

// （5）第五种方式是寄生式继承，寄生式继承的思路是创建一个用于封装继承过程的函数，通过传入一个对象，
//     然后复制一个对象的副本，然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。
//     这种继承的优点就是对一个简单对象实现继承，如果这个对象不是我们的自定义类型时。缺点是没有办法实现函数的复用。

function createAnother(original) {
  let clone = object(original); // 通过调用函数创建一个新对象
  clone.sayHi = function () { // 以某种方式增强这个对象
    console.log("hi");
  };
  return clone; // 返回这个对象
}

// （6）第六种方式是寄生式组合继承，组合继承的缺点就是使用超类型的实例做为子类型的原型，导致添加了不必要的原型属性。
//   寄生式组合继承的方式是使用超类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性。

function inheritPrototype(SubType, SuperType) {
  SubType.prototype = Object.create(SuperType.prototype);
  // SubType.prototype.constructor = SubType;
  // 最好这样恢复 constructor 属性
  Object.defineProperty(SubType.prototype, "constructor", {
    enumerable: false,
    value: SubType
  });
}

function SuperType(name) {
  this.name = name;
this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
console.log(this.name);
};

function SubType(name, age) {
SuperType.call(this, name); this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function () {
console.log(this.age);
};

// （7）ES6继承 extends
function B(name) {
this.name = name;
};
function A(name, age) {
//1.将A的原型指向B
Object.setPrototypeOf(A, B); // 用来继承父类的静态方法
//2.用A的实例作为this调用B,得到继承B之后的实例，这一步相当于调用super // B.call(this,name)
Object.getPrototypeOf(A).call(this, name)
//3.将A原有的属性添加到新实例上
this.age = age;
//4.返回新实例对象
return this;
};
var a = new A('poetry', 22);
console.log(a);

ES6的extends被编译后的JavaScript代码
ES6的代码最后都是要在浏览器上能够跑起来的，这中间就利用了babel这个编译工具，将ES6的代码编译成ES5让一些不支持新语法的浏览器也能运行。

那最后编译成了什么样子呢？
function _possibleConstructorReturn(self, call) {
    // ...
    return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _inherits(subClass, superClass) {
    // ...
    //看到没有
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}


var Parent = function Parent() {
    // 验证是否是 Parent 构造出来的 this
    _classCallCheck(this, Parent);
};

var Child = (function (_Parent) {
    _inherits(Child, _Parent);

    function Child() {
        _classCallCheck(this, Child);

        return _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).apply(this, arguments));
    }

    return Child;
}(Parent));

核心是_inherits函数，可以看到它采用的依然也是第五种方式————寄生组合继承方式，同时证明了这种方式的成功。不过这里加了一个Object.setPrototypeOf(subClass, superClass)，这是用来干啥的呢？
答案是用来继承父类的静态方法。这也是原来的继承方式疏忽掉的地方。
追问: 面向对象的设计一定是好的设计吗？
复制代码
不一定。从继承的角度说，这一设计是存在巨大隐患的。
```

《JavaScript 高级程序设计第 4 版》 第 8 章 对象、类与面向对象编程 8.2 创建对象 8.3 继承

### 面向对象的设计一定是好的设计吗？

不一定。从继承的角度说，这一设计是存在巨大隐患的。

### 从设计思想上谈谈继承本身的问题

假如现在有不同品牌的车，每辆车都有 drive、music、addOil 这三个方法。

```javascript
class Car {
  constructor(id) {
    this.id = id;
  }
  drive() {
    console.log("wuwuwu!");
  }
  music() {
    console.log("lalala!");
  }
  addOil() {
    console.log("哦哟！");
  }
}
class otherCar extends Car {}
```

> 现在可以实现车的功能，并且以此去扩展不同的车。
> 但是问题来了，新能源汽车也是车，但是它并不需要 addOil(加油)。
> 如果让新能源汽车的类继承 Car 的话，也是有问题的，俗称"大猩猩和香蕉"的问题。大猩猩手里有香蕉，但是我现在明明只需要香蕉，却拿到了一只大猩猩。也就是说加油这个方法，我现在是不需要的，但是由于继承的原因，也给到子类了。
> 继承的最大问题在于：无法决定继承哪些属性，所有属性都得继承。
> 当然你可能会说，可以再创建一个父类啊，把加油的方法给去掉，但是这也是有问题的，一方面父类是无法描述所有子类的细节情况的，为了不同的子类特性去增加不同的父类，代码势必会大量重复，另一方面一旦子类有所变动，父类也要进行相应的更新，代码的耦合性太高，维护性不好。
> 那如何来解决继承的诸多问题呢？
> 用组合，这也是当今编程语法发展的趋势，比如 golang 完全采用的是面向组合的设计方式。
> 顾名思义，面向组合就是先设计一系列零件，然后将这些零件进行拼装，来形成不同的实例或者类。

```javascript
function drive(){
  console.log("wuwuwu!");
}
function music(){
  console.log("lalala!")
}
function addOil(){
  console.log("哦哟！")
}

let car = compose(drive, music, addOil);
let newEnergyCar = compose(drive, music);
代码干净，复用性也很好。这就是面向组合的设计方式。
```

### Javascript 的作用域链？

> 作用域是根据名称查找变量的一套规则。实际情况中，通常需要同时顾及几个作用域。

当一个块或函数嵌套在另一个块或函数中时，就发生了作用域的嵌套。也就是作用域链。

因此，在当前作用域中无法找到某个变量时，引擎就会在外层嵌套的作用域中继续查找，直到找到该变量， 或抵达最外层的作用域（也就是全局作用域）
可能找到了你所需的变量，也可能没找到，但无论如何查找过程都将停止。

遍历嵌套作用域链的规则很简单：引擎从当前的执行作用域开始查找变量，如果找不到， 就向上一级继续查找。
当抵达最外层的全局作用域时，无论找到还是没找到，查找过程都 会停止。

《你不知道的 JS 上》 第 1 章 作用域是什么 1.3 作用域嵌套

### JavaScript 中的作用域、函数提升与变量声明提升？

```javascript
变量提升的表现是，无论我们在函数中何处位置声明的变量，好像都被提升到了函数的首部，我们可以在变量声明前访问到而不会报错。

造成变量声明提升的本质原因是 js 引擎在代码执行前有一个解析的过程，创建了执行上下文，初始化了一些代码执行时需要用到的对象。
当我们访问一个变量时，我们会到当前执行上下文中的作用域链中去查找，而作用域链的首端指向的是当前执行上下文的变量对象，
这个变量对象是执行上下文的一个属性，它包含了函数的形参、所有的函数和变量声明，这个对象的是在代码解析的时候创建的。
这就是会出现变量声明提升的根本原因。（ES5之前）

var 声明的变量会提升， js 引擎在代码执行前有一个解析的过程，创建了执行上下文，
内部有一个词法环境，有一个词法环境记录，会将变量储存在里面，默认值为undefined。

函数提升就是为了解决相互递归的问题，大体上可以解决自下而上的顺序问题。


// 验证偶数
function isEven(n) {
  if (n === 0) {
    return true;
  }
  return isOdd(n - 1);
}

console.log(isEven(2)); // true

// 验证奇数
function isOdd(n) {
  if (n === 0) {
    return false;
  }
  return isEven(n - 1);
}

如果没有函数提升，而是按照自下而上的顺序，当 isEven 函数被调用时，isOdd 函数还未声明，所以在 isEven 内部无法调用 isOdd 函数。

而变量提升的缘故，这里就不太清楚了，回答下来就是【设计如此】。

```

### 38. 谈谈 This 对象的理解。

> this 是一个很特别的关键字，被自动定义在所有函数的作用域中。是执行上下文词法环境（LE）中的一个属性。
> 对于函数而言，指向最后调用函数的那个对象，是函数运行时内部自动生成的一个内部对象，只能在函数内部使用；对于全局而言，this 指向 window。

this 到底是什么

当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包含函数在哪里被调用（调用栈）、函数的调用方法、传入的参数等信息。
this 就是记录（执行上下文）的其中一个属性，会在函数执行的过程中用到。
this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。

根据优先级来判断函数在某个调用位置应用的是哪条规则

1. 函数是否在 new 中调用（new 绑定）？如果是的话 this 绑定的是新创建的对象。 var bar = new foo()
2. 函数是否通过 call、apply（显式绑定）或者硬绑定调用？如果是的话，this 绑定的是 指定的对象。 var bar = foo.call(obj2)
3. 函数是否在某个上下文对象中调用（隐式绑定）？如果是的话，this 绑定的是那个上 下文对象。 var bar = obj1.foo()
4. 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到 undefined，否则绑定到 全局对象。 var bar = foo() 5.还有一种箭头函数绑定。箭头函数不使用 this 的四种标准规则，而是根据外层（函数或者全局）作用域来决定 this。

### DOM 事件绑定

onclick 和 addEventerListener 中 this 默认指向绑定事件的元素。
IE 比较奇异，使用 attachEvent，里面的 this 默认指向 window。

《你不知道的 JS 上》 第 1 章 关于 this 1.3 this 到底是什么 第 2 章 this 全面解析

### 39. eval 是做什么的？

> JavaScript 中的 eval(..) 函数可以接受一个字符串为参数，并将其中的内容视为好像在书写时就存在于程序中这个位置的代码。

在执行 eval(..) 之后的代码时，引擎并不“知道”或“在意”前面的代码是以动态形式插 入进来，并对词法作用域的环境进行修改的。引擎只会如往常地进行词法作用域查找。
eval(..) 通常被用来执行动态创建的代码，因 为像例子中这样动态地执行一段固定字符所组成的代码，并没有比直接将代码写在那里更有好处。

默认情况下，如果 eval(..) 中所执行的代码包含有一个或多个声明（无论是变量还是函数），就会对 eval(..) 所处的词法作用域进行修改。
通过一些技巧可以间接调用 eval(..) 来使其运行在全局作用域中，并对全局作用域进行修改。但无论何种情况，eval(..) 都可以在运行期修改书写期的词法作用域。

在严格模式的程序中，eval(..) 在运行时有其自己的词法作用域，意味着其中的声明无法修改所在的作用域。

setTimeout(..) 和 setInterval(..) 的第一个参数可以是字符串，字符串的内容可以被解释为一段动态生成的函数代码。这些功能已经过时且并不被提倡。不要使用它们！
new Function(..) 函数的行为也很类似，最后一个参数可以接受代码字符串，并将其转 化为动态生成的函数（前面的参数是这个新生成的函数的形参）。
这种构建函数的语法比 eval(..) 略微安全一些，但也要尽量避免使用。在程序中动态生成代码的使用场景非常罕见，因为它所带来的好处无法抵消性能上的损失。

[万恶的 eval() ？](https://juejin.cn/post/7145079664849977357)
《你不知道的 JS 上》 第 2 章 词法作用域 2.2.1 eval 《JavaScript 权威指南第七版》 4.12 求值表达式 《JavaScript 高级程序设计第四版》 5.4.1 Global 2. eval()方法

> JavaScript 中的 eval(..) 函数可以接受一个字符串为参数，并将其中的内容视为好像在书写时就存在于程序中这个位置的代码。

在执行 eval(..) 之后的代码时，引擎并不“知道”或“在意”前面的代码是以动态形式插 入进来，并对词法作用域的环境进行修改的。引擎只会如往常地进行词法作用域查找。
eval(..) 通常被用来执行动态创建的代码，因 为像例子中这样动态地执行一段固定字符所组成的代码，并没有比直接将代 码写在那里更有好处。

默认情况下，如果 eval(..) 中所执行的代码包含有一个或多个声明（无论是变量还是函 数），就会对 eval(..) 所处的词法作用域进行修改。
通过一些技巧（已经超出我 们的讨论范围）可以间接调用 eval(..) 来使其运行在全局作用域中，并对全局作用域进行 修改。
但无论何种情况，eval(..) 都可以在运行期修改书写期的词法作用域。

在严格模式的程序中，eval(..) 在运行时有其自己的词法作用域，意味着其中的声明无法修改所在的作用域。

setTimeout(..) 和 setInterval(..) 的第一个参数可以是字符串，字符串的内容可以被解释为一段动态生成的函数代码。这些功能已经过时且并不被提倡。不要使用它们！
new Function(..) 函数的行为也很类似，最后一个参数可以接受代码字符串，并将其转 化为动态生成的函数（前面的参数是这个新生成的函数的形参）。
这种构建函数的语法比 eval(..) 略微安全一些，但也要尽量避免使用。在程序中动态生成代码的使用场景非常罕见，因为它所带来的好处无法抵消性能上的损失。

> 2. eval()方法

    是什么
        一个完整的 ECMAScript 解释器
    接受参数
        接收一个参数
        一个要执行的 ECMAScript（JavaScript）字符串
    作用域
        通过 eval()执行的代码属于该调用所在上下文，被执行的代码与该上下文拥有相同的作用域链。
    使用
        定义在包含上下文中的变量可以在 eval()调用内部被引用
        函数 sayHi()是在 eval()内部定义的。因为该调用会被替换为真正的函数定义，所以才可 \n能在下一行代码中调用 sayHi()。对于变量也是一样的
        通过 eval()定义的任何变量和函数都不会被提升，这是因为在解析代码的时候，它们是被包含在一个字符串中的。它们只是在 eval()执行的时候才会被创建
    严格模式
        在严格模式下，在 eval()内部创建的变量和函数无法被外部访问。换句话说，最后两个例子会报

错。同样，在严格模式下，赋值给 eval 也会导致错误
解释代码字符串的能力是非常强大的，但也非常危险。在使用 eval()的时候必须极为慎重，特别是在解释用户输入的内容时。
因为这个方法会对 XSS 利用暴露出很大的攻击面。恶意用户可能插入会导致你网站或应用崩溃的代码。

### 40. 什么是 DOM 和 BOM？

> DOM 指的是文档对象模型，它指的是把文档当做一个对象来对待，这个对象主要定义了处理网页内容的方法和接口。

文档对象模型（DOM，Document Object Model）是 HTML 和 XML 文档的编程接口。DOM 表示
由多层节点构成的文档，通过它开发者可以添加、删除和修改页面的各个部分。脱胎于网景和微软早
期的动态 HTML（DHTML，Dynamic HTML），DOM 现在是真正跨平台、语言无关的表示和操作网页
的方式。

BOM 指的是浏览器对象模型，它指的是把浏览器当做一个对象来对待，这个对象主要定义了与浏览器进行交互的方法和接口。BOM
的核心是 window，而 window 对象具有双重角色，它既是通过 js 访问浏览器窗口的一个接口，又是一个 Global（全局）
对象。这意味着在网页中定义的任何对象，变量和函数，都作为全局对象的一个属性或者方法存在。window 对象含有 locati
on 对象、navigator 对象、screen 对象等子对象，并且 DOM 的最根本的对象 document 对象也是 BOM 的 window 对
象的子对象。

《JavaScript 高级程序设计第四版》 第 14 章 DOM 第 12 章 BOM
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1666964064987-40999dc5-b338-43b4-b796-a668eb45008a.png#averageHue=%23303329&clientId=u43669192-13ab-4&from=paste&height=147&id=u924e84fa&name=image.png&originHeight=220&originWidth=1287&originalType=binary&ratio=1&rotation=0&showTitle=false&size=240419&status=done&style=none&taskId=ude08419a-9d9f-48f2-a18b-997a88efd97&title=&width=858)

### 42. 事件是什么？IE 与火狐的事件机制有什么区别？ 如何阻止冒泡？说一说冒泡和事件捕获？

> JavaScript 与 HTML 的交互是通过事件实现的，事件代表文档或浏览器窗口中某个有意义的时刻。

事件是用户操作网页时发生的交互动作，比如 click/move， 事件除了用户触发的动作外，还可以是文档加载，窗口滚动和大小调整。
事件被封装成一个 event 对象，包含了该事件发生时的所有相关信息（ event 的属性）以及可以对事件进行的操作（ event 的方法）。

所有现代浏览器都支持 DOM 事件流（事件捕获和事件冒泡），只有 IE8 及更早版本不支持（仅支持事件冒泡）。

stopPropagation()方法用于立即阻止事件流在 DOM 结构中传播，取消后续的事件捕获或冒泡。
阻止默认行为：非 IE 浏览器 preventDefault()，IE 浏览器 window.event.returnValue = false

阻止冒泡行为：非 IE 浏览器 stopPropagation()，IE 浏览器 window.event.cancelBubble = true

cancelBubble 属性与 DOMstopPropagation()方法用途一样，都可以阻止事件冒泡。
默认为 false，设置为 true 可以取消冒泡。

因为 IE8 及更早版本不支持捕获阶段，所以只会取消冒泡。stopPropagation()则既取消捕获也取消冒泡。

并不是所有的事件都有冒泡，例如：

onblur
onfocus
onmouseenter
onmouseleave

当需要阻止冒泡行为时，可以使用

function stopBubble(e) {
//如果提供了事件对象，则这是一个非 IE 浏览器
if (e && e.stopPropagation)
//因此它支持 W3C 的 stopPropagation()方法
e.stopPropagation();
//否则，我们需要使用 IE 的方式来取消事件冒泡
else window.event.cancelBubble = true;
}
当需要阻止默认行为时，可以使用

//阻止浏览器的默认行为
function stopDefault(e) {
//阻止默认浏览器动作(W3C)
if (e && e.preventDefault) e.preventDefault();
//IE 中阻止函数器默认动作的方式
else window.event.returnValue = false;
return false;
}

《JavaScript 高级程序设计第四版》17.3 事件对象

### 43. 三种事件模型是什么？

> 事件是用户操作网页时发生的交互动作或者网页本身的一些操作，现代浏览器一共有三种事件模型。

第一种事件模型是最早的 DOM0 级模型，这种模型不会传播，所以没有事件流的概念，但是现在有的浏览器支持以冒泡的方式实
现，它可以在网页中直接定义监听函数，也可以通过 js 属性来指定监听函数。这种方式是所有浏览器都兼容的。

第二种事件模型是 IE 事件模型，在该事件模型中，一次事件共有两个过程，事件处理阶段，和事件冒泡阶段。
事件处理阶段会首先执行目标元素绑定的监听事件。然后是事件冒泡阶段，冒泡指的是事件从目标元素冒泡到 document，依次检查经过的节点是否绑定了事件监听函数，
如果有则执行。这种模型通过 attachEvent 来添加监听函数，可以添加多个监听函数，会按顺序依次执行。

第三种是 DOM2 级事件模型，在该事件模型中，一次事件共有三个过程，第一个过程是事件捕获阶段。
捕获指的是事件从 document 一直向下传播到目标元素，依次检查经过的节点是否绑定了事件监听函数，如果有则执行。
后面两个阶段和 IE 事件模型的两个阶段相同。这种事件模型，事件绑定的函数是 addEventListener，其中第三个参数可以指定事件是否在捕获阶段执行。

《JavaScript 权威指南第七版》15.2 事件

### 44. 事件委托是什么？什么场景应用，使用过代码实现吗

> 事件委托利用事件冒泡，可以只使用一个事件处理程序来管理一种类型的事件。
> 使用事件委托，只要给所有元素共同的祖先节点添加一个事件处理程序，就可以解决事件处理程序被滥用的问题。

因为所有子节点都是父节点的后代，所以它们的事件会向上冒泡，最终都会由这个函数来处理。但事件目标是每个被点击的子节点，只要检查 event 对象的 id 属性就可以确定，然后再执行相应的操作即可。事件委托是一种常见的前端开发技术，其核心思想是利用事件冒泡机制，将事件处理程序添加到父元素上，从而利用事件从子元素向父元素传递的机制，实现对子元素的事件处理。相比直接在每一个子元素上绑定事件处理器。

最适合使用事件委托的事件包括：click、mousedown、mouseup、keydown 和 keypress。

mouseover 和 mouseout 事件冒泡，但很难适当处理，且经常需要计算元素位置（因为 mouseout 会在光标从一个元素移动到它的一个后代节点以及移出元素之外时触发）

事件委托具有以下几个优点：

1. 减少内存开销：只需在父元素上绑定一个事件处理器，而不是在每个子元素上都绑定，可以减少内存占用。
2. 动态绑定事件：通过事件委托，可以在运行时动态地添加删除子元素，而不需要重复为新添加的子元素绑定事件处理器。
3. 代码优化：通过将事件处理放在父元素上，可以使代码更简洁和易于维护。
4. document 对象随时可用，任何时候都可以给它添加事件处理程序（不用等待 DOMContentLoaded 或 load 事件）。这意味着只要页面渲染出可点击的元素，就可以无延迟地起作用。

使用场景：在一个包含大量子元素的列表、表格或菜单中，如果我们需要为每个子元素都绑定事件处理器（如点击事件、鼠标移入移出等），那么这将会带来很大的开发负担，并且降低应用性能。因此，在这种情况下，可以考虑使用事件委托来优化代码。

示例：

`<ul id="list">   <li>选项1</li>   <li>选项2</li>   <li>选项3</li> </ul>`

`// 获取父元素 var ul = document.getElementById('list');  // 添加事件处理器 ul.onclick = function (event) {   var target = event.target;   if (target.tagName === 'LI') {     // 处理选项点击事件     console.log('点击了选项：' + target.innerHTML);   } };`

在该示例中，我们为父元素 ul 绑定了一个点击事件的处理器函数，并通过判断点击事件的 target 元素是否为 li 元素来处理子元素的点击事件。这样，即使新增或删除了列表中的子元素，代码逻辑也不需要做任何调整。

[听不懂找我系列】之『事件代理』「笔面试常规题」](https://www.bilibili.com/video/BV1RZ4y1P7Pf/?spm_id_from=333.999.0.0&vd_source=037b856144283671f89f562ed7eeb263)

### 45. ["1", "2", "3"].map(parseInt) 答案是多少？

> parseInt() 函数能解析一个字符串，并返回一个整数，需要两个参数 (val, radix)，其中 radix 表示要解析的数字的基数。
> （该值介于 2 ~ 36 之间，并且字符串中的数字不能大于 radix 才能正确返回数字结果值）。

此处 map 传了 3 个参数 (element, index, array)，默认第三个参数被忽略掉，因此三次传入的参数分别为 "1-0", "2-1", "3-2"

因为字符串的值不能大于基数，因此后面两次调用均失败，返回 NaN ，第一次基数为 0 ，按十进制解析返回 1。

《JavaScript 高级程序设计第四版》6.2.13 迭代方法 3.4.5 Number 类型 4. 数值转换

### 什么是闭包，为什么要用它？

什么是闭包？

**红宝书(p309)** 上对于闭包的定义：闭包是指有权访问另外一个函数作用域中的变量的函数，

MDN 对闭包的定义为：闭包是指那些能够访问自由变量的函数。

（其中自由变量，指在函数中使用的，但既不是函数参数 arguments 也不是函数的局部变量的变量，其实就是另外一个函数作用域中的变量。）

闭包产生的原因?

首先要明白作用域链的概念，其实很简单，在 ES5 中只存在两种作用域————全局作用域和函数作用域，`当访问一个变量时，解释器会首先在当前作用域查找标示符，如果没有找到，就去父作用域找，直到找到该变量的标示符或者不在父作用域中，这就是作用域链`，值得注意的是，每一个子函数都会拷贝上级的作用域，形成一个作用域的链条。 比如:

```
var a = 1;
function f1() {
 var a = 2;
 function f2() {
 var a = 3;
 console.log(a); //3
 }
}
```

在这段代码中，f1 的作用域指向有全局作用域(window)和它本身，而 f2 的作用域指向全局作用域(window)、f1 和它本身。而且作用域是从最底层向上找，直到找到全局作用域 window 为止，如果全局还没有的话就会报错。就这么简单一件事情！

闭包产生的本质就是，当前环境中存在指向父级作用域的引用。还是举上面的例子:

```js
function f1() {
  var a = 2;
  function f2() {
    console.log(a); //2
  }
  return f2;
}
var x = f1();
x();
```

这里 x 会拿到父级作用域中的变量，输出 2。因为在当前环境中，含有对 f2 的引用，f2 恰恰引用了 window、f1 和 f2 的作用域。因此 f2 可以访问到 f1 的作用域的变量。

那是不是只有返回函数才算是产生了闭包呢？

回到闭包的本质，我们只需要让父级作用域的引用存在即可，因此我们还可以这么做：

```js
var f3;
function f1() {
  var a = 2;
  f3 = function () {
    console.log(a);
  };
}
f1();
f3();
```

让 f1 执行，给 f3 赋值后，等于说现在 `f3拥有了window、f1和f3本身这几个作用域的访问权限`，还是自底向上查找，`最近是在f1`中找到了 a,因此输出 2。

在这里是外面的变量 `f3存在着父级作用域的引用`，因此产生了闭包，形式变了，本质没有改变。

### 闭包有哪些表现形式?

明白了本质之后，我们就来看看，在真实的场景中，究竟在哪些地方能体现闭包的存在？

1. 返回一个函数。刚刚已经举例。
2. 作为函数参数传递

```js
var a = 1;
function foo() {
  var a = 2;
  function baz() {
    console.log(a);
  }
  bar(baz);
}
function bar(fn) {
  // 这就是闭包
  var a = 3;
  fn();
}
// 输出2，而不是1
foo();
```

3. 在定时器、事件监听、Ajax 请求、跨窗口通信、Web Workers 或者任何异步中，只要使用了回调函数，实际上就是在使用闭包。

以下的闭包保存的仅仅是 window 和当前作用域。

```js
// 定时器
setTimeout(function timeHandler(){
  console.log('111');
}，100)


// 事件监听
$('#app').click(function(){
  console.log('DOM Listener');
})
```

4. IIFE(立即执行函数表达式)创建闭包, 保存了 `全局作用域window`和 `当前函数的作用域`，因此可以全局的变量。

```js
var a = 2;
(function IIFE() {
  // 输出2
  console.log(a);
})();
```

### 闭包的缺点？

尽管闭包是 JavaScript 中功能强大的特性之一，但它也有一些缺点。以下是几个常见的闭包缺点：

1. 内存泄漏：由于闭包会在父函数执行完后仍然能够保持对父函数中变量的引用，因此可能会导致内存泄漏问题。如果闭包中的变量受到垃圾回收机制限制而无法被释放，那么就会占用过多的内存空间。
2. 性能问题：由于闭包涉及到变量作用域的查找和访问，因此可能会导致性能问题。尤其是在创建大量闭包的情况下，会对内存和 CPU 的消耗产生影响。
3. 安全问题：由于闭包可以访问父函数的变量，因此可能会被用于一些不安全的操作，比如修改或篡改父函数的变量值。
4. 难以理解和调试：使用闭包可能使代码变得复杂和难以理解，尤其是对于新手或不熟悉 JavaScript 的开发者来说。同时，由于闭包牵涉到多个函数之间的变量共享，也可能会影响代码的调试和维护。

### 如何解决下面的循环输出问题？

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, 0);
}
```

为什么会全部输出 6？如何改进，让它输出 1，2，3，4，5？(方法越多越好)

因为 setTimeout 为宏任务，由于 JS 中单线程 eventLoop 机制，在主线程同步任务执行完后才去执行宏任务，因此循环结束后 setTimeout 中的回调才依次执行，但输出 i 的时候当前作用域没有，往上一级再找，发现了 i,此时循环已经结束，i 变成了 6。因此会全部输出 6。

解决方法：

1、利用 IIFE(立即执行函数表达式)当每次 for 循环时，把此时的 i 变量传递到定时器中

```js
for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j);
    }, 0);
  })(i);
}
```

2、给定时器传入第三个参数, 作为 timer 函数的第一个函数参数

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(
    function timer(j) {
      console.log(j);
    },
    0,
    i
  );
}
```

3、使用 ES6 中的 let

```js
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, 0);
}
```

let 使 JS 发生革命性的变化，让 JS 有函数作用域变为了块级作用域，用 let 后作用域链不复存在。代码的作用域以块级为单位，以上面代码为例:

```
// i = 1
{
  setTimeout(function timer(){
    console.log(1)
  },0)
}
// i = 2
{
  setTimeout(function timer(){
    console.log(2)
  },0)
}
// i = 3
...
```

因此能输出正确的结果

什么是闭包？

闭包是基于词法作用域书写代码时所产生的自然结果，比如在函数中嵌套了函数。
当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。

为什么要用它？

① 函数在定义时的词法作用域以外的地方被调用。闭包使得函数可以继续访问定义时的词法作用域。

② 无论通过何种手段将内部函数传递到所在的词法作用域以外，它都会持有对原始定义作用域的引用，无论在何处执行这个函数都会使用闭包。

在定时器、事件监听器、 Ajax 请求、跨窗口通信、Web Workers 或者任何其他的异步（或者同步）任务中，只要使用了回调函数，实际上就是在使用闭包！

好处：

缓存。将变量隐藏起来不被 GC 回收。
实现柯里化。利用闭包特性完成柯里化。

坏处：

内存消耗。闭包产生的变量无法被销毁。
性能问题。由于闭包内部变量优先级高于外部变量，所以需要多查找作用域链的一个层次，一定程度影响查找速度。

[喂，别忙着过七夕了，闭包彻底搞懂了吗？](https://juejin.cn/post/7127972897083097096) 《你不知道的 JS 上》第 5 章 作用域闭包

### javascript 代码中的 "use strict"; 是什么意思 ? 使用它区别是什么？

ECMAScript 5 首次引入严格模式的概念。严格模式用于选择以更严格的条件检查 JavaScript 代码错误，可以应用到全局，也可以应用到函数内部。

use strict 指的是严格运行模式，在这种模式对 js 的使用添加了一些限制。比如说禁止 this 指向全局对象，还有禁止使
用 with 语句等。设立严格模式的目的，主要是为了消除代码使用中的一些不安全的使用方式，也是为了消除 js 语法本身的一
些不合理的地方，以此来减少一些运行时的怪异的行为。同时使用严格运行模式也能够提高编译的效率，从而提高代码的运行速度。
我认为严格模式代表了 js 一种更合理、更安全、更严谨的发展方向。

《JavaScript 高级程序设计第四版》附录 B 严格模式

### 48. 如何判断一个对象是否属于某个类？

第一种方式是使用 instanceof 运算符来判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。

第二种方式可以通过对象的 constructor 属性来判断，对象的 constructor 属性指向该对象的构造函数，但是这种方式不是很安全，因为 constructor 属性可以被改写。

第三种方式，如果需要判断的是某个内置的引用类型的话，可以使用 Object.prototype.toString() 方法来打印对象的[[Class]] 属性来进行判断。

第四种方式， Object.prototype.isPrototypeOf() isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1666964287927-64d1a128-5741-4190-9b83-06c222ec9660.png#averageHue=%23353429&clientId=u2f44498e-d215-4&from=paste&height=275&id=u881c184f&name=image.png&originHeight=413&originWidth=726&originalType=binary&ratio=1&rotation=0&showTitle=false&size=232704&status=done&style=none&taskId=u3b4986fd-b0fc-4842-8749-3df7664c26d&title=&width=484)

### 49. instanceof 的作用？

- instanceof 原理

  1.instanceof 作用
  instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
  是就返回 true，不是就返回 false。 2.实现原理
  当使用 instanceof 时，如果 class 上有静态方法 Symbol.hasInstance，那就直接调用这个方法，
  如果没有就使用 obj instanceOf Class 检查 Class.prototype 是否等于 obj 的原型链中的原型之一。

[扒下 JS 的“底裤”之 instanceof 运算符详解](https://juejin.cn/post/7108552313546997767) 《你不知道的 JS 上》第 5 章 作用域闭包

### new 操作符具体干了什么呢？如何实现？

new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

使用 new 调用类的构造函数会执行如下操作。

(1) 在内存中创建一个新对象。
(2) 这个新对象内部的[[Prototype]]指针被赋值为构造函数的 prototype 属性。
(3) 构造函数内部的 this 被赋值为这个新对象（即 this 指向新对象）。
(4) 执行构造函数内部的代码（给新对象添加属性）。
(5) 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。

《JavaScript 高级程序设计第四版》8.4.2 类构造函数

### new bind 过后的函数 this 的问题?

在使用 `new` 和 `bind` 同时对一个函数进行操作时，`this` 的绑定关系要遵循 `new` 操作符的优先级规则。如果在 `new` 过程中指定了 `this`，那么 `bind` 的 `this` 将被忽略。

### Javascript 中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？

hasOwnProperty(propertyName)：用于判断当前对象实例（不是原型）上是否存在给定的属
性。要检查的属性名必须是字符串（如 o.hasOwnProperty("name")）或符号。

《JavaScript 高级程序设计第四版》3.4.8 Object 类型

### 52. 对于 JSON 的了解？

JSON 是一种数据交换格式，基于文本，优于轻量，用于交换数据。
JSON 不是编程语言。JSON 不属于 JavaScript，它们只是拥有相同的语法。很多语言都有解析和序列化 JSON 的内置能力。
JSON 可以表示数字、布尔值、字符串、null、数组（值的有序序列），以及由这些值（或数组、对象）所组成的对象（字符串与
值的映射）。

在项目开发中，我们使用 JSON 作为前后端数据交换的方式。
在前端我们通过将一个符合 JSON 格式的数据结构序列化为 JSON 字符串。
然后将它传递到后端，后端通过 JSON 格式的字符串解析后生成对应的数据结构，以此来实现前后端数据的一个传递。

因为 JSON 的语法是基于 js 的，因此很容易将 JSON 和 js 中的对象弄混，
但是我们应该注意的是 JSON 和 js 中的对象不是一回事，JSON 中对象格式更加严格，
比如说在 JSON 中属性值不能为函数，不能出现 NaN 这样的属性值等，因此大多数的 js 对象是不符合 JSON 对象的格式的。

在 js 中提供了两个函数来实现 js 数据结构和 JSON 格式的转换处理，
一个是 JSON.stringify 函数，通过传入一个符合 JSON 格式的数据结构，将其转换为一个 JSON 字符串。
如果传入的数据结构不符合 JSON 格式，那么在序列化的时候会对这些值进行对应的特殊处理，使其符合规范。
在前端向后端发送数据时，我们可以调用这个函数将数据对象转化为 JSON 格式的字符串。

另一个函数 JSON.parse() 函数，这个函数用来将 JSON 格式的字符串转换为一个 js 数据结构，
如果传入的字符串不是标准的 JSON 格式的字符串的话，将会抛出错误。
当我们从后端接收到 JSON 格式的字符串时，我们可以通过这个方法来将其解析为一个 js 数据结构，以此来进行数据的访问。

《JavaScript 高级程序设计第四版》第 23 章 JSON

### 53. [].forEach.call($$("\_"),function(a)) 能解释一下这段代码的意思吗？

（1）选取页面所有 DOM 元素。在浏览器的控制台中可以使用$$()方法来获取页面中相应的元素，
这是现代浏览器提供的一个命令行 API 相当于 document.querySelectorAll 方法。

（2）循环遍历 DOM 元素

（3）给元素添加 outline 。由于渲染的 outline 是不在 CSS 盒模型中的，所以为元素添加 outline 并不会影响元素的大小和页面的布局。

（4）生成随机颜色函数。Math.random()\*(1<<24) 可以得到 0~2^24 - 1 之间的随机数，因为得到的是一个浮点数，
但我们只需要整数部分，使用取反操作符 ~ 连续两次取反获得整数部分，然后再用 toString(16) 的方式，转换为一个十六进制的字符串。

《JavaScript 高级程序设计第四版》3.5.2 位操作符 5. 左移 1. 按位非 《JavaScript 权威指南第七版》4.8.3 位操作符

### 54. js 延迟加载的方式有哪些？script 标签 defer async

js 的加载、解析和执行会阻塞页面的渲染过程，因此我们希望 js 脚本能够尽可能的延迟加载，提高页面的渲染速度。

我了解到的几种方式是：

第一种方式是我们一般采用的是将 js 脚本放在文档的底部，来使 js 脚本尽可能的在最后来加载执行。

第二种方式是给 js 脚本添加 defer 属性，
这个属性会让脚本的加载与文档的解析同步解析，然后在文档解析完成后再执行这个脚本文件，这样的话就能使页面的渲染不被阻塞。
推迟的脚本原则上按照它们被列出的次序执行。

第三种方式是给 js 脚本添加 async 属性，
这个属性会使脚本异步加载，不会阻塞页面的解析过程，但是当脚本加载完成后立即执行 js 脚本，即异步加载。这个时候如果文档没有解析完成的话同样会阻塞。
多个 async 属性的脚本的执行顺序是不可预测的，一般不会按照代码的顺序依次执行。

第四种方式是动态加载脚本，也就是动态创建 DOM 标签的方式，
我们可以对文档的加载事件进行监听，当文档加载完成后再动态的创建 script 标签来引入 js 脚本。
默认情况下，以这种方式创建的

《JavaScript 高级程序设计第四版》25.1 cookie

### 63. 模块化开发怎么做？

```javascript
我对模块的理解是，一个模块是实现一个特定功能的一组方法。在最开始的时候，js 只实现一些简单的功能，所以并没有模块的概念，
但随着程序越来越复杂，代码的模块化开发变得越来越重要。

由于函数具有独立作用域的特点，最原始的写法是使用函数来作为模块，几个函数作为一个模块，但是这种方式容易造成全局变量的污
染，并且模块间没有联系。

后面提出了对象写法，通过将函数作为一个对象的方法来实现，这样解决了直接使用函数作为模块的一些缺点，但是这种办法会暴露所
有的所有的模块成员，外部代码可以修改内部属性的值。

现在最常用的是立即执行函数的写法，通过利用闭包来实现模块私有作用域的建立，同时不会对全局作用域造成污染。
```

《红宝书》第 26 章

### 64. js 的几种模块规范？

```javascript
js 中现在比较成熟的有四种模块加载方案。

第一种是 CommonJS 方案，它通过 require 来引入模块，通过 module.exports 定义模块的输出接口。这种模块加载方案是
服务器端的解决方案，它是以同步的方式来引入模块的，因为在服务端文件都存储在本地磁盘，所以读取非常快，所以以同步的方式
加载没有问题。但如果是在浏览器端，由于模块的加载是使用网络请求，因此使用异步加载的方式更加合适。

第二种是 AMD 方案，这种方案采用异步加载的方式来加载模块，模块的加载不影响后面语句的执行，所有依赖这个模块的语句都定
义在一个回调函数里，等到加载完成后再执行回调函数。require.js 实现了 AMD 规范。

第三种是 CMD 方案，这种方案和 AMD 方案都是为了解决异步模块加载的问题，sea.js 实现了 CMD 规范。它和 require.js
的区别在于模块定义时对依赖的处理不同和对依赖模块的执行时机的处理不同。参考60

第四种方案是 ES6 提出的方案，使用 import 和 export 的形式来导入导出模块。这种方案和上面三种方案都不同。参考 61。
```

《红宝书》第 26 章

### 65. AMD 和 CMD 规范的区别？

```javascript
它们之间的主要区别有两个方面。

（1）第一个方面是在模块定义时对依赖的处理不同。
  AMD 推崇依赖前置，在定义模块的时候就要声明其依赖的模块。
  而 CMD 推崇 就近依赖，只有在用到某个模块的时候再去 require。

（2）第二个方面是对依赖模块的执行时机处理不同。首先 AMD 和 CMD 对于模块的加载方式都是异步加载，不过它们的区别在于 模块的执行时机，
  AMD 在依赖模块加载完成后就直接执行依赖模块，依赖模块的执行顺序和我们书写的顺序不一定一致。
  而 CMD 在依赖模块加载完成后并不执行，只是下载而已，等到所有的依赖模块都加载好后，进入回调函数逻辑，
  遇到 require 语句 的时候才执行对应的模块，这样模块的执行顺序就和我们书写的顺序保持一致了。

// CMD
define(function(require, exports, module) {
  var a = require("./a");
  a.doSomething();
  // 此处略去 100 行
  var b = require("./b"); // 依赖可以就近书写
  b.doSomething();
  // ...
});

// AMD 默认推荐
define(["./a", "./b"], function(a, b) {
  // 依赖必须一开始就写好
  a.doSomething();
  // 此处略去 100 行
  b.doSomething();
  // ...
});
```

《红宝书》第 26 章

```javascript
- AMD主要是应用于浏览器的一种模块化规范：

  AMD是Asynchronous Module Definition（异步模块定义）的缩写；
  它采用的是异步加载模块； p事实上AMD的规范还要早于CommonJS，但是CommonJS目前依然在被使用，而AMD使用的较少了；
  我们提到过，规范只是定义代码的应该如何去编写，只有有了具体的实现才能被应用：
  pAMD实现的比较常用的库是require.js和curl.js；

- CMD规范也是应用于浏览器的一种模块化规范：
    CMD 是Common Module Definition（通用模块定义）的缩写；
  它也采用了异步加载模块，但是它将CommonJS的优点吸收了过来；但是目前CMD使用也非常少了；
  CMD也有自己比较优秀的实现方案： pSeaJS
```

### 66. ES6 模块与 CommonJS 模块、AMD、CMD 的差异。

```javascript
1.CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
  CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
  ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令 import，就会生成一个只读引用。
  等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。

2.CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
  CommonJS 模块就是对象，即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。
  而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。
```

《红宝书》第 26 章

### 67. requireJS 的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何 缓存的？）

```javascript
require.js 的核心原理是通过动态创建 script 脚本来异步引入模块，然后对每个脚本的 load 事件进行监听，如果每个脚本都加载完成了，再调用回调函数。
```

[《requireJS 的用法和原理分析》](https://github.com/HRFE/blog/issues/10) [《requireJS 的核心原理是什么？》](https://zhuanlan.zhihu.com/p/55039478) [《从 RequireJs 源码剖析脚本加载原理》](https://www.cnblogs.com/dong-xu/p/7160919.html) [《requireJS 原理分析》](https://www.jianshu.com/p/5a39535909e4)
《红宝书》第 26 章

### 68. JS 模块加载器的轮子怎么造，也就是如何实现一个模块加载器？

```javascript
1.CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
  CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
  ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令 import，就会生成一个只读引用。
  等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。

2.CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
  CommonJS 模块就是对象，即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。
  而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。
```

《红宝书》第 26 章

### 69. ECMAScript6 怎么写 class，为什么会出现 class 这种东西?

```javascript
在我看来 ES6 新添加的 class 只是为了补充 js 中缺少的一些面向对象语言的特性，
但本质上来说它只是一种语法糖，不是一个新的东西，其背后还是原型继承的思想。
通过加入 class 可以有利于我们更好的组织代码。

在 class 中添加的方法，其实是添加在类的原型上的。
```

《红宝书》第 26 章

### 70. documen.write 和 innerHTML 的区别？

```javascript
document.write 的内容会代替整个文档内容，会重写整个页面。

innerHTML 的内容只是替代指定元素的内容，只会重写页面中的部分内容。
```

《红宝书》第 14 章 DOM 6. 文档写入 15.3 HTML5 15.3.6 插入标记

### 71. DOM 操作——怎样添加、移除、移动、复制、创建和查找节点？

```javascript
（1）创建新节点
createDocumentFragment(node);
createElement(node);
createTextNode(text);

（2）添加、移除、替换、插入
appendChild(node)
removeChild(node)
replaceChild(new,old)
insertBefore(new,old)

（3）查找
getElementById();
getElementsByName();
getElementsByTagName();
getElementsByClassName();
querySelector();
querySelectorAll();

（4）属性操作
getAttribute(key);
setAttribute(key, value);
hasAttribute(key);
removeAttribute(key);
```

《红宝书》第 15 章 15.1 Selectors API 14.2 DOM 编程

### 72. innerHTML 与 outerHTML 的区别？

```javascript
对于这样一个 HTML 元素：<div>content<br/></div>。

innerHTML：内部 HTML，content<br/>；
outerHTML：外部 HTML，<div>content<br/></div>；
innerText：内部文本，content ；
outerText：内部文本，content ；
```

《JavaScript 高级程序设计第四版》15.3 HTML5 15.3.6 插入标记

```javascript
1. innerHTML 属性
    -在读取 innerHTML 属性时，会返回元素所有后代的 HTML 字符串，包括元素、注释和文本节点。

        实际返回的文本内容会因浏览器而不同。IE 和 Opera 会把所有元素标签转换为大写，
    而 Safari、Chrome 和 Firefox 则会按照文档源代码的格式返回，包含空格和缩进。因此不要指望不同浏览器的innerHTML 会返回完全一样的值。

    -在写入 innerHTML 时，则会根据提供的字符串值以新的 DOM 子树替代元素中原来包含的所有节点。

        在写入模式下，赋给 innerHTML 属性的值会被解析为 DOM 子树，并替代元素之前的所有节点。

    因为所赋的值默认为 HTML，所以其中的所有标签都会以浏览器处理 HTML 的方式转换为元素（同样，转换结果也会因浏览器不同而不同）。
    如果赋值中不包含任何 HTML 标签，则直接生成一个文本节点

        浏览器会解析设置的值，所以给 innerHTML 设置包含 HTML 的字符串时，结果会大不一样
        设置完 innerHTML，马上就可以像访问其他节点一样访问这些新节点。

    -设置 innerHTML 会导致浏览器将 HTML 字符串解析为相应的 DOM 树。这意味着设置 innerHTML 属性后马上再读出来会得到不同的字符串。
    这是因为返回的字符串是将原始字符串对应的 DOM 子树序列化之后的结果。

2. 旧 IE 中的 innerHTML
-在所有现代浏览器中，通过 innerHTML 插入的<script>标签是不会执行的。
而在 IE8 及之前的版本中，只要这样插入的<script>元素指定了 defer 属性，且<script>之前是“受控元素”（scoped element），那就是可以执行的。

- <script>元素与<style>或注释一样，都是“非受控元素”（NoScope element），也就是在页面上看不到它们。IE 会把 innerHTML 中从非受控元素开始的内容都删掉

-为了达到目的，必须在<script>前面加上一个受控元素，例如文本节点或没有结束标签的元素（如<input>）。

第一行会在<script>元素前面插入一个文本节点。为了不影响页面排版，可能稍后需要删掉这个文本节点。
第二行与之类似，使用了包含空格的<div>元素。空<div>是不行的，必须包含一点内容，以强制创建一个文本节点。
同样，这个<div>元素可能也需要事后删除，以免影响页面外观
第三行使用了一个隐藏的<input>字段来达成同样的目的。因为这个字段不影响页面布局，所以应该是最理想的方案。

-在 IE 中，通过 innerHTML 插入<style>也会有类似的问题。多数浏览器支持使用 innerHTML 插 入<style>元素
但在 IE8 及之前的版本中，<style>也被认为是非受控元素，所以必须前置一个受控元素

-注意 Firefox 在内容类型为application/xhtml+xml 的 XHTML 文档中对 innerHTML更加严格。
在 XHTML 文档中使用 innerHTML，必须使用格式良好的 XHTML 代码。否则，在 Firefox 中会静默失败。

3. outerHTML 属性

    读取 outerHTML 属性时，会返回调用它的元素（及所有后代元素）的 HTML 字符串
    在写入outerHTML 属性时，调用它的元素会被传入的 HTML 字符串经解释之后生成的 DOM 子树取代。
    浏览器因解析和解释 HTML 代码的机制不同，返回的字符串也可能不同。（跟 innerHTML 的情况是一样的。）
```

### 73. .call() 和 .apply() 的区别？Bind()？

它们的作用一模一样，区别仅在于传入参数的形式的不同。

apply 接受两个参数，第一个参数指定了函数体内 this 对象的指向。
第二个参数为一个带下标的集合，这个集合可以为数组，也可以为类数组，apply 方法把这个集合中的元素作为参数传递给被调用的函数。

call 传入的参数数量不固定，跟 apply 相同的是，第一个参数也是代表函数体内的 this 指向，从第二个参数开始往后，每个参数被依次传入函数。

《JavaScript 高级程序设计第四版》10.10 函数属性与方法

```javascript
函数还有两个方法：apply()和 call()。这两个方法都会以指定的 this 值来调用函数，即会设
置调用函数时函数体内 this 对象的值。apply()方法接收两个参数：函数内 this 的值和一个参数数
组。第二个参数可以是 Array 的实例，但也可以是 arguments 对象。
```

### 74. JavaScript 类数组对象的定义？

```javascript
一个拥有 length 属性和若干索引属性的对象就可以被称为类数组对象，类数组对象和数组类似，但是不能调用数组的方法。

常见的类数组对象有 arguments 和 DOM 方法的返回结果，还有一个函数也可以被看作是类数组对象，因为它含有 length
属性值，代表可接收的参数个数。

常见的类数组转换为数组的方法有这样几种：

（1）通过 call 调用数组的 slice 方法来实现转换
Array.prototype.slice.call(arrayLike);

（2）通过 call 调用数组的 splice 方法来实现转换
Array.prototype.splice.call(arrayLike, 0);

（3）通过 apply 调用数组的 concat 方法来实现转换
Array.prototype.concat.apply([], arrayLike);

（4）通过 Array.from 方法来实现转换
Array.from(arrayLike);

（5）通过扩展运算符来实现转换
  var Arr = [...arguments]
  console.log(Arr)
```

《深入理解 ES6》第十章 增强的数组功能 Array.from() 方法《JavaScript 权威指南第七版》7.9 类数组对象
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1666964169635-191bd01e-582d-4dfe-80c8-91fc20a6f98c.png#clientId=ucc8f5d2e-474a-4&from=paste&height=475&id=u6ddc144d&name=image.png&originHeight=712&originWidth=900&originalType=binary&ratio=1&rotation=0&showTitle=false&size=361155&status=done&style=none&taskId=ua5ddd3e2-9ae1-433b-b403-a32b7b43d1e&title=&width=600)

### 75.数组有哪些原生方法？

```javascript
数组和字符串的转换方法：toString()、toLocalString()、join() 其中 join() 方法可以指定转换为字符串时的分隔符。

数组尾部操作的方法 pop() 和 push()，push 方法可以传入多个参数。

数组首部操作的方法 shift() 和 unshift() 重排序的方法 reverse() 和 sort()，sort() 方法可以传入一个函数来进行比较，传入前后两个值，
如果返回值为正数，则交换两个参数的位置。

数组连接的方法 concat() ，返回的是拼接好的数组，不影响原数组。

数组截取办法 slice()，用于截取数组中的一部分返回，不影响原数组。

数组插入方法 splice()，影响原数组查找特定项的索引的方法，indexOf() 和 lastIndexOf() 迭代方法 every()、some()、filter()、map() 和 forEach() 方法

数组归并方法 reduce() 和 reduceRight() 方法
```

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1665414699949-9eb357f3-51a6-4066-8851-064e9976037a.png#averageHue=%23b1aba7&clientId=u016fef9f-ac36-4&from=paste&height=483&id=uc37849bf&name=image.png&originHeight=724&originWidth=317&originalType=binary&ratio=1&rotation=0&showTitle=false&size=117237&status=done&style=none&taskId=ub6409159-843f-4e31-848a-484e27c4881&title=&width=211.33333333333334)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1667265982578-c55390fb-ac91-4d95-a2e5-10c96f63da26.png#averageHue=%23c2c1c0&clientId=ufca7b0fc-c60d-4&from=paste&height=482&id=ub1edc56c&name=image.png&originHeight=723&originWidth=1372&originalType=binary&ratio=1&rotation=0&showTitle=false&size=302531&status=done&style=none&taskId=ucc896a8b-fa59-48f1-894a-709cf8796b9&title=&width=914.6666666666666)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1667265993844-149f2aa6-5831-4778-85a5-efc3d1c22760.png#averageHue=%23c2c1c0&clientId=ufca7b0fc-c60d-4&from=paste&height=423&id=u2317d8cf&name=image.png&originHeight=635&originWidth=1370&originalType=binary&ratio=1&rotation=0&showTitle=false&size=229877&status=done&style=none&taskId=u1cb809c7-5b3c-4aac-b469-da7f596a0b4&title=&width=913.3333333333334)

### 76. 数组的 fill 方法？

```javascript
fill() 方法

fill()方法能使用特定值填充数组中的一个或多个元素。当只使用一个参数的时候，该方法会用该参数的值填充整个数组

若你不想改变数组中的所有元素，而只想改变其中一部分，那么可以使用可选的起始位置参数与结束位置参数（不包括结束位置的那个元素）

如果提供的起始位置或结束位置为负数，则它们会被加上数组的长度来算出最终的位置
```

《深入理解 ES6》第十章 增强的数组功能 所有数组上的新方法 fill() 方法

### 77. [,,,] 的长度？

```javascript
尾后逗号 （有时叫做“终止逗号”）在向 JavaScript 代码添加元素、参数、属性时十分有用。
如果你想要添加新的属性，并且上一行已经使用了尾后逗号，你可以仅仅添加新的一行，而不需要修改上一行。
这使得版本控制的代码比较（diff）更加清晰，代码编辑过程中遇到的麻烦更少。

JavaScript 一开始就支持数组字面量中的尾后逗号，随后向对象字面量（ECMAScript 5）中添加了尾后逗号。最近（ECMAScript 2017），又将其添加到函数参数中。

但是，JSON 不允许尾后逗号。

如果使用了多于一个尾后逗号，会产生省略（elision，或者间隙 hole）。 带有间隙的数组叫做稀疏数组（sparse 紧凑数组 dense array 没有省略/间隙）。
例如，当使用 Array.prototype.forEach() 或 Array.prototype.map() 迭代数组时，会跳过数组间隙。
```

MDN[《尾后逗号》](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Trailing_commas)

### 79. 如何编写高性能的 Javascript ？

```javascript
1.使用位运算代替一些简单的四则运算。
2.避免使用过深的嵌套循环。
3.不要使用未定义的变量。
4.当需要多次访问数组长度时，可以用变量保存起来，避免每次都会去进行属性查找。
```

[《如何编写高性能的 Javascript？》](https://zhuanlan.zhihu.com/p/34780474)

### 81. 哪些操作会造成内存泄漏？

```javascript
1.意外的全局变量
2.被遗忘的计时器或回调函数
3.脱离 DOM 的引用
4.闭包

第一种情况是我们由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。

第二种情况是我们设置了 setInterval 定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留
在内存中，而无法被回收。

第三种情况是我们获取一个 DOM 元素的引用，而后面这个元素被删除，由于我们一直保留了对这个元素的引用，所以它也无法被回
收。

第四种情况是不合理的使用闭包，从而导致某些变量一直被留在内存当中。
```

[《JavaScript 内存泄漏教程》](http://www.ruanyifeng.com/blog/2017/04/memory-leak.html) [《4 类 JavaScript 内存泄漏及如何避免》](https://jinlong.github.io/2016/05/01/4-Types-of-Memory-Leaks-in-JavaScript-and-How-to-Get-Rid-Of-Them/) [《杜绝 js 中四种内存泄漏类型的发生》](https://juejin.im/entry/5a64366c6fb9a01c9332c706) [《javascript 典型内存泄漏及 chrome 的排查方法》](https://segmentfault.com/a/1190000008901861)

### 82.需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？

### 83. 如何判断当前脚本运行在浏览器还是 node 环境中？（阿里）

```javascript
typeof window === 'undefined' ? 'node' : 'browser';

通过判断当前环境的 window 对象类型是否为 undefined，如果是undefined，则说明当前脚本运行在node环境，
否则说明运行在window环境。
```

### 84. 把 script 标签放在页面的最底部的 body 封闭之前和封闭之后有什么区别？浏览器会如何解析它们？

```javascript
过去，所有<script>元素都被放在页面的<head>标签内
这种做法的主要目的是把外部的 CSS 和 JavaScript 文件都集中放到一起。

不过，把所有 JavaScript文件都放在<head>里，也就意味着必须把所有 JavaScript 代码都下载、解析和解释完成后，
才能开始渲染页面（页面在浏览器解析到<body>的起始标签时开始渲染）。

对于需要很多 JavaScript 的页面，这会导致页面渲染的明显延迟，在此期间浏览器窗口完全空白。
为解决这个问题，现代 Web 应用程序通常将所有 JavaScript 引用放在<body>元素中的页面内容后面
```

《JavaScript 高级程序设计第四版》第 2 章 HTML 中的 JavaScript 2.1.1 标签位置

### 85. 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？

```javascript
移动端点击有 300ms 的延迟是因为移动端会有双击缩放的这个操作，因此浏览器在 click 之后要等待 300ms，看用户有没有下一次点击，来判断这次操作是不是双击。

click 延时问题还可能引起点击穿透的问题，就是如果我们在一个元素上注册了 touchStart 的监听事件，
这个事件会将这个元素隐藏掉，我们发现当这个元素隐藏后，触发了这个元素下的一个元素的点击事件，这就是点击穿透。

有三种办法来解决这个问题：

1.禁用缩放。浏览器禁用默认的双击缩放行为并且去掉300ms的点击延迟。<meta name="viewport" content="user-scalable=no">

2.通过 meta 标签将网页的 viewport 设置为 ideal viewport。

3.调用一些 js 库，比如 FastClick

4.利用touch事件自己封装这个事件解决300ms延迟。

原理就是∶
1.当我们手指触摸屏幕，记录当前触摸时间
2当我们手指离开屏幕，用离开的时间减去触摸的时间
3.如果时间小于150ms，并且没有滑动过屏幕，那么我们就定义为点击

//封装tap，解决click 300ms延时
function tap(obj, callback) {
    var isMove = false;
    var startTime = 0; // 记录触摸时候的时间变量
    obj.addEventListener('touchstart ', function (e) {
        startTime = Date.now(); // 记录触摸时间
    });
    obj.addEventListener('touchmove', function (e) {
        isMove = true; // 看看是否有滑动，有滑动算拖拽，不算点击
    });
    obj.addEventListener('touchend ', function (e) {
        if (!isMove && (Date.now() - startTime) < 150) {//如果手指触摸和离开时间小于150ms 算点击
            callback && callback(); // 执行回调函数
        }
        isMove = false; // 取反重置
        startTime = 0;
    });
}
// 调用
tap(div, function () {
    // 执行代码
});
```

### 86. 什么是“前端路由”？什么时候适合使用“前端路由”？“前端路由”有哪些优点和缺点？

```javascript
（1）什么是前端路由？

前端路由就是把不同路由对应不同的内容或页面的任务交给前端来做，
之前是通过服务端根据 url 的不同返回不同的页面实现的。
传统开发方式url改变后，立刻发生请求响应整个页面，有可能资源过多，传统开发会让页面出现白屏

（2）什么时候使用前端路由？

在SPA单页面应用Single Page Application，大部分页面结构不变，只改变部分内容的使用
锚点值改变后，不会立刻发送请求，而是在某个合适的时机，发起ajax请求页面局部渲染

（3）前端路由有什么优点和缺点？

优点：用户体验好，不需要每次都从服务器全部获取，快速展现给用户

缺点：单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置

前端路由一共有两种实现方式，一种是通过 hash 的方式，一种是通过使用 pushState 的方式。

History API

- history.pushState()

history.pushState(stateObject, title, URL)
stateObject
  自定义对象用来保存页面信息，在触发浏览器导航事件时会将之前保存的信息传入window.onpopstate回调函数
title
  可忽略，主流浏览器会忽略这个参数
URL
  新的浏览器地址栏URL，遵循跨域原则

- history.replaceState()

window.onpopstate()
```

[《什么是“前端路由”》](https://segmentfault.com/q/1010000005336260) [《浅谈前端路由》](https://github.com/kaola-fed/blog/issues/137)[《前端路由是什么东西？》](https://www.zhihu.com/question/53064386)

### 87. 如何测试前端代码么？ 知道 BDD, TDD, Unit Test 么？ 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)？

### 88. 检测浏览器版本版本有哪些方式？

```javascript
检测浏览器版本一共有两种方式：

一种是检测 window.navigator.userAgent 的值，但这种方式很不可靠，因为 userAgent 可以被改写，
并且早期的浏览器如 ie，会通过伪装自己的 userAgent 的值为 Mozilla 来躲过服务器的检测。

第二种方式是功能检测，根据每个浏览器独有的特性来进行判断，如 ie 下独有的 ActiveXObject。
IE11 中的 ActiveXObject 也从 DOM 中隐身了，意味着不能再用它来作为检测特性的手段。

// 插件检测，IE10 及更低版本无效
let hasPlugin = function (name) {
    name = name.toLowerCase();
    for (let plugin of window.navigator.plugins) {
        if (plugin.name.toLowerCase().indexOf(name) > -1) {
            return true;
        }
    }
    return false;
}
// 检测 Flash
alert(hasPlugin("Flash"));
// 检测 QuickTime
alert(hasPlugin("QuickTime"));

// 在旧版本 IE 中检测插件
function hasIEPlugin(name) {
    try {
        new ActiveXObject(name);
        return true;
    } catch (ex) {
        return false;
    }
}
// 检测 Flash
alert(hasIEPlugin("ShockwaveFlash.ShockwaveFlash"));
// 检测 QuickTime
alert(hasIEPlugin("QuickTime.QuickTime"));

在这个例子中，hasIEPlugin()函数接收一个 DOM 标识符参数。为检测插件，这个函数会使用传
入的标识符创建一个新 ActiveXObject 实例。相应代码封装在一个 try/catch 语句中，因此如果创
建的插件不存在则会抛出错误。如果创建成功则返回 true，如果失败则在 catch 块中返回 false。
上面的例子还演示了如何检测 Flash 和 QuickTime 插件。

因为检测插件涉及两种方式，所以一般要针对特定插件写一个函数，而不是使用通常的检测函数。

// 在所有浏览器中检测 Flash
function hasFlash() {
    var result = hasPlugin("Flash");
    if (!result) {
        result = hasIEPlugin("ShockwaveFlash.ShockwaveFlash");
    }
    return result;
}
// 在所有浏览器中检测 QuickTime
function hasQuickTime() {
    var result = hasPlugin("QuickTime");
    if (!result) {
        result = hasIEPlugin("QuickTime.QuickTime");
    }
    return result;
}
// 检测 Flash
alert(hasFlash());
// 检测 QuickTime
alert(hasQuickTime());
```

[《JavaScript 判断浏览器类型》](https://www.jianshu.com/p/d99f4ca385ac)
《红宝书》12.3 navigator 对象

### 89. 什么是 Polyfill ？

```javascript
单 词“polyfill”是由 Remy Sharp 发 明 的 一 个 新 术 语（https://remysharp.com/2010/10/08/
what-is-a-polyfill），用于表示根据新特性的定义，创建一段与之行为等价但能够在旧的
JavaScript 环境中运行的代码。

比如说 querySelectorAll 是很多现代浏览器都支持的原生 Web API，但是有些古老的浏览器并不支持，
那么假设有人写了一段代码来实现这个功能使这些浏览器也支持了这个功能，那么这就可以成为一个 Polyfill。

一个 shim 是一个库，有自己的 API，而不是单纯实现原生不支持的 API。
```

《你不知道是 JS 下》 2.8.1 polyfilling

### 90. 使用 JS 实现获取文件扩展名？

```javascript
方案一：正则表达式
function getFileExtension1(filename) {
    return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;
}
方案二：使用String的split方法
function getFileExtension2(filename) {
    return filename.split('.').pop();
}
上述两种方案无法覆盖一些极端情况，下面这个更健壮

方案三：使用String的slice，lastIndexOf方法
function getFileExtension3(filename) {
    return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
}

console.log(getFileExtension3(''));                            // ''
console.log(getFileExtension3('filename'));                    // ''
console.log(getFileExtension3('filename.txt'));                // 'txt'
console.log(getFileExtension3('.hiddenfile'));                 // ''
console.log(getFileExtension3('filename.with.many.dots.ext')); // 'ext'

String.lastIndexOf返回指定值的最后出现位置(本例里是：.)。如果返回-1，表示没找到该指定值

当参数是filename，.hiddenfile时，lastIndexOf的返回值分别是-1和0。
然后无符号移位操作符将-2转成了4294967294、-1转成了4294967295，这个小技巧保证了极端状况下取值也不会异常

然后String.prototype.slice就以上面的计算结果作为起始下标从原始字符串中提取出了正确的文件扩展名。
如果上一步骤计算出的起始下标大于原始字符串长度，则返回''
```

### 91. 介绍一下 js 的节流与防抖？

> 防抖函数原理：把触发非常频繁的事件合并成一次去执行 在指定时间内只执行一次回调函数，如果在指定的时间内又触发了该事件，则回调函数的执行时间会基于此刻重新开始计算
> 防抖动和节流本质是不一样的。防抖动是将多次执行变为最后一次执行，节流是将多次执行变成每隔一段时间执行

eg. 像百度搜索，就应该用防抖，当我连续不断输入时，不会发送请求；当我一段时间内不输入了，才会发送一次请求；如果小于这段时间继续输入的话，时间会重新计算，也不会发送请求。
适用场景：

文本输入的验证，连续输入文字后发送 AJAX 请求进行验证，验证一次就好
按钮提交场景：防止多次提交按钮，只执行最后提交的一次
服务端验证场景：表单验证需要服务端配合，只执行一段连续的输入事件的最后一次，还有搜索联想词功能类似

节流函数原理:指频繁触发事件时，只会在指定的时间段内执行事件回调，即触发事件间隔大于等于指定的时间才会执行回调函数。总结起来就是：事件，按照一段时间的间隔来进行触发。
像 dom 的拖拽，如果用消抖的话，就会出现卡顿的感觉，因为只在停止的时候执行了一次，这个时候就应该用节流，在一定时间内多次执行，会流畅很多

手写简版

时间戳方式：
使用时间戳的节流函数会在第一次触发事件时立即执行，以后每过 wait 秒之后才执行一次，并且最后一次触发事件不会被执行

定时器方式：
使用定时器的节流函数在第一次触发时不会执行，而是在 delay 秒之后才执行，当最后一次停止触发后，还会再执行一次函数

[《轻松理解 JS 函数节流和函数防抖》](https://juejin.im/post/5a35ed25f265da431d3cc1b1) [《JavaScript 事件节流和事件防抖》](https://juejin.im/post/5aa60b0e518825556b6c6d1a) [《JS 的防抖与节流》](https://juejin.im/entry/5b1d2d54f265da6e2545bfa4)

### 92. Object.is() 与原来的比较操作符 “===”、“==” 的区别？ ==和===之间的区别？

> 使用双等号进行相等判断时，如果两边的类型不一致，则会进行强制类型转化后再进行比较。

使用三等号进行相等判断时，如果两边的类型不一致时，不会做强制类型准换，直接返回 false。

ECMAScript 6 规范新增了 Object.is()，这个方法与===很像，但同时也考虑到了上述边界情形。这个方法必须接收两个参数。增加了对 0、-0、+0 相等/不等判定， NaN 相等判定。

要检查超过两个值，递归地利用相等性传递即可

```
function recursivelyCheckEqual(x, ...rest) {
return Object.is(x, rest[0]) &&
(rest.length < 2 || recursivelyCheckEqual(...rest));
}
```

```jsx
function is(x, y) {
  if (x === y) {
    //运行到1/x === 1/y的时候x和y都为0，但是1/+0 = +Infinity， 1/-0 = -Infinity, 是不一样的
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    //NaN===NaN是false,这是不对的，我们在这里做一个拦截，x !== x，那么一定是 NaN, y 同理
    //两个都是NaN的时候返回true
    return x !== x && y !== y;
  }
```

《JavaScript 高级程序设计第四版》8.1.5 对象标识及相等判定
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1666887064170-53c84296-2141-4af9-ae95-b899f518f3bd.png#averageHue=%233b3c30&clientId=uf41a44d9-f5a9-4&from=paste&height=235&id=ue33a7cea&name=image.png&originHeight=353&originWidth=933&originalType=binary&ratio=1&rotation=0&showTitle=false&size=291648&status=done&style=none&taskId=ue0a26866-fc92-444a-abbd-f354e465376&title=&width=622)

### 93. escape,encodeURI,encodeURIComponent 有什么区别？

```javascript
encodeURI 是对整个 URI 进行转义，将 URI 中的非法字符转换为合法字符，
所以对于一些在 URI 中有特殊意义的字符不会进行转义。

encodeURIComponent 是对 URI 的组成部分进行转义，所以一些特殊字符也会得到转义。

escape 和 encodeURI 的作用相同，不过它们对于 unicode 编码为 0xff 之外字符的时候会有区别，
escape 是直接在字符的 unicode 编码前加上 %u，而 encodeURI 首先会将字符转换为 UTF-8 的格式，再在每个字节前加上 %。
```

《JavaScript 高级程序设计第四版》 5.4.1 Global 1. URL 编码方法

```javascript
encodeURI()和 encodeURIComponent()方法用于编码统一资源标识符（URI），以便传给浏览器。
有效的 URI 不能包含某些字符，比如空格。使用 URI 编码方法来编码 URI 可以让浏览器能够理解它们，
同时又以特殊的 UTF-8 编码替换掉所有无效字符。

ecnodeURI()方法用于对整个 URI 进行编码，比如"www.wrox.com/illegal value.js"。而
encodeURIComponent()方法用于编码 URI 中单独的组件，比如前面 URL 中的"illegal value.js"。

这两个方法的主要区别是，encodeURI()不会编码属于 URL 组件的特殊字符，比如冒号、斜杠、问号、
井号，而 encodeURIComponent()会编码它发现的所有非标准字符。

这就是使用 encodeURI()编码整个URI，
但只使用 encodeURIComponent()编码那些会追加到已有 URI 后面的字符串的原因。

注意 一般来说，使用 encodeURIComponent()应该比使用 encodeURI()的频率更高，
这是因为编码查询字符串参数比编码基准 URI 的次数更多。

decodeURI()和 decodeURIComponent()。

decodeURI()只对使用 encodeURI()编码过的字符解码。

decodeURIComponent()解码所有被 encodeURIComponent()编码的字符，基本上就是解码所有特殊值

注意 URI方法 encodeURI()、encodeURIComponent()、decodeURI()和 decodeURI-Component()
取代了 escape()和 unescape()方法，后者在 ECMA-262 第 3 版中就已经废弃了。
URI 方法始终是首选方法，因为它们对所有 Unicode 字符进行编码，而原来的方
法只能正确编码 ASCII 字符。不要在生产环境中使用 escape()和 unescape()。
```

### 94. Unicode 和 UTF-8 之间的关系？

```javascript
Unicode 是一种字符集合，现在可容纳 100 多万个字符。
每个字符对应一个不同的 Unicode 编码，它只规定了符号的二进制代码，却没有规定这个二进制代码在计算机中如何编码传输。

UTF-8 是一种对 Unicode 的编码方式，它是一种变长的编码方式，可以用 1~4 个字节来表示一个字符。

“UTF-8”和“Unicode”之间的关系是包含关系，因为“UTF-8”是“Unicode”的实现方式之一，它规定了字符如何在计算机中存储、传输等，
而其他实现方式还包括“UTF-16”和“UTF-32”。

00-7F:0XXXxXXX
80-7FF:110xxxxx 10xxxxxx
800-FFFF:1110xxxx 10xxxxxx 10xxxxxx
10000-1OFFFF:11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
```

[《字符编码详解》](https://blog.51cto.com/polaris/377468) [《字符编码笔记：ASCII，Unicode 和 UTF-8》](http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)

### js 的事件循环是什么？为什么要有事件循环？

```javascript
因为 js 是单线程运行的，在代码执行的时候，通过将不同函数的执行上下文压入执行栈中来保证代码的有序执行。
在执行同步代码的时候，如果遇到了异步事件，js 引擎并不会一直等待其返回结果，而是会将这个事件挂起，继续执行执行栈中的其他任务。
当同步事件执行完毕后，再将异步事件对应的回调加入到与当前执行栈中不同的另一个任务队列中等待执行。

任务队列可以分为宏任务对列和微任务对列，当当前执行栈中的事件执行完毕后，
js 引擎首先会判断微任务对列中是否有任务可以执行，如果有就将微任务队首的事件压入栈中执行。
当微任务对列中的任务都执行完成后再去判断宏任务对列中的任务。

微任务包括了 promise 的回调、node 中的 process.nextTick 、对 Dom 变化监听的 MutationObserver。

宏任务包括了 script 脚本的执行、setTimeout ，setInterval ，setImmediate 一类的定时事件，还有如 I/O 操作、UI 渲染等。
```

```javascript


知识点

事件队列是一个存储着待执行任务的队列，其中的任务严格按照时间先后顺序执行，排在队头的任务将会率先执行，而排在队尾的任务会最后执行。
事件队列每次仅执行一个任务，在该任务执行完毕之后，再执行下一个任务。
执行栈则是一个类似于函数调用栈的运行容器，当执行栈为空时，JS 引擎便检查事件队列，如果不为空的话，事件队列便将第一个任务压入执行栈中运行。

一、为什么JavaScript是单线程?

JavaScript语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。那么，为什么JavaScript不能有多个线程呢﹖这样能提高效率啊,
JavaScript的单线程，与它的用途有关。作为浏览器脚本语言,JavaScript的主要用途是与用户互动，以及操作DOM。
这决定了它只能是单线程，否则会带来很复杂的同步问题。
比如，假定JavaScript同时有两个线程,一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准?
所以，为了避免复杂性，从一诞生,JavaScript就是单线程，这已经成了这门语言的核心特征，将来也不会改变。

二、JavaScript是单线程，怎样执行异步的代码?

单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。

消息队列:消息队列是一个先进先出的队列，它里面存放着各种消息。
事件循环:事件循环是指主线程重复从消息队列中取消息、执行的过程。

实际上，主线程只会做一件事情，就是从消息队列里面取消息、执行消息，再取消息、再执行。当消息队列为空时，就会等待直到消息队列变成非空。
而且主线程只有在将当前的消息执行完成后，才会去取下一个消息。这种机制就叫做事件循环机制，取一个消息并执行

为什么要有事件循环机制？

JavaScript 是一种单线程执行的编程语言，也就是说，在同一个时间内只能执行一个任务，如果任务太耗时会阻塞后续代码的执行，导致页面卡死，用户体验很差。为了解决这个问题，JavaScript 引入了事件循环机制（Event Loop）。

事件循环机制是 JavaScript 实现异步编程的核心。它采用了事件触发和回调函数的方式实现异步操作。当一个操作是异步的时候，JS 将其放入消息队列中，等待执行。

事件循环会不断地从消息队列中取出任务并执行，每次执行一个任务，成为一次 tick，每一轮 tick 称为一个 tick 阶段。在每个 tick 阶段中，都会执行一些指定的任务，包括：

1. 执行微任务队列中的所有任务。微任务包括 Promise 回调函数、MutationObserver 回调函数等。

2. 执行宏任务队列中的第一个任务，并将该任务从队列中删除。宏任务包括 script 脚本、setTimeout、setInterval、setImmediate、I/O 操作等。

在每个 tick 阶段中，先执行微任务队列中的任务，然后执行宏任务队列中的任务。在一个 tick 阶段中，当前正在执行的任务的代码执行完毕之前，所有的 I/O 事件和定时器都会被暂停执行，等待当前任务执行完成。

通过事件循环机制，JavaScript 可以实现异步编程，提高应用的性能和用户体验，同时避免了阻塞浏览器。
```

### js 中的深浅拷贝实现？

```javascript
浅拷贝指的是将一个对象的属性值复制到另一个对象，如果有的属性的值为引用类型的话，那么会将这个引用的地址复制给对象，因此两个对象会有同一个引用类型的引用。

什么是浅拷贝？

let arr = [1, 2, 3];
let newArr = arr;
newArr[0] = 100;

console.log(arr);//[100, 2, 3]
这是直接赋值的情况，不涉及任何拷贝。当改变newArr的时候，由于是同一个引用，arr指向的值也跟着改变。

现在进行浅拷贝:

let arr = [1, 2, 3];
let newArr = arr.slice();
newArr[0] = 100;

console.log(arr);//[1, 2, 3]

当修改newArr的时候，arr的值并不改变。什么原因?因为这里newArr是arr浅拷贝后的结果，newArr和arr现在引用的已经不是同一块空间啦！

这就是浅拷贝！

但是这又会带来一个潜在的问题:
let arr = [1, 2, {val: 4}];
let newArr = arr.slice();
newArr[2].val = 1000;

console.log(arr);//[ 1, 2, { val: 1000 } ]
咦!不是已经不是同一块空间的引用了吗？为什么改变了newArr改变了第二个元素的val值，arr也跟着变了。

这就是浅拷贝的限制所在了。它只能拷贝一层对象。如果有对象的嵌套，那么浅拷贝将无能为力。但幸运的是，深拷贝就是为了解决这个问题而生的，它能解决无限极的对象嵌套问题，实现彻底的拷贝。

接下来，我们来研究一下JS中实现浅拷贝到底有多少种方式？

1. 手动实现
const shallowClone = (target) => {
  if (typeof target === 'object' && target !== null) {
    const cloneTarget = Array.isArray(target) ? []: {};
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
          cloneTarget[prop] = target[prop];
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
}

2. Object.assign
但是需要注意的是，Object.assgin() 拷贝的是对象的属性的引用，而不是对象本身。

let obj = { name: 'sy', age: 18 };
const obj2 = Object.assign({}, obj, {name: 'sss'});
console.log(obj2);//{ name: 'sss', age: 18 }

3. concat浅拷贝数组

let arr = [1, 2, 3];
let newArr = arr.concat();
newArr[1] = 100;
console.log(arr);//[ 1, 2, 3 ]

4.slice 浅拷贝
  开头的例子不就说的这个嘛！

5....展开运算符
  let arr = [1, 2, 3];
  let newArr = [...arr];//跟 arr.slice()是一样的效果
```

深拷贝相对浅拷贝而言，如果遇到属性值为引用类型的时候，它新建一个引用类型并将对应的值复制给它，因此对象获得的一个新的引用类型而不是一个原有类型的引用。
深拷贝对于一些对象可以使用 JSON 的两个函数来实现，但是由于 JSON 的对象格式比 js 的对象格式更加严格，所以如果属性值里边出现函数或者 Symbol 类型的值时，会转换失败。

### 对于[,]，最快的深拷贝的方法是什么 ？

对于 `[{'a':1},{'b':2}]` 数组中含有的对象，最快的深拷贝方法是使用 `JSON.parse(JSON.stringify(obj))`，这种方法可以将一个对象或者数组深拷贝成一个新的对象或者数组。示例如下：

```
const arr1 = [{'a':1},{'b':2}];
const arr2 = JSON.parse(JSON.stringify(arr1));

console.log(arr1 === arr2); // false
console.log(arr1[0] === arr2[0]); // false
console.log(arr1[1] === arr2[1]); // false
```

`JSON.parse(JSON.stringify(obj))` 这种方法可以快速的进行深拷贝，但是需要注意的是该方法有一些限制，例如无法拷贝函数，正则表达式等类型的数据。此外，对于大规模、复杂的数据结构，在内存和性能方面也可能存在问题。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1666887687890-0d151daf-a9a8-46af-ae76-a6e31b3425ee.png#averageHue=%233a3c2f&clientId=ub7bd0e10-87d8-4&from=paste&height=236&id=u9585d14d&name=image.png&originHeight=354&originWidth=625&originalType=binary&ratio=1&rotation=0&showTitle=false&size=193381&status=done&style=none&taskId=u6011287d-9a8b-478d-98fb-93a370c46fd&title=&width=416.6666666666667)

### 为什么 0.1 + 0.2 != 0.3？如何解决这个问题？

当计算机计算 0.1+0.2 的时候，实际上计算的是这两个数字在计算机里所存储的二进制，0.1 和 0.2 在转换为二进制表示的时候会出现位数无限循环的情况。
js 中是以 64 位双精度格式来存储数字的，只有 53 位的有效数字，超过这个长度的位数会被截取掉这样就造成了精度丢失的问题。
这是第一个会造成精度丢失的地方。

在对两个以 64 位双精度格式的数据进行计算的时候，首先会进行对阶的处理，对阶指的是将阶码对齐，
也就是将小数点的位置对齐后，再进行计算，一般是小阶向大阶对齐，因此小阶的数在对齐的过程中，有效数字会向右移动，
移动后超过有效位数的位会被截取掉，这是第二个可能会出现精度丢失的地方。

当两个数据阶码对齐后，进行相加运算后，得到的结果可能会超过 53 位有效数字，
因此超过的位数也会被截取掉，这是可能发生精度丢失的第三个地方。

对于这样的情况，我们可以将其转换为整数后再进行运算，运算后再转换为对应的小数，以这种方式来解决这个问题。

我们还可以将两个数相加的结果和右边相减，如果相减的结果小于一个极小数，那么我们就可以认定结果是相等的，这个极小数可以
使用 es6 的 Number.EPSILON

拓展

若你回答出来，面试官还可能继续问你：“ 0.1+0.2 不等于 0.3 会引起那些 BUG？”

可以这样回答：“ 会引起统计页面展示错乱的 BUG，还有 300.01 优惠 300 元后，支付金额不足 0.01 元等类似的 BUG。”

解决方式
“怎么解决 0.1+0.2 不等于 0.3 这个问题”。
可以这样回答：
可以用 Math.js 数学计算库来解决，或者用 toFixed()给计算结果四舍五入，但是 toFixed()在 chrome 或者火狐浏览器下四舍五入也有精度误差。
可以用 Math.round 来解决精度误差，四舍五入。
可以用 Math.pow 来做个简单的封装 Math.round(Math.pow(10, m) \* number) / Math.pow(10, m)，
其中 number 是要四舍五入的数，m 是保留几位小数。

[《十进制的 0.1 为什么不能用二进制很好的表示？》](https://blog.csdn.net/Lixuanshengchao/article/details/82049191) [《十进制浮点数转成二进制》](https://blog.csdn.net/zhengyanan815/article/details/78550073) [《浮点数的二进制表示》](http://www.ruanyifeng.com/blog/2010/06/ieee_floating-point_representation.html) [《js 浮点数存储精度丢失原理》](https://juejin.im/post/5b372f106fb9a00e6714aa21) [《浮点数精度之谜》](https://juejin.im/post/594a31d0a0bb9f006b0b2624) [《JavaScript 浮点数陷阱及解法》](https://github.com/camsong/blog/issues/9) [《0.1+0.2 !== 0.3？》](https://juejin.im/post/5bd2f10a51882555e072d0c4) [《JavaScript 中奇特的~运算符》](https://juejin.im/entry/59cdd7fb6fb9a00a600f8eef)

### 100. 原码、反码和补码的介绍

原码是计算机中对数字的二进制的定点表示方法，最高位表示符号位，其余位表示数值位。优点是易于分辨，缺点是不能够直接参与运算。

正数的反码和其原码一样；负数的反码，符号位为 1，数值部分按原码取反。
如 [+7]原 = 00000111，[+7]反 = 00000111； [-7]原 = 10000111，[-7]反 = 11111000。

正数的补码和其原码一样；负数的补码为其反码加 1。

例如 [+7]原 = 00000111，[+7]反 = 00000111，[+7]补 = 00000111；
[-7]原 = 10000111，[-7]反 = 11111000，[-7]补 = 11111001

在计算机中,对于有符号数都是以补码的形式存储的
之所以在计算机中使用补码来表示负数的原因是，这样可以将加法运算扩展到所有的数值计算上，
因此在数字电路中我们只需要考虑加法器的设计就行了，而不用再为减法设置新的数字电路。

### 101. toPrecision 和 toFixed 和 Math.round 的区别？

> toPrecision 用于处理精度，精度是从左至右第一个不为 0 的数开始数起。
> toFixed 是对小数点后指定位数取整，从小数点开始数起。
> Math.round 是将一个数字四舍五入到一个整数。

### 106. 什么是点击劫持？如何防范点击劫持？

### 什么是 MVVM？比之 MVC 有什么区别？什么又是 MVP ？

MVC、MVP 和 MVVM 是三种常见的软件架构设计模式，主要通过分离关注点的方式来组织代码结构，优化我们的开发效率。

比如说我们实验室在以前项目开发的时候，使用单页应用时，往往一个路由页面对应了一个脚本文件，所有的页面逻辑都在一个脚本文件里。
页面的渲染、数据的获取，对用户事件的响应所有的应用逻辑都混合在一起，这样在开发简单项目时，
可能看不出什么问题，当时一旦项目变得复杂，那么整个文件就会变得冗长，混乱，这样对我们的项目开发和后期的项目维护是非常不利的。

MVC 通过分离 Model、View 和 Controller 的方式来组织代码结构。其中 View 负责页面的显示逻辑，Model 负责存储页面的业务数据，以及对相应数据的操作。
并且 View 和 Model 应用了观察者模式，当 Model 层发生改变的时候它会通知有关 View 层更新页面。
Controller 层是 View 层和 Model 层的纽带，它主要负责用户与应用的响应操作，当用户与页面产生交互的时候，Controller 中的事件触发器就开始工作了，通过调用 Model 层，来完成对 Model 的修改，然后 Model 层再去通知 View 层更新。

MVP 模式与 MVC 唯一不同的在于 Presenter 和 Controller。在 MVC 模式中我们使用观察者模式，来实现当 Model 层数据发生变化的时候，通知 View 层的更新。
这样 View 层和 Model 层耦合在一起，当项目逻辑变得复杂的时候，可能会造成代码的混乱，并且可能会对代码的复用性造成一些问题。
MVP 的模式通过使用 Presenter 来实现对 View 层和 Model 层的解耦。MVC 中的
Controller 只知道 Model 的接口，因此它没有办法控制 View 层的更新，MVP 模式中，
View 层的接口暴露给了 Presenter 因此我们可以在 Presenter 中将 Model 的变化和 View 的变化绑定在一起，以此来实现 View 和 Model 的同步更新。
这样就实现了对 View 和 Model 的解耦，Presenter 还包含了其他的响应逻辑。

MVVM 模式中的 VM，指的是 ViewModel，它和 MVP 的思想其实是相同的，不过它通过双向的数据绑定，将 View 和 Model 的同步更新给自动化了。
当 Model 发生变化的时候，ViewModel 就会自动更新；ViewModel 变化了，View 也会更新。这样就将 Presenter 中的工作给自动化了。
我了解过一点双向数据绑定的原理，比如 vue 是通过使用数据劫持和发布订阅者模式来实现的这一功能。

[《浅析前端开发中的 MVC/MVP/MVVM 模式》](https://juejin.im/post/593021272f301e0058273468) [《MVC，MVP 和 MVVM 的图示》](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html) [《MVVM》](https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdc72e6e51d45054f664dbf) [《一篇文章了解架构模式：MVC/MVP/MVVM》](https://segmentfault.com/a/1190000015310674)

### 110. Object.defineProperty 介绍？

```javascript
这个方法接收 3 个参数：
要给其添加属性的对象、属性的名称和一个描述符对象。最后一个参数，即描述符对象上的属性可以包
含：configurable、enumerable、writable 和 value，跟相关特性的名称一一对应。根据要修改
的特性，可以设置其中一个或多个值。

一个属性的描述符有四个属性，分别是 value 属性的值，writable 属性是否可写，enumerable 属性是否可枚举，configurable 属性是否可配置修改。
```

《JavaScript 高级程序设计第四版》 8.1.1 属性的类型

### 111. 使用 Object.defineProperty() 来进行数据劫持有什么缺点？

> 有一些对属性的操作，使用这种方法无法拦截，比如说通过下标方式修改数组数据或者给对象新增属性，vue 内部通过重写函数解决了这个问题。
> 在 Vue3.0 中已经不使用这种方式了，而是通过使用 Proxy 对对象进行代理，从而实现数据劫持。
> 使用 Proxy 的好处是它可以完美的监听到任何方式的数据改变，唯一的缺点是兼容性的问题，因为这是 ES6 的语法。

### 114. 什么是 requestAnimationFrame ？

[《你需要知道的 requestAnimationFrame》](https://juejin.im/post/5a82f0626fb9a06358657c9c) [《CSS3 动画那么强，requestAnimationFrame 还有毛线用？》](https://www.zhangxinxu.com/wordpress/2013/09/css3-animation-requestanimationframe-tween-%E5%8A%A8%E7%94%BB%E7%AE%97%E6%B3%95/)

### 116. offsetWidth/offsetHeight,clientWidth/clientHeight 与 scrollWidth/scrollHeight 的区别？

offsetWidth/offsetHeight 返回的是元素的布局宽度，它的值包含 content + padding + border 包含了滚动条。
offsetTop 返回的是当前元素相对于其 offsetParent 元素的顶部的距离。
offsetLeft 返回的是当前元素相对于其 offsetParent 元素的左部的距离。

scrollWidth/scrollHeight 返回值包含 content + padding + 溢出内容的尺寸。
scrollTop 属性返回的是一个元素的内容垂直滚动的像素数。
scrollLeft 属性返回的是元素滚动条到元素左边的距离。

 scrollHeight，没有滚动条出现时，元素内容的总高度。
 scrollLeft，内容区左侧隐藏的像素数，设置这个属性可以改变元素的滚动位置。
 scrollTop，内容区顶部隐藏的像素数，设置这个属性可以改变元素的滚动位置。
 scrollWidth，没有滚动条出现时，元素内容的总宽度

clientHeight：表示可视区域的高度，不包含 border 和滚动条
offsetHeight：表示可视区域的高度，包含了 border 和滚动条
scrollHeight：表示了所有区域的高度，包含了因为滚动被隐藏的部分
clientTop：表示边框 border 的厚度，在未指定的情况下一般为 0
scrollTop：滚动后被隐藏的高度，获取对象相对于由 offsetParent 属性指定的父坐标（CSS 定位的元素或 body 元素）距离顶端的高度。

《JavaScript 高级程序设计第四版》16.2.3 元素尺寸

### 117. 谈一谈你理解的函数式编程？

简单说，"函数式编程"是一种"编程范式"（programming paradigm），也就是如何编写程序的方法论。

它具有以下特性：闭包和高阶函数、惰性计算、递归、函数是"第一等公民"、只用"表达式"。

[《函数式编程初探》](http://www.ruanyifeng.com/blog/2012/04/functional_programming.html)

### 118. 异步编程的实现方式？

js 中的异步机制可以分为以下几种：

第一种最常见的是使用回调函数的方式，使用回调函数的方式有一个缺点是，多个回调函数嵌套的时候会造成回调函数地狱，
上下两层的回调函数间的代码耦合度太高，不利于代码的可维护。

第二种是 Promise 的方式，使用 Promise 的方式可以将嵌套的回调函数作为链式调用。但是使用这种方法，
有时会造成多个 then 的链式调用，可能会造成代码的语义不够明确。

第三种是使用 generator 的方式，它可以在函数的执行过程中，将函数的执行权转移出去，在函数外部我们还可以将执行权转移回来。
当我们遇到异步函数执行的时候，将函数执行权转移出去，当异步函数执行完毕的时候我们再将执行权给转移回来。
因此我们在 generator 内部对于异步操作的方式，可以以同步的顺序来书写。使用这种方式我们需要考虑的问题是何时将函数的控制权转移回来，
因此我们需要有一个自动执行 generator 的机制，比如说 co 模块等方式来实现 generator 的自动执行。

第四种是使用 async 函数的形式，async 函数是 generator 和 promise 实现的一个自动执行的语法糖，
它内部自带执行器，当函数内部执行到一个 await 语句的时候，如果语句返回一个 promise 对象，
那么函数将会等待 promise 对象的状态变为 resolve 后再继续向下执行。因此我们可以将异步逻辑，转化为同步的顺序来书写，并且这个函数可以自动执行。

### 119. Js 动画与 CSS 动画区别及相应实现

```javascript
CSS3 的动画

优点

在性能上会稍微好一些，浏览器会对 CSS3 的动画做一些优化
代码相对简单

缺点

在动画控制上不够灵活
兼容性不好

JavaScript 的动画正好弥补了这两个缺点，控制能力很强，可以单帧的控制、变换，同时写得好完全可以兼容 IE6，并且功能强大。
对于一些复杂控制的动画，使用 javascript 会比较靠谱。
而在实现一些小的交互动效的时候，就多考虑考虑 CSS 吧

js 实现的是帧动画
css实现的是补间动画
帧动画:使用定时器，每隔一段时间，更改当前的元素
补间动画:过渡（加过渡只要状态发生改变产生动画）动画(多个节点来控制动画)性能会更好
在支持css3的浏览器尽可能的使用css3动画(适用于移动端开发)

Js动画
缺点:(1)JavaScript在浏览器的主线程中运行，而主线程中还有其它需要运行的JavaScript脚本、样式计算、布局、绘制任务等,对其干扰导致线程可能出现阻塞，
从而造成丢帧的情况。
(2)代码的复杂度高于css动画
优点:(1)JavaScript动画控制能力很强,可以在动画播放过程中对动画进行控制:开始、暂停、回放、终止、取消都是可以做到的。
(2动画效果比 css3动画丰富,有些动画效果，比如曲线运动,冲击闪烁,视差滚动效果，只有JavaScript动画才能完成
(3)CSS3有兼容性问题，而JS大多时候没有兼容性问题

cSS3动画缺点:
1)运行过程控制较弱,无法附加事件绑定回调函数。cSS动画只能暂停,不能在动画中寻找一个特定的时间点，不能在半路反转动画，
不能变换时间尺度，不能在特定的位置添加回调函数或是绑定回放事件,无进度报告
(2代码冗长。想用csS 实现稍微复杂一点动画,最后CSS代码都会变得非常笨重。

优点:(1浏览器可以对动画进行优化。
浏览器使用与requestAnimationFrame类似的机制, requestAnimationFrame
比起setTimeout,setInterval设置动画的优势主要是:1)requestAnimationFrame会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成,并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率,一般来说,这个频率为每秒60帧。2)在隐藏或不可见的元素中requestAnimationFrame不会进行重绘或回流，这当然就意味着更少的的cpu，gpu和内存使用量。
强制使用硬件加速(通过GPU来提高动画性能)
```

### 120. get 请求传参长度的误区

### 121. URL 和 URI 的区别？

```javascript
URI: Uniform Resource Identifier      指的是统一资源标识符
URL: Uniform Resource Location        指的是统一资源定位符
URN: Universal Resource Name          指的是统一资源名称

URI 指的是统一资源标识符，用唯一的标识来确定一个资源，它是一种抽象的定义，也就是说，不管使用什么方法来定义，只要能唯一的标识一个资源，就可以称为 URI。

URL 指的是统一资源定位符，URN 指的是统一资源名称。URL 和 URN 是 URI 的子集，URL 可以理解为使用地址来标识资源，URN 可以理解为使用名称来标识资源。
```

[《HTTP 协议中 URI 和 URL 有什么区别？》](https://www.zhihu.com/question/21950864) [《你知道 URL、URI 和 URN 三者之间的区别吗？》](http://web.jobbole.com/83452/) [《URI、URL 和 URN 的区别》](https://segmentfault.com/a/1190000006081973)

### 122. get 和 post 请求在缓存方面的区别

```javascript
缓存一般只适用于那些不会更新服务端数据的请求。一般 get 请求都是查找请求，不会对服务器资源数据造成修改，
而 post 请求一般都会对服务器数据造成修改，
所以，一般会对 get 请求进行缓存，很少会对 post 请求进行缓存。

get 请求类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以使用缓存。

post 不同，post 做的一般是修改和删除的工作，所以必须与数据库交互，所以不能使用缓存。因此 get 请求适合于请求缓存。
```

[《HTML 关于 post 和 get 的区别以及缓存问题的理解》](https://blog.csdn.net/qq_27093465/article/details/50479289)

### 124. mouseover 和 mouseenter 的区别？

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1667642982214-99b16adb-d5bc-479a-999a-9c5dabda8a03.png#clientId=uf034011b-2209-4&from=paste&height=468&id=jlCPS&name=image.png&originHeight=702&originWidth=1050&originalType=binary&ratio=1&rotation=0&showTitle=false&size=144772&status=done&style=none&taskId=u6536efc2-ddfa-451c-ba0c-91ccf0d2545&title=&width=700)
这两者都是移入的时候触发，但是 onmouseover 会触发多次，而 onmouseenter 只在进去的时候才触发。

```javascript
当鼠标移动到元素上时就会触发 mouseenter 事件，类似 mouseover，它们两者之间的差别是 mouseenter 不会冒泡。

由于 mouseenter 不支持事件冒泡，导致在一个元素的子元素上进入或离开的时候会触发其 mouseover 和 mouseout 事件，
但是却不会触发 mouseenter 和 mouseleave 事件。
```

### 125. js 拖拽功能的实现

```javascript
一个元素的拖拽过程，我们可以分为三个步骤，第一步是鼠标按下目标元素，第二步是鼠标保持按下的状态移动鼠标，第三步是鼠
标抬起，拖拽过程结束。

这三步分别对应了三个事件，mousedown 事件，mousemove 事件和 mouseup 事件。只有在鼠标按下的状态移动鼠标我们才会
执行拖拽事件，因此我们需要在 mousedown 事件中设置一个状态来标识鼠标已经按下，然后在 mouseup 事件中再取消这个状
态。在 mousedown 事件中我们首先应该判断，目标元素是否为拖拽元素，如果是拖拽元素，我们就设置状态并且保存这个时候鼠
标的位置。然后在 mousemove 事件中，我们通过判断鼠标现在的位置和以前位置的相对移动，来确定拖拽元素在移动中的坐标。
最后 mouseup 事件触发后，清除状态，结束拖拽事件。

首先是三个事件，分别是 mousedown，mousemove，mouseup
当鼠标点击按下的时候，需要一个 tag 标识此时已经按下，可以执行 mousemove 里面的具体方法。
clientX，clientY 标识的是鼠标的坐标，分别标识横坐标和纵坐标，并且我们用 offsetX 和 offsetY 来表示
元素的元素的初始坐标，移动的举例应该是：
鼠标移动时候的坐标-鼠标按下去时候的坐标。
也就是说定位信息为：
鼠标移动时候的坐标-鼠标按下去时候的坐标+元素初始情况下的 offetLeft.
```

[《原生 js 实现拖拽功能基本思路》](https://blog.csdn.net/LZGS_4/article/details/43523465)

### 126. 为什么使用 setTimeout 实现 setInterval？怎么模拟？

```javascript
setInterval 的作用是每隔一段指定时间执行一个函数，但是这个执行不是真的到了时间立即执行，
它真正的作用是每隔一段时间将事件加入事件队列中去，只有当当前的执行栈为空的时候，才能去从事件队列中取出事件执行。
所以可能会出现这样的情况，就是当前执行栈执行的时间很长，导致事件队列里边积累多个定时器加入的事件，
当执行栈结束的时候，这些事件会依次执行，因此就不能到间隔一段时间执行的效果。

针对 setInterval 的这个缺点，我们可以使用 setTimeout 递归调用来模拟 setInterval，
这样我们就确保了只有一个事件结束了，我们才会触发下一个定时器事件，这样解决了 setInterval 的问题。

// 思路是使用递归函数，不断地去执行 setTimeout 从而达到 setInterval 的效果

function mySetInterval(fn, timeout) {
  // 控制器，控制定时器是否继续执行
  var timer = {
    flag: true
  };

  // 设置递归函数，模拟定时器执行。
  function interval() {
    if (timer.flag) {
      fn();
      setTimeout(interval, timeout);
    }
  }

  // 启动定时器
  setTimeout(interval, timeout);

  // 返回控制器
  return timer;
}

- setTimeout 实现 setInterval

const say = () => {
  // do something
  setTimeout(say, 200);
};

setTimeout(say, 200);

- 清除这个定时器：
let i = 0;

const timeList = [];

const say = () => {
  // do something
  console.log(i++);
  timeList.push(setTimeout(say, 200));
};

setTimeout(say, 200);

setTimeout(() => {
  for (let i = 0; i < timeList.length; i++) {
    clearTimeout(timeList[i]);
  }
}, 1000);
```

[《用 setTimeout 实现 setInterval》](https://www.jianshu.com/p/32479bdfd851) [《setInterval 有什么缺点？》](https://zhuanlan.zhihu.com/p/51995737)

### 127. let 和 const ,var 的注意点？如果用 const 定义变量可以不赋初始值吗？为什么不行？

```javascript
如果用 const 定义变量可以不赋初始值吗？为什么不行？var：
作用域：全局作用域 和 函数作用域
会进行预解析
使用var声明的变量既是顶级变量(顶层对象(window对象)的属性)也是全局变量
使用var声明的变量存在变量提升的情况
使用var可以对一个变量进行多次声明，后面的声明会覆盖前面的变量声明
在函数中再次使用var声明这个变量的时候，这个变量就是局部的，如果不是用var，那就全局的

let：
作用域：全局作用域和块级作用域 {}，不进行预解析
let所声明变量只在let命令所在的代码块中生效
let不存在变量提升
let不允许在相同的作用域下重复声明
let所声明变量只在let命令所在的代码块中生效 //块级作用域

let 和 var 比较：
var 声明的变量只能是全局或者整个函数块的
let 允许声明一个在作用域限制在块级的变量、语句或者表达式（块级作用域）
let 不能重复声明
let 存在临时死区（temporal dead zone）
let 不会被预解析（hoisting）

const：
let 有的它也有
初始化必须赋值，如果是对象的指针，对象可以修改。
赋值后不能改动类型
不可以。使用 const 定义的变量必须在声明时进行初始化，
因为 const 变量一旦被赋值就不能再修改。

使用 `const` 定义的变量必须在定义时就赋初始值，否则会产生语法错误。这是因为 `const` 声明的是常量，即值不能被改变的变量。如果没有初始值，那么它就没有固定的值可以被锁定。如果尝试在后续代码中给未初始化的 `const` 变量赋值，也会报错。因此，为了避免这种错误，定义 `const` 变量时必须同时为其赋初始值。如果需要定义不确定初始值的变量，应该使用 `let` 而不是 `const`。
```

### 128. 什么是 rest 参数？

```javascript
ES6 引入了 rest 参数（形式为“ ．．． 变量名勺，用于获取函数的多余数，这样就不需要使用arguments对象
```

《ES6 入门》7.2 rest 参数
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1666963411899-0db35f28-2140-4483-adc9-bf0f1b62c8e9.png#clientId=u347555ad-ba36-4&from=paste&height=140&id=u0219e25a&name=image.png&originHeight=210&originWidth=684&originalType=binary&ratio=1&rotation=0&showTitle=false&size=68579&status=done&style=none&taskId=uccc4a56b-0bfa-41b0-ba96-573db949686&title=&width=456)

### 129. 什么是尾调用，使用尾调用有什么好处？

```javascript
尾调用指的是函数的最后一步调用另一个函数。
我们代码执行是基于执行栈的，所以当我们在一个函数里调用另一个函数时，我们会保留当前的执行上下文，
然后再新建另外一个执行上下文加入栈中。使用尾调用的话，因为已经是函数的最后一步，
所以这个时候我们可以不必再保留当前的执行上下文，从而节省了内存，这就是尾调用优化。
但是 ES6 的尾调用优化只在严格模式下开启，正常模式是无效的。
```

《ES6 入门》7.7 尾调用优化

### 130. Symbol 类型的注意点？

```javascript
-.Symbol 函数前不能使用 new 命令，否则会报错。
-.Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。
-.Symbol 作为属性名，该属性不会出现在 for...in、for...of 循环中，也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify() 返回。
  Object.getOwnPropertySymbols 方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
-.Symbol.for 接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。
  如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。
-.Symbol.keyFor 方法返回一个已登记的 Symbol 类型值的 key。
```

《JavaScript 高级程序设计第四版》3.4.7 Symbol 类型

### 131. Set 和 WeakSet 结构？

```javascript
1.ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
2.WeakSet 结构与 Set 类似，也是不重复的值的集合。但是 WeakSet 的成员只能是对象，而不能是其他类型的值。
  WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，
```

《红宝书》6.6 Set 6.7 WeakSet

### Map 和 WeakMap 结构？

> 1.Map 数据结构。它类似于对象，也是键值对的集合，但是
> “键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
> 2.WeakMap 结构与 Map 结构类似，也是用于生成键值对的集合。但是 WeakMap 只接受对象作为键名（ null 除外），不接受其他类型的值作为键名。
> 而且 WeakMap 的键名所指向的对象，不计入垃圾回收机制。

《红宝书》6.4 Map 6.5 WeakMap

### map 和 set 区别 map.set()两次 symbol 会怎样?

`Map` 和 `Set` 都是 ES6 新增的内置数据结构，但它们在用途和实现上有很大不同。`Map` 是一种键值对的集合，其中每个键只能出现一次，而值可以任意出现；而 `Set` 是一种无序且唯一的值的集合。

至于问题的第二部分，Map.set()两次相同的 Symbol 作为 key 会将其视为同一个元素，即最后结果只有一个 key-value，例如：

```
const s = Symbol('foo');
const map = new Map();
map.set(s, 'bar');
map.set(s, 'baz');
console.log(map.get(s));  // 'baz'
```

在上述代码中，我们首先定义了一个 `Symbol`，然后使用 `Map.set()` 方法将其作为键值对添加到了新建的 `Map` 对象中，并分别给它们赋值 `'bar'` 和 `'baz'`。由于两次使用的键都是相同的 `Symbol`，因此后一次操作会覆盖前一次的操作，最终 `Map` 中仅剩下一个键值对，键为该 `Symbol`，值为 `'baz'`。

因此，`Map.set()` 方法是一种更新或添加键值对的方法，如果重复添加相同的键，则后一次操作会覆盖前一次的操作。

### 133. 什么是 Proxy ？

Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”，即对编程语言进行编程。

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

《红宝书》第 9 章 代理与反射

### 134. Reflect 对象创建目的？

```javascript
1.将 Object 对象的一些明显属于语言内部的方法（比如 Object.defineProperty，放到 Reflect 对象上。
2.修改某些 Object 方法的返回结果，让其变得更合理。
3.让 Object 操作都变成函数行为。
4.Reflect 对象的方法与 Proxy 对象的方法一一对应，只要是 Proxy 对象的方法，就能在 Reflect 对象上找到对应的方法。这就让 Proxy 对象可以方便地调用对应的 Reflect 方法，完成默认行为，作为修改行为的基础。也就是说，不管 Proxy 怎么修改默认行为，你总可以在 Reflect 上获取默认行为。
```

### 135. require 模块引入的查找方式？

```javascript
当 Node 遇到 require(X) 时，按下面的顺序处理。

（1）如果 X 是内置模块（比如 require('http')）
　　a. 返回该模块。
　　b. 不再继续执行。

（2）如果 X 以 "./" 或者 "/" 或者 "../" 开头
　　a. 根据 X 所在的父模块，确定 X 的绝对路径。
　　b. 将 X 当成文件，依次查找下面文件，只要其中有一个存在，就返回该文件，不再继续执行。
    X
    X.js
    X.json
    X.node

　　c. 将 X 当成目录，依次查找下面文件，只要其中有一个存在，就返回该文件，不再继续执行。
    X/package.json（main字段）
    X/index.js
    X/index.json
    X/index.node

（3）如果 X 不带路径
　　a. 根据 X 所在的父模块，确定 X 可能的安装目录。
　　b. 依次在每个目录中，将 X 当成文件名或目录名加载。

（4）抛出 "not found"

请看一个例子。

当前脚本文件 /home/ry/projects/foo.js 执行了 require('bar') ，这属于上面的第三种情况。Node 内部运行过程如下。

首先，确定 x 的绝对路径可能是下面这些位置，依次搜索每一个目录。


/home/ry/projects/node_modules/bar
/home/ry/node_modules/bar
/home/node_modules/bar
/node_modules/bar
搜索时，Node 先将 bar 当成文件名，依次尝试加载下面这些文件，只要有一个成功就返回。


bar
bar.js
bar.json
bar.node
如果都不成功，说明 bar 可能是目录名，于是依次尝试加载下面这些文件。


bar/package.json（main字段）
bar/index.js
bar/index.json
bar/index.node
如果在所有目录中，都无法找到 bar 对应的文件或目录，就抛出一个错误。
```

[《require() 源码解读》](http://www.ruanyifeng.com/blog/2015/05/require.html)

### 136. 什么是 Promise 对象，什么是 Promises/A+ 规范？

> Promise 对象是异步编程的一种解决方案，最早由社区提出。Promises/A+ 规范是 JavaScript Promise 的标准，规定了一个 Promise 所必须具有的特性。

Promise 是一个构造函数，接收一个函数作为参数，返回一个 Promise 实例。
一个 Promise 实例有三种状态，分别是 pending、resolved 和 rejected，分别代表了进行中、已成功和已失败。
实例的状态只能由 pending 转变 resolved 或者 rejected 状态，并且状态一经改变，就凝固了，无法再被改变了。
状态的改变是通过 resolve() 和 reject() 函数来实现的，我们
可以在异步操作结束后调用这两个函数改变 Promise 实例的状态，它的原型上定义了一个 then 方法，使用这个 then 方法可以为两个状态的改变注册回调函数。
这个回调函数属于微任务，会在本轮事件循环的末尾执行。

[《Promises/A+ 规范》](http://www.ituring.com.cn/article/66566) [《Promise》](http://es6.ruanyifeng.com/#docs/promise#Promise-resolve)

### 138. 如何检测浏览器所支持的最小字体大小？

```javascript
用 JS 设置 DOM 的字体为某一个值，然后再取出来，如果值设置成功，就说明支持。
一般浏览器会存在支持的最小字体的概念，也就是说，当我们给标签设置字体样式比浏览器所支持的最小字体小，则会会显示最小字体的大小，
而不会显示我们设置的字体样式的大小。

如何才能检测浏览器所支持的最小字体大小呢？
 <script>
    let pStyle = document.getElementById("p")
    pStyle.style.fontSize = '10px'
    function getstyle(obj, key) {
      if (obj.currentStyle) {
        console.log('currentStyle')
        return obj.currentStyle[key];
      } else {
        console.log('getComputedStyle')
        return getComputedStyle(obj, false)[key];
      }
    }
    console.log(getstyle(pStyle, 'fontSize'))
  </script>

如上图所示，我们可以首先设置字体的样式，然后可以通过getStyle函数来获取该对象的字体样式，如果不是和我们设置的不一致的话，则此时浏览器就不支持该字体大小。
如果我们想要设置更小的字体该怎么做?

可以使用transform: scale(0.5)来进行缩放

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>小字体方法</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    p {
      font-size: 12px;
    }

    .small-font {
      -webkit-transform-origin-x: 0;
      transform: scale(0.5);
    }
  </style>
</head>

<body>
  <p class="small-font">温馨提示</p>
  <p>温馨提示</p>
</body>
</html>
```

《红宝书》16.2.1 存取元素样式

### 139. 怎么做 JS 代码 Error 统计？

```javascript
window.onerror方案。也可以通过window.addEventListener(“error”, function(evt){})，
这个方法能捕捉到语法错误跟运行时错误，
同时还能知道出错的信息，以及出错的文件，行号，列号。

但是如果是第三方js发生异常，且script标签没有加crossorigin属性。虽然依旧会触发异常事件，但是拿不到相应的异常信息只拿到Script error.

  js加上crossorigin="anonymous"属性就可以获取到相应的错误信息
<script crossorigin="anonymous" src=""/>
```

### 140. 单例模式模式是什么？

### 141. 策略模式是什么？

#### 模式是什么？

### 143. 中介者模式是什么？

### 144. 适配器模式是什么？

### 145. 观察者模式和发布订阅模式有什么不同？

```javascript
发布订阅模式其实属于广义上的观察者模式

在观察者模式中，观察者需要直接订阅目标事件。在目标发出内容改变的事件后，直接接收事件并作出响应。

而在发布订阅模式中，发布者和订阅者之间多了一个调度中心。调度中心一方面从发布者接收事件，另一方面向订阅者发布事件，订阅者需要在调度中心中订阅事件。通过调度中心实现了发布者和订阅者关系的解耦。使用发布订阅者模式更利于我们代码的可维护性。
```

[《观察者模式和发布订阅模式有什么不同？》](https://www.zhihu.com/question/23486749)

### 157. 开发中常用的几种 Content-Type ？

```javascript
（1）application/x-www-form-urlencoded

浏览器的原生 form 表单，如果不设置 enctype 属性，那么最终就会以 application/x-www-form-urlencoded 方式提交数据。该种方式提交的数据放在 body 里面，数据按照 key1=val1&key2=val2 的方式进行编码，key 和 val 都进行了 URL
转码。

（2）multipart/form-data

该种方式也是一个常见的 POST 提交方式，通常表单上传文件时使用该种方式。

（3）application/json

告诉服务器消息主体是序列化后的 JSON 字符串。

（4）text/xml

该种方式主要用来提交 XML 格式的数据。
```

[《常用的几种 Content-Type》](https://honglu.me/2015/07/13/%E5%B8%B8%E7%94%A8%E7%9A%84%E5%87%A0%E7%A7%8DContent-Type/)

### 165. 如何确定页面的可用性时间，什么是 Performance API？

```javascript
Performance API 用于精确度量、控制、增强浏览器的性能表现。这个 API 为测量网站性能，提供以前没有办法做到的精度。

使用 getTime 来计算脚本耗时的缺点，首先，getTime方法（以及 Date 对象的其他方法）都只能精确到毫秒级别（一秒的千分之一），
想要得到更小的时间差别就无能为力了。其次，这种写法只能获取代码运行过程中的时间进度，
无法知道一些后台事件的时间进度，比如浏览器用了多少时间从服务器加载网页。

为了解决这两个不足之处，ECMAScript 5引入“高精度时间戳”这个 API，部署在 performance 对象上。它的精度可以达到1毫秒
的千分之一（1秒的百万分之一）。

navigationStart：当前浏览器窗口的前一个网页关闭，发生 unload 事件时的 Unix 毫秒时间戳。如果没有前一个网页，则等于 fetchStart 属性。

loadEventEnd：返回当前网页 load 事件的回调函数运行结束时的 Unix 毫秒时间戳。如果该事件还没有发生，返回 0。
根据上面这些属性，可以计算出网页加载各个阶段的耗时。比如，网页加载整个过程的耗时的计算方法如下：

var t = performance.timing;
var pageLoadTime = t.loadEventEnd - t.navigationStart;
```

[《Performance API》](http://javascript.ruanyifeng.com/bom/performance.html)

### 166. js 中的命名规则

```javascript
3.1.1 区分大小写
ECMAScript 中一切都区分大小写。无论是变量、函数名还是操作符，都区分大小写

3.1.2 标识符
所谓标识符，就是变量、函数、属性或函数参数的名称。标识符可以由一或多个下列字符组成：

 第一个字符必须是一个字母、下划线（_）或美元符号（$）；
 剩下的其他字符可以是字母、下划线、美元符号或数字。

标识符中的字母可以是扩展 ASCII（Extended ASCII）中的字母，也可以是 Unicode 的字母字符，如 À 和 Æ（但不推荐使用）。
按照惯例，ECMAScript 标识符使用驼峰大小写形式，即第一个单词的首字母小写，后面每个单词的首字母大写

虽然这种写法并不是强制性的，但因为这种形式跟 ECMAScript 内置函数和对象的命名方式一致，所以算是最佳实践。

关键字、保留字、true、false 和 null 不能作为标识符
```

[《ECMAScript 变量》](http://www.w3school.com.cn/js/pro_js_variables.asp)
《红宝书》3.1 语法

### 167. js 语句末尾分号是否可以省略？

```javascript
在 ECMAScript 规范中，语句结尾的分号并不是必需的。但是我们一般最好不要省略分号，因为加上分号一方面有
利于我们代码的可维护性，另一方面也可以避免我们在对代码进行压缩时出现错误。

ECMAScript 中的语句以分号结尾。省略分号意味着由解析器确定语句在哪里结尾

即使语句末尾的分号不是必需的，也应该加上。记着加分号有助于防止省略造成的问题，比如可以
避免输入内容不完整。此外，加分号也便于开发者通过删除空行来压缩代码（如果没有结尾的分号，只
删除空行，则会导致语法错误）。加分号也有助于在某些情况下提升性能，因为解析器会尝试在合适的
位置补上分号以纠正语法错误。
```

《红宝书》 3.1.5 语句

### 168. Object.assign()

```javascript
Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
```

### 169. Math.ceil 和 Math.floor

```javascript
Math.ceil() === 向上取整，函数返回一个大于或等于给定数字的最小整数。

Math.floor() === 向下取整，函数返回一个小于或等于给定数字的最大整数。
```

### 171. 一个列表，假设有 100000 个数据，这个该怎么办？

> 我们需要思考的问题：该处理是否必须同步完成？数据是否必须按顺序完成？

解决办法：

（1）将数据分页，利用分页的原理，每次服务器端只返回一定数目的数据，浏览器每次只对一部分进行加载。

（2）使用懒加载的方法，每次加载一部分数据，其余数据当需要使用时再去加载。

（3）使用数组分块技术，基本思路是为要处理的项目创建一个队列，
然后设置定时器每过一段时间取出一部分数据，然后再使用定时器取出下一个要处理的项目进行处理，接着再设置另一个定时器。

### 172. js 中倒计时的纠偏实现？

```javascript
在前端实现中我们一般通过 setTimeout 和 setInterval 方法来实现一个倒计时效果。
但是使用这些方法会存在时间偏差的问题，这是由于 js 的程序执行机制造成的，
setTimeout 和 setInterval 的作用是隔一段时间将回调事件加入到事件队列中，因此事件并不是立即执行的，
它会等到当前执行栈为空的时候再取出事件执行，因此事件等待执行的时间就是造成误差的原因。

一般解决倒计时中的误差的有这样两种办法：

（1）第一种是通过前端定时向服务器发送请求获取最新的时间差，以此来校准倒计时时间。

（2）第二种方法是前端根据偏差时间来自动调整间隔时间的方式来实现的。这一种方式首先是以 setTimeout 递归的方式来实现倒计时，
然后通过一个变量来记录已经倒计时的秒数。每一次函数调用的时候，首先将变量加一，然后根据这个变量和每次的间隔时间，
我们就可以计算出此时无偏差时应该显示的时间。然后将当前的真实时间与这个时间相减，这样我们就可以得到时间的偏差大小，
因此我们在设置下一个定时器的间隔大小的时候，我们就从间隔时间中减去这个偏差大小，以此来实现由于程序执行所造成的时间误差的纠正。
```

[《JavaScript 前端倒计时纠偏实现》](https://juejin.im/post/5badf8305188255c8e728adc)

### 175. ele.getElementsByClassName 和 ele.querySelectorAll 的区别？

```javascript
element.getElementsByClassName 返回一个即时更新（动态的）HTMLCollection
element.querySelectorAll 返回一个非即时更新（静态的） NodeList
// 先说什么叫即时更新，（前者是动态的，改变 DOM 结构会同步，后者只会记录调用 api 时的结果，不懂可以看下面的例子）
<div id="parent">
  <p class="p">1</p>
  <p class="p">2</p>
  <p class="p">3</p>
</div>
<script>
let list1 = parent.getElementsByClassName('p');
let list2 = parent.querySelectorAll('.p');
console.log(list1.length1); // 3
console.log(list2.length1); // 3
let newP = docuemnt.createElement("p")
newP.classList.add('p');
parent.appendChild(newP);
console.log(list1.length1); // 4 (即时更新)
console.log(list2.length1); // 3（非即时更新）
</script>
// 在说下返回值
// HTMLCollection 和 NodeList 都是类数组形式
如下一个 div 可以看成是 HTMLDivElement 的实例，其中 Node 的集合为 NodeList；Element 的集合为 HTMLCollection
EventTarget - Node - Element - HTMLElement - HTMLDivElement<br>
EventTarget - Node - Element - SVGElement - SVGPathElement<br>
```

[MDN 上元素 div 继承关系](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLDivElement)

### 函数作用域和块级作用域

```javascript
函数作用域：在 JavaScript 中定义一个函数，函数内部的变量只能通过函数内部访问，同时它可以修改和影响外部变量。
块级作用域：变量在离开定义的块级代码后立即被回收，存在暂时性死区的特性。
在 ES5 中只有全局作用域和函数作用域，没有块级作用域，这会带来些许麻烦：

内层变量覆盖外层变量
循环的变量泄露为全局变量
内层变量覆盖外层变量


var tmp = new Date();

function f(){
  console.log(tmp);
  if(false){
    var tmp = "hello";
  }
}

f(); // undefined
循环的变量泄露为全局变量


for (var i = 0; i < 3; i++) {

}
console.log(i); // 3
通过 var 声明的变量或者非严格模式下（non-strict mode）创建的函数声明没有块级作用域。


var x = 1;
{
  var x = 2;
}
console.log(x); // 2
所以，为了解决这个问题，ES6 新增了块级作用域：

块语句用于组合零个或者多个语句，这个块由一对大括号 {} 界定。
ES5 形成块级作用域的方法


(function() {

})()
ES6 通过 {} 界定


{
  var x = 1; // 或者 const x = 1;
}
```

### DOM 常用 API

```javascript
可以使用 document 或 window 元素的 API 来操作文档本身或获取文档的子类（Web 页面中的各种元素）。

// 获取元素
const node = document.getElementById(id); // 或者 querySelector(".class|#id|name");

// 创建元素
const heading = document.createElement(name); // name: p、div、h1...
heading.innerHTML = '';

// 添加元素
document.body.appendChild(heading);

// 删除元素
document.body.removeChild(node);


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>DOM 操作</title>
  <style>
    div {
      border: 1px solid #ccc;
      padding: 50px;
      width: 100px;
    }
  </style>
</head>
<body>
  <div id="dom1">元素 1</div>
  <div class="dom2">元素 2</div>

  <button class="btn">点我</button>

  <script>
    (function() {
      const btn = document.querySelector('.btn');

      // 注册点击事件
      btn.onclick = function() {
        const dom1 = document.getElementById('dom1');

        // 第一种添加元素
        const newDom1 = document.createElement('p');
        newDom1.innerHTML = '<a href="https://github.com/LiangJunrong/document-library">jsliang 的文档库</a>';
        dom1.appendChild(newDom1);

        // 第二种添加元素
        const newDom2 = document.createElement('ul');
        newDom2.innerHTML = `
          <li>aaa</li>
          <li>bbb</li>
        `;
        document.body.appendChild(newDom2);

        // 移除元素
        const dom2 = document.querySelector('.dom2');
        document.body.removeChild(dom2);
      }
    })()
  </script>
</body>
</html>
```

### 事件流

```javascript
事件流描述了页面接收事件的顺序。

1.事件流的区别

IE 采用冒泡型事件 Netscape 使用捕获型事件 DOM 使用先捕获后冒泡型事件
示例：

复制代码代码如下:

<body>
  <div>
    <button>点击这里</button>
  </div>
</body>

冒泡型事件模型： button->div->body (IE 事件流)

捕获型事件模型： body->div->button (Netscape 事件流)

DOM 事件模型： body->div->button->button->div->body (先捕获后冒泡)

- 如何让事件先冒泡后捕获：

在 DOM 标准事件模型中，是先捕获后冒泡。但是如果要实现先冒泡后捕获的效果，
对于同一个事件，监听捕获和冒泡，分别对应相应的处理函数，监听到捕获事件，先暂缓执行，直到冒泡事件被捕获后再执行捕获之间。



2.事件侦听函数的区别

IE 使用:

[Object].attachEvent("name_of_event_handler", fnHandler); //绑定函数
[Object].detachEvent("name_of_event_handler", fnHandler); //移除绑定

DOM 使用：

[Object].addEventListener("name_of_event", fnHandler, bCapture); //绑定函数
[Object].removeEventListener("name_of_event", fnHandler, bCapture); //移除绑定

bCapture 参数用于设置事件绑定的阶段，true 为捕获阶段，false 为冒泡阶段。
```

《红宝书》17.1 事件流

### 点击一个 input 依次触发的事件

```javascript
const text = document.getElementById('text');

text.onclick = function (e) {
  console.log('onclick')
}
text.onfocus = function (e) {
  console.log('onfocus')
}
text.onmousedown = function (e) {
  console.log('onmousedown')
}
text.onmouseenter = function (e) {
  console.log('onmouseenter')
}

正确顺序是：onmouseenter -> onmousedown -> onfocus -> onclick。

如果加上 onmouseup，那就是：

onmouseenter -> onmousedown -> onfocus -> onmouseup -> onclick
```

### addEventListener

```javascript
addEventListener 方法将指定的监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行。

addEventListener 事件目标可以是文档上的元素 Element、Document 和 Window 或者任何其他支持事件的对象（例如 XMLHttpRequest）。

语法：target.addEventListener(type, listener, options/useCapture)

type：表示监听事件类型的字符串
listener：所监听的事件触发，会接受一个事件通知对象。
options：一个指定有关 listener 属性的可选参数对象。
  可选值有
    capture（事件捕获阶段传播到这里触发）、
    once（在 listener 添加之后最多值调用一次）、
    passive（设置为 true 时表示 listener 永远不会调用 preventDefault()）。
useCapture：在 DOM 树中，注册了 listener 的元素，是否要先于它下面的 EventTarget 调用该 listener。
addEventListener 的第三个参数涉及到冒泡和捕获，为 true 时是捕获，为 false 时是冒泡。

或者是一个对象 { passive: true }，针对的是 Safari 浏览器，禁止/开启使用滚动的时候要用到
```

### typeof 和 instanceof 的区别

> typeof：对某个变量类型的检测，基本类型除了 null 之外，都能正常地显示为对应的类型，引用类型除了函数会显示为 function，其他都显示为 object。typeof 会对 null 显示错误是个历史 Bug，typeof null 输出的是 object，因为 JavaScript 早起版本是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象然而 null 表示为全零，所以它错误判断为 object。

因此采用 typeof 判断对象数据类型是不合适的，采用 instanceof 会更好。
instanceof 主要用于检测某个构造函数的原型对象在不在某个对象的原型链上。
另外还有 Object.prototype.toString.call() 进行变量判断。

### 执行上下文

> ES5
> 执行上下文可以简单理解为一个对象:

它包含三个部分:

变量对象(VO)
作用域链(词法作用域)
this 指向

它的类型:

-全局执行上下文：这是默认或者说基础的上下文，任何不在函数内部的代码都在全局上下文中。
它会执行两件事：创建一个全局的 window 对象（浏览器的情况下），并且设置 this 的值等于这个全局对象。一个程序中只会有一个全局执行上下文。 -函数执行上下文：每当一个函数被调用时, 都会为该函数创建一个新的上下文。每个函数都有它自己的执行上下文，
不过是在函数被调用时创建的。函数上下文可以有任意多个。每当一个新的执行上下文被创建，它会按定义的顺序执行一系列步骤。
-Eval 函数执行上下文：执行在 eval 函数内部的代码也会有它属于自己的执行上下文，但由于 JavaScript 开发者并不经常使用 eval，所以在这里我不会讨论它。

代码执行过程:

执行栈

执行栈，也就是在其它编程语言中所说的 “调用栈”，是一种拥有 LIFO（后进先出）数据结构的栈，被用来存储代码运行时创建的所有执行上下文。

当 JavaScript 引擎第一次遇到你的脚本时，它会创建一个全局的执行上下文并且压入当前执行栈。每当引擎遇到一个函数调用，
它会为该函数创建一个新的执行上下文并压入栈的顶部。

引擎会执行那些执行上下文位于栈顶的函数。当该函数执行结束时，执行上下文从栈中弹出，控制流程到达当前栈中的下一个上下文。

### 渐进式网络应用（PWA）

```javascript
渐进式网络应用（PWA）是谷歌在 2015 年底提出的概念。基本上算是 Web 应用程序，但在外观和感觉上与原生 App 类似。
支持 PWA 的网站可以提供脱机工作、推送通知和设备硬件访问等功能。

14.1 优点

1.更小更快: 渐进式的 Web 应用程序比原生应用程序小得多。他们甚至不需要安装。这是他们没有浪费磁盘空间和加载速度非常快。
2.响应式界面: PWA 支持的网页能够自动适应各种屏幕大小。它可以是手机、平板、台式机或笔记本。
3.无需更新: 大多数移动应用程序需要每周定期更新。与普通网站一样，每当用户交互发生且不需要应用程序或游戏商店批准时，PWA 总是加载最新更新版本。
4.高性价比：原生移动应用需要分别为 Android 和 iOS 设备开发，开发成本非常高。另一方面，PWA 有着相同的功能，但只是先前价格的一小部分，开发成本低。
5.SEO 优势：搜索引擎可以发现 PWA，并且加载速度非常快。就像其他网站一样，它们的链接也可以共享。提供良好的用户体验和结果，在 SEO 排名提高。
6.脱机功能：由于 Service Worker API 的支持，可以在脱机或低internet连接中访问PWAs。
7.安全性：PWA 通过 HTTPS 连接传递，并在每次交互中保护用户数据。
8.推送通知：通过推送通知的支持，PWA 轻松地与用户进行交互，提供非常棒的用户体验。
9.绕过应用商店：原生 App 如果需要任何新的更新，需要应用商店几天的审批，且有被拒绝或禁止的可能性，对于这方面来说，
    PWA 有它独特的优势，不需要 App Store 支持。更新版本可以直接从 Web 服务器加载，无需 App Store 批准。
10. 零安装：在浏览过程中，PWA 会在手机和平板电脑上有自己的图标，就像移动应用程序一样，但不需要经过冗长的安装过程。

14.2 缺点

1. 对系统功能的访问权限较低：目前 PWA 对本机系统功能的访问权限比原生 App 有限。而且，所有的浏览器都不支持它的全部功能，
2. 但可能在不久的将来，它将成为新的开发标准。
        多数 Android，少数 iOS：目前更多的支持来自 Android。iOS 系统只提供了部分。
3. 没有审查标准：PWA 不需要任何适用于应用商店中本机应用的审查，这可能会加快进程，但缺乏从应用程序商店中获取推广效益。
```

### CommonJS 规范、AMD 规范、CMD 规范、ES6 Modules 规范

```javascript
凑合的实现模块化

在没有这些之前，我们通过：

一个函数就是一个模块。function fn() {}
一个对象就是一个模块。let obj = new Object({ ... })
立即执行函数（IIFE）。(function() {})()

- CommonJS 规范

这之后，就有了 CommonJS 规范，其实 CommonJS 我们见得不少，就是 Node 的那套：

导出：module.exports = {}、exports.xxx = 'xxx'
导入：require(./index.js)

查找方式：查找当前目录是否具有文件，没有则查找当前目录的 node_modules 文件。再没有，冒泡查询，一直往系统中的 npm 目录查找。

它的特点：

所有代码在模块作用域内运行，不会污染其他文件
require 得到的值是值的拷贝，即你引用其他 JS 文件的变量，修改操作了也不会影响其他文件

它也有自己的缺陷：

应用层面。在 index.html 中做 var index = require('./index.js') 操作报错，因为它最终是后台执行的，只能是 index.js 引用 index2.js 这种方式。
同步加载问题。CommonJS 规范中模块是同步加载的，即在 index.js 中加载 index2.js，如果 index2.js 卡住了，那就要等很久。

- AMD 规范

为什么有 AMD 规范？

答：CommonJS 规范不中用：

适用客户端
等待加载（同步加载问题）。
所以它做了啥？

可以采用异步方式加载模块。AMD 是 Asynchronous Module Definition 的缩写，也就是 “异步模块定义”，记住这个 async 就知道它是异步的了。

- CMD 规范

CMD (Common Module Definition), 是 seajs 推崇的规范，CMD 则是依赖就近，用的时候再 require。

AMD 和 CMD 最大的区别是对依赖模块的执行时机处理不同，注意不是加载的时机或者方式不同，二者皆为异步加载模块。

- ES6 Modules 规范

导出：

export a
export { a }
export { a as jsliang }
export default function() {}

导入：
import './index'
import { a } from './index.js'
import { a as jsliang } from './index.js'
import * as index from './index.js'

特点：

export 命令和 import 命令可以出现在模块的任何位置，只要处于模块顶层就可以。
如果处于块级作用域内，就会报错，这是因为处于条件代码块之中，就没法做静态优化了，违背了 ES6 模块的设计初衷。
import 命令具有提升效果，会提升到整个模块的头部，首先执行。

和 CommonJS 区别：

CommonJS 模块是运行时加载，ES6 Modules 是编译时输出接口
CommonJS 输出是值的拷贝；ES6 Modules 输出的是值的引用，被输出模块的内部的改变会影响引用的改变
CommonJs 导入的模块路径可以是一个表达式，因为它使用的是require() 方法；而 ES6 Modules 只能是字符串
CommonJS this 指向当前模块，ES6 Modules 的 this 指向 undefined
ES6 Modules 中没有这些顶层变量：arguments、require、module、exports、__filename、__dirname
```

### babel 编译原理

> babylon 将 ES6/ES7 代码解析成 AST
> babel-traverse 对 AST 进行遍历转译，得到新的 AST
> 新 AST 通过 babel-generator 转换成 ES5

### null 是对象吗？为什么？

> 结论: null 不是对象。
> 解释: 虽然 typeof null 会输出 object，但是这只是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象然而 null 表示为全零，所以将它错误的判断为 object 。

### '1'.toString()为什么可以调用？

> var s = new Object('1');
> s.toString();
> s = null;
> 其实在这个语句运行的过程中做了这样几件事情：
> 第一步: 创建 Object 类实例。注意为什么不是 String ？ 由于 Symbol 和 BigInt 的出现，对它们调用 new 都会报错，目前 ES6 规范也不建议用 new 来创建基本类型的包装类。
> 第二步: 调用实例方法。
> 第三步: 执行完方法立即销毁这个实例。
> 整个过程体现了基本包装类型的性质，而基本包装类型恰恰属于基本数据类型，包括 Boolean, Number 和 String。

### 什么是 BigInt?

> 什么是 BigInt?
> BigInt 是一种新的数据类型，用于当整数值大于 Number 数据类型支持的范围时。这种数据类型允许我们安全地对 `大整数`执行算术操作，表示高分辨率的时间戳，使用大整数 id，等等，而不需要使用库。

为什么需要 BigInt?

在 JS 中，所有的数字都以双精度 64 位浮点格式表示，那这会带来什么问题呢？

这导致 JS 中的 Number 无法精确表示非常大的整数，它会将非常大的整数四舍五入，确切地说，JS 中的 Number 类型只能安全地表示-9007199254740991(-(2^53-1))和 9007199254740991（(2^53-1)），任何超出此范围的整数值都可能失去精度。

console.log(999999999999999);  //=>10000000000000000

同时也会有一定的安全性问题:
9007199254740992 === 9007199254740993;    // → true 居然是 true!

如何创建并使用 BigInt？

要创建 BigInt，只需要在数字末尾追加 n 即可。

console.log( 9007199254740995n );    // → 9007199254740995n
console.log( 9007199254740995 );     // → 9007199254740996

另一种创建 BigInt 的方法是用 BigInt()构造函数、
BigInt("9007199254740995");    // → 9007199254740995n

简单使用如下:
10n + 20n;    // → 30n  
10n - 20n;    // → -10n
+10n;         // → TypeError: Cannot convert a BigInt value to a number
-10n;         // → -10n
10n \* 20n;    // → 200n
20n / 10n;    // → 2n  
23n % 10n;    // → 3n  
10n \*\* 3n;    // → 1000n    
let x = 10n;    
++x;          // → 11n  
--x;          // → 9n
console.log(typeof x);   //"bigint"

值得警惕的点

1. BigInt 不支持一元加号运算符, 这可能是某些程序可能依赖于 + 始终生成 Number 的不变量，或者抛出异常。另外，更改 + 的行为也会破坏 asm.js 代码。
2. 因为隐式类型转换可能丢失信息，所以不允许在 bigint 和 Number 之间进行混合操作。当混合使用大整数和浮点数时，结果值可能无法由 BigInt 或 Number 精确表示。

10 + 10n;    // → TypeError

3. 不能将 BigInt 传递给 Web api 和内置的 JS 函数，这些函数需要一个 Number 类型的数字。尝试这样做会报 TypeError 错误。

Math.max(2n, 4n, 6n);    // → TypeError

4. 当 Boolean 类型与 BigInt 类型相遇时，BigInt 的处理方式与 Number 类似，换句话说，只要不是 0n，BigInt 就被视为 truthy 的值。

if(0n){//条件判断为 false
}
if(3n){//条件为 true
}

5. 元素都为 BigInt 的数组可以进行 sort。
6. BigInt 可以正常地进行位运算，如|、&、<<、>>和^

![](https://cdn.nlark.com/yuque/0/2023/webp/26096776/1678059451444-6a3c078e-b16d-4136-a71c-c67a3c44ec1d.webp#averageHue=%23e2ceb4&clientId=ud2354a0a-6654-4&from=paste&id=uf0f22f7d&originHeight=553&originWidth=1268&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u636fe051-9d60-4fec-b288-09f598bd4e3&title=)

浏览器兼容性
caniuse 的结果:

其实现在的兼容性并不怎么好，只有 chrome67、firefox、Opera 这些主流实现，要正式成为规范，其实还有很长的路要走。

### instanceof 能否判断基本数据类型？

```jsx
class PrimitiveNumber {
  static [Symbol.hasInstance](x) {
    return typeof x === "number";
  }
}
console.log(111 instanceof PrimitiveNumber); // true
```

> 能。比如下面这种方式:
> 如果你不知道 Symbol，可以看看[MDN 上关于 hasInstance 的解释](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FSymbol%2FhasInstance)。
> 其实就是自定义 instanceof 行为的一种方式，这里将原有的 instanceof 方法重定义，换成了 typeof，因此能够判断基本数据类型。

### [] == ![]结果是什么？为什么？

> 解析:
> == 中，左右两边都需要转换为数字然后进行比较。
> []转换为数字为 0。
> ![] 首先是转换为布尔值，由于[]作为一个引用类型转换为布尔值为 true,
> 因此![]为 false，进而在转换成数字，变为 0。
> 0 == 0 ， 结果为 true

### 对象转原始类型是根据什么流程运行的？

对象转原始类型，会调用内置的[ToPrimitive]函数，对于该函数而言，其逻辑如下：

1. 如果 Symbol.toPrimitive()方法，优先调用再返回
2. 调用 valueOf()，如果转换为原始类型，则返回
3. 调用 toString()，如果转换为原始类型，则返回
4. 如果都没有返回原始类型，会报错

```jsx
对象转原始类型，会调用内置的[ToPrimitive]函数，对于该函数而言，其逻辑如下：

如果Symbol.toPrimitive()方法，优先调用再返回
调用valueOf()，如果转换为原始类型，则返回
调用toString()，如果转换为原始类型，则返回
如果都没有返回原始类型，会报错

var obj = {
  value: 3,
  valueOf() {
    return 4;
  },
  toString() {
    return '5'
  },
  [Symbol.toPrimitive]() {
    return 6
  }
}
console.log(obj + 1); // 输出7
```

### 如何让 if(a == 1 && a == 2)条件成立？

```jsx
var a = {
  value: 0,
  valueOf: function () {
    this.value++;
    return this.value;
  },
};
console.log(a == 1 && a == 2); //true
```

### 原型对象和构造函数有何关系？

> 在 JavaScript 中，每当定义一个函数数据类型(普通函数、类)时候，都会天生自带一个 prototype 属性，这个属性指向函数的原型对象。
> 当函数经过 new 调用时，这个函数就成为了构造函数，返回一个全新的实例对象，这个实例对象有一个**proto**属性，指向构造函数的原型对象。
> ![](https://cdn.nlark.com/yuque/0/2023/webp/26096776/1678062196715-40e7a9a3-1a38-4251-9185-a23448ea7a74.webp#averageHue=%23fcfcfc&clientId=ud2354a0a-6654-4&from=paste&id=Y3Wu6&originHeight=408&originWidth=704&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u27e88384-726a-4fa4-8e35-3830a45c0e5&title=)

### 能不能描述一下原型链？

> JavaScript 对象通过**proto** 指向父类对象，直到指向 Object 对象为止，这样就形成了一个原型指向的链条, 即原型链。
> ![](https://cdn.nlark.com/yuque/0/2023/webp/26096776/1678062265879-6b462fbb-0c21-40d8-adf8-d32bd319b9a9.webp#averageHue=%23fbfbfb&clientId=ud2354a0a-6654-4&from=paste&id=pamV6&originHeight=408&originWidth=1137&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u8cba6b53-c8bf-4553-b89c-b6217658c24&title=)

- 对象的 hasOwnProperty() 来检查对象自身中是否含有该属性
- 使用 in 检查对象中是否含有某个属性时，如果对象中没有但是原型链中有，也会返回 true

### 什么是高阶函数？

````markdown
## 1.什么是高阶函数

概念非常简单，如下:

> `一个函数`就可以接收另一个函数作为参数或者返回值为一个函数，`这种函数`就称之为高阶函数。

那对应到数组中有哪些方法呢？

## 2.数组中的高阶函数

### 1.map

- 参数:接受两个参数，一个是回调函数，一个是回调函数的 this 值(可选)。
  其中，回调函数被默认传入三个值，依次为当前元素、当前索引、整个数组。
- 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果
- 对原来的数组没有影响

```js
let nums = [1, 2, 3];
let obj = { val: 5 };
let newNums = nums.map(function (item, index, array) {
  return item + index + array[index] + this.val;
  //对第一个元素，1 + 0 + 1 + 5 = 7
  //对第二个元素，2 + 1 + 2 + 5 = 10
  //对第三个元素，3 + 2 + 3 + 5 = 13
}, obj);
console.log(newNums); //[7, 10, 13]
```
````

````

当然，后面的参数都是可选的 ，不用的话可以省略。

### reduce

- 参数: 接收两个参数，一个为回调函数，另一个为初始值。回调函数中三个默认参数，依次为积累值、当前值、整个数组。

```js
let nums = [1, 2, 3];
// 多个数的加和
let newNums = nums.reduce(function (preSum, curVal, array) {
  return preSum + curVal;
}, 0);
console.log(newNums); //6
````

不传默认值会怎样？

不传默认值会自动以第一个元素为初始值，然后从第二个元素开始依次累计。

### filter

参数: 一个函数参数。这个函数接受一个默认参数，就是当前元素。这个作为参数的函数返回值为一个布尔类型，决定元素是否保留。

filter 方法返回值为一个新的数组，这个数组里面包含参数里面所有被保留的项。

```js
let nums = [1, 2, 3];
// 保留奇数项
let oddNums = nums.filter((item) => item % 2);
console.log(oddNums);
```

### sort

参数: 一个用于比较的函数，它有两个默认参数，分别是代表比较的两个元素。

举个例子:

```js
let nums = [2, 3, 1];
//两个比较的元素分别为a, b
nums.sort(function (a, b) {
  if (a > b) return 1;
  else if (a < b) return -1;
  else if (a == b) return 0;
});
```

当比较函数返回值大于 0，则 a 在 b 的后面，即 a 的下标应该比 b 大。

反之，则 a 在 b 的后面，即 a 的下标比 b 小。

整个过程就完成了一次升序的排列。

当然还有一个需要注意的情况，就是比较函数不传的时候，是如何进行排序的？

> 答案是将数字转换为字符串，然后根据字母 unicode 值进行升序排序，也就是根据字符串的比较规则进行升序排序。

### for...in 和 for...of 的区别，可枚举类型和可迭代类型的区别，在其他语言是否有实现

for…of 是 ES6 新增的遍历方式，允许遍历一个含有 iterator 接口的数据结构（数组、对象等）并且返回各项的值，和 ES3 中的 for…in 的区别如下

- for…of 遍历获取的是对象的键值，for…in 获取的是对象的键名；
- for… in 会遍历对象的整个原型链，性能非常差不推荐使用，而 for … of 只遍历当前对象不会遍历原型链；
- 对于数组的遍历，for…in 会返回数组中所有可枚举的属性(包括原型链上可枚举的属性)，for…of 只返回数组的下标对应的属性值；

  可枚举类型和可迭代类型的区别

> 关于 Iterable 的一点：

- 可迭代对象是数组的泛化。这是一个允许我们在 for..of 循环中使任何对象可用的概念；
- iterable 是一个接口，它指定如果一个对象实现了一个 key is [symbol.iterator] [link](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4)的方法，则该对象可以被访问。

> 关于 Enumerable 的一点：

- 它只是意味着如果您使用 for..in 循环或 Object.keys 遍历对象，该属性将显示出来；
- JavaScript 中的可枚举属性意味着如果使用 for...in 循环或 Object.keys() 方法迭代该属性，则可以查看该属性。默认情况下，通过简单赋值或属性初始化器创建的所有属性都是可枚举的。

可枚举 [for in] 查看对象内部的属性，而不是值 [仅在哪里 `enumerable: true`- 默认情况下适用于所有道具]；

可迭代 [for of] 查看值；

再深入一点：

> 迭代器是附加到数组的另一个对象，它告诉其他函数如何访问其中的所有不同值。有数组、字符串、NodeList、Sets、Maps，它们有内置的迭代器，但对象没有。

1. 默认情况下，该对象不可迭代，但您可以实现它。

所以你可以使用

- `for .. of`for `[array, Map, Set, String]`迭代值；
- `for .. in`让数组遍历一个键；
- `for .. in`让对象枚举其（对象的）属性；
- 循环[NodeList](https://qa.1r1g.com/sf/ask/3989335031/)。

**总结：** for...in 循环主要是为了遍历对象而生，不适用于遍历数组；for...of 循环可以用来遍历数组、类数组对象，字符串、Set、Map 以及 Generator 对象。

[JS 中的可迭代和可枚举有什么区别？我正在经历 For/of 和 For/In 循环，这些术语经常出现 |](https://qa.1r1g.com/sf/ask/4805357581/)

### JS 如何遍历对象的属性？

[*JS 遍历对象属性*的 7 种方式](https://www.baidu.com/link?url=2Wk2Oi1XOsAo0AcmbteFUlMEExrU8sSIAY7AU9Ukilf1AUD1xgoTvQQrP-kW1I1iNfsEdX6vbsZveF49gv6_u_OuJoJ7cxOtV2jslXJphma&wd=&eqid=c0e7a26500002bd700000006647efe7e)

callback、promise 和 async/await 都是用于处理 JavaScript 中的异步编程问题的技术。

1. Callback 是一种传统的处理异步编程的方式，使用回调函数来处理异步事件。通过定义回调函数来处理异步操作的结果，以便在完成时进行响应。
2. Promise 是 ECMAScript 6 中引入的一种新的异步编程方法，它可以更好地处理异步操作。Promise 本质上是提供了一个异步操作的容器，将异步操作与其完成之后的操作分离开来，以便更好地控制代码的流程，并可通过链式调用 then()和 catch()方法来进行后续处理。
3. Async/await 是在 ES7 中提出的一种用于处理异步编程的方式。它本质上是基于 Promise 的语法糖，可以让我们像处理同步代码一样处理异步操作，让异步代码像同步代码一样易于阅读和维护。

总结：Callback 已经是一种老旧的方式，虽然仍然能够使用，但不推荐。Promise 在 ES6 中被引入并取得了广泛的应用，它能够更好地处理异步操作的情况，并且比 Callback 的代码可读性更强。而 Async/await 是在 ES7 中提出的，它对 Promise 进行了简化，是一种更优雅的处理异步编程的方法，也更加易于理解和维护。

### 使用 async await 后如何捕获异常,async await 后返回的还是一个 Promise 对象吗

使用 async/await 语法糖时，可以使用 try...catch 语句来捕获异步操作中产生的异常。

示例代码如下：

```
async function test() {
  try {
    // 执行异步操作
    const result = await someAsyncTask();
    console.log(result);
  } catch (error) {
    // 捕获并处理异常
    console.error(error);
  }
}
```

在上面的例子中，我们使用了 try...catch 语句来捕获异步操作中产生的异常，并在 catch 块中处理异常。

当 async 函数执行时，它会返回一个 Promise 对象。这个 Promise 对象的状态由 async 函数内部的异步操作的状态决定。如果异步操作成功完成，则 Promise 对象的状态为 resolved，否则为 rejected。无论 Promise 对象最终的状态是 resolved 还是 rejected，都可以通过使用 try...catch 语句来捕获异常，从而保证程序的可靠性。

需要注意的是，虽然 async/await 语法糖可以使异步编程的写法更加简单和易读，但它本质上还是建立在 Promise 的基础之上的。因此，async 函数执行后仍然会返回一个 Promise 对象。

[异步编程: 一次性搞懂 Promise, async, await (#js #javascript)](https://www.bilibili.com/video/BV1WP4y187Tu/?vd_source=037b856144283671f89f562ed7eeb263)

[前端人 不了解的 promise/async await - 掘金](https://juejin.cn/post/7144308012952322084#comment)

[理解 JavaScript 的 async/await - 边城客栈 - SegmentFault 思否](https://segmentfault.com/a/1190000007535316)

[8 张图让你一步步看清 async/await 和 promise 的执行顺序 - 掘金](https://juejin.cn/post/6844903734321872910#comment)

[Promise 深入难点技术剖析丨面试必问](https://www.bilibili.com/video/BV1vV411z7gw?p=35&vd_source=037b856144283671f89f562ed7eeb263)

### 如何数组取最后一个元素？

在 JavaScript 中，取出数组中最后一个元素有多种方法。以下是其中几种：

1. 通过数组的 length 属性和索引号进行访问：使用 `arr[arr.length - 1]` 的方式即可。具体来说，JavaScript 数组中的索引编号从 0 开始，因此我们可以通过数组的长度 - 1 来获取最后一个元素的位置。
2. 使用 [Array.prototype.at](http://array.prototype.at/)() 方法取出：`arr.at(-1)` 可以直接获取数组的最后一个元素。该方法接收一个整数值并返回该索引的项目，允许正数和负数。

   `Array.prototype.at()` 方法是 JavaScript 中 Array 对象的一个方法，用于返回给定索引处的元素。它可以处理负数和超出索引范围的索引，并且具有与使用方括号访问相同的语法（即 `array[index]`）。当传递负数时，`at()` 方法从末尾开始计数。比如，`arr.at(-1)` 将返回数组 `arr` 的最后一个元素。

   关于使用 `array[-1]` 访问数组的最后一个元素，Python 和 R 语言都支持这种语法，但在 JavaScript 中不推荐使用。因为 JavaScript 在处理方括号内的负数数字时，将其解释为字符串属性，因此 `array[-1]` 实际上被视为访问名为 "-1" 的属性。而 `at()` 方法则不会出现这个问题。

3. 使用 Array.prototype.slice() 方法：将 `-1` 作为开始位置传递给该方法即可获取数组的最后一个元素。比如，`arr.slice(-1)[0]` 即为数组最后一个元素。

[JavaScript 中获取数组最后一个元素 4 种方法及性能 - 掘金](https://juejin.cn/post/7197300642062204988)

### ES6 新特性了解吗？

### 调用函数的时候，函数的参数是值传递还是引用传递？函数调用的时候，为什么会修改调用方的参数？要避免函数的参数被修改，调用前应该做什么？

在 JavaScript 中，函数的参数传递是按值传递的。这意味着，在调用函数时，实际参数的值被复制到函数的形式参数中。因此，当函数内部修改了参数的值时，不会影响到原始变量的值。

然而，如果函数的参数是对一个对象引用的引用，那么形参和实参将指向同一内存地址，因此在函数内部可以修改对象的属性。这意味着函数中对参数对象属性的修改也会作用于调用方的对象。因为形参指向与实参相同的对象空间，并没有进行副本拷贝，所以就算在函数内部修改参数对象的属性，实参也能正确的“感知”到这个改动，从而起到了修改调用方参数的效果。

为了避免函数的参数被修改，我们可以在调用函数前通过传递参数的方式创建参数的副本。这种做法被称为“复制参数”。在 JavaScript 中，我们可以使用 `Object.assign` 方法来复制一个对象。可以像下面这样使用：

```
function functionName(obj) {
  // 复制 obj 对象
  const newObj = Object.assign({}, obj);

  // 在新对象上执行操作，而不是原始对象
  newObj.someProperty = 'new value';

  // 返回新对象或者对新对象进行操作
  return newObj;
}
```

这样，在调用函数时，我们传递的是参数对象的副本，函数内部对新对象进行操作，而原始参数对象并不会改变。

https://www.w3schools.com/js/js_function_parameters.asp

https://www.w3school.com.cn/js/js_function_parameters.asp

### 如何修改 div 的内容

在 JavaScript 中，我们可以通过不同的方式来修改 HTML 元素的内容。

一种常用的方法是通过元素的 id 属性获取该元素，然后使用 innerHTML 或 innerText 属性来修改元素的内容。

例如，如果要修改一个 id 属性为 myDiv 的 div 元素的内容，可以使用以下代码：

```javascript
let div = document.getElementById("myDiv");
div.innerHTML = "新的内容";
```

上述代码会将 myDiv 元素的内容设置为“新的内容”。

需要注意的是，innerHTML 和 innerText 之间存在一些差异。innerHTML 会将所有 HTML 标签都解析出来，并且能够执行脚本。而 innerText 只会将文本内容解析出来，不包括 HTML 标签，也不会执行脚本。因此，在某些情况下，使用 innerHTML 可能存在一定的安全风险。

除了 innerHTML 和 innerText 之外，还有其他一些属性可以用来修改 HTML 元素的内容，例如：

- textContent：类似于 innerText，但会将所有元素的文本内容合并在一起；
- outerHTML：用指定的 HTML 替换当前元素。

无论使用哪种属性，都需要先获取到对应的 HTML 元素，并确保该元素存在才能修改它的内容。

### 箭头函数和普通函数的区别？

- 箭头函数不绑定 `arguments`，可以使用 `...args` 代替
- 箭头函数没有 `prototype` 属性，不能进行 `new` 实例化
- 箭头函数不能通过 `call`、`apply` 等绑定 `this`，因为箭头函数底层是使用 `bind`永久绑定 `this`了，`bind`绑定过的 `this`不能修改
- 箭头函数的 `this`指向创建时父级的 `this`
- 箭头函数不能使用 `yield`关键字，不能作为 `Generator`函数
- [箭头函数与普通函数的区别？*箭头函数和普通函数的区别*前端路啊的博客-CSDN 博客](https://blog.csdn.net/m0_62118859/article/details/124661031)

[箭头函数与普通函数的区别详解*箭头函数与普通函数有哪些区别*小弦的博客的博客-CSDN 博客](https://blog.csdn.net/qq_42258904/article/details/110083064)

### map 与 forEach 的区别

[基础篇 | 前端进阶之旅](https://interview.poetries.top/docs/base.html#_50-map%E4%B8%8Eforeach%E7%9A%84%E5%8C%BA%E5%88%AB)
