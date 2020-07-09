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
  let t = +userInput[1]
  let p = +userInput[2]
  let i = 1;
  let k = (p*i)
  while(k<=st.length){
      if(t==1){
          st = st.slice(0,k-1)+st[k-1].toLowerCase()+st.slice(k)
      }
      else{
          st = st.slice(0,k-1)+st[k-1].toUpperCase()+st.slice(k)
      }
      i++
      k = (p*i)
  }
  console.log(st)
  //end-here
});
