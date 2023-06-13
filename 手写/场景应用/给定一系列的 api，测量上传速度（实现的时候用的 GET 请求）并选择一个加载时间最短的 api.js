const apis = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5'
]

const fetchApi = async (url) => {
    try {
        const startTime = Date.now()
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        const endTime = Date.now()
        const timePeriod = endTime - startTime
        return timePeriod
    } catch (error) {
        console.log(error)
    }
}

const promises = apis.map(api => {
    return () => fetchApi(api)
})

const measureApiSpeed = (promises) => {
    Promise.race(promises)
        .then((f) => {
            f().then(value => console.log(value))
        })
        .catch(error => console.log(error))
}

measureApiSpeed(promises)