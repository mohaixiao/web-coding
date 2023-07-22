function toJSON(data) {

}

// test
toJSON(""); // -> ""
toJSON("abc"); // -> "abc"
toJSON(123); // -> 123
toJSON({ a: 1, b: 2 }); // -> {"a":1, "b":2}
toJSON(["1", 3, { name: "monica", age: 18 }]); //-> ["1", 3, {"name":"monica", "age":18}]


function toJSON(obj) {
    if (typeof obj === 'string') {
        return `"${obj}"`;
    }

    if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
        return String(obj);
    }

    if (Array.isArray(obj)) {
        return `[${obj.map(item => toJSON(item)).join(',')}]`;
    }

    if (typeof obj === 'object') {
        const keys = Object.keys(obj);
        return `{${keys.map(key => `"${key}":${toJSON(obj[key])}`).join(',')}}`;
    }

    return undefined;
}
