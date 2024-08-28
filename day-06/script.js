
var array = [];
$(document).ready(function(){

    const source = $('#big').attr('src');
   

    const pic = $(`div.strip img[src="${source}"]`);

   
    $(pic).addClass('selectedIMG');
    array = $('.strip img').toArray();
    console.log(array);

    $('div.strip img').click(function(){
        $('.selectedIMG').removeClass('selectedIMG');
        $(this).addClass('selectedIMG');
        var source = $(this).attr('src');
        array = $('.strip img').toArray();
        $('#big').attr('src', source);
    })

   
    console.log(array);

    

    

    $('#btn1').click(function(){
        const img = $(array).filter('.selectedIMG');
        let idx = $(array).index(img);
        $('.selectedIMG').removeClass('selectedIMG');
        if(idx-1==-1){
          idx = array.length;
        }
        $(array[idx-1]).addClass('selectedIMG');
        console.log(idx);
        var source = $('.selectedIMG').attr('src');
        $('#big').attr('src', source);
    });

    $('#btn2').click(function(){
        const img = $(array).filter('.selectedIMG');
        let idx = $(array).index(img);
        $('.selectedIMG').removeClass('selectedIMG'); 
        if(idx+1==array.length){
            idx = -1;
          }
        $(array[idx+1]).addClass('selectedIMG');
        console.log(idx);
        var source = $('.selectedIMG').attr('src');
        $('#big').attr('src', source);
    });

});


const track = document.querySelector('.strip');
const images = Array.from(track.children);
let currentIndex = 0;

function moveToImage(index){
    const imageWidth = images[0].getBoundingClientRect().width;
    track.stye.transform = `translateX(-${index * imageWidth}px`;

    images.forEach(image => image.classList.remove('center'));
    images[index].classList.add('center');
}

moveToImage(currentIndex);