// typescript start

// 타입스크립트는 정적타입의 컴파일 언어
// JS(동적타입) - 런타임에서 동작할떄 타입 오휴 확인
// TS(정적타입) - 코드 작성 단계에서 타입 오류 확인 > JS 완벽 호환

// TS는 직접적으로 브라우저나 Node.js 환경에서 동작하지 못한다
// >> 자바스크립토 변환하여 동작 (= 컴파일)

// let hello: String = "hi!";

// hello = "Hello world!";

// console.log(hello);

/////////////////////////////////////////////////////////////////////////////////////////////////

// 타입 종류

// 문자
// let str: string;
// let red: string = "Red";
// let green: string = "Green";
// let myColor: string = `My color is ${red}.`;
// let yourColor: string = "Your color is" + green;

// 숫자
// let num: number;
// let integer: number = 6;
// let float: number = 3.14;
// let infinity: number = Infinity; >> 숫자데이터로 취급 가능
// let nan: number = NaN; >> Not a Number

// 불린
// let isBoolean: boolean;
// let isDone: boolean = false;

// Null / Undefined  >> 거의 사용안함
// let nul: null;
// let und: undefined;
// nul = null;
// let num: number;
// num = 123;
// console.log(nul);
// console.log(und);
// console.log(num);

// 배열
// const fruits: string[] = ["Apple", "Banana", "Cherry"];
// const number: number[] = [1, 2, 3, 4, 5, 6, 7];
// const union: (string | number)[] = ["Apple", 1, 2, "Banana", 3];

// 객체
// typeof DATA === 'object'
// const obj: object = {};
// const arr: object = []; // 배열도 obj
// const func: object = function () {}; // 함수도 obj >> 엄격하지 못해 obj 잘 사용안함

// interface User {
//   // 변수와 구분하기위해 대문자로 쓴다 (파스칼케이스)
//   name: string;
//   age: number;
//   isValid: boolean;
// }
// const userA: User = {
//   name: "huni",
//   age: 30,
//   isValid: true,
// };
// const userB: User = {
//   name: "seung",
//   age: 30,
//   isValid: false,
// };

// 함수
// const add: (x: number, y: number) => number = function (x, y) {
//   // = function (x: number, y:number):number {
//   return x + y;
// };

// const a: number = add(1, 2);

// const hello: () => void = function () {
//   // function (): void {
//   console.log("Hello world");
// };
// const h: void = hello();

// Any
// let hello: any = "Hello world";
// hello = 123;
// hello = false;
// hello = null;
// hello = {};
// hello = [];
// hello = function () {};

// Unknown
// const a: any = 123;
// const u: unknown = 123; // 데이터의 타입을 알수 없는 상황에선 unKnown을 사용하자

// const any: any = u;
// const boo: boolean = u;
// const num: number = u;
// const arr: string[] = u;
// const obj: { x: string; y: number } = u;

// Tuple
// 배열 안 데이터에 순서가 있을때
// const tuple: [string, number, boolean] = ["a", 1, false];
// const users: [number, string, boolean][] = [
//   [1, "Neo", true],
//   [2, "Evan", false],
//   [3, "Lewis", true],
// ];

// Void
// function hello(msg: string): void {
//   // return으로 반환되지 않을때 void 사용 >> 반환하지 않을때
//   console.log(`Hello ${msg}`);
// }
// const hi: void = hello("world");

// Never
// const nev: [] = [];
// nev.push(3);

// Union
// let union: string | number;
// union = "Hello type!";
// union = 123;
// union = false;

// Intersection
// interface User {
//   name: string;
//   age: number;
// }
// interface Validation {
//   isValid: boolean;
// }
// const heropy: User & Validation = {
//   name: "Neo",
//   age: 85,
//   isValid: true,
// };

/////////////////////////////////////////////////////////////////////////////////

// 타입 추론(Inference) - 모든 변수에 타입을 설정할 필요는 없음
// '추론' - 어떠한 판단을 근거로 삼아 다른 판단을 이끌어 냄

// 1) 초기화된 변수
// 2) 기본값이 설정된 매개변수
// 3) 반환 값이 있는 변수

// // 초기화된 변수
// let num = 12;

