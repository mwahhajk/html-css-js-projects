// console.log("hello");

let isStatus=document.querySelector("h3");

let addFriendButton=document.querySelector(".add");
let check=0;

// let removeFriendButton=document.querySelector(".remove")

addFriendButton.addEventListener("click",function() {
    if(check==0)
    {
    isStatus.innerHTML="Friends"
    isStatus.style.color="green"
    console.log("add friend");
    addFriendButton.innerHTML="Remove Friend"
    check=1;
    }
    else{
        isStatus.innerHTML="Stranger"
        isStatus.style.color="red"
        addFriendButton.innerHTML="Add Friend";
        console.log("remove friend");
        
        check=0
    }
})

// removeFriendButton.addEventListener("click",function(){
//     isStatus.innerHTML="Stranger"
// })
