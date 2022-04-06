console.log(Symbol("Strawberry") === Symbol("Strawberry"));
const sym = Symbol();
const obj = {
  [sym]: "value",
  sym: "value",
};

console.log(obj[sym] === obj.sym);
