let start = new Date().getTime();
let count = 0;
let intver = 1000;
console.log('开始时间:', start);

function loop() {
    count++;
    let offset = new Date().getTime() - (start + count * intver);
    cur = intver - offset;
    console.log("代码执行时间:", offset, "下次间隔时间:", cur);
    setTimeout(loop, cur)
}

setTimeout(loop, cur);


// https://blog.csdn.net/csD_Dscnnnnnnn/article/details/123469977

// https://blog.51cto.com/wpbars/2968516?u_atoken=a89cecf8-5777-41ff-b44e-3b8ad1c5182a&u_asession=01V8UPIttrSlHQLQZV7fuGUmUTYZ4kBDuWzIQmS5R35LtIAvSvtjI_yiFplulGJSIzX0KNBwm7Lovlpxjd_P_q4JsKWYrT3W_NKPr8w6oU7K-qqU-Rr4YT97owz5qp6A_P403ts_cGbUwEJxNvf3Rec2BkFo3NEHBv0PZUm6pbxQU&u_asig=05TuJSMLljoW1hfT0ZI5gECsVJJhfhoUosAeOVLyD0JEVRUObig8Wvf7BZ17r2HAGOBOj4R744eaz95rXLIO16N_3Vxil0a3MaJad98vg9a3ERXTmev5d6wJqGsKQ-JjGktXDy_6PZGGhjqSPvvkjvC9joipZZO-0y6fX1TpJTlo39JS7q8ZD7Xtz2Ly-b0kmuyAKRFSVJkkdwVUnyHAIJzd_tolil_o4lVW-2MRYn5mfzshyAT6L-Xsy3fAWG4OwW-E6ScranSLo1MMtKCr4_Qu3h9VXwMyh6PgyDIVSG1W8rKvQZUhvRd0ucIM8xpOpOvDDbFVJYdBKb20HLpJxMYg0K8e1Ew0hZCCxfVNGuRVOiAh2PWoi74MTJNGF6wXyKmWspDxyAEEo4kbsryBKb9Q&u_aref=ZuKbW0CdWOCbFXNvcmvHQtFsafw%3D