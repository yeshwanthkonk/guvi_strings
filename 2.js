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
  let inc = ['{', '(', '[']
  let out = ['}', ')', ']']
  let stack = []
  let flag = 0
  for(let i=0;i<st.length;i++){
      if(inc.includes(st[i])){
          stack.push(st[i])
      }
      else{
      	let ele = stack.pop()
          if(out[inc.indexOf(ele)] != st[i]){
              flag = 1
              break;
          }
      }
      
  }
  if(flag == 0 && stack.length == 0){
      console.log(1)
  }
  else{
      console.log(0)
  }
  //end-here
});
