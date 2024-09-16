

//  const img1 = document.querySelector("#medium");
//  const img2 = document.querySelector("#list");
//  const img3 = document.querySelector("#single");

// img1.addEventListener('click', ()=>{
//     console.log(medium);
//     document.querySelector(".current").classList.remove("current");
//     document.querySelector(".box-medium").classList.add("current");
// });

// img2.addEventListener("click", ()=>{
//     document.querySelector(".current").classList.remove("current");
//     document.querySelector(".box-list").classList.add("current");
// });

// img3.addEventListener('click', ()=>{
//     document.querySelector(".current").classList.remove("current");
//     document.querySelector(".box-preview").classList.add("current");
// });


// })
function viewType(element){

        console.log(element.value);
        if(element === "medium"){
            document.querySelector(".current").classList.remove("current");
            document.querySelector(".box-medium").classList.add("current");
            
        }
        else if(element === "list"){
            document.querySelector(".current").classList.remove("current");
            document.querySelector(".box-list").classList.add("current");
           
        }else {
            document.querySelector(".current").classList.remove("current");
            document.querySelector(".box-preview").classList.add("current");
            
        }
        console.log('button Clicker');
}


function changeImg(image){
    const img = document.querySelector('#pre');
    img.src= image.src;
}