

function navigate(ref){
    const source = ref.id;
    const navigate = document.querySelector(source);
    location.replace('./getinfo.html');
}


var colors = ['#ff000', '#00ff00', '#0000ff'];
var random_color = colors[Math.floor(Math.random() * colors.length)];

let tags = document.querySelectorAll('.tag');

for ( let i = 0; i<tags.length; i++){
    tags[i].style.backgroundColor = random_color;
}
