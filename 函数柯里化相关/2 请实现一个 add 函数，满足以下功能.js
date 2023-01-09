add(1); 			// 1
add(1)(2);  	// 3
add(1)(2)(3)// 6
add(1)(2, 3); // 6
add(1, 2)(3); // 6
add(1, 2, 3); // 6


function add(...args) {
    const fn = (...newArgs) => {
        return add.apply(null, args.concat(newArgs))
    }
    fn.toString = () => {
        return args.reduce((total, cur) => total + cur);
    }
    return fn;
}


add(1).toString(); 			// 1
add(1)(2).toString();  	// 3
add(1)(2)(3).toString();// 6
add(1)(2, 3).toString(); // 6
add(1, 2)(3).toString(); // 6