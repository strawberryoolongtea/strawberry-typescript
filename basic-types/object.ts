const person1 = { name: "Strawberry", age: 31 };
const person2 = Object.create({ name: "Strawberry", age: 31 });

let obj1: object = {};

obj1 = { name: "Strawberry" };
obj1 = [{ name: "Strawberry" }, { name: "Blueberry" }];

// ! 아래는 에러가 발생한다. obj는 primitive type이 아닌 값만 올 수 있다.
// obj1 = 31;
// obj1 = "Strawberry";
// obj1 = true;
// obj1 = 100n; /* bigint */
// obj1 = Symbol();
// obj1 = null;
// obj1 = undefined;