// // 기본값이 지정된 매개변수 `b` + 반환 값이 확실한 함수 `add`
// function add(a: number, b = 2) {
//   return a + b;
// }

/////////////////////////////////////////////////////////////////////////////////////

// 타입 선언(Assertion)
// '단언' - 주저하지 아니하고 딱 잘라 말함

// 단언 키워드 - as
// Non-null일 경우 단언 연산다 - !

// 1)
// const el = document.querySelector("body") as HTMLBodyElement;
// el.textContent = "Hello world?!";

// const el = document.querySelector("body");
// el!.textContent = "Hello world?!";

// const el = document.querySelector(".title"); // .title의 경우 없을 수 있기 때문에 코드상 문제는 없더라도 error가 발생
// if (el) {
// 타입가드
//   el.textContent = "Hello world?!";
// }

// 2)
// function getNumber(x: number | null | undefined) {
//   // return Number((x as number).toFixed(2));

//   // return Number(x!.toFixed(2)); >> ! : null or undefined가 아니다.

//   if (x) {
//     // 타입가드
//     return Number(x.toFixed(2));
//   }
// }
// getNumber(3.1415315);
// getNumber(null);

// // 3)
// function getValue(x: string | number, isNumber: boolean) {
//   if (isNumber) {
//     return Number((x as number).toFixed(2));
//   }
//   return (x as string).toUpperCase();
// }
// getValue("hello world", false); // HELLO WORLD
// getValue(3.14151321, true); // 3.14

// // 할당 단언(Assertion)
// // '단언' - 주저하지 아니하고 딱 잘라 말함

// let num!: number;
// console.log(num);

//////////////////////////////////////////////////////////////////////////////

// // 타입 가드

// // (1)
// function logText(el: Element) {
//   console.log(el.textContent);
// }

// const h1El = document.querySelector("h1"); // 해당 요소가 없을 수 있기 떄문
// if (h1El instanceof HTMLHeadElement) { // instanceof : 어떤 클래스의 insstance 인지
//   logText(h1El);
// }

// // (2)
// function add(val: string | number | boolean) {
//   let res = "Result => ";
//   if (typeof val === "number") {
//     res += val.toFixed(2);
//   }
//   if (typeof val === "string") {
//     res += val.toUpperCase();
//   }
//   console.log(res);
// }

// add(3.145123);
// add("hello world");

//////////////////////////////////////////////////////////////////////////////////////

// 인터페이스(Interface)

// 선택적 속성 - ?
// 읽기전용 속성 - readonly

// interface User {
//   name: string;
//   readonly age: number;
//   isValid?: boolean;
// }
// const heropy: User = {
//   name: "Heropy",
//   age: 85,
//   isValid: true,
// };

// heropy.isValid = false;
// heropy.age = 22; // 읽기전용 속성으로 값을 할당할 수 없다

// const neo: User = {
//   name: "Neo",
//   age: 30,
// };

//// 함수 타입 - 호출 시그니처 (Call Signature)

// interface GetName {
//   // 함수타입
//   (param: string): string;
// }
// interface User {
//   name: string;
//   age: number;
//   //   getName: GetName;
//   getName: (param: string) => string;
// }

// const heropy: User = {
//   name: "Heropy",
//   age: 85,
//   getName(message: string) {
//     console.log(message);
//     return this.name;
//   },
// };
// heropy.getName("Hello~");

//// 인터페이스(Interface)
//// 인덱스 가능 타입 - 인덱스 시그니쳐 (Index Signature)
//// 대괄호 표기법

// // 배열
// interface Fruits {
//   [items: number]: string;
// }
// const fruits: Fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits);

// // 객체
// interface User {
//   [key: string]: unknown;
//   name: string;
//   age: number;
// }
// const heropy: User = {
//   name: "Heropy",
//   age: 85,
// };
// heropy["isValid"] = true;
// heropy["emails"] = ["rlatmdgns16@naver.com", "test@gamil.com"];
// console.log(heropy);

// interface Payload {
//   [key: string]: unknown;
// }
// function logValues(payload: Payload) {
//   for (const key in payload) {
//     console.log(payload[key]);
//   }
// }

