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
  let flag = 0
  for(let i=0;i<st.length;i++){
      if(vowels.includes(st[i])){
          flag = 1
          break;
      }
  }
  if(flag == 1){
  console.log('yes')
  }
  else{
      console.log('no')
  }
  //end-here
});
