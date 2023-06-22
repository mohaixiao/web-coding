String.prototype.myIndexOf = function myIndexOf(searchValue, position = 0) {
    if (typeof searchValue != 'string') {
        throw new Error(`searchValue ${searchValue} 不是字符串`)
    }

    if (searchValue === '') {
        console.log(position < this.length ? position : this.length)
        return position < this.length ? position : this.length
    }

    let start = 0
    let res
    let isStart = true
    for (let i = position; i < this.length; i++) {
        const element = this[i]

        if (isStart) {
            if (element === searchValue[start]) {
                res = i
                isStart = false
            }
        }

        while (element === searchValue[start]) {
            start++
        }

        if (start >= searchValue.length) {
            console.log(res)
            return res
        }
    }

    console.log(-1)
    return -1
}