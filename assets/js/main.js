var navburger = document.getElementById("nav-burger");
var collapse = document.getElementById("collapse");
var collapseIsHide = false;

navburger.addEventListener("click", () => {
    collapseIsHide = !collapseIsHide;
    if(collapseIsHide){
        navburger.className = "nav-burger"
        collapse.className = "collapse is-hidden"
    }else{
        navburger.className = "nav-burger-closed"
        collapse.className = "collapse is-visible"
    }
})

