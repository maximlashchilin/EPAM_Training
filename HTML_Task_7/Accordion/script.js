function dispElem(event) {
    var target = event.target;
    if (event.target.className == 'accordion__label') {
        console.log(event.target.parentNode.lastElementChild);
        if (event.target.parentNode.lastElementChild.style.display === 'none' || event.target.parentNode.lastElementChild.style.display === '') {
            event.target.parentNode.lastElementChild.style.display = 'block'; 
        } else {
            event.target.parentNode.lastElementChild.style.display = 'none';
        }
    }
}

var accor = document.getElementById('accordion');
accor.addEventListener('click', dispElem);