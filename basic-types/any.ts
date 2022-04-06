function returnAny(message: any): any {
  console.log(message);
}
const any1 = returnAny("Return whatever");

any1.toString();

let looselyTyped: any = {};
const d = looselyTyped.a.b.c.d;

function leakingAny1(obj: any) {
  const a = obj.num; /* any */
  const b = a + 1; /* any */
  return b; /* any */
}

const c = leakingAny1({ num: 0 }); /* any */
const e = c.indexOf("0"); /* not Error */

// * 누수를 막는 법
function leakingAny2(obj: any) {
  const a: number = obj.num;
  const b = a + 1;
  return b;
}

const f = leakingAny2({ num: 0 });
// const g = f.indexOf("0"); /* Error */
