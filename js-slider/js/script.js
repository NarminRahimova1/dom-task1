let rightBtn=document.querySelector(".right");
let leftBtn=document.querySelector(".left");
let imagesArea=document.querySelector(".images-area");

rightBtn.addEventListener("click",function(){
    let active=document.querySelector(".active");
    active.classList.remove("active");
    if(active.nextElementSibling!==null){
        active.nextElementSibling.classList.add("active");
    }
    else{
        imagesArea.firstElementChild.classList.add("active");
    }
})

leftBtn.addEventListener("click",function(){
    let active=document.querySelector(".active");
    active.classList.remove("active");
    if(active.previousElementSibling!==null){
        active.previousElementSibling.classList.add("active");
    }
    else{
        imagesArea.lastElementChild.classList.add("active");
    }
})

