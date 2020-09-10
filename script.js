// Start Variables

let myLibrary = []

let libraryDiv = document.querySelector('#library')

let newBook = document.querySelector('#new-book')

const formDiv = document.querySelector('#new-book-form')

let formButtonPressed = false



// Functions

  // Pass the book object to the library array
function addBookToLibrary(...bookObject) {
  if (typeof bookObject == 'object') {
    myLibrary.push(...bookObject)
  } else console.log('Not an object')
}

  // Book constructor

function Book(name, author, pages, read) {
  this.name = name
  this.author = author
  this.pages = pages
  this.read = read
}

  // Loop the array and print books on the screen 
    // Access each object of the array
      // Access the values from  object
        // Print this values on the screen


function printBooks(myLibrary) { 
  myLibrary.forEach(Object => {

    let div = document.createElement('div') // Creates a div for each book object
    
    // Puts each object property on the div created
    for (const property in Object) {
        console.log(property, ':' ,Object[property])
        let book = document.createTextNode(Object[property] + ' ')
        div.appendChild(book)
        libraryDiv.appendChild(div)
    }
  });

}


  // Show an form to input a new book
    // Name // Author // Pages // Read Bool

newBook.addEventListener('click', () => {
  if (!formButtonPressed) {
    newBookForm();
    formButtonPressed = true
  } else {

  }
})

function newBookForm() {

  // Name text input
  let name = document.createElement('input')
  name.type = 'text'
  name.placeholder = 'Book Name'
  
  // Book author text input
  let author = document.createElement('input')
  author.type = 'text'
  author.placeholder = 'Book Author'

  // Number of pages text input
  let pages = document.createElement('input')
  pages.type = 'text'
  pages.placeholder = 'Number of pages'

  // Radio divs with boolean

    let radioDivYes = document.createElement('div')

      let readYes = document.createElement('input')
      readYes.type = 'radio'
      readYes.name = 'read'

        let readYesLabel = document.createElement('label')
        readYesLabel.textContent = 'Yes'

    let radioDivNo = document.createElement('div')

      let readNo = document.createElement('input')
      readNo.type = 'radio'
      readNo.name = 'read'

        let readNoLabel = document.createElement('label')
        readNoLabel.textContent = 'No'

      radioDivYes.appendChild(readYes)
      radioDivYes.appendChild(readYesLabel)
      radioDivNo.appendChild(readNo)
      radioDivNo.appendChild(readNoLabel)
    
  formDiv.appendChild(name)
  formDiv.appendChild(author)
  formDiv.appendChild(pages)
  formDiv.appendChild(radioDivYes)
  formDiv.appendChild(radioDivNo)
}


// Create books and add them to the array

let book1 = new Book('book1', 'book1 author', 'book1 pages', true)

let book2 = new Book('book2', 'book2 author', 'book2 pages', true)





