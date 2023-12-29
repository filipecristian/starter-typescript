// infered types
// let a = 1 + 2;
// let b = a + 3;
// let c = {
//     apple: a,
//     banana: b
// }
// let d = c.apple * 4;

// any

// let myNumber: any = 777;

// unknown
// let a: unknown = 30
// let b = a === 123
// let c = a + 10 // Erro porque você deve verificar o tipo antes de fazer a operação quando se trata do unknow
// if (typeof a === 'number') {
//     let d = a + 10;
// }

// boolean
// let a = true
// var b = false
// const c = true
// let d: boolean = true
// let e: true = true
// let f: true = false // error porque o tipo é true!

//if (!c) {
//}

// if (c === false) {  // erro pois c é uma const de inteiro
// }

// number
// let a = 1234
// var b = Infinity * 0.10
// const c = 5678
// let d = a < b
// let e: number = 100
// let f: 26.218 = 26.218
// let g: 26.218 = 10; // error porque não é do tipo 26.218
// let oneMillion = 1_000_000 // Equivalent to 1000000

// bigint
// let a = 1234n
// const b = 5678n
// var c = a + b
// let d = a < 1235
// let e = 88.5n
// let f: bigint = 100n
// let g: 100n = 100n
// let h: bigint = 100 // 100 não é bigint

// string
// let a = 'hello'
// var b = 'billy'
// const c = '!'
// let d = a + ' ' + b + c
// let e: string = 'zoom'
// let f: 'jonh' = 'jonh'
// let g: 'jhon' = 'zoe'

// let a = Symbol('a')
// let b: symbol = Symbol('b')
// var c = a === b
// let d = a + 'x' // operação não pode ser feita por é um Symbol

// const e = Symbol('e')
// const f: unique symbol = Symbol('f')
// let g: unique symbol = Symbol('f')

// let h = e === e
// let i = e === f // erro pois g é um tipo unico

// object

// let a: object = {
//     b: 'x'
// }
// a.b

// let a = {
//     b: 'x'
// }
// a.b

// let b = {
//     c: {
//         d: 'f'
//     }
// }

// let a: {b: number} = {
//     b: 12
// }

// let c: {
//     firstName: string,
//     lastName: string
// } = {
//     firstName: 'John',
//     lastName: 'barrowman'
// }

// class Person {
//     constructor(
//         public firstName: string,
//         public lastName: string
//     ) {}
// }
// c = new Person('matt', 'smith');

// let a: {b: number}

// a = {}

// a = {
//     b: 1,
//     c: 2
// }

// let i: number
// let j = i * 3

// let i
// let j = i * 3

// let a: {
//     b: number
//     c?: string,
//     [key: number]: boolean
// }

// a = {b: 1}
// a = {b: 1, c: undefined}
// a = {b: 1, c: 'd'}
// a = {b: 1, 10: true}
// a = {b: 1, 10: true, 20: false}
// a = {10: true}
// a = {b: 1, 33: 'read'}

// let airplaine: {
//     [seatleNumber: string]: string
// } = {
//         'AA': 'BBB',
//         'CC': 'DDD',
//         'AAA': 'DDD',
//         'CCC': 'CC',
// }

// type Age = number;

// type Person = {
//    name: string,
//    age: Age
//}

//let age: Age = 55
// let age = 55;

// let driver: Person = {
//    name: 'James',
//    age: age
//};

//type Color = 'red'
//type Color = 'blue'

//type Color = 'red'
//type Color = 'blue'

//type Color = 'red'

//let x = Math.random() < .0

// if (x) {
//     type Color = 'blue'
//     let b: Color = 'blue'
// } else {
//     let c: Color = 'red'
// }

// type Cat = {name: string, purrs: boolean}
// type Dog = {name: string, barks: boolean, wargs: boolean}
// type CatOrDogOrBoth = Cat | Dog
// type CatAndDog = Cat & Dog

// let a: CatOrDogOrBoth = {
//     name: 'Bonkerns',
//     purrs: true
// }

// a = {
//     name: 'Domino',
//     barks: true,
//     wargs: true
// }

// a = {
//     name: 'Donkers',
//     barks: true,
//     purrs: true,
//     wargs: true
// }

// let b: CatAndDog = {
//     name: 'Domino',
//     barks: true,
//     purrs: true,
//     wargs: true
// }


// enum Colors {
//     Red = 'Red',
//     Blue = 'Blue',
//     Green = 'Green'
// }

// read-only array and tuples
// a mesma coisa que arrays e tuplas porém ele são apenas leitura você não pode modifica-los.

// let as: readonly number[] = [1, 2, 3]
// let bs: readonly number[] = as.concat(4)
// let three = bs[2]
// as[4] = 5

// as.push(6)

// type Pizza = {};

// function addDeliciousFinish(pizza: Pizza) {
//     return pizza.addAnchovies();
// }

// addDeliciousFinish(null)

// type Context = {
//     appId?: string
//     userId?: string
// }

// function log(message: string, context: Context = {}) {
//     let time = new Date().toISOString()
//     console.log(time, message, context.userId)
// }

// console.log('my test');