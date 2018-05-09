function addRandomElem(event) {
    var element = document.createElement('div');
    document.body.insertBefore(element, event.target);
    element.setAttribute('style', 'height: ' + String(Math.floor(Math.random()*100+100)) +'px; width: ' + String(Math.floor(Math.random()*100+100)) +'px; background: rgba(' + String(Math.floor(Math.random()*256)) +', '+ String(Math.floor(Math.random()*256)) +', '+ String(Math.floor(Math.random()*256)) +', '+ String(Math.random()) +'); left: ' + String(Math.floor(Math.random()*95)) +'vw; top: ' + String(Math.floor(Math.random()*95)) +'vh;')
};
function dragAndDrop(event) {
    var target = event.target;
    target.style.zIndex=1000;
    document.onmousemove=function(event){
        target.style.left = event.pageX - target.offsetWidth / 2 + 'px';
        target.style.top = event.pageY - target.offsetHeight / 2 + 'px';    
    };
    target.onmouseup = function() {
        document.onmousemove = null;
        target.onmouseup = null;
    };
};
var el1 = document.getElementById('button');
var el2 = document.body;
el1.addEventListener('click', addRandomElem);
el2.addEventListener('mousedown', dragAndDrop);