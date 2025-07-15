var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")

menuicon.addEventListener("click",function menubutton(){
    sidenav.style.right=0;
})
var closenav = document.getElementById("close-nav")

closenav.addEventListener("click",function closebutton(){
    sidenav.style.right="-50%";
})