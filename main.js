var specialButton = document.getElementById("button");
var specialPhoto = document.getElementById("pic");
var specialMessage = document.getElementById("secret_message");
var specialHeader = document.getElementById("header");

var onButtonClick = function() {
    specialPhoto.style.opacity = 1;
}

var onPageScroll = function() {
    specialMessage.innerText = "Where the f*ck do you think you're going?!?!?!?!?!?!?!?!?";
    specialHeader.innerText = "Good-bye human";
    // console.log("this is working");
}

specialButton.addEventListener("click", onButtonClick);
window.addEventListener("scroll", onPageScroll);