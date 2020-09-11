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
  this.id = myLibrary.length
  this.name = name
  this.author = author
  this.pages = pages
  this.read = read
}

  // Loop the array and print books on the screen 
    // Access each object of the array
      // Access the values from  object
        // Print this values on the screen


  // Creates DOM nodes to show the books on screen

function printBooks(myLibrary) { 
  // Remove all printed books so it doesn't repeat
  while (libraryDiv.hasChildNodes()) {
    libraryDiv.removeChild(libraryDiv.firstChild)
  }
  myLibrary.forEach(Object => {
    let bookDiv = document.createElement('div') // Creates a div for each book object
    let removeBook = document.createElement('input')
    removeBook.type = 'button'
    removeBook.value = 'remove book'
    removeBook.className = 'remove-book'

    removeBook.addEventListener('click', () => {
      
    })

    // Puts each object property on the div created
    for (const property in Object) {
        if (property == 'id') { // Hides the ID
        } else {

          let bookInfo = document.createTextNode(Object[property] + ' ')
          bookDiv.appendChild(bookInfo)
          bookDiv.appendChild(removeBook)
          libraryDiv.appendChild(bookDiv)
        }   
    }
  });
}

// Button that removes the book

function removeBook() {
  let removeBook = document.createElement('button') 

}

  // Show an form to input a new book
    // Name // Author // Pages // Read Bool

newBook.addEventListener('click', () => {
  if (!formButtonPressed) {
    // Show the form
    newBookForm();
    // Add new book to array and show i

    formButtonPressed = true
  } else {

  }
})


// Form that pops up and you can add a new book
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
      readYes.value = true

        let readYesLabel = document.createElement('label')
        readYesLabel.textContent = 'Yes'

    let radioDivNo = document.createElement('div')

      let readNo = document.createElement('input')
      readNo.type = 'radio'
      readNo.name = 'read'
      readNo.value = false

        let readNoLabel = document.createElement('label')
        readNoLabel.textContent = 'No'

      let alreadyRead = (readYes) => {
        if (readYes.checked) {
          return true
        } else return false
      }

    // Add book button
    let addNewBook = document.createElement('input')
    addNewBook.type = 'button'
    addNewBook.value = 'Add'

      radioDivYes.appendChild(readYes)
      radioDivYes.appendChild(readYesLabel)
      radioDivNo.appendChild(readNo)
      radioDivNo.appendChild(readNoLabel)
    
  formDiv.appendChild(name)
  formDiv.appendChild(author)
  formDiv.appendChild(pages)
  formDiv.appendChild(radioDivYes)
  formDiv.appendChild(radioDivNo)
  formDiv.appendChild(addNewBook)

  
  let newUserBook = {}
  addNewBook.addEventListener('click', () => {
    newUserBook = new Book(name.value, author.value, pages.value, alreadyRead(readYes))
    addBookToLibrary(newUserBook);
    printBooks(myLibrary)
    console.log(newUserBook)
  })

}


// Create books and add them to the array









