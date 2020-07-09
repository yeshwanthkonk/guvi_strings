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
  let st = userInput[0]
  let vowels = ['a','e','i','o','u','A','E','I','O','U']
  let st2 = ""
  for(let i = 0;i<st.length;i++){
      if(!vowels.includes(st[i])){
          st2 += st[i]
      }
  }
  console.log(st2)
  //end-here
});
