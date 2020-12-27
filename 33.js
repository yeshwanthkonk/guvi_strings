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
  let str = userInput[0];
  let map = new Set()
  for(let i=0;i<str.length;i++){
      if(!map.has(str[i])){
        map.add(str[i])
      }
  }
  
  if(map.size == 3)
    console.log("Wonder")
  else
    console.log(-1)

  //end-here
});
