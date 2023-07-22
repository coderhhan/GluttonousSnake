import './index.less'
// import GameControl from './module/gameControl'

// new GameControl()

type combie = number|string
//函数重载，定义多种传参
function add(x:number,y:number):number
function add(x:string,y:string):string
function add(x:combie, y:combie) {
  if(typeof x === 'string' || typeof y === 'string' ) {
    return x.toString()+y.toString()
  }
 
  return x + y;
 }
 add(1, 2); // 3
 add("1", "2"); //"12"
 //使用断言 或者 函数重载定义
 const resutl = add('13','23') as string
 resutl.split(' ')

//void
 function fun(): void {
  console.log("this is TypeScript");
};

// class Parent {

//   say():never{
//     throw new Error('子类必须重写此方法')
//   }
// }

// class Child extends Parent {
//   say(){  这里会报错提示必须never返回值
//     console.log('我是子类')
//   }
// }

// const child = new Child()
// child.say()

// type Foo = string | number | boolean;

// function controlFlowAnalysisWithNever(foo: Foo) {
//   if (typeof foo === "string") {
//     // 这里 foo 被收窄为 string 类型
//   } else if (typeof foo === "number") {
//     // 这里 foo 被收窄为 number 类型
//   } else {
//     // foo 在这里是 never
//     const check: never = foo;
//   }
// }

//any 跟 unknown 
// let a:any =2
// let b:unknown = 3
// let str:string
// b = a
// b = 23
// str = a
// str = b
// const fn = function(){
//   console.log(22)
// }
// let b:unknown =  {
//   a:fn
// }
// if(typeof b!.a === 'function') {
//   b.a()
// }

function add2(a: number, b = '1') {
  return a + b;
}

add2(2)


// let x: number;
// initialize();
// // Variable 'x' is used before being assigned.(2454)
// console.log(2 * x); // Error
// function initialize() {
//   x = 10;
// }


// interface Config {
//   size: 'small' | 'big';
//   isEnable:  true | false;
//   margin: 0 | 2 | 4;
// }

// function test(obk:Config){

//   const a:string = 'big'
//   obk.size = a
// }

// test({
//   size:'small',
//   isEnable:false,
//   margin:2
// })

let a = '2'
let b:'2'='2'
a = b


interface Vector3{
  x:number;
  y:number;
  z:number;
  }
  
function getComponent(vector:Vector3, axis:"x"|"y"|"z" ){
  return vector[axis];
}
  
// let x:'x'="x"; //或者使用const
const x = 'x'
let vec={x:10,y:20,z:30};
  //类型“string”的参数不能赋给类型“"x" | "y" | "z"”的参数。
getComponent(vec,x);//Error

// let x = 'semlinker';


//   // Type is { x: number; y: number; }
// const obj1 = { 
//     x: 1, 
//     y: 2 
//   }; 
  
//   // Type is { x: 1; y: number; }
//   const obj2 = {
//     x:'1' as const,
//     y: 2,
//   }; 
  
//   // Type is { readonly x: 1; readonly y: 2; }
//   const obj3 = {
//     x: 1, 
//     y: 2 
//   } as const;

// interface te1 {
//   a:string
// }

// interface te2 {
//   a:number
// }

// type aaa = te1 & te2
// let ob:aaa= {
//   a:2
// }

// type mytype = {
//   readonly a:string
//   b?:number
//   [propName:string]:any
// }

// interface mytype2 {
//   readonly a:string
//   b?:number
//   [propName:string]:any
// }

interface LabeledValue {
  label: string;
}
function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj); // OK

interface funParams {
  (a:number,b:number):void
}
type func =()=>void

const ac:func = () =>{

}

function identity <T, U>(value: T, message: U) : U {
  console.log(message);
  return message;
}
console.log(identity<Number, string>(68, "Semlinker"));


interface Sizeable {
  size?: number;
  [propName:string]:number | undefined
}
function trace<T extends Sizeable>(arg: T): T {
  console.log(arg.size);
  return arg;
}

trace({s:22})


interface Person {
  name: string;
  age: number;
}

type K1 = keyof Person; // "name" | "age"
type K2 = keyof Person[]; // "length" | "toString" | "pop" | "push" | "concat" | "join" 
type K3 = keyof { [asd: string]: Person };  // string | number ///没懂

// const getValue = <T,K extends keyof T> (obj:T,keys:K[]):T[K][]=>{
//   return keys.map(key=>obj[key])
// }

// let person:Person = {
//   name:'22',
//   age:23
// }
// getValue(person,['name','age'])
// getValue(person,['name1'])



interface TestInterface{
  name:string,
  age:number,
  obje:obe
}

type obe={
  a:number,
  b:string
}

type extendkey<T>= {
  [K in keyof T]+?:T[K] extends object? extendkey<T[K]>:T[K]
}

let obj1:extendkey<TestInterface> = {
  age:222,
  obje:{
    a:22
  }
}

type optionsType = {
  a?:number
  b?:string
}

type requiredType<T> = {
  readonly [K in keyof T]-? :T[K]
}

let optionObj: requiredType<optionsType> = {
  a:222,
  b:'string'
}


type myPick<T,k extends keyof T> = {
 [P in k] : T[P]
}

type myExclude<T,U> = T extends U ? never: T


type T0 = Extract<"a" | "b" | "c", "a" |  "c">;

console.log(typeof obj1)