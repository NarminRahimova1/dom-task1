let close=document.querySelector(".icon");
let assidebar=document.querySelector(".asside-bar");

close.addEventListener("click",function(){
    assidebar.classList.add("none");
});
 
let open=document.querySelector("#open");

open.addEventListener("click",function(){
    assidebar.classList.remove("none");
});