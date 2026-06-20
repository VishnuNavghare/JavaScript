console.log("Hello JS day02")

// Data Types : Type of

let a = 123123;

let b =1245.1245;

let c = 1151161.1484984984;

let d = 'v'

let e = 'javascript'

let f = false

let g = null

let h = (1,2,3,4,5)

let i = {'id':101,'name':"vishnu"}

let j =

console.log ("let a = 12345" + typeof(a))

console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)
console.log(typeof h)
console.log(typeof i)
console.log(typeof j)


//  Function : is a reusable block of code..

// 1. normal function

function greet () {
    console.log("hello class 838")
}

greet()

function sum (a,b){
    console.log(a+b)
}
sum(2,3)

sum("raj2",5)


function diff (a,b){
    console.log(a-b)
}

diff(7,3)
diff("7",3)
diff("7","2")


function multiply(a,b){
    console.log("result = "+(a*b));
}
multiply(2,3)
multiply("3",3)
multiply()


function wish(name){
    console.log("Good Evening "+name)
}
wish("Vishnu")

// Arrow Function...    lambda =>

// division = lambda x : x * x;  // python

let multi = (x) => x * x ;   // javascript

let mult = (x) => {
    console.log(x*x)
}
let res = multi(5)
console.log(res)

mult(6)

