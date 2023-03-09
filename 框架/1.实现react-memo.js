作用：为函数组件提供类似PureComponent的功能，调用方式
React.memo(Component, [isEqual])
其中isEqual方法的返回值与shouldComponentUpdate返回值相反
// 3种实现方式
// 函数式组件
function memo(Component, isEqual) {
  function MemoComponent(props) {
    const prevProps = React.useRef(props)
    React.useEffect(() => {
      prevProps.current = props
    })
    return React.useMemo(() => <Component {...props} />, [
      isEqual(prevProps.current, props),
    ])
  }
  return MemoComponent
}
// 使用PureComponent
function memo(Component, isEqual) {
  return class MemoComponent extends React.PureComponent {
    render() {
      return <Component {...this.props} />
    }
  }
}

// 使用shouldComponentUpdate
function memo(Component, isEqual) {
  return class MemoComponent extends React.Component {
    shouldComponentUpdate(prevProps) {
      return !isEqual(prevProps, this.props)
    }
    render() {
      return <Component {...this.props} />
    }
  }
}
