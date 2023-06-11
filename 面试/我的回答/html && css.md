#### CSS 选择器及其优先级

> css 选择器种类
>
> （1）id 选择器（#myid）1,0,0
> （2）类选择器（.myclassname）0,1,0
> （3）伪类选择器（a:hover,li:nth-child）0,1,0
> （4）属性选择器（a[rel="external"]）0,1,0
> （5）标签选择器（div,h1,p）0,0,1
> （6）伪元素选择器（::before、::after）0,0,1
> （7）后代选择器（h1 p） （后代选择器：就是对象当中所有> 的子元素，孙子元素以及最底层的元素）
> （8）相邻后代选择器（子）选择器（ul>li）(子选择器：就单> 单是子元素，子元素的子元素就不算了)
> （9）兄弟选择器（li~a）(通用兄弟选择器：是选中元素后的> 所有兄弟元素（不须为相邻）)
> （10）相邻兄弟选择器（li+a）(相邻兄弟选择器：选择紧接在> 另一个元素后的元素，而且二者有相同的父元素)
> （11）通配符选择器（\*）0,0,0
>
> 选择器优先级
>
> 有 3 大类选择器。他们有不同的优先级。
> 如果选择器的 ID 数量更多，则它会胜出（即它更明确）。
> 如果 ID 数量一致，那么拥有最多类的选择器胜出。
> 如果以上两次比较都一致，那么拥有最多标签名的选择器胜出。> (id > 类,伪类 ,属性> 标签,伪元素)
>
> 伪类选择器（如:hover）和属性选择器（如[type="input"]）
> 与一个类选择器的优先级相同。通用选择器（\*）和组合器> （>、+、~）对优先级没有影响
>
> 总结排序: !important >行内样式>ID 选择器>类选择器>标签>> 通配符>继承>浏览器默认属性
>
> [这次彻底搞定 CSS 层叠、优先级！](https://juejin.cn/post/7125759307761025060) 《深入浅出 CSS》 第 1 章 层叠、优先级和继承

#### 介绍一下标准的 CSS 的盒子模型？低版本 IE 的盒子模型有什么不同的？

![](https://cdn.nlark.com/yuque/0/2020/png/1500604/1603600820746-e10daafa-451a-454e-9705-f8c358769d5b.png?x-oss-process=image%2Fresize%2Cw_746%2Climit_0#align=left&display=inline&height=366&margin=%5Bobject%20Object%5D&originHeight=455&originWidth=746&size=0&status=done&style=none&width=600#averageHue=%23ddeeb2&from=url&id=fX4ho&originHeight=455&originWidth=746&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
![](https://cdn.nlark.com/yuque/0/2020/png/1500604/1603600820555-dc6ed390-d47e-412b-942a-857bbe5f280d.png?x-oss-process=image%2Fresize%2Cw_791%2Climit_0#align=left&display=inline&height=368&margin=%5Bobject%20Object%5D&originHeight=462&originWidth=791&size=0&status=done&style=none&width=630#averageHue=%23f0e097&from=url&id=s4hoL&originHeight=462&originWidth=791&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> 盒模型指的是网页元素的结构。当指定一个元素的宽度或高度时，便设置了元素内容（content）的尺寸——任何内边距（padding）、边框（border）、外边距（margin）都会基于它叠加。
>
> 盒模型都是由四个部分组成的，分别是 margin、border、padding 和 content。
>
> 标准盒模型和 IE 盒模型的区别在于设置 width 和 height 时，所对应的范围不同。
>
> 标准盒模型的 width 和 height 属性的 范围只包含了 content，
> 而 IE 盒模型的 width 和 height 属性的范围包含了 border、padding 和 content。
> 一般来说，我们可以通过修改元素的 box-sizing 属性来改变元素的盒模型。

《深入浅出 CSS》 第 3 章 盒模型 3.1.2 调整盒模型

> （1）有两种盒子模型：IE 盒模型（border-box）、W3C 标准盒模型（content-box）
> （2）盒模型：分为内容（content）、填充（padding）、边界（margin）、边框（border）四个部分

> IE 盒模型和 W3C 标准盒模型的区别：
>
> （1）W3C 标准盒模型：属性 width，height 只包含内容 content，不包含 border 和 padding
> （2）IE 盒模型：属性 width，height 包含 content、border 和 padding，指的是 content+padding+border。
>
> ①box-sizing 的默认值为 content-box，这意味任何指定的宽或高都只会设置内容盒子的大小
> ② 在 ie8+浏览器中使用哪个盒模型可以由 box-sizing（CSS 新增的属性）控制，
> 默认值为 content-box，即标准盒模型；
> ③ 如果将 box-sizing 设为 border-box 则用的是 IE 盒模型。
> 如果在 ie6，7，8 中 DOCTYPE 缺失会将盒子模型解释为 IE 盒子模型。
> 若在页面中声明了 DOCTYPE 类型，所有的浏览器都会把盒模型解释为 W3C 盒模型。

### 盒子与盒子之间的距离是盒子与边框距离的两倍，这个需要使用哪个属性?两边的盒子贴边，中间的距离等分，这是哪一种属性?

盒子与盒子之间的距离是盒子与边框距离的两倍，可以使用 CSS 盒模型中的 `padding` 属性来进行设置。`padding` 属性用于设置元素的内边距，指的是内容区域和边框之间的距离。可以使用 `padding` 属性为盒子设置内边距，然后使用 `margin` 属性将盒子之间的距离扩大为内边距的两倍。

具体实现代码如下所示：

```css
.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  padding: 20px; /* 内边距为20px */
  margin: 40px; /* 盒子之间的距离为内边距的两倍，也就是40px * 2 = 80px */
}
```

对于两边的盒子贴边，中间的距离等分的效果，可以通过使用 Flex 布局来实现。具体实现代码如下所示：

```css
.container {
  display: flex;
  justify-content: space-between; /* 将盒子放置在容器的两端 */
}

.box {
  width: 100px;
  height: 100px;
  background-color: red;
  margin: 0 10px; /* 盒子之间的距离为10px */
}
```

在上面的例子中，我们使用 Flex 布局将盒子放置在容器的两端，并通过 `margin` 属性设置盒子之间的距离为10px。由于我们使用了 `justify-content: space-between` 属性，因此中间的距离会自动等分。

#### ::before 和:after 中双冒号和单冒号有什么区别？解释一下这 2 个伪元素的作用。

> 双冒号和单冒号的区别
>
> 在 css3 中伪类选择器用于选中处于某个特定状态的元素。这种状态可能是由于用户交互，也可能是由于元素相对于其父级或兄弟元素的位置。伪类选择器始终以一个冒号（:）开始。
>
> 在 css3 中伪元素类似于伪类，但是它不匹配特定状态的元素，而是匹配在文档中没有直接对应 HTML 元素的特定部分。伪元素选择器可能只匹配元素的一部分，甚至向 HTML 标记中未定义的地方插入内容。
>
> 2 者都是伪元素选择器，单冒号是浏览器为了向后兼容而允许的。
>
> ::after,::before 作用:
>
> 创建一个伪元素，使其成为匹配元素的第(最后)一个子元素，该元素默认是行内元素，可用于插入文字、图片或其他形状，必须指定 content 属性才能让元素出现。

《深入浅出 CSS》 附录 A 　选择器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1666697260759-ead31974-b19c-4ff2-affb-1bc83de8747c.png#averageHue=%23f3f3f3&clientId=u258f02ec-022e-4&from=paste&height=235&id=ua43a1d49&name=image.png&originHeight=246&originWidth=843&originalType=binary&ratio=1&rotation=0&showTitle=false&size=91147&status=done&style=none&taskId=u807d244a-f23d-452b-bce2-d9c46d1fdd7&title=&width=804)

> 伪类选择器用于选中处于某个特定状态的元素。这种状态可能是由于用户交互，也可能是由于元素相对于其父级或兄弟元素的位置。伪类选择器始终以一个冒号（:）开始。
>
> 伪元素类似于伪类，但是它不匹配特定状态的元素，而是匹配在文档中没有直接对应 HTML 元素的特定部分。伪元素选择器可能只匹配元素的一部分，甚至向 HTML 标记中未定义的地方插入内容。
>
> 这些选择器以双冒号（::）开头，尽管大多数浏览器也支持单冒号的语法以便向后兼容。
>
> ::before——创建一个伪元素，使其成为匹配元素的第一个子元素。该元素默认是行内元素，可用于插入文字、图片或其他形状。必须指定 content 属性才能让元素出现，例如：.menu::before。
>
> ::after——创建一个伪元素，使其成为匹配元素的最后一个子元素。该元素默认是行
> 内元素，可用于插入文字、图片或其他形状。必须指定 content 属性才能让元素出现，例如：.menu::after。

#### 伪类与伪元素的区别

> css 引入伪类和伪元素概念是为了格式化文档树以外的信息。也就是说，伪类和伪元素是用来修饰不在文档树中的部分，
> 比如，一句话中的第一个字母（伪元素），或者是列表中的第一个元素（伪类）。
>
> 伪类选择器用于选中处于某个特定状态的元素。这种状态可能是由于用户交互（:hover,:focus 等等），也可能是由于元素相对于其父级或兄弟元素的位置（child 类，type 类）。伪类选择器始终以一个冒号（:）开始。
>
> 伪元素类似于伪类，但是它不匹配特定状态的元素，而是匹配在文档中没有直接对应 HTML 元素的特定部分。伪元素选择器可能只匹配元素的一部分（一句话中的第一个字母::first-letter,等等），甚至向 HTML 标记中未定义的地方 （创建一个伪元素，使其成为匹配元素的第一个子元素::before,等等）
> 插入内容。
>
> 伪元素选择器以双冒号（::）开头，尽管大多数浏览器也支持单冒号的语法以便向后兼容。

> 伪元素：在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如：

```css
p::before {
  content: "第一章：";
}
p::after {
  content: "Hot!";
}
p::first-line {
  background: red;
}
p::first-letter {
  font-size: 30px;
}
```

> 伪类：将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。例如：

```css
a:hover {
  color: #ff00ff;
}
p:first-child {
  color: red;
}
```

**总结**伪类是通过在元素选择器上加⼊伪类改变元素状态，⽽伪元素通过对元素的操作进行对元素的改变。
[《总结伪类与伪元素》](http://www.alloyteam.com/2016/05/summary-of-pseudo-classes-and-pseudo-elements/)《深入浅出 CSS》 附录 A 　选择器

#### CSS 中哪些属性可以继承？

> 如果一个元素的某个属性没有层叠值，则可能会继承某个祖先元素的值。

> 每一个属性在定义中都给出了这个属性是否具有继承性，一个具有继承性的属性会在没有指定值的时候，会使用父元素的同属性的值来作为自己的值。

**一、无继承性的属性**

1. **display**：规定元素应该生成的框的类型
2. **文本属性**：

- vertical-align：垂直文本对齐
- text-decoration：规定添加到文本的装饰
- text-shadow：文本阴影效果
- white-space：空白符的处理
- unicode-bidi：设置文本的方向

3. **盒子模型的属性**：width、height、margin、border、padding
4. **背景属性**：background、background-color、background-image、background-repeat、background-position、background-attachment
5. **定位属性**：float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index
6. **生成内容属性**：content、counter-reset、counter-increment
7. **轮廓样式属性**：outline-style、outline-width、outline-color、outline
8. **页面样式属性**：size、page-break-before、page-break-after
9. **声音样式属性**：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during

**二、有继承性的属性**

1. **字体系列属性**

- font-family：字体系列
- font-weight：字体的粗细
- font-size：字体的大小
- 还得 font-style：字体的风格

2. **文本系列属性**

- text-indent：文本缩进
- text-align：文本水平对齐
- line-height：行高
- word-spacing：单词之间的间距
- letter-spacing：中文或者字母之间的间距
- text-transform：控制文本大小写（就是 uppercase、lowercase、capitalize 这三个）
- color：文本颜色

3. **元素可见性**

- visibility：控制元素显示隐藏

4. **列表布局属性**

- list-style：列表风格，包括 list-style-type、list-style-image 等

5. **光标属性**

- cursor：光标显示为何种形态

> 当一个属性不是继承属性的时候，我们也可以通过将它的值设置为 inherit 来使它从父元素那获取同名的属性值来继承。

《深入浅出 CSS》 1.2 继承

每个 CSS 属性定义的概述都指出了这个属性是默认继承的，还是默认不继承的。这决定了当你没有为元素的属性指定值时该如何计算值。

当元素的一个继承属性没有指定值时，则取父元素的同属性的计算值。只有文档根元素取该属性的概述中给定的初始值（这里的意思应该是在该属性本身的定义中的默认值）。

当元素的一个非继承属性（在 Mozilla code 里有时称之为 reset property）没有指定值时，则取属性的初始值 initial value（该值在该属性的概述里被指定）。

有继承性的属性：
（1）字体系列属性
font、font-family、font-weight、font-size、font-style、font-variant、font-stretch、font-size-adjust
（2）文本系列属性
text-indent、text-align、text-shadow、line-height、word-spacing、letter-spacing、
text-transform、direction、color
（3）表格布局属性
caption-side border-collapse empty-cells
（4）列表属性
list-style-type、list-style-image、list-style-position、list-style
（5）光标属性
cursor
（6）元素可见性
visibility
（7）还有一些不常用的；speak，page，设置嵌套引用的引号类型 quotes 等属性

注意：当一个属性不是继承属性时，可以使用 inherit 关键字指定一个属性应从父元素继承它的值，inherit 关键字用于显式地指定继承性，可用于任何继承性/非继承性属性。

#### CSS 优先级算法如何计算？

> 一个常用的表示优先级的方式是用数值形式来标记，通常用逗号隔开每个数。判断优先级时，首先我们会判断一条属性声明是否有权重，也就是是否在声明后面加上了!important。一条声明如果加上了权重，那么它的优先级就是最高的，前提是它之后不再出现相同权重的声明。如果权重相同，我们则需要去比较匹配规则的特殊性。

> 一条匹配规则一般由多个选择器组成，一条规则的特殊性由组成它的选择器的特殊性累加而成。选择器的特殊性可以分为四个等级，第一个等级是行内样式，为 1000，第二个等级是 id 选择器，为 0100，第三个等级是类选择器、伪类选择器和属性选择器，为 0010，第四个等级是元素选择器和伪元素选择器，为 0001。规则中每出现一个选择器，就将它的特殊性进行叠加，这个叠加只限于对应的等级的叠加，不会产生进位。选择器特殊性值的比较是从左向右排序的，也就是说以 1 开头的特殊性值比所有以 0 开头的特殊性值要大。

> 比如说特殊性值为 1000 的的规则优先级就要比特殊性值为 0999 的规则高。如果两个规则的特殊性值相等的时候，那么就会根据它们引入的顺序，后出现的规则的优先级最高。

[这次彻底搞定 CSS 层叠、优先级！](https://juejin.cn/post/7125759307761025060)《深入浅出 CSS》 1.1.2 理解优先级

> CSS 的优先级是根据样式声明的特殊性值来判断的。

选择器的特殊性值分为四个等级，如下：

（1）标签内选择符 x,0,0,0
（2）ID 选择符 0,x,0,0
（3）class 选择符/属性选择符/伪类选择符 0,0,x,0
（4）元素和伪元素选择符 0,0,0,x

计算方法：

（1）每个等级的初始值为 0
（2）每个等级的叠加为选择器出现的次数相加
（3）不可进位，比如 0,99,99,99
（4）依次表示为：0,0,0,0
（5）每个等级计数之间没关联
（6）等级判断从左向右，如果某一位数值相同，则判断下一位数值
（7）如果两个优先级相同，则最后出现的优先级高，!important 也适用
（8）通配符选择器的特殊性值为：0,0,0,0
（9）继承样式优先级最低，通配符样式优先级高于继承样式
（10）!important（权重），它没有特殊性值，但它的优先级是最高的，为了方便记忆，可以认为它的特殊性值为 1,0,0,0,0。

计算实例：

（1）#demo a{color: orange;}/_特殊性值：0,1,0,1_/
（2）div#demo a{color: red;}/_特殊性值：0,1,0,2_/

注意：
（1）样式应用时，css 会先查看规则的权重（!important），加了权重的优先级最高，当权重相同的时候，会比较规则的特殊性。

（2）特殊性值越大的声明优先级越高。

（3）相同特殊性值的声明，根据样式引入的顺序，后声明的规则优先级高（距离元素出现最近的）

(4) 部分浏览器由于字节溢出问题出现的进位表现不做考虑

#### 关于伪类 LVFHA 的解释?

a 标签有五种状态：链接访问前、链接访问后、链接获得焦点时、鼠标滑过、激活，分别对应五种伪类:link、:visited、：focus、:hover、:active；

这些选择符的特指度相等,都是 0,0,1,0。因为它们的显式权重、来源和特指度都一样，所以最后一个匹配的规则将胜出。因此顺序很重要。

链接状态要么已访问，要么未访问，因此:link 和:visited 总是会把其他的规则覆盖掉。所以得放其他规则的前面，因为状态不同，所以:link 和:visited 可以不考虑顺序。

其他 3 个样式必须按 FHA 的顺序书写了。当 active 时（点击），鼠标通常其实还在 hover 状态，所以是两者都满足的情况，在两条规则 specificity 一样的情况下，color 取值就会是后写的 hover 里的值，也就意味着你给 active 设定的 color 并未生效。

当然如果把伪类串起来书写就不用考虑规则的前后顺序了。但是在不同状态写多个伪类时要考虑顺序（FHA）。

《深入浅出 CSS》 1.1.3 源码顺序 《CSS 权威指南第 4 版》3.3.3 按前后位置排序

#### CSS3 新增伪类有那些？

伪类选择器用于选中处于某个特定状态的元素。这种状态可能是由于用户交互，也可能是由
于元素相对于其父级或兄弟元素的位置。伪类选择器始终以一个冒号（:）开始。优先级等于一个类选择器（0,1,0）。
 :first-child——匹配的元素是其父元素的第一个子元素。

 :last-child——匹配的元素是其父元素的最后一个子元素。

 :only-child——匹配的元素是其父元素的唯一一个子元素（没有兄弟元素）。

 :nth-child(an+b)——匹配的元素在兄弟元素中间有特定的位置

 :nth-last-child(an+b)——类似于:nth-child()，但不是从第一个元素往后数，而
是从最后一个元素往前数。括号内的公式与:nth-child()里的公式的规则相同。

 :first-of-type——类似于:first-child，但不是根据在全部子元素中的位置查找元
素，而是根据拥有相同标签名的子元素中的数字顺序查找第一个元素。

 :last-of-type——匹配每种类型的最后一个子元素。

 :only-of-type——该选择器匹配的元素是满足该类型的唯一一个子元素。

 :nth-of-type(an+b)——根据目标元素在特定类型下的数字顺序以及特定公式选择元
素，类似于:nth-child。

 nth-last-of-type(an+b)——根据元素类型以及特定公式选择元素，从其中最后一个
元素往前算，类似于:nth-last-child。

 :not(`<selector>`)——匹配的元素不匹配括号内的选择器。括号内的选择器必须是基
础选择器，它只能指定元素本身，无法用于排除祖先元素，同时不允许包含另一个排除
选择器。

 :empty——匹配的元素必须没有子元素。注意，如果元素包含空格就无法由该选择器
匹配，因为空格在 DOM 中属于文本节点。写作本书时，W3C 正在考虑:blank 伪类选择
器，它跟:empty 的行为类似，但是能选中仅包含空格的元素，目前还没有浏览器支
持:blank。

 :focus——匹配通过鼠标点击、触摸屏幕或者按 Tab 键导航而获得焦点的元素。

 :hover——匹配鼠标指针正悬停在其上方的元素。

 :root——匹配文档根元素。对 HTML 来说，这是 `<html>`元素，但是 CSS 还可以应用到
XML 或者类似于 XML 的文档上，比如 SVG。在这些情况下，该选择器的选择范围更广。
还有一些表单域相关的伪类选择器。其中一些是在选择器 Level4 版本的规范中提出或者修
订的，因此在 IE10 以及其他一些浏览器中不受支持。请在 Can I Use 网站上查看兼容情况。

 :disabled——匹配已禁用的元素，包括 input、select 以及 button 元素。

 :enabled——匹配已启用的元素，即那些能够被激活或者接受焦点的元素。

 :checked——匹配已经针对选定的复选框、单选按钮或选择框选项。

 :invalid——根据输入类型中的定义，匹配有非法输入值的元素。例如，当 `<input  type="email">`的值不是一个合法的邮箱地址时，该元素会被匹配（Level4）。

 :valid——匹配有合法值的元素（Level4）。

 :required——匹配设置了 required 属性的元素（Level4）。

 :optional——匹配没有设置 required 属性的元素（Level4）。以上并未列出全部伪类
选择器。请参阅 MDN 文档 Pseudo-classes，查看 MDN 上的完整清单

《深入浅出 CSS》 附录 A 　选择器 A.3 伪类选择器

#### 如何居中 div？

一般常见的几种居中的方法有：

> 对于宽高固定的元素

（1）我们可以利用 margin:0 auto 来实现元素的水平居中。

（2）利用绝对定位，设置四个方向的值都为 0，并将 margin 设置为 auto，由于宽高固定，因此对应方向实现平分，可以实现水平和垂直方向上的居中。

（3）利用绝对定位，先将元素的左上角通过 top:50%和 left:50%定位到页面的中心，然后再通过 margin 负值来调整元素的中心点到页面的中心。

> 对于宽高不定的元素，下面的后面两种方法，可以实现元素的垂直和水平的居中。

**transform 移动的是什么？**

（4）利用绝对定位，先将元素的左上角通过 top:50%和 left:50%定位到页面的中心，然后再通过 translate 来调整元素的中心点到页面的中心。

（5）使用 flex 布局，通过 align-items:center 和 justify-content:center 设置容器的垂直和水平方向上为居中对齐，然后它的子元素也可以实现垂直和水平的居中。

````css
-水平居中：给div设置一个宽度，然后添加margin: 0 auto 属性 ```css div {
  width: 200px;
  margin: 0 auto;
}
````

-水平居中，利用 text-align:center 实现

```css
.container {
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 0;
}
.box {
  display: inline-block;
  width: 500px;
  height: 400px;
  background-color: pink;
}
```

-让绝对定位的 div 居中

```css
div {
  position: absolute;
  width: 300px;
  height: 300px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: pink; /*方便看效果*/
}
```

-水平垂直居中一

```css
/*确定容器的宽高宽500高300的层设置层的外边距 */
div {
  position: absolute; /*绝对定位*/
  width: 500px;
  height: 300px;
  top: 50%;
  left: 50%;
  margin: -150px 0 0 -250px; /*外边距为自身宽高的一半*/
      background-color: pink; /*方便看效果*/
}
```

-水平垂直居中二

```css
/*未知容器的宽高，利用`transform`属性*/
div {
  position: absolute; /*相对定位或绝对定位均可*/
  width: 500px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: pink; /*方便看效果*/
}
```

-水平垂直居中三

```css
/*利用flex布局实际使用时应考虑兼容性*/
.container {
  display: flex;
  align-items: center; /*垂直居中*/
  justify-content: center; /*水平居中*/
}
.containerdiv {
  width: 100px;
  height: 100px;
  background-color: pink; /*方便看效果*/
}
```

-水平垂直居中四

```css
/*利用text-align:center和vertical-align:middle属性*/
.container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 0;
  white-space: nowrap;
  overflow: auto;
}
.container::after {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.box {
  display: inline-block;
  width: 500px;
  height: 400px;
  background-color: pink;
  white-space: normal;
  vertical-align: middle;
}
```

《深入浅出 CSS》3.2.4 垂直居中内容

[面试官：用 CSS 实现垂直居中的方法有哪些？](https://www.bilibili.com/video/BV1ne4y137MY/?spm_id_from=333.788&vd_source=037b856144283671f89f562ed7eeb263)

#### display 有哪些值？说明他们的作用。

| **属性值** | **作用**                                             |
| ---------------- | ---------------------------------------------------------- |
| none             | 元素不显示，并且会从文档流中移除。                         |
| block            | 块类型。默认宽度为父元素宽度，可设置宽高，换行显示。       |
| inline           | 行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。 |
| inline-block     | 默认宽度为内容宽度，可以设置宽高，同行显示。               |
| list-item        | 像块类型元素一样显示，并添加样式列表标记。                 |
| table            | 此元素会作为块级表格来显示。                               |
| inherit          | 规定应该从父元素继承 display 属性的值。                    |

值 描述
none 此元素不会被显示。
block 此元素将显示为块级元素，此元素前后会带有换行符。
inline 默认。此元素会被显示为内联元素，元素前后没有换行符。
inline-block 行内块元素。（CSS2.1 新增的值）
list-item 此元素会作为列表显示。
run-in 此元素会根据上下文作为块级元素或内联元素显示。
compact CSS 中有值 compact，不过由于缺乏广泛支持，已经从 CSS2.1 中删除。
marker CSS 中有值 marker，不过由于缺乏广泛支持，已经从 CSS2.1 中删除。
table 此元素会作为块级表格来显示（类似 `<table>`），表格前后带有换行符。
inline-table 此元素会作为内联表格来显示（类似 `<table>`），表格前后没有换行符。
table-row-group 此元素会作为一个或多个行的分组来显示（类似 `<tbody>`）。
table-header-group 此元素会作为一个或多个行的分组来显示（类似 `<thead>`）。
table-footer-group 此元素会作为一个或多个行的分组来显示（类似 `<tfoot>`）。
table-row 此元素会作为一个表格行显示（类似 `<tr>`）。
table-column-group 此元素会作为一个或多个列的分组来显示（类似 ` <colgroup>`）。
table-column 此元素会作为一个单元格列显示（类似 `<col>`）
table-cell 此元素会作为一个表格单元格显示（类似 `<td>` 和 `<th>`）
table-caption 此元素会作为一个表格标题显示（类似 ` <caption>`）
inherit 规定应该从父元素继承 display 属性的值。
flex flex 布局
grid grid 布局

[MDN display](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)、[w3c display](https://www.w3cschool.cn/cssref/pr-class-display.html)、[菜鸟教程 display](https://www.runoob.com/cssref/pr-class-display.html)

#### css 最常见的 4 种定位方式，具体解释一下不同？

[Position](https://www.w3schools.cn/css/css_positioning.asp)

#### 一段简单的 css 代码考核：position：fixed；top：500px；right：0px；浏览器宽 1000，高 300，判断元素能否正常在浏览器中显示。追问上一个问题，如果浏览器高 500，显示情况是怎样的？

根据已知信息，这段 CSS 代码可以使元素相对于浏览器窗口进行定位，位置在窗口的右上角。具体来说：

- `position: fixed;`  表示使用固定定位，即不受文档流的影响。
- `top: 500px;`  表示距离窗口顶部的距离为 500 像素。
- `right: 0px;`  表示距离窗口右边的距离为 0 像素。

根据题目中的信息，浏览器宽度是 1000 像素，高度是 300 像素。也就是说，浏览器的宽度可以完全容纳这个元素，但是高度却无法容纳，因为元素距离窗口顶部的距离是 500 像素，大于了浏览器窗口的高度 300 像素，所以这个元素不能完全在浏览器窗口中正常显示。

综上所述，这个元素能在宽度为 1000 像素，高度为 300 像素的浏览器窗口中显示，但是由于位置超出了窗口的边界，因此无法完全显示。如果需要让元素完全显示，可以将 `top` 属性的值设为比 300 像素小的值。

根据给出的 CSS 代码 `position: fixed; top: 500px; right: 0px;`，这个元素的定位方式是固定定位，定位顶部距离为 500 像素，定位右边距离为 0 像素，也就是贴着浏览器窗口右边显示。

考虑浏览器宽度为 1000 像素，那么这个元素的宽度应该是多少呢？根据以上代码，这个元素的右边距离为 0 像素，因此它的左边距离应该是 1000 - 元素宽度。同时由于这个元素被设置为固定定位，它会脱离文档流，不占据正常的布局空间，因此它的实际宽度可以大于浏览器可视区域宽度。

综上所述，当浏览器宽度为 1000 像素时，这个元素能够正常在浏览器中显示，它的宽度可以超过 1000 像素而不会影响布局，并且它会紧贴浏览器窗口右侧，距离窗口顶部 500 像素。

#### position 的值 relative 和 absolute 定位原点是？

relative 定位的元素，是相对于元素本身的正常位置来进行定位的。
absolute 定位的元素，是相对于它的第一个 position 值不为 static 的祖先元素的 padding box 来进行定位的。这句话我们可以这样来理解，我们首先需要找到绝对定位元素的一个 position 的值不为 static 的祖先元素，然后相对于这个祖先元素的 padding box 来定位，也就是说在计算定位距离的时候，padding 的值也要算进去。

《深入浅出 CSS》 第 7 章 定位和层叠上下文

1.对非根元素来说,如果 position 属性的值是 relative 或 static,其容纳块由最近的块级、单元格或行内块级祖辈元素框体的内容边界划定。

2.对非根元素来说，如果 position 属性的值是 absolute，其容纳块是 position 属性的值不是 static 的最近的祖辈元素(任何类型）。

① 如果祖辈元素是块级元素,容纳块是那个元素的内容距边界，即由边框限定的区域。
② 如果祖辈元素是行内元素,容纳块是祖辈元素的内容边界。
在由左至右书写的语言中，容纳块的顶边和左边是祖辈元素中第一个框体的内容边界的顶边和左边，底边和右边是最后一个框体的内容边界的底边和右边。
在从右向左书写的语言中，容纳块的右边界是第一个框体内容区的右边界，左边界是最后一个框体内容区的左边界;顶边和底边与前述情况一样。
③ 如果没有祖辈元素,元素的容纳块是初始容纳块。

#### CSS3 有哪些新特性？（根据项目回答）

新增各种 CSS 选择器 （:not(.input)：所有 class 不是“input”的节点）
圆角 （border-radius:8px）
多列布局 （multi-column layout）
阴影和反射 （Shadow\Reflect）
文字特效 （text-shadow）
文字渲染 （Text-decoration）
线性渐变 （gradient）
旋转 （transform）
缩放，定位，倾斜，动画，多背景
例如：transform:\scale(0.85,0.90)\translate(0px,-30px)\skew(-9deg,0deg)\Animation:

#### 请解释一下 CSS3 的 Flex box（弹性盒布局模型），以及适用场景？说一下 flex，flex:1，以及其他 flex 属性尽可能多，接着问 grow 和 shrink 代表什么? flex 布局 有哪些属性？

> flex 布局是 CSS3 新增的一种布局方式，我们可以通过将一个元素的 display 属性值设置为 flex 从而使它成为一个 flex 容器，它的所有子元素都会成为弹性子元素。

> 一个容器默认有两条轴，一个是水平的主轴，一个是与主轴垂直的交叉轴。我们可以使用 flex-direction 来指定主轴的方向。

> 我们可以使用 justify-content 来指定元素在主轴上的排列方式，使用 align-items 来指定元素在交叉轴上的排列方式。
> 还可以使用 flex-wrap 来规定当一行排列不下时的换行方式。
> 对于容器中的弹性子元素，我们可以使用 order 属性来指定弹性子元素的排列顺序。
> 还可以使用 flex-grow 来指定当排列空间有剩余的时候，弹性子元素的放大比例。
> 还可以使用 flex-shrink 来指定当排列空间不足时，弹性子元素的缩小比例。

> flex 属性是 flex-grow，flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。

> align-self 属性允许单个子元素有与其他子元素不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。

《深入浅出 CSS》 第五章 Flexbox

#### grid 布局是什么? ，和 flex 布局有什么区别，他们的应用场景你会怎么选?

[13 分钟彻底弄懂 CSS *Grid*基础*布局* / CSS _Grid_ 入门教程](https://www.bilibili.com/video/BV1w84y1r7X8/?spm_id_from=333.337.search-card.all.click)

[前端进阶之旅](https://interview.poetries.top/docs/excellent-docs/2-CSS%E6%A8%A1%E5%9D%97.html#_38-%E4%BB%8B%E7%BB%8D%E4%B8%80%E4%B8%8Bgrid%E7%BD%91%E6%A0%BC%E5%B8%83%E5%B1%80)

#### 用纯 CSS 创建一个三角形的原理是什么？

> 采用的是相邻边框连接处的均分原理。将元素的宽高设为 0，只设置 border，把任意三条边隐藏掉（颜色设为 transparent），剩下的就是一个三角形。

```
#demo {
width: 0;
height: 0;
border-width: 20px;
border-style: solid;
border-color: transparent transparent red transparent;
// border:20px solid transparent transparent red transparent;
}
```

《深入浅出 CSS》 7.3.2 创建一个 CSS 三角形

#### 一个满屏品字布局如何设计?

```css
- 浮动布局 * {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%; /*此设置非常关键，因为默认的body，
HTML高度为0，所以后面设置的div的高度无法用百分比显示*/
}

.header {
  height: 50%; /*此步结合html,body高度为100%，解决元素相对窗口的定位问题*/
  width: 50%;
  background: #ccc;
  margin: 0 auto;
}

.main {
  width: 100%;
  height: 50%;
  background: #ddd;
}

.main .left,
.main .right {
  float: left; /*采用float方式，对元素进行左右定位*/
  width: 50%; /*此步解决元素相对窗口的定位问题*/
  height: 100%; /*此步解决元素相对窗口的定位问题*/
  background: yellow;
}

.main .right {
  background: green;
}

- 定位布局 body {
  height: 1200px;
}
.main {
  position: fixed; /*此步解决元素相对窗口的定位问题*/
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.wrapper-up {
  height: 50%;
}

.wrapper-down {
  height: 50%;
  position: relative;
}
.div-square-up {
  width: 50%;
  margin: 0 auto;
  border: 2px solid red;
  height: 96%;
  box-sizing: border-box;
}

.div-square-left {
  position: absolute; /*此步解决元素左右定位问题*/
  left: 0;
  width: 48%;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid red;
}

.div-square-right {
  position: absolute; /*此步解决元素左右定位问题*/
  right: 0;
  width: 48%;
  height: 100%;
  border: 2px solid red;
  box-sizing: border-box;
}
```

《深入浅出 CSS》 第 4 章 理解浮动

#### CSS 多列等高如何实现？

info
（1）利用 padding-bottom|margin-bottom 正负值相抵，不会影响页面布局的特点。设置父容器设置超出隐藏（overflow:
hidden），这样父容器的高度就还是它里面的列没有设定 padding-bottom 时的高度，当它里面的任一列高度增加了，则
父容器的高度被撑到里面最高那列的高度，其他比这列矮的列会用它们的 padding-bottom 补偿这部分高度差。

（2）利用 table-cell 所有单元格高度都相等的特性，来实现多列等高。

（3）利用 flex 布局中项目 align-items 属性默认为 stretch，如果项目未设置高度或设为 auto，将占满整个容器的高度
的特性，来实现多列等高。

《深入浅出 CSS》 3.2.2 百分比高度的备选方案

```css
-
  CSS
  表格布局
  （table
  + table-cell
  + border-spacing
  + margin负外边距）
  .wrapper {
  margin-left: -1.5em;
  margin-right: -1.5em;
}
.container {
  display: table;
  width: 100%;
  border-spacing: 1.5em 0;
}
.main {
  display: table-cell;
  width: 70%;
  background-color: coral;
}
.sidebar {
  display: table-cell;
  width: 30%;
  padding: 1.5em;
  background-color: red;
}

-
  Flexbox
  （如果你不用支持
  IE9
  及其以下的浏览器，建议使用
  Flexbox
  而不是表格布局）
  .container {
  display: flex;
}

.main {
  width: 70%;
  background-color: orange;
}

.sidebar {
  width: 30%;
  margin-left: 1.5em;
  background-color: skyblue;
}
```

#### 经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用 hack 的技巧？

```markdown
（1）png24 位的图片在 iE6 浏览器上出现背景
解决方案：做成 PNG8，也可以引用一段脚本处理。
（2）浏览器默认的 margin 和 padding 不同
解决方案：加一个全局的*{margin:0;padding:0;}来统一。
（3）IE6 双边距 bug：在 IE6 下，如果对元素设置了浮动，同时又设置了 margin-left 或 margin-right，margin 值会加倍。
#box{float:left;width:10px;margin:0 0 0 10px;}
这种情况之下 IE 会产生 20px 的距离
解决方案：在 float 的标签样式控制中加入*display:inline;将其转化为行内属性。(*这个符号只有 ie6 会识别)
（4）渐进识别的方式，从总体中逐渐排除局部。
首先，巧妙的使用"\9"这一标记，将 IE 游览器从所有情况中分离出来。
接着，再次使用"+"将 IE8 和 IE7、IE6 分离开来，这样 IE8 已经独立识别。
.bb{
background-color:#f1ee18;/*所有识别*/
.background-color:#00deff\9;/*IE6、7、8 识别*/
+background-color:#a200ff;/*IE6、7 识别*/
\_background-color:#1e0bd1;/*IE6 识别\*/
}
（5）IE 下，可以使用获取常规属性的方法来获取自定义属性，也可以使用 getAttribute()获取自定义
属性；Firefox 下，只能使用 getAttribute()获取自定义属性
解决方法：统一通过 getAttribute()获取自定义属性。
（6）IE 下，event 对象有 x、y 属性，但是没有 pageX、pageY 属性;Firefox 下，event 对象有
pageX、pageY 属性，但是没有 x、y 属性。
解决方法：（条件注释）缺点是在 IE 浏览器下可能会增加额外的 HTTP 请求数。
（7）Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示
解决方法： 1.可通过加入 CSS 属性-webkit-text-size-adjust:none;解决。但是，在 chrome
更新到 27 版本之后就不可以用了。 2.还可以使用-webkit-transform:scale(0.5);注意-webkit-transform:scale(0.75);
收缩的是整个 span 的大小，这时候，必须要将 span 转换成块元素，可以使用 display：block/inline-block/...；
（8）超链接访问过后 hover 样式就不出现了，被点击访问过的超链接样式不再具有 hover 和 active 了
解决方法：改变 CSS 属性的排列顺序 L-V-H-A
（9）怪异模式问题：漏写 DTD 声明，Firefox 仍然会按照标准模式来解析网页，但在 IE 中会触发怪异模
式。为避免怪异模式给我们带来不必要的麻烦，最好养成书写 DTD 声明的好习惯。
```

#### li 与 li 之间有看不见的空白间隔是什么原因引起的？有什么解决办法？

info
浏览器会把 inline 元素间的空白字符（空格、换行、Tab 等）渲染成一个空格。而为了美观。我们通常是一个 `<li>`放在一行，
这导致 `<li>`换行后产生换行字符，它变成一个空格，占用了一个字符的宽度。
解决办法：
（1）为 `<li>`设置 float:left。不足：有些容器是不能设置浮动，如左右切换的焦点图等。
（2）将所有 `<li>`写在同一行。不足：代码不美观。
（3）将 `<ul>`内的字符尺寸直接设为 0，即 font-size:0。不足：`<ul>`中的其他字符尺寸也被设为 0，需要额外重新设定其他
字符尺寸，且在 Safari 浏览器依然会出现空白间隔。
（4）消除 `<ul>`的字符间隔 letter-spacing:-8px，不足：这也设置了 `<li>`内的字符间隔，因此需要将 `<li>`内的字符
间隔设为默认 letter-spacing:normal。

[《li 与 li 之间有看不见的空白间隔是什么原因引起的？》](https://blog.csdn.net/sjinsa/article/details/70919546)

#### 为什么要初始化 CSS 样式？

info -因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对 CSS 初始化往往会出现浏览器之间的页面显示差异。 -当然，初始化样式会对 SEO 有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。
最简单的初始化方法：\*{padding:0;margin:0;}（强烈不建议）
淘宝的样式初始化代码：
body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend
,button,input,textarea,th,td{margin:0;padding:0;}
body,button,input,select,textarea{font:12px/1.5tahoma,arial,\5b8b\4f53;}
h1,h2,h3,h4,h5,h6{font-size:100%;}
address,cite,dfn,em,var{font-style:normal;}
code,kbd,pre,samp{font-family:couriernew,courier,monospace;}
small{font-size:12px;}
ul,ol{list-style:none;}
a{text-decoration:none;}
a:hover{text-decoration:underline;}
sup{vertical-align:text-top;}
sub{vertical-align:text-bottom;}
legend{color:#000;}
fieldset,img{border:0;}
button,input,select,textarea{font-size:100%;}
table{border-collapse:collapse;border-spacing:0;}

#### 什么是包含块，对于包含块的理解?

```
一般而言，容纳块指包含另一个元素的框体，但是对定位元素来说,容纳块完全取决于定位类型。（包含块也叫容纳块）

对非根元素来说,如果position属性的值是relative或static,其容纳块由最近的块级、单元格或行内块级祖辈元素框体的内容边界划定。

对非根元素来说，如果position属性的值是 absolute，其容纳块是position属性的值不是static的最近的祖辈元素(任何类型）。

    ①如果祖辈元素是块级元素,容纳块是那个元素的内边距边界，即由边框限定的区域。
    ②如果祖辈元素是行内元素,容纳块是祖辈元素的内容边界。
        1.在由左至右书写的语言中，容纳块的顶边和左边是祖辈元素中第一个框体的内容边界的顶边和左边，底边和右边是最后一个框体的内容边界的底边和右边。
        2.在从右向左书写的语言中，容纳块的右边界是第一个框体内容区的右边界，左边界是最后一个框体内容区的左边界;顶边和底边与前述情况一样。
    ③如果没有祖辈元素,元素的容纳块是初始容纳块。

对非根元素来说，如果元素position:fixed，则“包含块”是“初始包含块”。

对粘滞定位的元素来说，容纳块的边界由粘滞限定矩形确定。粘滞定位就发生在这个矩形中

另外，定位的元素可能位于容纳块外部。浮动元素可以使用负外边距移到父元素的内容区外部
```

《CSS 权威指南》 11.1.2 容纳块

#### CSS 里的 visibility 属性有个 collapse 属性值是干嘛用的？在不同浏览器下以后什么区别？

```
visbility: collapse在渲染表格时使用
collapse与用在非表格元素上的hidden具有相同的作用。
但例外的是，如果这个元素是table相关的元素，
例如table行，table group，table列，table column group，
它的表现却跟display: none一样，也就是说，它们占用的空间也会释放。

在不同浏览器下的区别：

在谷歌浏览器里，使用collapse值和使用hidden值没有什么区别。

在火狐浏览器、Opera和IE11里，使用collapse值的效果就如它的字面意思：table的行会消失，它的下面一行会补充它的位
置。
```

[《CSS 里的 visibility 属性有个鲜为人知的属性值：collapse》](http://www.webhek.com/post/visibility-collapse.html)
《CSS 权威指南》 11.5 元素的可见性

#### width:auto 和 width:100%的区别

```
一般而言
1、width:100%表示子元素的宽度和父元素的宽度相等，不包括子元素设置的内外边距和边框的值，
即子元素的宽度等于父元素content的宽度

2、width：auto
表示子元素的宽度+内外边距+边框 等于 父元素的宽度

width:100%会使元素box的宽度等于父元素的content box的宽度。
width:auto会使元素撑满整个父元素，margin、border、padding、content区域会自动分配水平空间。
```

#### 绝对定位元素与非绝对定位元素的百分比计算的区别

```
绝对定位元素的宽高百分比是相对于临近的position不为static的祖先元素的padding box来计算的。

非绝对定位元素的宽高百分比则是相对于父元素的content box来计算的。
```

#### 简单介绍使用图片 base64 编码的优点和缺点。

```
base64编码是一种图片处理格式，通过特定的算法将图片编码成一长串字符串，在页面上显示的时候，可以用该字符串来代替图片的
url属性。

使用base64的优点是：

（1）减少一个图片的HTTP请求

使用base64的缺点是：

（1）根据base64的编码原理，编码后的大小会比原文件大小大1/3，如果把大图片编码到html/css中，不仅会造成文件体
积的增加，影响文件的加载速度，还会增加浏览器对html或css文件解析渲染的时间。

（2）使用base64无法直接缓存，要缓存只能缓存包含base64的文件，比如HTML或者CSS，这相比域直接缓存图片的效果要
差很多。

（3）兼容性的问题，ie8以前的浏览器不支持。

一般一些网站的小图标可以使用base64图片来引入。
```

详细资料可以参考： [《玩转图片 base64 编码》](https://www.cnblogs.com/coco1s/p/4375774.html) [《前端开发中，使用 base64 图片的弊端是什么？》](https://www.zhihu.com/question/31155574) [《小 tip:base64:URL 背景图片与 web 页面性能优化》](https://www.zhangxinxu.com/wordpress/2012/04/base64-url-image-%E5%9B%BE%E7%89%87-%E9%A1%B5%E9%9D%A2%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/)

#### 'display'、'position'和'float'的相互关系？

```
（1）首先我们判断display属性是否为none，如果为none，则position和float属性的值不影响元素最后的表现。

（2）然后判断position的值是否为absolute或者fixed，如果是，则float属性失效，并且display的值应该被
设置为table或者block，具体转换需要看初始转换值。

（3）如果position的值不为absolute或者fixed，则判断float属性的值是否为none，如果不是，则display
的值则按上面的规则转换。注意，如果position的值为relative并且float属性的值存在，则relative相对
于浮动后的最终位置定位。

（4）如果float的值为none，则判断元素是否为根元素，如果是根元素则display属性按照上面的规则转换，如果不是，
则保持指定的display属性值不变。

总的来说，可以把它看作是一个类似优先级的机制，"position:absolute"和"position:fixed"优先级最高，有它存在
的时候，浮动不起作用，'display'的值也需要调整；其次，元素的'float'特性的值不是"none"的时候或者它是根元素
的时候，调整'display'的值；最后，非根元素，并且非浮动元素，并且非绝对定位的元素，'display'特性值同设置值。
```

#### margin 重叠问题的理解。

```
margin重叠指的是在垂直方向上，两个相邻元素的margin发生重叠的情况。

一般来说可以分为四种情形：

第一种是相邻兄弟元素的marin-bottom和margin-top的值发生重叠。这种情况下我们可以通过设置其中一个元素为BFC
来解决。

第二种是父元素的margin-top和子元素的margin-top发生重叠。它们发生重叠是因为它们是相邻的，所以我们可以通过这
一点来解决这个问题。我们可以为父元素设置border-top、padding-top值来分隔它们，当然我们也可以将父元素设置为BFC
来解决。

第三种是高度为auto的父元素的margin-bottom和子元素的margin-bottom发生重叠。它们发生重叠一个是因为它们相
邻，一个是因为父元素的高度不固定。因此我们可以为父元素设置border-bottom、padding-bottom来分隔它们，也可以为
父元素设置一个高度，max-height和min-height也能解决这个问题。当然将父元素设置为BFC是最简单的方法。

第四种情况，是没有内容的元素，自身的margin-top和margin-bottom发生的重叠。我们可以通过为其设置border、pa
dding或者高度来解决这个问题。
```

《CSS 权威指南》8.5.4 外边距折叠 《深入解析 CSS》4.2 容器折叠和清除浮动

```
块级元素的上外边距（margin-top）与下外边距（margin-bottom）有时会合并为单个外边距，这样的现象称为“margin合
并”。

产生折叠的必备条件：margin必须是邻接的!

而根据w3c规范，两个margin是邻接的必须满足以下条件：

•必须是处于常规文档流（非float和绝对定位）的块级盒子，并且处于同一个BFC当中。
•没有线盒，没有空隙，没有padding和border将他们分隔开
•都属于垂直方向上相邻的外边距，可以是下面任意一种情况
•元素的margin-top与其第一个常规文档流的子元素的margin-top
•元素的margin-bottom与其下一个常规文档流的兄弟元素的margin-top
•height为auto的元素的margin-bottom与其最后一个常规文档流的子元素的margin-bottom
•高度为0并且最小高度也为0，不包含常规文档流的子元素，并且自身没有建立新的BFC的元素的margin-top
和margin-bottom


margin合并的3种场景：

（1）相邻兄弟元素margin合并。

解决办法：
•设置块状格式化上下文元素（BFC）

（2）父级和第一个/最后一个子元素的margin合并。

解决办法：

对于margin-top合并，可以进行如下操作（满足一个条件即可）：
•父元素设置为块状格式化上下文元素；
•父元素设置border-top值；
•父元素设置padding-top值；
•父元素和第一个子元素之间添加内联元素进行分隔。

对于margin-bottom合并，可以进行如下操作（满足一个条件即可）：
•父元素设置为块状格式化上下文元素；
•父元素设置border-bottom值；
•父元素设置padding-bottom值；
•父元素和最后一个子元素之间添加内联元素进行分隔；
•父元素设置height、min-height或max-height。

（3）空块级元素的margin合并。

解决办法：
•设置垂直方向的border；
•设置垂直方向的padding；
•里面添加内联元素（直接Space键空格是没用的）；
•设置height或者min-height。
```

#### 对 BFC 规范（块级格式化上下文：block formatting context）的理解？如何生成一个 BFC？BFC 里面元素的排列顺序？

[P80080 BFC](https://www.bilibili.com/video/BV1G3411k7iV?p=80)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1666859704014-966b69e4-7ed9-4373-9987-08ffa4e77c2e.png#averageHue=%23f7f7f7&clientId=ucf147f61-4011-4&from=paste&height=303&id=u225601ec&name=image.png&originHeight=454&originWidth=1094&originalType=binary&ratio=1&rotation=0&showTitle=false&size=160098&status=done&style=none&taskId=u8a708c00-11b6-4c99-bbe2-b9c32c12b8d&title=&width=729.3333333333334)

块级格式化上下文（block formatting context，BFC）。BFC 是网页的一块区域，元素基于这块区域布局。BFC 本身是环绕文档流的一部分，但它将内部的内容与外部的上下文隔离开。这种隔离为创建 BFC 的元素做出了以下 3 件事情
(1) 包含了内部所有元素的上下外边距。它们不会跟 BFC 外面的元素产生外边距折叠。
(2) 包含了内部所有的浮动元素。
(3) 不会跟 BFC 外面的浮动元素重叠。
BFC 里的内容不会跟外部的元素重叠或者相互影响。如果给元素增加 clear 属性，它只会清除自身所在 BFC 内的浮动。如果强制给一个元素生成一个新的 BFC，它不会跟其他 BFC 重叠。

创建 BFC

（1）根元素或包含根元素的元素
（2）浮动元素 float ＝ left|right 或 inherit（≠none）
（3）绝对定位元素 position ＝ absolute 或 fixed
（4）display ＝ inline-block|flex|inline-flex|table-cell 或 table-caption
（5）overflow ＝ hidden|auto 或 scroll(≠visible)
（6）display：inline-block、table-cell、table-caption、flex、inline-flex、grid 或 inline-grid。
拥有这些属性的元素称为块级容器（block container）。

#### IFC 是什么？

[《[译]:BFC 与 IFC》](https://segmentfault.com/a/1190000004466536#articleHeader5) [《BFC 和 IFC 的理解（布局）》](https://blog.csdn.net/paintandraw/article/details/80401741)[P81081 IFC](https://www.bilibili.com/video/BV1G3411k7iV?p=81)《深入解析 CSS》
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1666858174579-f288cbdd-6694-47d2-944f-96076e87e0e0.png#averageHue=%23f8f8f8&clientId=ucf147f61-4011-4&from=paste&height=344&id=u8b46800e&name=image.png&originHeight=516&originWidth=1089&originalType=binary&ratio=1&rotation=0&showTitle=false&size=176795&status=done&style=none&taskId=u669d002f-c8a9-404e-8729-40513c8fecc&title=&width=726)

#### 请解释一下为什么需要清除浮动？清除浮动的方式

浮动元素是 CSS 中的一种布局机制，可以使元素脱离文档流并沿着周围的元素流动，常用于实现文字环绕图片、多栏布局等效果。

然而，当浮动元素的高度不够撑开父元素（或祖先元素）时，就会出现“高度塌陷”的问题，即父元素（或祖先元素）无法根据子元素的高度自动撑开，导致页面出现布局混乱和内容重叠的现象。这时就需要清除浮动。

清除浮动的方式有很多，以下是几个常用的方法：

1. **使用空元素清除浮动**：在浮动元素的后面添加一个具有清除浮动效果的空元素，如下所示：

```html
<div class="parent">
  <div class="float-left">浮动元素</div>
  <div class="clear-float"></div>
</div>

.clear-float { clear: both; }
```

这里使用了 `.clear-float` 类来定义一个空元素，并设置 `clear: both` 来清除浮动。

2. **使用 overflow 属性清除浮动**：将父元素（或祖先元素）的 overflow 属性设置为非 visible，如下所示：

```html
<div class="parent clearfix">
  <div class="float-left">浮动元素</div>
</div>

.clearfix:after { content: ""; display: table; clear: both; } .parent {
overflow: hidden; }
```

这里使用了 clearfix 技巧来清除浮动，通过在父元素上添加 `.clearfix` 类，并设置 `:after` 伪元素来清除浮动。同时，将父元素的 overflow 属性设置为 hidden，也能够实现清除浮动的效果。

3. **使用 flex 布局清除浮动**：使用 flex 布局可以自然而然地清除子元素的浮动，如下所示：

```html
<div class="parent">
  <div class="float-left">浮动元素</div>
</div>

.parent { display: flex; flex-wrap: wrap; }
```

这里使用了 flex 布局来实现自适应布局，并且自然而然地清除了子元素的浮动。

需要注意的是，清除浮动时需要考虑兼容性和语义化，避免出现不必要的布局问题。同时，清除浮动也是前端开发中比较常见的问题，掌握清除浮动的技巧能够提高网页开发的效率和品质。

清除浮动的方式

（1）使用 clear 属性清除浮动。

（2）使用 BFC 块级格式化上下文来清除浮动。

因为 BFC 元素不会影响外部元素的特点，所以 BFC 元素也可以用来清除浮动的影响，因为如果不清除，子元素浮动则父元素高度塌陷，必然会影响后面元素布局和定位，这显然有违 BFC 元素的子元素不会影响外部元素的设定。

[CSS 清除浮动的多种方法 - Web 前端工程师面试题讲解](https://www.bilibili.com/video/BV1XJ411u72L/?spm_id_from=333.788&vd_source=037b856144283671f89f562ed7eeb263)

《CSS 权威指南》 10.2 清除浮动 《深入解析 CSS》4.2 容器折叠和清除浮动
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1666849453574-019aa093-7d9b-42dc-9187-b866ad7cf5e0.png#averageHue=%23eae9e9&clientId=u2eb5bbcb-fb05-4&from=paste&height=225&id=XFPcI&name=image.png&originHeight=647&originWidth=1200&originalType=binary&ratio=1&rotation=0&showTitle=false&size=219499&status=done&style=none&taskId=u9f4aabd5-4eea-4578-9ea1-5b5ce2d6a65&title=&width=418)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1666849943276-0226ee16-3a3a-4bdd-8a2a-b787b32e62b7.png#averageHue=%23f7faf7&clientId=u2eb5bbcb-fb05-4&from=paste&height=209&id=u6166191f&name=image.png&originHeight=313&originWidth=629&originalType=binary&ratio=1&rotation=0&showTitle=false&size=130583&status=done&style=none&taskId=ue8960a14-1aad-4b7b-8c0a-9e3301445a1&title=&width=419.3333333333333)

#### 使用 clear 属性清除浮动的原理？

> 使用 clear 属性清除浮动，其语法如下：

clear:none|left|right|both

如果单看字面意思，clear:left 应该是“清除左浮动”，clear:right 应该是“清除右浮动”的意思，实际上，这种解释是有问题的，因为浮动一直还在，并没有清除。

官方对 clear 属性的解释是：“元素盒子的边不能和前面的浮动元素相邻。”，我们对元素设置 clear 属性是为了避免浮动元素对该元素的影响，而不是清除掉浮动。目标元素不是浮动元素。

还需要注意的一点是 clear 属性指的是元素盒子的边不能和前面的浮动元素相邻，注意这里“前面的”3 个字，也就是 clear 属性对“后面的”浮动元素是不闻不问的。考虑到 float 属性要么是 left，要么是 right，不可能同时存在，同时由于 clear 属性对“后面的”浮动元素不闻不问，因此，当 clear:left 有效的时候，clear:right 必定无效，也就是此时 clear:left 等同于设置 clear:both；同样地，clear:right 如果有效也是等同于设置 clear:both。由此可见，clear:left 和 clear:right 这两个声明就没有任何使用的价值，至少在 CSS 世界中是如此，直接使用 clear:both 吧。

要给包含浮动的元素清除浮动，而不是给别的元素，比如浮动元素本身，或包含浮动的元素后面的兄弟元素。

一般使用伪元素的方式清除浮动

.clear::after{
content:'';
display:table;//也可以是'block'，或者是'list-item'
clear:both;
}

clear 属性只有块级元素才有效的，而::after 等伪元素默认都是内联水平，这就是借助伪元素清除浮动影响时需要设置 display 属性值的原因。

《CSS 权威指南》 10.2 清除浮动 《深入解析 CSS》4.2 容器折叠和清除浮动

#### zoom:1 的清除浮动原理?

清除浮动，触发 hasLayout；
zoom 属性是 IE 浏览器的专有属性，它可以设置或检索对象的缩放比例。解决 ie 下比较奇葩的 bug。譬如外边距（margin）的重叠，浮动清除，触发 ie 的 haslayout 属性等。

来龙去脉大概如下：
当设置了 zoom 的值之后，所设置的元素就会就会扩大或者缩小，高度宽度就会重新计算了，这里一旦改变 zoom 值时其实也会发
生重新渲染，运用这个原理，也就解决了 ie 下子元素浮动时候父元素不随着自动扩大的问题。

zoom 属性是 IE 浏览器的专有属性，火狐和老版本的 webkit 核心的浏览器都不支持这个属性。然而，zoom 现在已经被逐步标
准化，出现在 CSS3.0 规范草案中。

目前非 ie 由于不支持这个属性，它们又是通过什么属性来实现元素的缩放呢？可以通过 css3 里面的动画属性 scale 进行缩放。

[P582-7 清除浮动的四种解决办法](https://www.bilibili.com/video/BV1v7411G7JM?p=58)《CSS 权威指南》 10.2 清除浮动 《深入解析 CSS》4.2 容器折叠和清除浮动
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1666850065715-baa3f055-5a85-470a-8365-bad3809261a4.png#averageHue=%23eeeeee&clientId=u2eb5bbcb-fb05-4&from=paste&height=194&id=u2cf7249d&name=image.png&originHeight=291&originWidth=707&originalType=binary&ratio=1&rotation=0&showTitle=false&size=130298&status=done&style=none&taskId=uc3e2c50d-b89e-4dbd-8cff-ca318a3c346&title=&width=471.3333333333333)

#### 移动端的布局用过媒体查询吗？

> 假设你现在正用一台显示设备来阅读这篇文章，同时你也想把它投影到屏幕上，或者打印出来，而显示设备、屏幕投影和打印等这些媒介都有自己的特点，CSS 就是为文档提供在不同媒介上展示的适配方法

当媒体查询为真时，相关的样式表或样式规则会按照正常的级联规被应用。当媒体查询返回假，标签上带有媒体查询的样式表仍将被下载（只不过不会被应用）。

包含了一个媒体类型和至少一个使用宽度、高度和颜色等媒体属性来限制样式表范围的表达式。CSS3 加入的媒体查询使得无需修改内容便可以使样式应用于某些特定的设备范围。

[《CSS3@media 查询》](http://www.runoob.com/cssref/css3-pr-mediaquery.html) [《响应式布局和自适应布局详解》](http://caibaojian.com/356.html)《CSS 权威指南》 10.2 清除浮动 《深入解析 CSS》4.2 容器折叠和清除浮动

#### 使用 CSS 预处理器吗？喜欢哪个？

#### CSS 优化、提高性能的方法有哪些？

```
加载性能：

（1）css压缩：将写好的css进行打包压缩，可以减少很多的体积。
（2）css单一样式：当需要下边距和左边距的时候，很多时候选择:margin:top 0 bottom 0;但margin-bottom:bot
tom;margin-left:left;执行的效率更高。
（3）减少使用@import,而建议使用link，因为后者在页面加载时一起加载，前者是等待页面加载完成之后再进行加载。

选择器性能：

（1）关键选择器（key selector）。选择器的最后面的部分为关键选择器（即用来匹配目标元素的部分）。CSS选择符是从右到
左进行匹配的。当使用后代选择器的时候，浏览器会遍历所有子元素来确定是否是指定的元素等等；

（2）如果规则拥有ID选择器作为其关键选择器，则不要为规则增加标签。过滤掉无关的规则（这样样式系统就不会浪费时间去匹
配它们了）。

（3）避免使用通配规则，如*{}计算次数惊人！只对需要用到的元素进行选择。

（4）尽量少的去对标签进行选择，而是用class。

（5）尽量少的去使用后代选择器，降低选择器的权重值。后代选择器的开销是最高的，尽量将选择器的深度降到最低，最高不要超过
三层，更多的使用类来关联每一个标签元素。

（6）了解哪些属性是可以通过继承而来的，然后避免对这些属性重复指定规则。

渲染性能：

（1）慎重使用高性能属性：浮动、定位。

（2）尽量减少页面重排、重绘。

（3）去除空规则：｛｝。空规则的产生原因一般来说是为了预留样式。去除这些空规则无疑能减少css文档体积。

（4）属性值为0时，不加单位。

（5）属性值为浮动小数0.**，可以省略小数点之前的0。

（6）标准化各种浏览器前缀：带浏览器前缀的在前。标准属性在后。

（7）不使用@import前缀，它会影响css的加载速度。

（8）选择器优化嵌套，尽量避免层级过深。

（9）css雪碧图，同一页面相近部分的小图标，方便使用，减少页面的请求次数，但是同时图片本身会变大，使用时，优劣考虑清
楚，再使用。

（10）正确使用display的属性，由于display的作用，某些样式组合会无效，徒增样式体积的同时也影响解析性能。

（11）不滥用web字体。对于中文网站来说WebFonts可能很陌生，国外却很流行。web fonts通常体积庞大，而且一些浏
览器在下载web fonts时会阻塞页面渲染损伤性能。

可维护性、健壮性：

（1）将具有相同属性的样式抽离出来，整合并通过class在页面中进行使用，提高css的可维护性。
（2）样式与内容分离：将css代码定义到外部css中。


------------------------------------------

1. 精简样式文件

很多时候我们会把很多个页面的样式文件合并为一个，因为通常页面之间会有公共的样式文件，但是这样做有好处也有坏处：

坏处：

样式文件偏大，影响加载速度
浏览器会进行多余的样式匹配，影响渲染时间。
好处：

样式文件会被浏览器缓存，进入到其他页面样式文件不用再去下载。
很多人认为样式文件越少越好，因为浏览器会对样式文件进行缓存，所以便一味的进行合并，但是我们也需要懂得取舍，正确的做法是：

如果是大项目，应该合并成不同的样式文件，如果是简单的项目，建议合并成一个文件即可。如果无法确认项目规模，建议分开成不同的样式文件，日后要合并也比较方便。

2. 利用继承减少代码量

我们都知道CSS有一些属性是可以继承的，比如color，font-size，font-family等等，但是很多开发人员不注意这种细节，
编写很多重复性代码，从而使得CSS文件变得比较大，影响加载速度。

3. 内联首屏关键CSS

网站性能是留住用户的关键，那么网站首屏的加载速度更是关键的关键。

通常我们不会去写内联样式，因为这会造成代码维护困难，而且内联样式浏览器不会缓存的，每次刷新都会重新加载css。

但是，凡事都有两面性，内联CSS能够使页面渲染的开始时间提前，因为在HTML下载完成之后就能渲染了，不像link那样引用样式需要耗费更多时间。

那么，我们是否可以全部使用内联样式呢？答案是否定的，刚刚说了内联样式还是存在许多问题的，所以最好的解决办法就是：首屏关键CSS可以使用内联的形式。

4. 异步加载CSS

CSS会阻塞渲染，在CSS文件请求、下载、解析完成之前，浏览器将不会渲染任何已处理的内容。

但是，有些CSS文件可能不是我们渲染必须的CSS文件，我们可以让它异步加载，从而提升渲染速度，比如下面两种异步加载CSS的方式：

使用JavaScript动态创建样式表link元素，并插入到DOM中
// 创建link标签
const myCSS = document.createElement( "link" );
myCSS.rel = "stylesheet";
myCSS.href = "mystyles.css";
// 插入到header的最后位置
document.head.insertBefore( myCSS, document.head.childNodes[ document.head.childNodes.length - 1 ].nextSibling );

2. 修改link标签（有兼容性问题）

<link rel="preload" href="mystyles.css" as="style" onload="this.rel='stylesheet'">
或者

<link rel="alternate stylesheet" href="mystyles.css" onload="this.rel='stylesheet'">

5. 压缩文件
浏览器想要渲染出网页必须要先将CSS等文件下载下来，所有文件越小，那么就能够更快的下载和渲染，特别是在一些网络速度比较慢的场景下效果尤为明显。

我们可以借助一些打包工具进行压缩，比如webpack、gulp/grunt、rollup等。

6. 正确使用选择器
尽管现阶段各大浏览器对选择器的优化已经很好了，差别不大，但是我们还是可以尽量按照一定的规则来进行使用，比如以下几点：

不要嵌套过多复杂的选择器
通配符选择器尽量少用
不要为了速度而放弃了可维护性和可读性

7. 慎用一些CSS属性
如果某些CSS属性需要浏览器计算，那都是需要耗费一些性能的，比如如box-shadow、border-radius、filter、透明度、:nth-child等等。

如果非必要情况下可以不必使用这些属性，当然，大多数都是必要情况。

8. 不要使用@import

有些小伙伴可能习惯使用@import引入CSS样式文件，但是其实这样做有很大的弊端。

使用@import引入CSS会影响浏览器的并行下载。使用@import引用的CSS文件只有在引用它的那个css文件被下载、解析之后，
浏览器才会知道还有另外一个css需要下载，这时才去下载，然后下载后开始解析、构建render tree等一系列操作，这就导致浏览器无法并行下载所需的样式文件。

9. 减少页面重排、重绘

页面的重排重绘都会耗费浏览器性能，我们在非必要情况下应该避免，比如下面这些情况。

改变元素的内外边距
CSS伪类激活
能使用background-color,就尽量不要使用background
改变font-size和font-family
当然有些情况我们是不能避免重绘和回流的，我们视情况而定

10. 其它优化小点

慎重使用高性能属性：浮动、定位
去除空规则：｛｝
属性值为0时，不加单位
css雪碧图，同一页面相近部分的小图标
将css文件放在页面最上面
```

[《CSS 优化、提高性能的方法有哪些？》](https://www.zhihu.com/question/19886806) [《CSS 优化，提高性能的方法》](https://www.jianshu.com/p/4e673bf24a3b)

#### 浏览器是怎样解析 CSS 选择器的？

样式系统从关键选择器开始匹配，然后左移查找规则选择器的祖先元素。只要选择器的子树一直在工作，样式系统就会持续左移，直到和规则匹配，或者是因为不匹配而放弃该规则。

试想一下，如果采用从左至右的方式读取 CSS 规则，那么大多数规则读到最后（最右）才会发现是不匹配的，这样做会费时耗能，最后有很多都是无用的；而如果采取从右向左的方式，那么只要发现最右边选择器不匹配，就可以直接舍弃了，避免了许多无效匹配。

#### 在网页中应该使用奇数还是偶数的字体？为什么呢？

[《谈谈网页中使用奇数字体和偶数字体》](https://blog.csdn.net/jian_xi/article/details/79346477) [《现在网页设计中的为什么少有人用 11px、13px、15px 等奇数的字体？》](https://www.zhihu.com/question/20440679)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1666626522151-cc05d2eb-72a2-47a3-8c69-7b58eacbbd8f.png#averageHue=%23ebefef&clientId=u87984edf-50f7-4&from=paste&height=123&id=u9602b714&name=image.png&originHeight=142&originWidth=897&originalType=binary&ratio=1&rotation=0&showTitle=false&size=57786&status=done&style=none&taskId=uec75416a-3687-4708-84c1-71876ab93a9&title=&width=774)

#### margin 和 padding 分别适合什么场景使用？

margin 是用来隔开元素与元素的间距；padding 是用来隔开元素与内容的间隔。
margin 用于布局分开元素使元素与元素互不相干。
padding 用于元素与内容之间的间隔，让内容（文字）与（包裹）元素之间有一段距离。

何时应当使用 margin：
•需要在 border 外侧添加空白时。
•空白处不需要背景（色）时。
•上下相连的两个盒子之间的空白，需要相互抵消时。如 15px+20px 的 margin，将得到 20px 的空白。

何时应当时用 padding：
•需要在 border 内测添加空白时。
•空白处需要背景（色）时。
•上下相连的两个盒子之间的空白，希望等于两者之和时。如 15px+20px 的 padding，将得到 35px 的空白。

《CSS 权威指南》 10.2 清除浮动 《深入解析 CSS》4.2 容器折叠和清

#### 抽离样式模块怎么写，说出思路，有无实践经验？[阿里航旅的面试题]

```
我的理解是把常用的css样式单独做成css文件……通用的和业务相关的分离出来，通用的做成样式模块儿共享，业务相关的，放
进业务相关的库里面做成对应功能的模块儿。
```

[《CSS 规范-分类方法》](http://nec.netease.com/standard/css-sort.html)

#### 简单说一下 css3 的 all 属性。

```
all属性实际上是所有CSS属性的缩写，表示，所有的CSS属性都怎样怎样，但是，不包括unicode-bidi和direction
这两个CSS属性。支持三个CSS通用属性值，initial,inherit,unset。

initial是初始值的意思，也就是该元素元素都除了unicode-bidi和direction以外的CSS属性都使用属性的默认初始
值。

inherit是继承的意思，也就是该元素除了unicode-bidi和direction以外的CSS属性都继承父元素的属性值。

unset是取消设置的意思，也就是当前元素浏览器或用户设置的CSS忽略，然后如果是具有继承特性的CSS，如color，则
使用继承值；如果是没有继承特性的CSS属性，如background-color，则使用初始值。
```

[《简单了解 CSS3 的 all 属性》](https://www.zhangxinxu.com/wordpress/2016/03/know-about-css3-all/)

#### 为什么不建议使用统配符初始化 css 样式。

```
采用*{padding:0;margin:0;}这样的写法好处是写起来很简单，但是是通配符，需要把所有的标签都遍历一遍，当网站较大时，
样式比较多，这样写就大大的加强了网站运行的负载，会使网站加载的时候需要很长一段时间，因此一般大型的网站都有分层次的一
套初始化样式。

出于性能的考虑，并不是所有标签都会有padding和margin，因此对常见的具有默认padding和margin的元素初始化即
可，并不需使用通配符*来初始化。
```

[《CSS 规范-分类方法》](http://nec.netease.com/standard/css-sort.html)

#### absolute 的 containingblock（包含块）计算方式跟正常流有什么不同？

```javascript
什么是包含块？

描述：一个元素的框的尺寸和位置的计算有时相对于某个特定的长方形，称为该元素的包含块。

---W3C

- block-level boxes

一个 block-level element ('display' 属性值为 'block', 'list-item' 或是 ‘table’) 会生成一个 block-level box，
这样的盒子会参与到 block-formatting context (一种布局的方式) 中。

- block formatting context

在这种布局方式下，盒子们自所在的 containing block 顶部起一个接一个垂直排列，水平方向上撑满整个宽度 (除非内部的盒子自己内部建立了新的 BFC)。

- containing block

一般来说，盒子本身就为其子孙建立了 containing block，用来计算内部盒子的位置、大小，而对内部的盒子，具体采用哪个 containing block 来计算，
  需要分情况来讨论：
    1.根元素所在的 containing block 被称为 initial containing block，在我们常用的浏览器环境下，指的是原点与 canvas 重合，大小和 viewport 相同的矩形；
      2. 对于 position 为 static 或 relative 的元素，其 containing block 为祖先元素中最近的 block container box
            的 content box (除 margin, border, padding 外的区域)；
    3.对于 position:fixed 的元素，其 containing block 由 viewport 建立；
    4.对于 position:absolute 的元素，则是先找到其祖先元素中最近的 position 属性非 static 的元素，然后判断：
      1.若此元素为 inline 元素，则 containing block 为能够包含这个元素生成的第一个
          和最后一个 inline box 的 padding box (除 margin, border 外的区域)的最小矩形；
      2.否则则由这个祖先元素的 padding box 构成。
      3.如果都找不到，则为 initial containing block。基本就是规范上定义的，其中还涉及一些其他的概念，

如果要了解的话可以继续阅读：http://www.w3.org/TR/CSS2/visuren.html  http://www.w3.org/TR/CSS2/visudet.

（1）内联元素也可以作为“包含块”所在的元素；

（2）“包含块”所在的元素不是父块级元素，而是最近的position不为static的祖先元素或根元素；

（3）边界是padding box而不是content box。
```

《 》《 》《》

#### 对于 hasLayout 的理解？

```
hasLayout是IE特有的一个属性。很多的IE下的css bug都与其息息相关。在IE中，一个元素要么自己对自身的内容进
行计算大小和组织，要么依赖于父元素来计算尺寸和组织内容。当一个元素的hasLayout属性值为true时，它负责对自己和可
能的子孙元素进行尺寸计算和定位。虽然这意味着这个元素需要花更多的代价来维护自身和里面的内容，而不是依赖于祖先元素来完
成这些工作。
```

[《CSS 基础篇--CSS 中 IE 浏览器的 hasLayout，IE 低版本的 bug 根源》](https://segmentfault.com/a/1190000010883974) [《CSS 魔法堂：hasLayout 原来是这样的！》](https://segmentfault.com/a/1190000004632071)

#### 元素竖向的百分比设定是相对于容器的高度吗？

```javascript
如果是height的话，是相对于包含块的高度。

如果是padding或者margin竖直方向的属性则是相对于包含块的宽度。

  - 计算盒模型的百分值

1.height、top 和 bottom 的百分值参考的是包含块的高度。

但是有一个特殊情况：当包含块的 高度不确定 时（比如高度由内容撑起时）并且当前元素 不是绝对定位时，上述属性的百分比会被当做 auto 处理。

2.width、left、right、padding 和 margin 的百分值参考的是包含块的宽度。

3.粘性定位元素的偏移值 top、bottom、left 和 right 的百分比参考的是最近的滚动祖先，而非包含块，其余属性的百分比遵循上述规则。

4.border 属性并不支持百分值设置，所以上述没有介绍。

综上，如果你给一个固定定位的元素设置 margin-top : 50% 时，你会发现，它居然是根据视口宽度进行变化的。
```

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1666876159268-9154d571-d8ec-445f-8eb9-58762f9b2e53.png#averageHue=%23fefdfc&clientId=u959fff18-538f-4&from=paste&height=436&id=u6d40d202&name=image.png&originHeight=654&originWidth=1177&originalType=binary&ratio=1&rotation=0&showTitle=false&size=134838&status=done&style=none&taskId=u5c022276-49d6-414d-8717-af2bbfce8f3&title=&width=784.6666666666666)

#### 全屏滚动的原理是什么？用到了 CSS 的哪些属性？（待深入实践）

```
原理：有点类似于轮播，整体的元素一直排列下去，假设有5个需要展示的全屏页面，那么高度是500%，只是展示100%，容器及容
器内的页面取当前可视区高度，同时容器的父级元素overflow属性值设为hidden，通过更改容器可视区的位置来实现全
屏滚动效果。主要是响应鼠标事件，页面通过CSS的动画效果，进行移动。

overflow：hidden；transition：all 1000 ms ease；
```

[《js 实现网页全屏切换（平滑过渡），鼠标滚动切换》](https://blog.csdn.net/liona_koukou/article/details/52680409) [《用 ES6 写全屏滚动插件》](https://juejin.im/post/5aeef41cf265da0ba0630de0)

#### 什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的 IE？（待深入了解）

```
响应式网站设计是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。基本原理是通过媒体查询检测不同的设备屏
幕尺寸做处理。页面头部必须有meta声明的viewport。

给所有用户提供同一份 HTML 和 CSS。通过使用几个关键技术，根据用户浏
览器视口的大小（或者屏幕分辨率）让内容有不一样的渲染结果。这种方式不需要分别维护两个
网站。只需要创建一个网站，就可以在智能手机、平板，或者其他任何设备上运行。网页设计师
Ethan Marcotte 称这种方式为响应式设计（responsive design）。
```

[《响应式布局原理》](https://blog.csdn.net/dreamerframework/article/details/8994741) [《响应式布局的实现方法和原理》](http://www.mahaixiang.cn/wzsj/278.html)

#### 如何修改 chrome 记住密码后自动填充表单的黄色背景？

```javascript
chrome表单自动填充后，input文本框的背景会变成黄色的，通过审查元素可以看到这是由于chrome会默认给自动填充的in
put表单加上input:-webkit-autofill私有属性，然后对其赋予以下样式：

{
  background-color:rgb(250,255,189)!important;
  background-image:none!important;
  color:rgb(0,0,0)!important;
}

对chrome默认定义的background-color，background-image，color使用important是不能提高其优先级的，但是
其他属性可使用。

使用足够大的纯色内阴影来覆盖input输入框的黄色背景，处理如下

//消除google浏览器记住密码自动填充黄色框背景
:-webkit-autofill,
:-webkit-autofill:hover,
:-webkit-autofill:focus,
:-webkit-autofill:active {
    // 字体颜色
    -webkit-text-fill-color: #606266 !important;
    // 背景色
    transition: background-color 5000s ease-in-out 0s;
}
```

[《去掉 chrome 记住密码后的默认填充样式》](https://blog.csdn.net/zsl_955200/article/details/78276209) [《修改谷歌浏览器 chrome 记住密码后自动填充表单的黄色背景》](https://blog.csdn.net/M_agician/article/details/73381706)

#### 怎么让 Chrome 支持小于 12px 的文字？

```javascript
在谷歌下css设置字体大小为12px及以下时，显示都是一样大小，都是默认12px。

解决办法：

（1）可以使用Webkit的内核的-webkit-text-size-adjust的私有CSS属性来解决，只要加了-webkit-text-size
-adjust:none;字体大小就不受限制了。但是chrome更新到27版本之后就不可以用了。所以高版本chrome谷歌浏览器
已经不再支持-webkit-text-size-adjust样式，所以要使用时候慎用。

（2）还可以使用css3的transform缩放属性-webkit-transform:scale(0.5);注意-webkit-transform:scale(0.75);
收缩的是整个元素的大小，这时候，如果是内联元素，必须要将内联元素转换成块元素，可以使用display：block/
inline-block/...；

（3）使用图片：如果是内容固定不变情况下，使用将小于12px文字内容切出做图片，这样不影响兼容也不影响美观。
```

[《谷歌浏览器不支持 CSS 设置小于 12px 的文字怎么办？》](https://570109268.iteye.com/blog/2406562)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1666697528120-fe54ad63-3259-4ad0-a114-fb010bb9f2df.png#averageHue=%23f3f3f3&clientId=u258f02ec-022e-4&from=paste&height=445&id=u376a4791&name=image.png&originHeight=375&originWidth=707&originalType=binary&ratio=1&rotation=0&showTitle=false&size=71530&status=done&style=none&taskId=u35646aec-4b63-4e93-bf89-4c6e32dcb35&title=&width=838.3333435058594)

#### 让页面里的字体变清晰，变细用 CSS 怎么做？

```
webkit内核的私有属性：-webkit-font-smoothing，用于字体抗锯齿，使用后字体看起来会更清晰舒服。

在MacOS测试环境下面设置-webkit-font-smoothing:antialiased;但是这个属性仅仅是面向MacOS，其他操作系统设
置后无效。
```

[《让字体变的更清晰 CSS 中-webkit-font-smoothing》](https://blog.csdn.net/huo_bao/article/details/50251585)

#### font-style 属性中 italic 和 oblique 的区别？

```
italic和oblique这两个关键字都表示“斜体”的意思。

它们的区别在于，italic是使用当前字体的斜体字体，而oblique只是单纯地让文字倾斜。如果当前字体没有对应的斜体字体，
则退而求其次，解析为oblique，也就是单纯形状倾斜。
```

#### 设备像素、css 像素、设备独立像素、dpr、ppi 之间的区别？

info
设备像素指的是物理像素，一般手机的分辨率指的就是设备像素，一个设备的设备像素是不可变的。

css 像素和设备独立像素是等价的，不管在何种分辨率的设备上，css 像素的大小应该是一致的，css 像素是一个相对单位，它是相
对于设备像素的，一个 css 像素的大小取决于页面缩放程度和 dpr 的大小。

dpr 指的是设备像素和设备独立像素的比值，一般的 pc 屏幕，dpr=1。在 iphone4 时，苹果推出了 retina 屏幕，它的 dpr
为 2。屏幕的缩放会改变 dpr 的值。

ppi 指的是每英寸的物理像素的密度，ppi 越大，屏幕的分辨率越大。

[《什么是物理像素、虚拟像素、逻辑像素、设备像素，什么又是 PPI,DPI,DPR 和 DIP》](https://www.cnblogs.com/libin-1/p/7148377.html) [《前端工程师需要明白的「像素」》](https://www.jianshu.com/p/af6dad66e49a) [《CSS 像素、物理像素、逻辑像素、设备像素比、PPI、Viewport》](https://github.com/jawil/blog/issues/21) [《前端开发中像素的概念》](https://github.com/wujunchuan/wujunchuan.github.io/issues/15)

#### layout viewport、visual viewport 和 ideal viewport 的区别？

info
相关知识点：

如果把移动设备上浏览器的可视区域设为 viewport 的话，某些网站就会因为 viewport 太窄而显示错乱，所以这些浏览器就决定 默认情况下把 viewport 设为一个较宽的值，比如 980px，这样的话即使是那些为桌面设计的网站也能在移动浏览器上正常显示了。 ppk 把这个浏览器默认的 viewport 叫做 layout viewport。 layout viewport 的宽度是大于浏览器可视区域的宽度的，所以我们还需要一个 viewport 来代表浏览器可视区域的大小，ppk 把这个 viewport 叫做 visual viewport。 ideal viewport 是最适合移动设备的 viewport，ideal viewport 的宽度等于移动设备的屏幕宽度，只要在 css 中把某一元素的宽度设为 ideal viewport 的宽度（单位用 px），那么这个元素的宽度就是设备屏幕的宽度了，也就是宽度为 100%的效果。ideal viewport 的意义在于，无论在何种分辨率的屏幕下，那些针对 ideal viewport 而设计的网站，不需要用户手动缩放，也不需要出现横向滚动条，都可以完美的呈现给用户。

回答：
移动端一共需要理解三个 viewport 的概念的理解。
第一个视口是布局视口，在移动端显示网页时，由于移动端的屏幕尺寸比较小，如果网页使用移动端的屏幕尺寸进行布局的话，那么整个页面的布局都会显示错乱。所以移动端浏览器提供了一个 layout viewport 布局视口的概念，使用这个视口来对页面进行布局展示，一般 layout viewport 的大小为 980px，因此页面布局不会有太大的变化，我们可以通过拖动和缩放来查看到这个页面。
第二个视口指的是视觉视口，visual viewport 指的是移动设备上我们可见的区域的视口大小，一般为屏幕的分辨率的大小。visual viewport 和 layout viewport 的关系，就像是我们通过窗户看外面的风景，视觉视口就是窗户，而外面的风景就是布局视口中的网页内容。
第三个视口是理想视口，由于 layout viewport 一般比 visual viewport 要大，所以想要看到整个页面必须通过拖动和缩放才能实现。所以又提出了 ideal viewport 的概念，ideal viewport 下用户不用缩放和滚动条就能够查看到整个页面，并且页面在不同分辨率下显示的内容大小相同。ideal viewport 其实就是通过修改 layout viewport 的大小，让它等于设备的宽度，这个宽度可以理解为是设备独立像素，因此根据 ideal viewport 设计的页面，在不同分辨率的屏幕下，显示应该相同。

[《移动前端开发之 viewport 的深入理解》](https://www.cnblogs.com/2050/p/3877280.html) [《说说移动前端中 viewport（视口）》](https://www.html.cn/archives/5975) [《移动端适配知识你到底知多少》](https://juejin.im/post/5b6d21daf265da0f9d1a2ed7#heading-14)

#### position:fixed;在 android 下无效怎么处理？

info
因为移动端浏览器默认的 viewport 叫做 layout viewport。在移动端显示时，因为 layout viewport 的宽度大于移动端屏幕
的宽度，所以页面会出现滚动条左右移动，fixed 的元素是相对 layout viewport 来固定位置的，而不是移动端屏幕来固定位置的
，所以会出现感觉 fixed 无效的情况。

如果想实现 fixed 相对于屏幕的固定效果，我们需要改变的是 viewport 的大小为 ideal viewport，可以如下设置：

<meta name="viewport"content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-sca
le=1.0,user-scalable=no"/>

#### 如果需要手动写动画，你认为最小时间间隔是多久，为什么？（阿里）

info
多数显示器默认频率是 60Hz，即 1 秒刷新 60 次，所以理论上最小间隔为 1/60\*1000ms ＝ 16.7ms

#### 如何让去除 inline-block 元素间间距？

info
移除空格、使用 margin 负值、使用 font-size:0、letter-spacing、word-spacing

浏览器会把 inline 元素间的空白字符（空格、换行、Tab 等）渲染成一个空格。而为了美观。我们通常是一个 `<li>`放在一行， 这导致 `<li>`换行后产生换行字符，它变成一个空格，占用了一个字符的宽度。
解决办法：
（1）为 `<li>`设置 float:left。不足：有些容器是不能设置浮动，如左右切换的焦点图等。
（2）将所有 `<li>`写在同一行。不足：代码不美观。
（3）将 `<ul>`内的字符尺寸直接设为 0，即 font-size:0。不足：`<ul>`中的其他字符尺寸也被设为 0，需要额外重新设定其他 字符尺寸，且在 Safari 浏览器依然会出现空白间隔。
（4）消除 `<ul>`的字符间隔 letter-spacing:-8px，不足：这也设置了 `<li>`内的字符间隔，因此需要将 `<li>`内的字符 间隔设为默认 letter-spacing:normal。

#### overflow:scroll 时不能平滑滚动的问题怎么处理？

info
以下代码可解决这种卡顿的问题：-webkit-overflow-scrolling:touch;是因为这行代码启用了硬件加速特性，所以滑动很流
畅。

[《解决页面使用 overflow:scroll 在 iOS 上滑动卡顿的问题》](https://www.jianshu.com/p/1f4693d0ad2d)

#### 有一个高度自适应的 div，里面有两个 div，一个高度 100px，希望另一个填满剩下的高度。

```html
（1）外层div使用position：relative；高度要求自适应的div使用position:absolute;top:100px;bottom:0;
left:0;right:0; （2）使用flex布局，设置主轴为竖轴，第二个div的flex-grow为1。

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <title>
      有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度(三种方案)
    </title>
    <style type="text/css">
      html,
      body {
        height: 100%;
        padding: 0;
        margin: 0;
      }

      /*方案一*/
      /*.outer { height: 100%; padding: 100px 0 0; box-sizing: border-box ; }
      .A { height: 100px; margin: -100px 0 0; background: #BBE8F2; }
      .B { height: 100%; background: #D9C666; }*/

      /*方案二*/
      /*.outer { height: 100%; padding: 100px 0 0; box-sizing: border-box ; position: relative; }
      .A { height: 100px; background: #BBE8F2; position: absolute; top: 0 ; left: 0 ; width: 100%; }
      .B { height: 100%; background: #D9C666; }*/

      /*方案三*/
      .outer {
        height: 100%;
        position: relative;
      }
      .A {
        height: 100px;
        background: #bbe8f2;
      }
      .B {
        background: #d9c666;
        width: 100%;
        position: absolute;
        top: 100px;
        left: 0;
        bottom: 0;
      }
    </style>
  </head>
  <body>
    <div class="outer">
      <div class="A"></div>
      <div class="B"></div>
    </div>
  </body>
</html>
```

[《有一个高度自适应的 div，里面有两个 div，一个高度 100px，希望另一个填满剩下的高度(三种方案)》](https://blog.csdn.net/xutongbao/article/details/79408522)

#### png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过 webp？

[《图片格式那么多，哪种更适合你？》](https://www.cnblogs.com/xinzhao/p/5130410.html)

#### 图片压缩的方式?

[前端性能优化篇 | 前端进阶之旅](https://interview.poetries.top/docs/excellent-docs/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.html#%E4%B8%8D%E5%90%8C%E4%B8%9A%E5%8A%A1%E5%9C%BA%E6%99%AF%E4%B8%8B%E7%9A%84%E5%9B%BE%E7%89%87%E6%96%B9%E6%A1%88%E9%80%89%E5%9E%8B)

#### 浏览器如何判断是否支持 webp 格式图片

info
（1）宽高判断法。通过创建 image 对象，将其 src 属性设置为 webp 格式的图片，然后在 onload 事件中获取图片的宽高，如
果能够获取，则说明浏览器支持 webp 格式图片。如果不能获取或者触发了 onerror 函数，那么就说明浏览器不支持 webp 格
式的图片。

（2）canvas 判断方法。我们可以动态的创建一个 canvas 对象，通过 canvas 的 toDataURL 将设置为 webp 格式，然后判断
返回值中是否含有 image/webp 字段，如果包含则说明支持 WebP，反之则不支持。

[《判断浏览器是否支持 WebP 图片》](https://blog.csdn.net/jesslu/article/details/82495061) [《toDataURL()》](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toDataURL)

#### 什么是 Cookie 隔离？（或者说：请求资源的时候不要让它带 cookie 怎么做）

网站向服务器请求的时候，会自动带上 cookie 这样增加表头信息量，使请求变慢。

如果静态文件都放在主域名下，那静态文件请求的时候都带有的 cookie 的数据提交给 server 的，非常浪费流量，所以不如隔离开
，静态资源放 CDN。

因为 cookie 有域的限制，因此不能跨域提交请求，故使用非主要域名的时候，请求头中就不会带有 cookie 数据，这样可以降低请
求头的大小，降低请求时间，从而达到降低整体请求延时的目的。

同时这种方式不会将 cookie 传入 WebServer，也减少了 WebServer 对 cookie 的处理分析环节，提高了 webserver 的
http 请求的解析速度。

[《CDN 是什么？使用 CDN 有什么优势？》](https://www.zhihu.com/question/36514327?rf=37353035)

#### style 标签写在 body 后与 body 前有什么区别？

info
页面加载自上而下当然是先加载样式。写在 body 标签后由于浏览器以逐行方式对 HTML 文档进行解析，当解析到写在尾部的样式
表（外联或写在 style 标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，在 windows 的 IE 下可
能会出现 FOUC 现象（即样式失效导致的页面闪烁问题）

#### 什么是 CSS 预处理器/后处理器？

info
CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的特性，将 CSS 作为目标生成
文件，然后开发者就只要使用这种语言进行编码工作。通俗的说，CSS 预处理器用一种专门的编程语言，进行 Web 页面样式设计，然
后再编译成正常的 CSS 文件。

预处理器例如：LESS、Sass、Stylus，用来预编译 Sass 或 less csssprite，增强了 css 代码的复用性，还有层级、mixin、
变量、循环、函数等，具有很方便的 UI 组件模块化开发能力，极大的提高工作效率。

CSS 后处理器是对 CSS 进行处理，并最终生成 CSS 的预处理器，它属于广义上的 CSS 预处理器。我们很久以前就在用 CSS 后
处理器了，最典型的例子是 CSS 压缩工具（如 clean-css），只不过以前没单独拿出来说过。还有最近比较火的 Autoprefixer，
以 CanIUse 上的浏览器支持数据为基础，自动处理兼容性问题。

后处理器例如：PostCSS，通常被视为在完成的样式表中根据 CSS 规范处理 CSS，让其更有效；目前最常做的是给 CSS 属性添加浏
览器私有前缀，实现跨浏览器兼容性的问题。

[《CSS 预处理器和后处理器》](https://blog.csdn.net/yushuangyushuang/article/details/79209752)

#### 阐述一下 CSSSprites

info
将一个页面涉及到的所有图片都包含到一张大图中去，然后利用 CSS 的 background-image，background-repeat，background
-position 的组合进行背景定位。利用 CSSSprites 能很好地减少网页的 http 请求，从而很好的提高页面的性能；CSSSprites
能减少图片的字节。

优点：

减少 HTTP 请求数，极大地提高页面加载速度
增加图片信息重复度，提高压缩比，减少图片大小
更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现

缺点：

图片合并麻烦
维护麻烦，修改一个图片可能需要重新布局整个图片，样式

#### 使用 rem 布局的优缺点？

info
优点：
在屏幕分辨率千差万别的时代，只要将 rem 与屏幕分辨率关联起来就可以实现页面的整体缩放，使得在设备上的展现都统一起来了。而且现在浏览器基本都已经支持 rem 了，兼容性也非常的好。

缺点：
（1）在奇葩的 dpr 设备上表现效果不太好，比如一些华为的高端机型用 rem 布局会出现错乱。
（2）使用 iframe 引用也会出现问题。
（3）rem 在多屏幕尺寸适配上与当前两大平台的设计哲学不一致。即大屏的出现到底是为了看得又大又清楚，还是为了看的更多的问题。

[《css3 的字体大小单位 rem 到底好在哪？》](https://www.zhihu.com/question/21504656) [《VW:是时候放弃 REM 布局了》](https://www.jianshu.com/p/e8ae1c3861dc) [《为什么设计稿是 750px》](https://blog.csdn.net/Honeymao/article/details/76795089) [《使用 Flexible 实现手淘 H5 页面的终端适配》](https://github.com/amfe/article/issues/17)

#### 几种常见的 CSS 布局

[《几种常见的 CSS 布局》](https://juejin.im/post/5bbcd7ff5188255c80668028#heading-12)

#### 画一条 0.5px 的线

采用 meta viewport 的方式
采用 border-image 的方式
采用 transform:scale()的方式

[《怎么画一条 0.5px 的边（更新）》](https://juejin.im/post/5ab65f40f265da2384408a95)

#### transition 和 animation 的区别

info

- **transition 是过渡属性**，强调过度，它的实现需要触发一个事件（比如鼠标移动上去，焦点，点击等）才执行动画。它类似于 flash 的补间动画，设置一个开始关键帧，一个结束关键帧。
- **animation 是动画属性**，它的实现不需要触发事件，设定好时间之后可以自己执行，且可以循环一个动画。它也类似于 flash 的补间动画，但是它可以设置多个关键帧（用@keyframe 定义）完成动画

transition 关注的是 CSS property 的变化，property 值和时间的关系是一个三次贝塞尔曲线。
animation 作用于元素本身而不是样式属性，可以使用关键帧的概念，应该说可以实现更自由的动画效果。

[《CSSanimation 与 CSStransition 有何区别？》](https://www.zhihu.com/question/19749045) [《CSS3Transition 和 Animation 区别及比较》](https://blog.csdn.net/cddcj/article/details/53582334) [《CSS 动画简介》](http://www.ruanyifeng.com/blog/2014/02/css_transition_and_animation.html) [《CSS 动画：animation、transition、transform、translate》](https://juejin.im/post/5b137e6e51882513ac201dfb)

#### 什么是首选最小宽度？

info
“首选最小宽度”，指的是元素最适合的最小宽度。

东亚文字（如中文）最小宽度为每个汉字的宽度。

西方文字最小宽度由特定的连续的英文字符单元决定。并不是所有的英文字符都会组成连续单元，一般会终止于空格（普通空格）、短
横线、问号以及其他非英文字符等。

如果想让英文字符和中文一样，每一个字符都用最小宽度单元，可以试试使用 CSS 中的 word-break:break-all。

#### 为什么 height:100%会无效？

info
对于普通文档流中的元素，百分比高度值要想起作用，其父级必须有一个可以生效的高度值。

原因是如果包含块的高度没有显式指定（即高度由内容决定），并且该元素不是绝对定位，则计算值为 auto，因为解释成了 auto，
所以无法参与计算。

使用绝对定位的元素会有计算值，即使祖先元素的 height 计算为 auto 也是如此。

#### min-width/max-width 和 min-height/max-height 属性间的覆盖规则？

info
（1）max-width 会覆盖 width，即使 width 是行类样式或者设置了!important。

（2）min-width 会覆盖 max-width，此规则发生在 min-width 和 max-width 冲突的时候。

#### 内联盒模型基本概念

info
（1）内容区域（content area）。内容区域指一种围绕文字看不见的盒子，其大小仅受字符本身特性控制，本质上是一个字符盒子
（character box）；但是有些元素，如图片这样的替换元素，其内容显然不是文字，不存在字符盒子之类的，因此，对于这些
元素，内容区域可以看成元素自身。

（2）内联盒子（inline box）。“内联盒子”不会让内容成块显示，而是排成一行，这里的“内联盒子”实际指的就是元素的“外在盒
子”，用来决定元素是内联还是块级。该盒子又可以细分为“内联盒子”和“匿名内联盒子”两类。

（3）行框盒子（line box），每一行就是一个“行框盒子”（实线框标注），每个“行框盒子”又是由一个一个“内联盒子”组成的。

（4）包含块（containing box），由一行一行的“行框盒子”组成。

#### 什么是幽灵空白节点？

info
“幽灵空白节点”是内联盒模型中非常重要的一个概念，具体指的是：在 HTML5 文档声明中，内联元素的所有解析和渲染表现就如同
每个行框盒子的前面有一个“空白节点”一样。这个“空白节点”永远透明，不占据任何宽度，看不见也无法通过脚本获取，就好像幽灵一样，但又确确实实地存在，表现如同文本节点一样，因此，我称之为“幽灵空白节点”。

#### 什么是替换元素？

通过修改某个属性值呈现的内容就可以被替换的元素就称为“替换元素”。

替换元素除了内容可替换这一特性以外，还有以下特性：

- **内容的外观不受页面上的 CSS 的影响**：用专业的话讲就是在样式表现在 CSS 作用域之外。如何更改替换元素本身的外观需要类似 appearance 属性，或者浏览器自身暴露的一些样式接口。
- **有自己的尺寸**：在 Web 中，很多替换元素在没有明确尺寸设定的情况下，其默认的尺寸（不包括边框）是 300 像素 ×150 像素，如
- **在很多 CSS 属性上有自己的一套表现规则**：比较具有代表性的就是 vertical-align 属性，对于替换元素和非替换元素，vertical-align 属性值的解释是不一样的。比方说 vertical-align 的默认值的 baseline，很简单的属性值，基线之意，被定义为字符 x 的下边缘，而替换元素的基线却被硬生生定义成了元素的下边缘。
- **所有的替换元素都是内联水平元素**：也就是替换元素和替换元素、替换元素和文字都是可以在一行显示的。但是，替换元素默认的 display 值却是不一样的，有的是 inline，有的是 inline-block。

#### 替换元素的计算规则？

info
替换元素的尺寸从内而外分为三类：

- **固有尺寸：** 指的是替换内容原本的尺寸。例如，图片、视频作为一个独立文件存在的时候，都是有着自己的宽度和高度的。
- **HTML 尺寸：** 只能通过 HTML 原生属性改变，这些 HTML 原生属性包括的 width 和 height 属性、的 size 属性。
- **CSS 尺寸：** 特指可以通过 CSS 的 width 和 height 或者 max-width/min-width 和 max-height/min-height 设置的尺寸，对应盒尺寸中的 content box。

这三层结构的计算规则具体如下：
（1）如果没有 CSS 尺寸和 HTML 尺寸，则使用固有尺寸作为最终的宽高。
（2）如果没有 CSS 尺寸，则使用 HTML 尺寸作为最终的宽高。
（3）如果有 CSS 尺寸，则最终尺寸由 CSS 属性决定。
（4）如果“固有尺寸”含有固有的宽高比例，同时仅设置了宽度或仅设置了高度，则元素依然按照固有的宽高比例显示。
（5）如果上面的条件都不符合，则最终宽度表现为 300 像素，高度为 150 像素。
（6）内联替换元素和块级替换元素使用上面同一套尺寸计算规则。

#### 怎么改变 css，自己的组件、第三方库的组件的 css

> 修改 Antd 组件样式是使用 css modules 在需要修改第三方组件的样式的时候找到对应的类名使用 global 进行包裹覆盖，如果要局部修改，就在外部加上自己添加的类名。

#### 为什么有时候⽤ translate 来改变位置而不是定位？

translate 是 transform 属性的⼀个值。改变 transform 或 opacity 不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）。⽽改变绝对定位会触发重新布局，进⽽触发重绘和复合。transform 使浏览器为元素创建⼀个 GPU 图层，但改变绝对定位会使⽤到 CPU。 因此 translate()更⾼效，可以缩短平滑动画的绘制时间。 ⽽ translate 改变位置时，元素依然会占据其原始空间，绝对定位就不会发⽣这种情况。

#### 对 requestAnimationframe 的理解

实现动画效果的方法比较多，Javascript 中可以通过定时器 setTimeout 来实现，CSS3 中可以使用 transition 和 animation 来实现，HTML5 中的 canvas 也可以实现。除此之外，HTML5 提供一个专门用于请求动画的 API，那就是 requestAnimationFrame，顾名思义就是**请求动画帧**。

MDN 对该方法的描述：
window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。

**语法：** `window.requestAnimationFrame(callback);` 其中，callback 是**下一次重绘之前更新动画帧所调用的函数**(即上面所说的回调函数)。该回调函数会被传入 DOMHighResTimeStamp 参数，它表示 requestAnimationFrame() 开始去执行回调函数的时刻。该方法属于**宏任务**，所以会在执行完微任务之后再去执行。

**取消动画：**使用 cancelAnimationFrame()来取消执行动画，该方法接收一个参数——requestAnimationFrame 默认返回的 id，只需要传入这个 id 就可以取消动画了。

**优势：**

- **CPU 节能**：使用 SetTinterval 实现的动画，当页面被隐藏或最小化时，SetTinterval 仍然在后台执行动画任务，由于此时页面处于不可见或不可用状态，刷新动画是没有意义的，完全是浪费 CPU 资源。而 RequestAnimationFrame 则完全不同，当页面处理未激活的状态下，该页面的屏幕刷新任务也会被系统暂停，因此跟着系统走的 RequestAnimationFrame 也会停止渲染，当页面被激活时，动画就从上次停留的地方继续执行，有效节省了 CPU 开销。
- **函数节流**：在高频率事件( resize, scroll 等)中，为了防止在一个刷新间隔内发生多次函数执行，RequestAnimationFrame 可保证每个刷新间隔内，函数只被执行一次，这样既能保证流畅性，也能更好的节省函数执行的开销，一个刷新间隔内函数执行多次时没有意义的，因为多数显示器每 16.7ms 刷新一次，多次绘制并不会在屏幕上体现出来。
- **减少 DOM 操作**：requestAnimationFrame 会把每一帧中的所有 DOM 操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒 60 帧。

**setTimeout 执行动画的缺点**：它通过设定间隔时间来不断改变图像位置，达到动画效果。但是容易出现卡顿、抖动的现象；原因是：

- settimeout 任务被放入异步队列，只有当主线程任务执行完后才会执行队列中的任务，因此实际执行时间总是比设定时间要晚；
- settimeout 的固定时间间隔不一定与屏幕刷新间隔时间相同，会引起丢帧。

#### display:none 与 visibility:hidden 的区别

info
这两个属性都是让元素隐藏，不可见。**两者区别如下：**
（1）**在渲染树中**

- `display:none`会让元素完全从渲染树中消失，渲染时不会占据任何空间；
- `visibility:hidden`不会让元素从渲染树中消失，渲染的元素还会占据相应的空间，只是内容不可见。

（2）**是否是继承属性**

- `display:none`是非继承属性，子孙节点会随着父节点从渲染树消失，通过修改子孙节点的属性也无法显示；
- `visibility:hidden`是继承属性，子孙节点消失是由于继承了 `hidden`，通过设置 `visibility:visible`可以让子孙节点显示；

（3）修改常规文档流中元素的 `display` 通常会造成文档的重排，但是修改 `visibility`属性只会造成本元素的重绘；
（4）如果使用读屏器，设置为 `display:none`的内容不会被读取，设置为 `visibility:hidden`的内容会被读取。

#### link 和@import 的区别

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26096776/1671869837479-a39839ca-d216-488d-a0b5-5e7d12950eb3.png#averageHue=%23f5f5f2&clientId=u4be6893c-17ff-4&from=paste&height=284&id=uc0a8de66&name=image.png&originHeight=426&originWidth=971&originalType=binary&ratio=1&rotation=0&showTitle=false&size=603315&status=done&style=none&taskId=ufe0b23bc-fec3-435c-bac9-553fa604593&title=&width=647.3333333333334)
info
两者都是外部引用 CSS 的方式，它们的区别如下：

- link 是 XHTML 标签，除了加载 CSS 外，还可以定义 RSS 等其他事务；@import 属于 CSS 范畴，只能加载 CSS。
- link 引用 CSS 时，在页面载入时同时加载；@import 需要页面网页完全载入以后加载。
- link 是 XHTML 标签，无兼容问题；@import 是在 CSS2.1 提出的，低版本的浏览器不支持。
- link 支持使用 Javascript 控制 DOM 去改变样式；而@import 不支持。

#### display 的 block、inline 和 inline-block 的区别

（1）**block**会独占一行，多个元素会另起一行，可以设置 width、height、margin 和 padding 属性；
（2）**inline**元素不会独占一行，设置 width、height 属性无效。但可以设置水平方向的 margin 和 padding 属性，不能设置垂直方向的 padding 和 margin；
（3）**inline-block**将对象设置为 inline 对象，但对象的内容作为 block 对象呈现，之后的内联对象会被排列在同一行内。

对于行内元素和块级元素，其特点如下：
**（1）行内元素**

- 设置宽高无效；
- 可以设置水平方向的 margin 和 padding 属性，不能设置垂直方向的 padding 和 margin；
- 不会自动换行；

**（2）块级元素**

- 可以设置宽高；
- 设置 margin 和 padding 都有效；
- 可以自动换行；
- 多个块状，默认排列从上到下。

#### shadow dom

> 前端组件化中，css 的全局属性（样式冲突）和 DOM 是阻碍组件化的因素，因为在页面中只有一个 DOM，任何地方都可以直接读取和修改 DOM。所以使用 JavaScript 来实现组件化是没有问题的，但是 JavaScript 一旦遇上 CSS 和 DOM，那么就相当难办了。
> 影子 dom 是实现 WebComponent 组件化的基础，它提供了**对局部视图封装能力**，可以让 DOM、CSSOM 和 JavaScript 运行在局部环境中，这样就使得局部的 CSS 和 DOM 不会影响到全局。
> WebComponent 是一套技术的组合，具体涉及到了**Custom elements（自定义元素）、Shadow DOM（影子 DOM）和 HTML templates（HTML 模板）。** > **首先，使用 template 属性来创建模板**。利用 DOM 可以查找到模板的内容，但是模板元素是不会被渲染到页面上的，也就是说 DOM 树中的** template 节点**不会出现在布局树中，所以我们可以使用 template 来自定义一些基础的元素结构，这些基础的元素结构是可以被重复使用的。一般模板定义好之后，我们还需要在模板的内部定义样式信息。
> **其次，我们需要创建一个 GeekBang 的类**。在该类的构造函数中要完成三件事：

1. 查找模板内容；
2. 创建影子 DOM；
3. 再将模板添加到影子 DOM 上。

影子 DOM 的作用是**将模板中的内容与全局 DOM 和 CSS 进行隔离**，这样我们就可以实现元素和样式的私有化了。可以把影子 DOM 看成是一个作用域，其内部的样式和元素是不会影响到全局的样式和元素的，而在全局环境下，要访问影子 DOM 内部的样式或者元素也是需要通过约定好的接口的。
通过影子 DOM，我们就实现了 CSS 和元素的封装，在创建好封装影子 DOM 的类之后，我们就可以**使用 customElements.define 来自定义元素了**。
**最后，就很简单了，可以像正常使用 HTML 元素一样使用该元素**，如上述代码中的 `<geek-bang></geek-bang>`。
影子 DOM 内部的样式是不会影响到全局 CSSOM 的。另外，**使用 DOM 接口也是无法直接查询到影子 DOM 内部元素的**，比如你可以使用 document.getElementsByTagName('div')来查找所有 div 元素，这时候你会发现影子 DOM 内部的元素都是无法查找的，因为要想查找影子 DOM 内部的元素需要**专门的接口**，所以通过这种方式又将影子内部的 DOM 和外部的 DOM 进行了隔离。
通过**影子 DOM 可以隔离 CSS 和 DOM**，影子 DOM 的 JavaScript 脚本是不会被隔离的，比如在影子 DOM 定义的 JavaScript 函数依然可以被外部访问，这是因为 JavaScript 语言本身已经可以很好地实现组件化了。
影子 DOM 的作用主要有以下两点：

1. 影子 DOM 中的元素对于整个网页是不可见的；
2. 影子 DOM 的 CSS 不会影响到整个网页的 CSSOM，影子 DOM 内部的 CSS 只对内部的元素起作用。

该图是上面那段示例代码对应的 DOM 结构图，从图中可以看出，我们使用了两次 geek-bang 属性，那么就会生成两个影子 DOM，并且每个影子 DOM 都有一个 shadow root 的根节点，我们可以将要展示的样式或者元素添加到影子 DOM 的根节点上，每个影子 DOM 你都可以看成是一个独立的 DOM，它有自己的样式、自己的属性，内部样式不会影响到外部样式，外部样式也不会影响到内部样式。
浏览器为了实现影子 DOM 的特性，在代码内部做了大量的条件判断，比如当通过 DOM 接口去查找元素时，渲染引擎会去判断 geek-bang 属性下面的 shadow-root 元素是否是影子 DOM，如果是影子 DOM，那么就直接跳过 shadow-root 元素的查询操作。所以这样通过 DOM API 就无法直接查询到影子 DOM 的内部元素了。
另外，当生成布局树的时候，渲染引擎也会判断 geek-bang 属性下面的 shadow-root 元素是否是影子 DOM，如果是，那么在影子 DOM 内部元素的节点选择 CSS 样式的时候，会直接使用影子 DOM 内部的 CSS 属性。所以这样最终渲染出来的效果就是影子 DOM 内部定义的样式

#### bem

> 是一种 css 规范的模式规则，什么是 BEM 呢，是 block element modifer 的缩写吧。BEM 代表块（Block），元素（Element），修饰符（Modifier）。
> block 代表了更高级别的抽象或组件。
> .block**element 代表.block 的后代，用于形成一个完整的.block 的整体。
> block--modifier 代表.block 的不同状态或不同版本。
> block 代表了更高级别的抽象或组件。
> .block**element 代表.block 的后代，用于形成一个完整的.block 的整体。
> block--modifier 代表.block 的不同状态或不同版本。
> 下面命名规则，双下划线表示元素，两个中划线表示修饰符。这个只是一种约定俗成的，使用习惯你也可以根据自己来定义自己的规范。
> .block
> .block**element
> .block**element----modifier

#### 怎么写全局 css

> 要编写全局 CSS，可以在样式表文件中使用选择器来针对 HTML 文档中的所有元素应用样式。要定义全局样式，可以使用通配符选择器（\*）来选择所有元素，例如：

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  }
  以上代码会将所有元素的外边距（margin）、内边距（padding）、盒模型（box-sizing）和字体（font-family）设置为相同的默认值，从而实现全局样式。但是，需要注意的是，过度使用通配符选择器可能会影响性能，因此应避免滥用它。

#### css 怎么保证变量不被污染，scoped 的原理

> 通过 Webpack 调用 VueJS 中相应 Loader , 给组件 HTML 模板添加自定义属性 (Attribute) data-v-x, 以及给组件内 CSS 选择器添加对应的属性选择器 (Attribute Selector) [data-v-x], 达到组件内样式只能生效与组件内 HTML 的效果, 代码效果如下:

<div class='lionad' data-v-lionad></div>
<style>
.lionad[data-v-lionad] {
  background: @tiger-orange;
}
</style>

### 1. 说说对 HTML 语义化的理解

**语义化是指根据内容的结构化（内容语义化），选择合适的标签（代码语义化）** 。通俗来讲就是用正确的标签做正确的事情。
语义化的优点如下：

- 对机器友好，带有语义的文字表现力丰富，更适合搜索引擎的爬虫爬取有效信息，**有利于 SEO**。除此之外，语义类还支持读屏软件，根据文章可以自动生成目录；
- 对开发者友好，使用语义类标签**增强了可读性**，结构更加清晰，开发者能清晰的看出网页的结构，便于团队的开发与维护。

```
<h1>~<h6>标签：标题标签，h1等级最高，h6等级最低

<header></header>：用于定义页面的介绍展示区域，通常包括网站logo、主导航、全站链接以及搜索框

<nav></nav>：定义页面的导航链接部分区域

<main></main>：定义页面的主要内容，一个页面只能使用一次。

<article></article>：定义页面独立的内容，它可以有自己的header、footer、sections等

<section></section>：元素用于标记文档的各个部分，例如长表单文章的章节或主要部分

<aside></aside>：一般用于侧边栏

<footer></footer>：文档的底部信息

<small></small>：呈现小号字体效果

<strong></strong>：用于强调文本
```

### 2. script 标签中 defer 和 async 的区别

如果没有 defer 或 async 属性，浏览器会立即加载并执行相应的脚本。它不会等待后续加载的文档元素，读取到就会开始加载和执行，这样就阻塞了后续文档的加载。
下图可以直观的看出三者之间的区别:
![](https://cdn.nlark.com/yuque/0/2023/webp/26096776/1679216487373-fff9acaa-6392-4a71-a895-f8973365167e.webp#averageHue=%23ecf0dc&clientId=u4d58bbf7-7636-4&from=paste&id=u3e926841&originHeight=112&originWidth=689&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u710ed051-398e-4e9c-b8fe-679084c1e79&title=)
其中蓝色代表 js 脚本网络加载时间，红色代表 js 脚本执行时间，绿色代表 html 解析。
**defer 和 async 属性都是去异步加载外部的 JS 脚本文件，它们都不会阻塞页面的解析**，其区别如下：

- **执行顺序：** 多个带 async 属性的标签，不能保证加载的顺序；多个带 defer 属性的标签，按照加载顺序执行；
- **脚本是否并行执行：async 属性，表示后续文档的加载和执行与 js 脚本的加载和执行是并行进行的**，即异步执行；defer 属性，加载后续文档的过程和 js 脚本的加载(此时仅加载不执行)是并行进行的(异步)，js 脚本需要等到文档所有元素解析完成之后才执行，DOMContentLoaded 事件触发执行之前。

### 3. HTML5 对比 HTML4 有哪些不同之处？HTML5 有哪些新特性

**HTML5 新增：**
（1）新增语义化标签：nav、header、footer、aside、section、article
（2）音频、视频标签：audio、video
（3）数据存储：localStorage、sessionStorage
（4）canvas（画布）、Geolocation（地理定位）、websocket（通信协议）
（5）input 标签新增属性：placeholder、autocomplete、autofocus、required
（6）history API：go、forward、back、pushstate
**HTML5 移除的元素有：**

- 纯表现的元素：basefont，big，center，font, s，strike，tt，u;
- 对可用性产生负面影响的元素：frame，frameset，noframes

### 4. src 和 href 的区别

src 和 href 都是**用来引用外部的资源**，它们的区别如下：

- **src：** 表示对资源的引用，它指向的内容会嵌入到当前标签所在的位置。src 会将其指向的资源下载并应⽤到⽂档内，如请求 js 脚本。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执⾏完毕，所以⼀般 js 脚本会放在页面底部。
- **href：** 表示超文本引用，它指向一些网络资源，建立和当前元素或本文档的链接关系。当浏览器识别到它他指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理。 常用在 a、link 等标签上。

### 5. img 的 srcset 属性的作⽤？

响应式页面中经常用到根据屏幕密度设置不同的图片。这时就用到了 img 标签的 srcset 属性。
通过使用 img 标签的 srcset 属性，可定义一组额外的图片集合，让浏览器根据不同的屏幕状况选取合适的图片来显示。

### 6. 响应式图片处理优化: Picture 标签

**考察点: 响应式图片处理**
picture 元素就像是图像和其源的容器。浏览器仍然需要 img 元素，用来表明需要加载的图片
在 `<picture>` 下可放置零个或多个 `<source>`标签、以及一个 `<img>`标签，为不同的屏幕设备和场景显示不同的图片。
如果 source 匹配到了, 就会优先用匹配到的, 如果没有匹配到会往下继续找
使用 picture 元素选择图像，不会有歧义。
浏览器的工作流程如下：

- 浏览器会先根据当前的情况，去匹配和使用 `<source>`提供的图片
- 如果未匹配到合适的 `<source>`，就使用 `<img>`标签提供的图片

### 7. DOCTYPE(⽂档类型) 的作⽤是什么

DOCTYPE 是 HTML5 中一种标准通用标记语言的文档类型声明，它的目的是**告诉浏览器（解析器）应该以什么样（html 或 xhtml）的文档类型定义来解析文档**，不同的渲染模式会影响浏览器对 CSS 代码甚⾄ JavaScript 脚本的解析。它必须声明在 HTML ⽂档的第⼀⾏。
浏览器渲染页面的两种模式（可通过 document.compatMode 获取，比如，语雀官网的文档类型是**CSS1Compat**）：

- **CSS1Compat：标准模式（Strick mode）** ，默认模式，浏览器使用 W3C 的标准解析渲染页面。在标准模式中，浏览器以其支持的最高标准呈现页面。
- **BackCompat：怪异模式(混杂模式)(Quick mode)** ，浏览器使用自己的怪异模式解析渲染页面。在怪异模式中，页面以一种比较宽松的向后兼容的方式显示。

### 8. 常⽤的 meta 标签有哪些

meta 标签由 name 和 content 属性定义，**用来描述网页文档的属性**，比如网页的作者，网页描述，关键词等，除了 HTTP 标准固定了一些 name 作为大家使用的共识，开发者还可以自定义 name。
常用的 meta 标签：
charset，用来描述 HTML 文档的编码类型：
keywords，页面关键词：
description，页面描述：
refresh，页面重定向和刷新：
viewport，适配移动端，可以控制视口的大小和比例：
viewport 的 content 参数有以下几种：

- width viewport ：宽度(数值/device-width)
- height viewport ：高度(数值/device-height)
- initial-scale ：初始缩放比例
- maximum-scale ：最大缩放比例
- minimum-scale ：最小缩放比例
- user-scalable ：是否允许用户缩放(yes/no）

robots，搜索引擎索引方式：
robots 的 content 参数有以下几种：

- all：文件将被检索，且页面上的链接可以被查询；
- none：文件将不被检索，且页面上的链接不可以被查询；
- index：文件将被检索；
- follow：页面上的链接可以被查询；
- noindex：文件将不被检索；
- nofollow：页面上的链接不可以被查询。

### 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？块级元素和行内元素的区别

- 行内元素有：a b span img input select strong；
- 块级元素有：div ul ol li dl dt dd h1 h2 h3 h4 h5 h6 p；

空元素，即没有内容的 HTML 元素。空元素是在开始标签中关闭的，也就是空元素没有闭合标签：

- 常见的有：`<br>`、`<hr>`、`<img>`、`<input>`、`<link>`、`<meta>`；
- 鲜见的有：`<area>`、`<base>`、`<col>`、`<colgroup>`、`<command>`、`<embed>`、`<keygen>`、`<param>`、`<source>`、`<track>`、`<wbr>`。

* 行内元素不可以设置宽高，不独占一行，它们会按照从左到右的顺序排列，并尽可能占据内容所需的空间。
* 块级元素可以设置宽高，独占一行，会自动换行。块级元素会在页面上以独立的块形式展现，并占据其父元素的整个宽度。

[行内元素和块级元素的区别\_块元素和行内元素区别\_zzz19 的博客-CSDN 博客](https://blog.csdn.net/zzz19/article/details/100785224)

### 10. title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？

- strong 标签有语义，是起到加重语气的效果，而 b 标签是没有的，b 标签只是一个简单加粗标签。b 标签之间的字符都设为粗体，strong 标签加强字符的语气都是通过粗体来实现的，而搜索引擎更侧重 strong 标签。
- title 属性没有明确意义只表示是个标题，H1 则表示层次明确的标题，对页面信息的抓取有很大的影响
- **i 内容展示为斜体，em 表示强调的文本**

### 11. iframe 标签有那些优点和缺点？

iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。
**优点：**

- 用来加载速度较慢的内容（如广告）
- 可以使脚本可以并行下载
- 可以实现跨子域通信

**缺点：**

- iframe 会阻塞主页面的 onload 事件
- 无法被一些搜索引擎索识别
- 会产生很多页面，不容易管理

### 12. 说一下 HTML5 drag(拖拽) API

dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发。
darg：事件主体是被拖放元素，在正在拖放被拖放元素时触发。
dragenter：事件主体是目标元素，在被拖放元素进入某元素时触发。
dragover：事件主体是目标元素，在被拖放在某元素内移动时触发。
dragleave：事件主体是目标元素，在被拖放元素移出目标元素是触发。
drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。
dragend：事件主体是被拖放元素，在整个拖放操作结束时触发。

### 13. label 标签的作用是什么？

label 标签来定义表单控件的关系：当用户选择 label 标签时，浏览器会自动将焦点转到和 label 标签相关的表单控件上。

### 14. Canvas 和 SVG 标签的区别

**（1）SVG：** SVG 可缩放矢量图形（Scalable Vector Graphics）是基于可扩展标记语言 XML 描述的 2D 图形的语言，SVG 基于 XML 就意味着 SVG DOM 中的每个元素都是可用的，可以为某个元素附加 Javascript 事件处理器。在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。
其特点如下：

- 不依赖分辨率
- 支持事件处理器
- 最适合带有大型渲染区域的应用程序（比如谷歌地图）
- 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
- 不适合游戏应用

**（2）Canvas：** Canvas 是画布，通过 Javascript 来绘制 2D 图形，是逐像素进行渲染的。其位置发生改变，就会重新进行绘制。
其特点如下：

- 依赖分辨率
- 不支持事件处理器
- 弱的文本渲染能力
- 能够以 .png 或 .jpg 格式保存结果图像
- 最适合图像密集型的游戏，其中的许多对象会被频繁重绘

### 15. head 标签有什么作用，其中什么标签必不可少？

标签用于定义文档的头部，它是所有头部元素的容器。 中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等。
文档的头部描述了文档的各种属性和信息，包括文档的标题、在 Web 中的位置以及和其他文档的关系等。绝大多数文档头部包含的数据都不会真正作为内容显示给读者。
下面这些标签可用在 head 部分：`<base>`, `<link>`, `<meta>`, `<script>`, `<style>`, `<title>`。
其中 `<title>` 定义文档的标题，它是 head 部分中唯一必需的元素。

### 16. 文档声明（Doctype）和<!Doctype html>标签有何作用?

**文档声明的作用：** 文档声明是为了告诉浏览器，当前 HTML 文档使用什么版本的 HTML 来写的，这样浏览器才能按照声明的版本来正确的解析。
**<!doctype html> 的作用：** 就是让浏览器进入标准模式(严格模式)，使用最新的 HTML5 标准来解析渲染页面；如果不写，浏览器就会进入混杂模式，我们需要避免此类情况发生。

### 17. 严格模式与混杂模式的区分：

- **严格模式**： 又称为标准模式，指浏览器按照 W3C 标准解析代码；
- **混杂模式**： 又称怪异模式、兼容模式，是指浏览器用自己的方式解析代码。混杂模式通常模拟老式浏览器的行为，以防止老站点无法工作；

### 18.HTML5 为什么只需要写 `<! DOCTYPE HTML>` ？

HTML 4.01 中的 doctype 需要对 DTD 进行引用，因为 HTML 4.01 基于 SGML。而 HTML 5 不基于 SGML，因此不需要对 DTD 进行引用，但是需要 doctype 来规范浏览器的行为。
其中，SGML 是标准通用标记语言, 简单的说，就是比 HTML, XML 更老的标准，HTML，XML 这两者都是由 SGML 发展而来的，而 HTML5 不是的。

### 19. 浏览器乱码的原因是什么？如何解决？

**产生乱码的原因：**

- 网页源代码是 gbk 的编码，而内容中的中文字是 utf-8 编码的，这样浏览器打开即会出现 html 乱码，反之也会出现乱码；
- html 网页编码是 gbk，而程序从数据库中调出呈现是 utf-8 编码的内容也会造成编码乱码；
- 浏览器不能自动检测网页编码，造成网页乱码。

**解决办法：**

- 使用软件编辑 HTML 网页内容；
- 如果网页设置编码是 gbk，而数据库储存数据编码格式是 UTF-8，此时需要程序查询数据库数据显示数据前进程序转码；
- 如果浏览器浏览时候出现网页乱码，在浏览器中找到转换编码的菜单进行转换。

### 20. 渐进增强和优雅降级之间的区别

**（1）渐进增强（progressive enhancement）** ：主要是针对低版本的浏览器进行页面重构，保证基本的功能情况下，再针对高级浏览器进行效果、交互等方面的改进和追加功能，以达到更好的用户体验。
**（2）优雅降级 graceful degradation**： 一开始就构建完整的功能，然后再针对低版本的浏览器进行兼容。
**两者区别：**

- 优雅降级是从复杂的现状开始的，并试图减少用户体验的供给；而渐进增强是从一个非常基础的，能够起作用的版本开始的，并在此基础上不断扩充，以适应未来环境的需要；
- 降级（功能衰竭）意味着往回看，而渐进增强则意味着往前看，同时保证其根基处于安全地带。

### 21. HTML、XML、XHTML 之间有什么区别？

它们都属于标记语言。

| 语言  | 中文名               | 说明                                                                                                                                        |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| HTML4 | 超文本标记语言       | 主要用于做界面呈现。HTML 是先有实现，后面才慢慢制定标准的，导致 HTML ⾮常混乱和松散，语法非常的不严谨。                                     |
| XML   | 可扩展标记语言       | 主要⽤于存储数据和结构。语法严谨，可扩展性强。由于 JSON 也有类似作⽤但更轻量⾼效， XML 的市场变得越来越⼩。                                 |
| XHTML | 可扩展超文本标记语言 | 属于加强版 HTML，为解决 HTML 的混乱问题而生，在语法方面变得和 XML 一样严格。另外，XHTML 的出现也催生了 HTML 5，让 HTML 向规范化严谨化过渡。 |
| HTML5 | 超文本标记语言       | 在 HTML 的基础上进行拓展，用于页面呈现 (目前标准)                                                                                           |

XML 的要求会比较严格:

1. 有且只能有一个根元素
2. 大小写敏感
3. 正确嵌套
4. 必须双引号
5. 必须闭合标签

### 22. 前缀为 data- 开头的元素属性是什么？

这是一种为 HTML 元素添加额外数据信息的方式，被称为 **自定义属性**。
我们可以直接在元素标签上声明这样的数据属性：
也可以使用 JavaScript 来操作元素的数据属性：
**注意：在各种现代前端框架出现后，这种原生的自定义属性已经变得不太常用了, 以前的使用频率非常高, 所以我们知道即可。**

### 23. 说一下 HTML5 的离线存储？

指的是没有网络连接的时候，可以正常访问应用，与网络连接时更新缓存文件
在 cache.manifest 文件中编写需要离线存储的资源：
如何清除缓存：更新 manifest 文件，通过 javascript 操作，清除浏览器缓存

### 24. html 常见兼容性问题？

1. 双边距 BUG float 引起的，解决办法: 使用 display 解决
2. 2.3 像素问题 使用 float 引起的，解决办法: 使用 dislpay:inline -3px
3. 超链接 hover 点击后失效，解决办法: 使用正确的书写顺序 link visited hover active
4. Ie z-index 问题，解决办法: 给父级添加 position:relative
5. Png 透明 ，解决办法: 使用 js 代码
6. Min-height 最小高度 ，解决办法: ！Important 解决
7. 7.select 在 ie6 下遮盖，解决办法: 使用 iframe 嵌套
8. 为什么没有办法定义 1px 左右的宽度容器，解决办法: （IE6 默认的行高造成的，使用 over:hidden, zoom:0.08 line-height:1px）
9. IE5-8 不支持 opacity，解决办法：
10. IE6 不支持 PNG 透明背景，解决办法: IE6 下使用 gif 图片

### 25. 说说 img 标签的 onerror 事件，图片加载失败的处理方法

在图片不存在或者网络状态不好的情况下，会存在图片加载不过来，用户体验很差
可以直接在 img 标签里添加 onerror 事件进行控制
所以可以写一个函数，让函数只执行一次（执行一次把它置为 null 即可），不让其进入循环之中
![](https://cdn.nlark.com/yuque/0/2023/webp/26096776/1679216487305-ee8866b0-9652-4a15-b7d0-322fc5668994.webp#averageHue=%23f9f9f9&clientId=u4d58bbf7-7636-4&from=paste&id=uf1d11862&originHeight=253&originWidth=922&originalType=url&ratio=1.5&rotation=0&showTitle=false&status=done&style=none&taskId=u395416c5-ed6b-4449-8c0e-3f072bca97f&title=)

### 26. 说一下 web worker

在 HTML 页面中，如果在执行脚本时，页面的状态是不可响应的，直到脚本执行完成后，页面才变成可响应。web worker 是运行在后台的 js，独立于其他脚本，不会影响页面的性能。 并且通过 postMessage 将结果回传到主线程。这样在进行复杂操作的时候，就不会阻塞主线程了。
如何创建 web worker：

1. 检测浏览器对于 web worker 的支持性
2. 创建 web worker 文件（js，回传函数等）
3. 创建 web worker 对象

### 27.说一下音视频标签的使用？

**audio** 标签用来向页面中引入一个外部的音视频文件。音视频文件引入时，默认情况下不允许用户自己控制播放停止。
属性：
如果设置了 autoplay，则音视频在打开界面时会自动播放。
但是目前来讲大部分浏览器都不会对音视频进行播放。
**video**标签来向网页中引入一个视频，使用方法和 audio 基本上是一样的，包括各种 audio 拥有的属性，video 也有。

### 28. 前端页面由哪三层构成，分别作用是什么？

分成：结构层、表示层、行为层。

1. 结构层（structural layer）由 HTML 或 XHTML 之类的标记语言负责创建。标签，也就是那些出现在尖括号里的单词，对网页内容的语义含义做出了描述，但这些标签不包含任何关于如何显示有关内容的信息。例如，P 标签表达了这样一种语义：“这是一个文本段。”
2. 表示层（presentation layer）由 CSS 负责创建。 CSS 对“如何显示有关内容”的问题做出了回答。
3. 行为层（behaviorlayer）负责回答“内容应该如何对事件做出反应”这一问题。这是 Javascript 语言和 DOM 主宰的领域。

### 29. 说说你对 WEB 标准以及 W3C 的理解与认识

**web 标准**简单来说可以分为**结构、表现和行为**。其中结构主要是有 HTML 标签组成。或许通俗点说，在页面 body 里面我们写入的标签都是为了页面的结构。表现即指 css 样式表，通过 css 可以是页面的结构标签更具美感。
行为是指页面和用户具有一定的交互，同时页面结构或者表现发生变化，主要是由 js 组成。
web 标准一般是将该三部分独立分开，使其更具有模块化。但一般产生行为时，就会有结构或者表现的变化，也使这三者的界限并不那么清晰。
W3C 对 web 标准提出了规范化的要求，也就是在实际编程中的一些代码规范：包含如下几点

1. 对于结构要求：（标签规范可以提高搜索引擎对页面的抓取效率，对 SEO 很有帮助）1）标签字母要小写 2）标签要闭合 3）标签不允许随意嵌套
2. 对于 css 和 js 来说 1）尽量使用外链 css 样式表和 js 脚本。是结构、表现和行为分为三块，符合规范。同时提高页面渲染速度，提高用户的体验。2）样式尽量少用行间样式表，使结构与表现分离，标签的 id 和 class 等属性命名要做到见文知义，标签越少，加载越快，用户体验提高，代码维护简单，便于改版 3）不需要变动页面内容，便可提供打印版本而不需要复制内容，提高网站易用性。

### 为什么最好把 CSS 的 `<link>` 标签放在 `<head></head>`之间？

把 `<link>` 标签放在 `<head></head>` 之间是规范要求的内容。这种做法可以让页面逐步呈现，提高了用户体验。如果将样式表放在文档底部附近，会使许多浏览器（包括 Internet Explorer）不能逐步呈现页面。
一些浏览器会阻止渲染，以避免在页面样式发生变化时，重新绘制页面中的元素。这种做法可以防止呈现给用户空白的页面或没有样式的内容

### 为什么最好把 JS 的 `<script>` 标签恰好放在 `</body>` 之前？

脚本在下载和执行期间会阻止 HTML 解析。把 `<script>` 标签放在底部，保证 HTML 首先完成解析，将页面尽早呈现给用户。
例外情况：
是当你的脚本里包含 document.write() 时。（但是现在 document.write() 不推荐使用）。同时你将 `<script>` 标签放在底部，意味着浏览器直到整个文档（document）被解析完成不能开始下载脚本。
也许，对此比较好的做法是， `<script>` 使用 defer 属性，放在 `<head>` 中。

### shadow dom

前端组件化中，css 的全局属性（样式冲突）和 DOM 是阻碍组件化的因素，因为在页面中只有一个 DOM，任何地方都可以直接读取和修改 DOM。所以使用 JavaScript 来实现组件化是没有问题的，但是 JavaScript 一旦遇上 CSS 和 DOM，那么就相当难办了。

影子 dom 是实现 WebComponent 组件化的基础，它提供了对局部视图封装能力，可以让 DOM、CSSOM 和 JavaScript 运行在局部环境中，这样就使得局部的 CSS 和 DOM 不会影响到全局。

WebComponent 是一套技术的组合，具体涉及到了 Custom elements（自定义元素）、Shadow DOM（影子 DOM）和 HTML templates（HTML 模板）。

首先，使用 template 属性来创建模板。利用 DOM 可以查找到模板的内容，但是模板元素是不会被渲染到页面上的，也就是说 DOM 树中的 template 节点不会出现在布局树中，所以我们可以使用 template 来自定义一些基础的元素结构，这些基础的元素结构是可以被重复使用的。一般模板定义好之后，我们还需要在模板的内部定义样式信息。

其次，我们需要创建一个 GeekBang 的类。在该类的构造函数中要完成三件事：
         查找模板内容；
         创建影子 DOM；
         再将模板添加到影子 DOM 上。

影子 DOM 的作用是将模板中的内容与全局 DOM 和 CSS 进行隔离，这样我们就可以实现元素和样式的私有化了。可以把影子 DOM 看成是一个作用域，其内部的样式和元素是不会影响到全局的样式和元素的，而在全局环境下，要访问影子 DOM 内部的样式或者元素也是需要通过约定好的接口的。
通过影子 DOM，我们就实现了 CSS 和元素的封装，在创建好封装影子 DOM 的类之后，我们就可以使用 customElements.define 来自定义元素了。
最后，就很简单了，可以像正常使用 HTML 元素一样使用该元素，如上述代码中的 `<geek-bang></geek-bang>`。

> 影子 DOM 内部的样式是不会影响到全局 CSSOM 的。另外，使用 DOM 接口也是无法直接查询到影子 DOM 内部元素的，比如你可以使用 document.getElementsByTagName('div')来查找所有 div 元素，这时候你会发现影子 DOM 内部的元素都是无法查找的，因为要想查找影子 DOM 内部的元素需要专门的接口，所以通过这种方式又将影子内部的 DOM 和外部的 DOM 进行了隔离。
>
> 通过影子 DOM 可以隔离 CSS 和 DOM，影子 DOM 的 JavaScript 脚本是不会被隔离的，比如在影子 DOM 定义的 JavaScript 函数依然可以被外部访问，这是因为 JavaScript 语言本身已经可以很好地实现组件化了。
> 影子 DOM 的作用主要有以下两点：
> 影子 DOM 中的元素对于整个网页是不可见的；
> 影子 DOM 的 CSS 不会影响到整个网页的 CSSOM，影子 DOM 内部的 CSS 只对内部的元素起作用。
>
> 该图是上面那段示例代码对应的 DOM 结构图，从图中可以看出，我们使用了两次 geek-bang 属性，那么就会生成两个影子 DOM，并且每个影子 DOM 都有一个 shadow root 的根节点，我们可以将要展示的样式或者元素添加到影子 DOM 的根节点上，每个影子 DOM 你都可以看成是一个独立的 DOM，它有自己的样式、自己的属性，内部样式不会影响到外部样式，外部样式也不会影响到内部样式。
>
> 浏览器为了实现影子 DOM 的特性，在代码内部做了大量的条件判断，比如当通过 DOM 接口去查找元素时，渲染引擎会去判断 geek-bang 属性下面的 shadow-root 元素是否是影子 DOM，如果是影子 DOM，那么就直接跳过 shadow-root 元素的查询操作。所以这样通过 DOM API 就无法直接查询到影子 DOM 的内部元素了。
>
> 另外，当生成布局树的时候，渲染引擎也会判断 geek-bang 属性下面的 shadow-root 元素是否是影子 DOM，如果是，那么在影子 DOM 内部元素的节点选择 CSS 样式的时候，会直接使用影子 DOM 内部的 CSS 属性。所以这样最终渲染出来的效果就是影子 DOM 内部定义的样式。

### bem

https://www.jianshu.com/p/960bd6f20164
https://www.jianshu.com/p/72522cc7ca5c

> 是一种 css 规范的模式规则，什么是 BEM 呢，是 block element modifer 的缩写吧。
> BEM 代表块（Block），元素（Element），修饰符（Modifier）。
> block 代表了更高级别的抽象或组件。
> .block**element 代表.block 的后代，用于形成一个完整的.block 的整体。
> block--modifier 代表.block 的不同状态或不同版本。
> block 代表了更高级别的抽象或组件。
> .block**element 代表.block 的后代，用于形成一个完整的.block 的整体。
> block--modifier 代表.block 的不同状态或不同版本。
> 下面命名规则，双下划线表示元素，两个中划线表示修饰符。这个只是一种约定俗成的，
> 使用习惯你也可以根据自己来定义自己的规范。
> .block
> .block**element
> .block**element----modifier

### 实现三个 div 元素并排,一个 div 中有 3 个子块，水平排列，如何用 flex 布局实现？宽度相等，三等分父元素的宽度

### 项目中用到 sass，出一个 sass 的题，下面代码编译后是什么样子的？有什么区别？

```
.a{
  .b{
  }
}
.a{
  &.b{
  }
}
```

### 移动端中css你是使用什么单位

 **比较常用的** ：

* `em`：定义字体大小时以父级的字体大小为基准；定义长度单位时以当前字体大小为基准。例父级 `font-size: 14px`，则子级 `font-size: 1em;`为 `font-size: 14px;`；若定义长度时，子级的字体大小如果为 `14px`，则子级 `width: 2em;`为 `width: 24px`。
* `rem`：以根元素的字体大小为基准。例如 `html`的 `font-size: 14px`，则子级 `1rem = 14px`。
* `%`：以父级的宽度为基准。例父级 `width: 200px`，则子级 `width: 50%;height:50%;`为 `width: 100px;height: 100px;`
* `vw和vh`：基于视口的宽度和高度(视口不包括浏览器的地址栏工具栏和状态栏)。例如视口宽度为 `1000px`，则 `60vw = 600px;`
* `vmin和vmax`：`vmin`为当前 `vw` 和 `vh`中较小的一个值；`vmax`为较大的一个值。例如视口宽度 `375px`，视口高度 `812px`，则 `100vmin = 375px;`，`100vmax = 812px;`

**不常用的：**

* `ex和ch`：`ex`以字符 `"x"`的高度为基准；例如 `1ex`表示和字符 `"x"`一样长。`ch`以数字 `"0"`的宽度为基准；例如 `2ch`表示和2个数字 `"0"`一样长。

 **移动端布局总结** ：

1. 移动端布局的方式主要使用rem和flex，可以结合各自的优点，比如flex布局很灵活，但是字体的大小不好控制，我们可以使用rem和媒体查询控制字体的大小，媒体查询视口的大小，然后不同的上视口大小下设置设置 `html`的 `font-size`。
2. 可单独制作移动端页面也可响应式pc端移动端共用一个页面。没有好坏，视情况而定，因势利导

### 单行溢出变为省略号

标签语义化

`<a>`标签平常用来做什么

`localStorage`和 `sessionStorage`

结合 `cookie`实现广告在某个时间段投放，到时就过期
