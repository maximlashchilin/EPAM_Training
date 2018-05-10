var booksDataBase = [
    books1 = {
        id: 1,
        name: 'Jewels of Nizam',
        author: 'Geeta devi',
        img : 'images/books/book-cover.jpg',
        rating: 3.5,
        price: 0
    },
    books2 = {
        id: 2,
        name: 'Cakes & Bakes',
        author: 'Sanjeev Kappor',
        img : 'images/books/book-cover2.jpg',
        rating: 5,
        price:  10
    },
    books3 = {
        id: 3,
        name: 'Jame\'s Kitchen',
        author: 'Jamie Oliver',
        img : 'images/books/book-cover3.jpg',
        rating: 4,
        price: 10
    },
    books4 = {
        id: 4,
        name: 'Inexpensive Family Meals',
        author: 'Simon hoist',
        img : 'images/books/book-cover4.jpg',
        rating: 5,
        price: 7
    },
    books5 = {
        id: 5,
        name: 'Poleo Slow Cooking',
        author: 'Chissy Gower',
        img : 'images/books/book-cover5.jpg',
        rating: 5,
        price: 8
    },
    books6 = {
        id: 6,
        name: 'Cook like an Italian',
        author: 'Todie Puttock',
        img : 'images/books/book-cover6.jpg',
        rating: 5,
        price: 9
    },
    books7 = {
        id: 7,
        name: 'Suneeta Vaswani',
        author: 'Geeta Devi',
        img : 'images/books/book-cover7.jpg',
        rating: 5,
        price: 8
    },
    books8 = {
        id: 8,
        name: 'Jamie Does',
        author: 'Jamie Oliver',
        img : 'images/books/book-cover8.jpg',
        rating: 5,
        price: 0
    },
    books9 = {
        id: 9,
        name: 'Jamie\'s Italy',
        author: 'Jamie Oliver',
        img : 'images/books/book-cover9.jpg',
        rating: 5,
        price: 0
    },
    books10 = {
        id: 10,
        name: 'Vegetables CookBook',
        author: 'Matthew Biggs',
        img : 'images/books/book-cover10.jpg',
        rating: 5,
        price: 11
    }
];

function redraw(books) {
    var content = document.getElementsByClassName('content').item(0);
    clearContent(content);
    var book, contentEl, image, header, author, eval, star, halfStar, emptyStar;
    contentEl = document.createElement('arcticle');
    contentEl.className = "content__elem";
    image = document.createElement('img');
    image.className = "content__img";
    contentEl.appendChild(image);
    header = document.createElement('h4');
    header.className = "content__name";
    contentEl.appendChild(header);
    author = document.createElement('p');
    author.className = "content__author";
    contentEl.appendChild(author);
    eval = document.createElement('ul');
    eval.className = "eval";
    contentEl.appendChild(eval);
    star = document.createElement('li');
    star.className = "eval__star";
    star.innerHTML = '<i class="fas fa-star"></i>';
    halfStar = document.createElement('li');
    halfStar.className = "eval__star";
    halfStar.innerHTML = '<i class="fas fa-star-half"></i>';
    emptyStar = document.createElement('li');
    emptyStar.className = "eval__star";
    emptyStar.innerHTML = '<i class="far fa-star"></i>';
    var numStars, numEmptyStars;
    books.forEach(element => {
        book = contentEl.cloneNode(true);
        book.querySelector('img').setAttribute('src', element.img);
        book.querySelector('h4').innerHTML = element.name;
        book.querySelector('p').innerHTML = "by " + element.author;
        numStars = Math.floor(element.rating);
        numEmptyStars = 5 - Math.ceil(element.rating);
        for(var i = 0; i < numStars; i++) {
            book.querySelector('ul').appendChild(star.cloneNode(true));
        }
        if (element.rating - numStars !== 0) {
            book.querySelector('ul').appendChild(halfStar.cloneNode(true));
        }
        for(var i = 0; i < numEmptyStars; i++) {
            book.querySelector('ul').appendChild(emptyStar.cloneNode(true));
        }
        content.appendChild(book);
    });
};

function clearContent(element) {
    while (element.lastChild) {
        element.removeChild(element.lastChild);
    }
};

function searchAndOutput(event) {
    var searchString = event.target.previousElementSibling.value;
    event.target.previousElementSibling.value = searchString;
    var books = booksDataBase.filter(function(book) {
        return (book.name.indexOf(searchString) != -1) || (book.author.indexOf(searchString) != -1);
    });
    redraw(books);
    event.preventDefault();
    event.stopPropagation();
};

function filterAllBooks(event) {
    var books = booksDataBase;
    redraw(books);
};

function filterMostRecent(event) {
    var books = booksDataBase.filter(function(book) {
        return true;
    });
    redraw(books);
};

function filterMostPopular(event) {
    var books = booksDataBase.filter(function(book) {
        return (book.rating === 5) || (book.rating === 4.5);
    });
    redraw(books);
};

function filterFreeBooks(event) {
    var books = booksDataBase.filter(function(book) {
        return book.price === 0;
    });
    redraw(books);
};

function addBook(event) {
    var popUp = document.createElement('div');
    popUp.className = 'popUp-wrapper';
    popUp.innerHTML = '<div class="popUp">'+
                            '<header class="popUp__header">' +
                                '<h1 class="popUp__title">Add new book</h1>'+
                                '<button class="popUp__button-close"><i class="fas fa-times"></i></button>'+
                            '</header>'+
                            '<form class="fields">'+
                                '<input class="fields__input" type="text" placeholder="Title" required>'+
                                '<label class="fields__label-title">Title</label>'+
                                '<input class="fields__input" type="text" placeholder="Author" required>'+
                                '<label class="fields__label-author">Author</label>'+
                            '</form>'+
                        '</div>';
    document.body.insertBefore(popUp, document.body.firstChild);
    buttonClose = document.getElementsByClassName('popUp__button-close').item(0);
    buttonClose.addEventListener('click', closePopUp)
};
function closePopUp(event) {
    console.log(event.target.parentElement.parentElement);
    document.body.removeChild(document.body.firstChild);
}

redraw(booksDataBase);

var searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', searchAndOutput);
var allBooks = document.getElementsByClassName('filter-list__elem').item(0);
allBooks.addEventListener('click', filterAllBooks);
var mostRecent = document.getElementsByClassName('filter-list__elem').item(1);
mostRecent.addEventListener('click', filterMostRecent);
var mostPopular = document.getElementsByClassName('filter-list__elem').item(2);
mostPopular.addEventListener('click', filterMostPopular);
var freeBooks = document.getElementsByClassName('filter-list__elem').item(3);
freeBooks.addEventListener('click', filterFreeBooks);
var buttonAddBook = document.getElementsByClassName('wrapper-of-button__button').item(0);
buttonAddBook.addEventListener('click', addBook);
var buttonClose;