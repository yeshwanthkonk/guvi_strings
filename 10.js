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
  let vowels = ['a','e','i','o','u']
  let sum = 0
  for(let i=0;i<st.length;i++){
      if(vowels.includes(st[i])){
          sum += st.charCodeAt(i)
      }
  }
  if(sum%8 == 0){
      console.log(1)
  }
  else{
      console.log(0)
  }
  //end-here
});
