let u: undefined = undefined;
let n: null = null;
let v: void = undefined; // null과 void는 할당할 수 없다.

/*
"strictNullChecks": true 설정을 사용하면 ("strict": true는 하위의 모든 strict 옵션을 기본적으로 설정한다.)
null과 undefined는 각각 자기 자신에게만 할당할 수 있다.
*/

// let myAge: number = null; /* number에 null 또는 undefined를 할당할 수 없다. */

let union: string | null = null;

union = "Strawberry";
