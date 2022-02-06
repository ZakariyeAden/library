// Constructor
function book(title,author,pages,read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
const form = document.querySelector('#form')
const publishedBooks = document.querySelector('#book-table');
const table = document.querySelector('table');

function addbook(e){
  e.preventDefault();
  const title = document.querySelector('#book-name').value;
  const author = document.querySelector('#author-name').value;
  const pages = document.querySelector('#number-pages').value;
  const read = document.querySelector('#read-this-book').value;
  
  publishedBooks.innerHTML += `
  <div class="container">
  <tr>
  <td>${title}</td>
  <td>${author}</td>
  <td>${pages}</td>
  <td>${read}</td>
  <td><button class="delete">Delete</button></td>
  </tr>
  </div>
  `;
}

function deleteBooks(e){
  if (!e.target.classList.contains('delete')) {
    return;
  }
  const btn = e.target;
  btn.closest('tr').remove();
}
form.addEventListener('submit', addbook);
table.addEventListener('click',deleteBooks);

