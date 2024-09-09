

 function setImage(pic){
    
    const div = document.querySelector(".preview");
    const child = document.querySelector("#previewimage");
    const image = document.createElement('img');
    image.src = pic.src;
    image.setAttribute('id', 'previewimage');
    div.removeChild(child);
    div.appendChild(image);
}