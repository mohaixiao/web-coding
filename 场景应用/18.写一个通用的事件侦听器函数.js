var EventUtil = {
    // 添加事件处理程序
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false); // DOM2事件
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler); // IE事件
        } else {
            element["on" + type] = handler; // DOM0事件
        }
    },
    // 获取事件目标
    getEvent: function (event) {
        return event ? event : window.event;
    },
    // 获取 event 对象的引用，取到事件的所有信息，确保随时能使用 event
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    // 取消事件的默认行为
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    // 移除事件处理程序
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    // 阻止事件（主要是事件冒泡，因为 IE 不支持事件捕获）
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
};