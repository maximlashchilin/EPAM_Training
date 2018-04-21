function deleteTextNodes(element) {
    element.remove(element.childNodes);
}

var el = document.getElementById("elem");
deleteTextNodes(el);