// getelements ile
let idElement = document.getElementById("idBox");
idElement.style.backgroundColor = "lightblue";

let classElement = document.getElementsByClassName("classBox");
for (let i = 0; i < classElement.length; i++) {
  classElement[i].style.backgroundColor = "gold";
}

let tagElement = document.getElementsByTagName("p");
for (let i = 0; i < tagElement.length; i++) {
  tagElement[i].style.backgroundColor = "red";
}

// queryselector ile

let idElem = document.querySelector("#idBox");
idElem.style.backgroundColor = "purple";

let classElem = document.querySelector(".classBox");
classElem.style.backgroundColor = "pink";

let tagElem = document.querySelector("p");
tagElem.style.backgroundColor = "gray";
