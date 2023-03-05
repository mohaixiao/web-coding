function isPhone(tel) {
    var regx = /^1[34578]\d{9}$/;
    return regx.test(tel);
}