const arr = ["8:15", "8:45", "8:15"]

function Avarge(arr) {
    let h = 0;
    let m = 0;
    for (let i = 0; i < arr.length; i++) {
        h += +arr[i].split(":")[0];
        m += +arr[i].split(":")[1];
    }

    let M = (h * 60 + m) / 3
    h = (M / 60).toFixed(0);
    m = M % 60
    if (m < 10) return `${h}:0${m}`
    return `${h}:${m}`
}

console.log(Avarge(arr));