// interface User {
//   [key: string]: unknown; // 인덱스 가능한타입 추가
//   name: string;
//   age: number;
//   isValid: boolean;
// }
// const heropy: User = {
//   name: "Heropy",
//   age: 85,
//   isValid: true,
// };
// logValues(heropy);

// // 확장(상속)

// interface UserA {
//   name: string;
//   age: number;
// }
// interface UserB extends UserA {
//   isValid: boolean;
// }

// const heropy: UserA = {
//   name: "Heropy",
//   age: 85,
//   isValid: true,
// };
// const neo: UserB = {
//   name: "Neo",
//   age: 102,
//   isValid: true,
// };

// interface FullName {
//   firstName: string;
//   lastName: string;
// }
// interface FullName {
//   middleName: string;
//   lastName: boolean;
// }

// const fullName: FullName = {
//   firstName: "Tomas",
//   middleName: "Sean",
//   lastName: "Connery",
// };

/////////////////////////////////////////////////////////////////////////////////////////

// 타입별칭 (Alias)
// 타입의 별도 이름

// type TypeA = string;
// type TypeB = string | number | boolean;
// type User =
//   | {
//       name: string;
//       age: number;
//       isValid: boolean;
//     }
//   | [string, number, boolean];

// const userA: User = {
//   name: "Neo",
//   age: 85,
//   isValid: true,
// };

// const userB: User = ["Evan", 36, false];

// function someFunc(param: TypeB): TypeA {
//   switch (typeof param) {
//     case "string":
//       return param.toUpperCase();
//     case "number":
//       return param.toFixed(2);
//     default:
//       return "Boolean!";
//   }
// }

// type TypeUser = {
//   name: string;
//   age: number;
//   isValid: boolean;
// };
// interface InterfaceUser {
//   name: string;
//   age: number;
//   isValid: boolean;
// }

// const heropy: TypeUser = {
//   name: "Heropy",
//   age: 85,
//   isValid: true,
// };

////////////////////////////////////////////////////////////////////////////////////

// // 함수 - 명시적 this

// interface Cat {
//   name: string;
//   age: number;
// }
// const cat: Cat = {
//   name: "Lucy",
//   age: 3,
// };

// function hello(this: Cat, message: string) {
//   console.log(`Hello ${this.name}, ${message}`);
// }
// hello.call(cat, "You are pretty awesome!");

//////////////////////////////////////////////////////////////////////////////////////

// 함수 - 오버로딩(Overloading)

// 1)
// function add1(a: string, b: string) {
//   return a + b;
// }
// function add2(a: number, b: number) {
//   return a + b;
// }
// add1("hello", "world~"); // 'hello world'
// add2(1, 2); // 3
// add1("hello", 2);
// add2("hello", 2);

// 2)
// function add(a: string, b: string): string; // 타입 선언부
// function add(a: number, b: number): number; // 타입 선언부
// function add(a: any, b: any) {
//   // 함수 구현부
//   return a + b;
// }
// add("hello", "world~"); // 'hello world'
// add(1, 2); // 3
// add("hello", 2);
// add(1, "world~");

////////////////////////////////////////////////////////////////////////////////////////////

// 클래스

// 접근 제어자 (Access Modifiers)
// public - 어디서나 자유롭게 접근 가능
// protected - 나와 파생된 후손 클래스 내에서 접근 가능
// private - 내 클래스에서만 접근 가능

// class UserA {
//   // this 는 클래스 body 안에 타입이 지정되어 있어야함
//   //   first: string = "";
//   //   protected last: string = "";
//   //   private age: number = 0;

//   constructor(
//     public first: string = "",
//     public last: string = "",
//     public age: number = 0
//   ) {
//     // ...
//   }

//   getAge() {
//     return `${this.first} ${this.last} is ${this.age}`;
//   }
// }
// class UserB extends UserA {
//   getAge() {
//     return `${this.first} ${this.last} is ${this.age}`;
//   }
// }
// class UserC extends UserA {
//   getAge() {
//     return `${this.first} ${this.last} is ${this.age}`;
//   }
// }

// const neo = new UserA("Neo", "Anderson", 102);
// console.log(neo.first);
// console.log(neo.last);
// console.log(neo.age);

