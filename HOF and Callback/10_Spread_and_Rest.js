// Spred => braking  brake an array into a normal value

function add(a,b){
       return a+b;
}

let num = [1,2]  

console.log(add(...num))




//rest  => Making an array from some of norml value

let nums = [14,52,93,24];
let [a,,c,d] = nums;
// console.log(a,c,d);
// kono  agrument ke bar bar pass na koriye ...variable er name diye dao same kaj hobe.

function add ( ...args){
       console.log(args); // for checking

       let sum = 0;
       for(const i of args){
              sum += i;
       }
       return sum;
}

console.log(add(1,2,2,3,55))
