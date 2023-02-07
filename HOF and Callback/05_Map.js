let arr = [1,2,3,4,5,6,7,8,9];

let newArr = arr.map((num)=>{
    console.log(num**2);
    return num*num
})
console.log(arr);
console.log(newArr);



// //forEach
// let arr = [1,2,3,4,5,6,7,8,9]; //forEach doesnot return any value

//  arr.forEach((num)=>{
//     console.log(num**2)
// })