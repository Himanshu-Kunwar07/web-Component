document.querySelector('.player').addEventListener('click', ()=>{
    document.querySelector('.player').style.display="none";
    document.querySelector('.container').style.filter="blur(2px)";
    document.querySelector('.controls').style.filter="none";
    document.querySelector('.controls').style.display="flex";
})

document.querySelector('#back').addEventListener('click', ()=>{
    document.querySelector('.controls').style.display="none";
    document.querySelector('.container').style.filter="blur(0px)";
    document.querySelector('.player').style.display="flex";
})