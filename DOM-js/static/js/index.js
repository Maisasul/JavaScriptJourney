let section = document.querySelectorAll(".section");
console.log(section);

let sectionn = document.querySelector("section");
console.log(sectionn);

let body = document.getElementsByTagName("body");
console.log(body);

let section2 = document.getElementById("section2");
console.log(section2);

let sectiong = document.getElementsByClassName("section");
console.log(sectiong);

document.querySelector("p").style.color = "red";
// document.querySelectorAll("p").style.color = "red";//it will not work, need to give it [index]
document.querySelectorAll("p")[1].style.color = "red";
document.querySelectorAll("p")[2].style.color = "red";

section2.addEventListener("click", function(e)
{
    // console.log(e.target);
    e.target.style.color = "green";
    
    section2.previousElementSibling.style.display = "none";

    section2.nextElementSibling.style.display = "none";
})