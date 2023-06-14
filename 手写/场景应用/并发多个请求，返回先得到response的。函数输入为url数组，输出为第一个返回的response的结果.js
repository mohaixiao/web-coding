let urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5'
]

function main(urls) {
    const promises = urls.map((url) => fetch(url))
    return Promise.race(promises)
}

main(urls).then(res => console.log(res));


function main(urls: string[]) {
    const promises = urls.map((url) => axios.get(url))
    return Promise.race(promises)
}