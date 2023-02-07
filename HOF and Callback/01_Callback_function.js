//  Defination : When we call another Function inside a Function.
// => Higher order function is a function which take  function as a parameter or return function as a value. 

// let sq = (n)=>{
//    return n * n ; // 4
// }

// let cube = (sq,n)=>{
//    return sq( n ) * n; // 4 * 2 = 8
// }
// console.log(cube(sq,2)); // 


// function callback(e){
//    return e*2
// }

// function call (callback,e){
//     return callback(e)
// }
// console.log(call (callback,2));


// function add(a,b){
//    return a+b;
// }
// function sub(a,b){
//    return a-b;
// }
//  function divition(a,b){
//    return a/b
//  }

//  function calculation (callFunction,val1,val2){
//    return callFunction(val1,val2)
//  }

// console.log(calculation(divition,10,5)); 

function funOne (e){
   let hi = e*5
   console.log("Hi..");
   return hi;
}
function callOne(funOne,h){
   return funOne(h)
}

console.log(callOne(funOne,2));

