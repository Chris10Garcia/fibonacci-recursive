/* 

Going to brush up on my JS and solve it using this language
 

the way the fib sequence works

0 1 1 2 3 5 8 13 21 34 55 ...

0 1 2 3 4 5 6  7  8  9 10

basecase,

if index 0 return 0
if index 1 return 1
else ...
  you want to get down all the way to 1 + 0. This is how the sequence starts. 
  To do this, you're starting at index 2... from there, 
  you can do func(n-1) + func(n-2) you can just keep adding the return value of one, 
  which will go
index value[n-2] + value[n-1], answer
0   return 0
1   return 1     # or 1 + 0 
2   1  +  1, 2
3   2  +  1, 3
4   3  +  2, 5
5   5  +  3, 8
6   8  +  5, 13
7   13 +  8, 21
8   21 + 13, 34
9   34 + 21, 55


*/

function fibonacci(n) {
  
  
  if (n === 0){
    return 0
  }
  
  if (n === 1){
    return 1
  }
  else {
    return fibonacci(n-1) + fibonacci(n-2)
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