///////////////////////////////////////////////////////////////////////////////////////

// 제네릭
// 함수

// interface Obj {
//   x: number;
// }
// type Arr = [number, number];

// function toArray<T>(a: T, b: T) {
//   return [a, b];
// }

// console.log(
//   toArray("Neo", "Anderson"),
//   toArray(1, 2),
//   toArray(true, false),
//   toArray({ x: 1 }, { x: 2 }),
//   toArray<Arr>([1, 2], [3, 4]) // number[]
// );

// 클래스

// class User<P> {
//   constructor(public payload: P) {}
//   getPayload() {
//     return this.payload;
//   }
// }

// interface UserAType {
//   name: string;
//   age: number;
//   isValid: boolean;
// }
// interface UserBType {
//   name: string;
//   age: number;
//   emails: string[];
// }
// const heropy = new User<UserAType>({
//   name: "Heropy",
//   age: 85,
//   isValid: true,
//   //   emails: [],
// });
// const neo = new User<UserBType>({
//   name: "Neo",
//   age: 30,
//   emails: ["neo@gamil.com"],
// });

// 인터페이스, 제약조선

// interface MyData<T extends string | number[]> {
//   name: string;
//   value: T;
// }
// const dataA: MyData<string> = {
//   name: "Data A",
//   value: "Hello world",
// };
// const dataB: MyData<number> = {
//   name: "Data B",
//   value: 1234,
// };
// const dataC: MyData<boolean> = {
//   name: "Data C",
//   value: true,
// };
// const dataD: MyData<number[]> = {
//   name: "Data D",
//   value: [1, 2, 3, 4],
// };

//////////////////////////////////////////////////////////////////////////////

// 모듈

// npm i lodash
// TS 파일에서 JS 파일을 가져오려 하니 error 발생 >> 타입선언 필요

// 삼중 슬래시 지시자
// /// <reference path="./main.d.ts" />
// declare module "lodash" {
//     interface Lodash {
//       camelCase: (str: string) => string;
//       snakeCase: (str: string) => string;
//       kebabCase: (str: string) => string;
//     }
//     const _: Lodash;
//     export default _;
//   }
// import _ from "lodash";
// // npm info @types/lodash >> 패키지 있는지 확인
// // npm i @types/lodash -D

// const str = "the brown fox jumps over the lazy dog";

// console.log(_.camelCase(str));
// console.log(_.snakeCase(str));
// console.log(_.kebabCase(str));

/////////////////////////////////////////////////////////////////////////////////////

// 타입 가져오기

// import { getFullName, User } from "./user";

// const heropy: User = {
//   firstName: "Heropy",
//   lastName: "park",
//   age: 85,
//   isValid: true,
// };
// const fullName = getFullName(heropy);

// console.log(fullName);
// console.log(heropy.isValid);

//////////////////////////////////////////////////////////////////////////////////////////

// tsconfig.json 구성 옵션

// {    컴파일러 옵션 지정
//     "compilerOptions": {
// 컴파일될 ES(JS) 버전 명시 - "ES2015" 권장
//       "target": "ES2015",

// 모듈 시스템 지정 - "CommonJS", "AMD", "ESNext"
//       "module": "ESNext",

// 모듈 해석 방식 지정 - "Node", "Classic"
//       "moduleResolution": "Node",

// ESM 모듈 방식 호환성 활성화 여부
//       "esModuleInterop": true,

// 모든 파일을 모듈로 컴파일, import 혹은 export 키워드
// 필수
//       "isolatedModules : false",

// 모듈 해석에 사용할 기준 경로 지정
//       "baseUrl" : "./",

// 컴파일러가 참조할 타입 선언(d.ts)의 경로를 지정
//       "typeRoots" : ["./node_modules/@types"],

// 컴파일에서 사용할 라이브러리 지정 - "ESNext", "DOM"
//       "lib": ["ESNext", "DOM"],

// 더 엄격한 타입 검색 활성화
//       "strict": true,

//     // 컴파일할 파일 경로 목록
//     "include": ["src/**/*.ts", "api/**/*.ts"],

//     // 컴파일에서 제외할 파일 경로 목록
//     "exclude": ["node_modules"]
//   }
