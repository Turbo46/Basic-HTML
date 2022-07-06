myElement = document.getElementById("name")
console.log(myElement);
myElement.style.color="red"
myElement.style.fontWeight = "normal"

const myClassElem = document.getElementsByClassName("class-ele")
console.log(myClassElem);
myClassElem[0].style.color = "red"
myClassElem[5].style.color = "blue"

const myTagElem = document.getElementsByClassName("li")
// console.log(myTagElem);

const myQueryElem = document.querySelector("ul li")
myQueryElem.style.color = "orange";

const invalidClassNameEle = document.getElementsByClassName("Shafira")

const invalidTagEle = document.getElementById("h2")

const invalidQuery = document.querySelector("li li li")

const body = document.body;
const newEle = document.createElement("hi")
newEle.innerHTML = "hey shella"
body.append(newEle)

function removeEle(){
    const getEle = document.getElementById("name")
    getEle.remove();
}
function newClickFunction(){
    const myEle = document.getElementById("yogie")
    myEle.style.fontWeight="bolder"
}
const myButton = document.getElementById("joseBtn");
console.log(myButton);

myButton.addEventListener("click",function(){
    alert("Clicked")
})