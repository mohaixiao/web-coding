# Data Fetching

数据抓取

The Next.js App Router introduces a new, simplified data fetching system built on React and the Web platform. This page will go through the fundamental concepts and patterns to help you manage your data's lifecycle.

Next.js App Router 引入了一个新的、简化的数据获取系统，该系统构建在 React 和 Web 平台上。本页将介绍基本概念和模式，以帮助您管理数据的生命周期。

Here's a quick overview of the recommendations on this page:

以下是此页面上的建议的简要概述：

1. [Fetch data on the server](https://nextjs.org/docs/app/building-your-application/data-fetching#fetching-data-on-the-server) using Server Components.
   
   使用服务器组件在服务器上获取数据。

2. [Fetch data in parallel](https://nextjs.org/docs/app/building-your-application/data-fetching#parallel-and-sequential-data-fetching) to minimize waterfalls and reduce loading times.
   
   并行获取数据以最小化瀑布并减少加载时间。

3. For Layouts and Pages, [fetch data where it's used](https://nextjs.org/docs/app/building-your-application/data-fetching#automatic-fetch-request-deduping). Next.js will automatically dedupe requests in a tree.
   
   对于布局和页面，在使用的地方获取数据。 Next.js 将自动对树中的请求进行重复数据删除。

4. Use [Loading UI, Streaming and Suspense](https://nextjs.org/docs/app/building-your-application/data-fetching#streaming-and-suspense) to progressively render a page and show a result to the user while the rest of the content loads.
   
   使用 Loading UI、Streaming 和 Suspense 逐步呈现页面并在加载其余内容时向用户显示结果。

## [The `fetch()` API](https://nextjs.org/docs/app/building-your-application/data-fetching#the-fetch-api)

获取fetch() API

The new data fetching system is built on top of the native [`fetch()` Web API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and makes use of `async` and `await` in Server Components.

新的数据获取系统建立在原生的 fetch() Web API 之上  
并在服务器组件中使用异步和等待。

- React extends `fetch` to provide [automatic request deduping](https://nextjs.org/docs/app/building-your-application/data-fetching#automatic-fetch-request-deduping).
- React 扩展了 fetch 以提供自动请求重复数据删除。
- Next.js extends the `fetch` options object to allow each request to set its own [caching and revalidating](https://nextjs.org/docs/app/building-your-application/data-fetching/caching) rules.
- Next.js 扩展了获取选项对象以允许每个请求设置自己的缓存和重新验证规则。

[Learn how to use `fetch` in Next.js](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching).

了解如何在 Next.js 中使用 fetch。

## [Fetching Data on the Server](https://nextjs.org/docs/app/building-your-application/data-fetching#fetching-data-on-the-server)

在服务器上获取数据

Whenever possible, we recommend fetching data in [Server Components](https://nextjs.org/docs/getting-started/react-essentials#server-components). Server Components **always fetch data on the server**. This allows you to:

只要有可能，我们建议在服务器组件中获取数据。服务器组件总是在服务器上获取数据。这使您可以：

- Have direct access to backend data resources (e.g. databases).
- 可以直接访问后端数据资源（例如数据库）。
- Keep your application more secure by preventing sensitive information, such as access tokens and API keys, from being exposed to the client.
- 通过防止访问令牌和 API 密钥等敏感信息暴露给客户端，让您的应用程序更加安全。
- Fetch data and render in the same environment. This reduces both the back-and-forth communication between client and server, as well as the work on the main thread on the client.
- 获取数据并在同一环境中呈现。这减少了客户端和服务器之间的来回通信，以及客户端主线程上的工作。
- Perform multiple data fetches with single round-trip instead of multiple individual requests on the client.
- 使用单次往返而不是客户端上的多个单独请求执行多个数据提取。
- Reduce client-server [waterfalls](https://nextjs.org/docs/app/building-your-application/data-fetching#parallel-and-sequential-data-fetching).
- 减少客户端-服务器瀑布。
- Depending on your region, data fetching can also happen closer to your data source, reducing latency and improving performance.
- 根据您所在的地区，数据提取也可能发生在离您的数据源更近的地方，从而减少延迟并提高性能。

> **Good to know:** It's still possible to fetch data client-side. We recommend using a third-party library such as [SWR](https://swr.vercel.app/) or [React Query](https://tanstack.com/query/v4/) with Client Components. In the future, it'll also be possible to fetch data in Client Components using React's [`use()` hook](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#use-in-client-components).
> 
> 很高兴知道：仍然可以在客户端获取数据。我们建议使用第三方库，例如 SWR  
> 或反应查询与客户端组件。将来，还可以使用 React 的 use() 钩子在客户端组件中获取数据。

## [Fetching Data at the Component Level](https://nextjs.org/docs/app/building-your-application/data-fetching#fetching-data-at-the-component-level)

在组件级别获取数据

In the App Router, you can fetch data inside [layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts), [pages](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages), and components. Data fetching is also compatible with [Streaming and Suspense](https://nextjs.org/docs/app/building-your-application/data-fetching#streaming-and-suspense).

在 App Router 中，您可以获取布局、页面和组件内的数据。数据获取也与 Streaming 和 Suspense 兼容。

> **Good to know:** For layouts, it's not possible to pass data between a parent layout and its `children` components. We recommend **fetching data directly inside the layout that needs it**, even if you're requesting the same data multiple times in a route. Behind the scenes, React and Next.js will [cache and dedupe](https://nextjs.org/docs/app/building-your-application/data-fetching#automatic-fetch-request-deduping) requests to avoid the same data being fetched more than once.
> 
> 提示：对于布局，无法在父布局与其子组件之间传递数据。我们建议直接在需要它的布局中获取数据，即使您在一个路由中多次请求相同的数据。在幕后，React 和 Next.js 将对请求进行缓存和重复数据删除，以避免多次获取相同的数据。

## [Parallel and Sequential Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching#parallel-and-sequential-data-fetching)

并行和顺序数据获取

When fetching data inside components, you need to be aware of two data fetching patterns: Parallel and Sequential.

在组件内部获取数据时，您需要了解两种数据获取模式：并行和顺序。

![Sequential and Parallel Data Fetching](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fsequential-parallel-data-fetching.png&w=3840&q=75)

- With **parallel data fetching**, requests in a route are eagerly initiated and will load data at the same time. This reduces client-server waterfalls and the total time it takes to load data.
- 通过并行数据获取，路由中的请求会被急切地发起并同时加载数据。这减少了客户端-服务器瀑布和加载数据所需的总时间。
- With **sequential data fetching**, requests in a route are dependent on each other and create waterfalls. There may be cases where you want this pattern because one fetch depends on the result of the other, or you want a condition to be satisfied before the next fetch to save resources. However, this behavior can also be unintentional and lead to longer loading times.
- 通过顺序数据获取，路由中的请求相互依赖并创建瀑布。在某些情况下，您可能需要此模式，因为一次提取取决于另一次提取的结果，或者您希望在下一次提取之前满足某个条件以节省资源。但是，这种行为也可能是无意的，会导致加载时间变长。

[Learn how to implement parallel and sequential data fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#data-fetching-patterns).

了解如何实现并行和顺序数据获取。

## [Automatic `fetch()` Request Deduping](https://nextjs.org/docs/app/building-your-application/data-fetching#automatic-fetch-request-deduping)

自动 fetch() 请求去重

If you need to fetch the same data (e.g. current user) in multiple components in a tree, Next.js will automatically cache `fetch` requests (`GET`) that have the same input in a temporary cache. This optimization prevents the same data from being fetched more than once during a rendering pass.

如果您需要在树中的多个组件中获取相同的数据（例如当前用户），Next.js 会自动在临时缓存中缓存具有相同输入的获取请求 (GET)。此优化可防止在渲染过程中多次获取相同的数据。

![Fetch Request Deduplication](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fdeduplicated-fetch-requests.png&w=3840&q=75)

- On the server, the cache lasts the lifetime of a server request until the rendering process completes.
  
  - This optimization applies to `fetch` requests made in Layouts, Pages, Server Components, `generateMetadata` and `generateStaticParams`.
  - 此优化适用于在布局、页面、服务器组件、generateMetadata 和 generateStaticParams 中发出的获取请求。
  - This optimization also applies during [static generation](https://nextjs.org/docs/app/building-your-application/rendering#static-rendering).
  - 此优化也适用于静态生成期间。

- 在服务器上，缓存持续服务器请求的生命周期，直到呈现过程完成。  

- On the client, the cache lasts the duration of a session (which could include multiple client-side re-renders) before a full page reload.

- 在客户端，缓存会持续整个页面重新加载之前的会话持续时间（可能包括多个客户端重新呈现）。

> **Good to know:**
> 
> 很高兴知道：
> 
> - `POST` requests are not automatically deduplicated. [Learn more about caching](https://nextjs.org/docs/app/building-your-application/data-fetching/caching).
> - POST 请求不会自动删除重复数据。了解有关缓存的更多信息。
> - If you're unable to use `fetch`, React provides a [`cache` function](https://nextjs.org/docs/app/building-your-application/data-fetching/caching#manual-cache-request-deduping) to allow you to manually cache data for the duration of the request.
> - 如果你无法使用 fetch，React 提供了一个缓存功能，允许你在请求期间手动缓存数据。

## [Static and Dynamic Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching#static-and-dynamic-data-fetching)

静态和动态数据获取

There are two types of data: **Static** and **Dynamic**.

有两种类型的数据：静态和动态。

- **Static Data** is data that doesn't change often. For example, a blog post.
- 静态数据是不经常更改的数据。例如，一篇博文。
- **Dynamic Data** is data that changes often or can be specific to users. For example, a shopping cart list.
- 动态数据是经常变化或特定于用户的数据。例如，购物车列表。

![Dynamic and Static Data Fetching](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fdynamic-and-static-data-fetching.png&w=3840&q=75)

By default, Next.js automatically does static fetches. This means that the data will be fetched at build time, cached, and reused on each request. As a developer, you have control over how the static data is [cached](https://nextjs.org/docs/app/building-your-application/data-fetching#caching-data) and [revalidated](https://nextjs.org/docs/app/building-your-application/data-fetching#revalidating-data).

默认情况下，Next.js 会自动执行静态提取。这意味着数据将在构建时获取、缓存并在每个请求中重用。作为开发人员，您可以控制静态数据的缓存和重新验证方式。

There are two benefits to using static data:

使用静态数据有两个好处：

1. It reduces the load on your database by minimizing the number of requests made.
   
   它通过最小化请求的数量来减少数据库的负载。

2. The data is automatically cached for improved loading performance.
   
   数据会自动缓存以提高加载性能。

However, if your data is personalized to the user or you want to always fetch the latest data, you can mark requests as *dynamic* and fetch data on each request without caching.

但是，如果您的数据针对用户是个性化的，或者您希望始终获取最新数据，则可以将请求标记为动态并在不缓存的情况下在每个请求中获取数据。

[Learn how to do Static and Dynamic data fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#static-data-fetching).

了解如何进行静态和动态数据提取。

## [Caching Data](https://nextjs.org/docs/app/building-your-application/data-fetching#caching-data)

缓存数据

Caching is the process of storing data in a location (e.g. [Content Delivery Network](https://vercel.com/docs/concepts/edge-network/overview)) so it doesn't need to be re-fetched from the original source on each request.

缓存是将数据存储在某个位置的过程（例如内容分发网络 ) 因此不需要在每次请求时从原始来源重新获取。

![Static Site Generation](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fstatic-site-generation.png&w=3840&q=75)

The **Next.js Cache** is a persistent [HTTP cache](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching) that can be globally distributed. This means the cache can scale automatically and be shared across multiple regions depending on your platform (e.g. [Vercel](https://vercel.com/docs/concepts/next.js/overview)).

Next.js 缓存是一个持久化的 HTTP 缓存 可以全球分布。这意味着缓存可以自动扩展并根据您的平台在多个区域共享（例如 Vercel ).

Next.js extends the [options object](https://developer.mozilla.org/en-US/docs/Web/API/fetch#:~:text=preflight%20requests.-,cache,-A%20string%20indicating) of the `fetch()` function to allow each request on the server to set its own persistent caching behavior. Together with [component-level data fetching](https://nextjs.org/docs/app/building-your-application/data-fetching#fetching-data-at-the-component-level), this allows you to configure caching within your application code directly where the data is being used.

Next.js 扩展选项对象 fetch() 函数允许服务器上的每个请求设置其自己的持久缓存行为。与组件级数据获取一起，这允许您在应用程序代码中直接在使用数据的地方配置缓存。

During server rendering, when Next.js comes across a fetch, it will check the cache to see if the data is already available. If it is, it will return the cached data. If not, it will fetch and store data for future requests.

在服务器渲染期间，当 Next.js 遇到提取时，它会检查缓存以查看数据是否已经可用。如果是，它将返回缓存的数据。如果没有，它将为将来的请求获取和存储数据。

> **Good to know:** If you're unable to use `fetch`, React provides a [`cache` function](https://nextjs.org/docs/app/building-your-application/data-fetching/caching#manual-cache-request-deduping) to allow you to manually cache data for the duration of the request.
> 
> 小贴士：如果您无法使用 fetch，React 提供了一个缓存功能，允许您在请求期间手动缓存数据。

[Learn more about caching in Next.js](https://nextjs.org/docs/app/building-your-application/data-fetching/caching).

详细了解 Next.js 中的缓存。

### [Revalidating Data](https://nextjs.org/docs/app/building-your-application/data-fetching#revalidating-data)

重新验证数据

Revalidation is the process of purging the cache and re-fetching the latest data. This is useful when your data changes and you want to ensure your application shows the latest version without having to rebuild your entire application.

重新验证是清除缓存并重新获取最新数据的过程。当您的数据发生变化并且您希望确保您的应用程序显示最新版本而无需重建整个应用程序时，这很有用。

Next.js provides two types of revalidation:

Next.js 提供两种类型的重新验证：

- [**Background**](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating#background-revalidation): Revalidates the data at a specific time interval.
- 背景：以特定时间间隔重新验证数据。
- [**On-demand**](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating#on-demand-revalidation): Revalidates the data whenever there is an update.
- 按需：只要有更新就重新验证数据。

[Learn how to revalidate data](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating).

了解如何重新验证数据。

### [Streaming and Suspense](https://nextjs.org/docs/app/building-your-application/data-fetching#streaming-and-suspense)

Streaming and [Suspense](https://react.dev/reference/react/Suspense) are new React features that allow you to progressively render and incrementally stream rendered units of the UI to the client.

流媒体和悬念 是新的 React 功能，允许您渐进地渲染和增量地流式传输 UI 的渲染单元到客户端。

With Server Components and [nested layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts), you're able to instantly render parts of the page that do not specifically require data, and show a [loading state](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming) for parts of the page that are fetching data. This means the user does not have to wait for the entire page to load before they can start interacting with it.

使用服务器组件和嵌套布局，您可以立即呈现页面中不需要数据的部分，并显示正在获取数据的页面部分的加载状态。这意味着用户不必等待整个页面加载完毕就可以开始与之交互。

![Server Rendering with Streaming](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fserver-rendering-with-streaming.png&w=3840&q=75)

To learn more about Streaming and Suspense, see the [Loading UI](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming) and [Streaming and Suspense](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense) pages.

要了解有关 Streaming 和 Suspense 的更多信息，请参阅加载 UI 和 Streaming 和 Suspense 页面。

## [Old Methods](https://nextjs.org/docs/app/building-your-application/data-fetching#old-methods)

旧方法

Previous Next.js data fetching methods such as [`getServerSideProps`](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props), [`getStaticProps`](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props), and [`getInitialProps`](https://nextjs.org/docs/pages/api-reference/functions/get-initial-props) are **not** supported in the new App Router. However, you can still use them in the [Pages Router](https://nextjs.org/docs/pages/building-your-application/data-fetching).

新的 App Router 不支持之前的 Next.js 数据获取方法，例如 getServerSideProps、getStaticProps 和 getInitialProps。但是，您仍然可以在 Pages Router 中使用它们。

# Data Fetching

数据抓取

> **Good to know**:
> 
> 很高兴知道：
> 
> - This new data fetching model is currently being developed by the React team. We recommend reading the [support for promises React RFC](https://github.com/acdlite/rfcs/blob/first-class-promises/text/0000-first-class-support-for-promises.md) which introduces `async` and `await` in Server Components and a new `use()` hook for Client Components.
> - 这个新的数据获取模型目前正在由 React 团队开发。我们推荐阅读对 promises React RFC 的支持  它在服务器组件中引入了异步和等待，并为客户端组件引入了一个新的 use() 挂钩。
> - While you can try it out, it is not yet stable. We'll keep these docs updated to reflect the latest developments.
> - 虽然您可以试用，但它还不稳定。我们将不断更新这些文档以反映最新的发展。

React and Next.js 13 introduced a new way to fetch and manage data in your application. The new data fetching system works in the `app` directory and is built on top of the [`fetch()` Web API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

React 和 Next.js 13 引入了一种在应用程序中获取和管理数据的新方法。新的数据获取系统在 app 目录中运行，并构建在 fetch() Web API 之上 .

`fetch()` is a Web API used to fetch remote resources that **returns a promise**. React extends `fetch` to provide [automatic request deduping](https://nextjs.org/docs/app/building-your-application/data-fetching#automatic-fetch-request-deduping), and Next.js extends the `fetch` options object to allow each request to set its own [caching and revalidating](https://nextjs.org/docs/app/building-your-application/data-fetching/caching).

fetch() 是一种 Web API，用于获取返回承诺的远程资源。 React 扩展了 fetch 以提供自动请求重复数据删除，而 Next.js 扩展了 fetch 选项对象以允许每个请求设置自己的缓存和重新验证。

## [`async` and `await` in Server Components](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#async-and-await-in-server-components)

服务器组件中的异步和等待

With the [proposed React RFC](https://github.com/acdlite/rfcs/blob/first-class-promises/text/0000-first-class-support-for-promises.md), you can use `async` and `await` to fetch data in Server Components.

与提议的 React RFC  ，您可以使用 async 和 await 来获取服务器组件中的数据。

app/page.tsx

```js
async function getData() {
  const res = await fetch('https://api.example.com/...');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return <main></main>;
}
```

> **Async Server Component TypeScript Error**
> 
> 异步服务器组件 TypeScript 错误
> 
> - An `async` Server Components will cause a `'Promise<Element>' is not a valid JSX element` type error where it is used.
> - 异步服务器组件将导致“Promise<Element>”不是有效的 JSX 元素类型错误。
> - This is a known issue with TypeScript and is being worked on upstream.
> - 这是 TypeScript 的一个已知问题，正在上游解决。
> - As a temporary workaround, you can add `{/* @ts-expect-error Async Server Component */}` above the component to disable type checking for it.
> - 作为临时解决方法，您可以在组件上方添加 {/* @ts-expect-error Async Server Component */} 以禁用类型检查。

### [Server Component Functions](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#server-component-functions)

服务器组件功能

Next.js provides helpful server functions you may need when fetching data in Server Components:

Next.js 提供了在服务器组件中获取数据时可能需要的有用的服务器功能：

- [`cookies()`](https://nextjs.org/docs/app/api-reference/functions/cookies)
- [`headers()`](https://nextjs.org/docs/app/api-reference/functions/headers)

## [`use` in Client Components](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#use-in-client-components)

在客户端组件中使用

`use` is a new React function that **accepts a promise** conceptually similar to `await`. `use` **handles the promise** returned by a function in a way that is compatible with components, hooks, and Suspense. Learn more about `use` in the [React RFC](https://github.com/acdlite/rfcs/blob/first-class-promises/text/0000-first-class-support-for-promises.md#usepromise).

use 是一个新的 React 函数，它接受概念上类似于 await 的承诺。 use 以与组件、挂钩和 Suspense 兼容的方式处理函数返回的承诺。了解有关在 React RFC 中使用的更多信息  
.

Wrapping `fetch` in `use` is currently **not** recommended in Client Components and may trigger multiple re-renders. For now, if you need to fetch data in a Client Component, we recommend using a third-party library such as [SWR](https://swr.vercel.app/) or [React Query](https://tanstack.com/query/v4).

目前不建议在客户端组件中使用包装提取，并且可能会触发多次重新呈现。目前，如果您需要在客户端组件中获取数据，我们建议使用第三方库，例如 SWR  
或反应查询 .

> **Note:** We'll be adding more examples once `fetch` and `use` work in Client Components.
> 
> 注意：一旦在客户端组件中获取和使用工作，我们将添加更多示例。

## [Static Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#static-data-fetching)

静态数据获取

By default, `fetch` will automatically fetch and [cache data](https://nextjs.org/docs/app/building-your-application/data-fetching/caching) indefinitely.

默认情况下，fetch 会无限期地自动获取和缓存数据。

```js
fetch('https://...'); // cache: 'force-cache' is the default
```

### [Revalidating Data](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#revalidating-data)

重新验证数据

To revalidate [cached data](https://nextjs.org/docs/app/building-your-application/data-fetching/caching) at a timed interval, you can use the `next.revalidate` option in `fetch()` to set the `cache` lifetime of a resource (in seconds).

要按时间间隔重新验证缓存数据，您可以使用 fetch() 中的 next.revalidate 选项来设置资源的缓存生命周期（以秒为单位）。

```js
fetch('https://...', { next: { revalidate: 10 } });
```

See [Revalidating Data](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating) for more information.

有关详细信息，请参阅重新验证数据。

> **NOTE:** Caching at the fetch level via `revalidate` or `cache: 'force-cache'` stores the data across requests in a shared cache. You should avoid using it for user specific data (i.e. requests that derive data from `cookies()` or `headers()`)
> 
> 注意：通过重新验证或缓存在获取级别缓存：'force-cache' 将跨请求的数据存储在共享缓存中。您应该避免将它用于用户特定数据（即从 cookies() 或 headers() 派生数据的请求）

## [Dynamic Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#dynamic-data-fetching)

动态数据获取

To fetch fresh data on every `fetch` request, use the `cache: 'no-store'` option.

要在每次获取请求时获取新数据，请使用 cache: 'no-store' 选项。

```js
fetch('https://...', { cache: 'no-store' });
```

## [Data Fetching Patterns](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#data-fetching-patterns)

数据获取模式

### [Parallel Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#parallel-data-fetching)

并行数据获取

To minimize client-server waterfalls, we recommend this pattern to fetch data in parallel:

为了最大限度地减少客户端-服务器瀑布，我们建议使用这种模式来并行获取数据：

app/artist/[username]/page.tsx

```ts
import Albums from './albums';

async function getArtist(username: string) {
  const res = await fetch(`https://api.example.com/artist/${username}`);
  return res.json();
}

async function getArtistAlbums(username: string) {
  const res = await fetch(`https://api.example.com/artist/${username}/albums`);
  return res.json();
}

export default async function Page({
  params: { username },
}: {
  params: { username: string };
}) {
  // Initiate both requests in parallel
  const artistData = getArtist(username);
  const albumsData = getArtistAlbums(username);

  // Wait for the promises to resolve
  const [artist, albums] = await Promise.all([artistData, albumsData]);

  return (
    <>
      <h1>{artist.name}</h1>
      <Albums list={albums}></Albums>
    </>
  );
}
```

By starting the fetch prior to calling `await` in the Server Component, each request can eagerly start to fetch requests at the same time. This sets the components up so you can avoid waterfalls.

通过在服务器组件中调用 await 之前开始获取，每个请求都可以同时急切地开始获取请求。这会设置组件，这样您就可以避免瀑布。

We can save time by initiating both requests in parallel, however, the user won't see the rendered result until both promises are resolved.

我们可以通过并行发起两个请求来节省时间，但是，在两个承诺都得到解决之前，用户不会看到呈现的结果。

To improve the user experience, you can add a [suspense boundary](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming) to break up the rendering work and show part of the result as soon as possible:

为了提高用户体验，可以添加一个悬念边界来打散渲染工作，尽快展示部分结果：

artist/[username]/page.tsx

```tsx
import { getArtist, getArtistAlbums, type Album } from './api';

export default async function Page({
  params: { username },
}: {
  params: { username: string };
}) {
  // Initiate both requests in parallel
  const artistData = getArtist(username);
  const albumData = getArtistAlbums(username);

  // Wait for the artist's promise to resolve first
  const artist = await artistData;

  return (
    <>
      <h1>{artist.name}</h1>
      {/* Send the artist information first,
          and wrap albums in a suspense boundary */}
      <Suspense fallback={<div>Loading...</div>}>
        <Albums promise={albumData} />
      </Suspense>
    </>
  );
}

// Albums Component
async function Albums({ promise }: { promise: Promise<Album[]> }) {
  // Wait for the albums promise to resolve
  const albums = await promise;

  return (
    <ul>
      {albums.map((album) => (
        <li key={album.id}>{album.name}</li>
      ))}
    </ul>
  );
}
```

Take a look at the [preloading pattern](https://nextjs.org/docs/app/building-your-application/data-fetching/caching#preload-pattern-with-cache) for more information on improving components structure.

查看预加载模式以获取有关改进组件结构的更多信息。

### [Sequential Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#sequential-data-fetching)

顺序数据获取

To fetch data sequentially, you can `fetch` directly inside the component that needs it, or you can `await` the result of `fetch` inside the component that needs it:

要顺序获取数据，可以直接在需要它的组件内部获取，也可以在需要它的组件内部等待获取结果：

app/artist/page.tsx

```tsx
// ...

async function Playlists({ artistID }: { artistID: string }) {
  // Wait for the playlists
  const playlists = await getArtistPlaylists(artistID);

  return (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.id}>{playlist.name}</li>
      ))}
    </ul>
  );
}

export default async function Page({
  params: { username },
}: {
  params: { username: string };
}) {
  // Wait for the artist
  const artist = await getArtist(username);

  return (
    <>
      <h1>{artist.name}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Playlists artistID={artist.id} />
      </Suspense>
    </>
  );
}
```

By fetching data inside the component, each fetch request and nested segment in the route cannot start fetching data and rendering until the previous request or segment has completed.

通过在组件内部获取数据，路由中的每个获取请求和嵌套段在前一个请求或段完成之前无法开始获取数据和呈现。

### [Blocking Rendering in a Route](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#blocking-rendering-in-a-route)

在路由中阻塞渲染

By fetching data in a [layout](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts), rendering for all route segments beneath it can only start once the data has finished loading.

通过在布局中获取数据，它下面的所有路线段的渲染只能在数据加载完成后才能开始。

In the `pages` directory, pages using server-rendering would show the browser loading spinner until `getServerSideProps` had finished, then render the React component for that page. This can be described as "all or nothing" data fetching. Either you had the entire data for your page, or none.

在 pages 目录中，使用服务器渲染的页面将显示浏览器加载微调器，直getServerSideProps 完成，然后为该页面渲染 React 组件。这可以描述为“全有或全无”的数据获取。您拥有页面的全部数据，或者没有。

In the `app` directory, you have additional options to explore:

在 app 目录中，您可以探索其他选项：

1. First, you can use `loading.js` to show an instant loading state from the server while streaming in the result from your data fetching function.
   
   首先，您可以使用 loading.js 显示来自服务器的即时加载状态，同时从您的数据获取函数中流式传输结果。

2. Second, you can move data fetching *lower* in the component tree to only block rendering for the parts of the page that need it. For example, moving data fetching to a specific component rather than fetching it at the root layout.
   
   其次，您可以将数据获取移至组件树中较低的位置，以仅阻止对需要它的页面部分进行渲染。例如，将数据获取移动到特定组件，而不是在根布局中获取。

Whenever possible, it's best to fetch data in the segment that uses it. This also allows you to show a loading state for only the part of the page that is loading, and not the entire page.

只要有可能，最好在使用它的段中获取数据。这还允许您仅显示正在加载的页面部分的加载状态，而不是整个页面。

## [Data Fetching without `fetch()`](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#data-fetching-without-fetch)

没有 fetch() 的数据获取

You might not always have the ability to use and configure `fetch` requests directly if you're using a third-party library such as an ORM or database client.

如果您使用第三方库（例如 ORM 或数据库客户端），您可能并不总是能够直接使用和配置获取请求。

In cases where you cannot use `fetch` but still want to control the caching or revalidating behavior of a layout or page, you can rely on the [default caching behavior](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#default-caching-behavior) of the segment or use the [segment cache configuration](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#segment-cache-configuration).

如果您不能使用 fetch 但仍想控制布局或页面的缓存或重新验证行为，您可以依赖段的默认缓存行为或使用段缓存配置。

### [Default Caching Behavior](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#default-caching-behavior)

默认缓存行为

Any data fetching libraries that do not use `fetch` directly **will not** affect caching of a route, and will be static or dynamic depending on the route segment.

任何不直接使用 fetch 的数据抓取库都不会影响路由的缓存，根据路由段的不同会是静态的还是动态的。

If the segment is static (default), the output of the request will be cached and revalidated (if configured) alongside the rest of the segment. If the segment is dynamic, the output of the request will *not* be cached and will be re-fetched on every request when the segment is rendered.

如果段是静态的（默认），请求的输出将与段的其余部分一起缓存和重新验证（如果已配置）。如果段是动态的，则请求的输出将不会被缓存，并且会在呈现段时在每个请求上重新获取。

> **Good to know:** Dynamic functions like [`cookies()`](https://nextjs.org/docs/app/api-reference/functions/cookies) and [`headers()`](https://nextjs.org/docs/app/api-reference/functions/headers) will make the route segment dynamic.
> 
> 提示：cookies() 和 headers() 等动态函数将使路由段动态化。

### [Segment Cache Configuration](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#segment-cache-configuration)

段缓存配置

As a temporary solution, until the caching behavior of third-party queries can be configured, you can use [segment configuration](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#configrevalidate) to customize the cache behavior of the entire segment.

作为临时解决方案，在可以配置第三方查询的缓存行为之前，可以使用段配置来自定义整个段的缓存行为。

app/page.tsx

```tsx
import prisma from './lib/prisma';

export const revalidate = 3600; // revalidate every hour

async function getPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}

export default async function Page() {
  const posts = await getPosts();
  // ...
}
```

# Caching Data

缓存数据

Next.js has built-in support for caching data, both on a per-request basis (recommended) or for an entire route segment.

Next.js 内置了对缓存数据的支持，无论是基于每个请求（推荐）还是针对整个路由段。

![Fetch Request Deduplication](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fdeduplicated-fetch-requests.png&w=3840&q=75)

## [Per-request Caching](https://nextjs.org/docs/app/building-your-application/data-fetching/caching#per-request-caching)

按请求缓存

### [`fetch()`](https://nextjs.org/docs/app/building-your-application/data-fetching/caching#fetch)

By default, all `fetch()` requests are cached and deduplicated automatically. This means that if you make the same request twice, the second request will reuse the result from the first request.

默认情况下，所有的 fetch() 请求都会被自动缓存和去重。这意味着如果您两次发出相同的请求，第二个请求将重用第一个请求的结果。

app/page.tsx

```ts
async function getComments() {
  const res = await fetch('https://...'); // The result is cached
  return res.json();
}

// This function is called twice, but the result is only fetched once
const comments = await getComments(); // cache MISS

// The second call could be anywhere in your application
const comments = await getComments(); // cache HIT
```

Requests are **not** cached if:

如果出现以下情况，则不会缓存请求：

- Dynamic methods (`next/headers`, `export const POST`, or similar) are used and the fetch is a `POST` request (or uses `Authorization` or `cookie` headers)
- 使用动态方法（next/headers、export const POST 或类似方法）并且获取是 POST 请求（或使用授权或 cookie 标头）
- `fetchCache` is configured to skip cache by default
- fetchCache 默认配置为跳过缓存
- `revalidate: 0` or `cache: 'no-store'` is configured on individual `fetch`
- revalidate: 0 or cache: 'no-store' 是在单独获取时配置的

Requests made using `fetch` can specify a `revalidate` option to control the revalidation frequency of the request.

使用 fetch 发出的请求可以指定一个重新验证选项来控制请求的重新验证频率。

app/page.tsx

```tsx
export default async function Page() {
  // revalidate this data every 10 seconds at most
  const res = await fetch('https://...', { next: { revalidate: 10 } });
  const data = res.json();
  // ...
}
```

### [React `cache()`](https://nextjs.org/docs/app/building-your-application/data-fetching/caching#react-cache)

React allows you to [`cache()`](https://github.com/acdlite/rfcs/blob/first-class-promises/text/0000-first-class-support-for-promises.md) and deduplicate requests, memoizing the result of the wrapped function call. The same function called with the same arguments will reuse a cached value instead of re-running the function.

React 允许你缓存()  并删除重复请求，记住包装函数调用的结果。使用相同参数调用的相同函数将重用缓存值，而不是重新运行该函数。

utils/getUser.ts

```ts
import { cache } from 'react';

export const getUser = cache(async (id: string) => {
  const user = await db.user.findUnique({ id });
  return user;
});
```

app/user/[id]/layout.tsx

```ts
import { getUser } from '@utils/getUser';

export default async function UserLayout({ params: { id } }) {
  const user = await getUser(id);
  // ...
}
```

app/user/[id]/page.tsx

```ts
import { getUser } from '@utils/getUser';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const user = await getUser(id);
  // ...
}
```

Although the `getUser()` function is called twice in the example above, only one query will be made to the database. This is because `getUser()` is wrapped in `cache()`, so the second request can reuse the result from the first request.

虽然在上面的示例中调用了两次 getUser() 函数，但只会对数据库进行一次查询。这是因为 getUser() 被包裹在 cache() 中，所以第二个请求可以重用第一个请求的结果。

**Good to know:**

- `fetch()` caches requests automatically, so you don't need to wrap functions that use `fetch()` with `cache()`. See [automatic request deduping](https://nextjs.org/docs/app/building-your-application/data-fetching#automatic-fetch-request-deduping) for more information.
- fetch() 自动缓存请求，所以你不需要用 cache() 包装使用 fetch() 的函数。有关详细信息，请参阅自动请求重复数据删除。
- In this new model, we recommend **fetching data directly in the component that needs it**, even if you're requesting the same data in multiple components, rather than passing the data between components as props.
- 在这个新模型中，我们建议直接在需要它的组件中获取数据，即使您在多个组件中请求相同的数据，而不是在组件之间将数据作为 props 传递。
- We recommend using the [`server-only` package](https://nextjs.org/docs/getting-started/react-essentials#keeping-server-only-code-out-of-client-components-poisoning) to make sure server data fetching functions are never used on the client.
- 我们建议使用 server-only 包来确保服务器数据获取功能永远不会在客户端上使用。

### [GraphQL and `cache()`](https://nextjs.org/docs/app/building-your-application/data-fetching/caching#graphql-and-cache)

GraphQL 和缓存（）

`POST` requests are automatically deduplicated when using `fetch` – unless they are inside of `POST` Route Handler or come after reading `headers()`/`cookies()`. If you are using GraphQL and `POST` requests in the above cases, you can use `cache` to deduplicate requests. The `cache` arguments must be flat and only include primitives. Deep objects won't match for deduplication.

使用 fetch 时，POST 请求会自动删除重复数据——除非它们在 POST 路由处理程序内部或在读取 headers()/cookies() 之后出现。如果您在上述情况下使用 GraphQL 和 POST 请求，则可以使用缓存对请求进行去重。缓存参数必须是平面的并且只包含基元。深层对象不适合重复数据删除。

utils/getUser.ts

```ts
import { cache } from 'react';

export const getUser = cache(async (id: string) => {
  const res = await fetch('/graphql', { method: 'POST', body: '...' });
  // ...
});
```

### [Preload pattern with `cache()`](https://nextjs.org/docs/app/building-your-application/data-fetching/caching#preload-pattern-with-cache)

使用 cache() 预加载模式

As a pattern, we suggest optionally exposing a `preload()` export in utilities or components that do data fetching.

作为一种模式，我们建议有选择地在执行数据获取的实用程序或组件中公开 preload() 导出。

components/User.tsx

```tsx
import { getUser } from '@utils/getUser';

export const preload = (id: string) => {
  // void evaluates the given expression and returns undefined
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void
  void getUser(id);
};
export default async function User({ id }: { id: string }) {
  const result = await getUser(id);
  // ...
}
```

By calling `preload`, you can eagerly start fetching data you're likely going to need.

通过调用预加载，您可以急切地开始获取您可能需要的数据。

app/user/[id]/page.tsx

```tsx
import User, { preload } from '@components/User';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  preload(id); // starting loading the user data now
  const condition = await fetchCondition();
  return condition ? <User id={id} /> : null;
}
```

> **Good to know**:
> 
> 很高兴知道：
> 
> - The `preload()` function can have any name. It's a pattern, not an API.
> - preload() 函数可以有任何名称。它是一种模式，而不是 API。
> - This pattern is completely optional and something you can use to optimize on a case-by-case basis. This pattern is a further optimization on top of [parallel data fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#parallel-data-fetching). Now you don't have to pass promises down as props and can instead rely on the preload pattern.
> - 这种模式是完全可选的，您可以根据具体情况使用它来优化。这种模式是在并行数据获取之上的进一步优化。现在您不必将 promise 作为 props 传递下去，而是可以依赖预加载模式。

### [Combining `cache`, `preload`, and `server-only`](https://nextjs.org/docs/app/building-your-application/data-fetching/caching#combining-cache-preload-and-server-only)

结合缓存、预加载和仅服务器

You can combine the `cache` function, the `preload` pattern, and the `server-only` package to create a data fetching utility that can be used throughout your app.

您可以结合缓存功能、预加载模式和仅限服务器的包来创建可在整个应用程序中使用的数据获取实用程序。

utils/getUser.ts

```tsx
import { cache } from 'react';
import 'server-only';

export const preload = (id: string) => {
  void getUser(id);
};

export const getUser = cache(async (id: string) => {
  // ...
});
```

With this approach, you can eagerly fetch data, cache responses, and guarantee that this data fetching [only happens on the server](https://nextjs.org/docs/getting-started/react-essentials#keeping-server-only-code-out-of-client-components-poisoning).

使用这种方法，您可以急切地获取数据、缓存响应，并保证此数据获取仅发生在服务器上。

The `getUser.ts` exports can be used by layouts, pages, or components to give them control over when a user's data is fetched.

布局、页面或组件可以使用 getUser.ts 导出来控制何时获取用户数据。

## [Segment-level Caching](https://nextjs.org/docs/app/building-your-application/data-fetching/caching#segment-level-caching)

段级缓存

> **Note:** We recommend using per-request caching for improved granularity and control over caching.
> 
> 注意：我们建议使用按请求缓存来提高粒度和对缓存的控制。

Segment-level caching allows you to cache and revalidate data used in route segments.

段级缓存允许您缓存和重新验证路由段中使用的数据。

This mechanism allows different segments of a path to control the cache lifetime of the entire route. Each `page.tsx` and `layout.tsx` in the route hierarchy can export a `revalidate` value that sets the revalidation time for the route.

这种机制允许路径的不同段来控制整个路由的缓存生命周期。路由层次结构中的每个 page.tsx 和 layout.tsx 都可以导出一个 revalidate 值，该值设置路由的重新生效时间。

app/page.tsx

```tsx
export const revalidate = 60; // revalidate this segment every 60 seconds
```

**Good to know:**

很高兴知道：

- If a page, layout, and fetch request all specify a [`revalidate`](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate) frequency, the lowest value of the three will be used.
- 如果页面、布局和获取请求都指定了重新验证频率，则将使用三者中的最低值。
- Advanced: You can set `fetchCache` to `'only-cache'` or `'force-cache'` to ensure that all `fetch` requests opt into caching but the revalidation frequency might still be lowered by individual `fetch` requests. See [`fetchCache`](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#fetchCache) for more information.
- 高级：您可以将 fetchCache 设置为 'only-cache' 或 'force-cache' 以确保所有提取请求都选择缓存，但重新验证频率可能仍会因单个提取请求而降低。有关详细信息，请参阅获取缓存。

# Revalidating Data

重新验证数据

Next.js allows you to update specific static routes **without needing to rebuild your entire site**. Revalidation (also known as [Incremental Static Regeneration](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration)) allows you to retain the benefits of static while scaling to millions of pages.

Next.js 允许您更新特定的静态路由，而无需重建整个站点。重新验证（也称为增量静态重新生成）允许您在扩展到数百万页的同时保留静态的好处。

There are two types of revalidation in Next.js:

Next.js 中有两种类型的重新验证：

- **Background**: Revalidates the data at a specific time interval.
- 背景：以特定时间间隔重新验证数据。
- **On-demand**: Revalidates the data based on an event such as an update.
- 按需：根据更新等事件重新验证数据。

## [Background Revalidation](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating#background-revalidation)

背景重新验证

To revalidate cached data at a specific interval, you can use the `next.revalidate` option in `fetch()` to set the `cache` lifetime of a resource (in seconds).

要以特定时间间隔重新验证缓存数据，您可以使用 fetch() 中的 next.revalidate 选项来设置资源的缓存生命周期（以秒为单位）。

```js
fetch('https://...', { next: { revalidate: 60 } });
```

If you want to revalidate data that does not use `fetch` (i.e. using an external package or query builder), you can use the [route segment config](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate).

如果你想重新验证不使用获取的数据（即使用外部包或查询构建器），你可以使用路由段配置。

app/page.tsx

```js
export const revalidate = 60; // revalidate this page every 60 seconds
```

In addition to `fetch`, you can also revalidate data using [`cache`](https://nextjs.org/docs/app/building-your-application/data-fetching/caching#per-request-caching).

除了获取之外，您还可以使用缓存重新验证数据。

### [How it works](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating#how-it-works)

怎么运行的

1. When a request is made to the route that was statically rendered at build time, it will initially show the cached data.
   
   当对在构建时静态呈现的路由发出请求时，它最初将显示缓存的数据。

2. Any requests to the route after the initial request and before 60 seconds are also cached and instantaneous.
   
   在初始请求之后和 60 秒之前对路由的任何请求也被缓存和即时。

3. After the 60-second window, the next request will still show the cached (stale) data.
   
   在 60 秒窗口之后，下一个请求仍将显示缓存的（陈旧的）数据。

4. Next.js will trigger a regeneration of the data in the background.
   
   Next.js 将在后台触发数据的重新生成。

5. Once the route generates successfully, Next.js will invalidate the cache and show the updated route. If the background regeneration fails, the old data would still be unaltered.
   
   路由生成成功后，Next.js 将使缓存失效并显示更新后的路由。如果后台重新生成失败，旧数据仍将保持不变。

When a request is made to a route segment that hasn’t been generated, Next.js will dynamically render the route on the first request. Future requests will serve the static route segments from the cache.

当向尚未生成的路由段发出请求时，Next.js 将在第一个请求时动态呈现路由。未来的请求将服务于缓存中的静态路由段。

> **Note**: Check if your upstream data provider has caching enabled by default. You might need to disable (e.g. `useCdn: false`), otherwise a revalidation won't be able to pull fresh data to update the ISR cache. Caching can occur at a CDN (for an endpoint being requested) when it returns the `Cache-Control` header. ISR on Vercel [persists the cache globally and handles rollbacks](https://vercel.com/docs/concepts/incremental-static-regeneration/overview).
> 
> 注意：检查您的上游数据提供者是否默认启用了缓存。您可能需要禁用（例如 useCdn: false），否则重新验证将无法提取新数据来更新 ISR 缓存。当 CDN 返回 Cache-Control 标头时，缓存可以发生在 CDN（对于被请求的端点）。 Vercel 上的 ISR 在全局范围内保留缓存并处理回滚 .

## [On-demand Revalidation](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating#on-demand-revalidation)

按需重新验证

If you set a `revalidate` time of `60`, all visitors will see the same generated version of your site for one minute. The only way to invalidate the cache is if someone visits the page after the minute has passed.

如果您将重新验证时间设置为 60，则所有访问者将在一分钟内看到您网站的相同生成版本。使缓存无效的唯一方法是在一分钟后有人访问该页面。

The Next.js App Router supports revalidating content on-demand based on a route or cache tag. This allows you to manually purge the Next.js cache for specific fetches, making it easier to update your site when:

Next.js App Router 支持基于路由或缓存标签按需重新验证内容。这使您可以手动清除特定提取的 Next.js 缓存，从而在以下情况下更轻松地更新您的站点：

- Content from your headless CMS is created or updated.
- 创建或更新来自无外设 CMS 的内容。
- Ecommerce metadata changes (price, description, category, reviews, etc).
- 电子商务元数据更改（价格、描述、类别、评论等）。

### [Using On-Demand Revalidation](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating#using-on-demand-revalidation)

使用按需重新验证

Data can be revalidated on-demand by path ([`revalidatePath`](https://nextjs.org/docs/app/api-reference/functions/revalidatePath)) or by cache tag ([`revalidateTag`](https://nextjs.org/docs/app/api-reference/functions/revalidateTag)).

可以通过路径 (revalidatePath) 或缓存标记 (revalidateTag) 按需重新验证数据。

For example, the following `fetch` adds the cache tag `collection`:

例如，下面的 fetch 添加了缓存标签集合：

app/page.tsx

```ts
export default async function Page() {
  const res = await fetch('https://...', { next: { tags: ['collection'] } });
  const data = await res.json();
  // ...
}
```

This cached data can then be revalidated on-demand by calling `revalidateTag` in a [Route Handler](https://nextjs.org/docs/app/building-your-application/routing/router-handlers).

然后可以通过在路由处理程序中调用 revalidateTag 按需重新验证此缓存数据。

app/api/revalidate/route.ts

```js
import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag');
  revalidateTag(tag);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
```

## [Error Handling and Revalidation](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating#error-handling-and-revalidation)

错误处理和重新验证

If an error is thrown while attempting to revalidate data, the last successfully generated data will continue to be served from the cache. On the next subsequent request, Next.js will retry revalidating the data.

如果在尝试重新验证数据时抛出错误，则将继续从缓存中提供最后成功生成的数据。在下一个后续请求中，Next.js 将重新尝试重新验证数据。

# Server Actions

服务器操作

[Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#server-actions) are an **alpha** feature in Next.js, built on top of React [Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#actions). They enable server-side data mutations, reduced client-side JavaScript, and progressively enhanced forms.

Server Actions 是 Next.js 中的一个 alpha 特性，它建立在 React Actions 之上。它们支持服务器端数据突变、减少客户端 JavaScript 和逐步增强的表单。

app/add-to-cart.js

```js
import { cookies } from 'next/headers';

export default function AddToCart({ productId }) {
  async function addItem(data) {
    'use server';

    const cartId = cookies().get('cartId')?.value;
    await saveToDb({ cartId, data });
  }

  return (
    <form action={addItem}>
      <button type="submit">Add to Cart</button>
    </form>
  );
}
```

## [Convention](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#convention)

You can enable Server Actions in your Next.js project by enabling the **experimental** `serverActions` flag.

您可以通过启用实验性 serverActions 标志在 Next.js 项目中启用服务器操作。

next.config.js

```js
module.exports = {  experimental: {    serverActions: true,  },};
```

### [Creation](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#creation)

Create a Server Action by defining an asynchronous function with the `"use server"` directive at the top of the function body. This function should have **serializable arguments** and a **serializable return value** based on the React Server Components protocol.

通过在函数体顶部使用“使用服务器”指令定义异步函数来创建服务器操作。这个函数应该有可序列化的参数和一个基于 React 服务器组件协议的可序列化的返回值。

app/_components/component.js

```js
async function myAction() {  'use server';  // ...}
```

You can also use a top-level `"use server"` directive on top of a file. This can be useful if you have a single file that exports multiple Server Actions, and it is **required** if you're importing a Server Action in a Client Component.

您还可以在文件顶部使用顶级“使用服务器”指令。如果您有一个导出多个服务器操作的单个文件，这将很有用，如果您在客户端组件中导入一个服务器操作，则这是必需的。

app/_actions.js

```js
'use server'; export async function myAction() {  // ...}
```

> **Note:** When using a top-level `"use server"` directive, all exports will be considered Server Actions.
> 
> 注意：当使用顶级“使用服务器”指令时，所有导出都将被视为服务器操作。

### [Invocation](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#invocation)

You can invoke Server Actions using the following methods:

您可以使用以下方法调用服务器操作：

- Using `action`: React's `action` prop allows invoking a Server Action on a `<form>` element.
- 使用动作：React 的动作道具允许在 <form> 元素上调用服务器动作。
- Using `formAction`: React's `formAction` prop allows handling `<button>`, `<input type="submit">`, and `<input type="image">` elements in a `<form>`.
- 使用 formAction：React 的 formAction 属性允许处理 <form> 中的 <button>、<input type="submit"> 和 <input type="image"> 元素。
- Custom Invocation with `startTransition`: Invoke Server Actions without using `action` or `formAction` by using `startTransition`. This method **disables [Progressive Enhancement](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#progressive-enhancement)**.
- 使用 startTransition 的自定义调用：通过使用 startTransition 在不使用 action 或 formAction 的情况下调用服务器操作。此方法禁用渐进增强。

#### [`action`](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#action)

You can use React's `action` prop to invoke a Server Action on a `form` element. Server Actions passed with the action prop act as asynchronous side effects in response to user interaction.

您可以使用 React 的 action 属性在表单元素上调用服务器操作。通过 action 属性传递的服务器操作充当响应用户交互的异步副作用。

app/add-to-cart.js

```js
export default function AddToCart({ productId }) {
  async function addItem(data) {
    'use server';

    const cartId = cookies().get('cartId')?.value;
    await saveToDb({ cartId, data });
  }

  return (
    <form action={addItem}>
      <button type="submit">Add to Cart</button>
    </form>
  );
}
```

> **Note:** An `action` is similar to the HTML primitive [`action`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#action)
> 
> 注意：一个动作类似于 HTML 原始动作

#### [`formAction`](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#formaction)

表单动作

You can use `formAction` prop to handle **Form Actions** on elements such as `button`, `input type="submit"`, and `input type="image"`. The `formAction` prop takes presedence over the form's `action`.

您可以使用 formAction 属性来处理按钮、input type="submit" 和 input type="image" 等元素上的表单操作。 formAction 道具优先于表单的操作。

app/form

```js
export default function Form() {
  async function handleSubmit() {
    'use server';
    // ...
  }

  async function submitImage() {
    'use server';
    // ...
  }

  return (
    <form action={handleSubmit}>
      <input type="text" name="name" />
      <input type="image" formAction={submitImage} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

> **Note:** A `formAction` is the HTML primitive [`formaction`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formaction). React now allows you to pass functions to this attribute.
> 
> 注意：formAction 是 HTML 原始 formaction React 现在允许您将函数传递给此属性。

#### [Custom invocation using `startTransition`](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#custom-invocation-using-starttransition)

使用 startTransition 的自定义调用

You can also invoke Server Actions without using `action` or `formAction`. You can achieve this by using `startTransition` provided by the `useTransition` hook, which can be useful if you want to use Server Actions outside of forms, buttons, or inputs.

您还可以在不使用 action 或 formAction 的情况下调用服务器操作。您可以通过使用 useTransition 挂钩提供的 startTransition 来实现这一点，如果您想在表单、按钮或输入之外使用服务器操作，这会很有用。

> **Note:** Using `startTransition` disables the out-of-the-box Progressive Enhancement.
> 
> 注意：使用 startTransition 会禁用开箱即用的 Progressive Enhancement。

app/_components/example-client-component.js

```js
'use client';

import { useTransition } from 'react';
import { addItem } from '../_actions';

function ExampleClientComponent({ id }) {
  let [isPending, startTransition] = useTransition();

  return (
    <button onClick={() => startTransition(() => addItem(id))}>
      Add To Cart
    </button>
  );
}
```

app/_actions.js

```js
'use server';

export async function addItem(id) {
  await addItemToDb(id);
  revalidatePath(`/product/${id}`);
}
```

#### [Custom invocation without `startTransition`](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#custom-invocation-without-starttransition)

没有 startTransition 的自定义调用

If you aren't doing [Server Mutations](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#server-mutations), you can directly pass the function as a prop like any other function.

如果你不做服务器突变，你可以像任何其他函数一样直接将函数作为 prop 传递。

app/posts/[id]/page.ts

```ts
import kv from '@vercel/kv';
import LikeButton from './like-button';

export default function Page({ params }: { params: { id: string } }) {
  async function increment() {
    'use server';
    await kv.incr(`post:id:${params.id}`);
  }

  return <LikeButton increment={increment} />;
}
```

app/post/[id]/like-button.tsx

```ts
'use client';

export default function LikeButton({
  increment,
}: {
  increment: () => Promise<void>;
}) {
  return (
    <button
      onClick={async () => {
        await increment();
      }}
    >
      Like
    </button>
  );
}
```

### [Enhancements](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#enhancements)

增强功能

#### [Experimental `useOptimistic`](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#experimental-useoptimistic)

实验使用乐观

The experimental `useOptimistic` hook provides a way to implement optimistic updates in your application. Optimistic updates are a technique that enhances user experience by making the app appear more responsive.

实验性 useOptimistic 挂钩提供了一种在您的应用程序中实现乐观更新的方法。乐观更新是一种通过使应用程序看起来响应更快来增强用户体验的技术。

When a Server Action is invoked, the UI is updated immediately to reflect the expected outcome, instead of waiting for the Server Action's response.

调用服务器操作时，UI 会立即更新以反映预期结果，而不是等待服务器操作的响应。

app/thread.js

```
'use client';

import { experimental_useOptimistic as useOptimistic } from 'react';
import { send } from './_actions.js';

export function Thread({ messages }) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [...state, { message: newMessage, sending: true }],
  );
  const formRef = useRef();

  return (
    <div>
      {optimisticMessages.map((m) => (
        <div>
          {m.message}
          {m.sending ? 'Sending...' : ''}
        </div>
      ))}
      <form
        action={async (formData) => {
          const message = formData.get('message');
          formRef.current.reset();
          addOptimisticMessage(message);
          await send(message);
        }}
        ref={formRef}
      >
        <input type="text" name="message" />
      </form>
    </div>
  );
}
```

#### [Experimental `useFormStatus`](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#experimental-useformstatus)

实验使用FormStatus

The **experimental** `useFormStatus` hook can be used within Form Actions, and provides the `pending` property.

实验性 useFormStatus 挂钩可以在表单操作中使用，并提供 pending 属性。

app/form.js

```
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

function Submit() {
  const { pending } = useFormStatus();

  return (
    <input
      type="submit"
      className={pending ? 'button-pending' : 'button-normal'}
      disabled={pending}
    >
      Submit
    </input>
  );
}
```

#### [Progressive Enhancement](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#progressive-enhancement)

渐进增强

Progressive Enhancement allows a `<form>` to function properly without JavaScript, or with JavaScript disabled. This allows users to interact with the form and submit data even if the JavaScript for the form hasn't been loaded yet or if it fails to load.

渐进增强允许 <form> 在没有 JavaScript 或禁用 JavaScript 的情况下正常运行。这允许用户与表单交互并提交数据，即使表单的 JavaScript 尚未加载或加载失败也是如此。

Both Server Form Actions and Client Form Actions support Progressive Enhancement, using one of two strategies:

服务器表单操作和客户端表单操作都支持渐进增强，使用以下两种策略之一：

- If a **Server Action** is passed directly to a `<form>`, the form is interactive **even if JavaScript is disabled**.
- 如果将服务器操作直接传递给 <form>，则即使禁用 JavaScript，该表单也是交互式的。
- If a **Client Action** is passed to a `<form>`, the form is still interactive, but the action will be placed in a queue until the form has hydrated. The `<form>` is prioritized with Selective Hydration, so it happens quickly.
- 如果将客户端操作传递给 <form>，则该表单仍然是交互式的，但该操作将被放入队列中，直到表单被水化。 <form> 优先考虑 Selective Hydration，因此它发生得很快。

app/_components/example-client-component.js

```
'use client';

import { useState } from 'react';
import { handleSubmit } from './_actions.js';

export default function ExampleClientComponent({ myAction }) {
  const [input, setInput] = useState();

  return (
    <form action={handleSubmit} onChange={(e) => setInput(e.target.value)}>
      {/* ... */}
    </form>
  );
}
```

In both cases, the form is interactive before hydration occurs. Although Server Actions have the additional benefit of not relying on client JavaScript, you can still compose additional behavior with Client Actions where desired without sacrificing interactivity.

在这两种情况下，形式在水合作用发生之前是交互的。虽然服务器操作具有不依赖客户端 JavaScript 的额外好处，但您仍然可以在需要时使用客户端操作组合其他行为，而不会牺牲交互性。

---

## [Examples](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#examples)

例子

### [Usage with Client Components](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#usage-with-client-components)

与客户端组件一起使用

#### [Import](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#import)

进口

Server Actions **cannot** be *defined* within Client Components, but they can be *imported*. To use Server Actions in Client Components, you can import the action from a file containing a top-level `"use server"` directive.

服务器操作不能在客户端组件中定义，但可以导入。要在客户端组件中使用服务器操作，您可以从包含顶级“使用服务器”指令的文件中导入操作。

app/_actions.js

```
'use server';

export async function myAction() {
  // ...
}
```

app/_components/example-client-component.js

```
'use client';

import { myAction } from '../_actions';

export default function ExampleClientComponent() {
  React.useEffect(() => {
    // ...
  }, []);

  return <button formAction={myAction}>{/* ... */}</button>;
}
```

#### [Props](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#props)

道具

Although [importing](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#import) Server Actions is recommended, in some cases you might want to pass down a Server Action to a Client Component as a prop.

虽然建议导入服务器操作，但在某些情况下，您可能希望将服务器操作作为道具传递给客户端组件。

For example, you might want to use a dynamically generated value within the action. In that case, passing a Server Action down as a prop might be a viable solution.

例如，您可能希望在操作中使用动态生成的值。在这种情况下，将 Server Action 作为 prop 向下传递可能是一个可行的解决方案。

app/_components/example-server-component.js

```
import { ExampleClientComponent } from './_components/example-client-component.js';

function ExampleServerComponent({ id }) {
  async function updateItem(data) {
    'use server';
    modifyItem({ id, data });
  }

  return <ExampleClientComponent updateItem={updateItem} />;
}
```

app/_components/example-client-component.js

```
'use client';

export default function ExampleClientComponent({ updateItem }) {
  React.useEffect(() => {
    // ...
  }, []);

  async function action(formData: FormData) {
    await updateItem(formData);
  }

  return <button formAction={action}>{/* ... */}</button>;
}
```

### [On-demand Revalidation](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#on-demand-revalidation)

按需重新验证

Server Actions can be used to revalidate data on-demand by path ([`revalidatePath`](https://nextjs.org/docs/app/api-reference/functions/revalidatePath)) or by cache tag ([`revalidateTag`](https://nextjs.org/docs/app/api-reference/functions/revalidateTag)).

服务器操作可用于通过路径 (revalidatePath) 或缓存标记 (revalidateTag) 按需重新验证数据。

```
import { revalidateTag } from 'next/cache';

async function revalidate() {
  'use server';
  revalidateTag('blog-posts');
}
```

### [Validation](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#validation)

验证

The data passed to a Server Action can be validated or sanitized before invoking the action. For example, you can create a wrapper function that receives the action as its argument, and returns a function that invokes the action if it's valid.

在调用操作之前，可以验证或清理传递给服务器操作的数据。例如，您可以创建一个包装器函数，它接收操作作为其参数，并返回一个调用该操作（如果有效）的函数。

app/_actions.js

```
'use server';

import { withValidate } from 'lib/form-validation';

export const action = withValidate((data) => {
  // ...
});
```

lib/form-validation

```
export function withValidate(action) {
  return (formData: FormData) => {
    'use server';

    const isValidData = verifyData(formData);

    if (!isValidData) {
      throw new Error('Invalid input.');
    }

    const data = process(formData);
    return action(data);
  };
}
```

### [Using headers](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#using-headers)

使用标头

You can read incoming request headers such as `cookies` and `headers` within a Server Action.

您可以在服务器操作中读取传入的请求标头，例如 cookie 和标头。

```
import { cookies } from 'next/headers';

async function addItem(data) {
  'use server';

  const cartId = cookies().get('cartId')?.value;

  await saveToDb({ cartId, data });
}
```

Additionally, you can modify cookies within a Server Action.

此外，您可以在服务器操作中修改 cookie。

```
import { cookies } from 'next/headers'; async function create(data) {  'use server';   const cart = await createCart():  cookies().set('cartId', cart.id)  // or  cookies().set({    name: 'cartId',    value: cart.id,    httpOnly: true,    path: '/shop'  })}
```

## [Glossary](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#glossary)

词汇表

### [Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#actions)

动作

Performs asynchronous side effects in response to user interaction, with built-in solutions for error handling and [optimistic updates](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#experimental-useoptimistic). Similar to the HTML primitive [`action`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#action).

执行异步副作用以响应用户交互，内置错误处理和乐观更新解决方案。类似于 HTML 原始操作  
.

### [Form Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#form-actions)

表单操作

[Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#actions) integrated into the web standard `<form>` API, and enable out-of-the-box progressive enhancement and [loading states](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#experimental-useformstatus). Similar to the HTML primitive [`formaction`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#formation).

动作集成到网络标准 <form> API 中，并启用开箱即用的渐进式增强和加载状态。类似于 HTML 原语 formaction  
.

### [Server Functions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#server-functions)

服务器功能

Functions that run on the server, but can be called on the client.

在服务器上运行但可以在客户端调用的函数。

### [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#server-actions)

服务器操作

[Server Functions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#server-functions) called as an action.

作为动作调用的服务器功能。

### [Server Mutations](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#server-mutations)

服务器突变

[Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#server-actions) that mutates your data and calls `redirect`, `revalidatePath`, or `revalidateTag`.

改变数据并调用 redirect、revalidatePath 或 revalidateTag 的服务器操作。
