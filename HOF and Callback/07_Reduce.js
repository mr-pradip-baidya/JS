//Reduce
let numbers  = [1,2,3,4,5];
//(accumulator + current) , Initial Value

let store = numbers.reduce((accumulator,current)=>{
    return accumulator + current 
},1)

console.log(store)
