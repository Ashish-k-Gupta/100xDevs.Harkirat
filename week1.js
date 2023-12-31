// function myOwnSetTimeout(Callback, duration){
//   setTimeout(Callback, duration);
// }

// myOwnSetTimeout(function(){
//   console.log('Hello World');
// }, 1000)

// //Promisify the above function

// function promisifiedMyOwnSetTimeout(duration){
//   const p = new Promise(function(resolve){
//     setTimeout(function(){
//       resolve();
//     }, duration);
//   });
//   return p;
// }

// const ans = promisifiedMyOwnSetTimeout(2000);
// ans.then(function(){
//   console.log('timeout is done');
// });

// function yourNewFunction(duration) {
//   const ash = new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve();
//     }, duration);
//   });
//   return ash;
// }

// const jas = yourNewFunction(1000);
// jas.then(function () {
//   console.log("Let's get married");
// });

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });


// function counter(){
//   let a = 0;
//     for(let i = 0; i < 20; i++){
//       setTimeout(() =>{
//           a++;
//           console.log(a)
//       }, i * 1000)
      
//     }
//   }

// counter()


// function counter() {
//   let a = 0;
//   let i = 0;

//   const intervalId = setInterval(() => {
//     a++;
//     console.log(a);

//     i++;
//     if (i === 100) {
//       clearInterval(intervalId); // Stop the interval after 100 increments
//     }
//   }, 1000); // Interval of 1000ms (1 second)
// }

// counter();


const fs = require('fs')

// fs.readFile('j.txt', 'utf-8', (err, data) =>{
//   if(err){
//     console.log(err)
//   }
//   console.log(data)
// })
// 

// let data = "Hey there"
// fs.writeFile('j.txt',data,  (err) =>{
//   if(err){
//     console.log(err)
//   }
//   console.log(data)
  
// })

// function runExpensive(n){
//   let a = 0
//   for(let i = 0; i < n; i++){
//     console.log('Hey SweetHear how are you?');
//   }
  
// }

// runExpensive(100000)


/*
/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// function wait(n) {
//   const p = new Promise(function(resolve){
//     setTimeout(function(){
//     resolve()
      
//     }, n * 1000)
//   })
//   return p;
// }

// const sol = wait(5)
// sol.then(function(){
//   console.log(`it will run after 5 seconds`)
// })

// module.exports = wait;*/


// function printIt1(){
//   console.log('Hello, world')
// }


// function printIt2(){
//   console.log('Hello, world 2')
// }


// setTimeout(function(data){
//   printIt2(data)
// }, 5000)

// printIt1()


/*
promisify a calback of 1 second timeout and then 2 second timeout and then 3 seconds timeout
*/

 function promisifyCallbacks123(duration){
   const p = new Promise(function(resolve){
     setTimeout(function(){
      resolve()
     }, duration)
   })
   return p
 }

 // promisifyCallbacks123(1000).then(function(){
 //   console.log('1 Second')
 //   promisifyCallbacks123(2000).then(function(){
 //     console.log('2 Seconds')
 //     promisifyCallbacks123(3000).then(function(){
 //       console.log('3 Seconds')
 //     })
 //   })
 // })

// Promise chaining

 promisifyCallbacks123(1000)
   .then(function(){
      console.log('1 Second')
        return promisifyCallbacks123(2000);
   })
    .then(function(){
     console.log('2 Seconds')
      return promisifyCallbacks123(3000)
    })
      .then(function(){
       console.log('3 Seconds')
      })

  
