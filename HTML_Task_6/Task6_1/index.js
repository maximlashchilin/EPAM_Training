function prepend(container, newElement) {
    container.appendChild(newElement);
}

var el1 = document.getElementById("elem1");
var el2 = document.getElementById("elem2");

prepend(el1, el2);