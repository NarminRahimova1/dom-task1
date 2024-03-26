let contentBox=document.querySelectorAll(".contentbox");
 contentBox.forEach((element)=>{
    element.addEventListener("click",function(){
        element.classList.toggle("active");
    })
 })