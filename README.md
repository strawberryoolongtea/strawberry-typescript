# TypeScript?

자바스크립트는 브라우저 또는 Node.js 환경에서 실행되는 Interpreted Language이다.
이는 작성된 코드가 바로 런타임으로 실행되는 것을 말한다.

하지만 타입스크립트는 Plain한 자바스크립트 코드로 컴파일 및 트랜스파일하는 시점이 있고
이 과정을 통해 타입스크립트 코드가 자바스크립트 코드로 변환된다.

자바스크립트 코드에 오류가 있을 경우 런타임 환경에서 에러를 발견하는 반면에
타입스크립트는 컴파일하는 시점에서 에러를 발견할 수 있다.

# Installation

## 타입스크립트 컴파일러를 글로벌로 설치하는 경우

`npm i typescript -g` cli를 통해 글로벌 설치

`tsc test.ts` 명령어를 통해 `test.ts` 파일을 컴파일 및 `test.js` 파일 생성

모든 `ts` 파일을 컴파일 하는 명령어 `tsc` 를 사용하려면 `tsconfig.json` 파일이 있어야 한다.

생성하는 방법은 `tsc --init`

`ts` 파일이 수정될 때 자동으로 `js` 파일을 컴파일 해주고 싶을 때는

`tsc -w` 명령어를 사용한다.

## 글로벌로 설치된 패키지를 제거하는 방법

`npm uninstall typescript -g`

## 타입스크립트 컴파일러를 특정 프로젝트에 설치하는 경우

npm 프로젝트로 먼저 만들어 주기 위해서

`npm init -y` 명령어를 실행한다. -> `package.json` 파일 생성

typescript 패키지를 설치한다. `npm i typescript`

실제 런타임 환경에서 사용하지 않는다면 `npm i typescript -D` 명령으로 `devDependencies` 로 설치할 수 있다.

`tsc` 명령어를 사용하고 싶을 때는 다음과 같이 사용한다.

`node_modules/.bin/tsc` 또는 `node_modules/typescript/bin/tsc`

최신 버전의 npm에서는 `npx tsc` 로 사용할 수도 있다.

마찬가지로 `tsconfig.json` 파일 생성을 위해 `npx tsc --init` 명령을 사용할 수 있다.

`npx tsc -w` 명령을 통해 watch mode를 실행할 수 있다.

## script 명령으로 등록하는 방법

`"build": "tsc"` 로 등록해서 사용할 수 있다. 즉, 앞서 말한 'node_modules/.bin/tsc'와 같은 긴 명령어로 쓸 필요가 없다.

# Data Types

## ECMAScript 표준에 따른 기본 자료형

- Boolean
- Number
- String
- Null
- Undefined
- Symbol
- Array: object형

## 추가적으로 제공되는 타입

- Any, Void, Never, Unknown
- Enum
- Tuple: object형
