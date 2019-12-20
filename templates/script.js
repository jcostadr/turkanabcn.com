var button = document.getElementById("btn1");
var mainText = document.getElementById("mainText");

button.innerText = "Click here!!";

button.addEventListener("click", function(){
    mainText.innerText = "You just clicked a button";
});

button.addEventListener("mouseover", function(){
    mainText.innerText = "Come on, click it!!";

});