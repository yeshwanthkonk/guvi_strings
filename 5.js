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
  let n = st.length
  let i = 0
  let j = 1
  while(j<n){
      if(st[i] == st[j]){

          while(j<n && st[i]==st[j]){
              j++
          }
          if(j<n){
          st = st.slice(0,i) + st.slice(j)
          j = i+1
          n = st.length
          }
          else{
          	st = st.slice(0,i)
          }
      }
      else{
      	i++
      	j++
      }
  }
  if(st.length === 0){
  	console.log(-1)
  }
  else{
  console.log(st)
  }

  //end-here
});
