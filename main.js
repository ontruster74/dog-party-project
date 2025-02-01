var form = document.querySelector(".hero form");

var input = document.querySelector("#dog-name");

var headerText = document.querySelector(".hero h1 strong");

form.addEventListener("submit", displayDogname)

function displayDogname(event) {
    event.preventDefault();
    var dogName = input.value;
    headerText.innerText = dogName;
}