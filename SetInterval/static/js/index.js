let text = document.getElementById("text");
let message = 'Hello, from set interval to the world!';
let words = message.split(" ");
let index = 0 
let interval = setInterval(function()
{
    text.innerHTML += words[index] +" ";
    index ++
    if(index == words.length)
    {
        clearInterval(interval); //Use this id with clearInterval() to cancel the timer.
    }
},500) //milliseconds

myInterval = setInterval(setColor, 500);
 
function setColor() {
  let x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "blue" ? "pink" : "blue";
}
 
function stopColor() {
  clearInterval(myInterval);
}