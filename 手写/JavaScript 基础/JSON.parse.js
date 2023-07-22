// eval 实现
var json = '{"a":"1", "b":2}';
var obj = eval("(" + json + ")");  // obj 就是 json 反序列化之后得到的对象
// New Function
var json = '{"name":"小姐姐", "age":20}';
var obj = (new Function('return ' + json))();


function parseJSON(jsonStr) {
    let index = 0;
    const getNextToken = () => jsonStr[index++];
    const parseValue = () => {
        const token = getNextToken();
        if (token === '{') {
            return parseObject();
        } else if (token === '[') {
            return parseArray();
        } else if (token === '"') {
            return parseString();
        } else if (token === 't') {
            return true;
        } else if (token === 'f') {
            return false;
        } else if (token === 'n') {
            return null;
        } else if (!isNaN(token) || token === '-') {
            return parseNumber(token);
        } else {
            throw new SyntaxError('Unexpected token: ' + token);
        }
    };
    const parseObject = () => {
        const obj = {};
        let key = parseString();
        while (getNextToken() !== '}') {
            obj[key] = parseValue();
            if (jsonStr[index] === ',') {
                index++;
                key = parseString();
            }
        }
        return obj;
    };
    const parseArray = () => {
        const arr = [];
        let token = getNextToken();
        while (token !== ']') {
            index--;
            arr.push(parseValue());
            token = getNextToken();
            if (token === ',') {
                token = getNextToken();
            }
        }
        return arr;
    };
    const parseString = () => {
        let str = '';
        let char = getNextToken();
        while (char !== '"') {
            str += char;
            char = getNextToken();
        }
        return str;
    };
    const parseNumber = (token) => {
        let numStr = token;
        while (!isNaN(jsonStr[index]) || jsonStr[index] === '.') {
            numStr += getNextToken();
        }
        return Number(numStr);
    };
    return parseValue();
}