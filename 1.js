// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  let i = 0, j = userInput[0].length - 1;
  let st = userInput[0]
  let flag = 0
  while(i<j){
      if(st[i] == st[j]){
          i++
          j--
      }
      else{
          flag = 1
          break;
      }
  }
  if(flag == 1){
      console.log(0)
  }
  else{
      console.log(1)
  }
});
