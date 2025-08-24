console.log("hello");

const constainer=document.querySelector("#container");
const heartIcon=document.querySelector("i");
const cursor=document.querySelector("#cursor")
const main=document.querySelector("body")

constainer.addEventListener("dblclick",function() {
    
    heartIcon.style.transform="translate(-50%,-50%) scale(1)"
    heartIcon.style.fontSize="90px"
    setTimeout(()=>{
        // heartIcon.style.transform="translate(-50%,-50%) scale(0)"
        heartIcon.style.opacity="0"
    },1000)
})

main.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x+"px"
    cursor.style.top=dets.y+"px"
    
})