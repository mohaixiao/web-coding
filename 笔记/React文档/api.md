# memo

memo 允许你在 props 不变时跳过重新渲染组件。

- [Usage](https://react.docschina.org/reference/react/memo#usage)
  - [Skipping re-rendering when props are unchanged](https://react.docschina.org/reference/react/memo#skipping-re-rendering-when-props-are-unchanged)
  - 道具不变时跳过重新渲染
  - [Updating a memoized component using state](https://react.docschina.org/reference/react/memo#updating-a-memoized-component-using-state)
  - 使用状态更新记忆组件
  - [Updating a memoized component using a context](https://react.docschina.org/reference/react/memo#updating-a-memoized-component-using-a-context)
  - 使用上下文更新记忆组件
  - [Minimizing props changes](https://react.docschina.org/reference/react/memo#minimizing-props-changes)
  - 最小化道具变化
  - [Specifying a custom comparison function](https://react.docschina.org/reference/react/memo#specifying-a-custom-comparison-function)
  - 指定自定义比较函数

- [Troubleshooting](https://react.docschina.org/reference/react/memo#troubleshooting)
  - [My component re-renders when a prop is an object, array, or function](https://react.docschina.org/reference/react/memo#my-component-rerenders-when-a-prop-is-an-object-or-array)
  - 当 prop 是对象、数组或函数时，我的组件会重新渲染

在 memo 中包装一个组件以获得该组件的 memoized 版本。只要组件的 props 没有改变，当它的父组件被重新渲染时，你的组件的这个记忆版本通常不会被重新渲染。但 React 可能仍会重新渲染它：记忆化是一种性能优化，而不是保证。

#### [Parameters](https://react.docschina.org/reference/react/memo#parameters "Link for Parameters")

参数

- `Component`: The component that you want to memoize. The `memo` does not modify this component, but returns a new, memoized component instead. Any valid React component, including functions and [`forwardRef`](https://react.docschina.org/reference/react/forwardRef) components, is accepted.
  
  组件：要记忆的组件。备忘录不会修改此组件，而是返回一个新的备忘组件。接受任何有效的 React 组件，包括函数和 forwardRef 组件。

- **optional** `arePropsEqual`: A function that accepts two arguments: the component’s previous props, and its new props. It should return `true` if the old and new props are equal: that is, if the component will render the same output and behave in the same way with the new props as with the old. Otherwise it should return `false`. Usually, you will not specify this function. By default, React will compare each prop with [`Object.is`.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
  
  可选的 arePropsEqual：一个接受两个参数的函数：组件以前的 props 和它的新 props。如果新旧 props 相等，它应该返回 true：也就是说，如果组件将呈现相同的输出并且新 props 的行为方式与旧 props 相同。否则它应该返回 false。通常，您不会指定此功能。默认情况下，React 会将每个 prop 用Object.is 进行比较。

#### [Returns](https://react.docschina.org/reference/react/memo#returns "Link for Returns")

`memo` returns a new React component. It behaves the same as the component provided to `memo` except that React will not always re-render it when its parent is being re-rendered unless its props have changed.

memo 返回一个新的 React 组件。它的行为与提供给 memo 的组件相同，除了 React 不会总是在其父组件被重新渲染时重新渲染它，除非它的 props 发生了变化。

## [Usage](https://react.docschina.org/reference/react/memo#usage "Link for Usage")

用法

### [Skipping re-rendering when props are unchanged](https://react.docschina.org/reference/react/memo#skipping-re-rendering-when-props-are-unchanged "Link for Skipping re-rendering when props are unchanged")

道具不变时跳过重新渲染

React normally re-renders a component whenever its parent re-renders. With `memo`, you can create a component that React will not re-render when its parent re-renders so long as its new props are the same as the old props. Such a component is said to be *memoized*.

React 通常会在父组件重新渲染时重新渲染组件。使用`memo`，您可以创建一个组件，只要其新道具与旧道具相同，React 就不会在其父级重新渲染时重新渲染。这样的组件被称为记忆化的。

To memoize a component, wrap it in `memo` and use the value that it returns in place of your original component:

要记忆组件，请将其包装在 memo 中并使用它返回的值代替原始组件：

```
const Greeting = memo(function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
});

export default Greeting;
```

A React component should always have [pure rendering logic.](https://react.docschina.org/learn/keeping-components-pure) This means that it must return the same output if its props, state, and context haven’t changed. By using `memo`, you are telling React that your component complies with this requirement, so React doesn’t need to re-render as long as its props haven’t changed. Even with `memo`, your component will re-render if its own state changes or if a context that it’s using changes.

React 组件应该始终具有纯渲染逻辑。这意味着如果它的属性、状态和上下文没有改变，它必须返回相同的输出。通过使用备忘录，你告诉 React 你的组件符合这个要求，所以只要它的 props 没有改变，React 就不需要重新渲染。即使使用备忘录，如果组件自身的状态发生变化或者它使用的上下文发生变化，您的组件也会重新渲染。

In this example, notice that the `Greeting` component re-renders whenever `name` is changed (because that’s one of its props), but not when `address` is changed (because it’s not passed to `Greeting` as a prop):

在此示例中，请注意 Greeting 组件会在 name 更改时重新呈现（因为这是它的 props 之一），但不会在 address 更改时重新呈现（因为它没有作为 prop 传递给 Greeting）：

```
import { memo, useState } from 'react';

export default function MyApp() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <label>
        Name{': '}
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Address{': '}
        <input value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </>
  );
}

const Greeting = memo(function Greeting({ name }) {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  return <h3>Hello{name && ', '}{name}!</h3>;
});

```

**You should only rely on `memo` as a performance optimization.** If your code doesn’t work without it, find the underlying problem and fix it first. Then you may add `memo` to improve performance.

你应该只依赖备忘录作为性能优化。如果你的代码没有它就不能工作，找到潜在的问题并首先修复它。然后您可以添加备忘录以提高性能。

#### Should you add memo everywhere?


