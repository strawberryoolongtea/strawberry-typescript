"use strict";
function returnAny(message) {
    console.log(message);
}
const any1 = returnAny("Return whatever");
any1.toString();
let looselyTyped = {};
const d = looselyTyped.a.b.c.d;
function leakingAny1(obj) {
    const a = obj.num;
    const b = a + 1;
    return b;
}
const c = leakingAny1({ num: 0 });
const e = c.indexOf("0");
function leakingAny2(obj) {
    const a = obj.num;
    const b = a + 1;
    return b;
}
const f = leakingAny2({ num: 0 });
