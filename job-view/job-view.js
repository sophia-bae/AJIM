let bookmark = document.querySelector(".fa-solid.fa-bookmark");
let box = document.querySelectorAll(".box")
let exclamPoint = document.getElementById("exclam-point");


bookmark.addEventListener('click', function(){
    bookmark.classList.toggle("checked");
})


// let changeIcon = function(icon) {
//     icon.classList.replace.toggle('fa-solid.fa-bookmark');
// }