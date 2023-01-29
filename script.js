let burger = document.querySelector(".burger");
let mark = document.querySelector(".mark");
let ul = document.querySelector(".ul");


burger.addEventListener("click", function(){
    ul.classList.add("show");
    burger.style.display = "none";
    mark.style.display = "block"

})

mark.addEventListener("click", function(){
    ul.classList.remove("show");
    burger.style.display = "block";
    mark.style.display = "none";

})
