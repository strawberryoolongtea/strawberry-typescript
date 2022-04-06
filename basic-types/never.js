"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("failed");
}
function infiniteLoop() {
    while (true) { }
}
let a = "Hello";
if (typeof a !== "string") {
    a;
}
if (typeof b !== "string") {
    b;
}
