declare const maybe: unknown;
// const mayNumber: number = maybe; /* unknown을 mayNumber에 바로 할당할 수 없다 */

if (maybe === true) {
  const mayBoolean: boolean = maybe;

  // const mayString: string = maybe; /* Error */
}

if (typeof maybe === "string") {
  const mayString: string = maybe;

  // const mayBoolean: boolean = maybe; /* Error */
}
