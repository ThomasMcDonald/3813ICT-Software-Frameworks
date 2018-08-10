import HelloWorldNPM from 'hello-world-npm';

console.log("Hello World, Node.js!");

var myString = "Hello@World, Node.js Stringsss";
var badWord = "Bad Word";
var mistype = "Spwlling"

console.log(myString.replace(/[^a-z(.)(,)]/gi," ").replace(/(s)(?=\1)/g,''));

if(badWord == "Bad Word"){
  console.log(badWord.replace(/[`a-z]/gi,"*"));
}

console.log(HelloWorldNPM.helloWorld());
