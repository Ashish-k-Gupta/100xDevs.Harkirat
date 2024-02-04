/* Create a counter in JavaScript
We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second
 */

function counter(n){
    let a = 0
    for(let i = 0; i < n; i++){
        setTimeout(() => {
            a++;
            console.log(a)
        }, i * 1000);
    }
}

counter(10)

// OR 
let a = 0
function counterJS(){
    a++;
    console.log(a)
}


let intervalID = setInterval(() => {
    counterJS()
}, 1000);

setTimeout(function(){
    clearInterval(intervalID)
    console.log('Counter will stop after 5000 milliseconds')
}, 5000)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
// (Hint: setTimeout)

let time = 0;
function countTime(n){
    for(let i = 0; i < n; i++){
        setTimeout(() => {
            time = time + 1;
            console.log(time)
        }, i * 1000);
    }
    
}
countTime(10)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* 
Reading the contents of a file
Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output. */

const fs = require('fs')

//the below code is sloved in replit that was the path is direct 'j.txt'
fs.readFile('j.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err)
    }
    console.log(data)
})

function expensive(){
    let x = 0;
    for(let i = 0; i < 10000000; i++){
        x = x+1
    }
    return x
}
expensive();

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


/* 
Write to a file
Using the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks.
*/
const fs = require('fs')
let data = 'Hey there'

data = data + ' Hello, world'
fs.writeFile('j.txt',data, 'utf-8', (err) =>{
  if(err){
    console.log(err)
  }
  console.log('file has been written successfully')
})













/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
}

module.exports = wait;