// Start Variables

let myLibrary = []

let libraryDiv = document.querySelector('#library')

let newBook = document.querySelector('#new-book')

const formDiv = document.querySelector('#new-book-form')

let formButtonPressed = false


// Functions

  // New Book Validation

function validateForm(name, author, pages, read) {
  if (name && author && pages && read) {
    return true
  } else return false
}

  // Pass the book object to the library array
function addBookToLibrary(...bookObject) {
  if (typeof bookObject == 'object') {
    myLibrary.push(...bookObject)
  } else console.log('Not an object')
}

  // Book constructor

function Book(id, name, author, pages, read) {
  this.id = id
  this.name = name
  this.author = author
  this.pages = pages
  this.read = read
}



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

    // Puts each object property on the div created

    for (const property in Object) {

        if (property == 'id') { // Hides the ID
          bookDiv.id = Object['id']

        } else if (property == 'changeRead') { // Hides the prototype

        } else {
          let bookInfo = document.createTextNode(Object[property] + ' ')
          bookDiv.appendChild(bookInfo)
          libraryDiv.appendChild(bookDiv)
        }    
        
    }
    Object.changeRead(bookDiv)
    bookDiv.appendChild(removeButton(Object['id']))  
  });
}

// Function that remove book from DOM and from Array

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

    // Add book button
    let addNewBook = document.createElement('input')
    addNewBook.type = 'button'
    addNewBook.value = 'Add'

      radioDivYes.appendChild(readYes)
      radioDivYes.appendChild(readYesLabel)
      radioDivNo.appendChild(readNo)
      radioDivNo.appendChild(readNoLabel)
  
  theDiv.appendChild(name)
  theDiv.appendChild(author)
  theDiv.appendChild(pages)
  theDiv.appendChild(radioDivYes)
  theDiv.appendChild(radioDivNo)
  theDiv.appendChild(addNewBook)

  formDiv.appendChild(theDiv)

  
  let newUserBook = {}

  addNewBook.addEventListener('click', () => {
    if (validateForm(name.value, author.value, pages.value, typeof alreadyRead(readYes) == 'boolean')) {
      newUserBook = new Book(myLibrary.length, name.value, author.value, pages.value, alreadyRead(readYes))
      addBookToLibrary(newUserBook);
      printBooks(myLibrary)
      hideForm()
      
    } else {
      alert('Error')
    }
    

  })

}

// Hide the form after clicking ADD


// Return a boolean from the form

function alreadyRead(readYes) {
  if (readYes.checked) {
    return true
  } else return false
}


// Create books and add them to the array









