//ES5

// Book Constructor - it'll handle creating of the book object

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;

}



// UI Constructor - a set of prototype methods, such as add the book to the list, delete the book, show the alerts etc, things that have to do with the UI.

function UI() {}

// add book to list
UI.prototype.addBookList = function(book) {
  const list = document.getElementById('book-list');

  // create tr element
  const row = document.createElement('tr');

  // insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class ="delete">X<a></td>`;

  list.appendChild(row);
}

// clear fields

UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}


// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){

  const title = document.getElementById('title').value,

  author = document.getElementById('author').value,

  isbn = document.getElementById('isbn').value


  // instantiate book
  const book = new Book(title, author, isbn);

  //instantiate ui
  const ui = new UI();

  // Validate
  if(title === '' || author === '' || isbn === '') {
    alert('failed');
  } else {
    //add book to list
    ui.addBookList(book);

    //clear fields
    ui.clearFields();
  }



  

  e.preventDefault();
});