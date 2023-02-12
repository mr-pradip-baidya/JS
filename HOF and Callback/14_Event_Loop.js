 // Event loop => 
// Call stack , Blocking I/O , Queue , asynchronous

 
 let funOne = () => {
     console.log("This is Fun One");
     setTimeout(() => {
          console.log("First") 
      }, 3000);
 };

 let funTwo = () => {
     setTimeout(() => {
         console.log("Timer is applied") 
     }, 3000);
     console.log("This is Fun Two");
 };

 let funThree = () => {
     console.log("This is Fun Three");
 };



 funOne();
 funTwo();
 funThree();