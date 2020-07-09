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
  let arr = userInput[0].split(" ")
  let articles = ['The','the','An','an','A','a']
  let out = []
  for(let i=0;i<arr.length;i++){
      if(articles.includes(arr[i])){
          out.push(arr[++i])
      }
  }
  console.log(out.join(" "))
  //end-here
});
