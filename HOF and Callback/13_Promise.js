// New Promise , async , await


let myOne = () => {
     return " I am One"
}

let myTwo = () => {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve("HI.. I am two")
          }, 3000);
     }) 
}

let myThree = () => {
     return new Promise((resolved,reject)=>{
          setTimeout(() => {
               reject ("Hello World")
          },1000);
     })
}




let callMe = async () => {
     const valOne = myOne();
     console.log(valOne);

     const valTwo = await myTwo();
     console.log(valTwo);

     const valThree = await myThree();
     console.log(valThree);
}


callMe()