var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")

menuicon.addEventListener("click",function menubutton(){
    sidenav.style.right=0;
})
var closenav = document.getElementById("close-nav")

closenav.addEventListener("click",function closebutton(){
    sidenav.style.right="-50%";
})

var container = document.getElementById("productcontainer")
var search = document.getElementById("search")
var productlist = container.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase();
    for(i=0;i<productlist.length;i++){
        if(productlist[i].textContent.toUpperCase().indexOf(enteredvalue)<0){
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"
        }
    }
})