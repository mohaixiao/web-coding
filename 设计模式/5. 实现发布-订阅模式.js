// 未考虑全局事件的命名冲突

class EventEmitter {
    // 1. 定义事件容器，用来装事件数组
    constructor() {
        this.handlers = {}
    }

    // 2. 添加事件方法，参数：事件名 事件方法
    addEventListener(type, handler) {
        // 创建新数组容器
        if (!this.handlers[type]) {
            this.handlers[type] = []
        }
        // 存入事件
        this.handlers[type].push(handler)
    }

    // 3. 触发事件，参数：事件名 事件参数
    dispatchEvent(type, once = false, ...params) {
        // 若没有注册该事件则抛出错误
        if (!this.handlers[type]) {
            return new Error('该事件未注册')
        }
        // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
        let tasks = this.handlers[type].slice()
        // 触发事件
        tasks.forEach(handler => {
            handler(...params)
        })
        if (once) {
            delete this.handlers[type]
        }
    }

    // 4. 事件移除，参数：事件名 要删除事件，若无第二个参数则删除该事件的订阅和发布
    removeEventListener(type, handler) {
        if (!this.handlers[type]) {
            return new Error('事件无效')
        }
        if (!handler) {
            // 移除该类别全部事件
            delete this.handlers[type]
        } else {
            const index = this.handlers[type].findIndex(el => el === handler)
            if (index === -1) {
                return new Error('无该绑定事件')
            }
            // 移除事件
            this.handlers[type].splice(index, 1)
            if (this.handlers[type].length === 0) {
                delete this.handlers[type]
            }
        }
    }
}

let event1 = new EventEmitter()

let login1 = function (...args) {
    console.log('login success1', args)
}
let login2 = function (...args) {
    console.log('login success2', args)
}
event1.addEventListener('login', login1)
event1.dispatchEvent('login', login2, true)
event1.removeEventListener('login', login1) // 解除订阅
event1.dispatchEvent('login', 1, 2, 3, 4, 5)
event1.dispatchEvent('login', 6, 7, 8, 9)
event1.dispatchEvent('login', 10, 11, 12)  