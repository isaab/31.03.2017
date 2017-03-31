var circle=document.getElementById('top');
var img=document.getElementById('img');

circle.addEventListener('click', function() {
    border(image);
});

function border(callback){
    circle.style.borderColor='black';
    circle.style.borderStyle='solid';
    callback(400,200);
};

function image(w,h){
    setTimeout(function(){
    img.style.width=w+'px';
    img.style.height=h+'px';
    
},2000)
}