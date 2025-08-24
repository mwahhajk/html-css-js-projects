const element=document.querySelectorAll(".elem");
const elem1=document.querySelector(".elem1");
const elem1Img=document.querySelector(".elem1 img")

const elem2=document.querySelector(".elem2");
const elem2Img=document.querySelector(".elem2 img")

const elem3=document.querySelector(".elem");
const elem3Img=document.querySelector(".elem3 img")

const elem4=document.querySelector(".elem4");
const elem4Img=document.querySelector(".elem4 img")

element[0].addEventListener("mousemove",function(dets){
    elem1Img.style.left=dets.x+"px"
    elem1Img.style.top=dets.y+"px"
})


element[0].addEventListener("mouseenter",function(){
    elem1Img.style.opacity="0.8"
})

element[0].addEventListener("mouseleave",function(){
    elem1Img.style.opacity="0"
})

element[1].addEventListener("mousemove",function(dets){


    elem2Img.style.left=dets.x+"px"
    elem2Img.style.top=dets.y+"px"

    // elem3Img.style.left=dets.x+"px"
    // elem3Img.style.top=dets.y+"px"

    // elem4Img.style.left=dets.x+"px"
    // elem4Img.style.top=dets.y+"px"


})

element[1].addEventListener("mouseenter",function(){
    elem2Img.style.opacity="0.8"
})

element[1].addEventListener("mouseleave",function(){
    elem2Img.style.opacity="0"
})

// element[1].addEventListener("mouseenter",function(){
    
//     elem3Img.style.opacity="0.8"
//     elem4Img.style.opacity="0.8"
// })

// element[1].addEventListener("mouseleave",function(){
    
//     elem2Img.style.opacity="0"
//     elem3Img.style.opacity="0"
//     elem4Img.style.opacity="0"
// })