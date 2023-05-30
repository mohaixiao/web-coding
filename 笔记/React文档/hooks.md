

# Built-in React Hooks

内置 React Hooks

*Hooks* let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. This page lists all built-in Hooks in React.

Hooks 让您可以使用组件中的不同 React 功能。您可以使用内置的 Hooks 或组合它们来构建您自己的 Hooks。本页列出了 React 中所有内置的 Hooks。

---

## [State Hooks ](https://react.dev/reference/react#state-hooks "Link for State Hooks")

状态挂钩

*State* lets a component [“remember” information like user input.](https://react.dev/learn/state-a-components-memory) For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.

状态让组件“记住”用户输入等信息。例如，表单组件可以使用状态来存储输入值，而图片库组件可以使用状态来存储所选图像索引。

To add state to a component, use one of these Hooks:

要向组件添加状态，请使用以下 Hooks 之一：

- [`useState`](https://react.dev/reference/react/useState) declares a state variable that you can update directly.
- useState 声明了一个可以直接更新的状态变量。
- [`useReducer`](https://react.dev/reference/react/useReducer) declares a state variable with the update logic inside a [reducer function.](https://react.dev/learn/extracting-state-logic-into-a-reducer)
- useReducer 在 reducer 函数中声明了一个带有更新逻辑的状态变量。

```
function ImageGallery() {  const [index, setIndex] = useState(0);  // ...
```

---

## [Context Hooks](https://react.dev/reference/react#context-hooks "Link for Context Hooks")

上下文挂钩

*Context* lets a component [receive information from distant parents without passing it as props.](https://react.dev/learn/passing-props-to-a-component) For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.

上下文让组件接收来自远方父级的信息，而无需将其作为 props 传递。例如，您应用的顶级组件可以将当前的 UI 主题传递给下面的所有组件，无论有多深。

- [`useContext`](https://react.dev/reference/react/useContext) reads and subscribes to a context.
- useContext 读取并订阅上下文。

```
function Button() {  const theme = useContext(ThemeContext);  // ...
```

---

## [Ref Hooks](https://react.dev/reference/react#ref-hooks "Link for Ref Hooks")

参考挂钩

*Refs* let a component [hold some information that isn’t used for rendering,](https://react.dev/learn/referencing-values-with-refs) like a DOM node or a timeout ID. Unlike with state, updating a ref does not re-render your component. Refs are an “escape hatch” from the React paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs.

Refs 让组件保存一些不用于渲染的信息，例如 DOM 节点或超时 ID。与状态不同，更新 ref 不会重新渲染您的组件。 Refs 是 React 范式的“逃生舱口”。当您需要使用非 React 系统（例如内置浏览器 API）时，它们很有用。

- [`useRef`](https://react.dev/reference/react/useRef) declares a ref. You can hold any value in it, but most often it’s used to hold a DOM node.
- useRef 声明一个引用。您可以在其中保存任何值，但通常它用于保存 DOM 节点。
- [`useImperativeHandle`](https://react.dev/reference/react/useImperativeHandle) lets you customize the ref exposed by your component. This is rarely used.
- useImperativeHandle 允许您自定义组件公开的引用。这很少使用。

```
function Form() {  const inputRef = useRef(null);  // ...
```

---

## [Effect Hooks](https://react.dev/reference/react#effect-hooks "Link for Effect Hooks")

效果挂钩

*Effects* let a component [connect to and synchronize with external systems.](https://react.dev/learn/synchronizing-with-effects) This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.

效果让组件连接到外部系统并与之同步。这包括处理网络、浏览器 DOM、动画、使用不同 UI 库编写的小部件以及其他非 React 代码。

- [`useEffect`](https://react.dev/reference/react/useEffect) connects a component to an external system.
- useEffect 将组件连接到外部系统。

```jsx
function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  // ...
```

Effects are an “escape hatch” from the React paradigm. Don’t use Effects to orchestrate the data flow of your application. If you’re not interacting with an external system, [you might not need an Effect.](https://react.dev/learn/you-might-not-need-an-effect)

Effects 是 React 范式的“逃生舱口”。不要使用 Effects 来编排应用程序的数据流。如果您不与外部系统交互，则可能不需要 Effect。

There are two rarely used variations of `useEffect` with differences in timing:

有两个很少使用的 useEffect 变体，它们在时间上有所不同：

- [`useLayoutEffect`](https://react.dev/reference/react/useLayoutEffect) fires before the browser repaints the screen. You can measure layout here.
- useLayoutEffect 在浏览器重新绘制屏幕之前触发。您可以在此处测量布局。
- [`useInsertionEffect`](https://react.dev/reference/react/useInsertionEffect) fires before React makes changes to the DOM. Libraries can insert dynamic CSS here.
- useInsertionEffect 在 React 对 DOM 进行更改之前触发。库可以在此处插入动态 CSS。

---

## [Performance Hooks](https://react.dev/reference/react#performance-hooks "Link for Performance Hooks")

性能挂钩

A common way to optimize re-rendering performance is to skip unnecessary work. For example, you can tell React to reuse a cached calculation or to skip a re-render if the data has not changed since the previous render.

优化重新渲染性能的一种常见方法是跳过不必要的工作。例如，您可以告诉 React 重用缓存的计算，或者如果自上次渲染以来数据未更改，则跳过重新渲染。

To skip calculations and unnecessary re-rendering, use one of these Hooks:

要跳过计算和不必要的重新渲染，请使用以下 Hooks 之一：

- [`useMemo`](https://react.dev/reference/react/useMemo) lets you cache the result of an expensive calculation.
- useMemo 让你缓存昂贵计算的结果。
- [`useCallback`](https://react.dev/reference/react/useCallback) lets you cache a function definition before passing it down to an optimized component.
- useCallback 允许您在将函数定义传递给优化组件之前缓存它。

```jsx
function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
```

Sometimes, you can’t skip re-rendering because the screen actually needs to update. In that case, you can improve performance by separating blocking updates that must be synchronous (like typing into an input) from non-blocking updates which don’t need to block the user interface (like updating a chart).

有时，您不能跳过重新渲染，因为屏幕实际上需要更新。在这种情况下，您可以通过将必须同步的阻塞更新（如输入输入）与不需要阻塞用户界面的非阻塞更新（如更新图表）分开来提高性能。

To prioritize rendering, use one of these Hooks:

要确定渲染的优先级，请使用以下 Hooks 之一：

- [`useTransition`](https://react.dev/reference/react/useTransition) lets you mark a state transition as non-blocking and allow other updates to interrupt it.
- useTransition 允许您将状态转换标记为非阻塞并允许其他更新中断它。
- [`useDeferredValue`](https://react.dev/reference/react/useDeferredValue) lets you defer updating a non-critical part of the UI and let other parts update first.
- useDeferredValue 允许您推迟更新 UI 的非关键部分，让其他部分先更新。

---

## [Other Hooks](https://react.dev/reference/react#other-hooks "Link for Other Hooks")

其他挂钩

These Hooks are mostly useful to library authors and aren’t commonly used in the application code.

这些 Hooks 主要对库作者有用，并且在应用程序代码中不常用。

- [`useDebugValue`](https://react.dev/reference/react/useDebugValue) lets you customize the label React DevTools displays for your custom Hook.
- useDebugValue 允许您自定义 React DevTools 为您的自定义 Hook 显示的标签。
- [`useId`](https://react.dev/reference/react/useId) lets a component associate a unique ID with itself. Typically used with accessibility APIs.
- useId 允许组件将唯一 ID 与自身相关联。通常与可访问性 API 一起使用。
- [`useSyncExternalStore`](https://react.dev/reference/react/useSyncExternalStore) lets a component subscribe to an external store.
- useSyncExternalStore 让组件订阅外部存储。

---

## [Your own Hooks](https://react.dev/reference/react#your-own-hooks "Link for Your own Hooks")

你自己的钩子

You can also [define your own custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component) as JavaScript functions.

您还可以将自己的自定义 Hooks 定义为 JavaScript 函数。



# useCallback

使用回调

`useCallback` is a React Hook that lets you cache a function definition between re-renders.

useCallback 是一个 React Hook，可让您在重新呈现之间缓存函数定义。

```
const cachedFn = useCallback(fn, dependencies)
```

- [Reference](https://react.dev/reference/react/useCallback#reference)
  - [`useCallback(fn, dependencies)`](https://react.dev/reference/react/useCallback#usecallback)
    
    
- 参考  
  useCallback（fn，依赖项）
- [Usage](https://react.dev/reference/react/useCallback#usage)
  - [Skipping re-rendering of components](https://react.dev/reference/react/useCallback#skipping-re-rendering-of-components)
  - 跳过组件的重新渲染
  - [Updating state from a memoized callback](https://react.dev/reference/react/useCallback#updating-state-from-a-memoized-callback)
  - 从记忆回调更新状态
  - [Preventing an Effect from firing too often](https://react.dev/reference/react/useCallback#preventing-an-effect-from-firing-too-often)
  - 防止 Effect 过于频繁地触发
  - [Optimizing a custom Hook](https://react.dev/reference/react/useCallback#optimizing-a-custom-hook)
  - 优化自定义 Hook
- [Troubleshooting](https://react.dev/reference/react/useCallback#troubleshooting)
  - [Every time my component renders, `useCallback` returns a different function](https://react.dev/reference/react/useCallback#every-time-my-component-renders-usecallback-returns-a-different-function)
    
    
  - [I need to call `useCallback` for each list item in a loop, but it’s not allowed](https://react.dev/reference/react/useCallback#i-need-to-call-usememo-for-each-list-item-in-a-loop-but-its-not-allowed)
    
    
- 故障排除  
  每次我的组件呈现时，useCallback 都会返回一个不同的函数  
  我需要为循环中的每个列表项调用 useCallback，但这是不允许的

---

## [Reference](https://react.dev/reference/react/useCallback#reference "Link for Reference")

参考

### [useCallback(fn, dependencies)](https://react.dev/reference/react/useCallback#usecallback "Link for this heading")

useCallback（fn，依赖项）

Call `useCallback` at the top level of your component to cache a function definition between re-renders:

在组件的顶层调用 useCallback 以在重新呈现之间缓存函数定义：

```jsx
import { useCallback } from 'react';

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
```

[See more examples below.](https://react.dev/reference/react/useCallback#usage)

请参阅下面的更多示例。

#### [Parameters](https://react.dev/reference/react/useCallback#parameters "Link for Parameters")

参数

- `fn`: The function value that you want to cache. It can take any arguments and return any values. React will return (not call!) your function back to you during the initial render. On next renders, React will give you the same function again if the `dependencies` have not changed since the last render. Otherwise, it will give you the function that you have passed during the current render, and store it in case it can be reused later. React will not call your function. The function is returned to you so you can decide when and whether to call it.
  
  fn：要缓存的函数值。它可以接受任何参数并返回任何值。 React 将在初始渲染期间返回（而不是调用！）你的函数。在下一次渲染中，如果自上次渲染以来依赖关系没有改变，React 将再次为您提供相同的功能。否则，它将为您提供您在当前渲染期间传递的功能，并将其存储起来以备日后重用。 React 不会调用你的函数。该函数返回给您，因此您可以决定何时以及是否调用它。
  
  

- `dependencies`: The list of all reactive values referenced inside of the `fn` code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is [configured for React](https://react.dev/learn/editor-setup#linting), it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like `[dep1, dep2, dep3]`. React will compare each dependency with its previous value using the [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) comparison algorithm.
  
  dependencies：在 fn 代码中引用的所有反应值的列表。响应式值包括 props、state 以及直接在组件主体内声明的所有变量和函数。如果你的 linter 是为 React 配置的，它将验证每个反应值是否正确指定为依赖项。依赖项列表必须具有固定数量的项，并且像 [dep1, dep2, dep3] 一样内联编写。 React 将使用 Object.is 比较算法将每个依赖项与其先前的值进行比较。
  
  

#### [Returns](https://react.dev/reference/react/useCallback#returns "Link for Returns")



On the initial render, `useCallback` returns the `fn` function you have passed.

在初始渲染中，useCallback 返回您传递的 fn 函数。

During subsequent renders, it will either return an already stored `fn` function from the last render (if the dependencies haven’t changed), or return the `fn` function you have passed during this render.

在后续渲染期间，它将返回上次渲染中已存储的 fn 函数（如果依赖项未更改），或者返回您在此渲染期间传递的 fn 函数。

#### [Caveats](https://react.dev/reference/react/useCallback#caveats "Link for Caveats")

注意事项

- `useCallback` is a Hook, so you can only call it **at the top level of your component** or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.
- useCallback 是一个 Hook，所以你只能在你的组件顶层或者你自己的 Hook 中调用它。您不能在循环或条件内调用它。如果需要，提取一个新组件并将状态移入其中。
- React **will not throw away the cached function unless there is a specific reason to do that.** For example, in development, React throws away the cache when you edit the file of your component. Both in development and in production, React will throw away the cache if your component suspends during the initial mount. In the future, React may add more features that take advantage of throwing away the cache—for example, if React adds built-in support for virtualized lists in the future, it would make sense to throw away the cache for items that scroll out of the virtualized table viewport. This should match your expectations if you rely on `useCallback` as a performance optimization. Otherwise, a [state variable](https://react.dev/reference/react/useState#im-trying-to-set-state-to-a-function-but-it-gets-called-instead) or a [ref](https://react.dev/reference/react/useRef#avoiding-recreating-the-ref-contents) may be more appropriate.
- 除非有特定原因，否则 React 不会丢弃缓存的函数。例如，在开发中，当您编辑组件的文件时，React 会丢弃缓存。在开发和生产中，如果您的组件在初始挂载期间挂起，React 将丢弃缓存。将来，React 可能会添加更多利用丢弃缓存的功能——例如，如果 React 将来添加对虚拟化列表的内置支持，则丢弃滚动出的项目的缓存是有意义的虚拟表视口。如果您依赖 useCallback 作为性能优化，这应该符合您的期望。否则，状态变量或 ref 可能更合适。

---

## [Usage](https://react.dev/reference/react/useCallback#usage "Link for Usage")

用法

### [Skipping re-rendering of components](https://react.dev/reference/react/useCallback#skipping-re-rendering-of-components "Link for Skipping re-rendering of components")

跳过组件的重新渲染

When you optimize rendering performance, you will sometimes need to cache the functions that you pass to child components. Let’s first look at the syntax for how to do this, and then see in which cases it’s useful.

优化渲染性能时，有时需要缓存传递给子组件的函数。让我们首先看看如何执行此操作的语法，然后看看它在哪些情况下有用。

To cache a function between re-renders of your component, wrap its definition into the `useCallback` Hook:

要在组件的重新渲染之间缓存函数，请将其定义包装到 useCallback Hook 中：

```jsx
import { useCallback } from 'react';

function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
  // ...
```

You need to pass two things to `useCallback`:

你需要传递两个东西给 useCallback：

1. A function definition that you want to cache between re-renders.
   
   要在重新呈现之间缓存的函数定义。
2. A list of dependencies including every value within your component that’s used inside your function.
   
   依赖项列表，包括组件中在函数中使用的每个值。

On the initial render, the returned function you’ll get from `useCallback` will be the function you passed.

在初始渲染中，您将从 useCallback 获得的返回函数将是您传递的函数。

On the following renders, React will compare the dependencies with the dependencies you passed during the previous render. If none of the dependencies have changed (compared with [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)), `useCallback` will return the same function as before. Otherwise, `useCallback` will return the function you passed on *this* render.

在接下来的渲染中，React 会将依赖项与您在上一次渲染期间传递的依赖项进行比较。如果没有任何依赖项发生变化（与 Object.is 相比），useCallback 将返回与之前相同的函数。否则，useCallback 将返回您在此渲染上传递的函数。

In other words, `useCallback` caches a function between re-renders until its dependencies change.

换句话说，useCallback 在重新渲染之间缓存一个函数，直到它的依赖项发生变化。

**Let’s walk through an example to see when this is useful.**

让我们通过一个例子来看看这在什么时候有用。

Say you’re passing a `handleSubmit` function down from the `ProductPage` to the `ShippingForm` component:

假设您要将一个 handleSubmit 函数从 ProductPage 向下传递到 ShippingForm 组件：

```jsx
function ProductPage({ productId, referrer, theme }) {
  // ...
  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
```

You’ve noticed that toggling the `theme` prop freezes the app for a moment, but if you remove `<ShippingForm />` from your JSX, it feels fast. This tells you that it’s worth trying to optimize the `ShippingForm` component.

您已经注意到切换 theme 属性会使应用程序冻结片刻，但是如果您从 JSX 中删除 `<ShippingForm />`，感觉会很快。这告诉您值得尝试优化 ShippingForm 组件。

**By default, when a component re-renders, React re-renders all of its children recursively.** This is why, when `ProductPage` re-renders with a different `theme`, the `ShippingForm` component *also* re-renders. This is fine for components that don’t require much calculation to re-render. But if you verified a re-render is slow, you can tell `ShippingForm` to skip re-rendering when its props are the same as on last render by wrapping it in [`memo`:](https://react.dev/reference/react/memo)

默认情况下，当一个组件重新渲染时，React 会递归地重新渲染它的所有子组件。这就是为什么当 ProductPage 使用不同的主题重新呈现时，ShippingForm 组件也会重新呈现。这对于不需要太多计算来重新渲染的组件来说很好。但是如果你确认重新渲染很慢，你可以告诉 ShippingForm 在它的道具与上次渲染相同时通过将其包装在备忘录中来跳过重新渲染：

```jsx
import { memo } from 'react';

const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  // ...
});
```

**With this change, `ShippingForm` will skip re-rendering if all of its props are the *same* as on the last render.** This is when caching a function becomes important! Let’s say you defined `handleSubmit` without `useCallback`:

通过此更改，如果 ShippingForm 的所有道具都与上次渲染相同，则 ShippingForm 将跳过重新渲染。这是缓存函数变得重要的时候！假设您定义了没有 useCallback 的 handleSubmit：

```jsx
function ProductPage({ productId, referrer, theme }) {
  // Tell React to cache your function between re-renders...
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]); // ...so as long as these dependencies don't change...

  return (
    <div className={theme}>
      {/* ...ShippingForm will receive the same props and can skip re-rendering */}
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}
```

**In JavaScript, a `function () {}` or `() => {}` always creates a *different* function,** similar to how the `{}` object literal always creates a new object. Normally, this wouldn’t be a problem, but it means that `ShippingForm` props will never be the same, and your [`memo`](https://react.dev/reference/react/memo) optimization won’t work. This is where `useCallback` comes in handy:

在 JavaScript 中，函数 () {} 或 () => {} 总是创建不同的函数，类似于 {} 对象字面量总是创建新对象的方式。通常，这不是问题，但这意味着 ShippingForm 道具永远不会相同，并且您的备忘录优化将不起作用。这是 useCallback 派上用场的地方：

```jsx
function ProductPage({ productId, referrer, theme }) {
  // Tell React to cache your function between re-renders...
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]); // ...so as long as these dependencies don't change...

  return (
    <div className={theme}>
      {/* ...ShippingForm will receive the same props and can skip re-rendering */}
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}
```

**By wrapping `handleSubmit` in `useCallback`, you ensure that it’s the *same* function between the re-renders** (until dependencies change). You don’t *have to* wrap a function in `useCallback` unless you do it for some specific reason. In this example, the reason is that you pass it to a component wrapped in [`memo`,](https://react.dev/reference/react/memo) and this lets it skip re-rendering. There are other reasons you might need `useCallback` which are described further on this page.

通过将 handleSubmit 包装在 useCallback 中，您可以确保它在重新呈现之间是相同的函数（直到依赖关系发生变化）。除非出于某些特定原因，否则不必将函数包装在 useCallback 中。在此示例中，原因是您将它传递给包装在 memo 中的组件，这样它就可以跳过重新渲染。您可能需要 useCallback 的其他原因将在本页进一步描述。

### Note

笔记

**You should only rely on `useCallback` as a performance optimization.** If your code doesn’t work without it, find the underlying problem and fix it first. Then you may add `useCallback` back.

您应该只依赖 useCallback 作为性能优化。如果你的代码没有它就不能工作，找到潜在的问题并首先修复它。然后你可以添加 useCallback。

##### DEEP DIVE

深潜

#### [How is useCallback related to useMemo?](https://react.dev/reference/react/useCallback#how-is-usecallback-related-to-usememo "Link for How is useCallback related to useMemo?")

useCallback 与 useMemo 有什么关系？



You will often see [`useMemo`](https://react.dev/reference/react/useMemo) alongside `useCallback`. They are both useful when you’re trying to optimize a child component. They let you [memoize](https://en.wikipedia.org/wiki/Memoization) (or, in other words, cache) something you’re passing down:

你会经常看到 useMemo 和 useCallback。当您尝试优化子组件时，它们都很有用。他们让你记住（或者，换句话说，缓存）你传递的东西：

```tsx
import { useMemo, useCallback } from 'react';

function ProductPage({ productId, referrer }) {
  const product = useData('/product/' + productId);

  const requirements = useMemo(() => { // Calls your function and caches its result
    return computeRequirements(product);
  }, [product]);

  const handleSubmit = useCallback((orderDetails) => { // Caches your function itself
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);

  return (
    <div className={theme}>
      <ShippingForm requirements={requirements} onSubmit={handleSubmit} />
    </div>
  );
}
```

The difference is in *what* they’re letting you cache:

不同之处在于它们让你缓存什么：

- **[`useMemo`](https://react.dev/reference/react/useMemo) caches the *result* of calling your function.** In this example, it caches the result of calling `computeRequirements(product)` so that it doesn’t change unless `product` has changed. This lets you pass the `requirements` object down without unnecessarily re-rendering `ShippingForm`. When necessary, React will call the function you’ve passed during rendering to calculate the result.
- useMemo 缓存调用函数的结果。在此示例中，它缓存了调用 computeRequirements(product) 的结果，因此除非产品已更改，否则它不会更改。这使您可以向下传递需求对象，而不必重新呈现 ShippingForm。必要时，React 会调用您在渲染过程中传递的函数来计算结果。
- **`useCallback` caches *the function itself.*** Unlike `useMemo`, it does not call the function you provide. Instead, it caches the function you provided so that `handleSubmit` *itself* doesn’t change unless `productId` or `referrer` has changed. This lets you pass the `handleSubmit` function down without unnecessarily re-rendering `ShippingForm`. Your code won’t run until the user submits the form.
- useCallback 缓存函数本身。与 useMemo 不同的是，它不会调用你提供的函数。相反，它会缓存您提供的函数，以便 handleSubmit 本身不会更改，除非 productId 或 referrer 已更改。这使您可以向下传递 handleSubmit 函数，而不必重新呈现 ShippingForm。在用户提交表单之前，您的代码不会运行。

If you’re already familiar with [`useMemo`,](https://react.dev/reference/react/useMemo) you might find it helpful to think of `useCallback` as this:

如果您已经熟悉 useMemo，您可能会发现将 useCallback 视为这样会很有帮助：

```jsx
// Simplified implementation (inside React)
function useCallback(fn, dependencies) {
  return useMemo(() => fn, dependencies);
}
```

[Read more about the difference between `useMemo` and `useCallback`.](https://react.dev/reference/react/useMemo#memoizing-a-function)

详细了解 useMemo 和 useCallback 之间的区别。

##### DEEP DIVE

深潜

#### [Should you add useCallback everywhere?](https://react.dev/reference/react/useCallback#should-you-add-usecallback-everywhere "Link for Should you add useCallback everywhere?")

你应该在所有地方添加 useCallback 吗？

If your app is like this site, and most interactions are coarse (like replacing a page or an entire section), memoization is usually unnecessary. On the other hand, if your app is more like a drawing editor, and most interactions are granular (like moving shapes), then you might find memoization very helpful.

如果您的应用程序类似于此站点，并且大多数交互都很粗糙（例如替换页面或整个部分），则通常不需要记忆。另一方面，如果您的应用更像是一个绘图编辑器，并且大多数交互都是颗粒状的（如移动形状），那么您可能会发现记忆非常有用。

Caching a function with `useCallback` is only valuable in a few cases:

使用 useCallback 缓存函数仅在少数情况下有价值：

- You pass it as a prop to a component wrapped in [`memo`.](https://react.docschina.org/reference/react/memo) You want to skip re-rendering if the value hasn’t changed. Memoization lets your component re-render only if dependencies changed.
- 您将它作为 prop 传递给包裹在备忘录中的组件。如果值没有改变，你想跳过重新渲染。 Memoization 让你的组件只有在依赖关系发生变化时才重新渲染。
- The function you’re passing is later used as a dependency of some Hook. For example, another function wrapped in `useCallback` depends on it, or you depend on this function from [`useEffect.`](https://react.docschina.org/reference/react/useEffect)
- 您传递的函数稍后用作某些 Hook 的依赖项。例如，另一个包装在 useCallback 中的函数依赖它，或者你从 useEffect 中依赖这个函数。

There is no benefit to wrapping a function in `useCallback` in other cases. There is no significant harm to doing that either, so some teams choose to not think about individual cases, and memoize as much as possible. The downside is that code becomes less readable. Also, not all memoization is effective: a single value that’s “always new” is enough to break memoization for an entire component.

在其他情况下，将函数包装在 useCallback 中没有任何好处。这样做也没有什么大不了的，所以一些团队选择不考虑个别情况，并尽可能多地记忆。缺点是代码变得不那么可读了。此外，并不是所有的记忆都是有效的：一个“永远是新的”的单一值就足以破坏整个组件的记忆。

Note that `useCallback` does not prevent *creating* the function. You’re always creating a function (and that’s fine!), but React ignores it and gives you back a cached function if nothing changed.

请注意，useCallback 不会阻止创建函数。你总是在创建一个函数（这很好！），但 React 会忽略它并在没有任何改变的情况下返回一个缓存的函数。

**In practice, you can make a lot of memoization unnecessary by following a few principles:**

在实践中，您可以通过遵循一些原则来避免大量记忆：

1. When a component visually wraps other components, let it [accept JSX as children.](https://react.docschina.org/learn/passing-props-to-a-component#passing-jsx-as-children) Then, if the wrapper component updates its own state, React knows that its children don’t need to re-render.
   
   当一个组件在视觉上包装其他组件时，让它接受 JSX 作为子组件。然后，如果包装器组件更新了它自己的状态，React 知道它的子组件不需要重新渲染。
2. Prefer local state and don’t [lift state up](https://react.docschina.org/learn/sharing-state-between-components) any further than necessary. Don’t keep transient state like forms and whether an item is hovered at the top of your tree or in a global state library.
   
   更喜欢本地状态，不要在不必要的情况下进一步提升状态。不要保持像表单这样的瞬时状态，无论项目是否悬停在树的顶部或全局状态库中。
3. Keep your [rendering logic pure.](https://react.docschina.org/learn/keeping-components-pure) If re-rendering a component causes a problem or produces some noticeable visual artifact, it’s a bug in your component! Fix the bug instead of adding memoization.
   
   保持你的渲染逻辑纯净。如果重新渲染一个组件导致了一个问题或者产生了一些明显的视觉伪像，那么它就是你的组件中的一个错误！修复错误而不是添加记忆。
4. Avoid [unnecessary Effects that update state.](https://react.docschina.org/learn/you-might-not-need-an-effect) Most performance problems in React apps are caused by chains of updates originating from Effects that cause your components to render over and over.
   
   避免更新状态的不必要的效果。 React 应用程序中的大多数性能问题都是由 Effects 引起的更新链引起的，这些更新链导致组件反复渲染。
5. Try to [remove unnecessary dependencies from your Effects.](https://react.docschina.org/learn/removing-effect-dependencies) For example, instead of memoization, it’s often simpler to move some object or a function inside an Effect or outside the component.
   
   尝试从 Effects 中删除不必要的依赖项。例如，在 Effect 内部或组件外部移动某些对象或函数通常比记忆更简单。

If a specific interaction still feels laggy, [use the React Developer Tools profiler](https://legacy.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html) to see which components benefit the most from memoization, and add memoization where needed. These principles make your components easier to debug and understand, so it’s good to follow them in any case. In long term, we’re researching [doing memoization automatically](https://www.youtube.com/watch?v=lGEMwh32soc) to solve this once and for all.

如果特定交互仍然感觉滞后，请使用 React Developer Tools 分析器查看哪些组件从记忆中获益最多，并在需要的地方添加记忆。这些原则使您的组件更易于调试和理解，因此在任何情况下都最好遵循它们。从长远来看，我们正在研究自动记忆以一劳永逸地解决这个问题。

#### [The difference between useCallback and declaring a function directly](https://react.dev/reference/react/useCallback#examples-rerendering "Link for The difference between useCallback and declaring a function directly")

useCallback 和直接声明一个函数的区别

1. Skipping re-rendering with `useCallback` and `memo`2. Always re-rendering a component

#### 

Example 1 of 2: 

Skipping re-rendering with `useCallback` and `memo` [](https://react.dev/reference/react/useCallback#skipping-re-rendering-with-usecallback-and-memo "Link for this heading")

Example 1 of 2：使用 useCallback 和 memo 跳过重新渲染

In this example, the `ShippingForm` component is **artificially slowed down** so that you can see what happens when a React component you’re rendering is genuinely slow. Try incrementing the counter and toggling the theme.

在此示例中，ShippingForm 组件被人为地减慢了速度，以便您可以看到当您渲染的 React 组件真正变慢时会发生什么。尝试增加计数器并切换主题。

Incrementing the counter feels slow because it forces the slowed down `ShippingForm` to re-render. That’s expected because the counter has changed, and so you need to reflect the user’s new choice on the screen.

增加计数器感觉很慢，因为它迫使减速的 ShippingForm 重新呈现。这是预料之中的，因为计数器已经改变，所以你需要在屏幕上反映用户的新选择。

Next, try toggling the theme. **Thanks to `useCallback` together with [`memo`](https://react.dev/reference/react/memo), it’s fast despite the artificial slowdown!** `ShippingForm` skipped re-rendering because the `handleSubmit` function has not changed. The `handleSubmit` function has not changed because both `productId` and `referrer` (your `useCallback` dependencies) haven’t changed since last render.

接下来，尝试切换主题。多亏了 useCallback 和 memo，尽管有人为的减速，它还是很快的！ ShippingForm 跳过了重新渲染，因为 handleSubmit 函数没有改变。 handleSubmit 函数没有改变，因为 productId 和 referrer（你的 useCallback 依赖项）自上次渲染以来都没有改变。

App.jsProductPage.jsShippingForm.js

Reset

Fork

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

import { useCallback } from 'react';

import ShippingForm from './ShippingForm.js';

export default function ProductPage({ productId, referrer, theme }) {

const handleSubmit = useCallback((orderDetails) => {

post('/product/' + productId + '/buy', {

referrer,

orderDetails,

});

}, [productId, referrer]);

return (

<div className={theme}>

<ShippingForm onSubmit={handleSubmit} />

</div>

);

}

function post(url, data) {

// Imagine this sends a request...

console.log('POST /' + url);

console.log(data);

}

Show more

Next Example

---

### Updating state from a memoized callback [](https://react.dev/reference/react/useCallback#updating-state-from-a-memoized-callback "Link for Updating state from a memoized callback")

从记忆回调更新状态

Sometimes, you might need to update state based on previous state from a memoized callback.

有时，您可能需要根据记忆回调中的先前状态更新状态。

This `handleAddTodo` function specifies `todos` as a dependency because it computes the next todos from it:

这个 handleAddTodo 函数将 todos 指定为依赖项，因为它从中计算下一个 todos：

```
function TodoList() {  const [todos, setTodos] = useState([]);  const handleAddTodo = useCallback((text) => {    const newTodo = { id: nextId++, text };    setTodos([...todos, newTodo]);  }, [todos]);  // ...
```

You’ll usually want memoized functions to have as few dependencies as possible. When you read some state only to calculate the next state, you can remove that dependency by passing an [updater function](https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state) instead:

您通常希望记忆函数具有尽可能少的依赖性。当您读取某些状态只是为了计算下一个状态时，您可以通过传递更新函数来移除该依赖性：

```
function TodoList() {  const [todos, setTodos] = useState([]);  const handleAddTodo = useCallback((text) => {    const newTodo = { id: nextId++, text };    setTodos(todos => [...todos, newTodo]);  }, []); // ✅ No need for the todos dependency  // ...
```

Here, instead of making `todos` a dependency and reading it inside, you pass an instruction about *how* to update the state (`todos => [...todos, newTodo]`) to React. [Read more about updater functions.](https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state)

在这里，不是将 todos 设置为依赖项并在内部读取它，而是将有关如何更新状态 (todos => [...todos, newTodo]) 的指令传递给 React。阅读有关更新程序功能的更多信息。

---

### Preventing an Effect from firing too often [](https://react.dev/reference/react/useCallback#preventing-an-effect-from-firing-too-often "Link for Preventing an Effect from firing too often")

防止 Effect 过于频繁地触发

Sometimes, you might want to call a function from inside an [Effect:](https://react.dev/learn/synchronizing-with-effects)

有时，您可能想从 Effect 内部调用函数：

```
function ChatRoom({ roomId }) {  const [message, setMessage] = useState('');  function createOptions() {    return {      serverUrl: 'https://localhost:1234',      roomId: roomId    };  }  useEffect(() => {    const options = createOptions();    const connection = createConnection();    connection.connect();    // ...
```

This creates a problem. [Every reactive value must be declared as a dependency of your Effect.](https://react.dev/learn/lifecycle-of-reactive-effects#react-verifies-that-you-specified-every-reactive-value-as-a-dependency) However, if you declare `createOptions` as a dependency, it will cause your Effect to constantly reconnect to the chat room:

这就产生了一个问题。每个反应值都必须声明为 Effect 的依赖项。但是，如果您将 createOptions 声明为依赖项，它将导致您的 Effect 不断重新连接到聊天室：

```
  useEffect(() => {    const options = createOptions();    const connection = createConnection();    connection.connect();    return () => connection.disconnect();  }, [createOptions]); // 🔴 Problem: This dependency changes on every render  // ...
```

To solve this, you can wrap the function you need to call from an Effect into `useCallback`:

为了解决这个问题，您可以将需要从 Effect 调用的函数包装到 useCallback 中：

```
function ChatRoom({ roomId }) {  const [message, setMessage] = useState('');  const createOptions = useCallback(() => {    return {      serverUrl: 'https://localhost:1234',      roomId: roomId    };  }, [roomId]); // ✅ Only changes when roomId changes  useEffect(() => {    const options = createOptions();    const connection = createConnection();    connection.connect();    return () => connection.disconnect();  }, [createOptions]); // ✅ Only changes when createOptions changes  // ...
```

This ensures that the `createOptions` function is the same between re-renders if the `roomId` is the same. **However, it’s even better to remove the need for a function dependency.** Move your function *inside* the Effect:

如果 roomId 相同，这可确保 createOptions 函数在重新渲染之间相同。然而，最好是消除对函数依赖的需求。在 Effect 中移动你的函数：

```
function ChatRoom({ roomId }) {  const [message, setMessage] = useState('');  useEffect(() => {    function createOptions() { // ✅ No need for useCallback or function dependencies!      return {        serverUrl: 'https://localhost:1234',        roomId: roomId      };    }    const options = createOptions();    const connection = createConnection();    connection.connect();    return () => connection.disconnect();  }, [roomId]); // ✅ Only changes when roomId changes  // ...
```

Now your code is simpler and doesn’t need `useCallback`. [Learn more about removing Effect dependencies.](https://react.dev/learn/removing-effect-dependencies#move-dynamic-objects-and-functions-inside-your-effect)

现在您的代码更简单了，不需要 useCallback。了解有关删除 Effect 依赖项的更多信息。

---

### Optimizing a custom Hook [](https://react.dev/reference/react/useCallback#optimizing-a-custom-hook "Link for Optimizing a custom Hook")

优化自定义 Hook

If you’re writing a [custom Hook,](https://react.dev/learn/reusing-logic-with-custom-hooks) it’s recommended to wrap any functions that it returns into `useCallback`:

如果您正在编写自定义 Hook，建议将它返回的任何函数包装到 useCallback 中：

```
function useRouter() {  const { dispatch } = useContext(RouterStateContext);  const navigate = useCallback((url) => {    dispatch({ type: 'navigate', url });  }, [dispatch]);  const goBack = useCallback(() => {    dispatch({ type: 'back' });  }, [dispatch]);  return {    navigate,    goBack,  };}
```

This ensures that the consumers of your Hook can optimize their own code when needed.

这确保了 Hook 的使用者可以在需要时优化他们自己的代码。

---

## Troubleshooting [](https://react.dev/reference/react/useCallback#troubleshooting "Link for Troubleshooting")

故障排除

### Every time my component renders, `useCallback` returns a different function [](https://react.dev/reference/react/useCallback#every-time-my-component-renders-usecallback-returns-a-different-function "Link for this heading")

每次我的组件呈现时，useCallback 都会返回一个不同的函数

Make sure you’ve specified the dependency array as a second argument!

确保您已将依赖项数组指定为第二个参数！

If you forget the dependency array, `useCallback` will return a new function every time:

如果你忘记依赖数组，useCallback 每次都会返回一个新函数：

```
function ProductPage({ productId, referrer }) {  const handleSubmit = useCallback((orderDetails) => {    post('/product/' + productId + '/buy', {      referrer,      orderDetails,    });  }); // 🔴 Returns a new function every time: no dependency array  // ...
```

This is the corrected version passing the dependency array as a second argument:

这是将依赖项数组作为第二个参数传递的更正版本：

```
function ProductPage({ productId, referrer }) {  const handleSubmit = useCallback((orderDetails) => {    post('/product/' + productId + '/buy', {      referrer,      orderDetails,    });  }, [productId, referrer]); // ✅ Does not return a new function unnecessarily  // ...
```

If this doesn’t help, then the problem is that at least one of your dependencies is different from the previous render. You can debug this problem by manually logging your dependencies to the console:

如果这没有帮助，那么问题是您的至少一个依赖项与之前的渲染不同。您可以通过手动将依赖项记录到控制台来调试此问题：

```
  const handleSubmit = useCallback((orderDetails) => {    // ..  }, [productId, referrer]);  console.log([productId, referrer]);
```

You can then right-click on the arrays from different re-renders in the console and select “Store as a global variable” for both of them. Assuming the first one got saved as `temp1` and the second one got saved as `temp2`, you can then use the browser console to check whether each dependency in both arrays is the same:

然后，您可以在控制台中右键单击来自不同重新渲染的数组，并为它们选择“存储为全局变量”。假设第一个保存为 temp1，第二个保存为 temp2，然后您可以使用浏览器控制台检查两个数组中的每个依赖项是否相同：

```
Object.is(temp1[0], temp2[0]); // Is the first dependency the same between the arrays?Object.is(temp1[1], temp2[1]); // Is the second dependency the same between the arrays?Object.is(temp1[2], temp2[2]); // ... and so on for every dependency ...
```

When you find which dependency is breaking memoization, either find a way to remove it, or [memoize it as well.](https://react.dev/reference/react/useMemo#memoizing-a-dependency-of-another-hook)

当您发现哪个依赖项正在破坏记忆时，要么找到一种方法将其删除，要么也将其记忆化。

---

### I need to call `useCallback` for each list item in a loop, but it’s not allowed [](https://react.dev/reference/react/useCallback#i-need-to-call-usememo-for-each-list-item-in-a-loop-but-its-not-allowed "Link for this heading")

我需要为循环中的每个列表项调用 useCallback，但这是不允许的

Suppose the `Chart` component is wrapped in [`memo`](https://react.dev/reference/react/memo). You want to skip re-rendering every `Chart` in the list when the `ReportList` component re-renders. However, you can’t call `useCallback` in a loop:

假设 Chart 组件被包裹在 memo 中。当 ReportList 组件重新呈现时，您希望跳过重新呈现列表中的每个图表。但是，您不能在循环中调用 useCallback：

```
function ReportList({ items }) {  return (    <article>      {items.map(item => {        // 🔴 You can't call useCallback in a loop like this:        const handleClick = useCallback(() => {          sendReport(item)        }, [item]);        return (          <figure key={item.id}>            <Chart onClick={handleClick} />          </figure>        );      })}    </article>  );}
```

Instead, extract a component for an individual item, and put `useCallback` there:

相反，提取单个项目的组件，并将 useCallback 放在那里：

```
function ReportList({ items }) {  return (    <article>      {items.map(item =>        <Report key={item.id} item={item} />      )}    </article>  );}function Report({ item }) {  // ✅ Call useCallback at the top level:  const handleClick = useCallback(() => {    sendReport(item)  }, [item]);  return (    <figure>      <Chart onClick={handleClick} />    </figure>  );}
```

Alternatively, you could remove `useCallback` in the last snippet and instead wrap `Report` itself in [`memo`.](https://react.dev/reference/react/memo) If the `item` prop does not change, `Report` will skip re-rendering, so `Chart` will skip re-rendering too:

或者，您可以删除最后一个代码段中的 useCallback，而是将 Report 本身包装在 memo 中。如果 item 属性没有改变，Report 将跳过重新渲染，因此 Chart 也将跳过重新渲染：

```
function ReportList({ items }) {  // ...}const Report = memo(function Report({ item }) {  function handleClick() {    sendReport(item);  }  return (    <figure>      <Chart onClick={handleClick} />    </figure>  );});
```
