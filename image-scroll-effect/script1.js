const element=document.querySelectorAll(".elem");

// console.log(element);

element.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        // console.log("mouse Entered",val);
        // val.style.backgroundColor="red"
        val.childNodes[3].style.opacity=1
        
    })
    val.addEventListener("mouseleave",function(){
        // console.log("Mouse Leaved",val);
        // val.style.backgroundColor="transparent"
        val.childNodes[3].style.opacity=0
    })
    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left=dets.x+"px"
        val.childNodes[3].style.top=dets.y+"px"
    })
})
