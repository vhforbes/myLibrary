// Start Variables

let myLibrary = []

let libraryDiv = document.querySelector('#library')

let newBook = document.querySelector('#new-book')

const formDiv = document.querySelector('#new-book-form')

let formButtonPressed = false

// Manually add first book



// Functions

  // Pass the book object to the library array
function addBookToLibrary(...bookObject) {
  if (typeof bookObject == 'object') {
    myLibrary.push(...bookObject)
  } else console.log('Not an object')
}

  // Book constructor

class Book {
  constructor(id, name, author, pages, read) {
    this.id = id
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
  }
}

let firstBook = new Book (0, 'First Book', )

  // Read Status Prototype

Book.prototype.changeRead = parentDiv => {

  let changeReadButton = document.createElement('input')
  changeReadButton.type = 'button'
  changeReadButton.value = 'Change Read Status'
  parentDiv.appendChild(changeReadButton)
  
  changeReadButton.addEventListener('click', () => {
    let parent = changeReadButton.parentElement

    let id = parent.id

    let trueOrFalse = (id) => {
      let read = false
      myLibrary.forEach(Object => {
        if (Object.id == id) {
          for (const key in Object) {
            if (key == 'read') {
              if (Object.read) {
                read = false
              } else read = true
            }
          }
        }
      })
      return read
    }


    changeKeyByID(id, 'read', trueOrFalse(id))
    printBooks(myLibrary)
  })
}

  // Change Key value in object 

function changeKeyByID(objectID, theKey, value) {
  myLibrary.forEach(Object => {
    if (Object.id == objectID) {
      for (const key in Object) {    
        if (key == theKey) {
          Object[key] = value;
        } 
      }
    }
  })
}


  // Print books on the screen

function printBooks(myLibrary) { 
  // Remove all printed books so it doesn't repeat
  while (libraryDiv.hasChildNodes()) {
    libraryDiv.removeChild(libraryDiv.firstChild)
  }

  myLibrary.forEach(Object => {

    let bookDivs = document.createElement('div') // Creates a div for each book object
    bookDivs.class = 'book-div'

    let bookInfo = document.createTextNode('')
    let readInfo = document.createTextNode('')


    // Puts each object property on the div created

    for (const property in Object) {


        if (property == 'id') { 
          bookDivs.id = Object['id']
          // Hides the ID
        } else if (property == 'changeRead') { 
          // Hides the prototype
        } else if (property == 'read') { // Custom read text

          if (Object[property]) {
            let div = document.createElement('div')
            div.textContent = 'Already read'
            bookDivs.appendChild(div)
          } else {
            let div = document.createElement('div')
            div.textContent = 'Not read yet'
            bookDivs.appendChild(div)
          }

        } else {
          let div = document.createElement('div')
          div.textContent = `${Object[property]} `
          bookDivs.appendChild(div)
        }

        bookDivs.appendChild(bookInfo)
        bookDivs.appendChild(readInfo)
        libraryDiv.appendChild(bookDivs)    
        
    }
    Object.changeRead(bookDivs)
    bookDivs.appendChild(removeButton(Object['id']))  
  });
}

  // Remove book from DOM and from Array

function removeButton(objectId) {
  let removeBook = document.createElement('input')
  removeBook.type = 'button'
  removeBook.value = 'remove book'
  removeBook.className = 'remove-book'
  removeBook.id = objectId

  removeBook.addEventListener('click', () => {
    let toRemove = removeBook.parentElement
    toRemove.remove()
    myLibrary.splice(removeBook.id, 1)
  
  })
  return removeBook
  }

  

  // Show the form to input a new book
    
newBook.addEventListener('click', () => {
  if (!formButtonPressed) {
    formButtonPressed = true
    newBookForm(); 
  } else {
  }
})

  // Hide the form after new book is inputed

let addButtonPressed = false

// Quando apertar o add for true eu quero remover o form

function hideForm() {
  let removeDiv = document.querySelector('#the-div')
  removeDiv.remove()
  formButtonPressed = false
}


// Form that pops up and you can add a new book
function newBookForm() {

  let theDiv = document.createElement('div')
  theDiv.id = 'the-div'

  // Name text input
  let name = document.createElement('input')
  name.type = 'text'
  name.placeholder = 'Book Name'
  name.class = 'form-input'
  
  // Book author text input
  let author = document.createElement('input')
  author.type = 'text'
  author.placeholder = 'Book Author'
  author.class = 'form-input'

  // Number of pages text input
  let pages = document.createElement('input')
  pages.type = 'text'
  pages.placeholder = 'Number of pages'
  pages.class = 'form-input'

  // Boolean Checkbox

    let alreadyReadDiv = document.createElement('div')
    alreadyReadDiv.class = 'form-input'

      let readCheckbox = document.createElement('input')
      readCheckbox.type = 'checkbox'
      readCheckbox.name = 'checkbox'
      alreadyReadDiv.appendChild(readCheckbox)

      let checkboxLabel = document.createElement('label')
      checkboxLabel.for = 'checkbox'
      checkboxLabel.textContent = 'Already read?'
      alreadyReadDiv.appendChild(checkboxLabel)


    // Add book button
    let addNewBook = document.createElement('input')
    addNewBook.type = 'button'
    addNewBook.value = 'Add'
    addNewBook.class = 'form-input'

  
  theDiv.appendChild(name)
  theDiv.appendChild(author)
  theDiv.appendChild(pages)
  theDiv.appendChild(alreadyReadDiv)
  theDiv.appendChild(addNewBook)

  formDiv.appendChild(theDiv)

  
  let newUserBook = {}

  addNewBook.addEventListener('click', () => {
    if (validateForm(name.value, author.value, parseInt(pages.value), alreadyRead(readCheckbox))) {
      newUserBook = new Book(myLibrary.length, name.value, author.value, parseInt(pages.value), alreadyRead(readCheckbox))
      addBookToLibrary(newUserBook);
      printBooks(myLibrary)
      hideForm()
    } else {
      alert('Fill all the inputs right.')
    }
  })

}

  // Form Validation

function validateForm(name, author, pages, read) {
  if (name && author && typeof pages == 'number' && pages > 0 && typeof read == 'boolean') {
    return true
  } else return false
}


// Return a boolean from the checkbox

function alreadyRead(checkbox) {
  if (checkbox.checked) {
    return true
  } else return false
}
















