//  Defination : When we call another Function inside a Function.
// => Higher order function is a function which take  function as a parameter or return function as a value. 

// Syntax
 function fun(){
    console.log("I was called by a function")
}

let myFun = () => {
   fun()
}

// myFun()


// Examples 01 

function callBack(n){
   return n**2 
}
function cube(callBack){
   return callBack*2 
}

// console.log(cube(5));


// Examples 02

// function one(){
//    setTimeout(()=>{
//       console.log("Hi..")
//    two();
//    }, 2000)
// }
// function two (){
//    // one()
//    setTimeout(()=>{
//       console.log("Hello")
//    },1000)
   
// }
// one()

// Examples 03

function funOne(val1, val2, passVal){
   // passVal()
   // console.log(`The first name is ${val1} and the last name is ${val2}`);
   // if(val1 == 10){
   //    console.log("You are Correct");
   // }else{ 
   //    console.log("not correct");
   // }

// }
//  let myFunTwo = function funTwo(){
//    console.log("Hello World")
// }
// let firstName = "10";
// let lastName ="Doe";

// funOne(firstName,lastName,myFunTwo)

// const myVal = (n)=>{
//    n()
// }
//   function outerFun (){
//    console.log("Value  passed");
//   }
// myVal(outerFun)



let  callback = (e)=> {
   return e ** 2
}



