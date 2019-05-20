//read exisiting notes from local storage

// console.log(uuidv4())

let getsavednotes = function () {

   let notesJson = localStorage.getItem("notes")

   if (notesJson !== null) {
      return JSON.parse(notesJson)
   } else {
      return [];
   }
}
let saveNotes = function (notes) {
   localStorage.setItem("notes", JSON.stringify(notes))
}
//remove a note from the list
const removeNote = function (id) {
   const noteIndex = notes.findIndex(function (note) {
      return note.id === id //it means it is checking the notes id to the one passed in the method
   })

   if (noteIndex > -1) {
      notes.splice(noteIndex, 1)
   }
}

//generate the DOM structure for a note

const generateNoteDom = function (note) {
   let noteEl = document.createElement('div')
   const textEl = document.createElement('a')
   const button = document.createElement('button')

   //setup the remove note button
   button.textContent = "x"
   noteEl.appendChild(button)

   button.addEventListener('click', function (e) {
      removeNote(note.id)
      saveNotes(notes)
      renderNotes(notes, filters)
   })
   //setup the note item button
   if (note.title.length > 0) {
      textEl.textContent = note.title

   } else {
      textEl.textContent = "Unnamed notes"
   }
   textEl.setAttribute('href', `/edit.html#${note.id}`)
   noteEl.appendChild(textEl)
   return noteEl
}
//sort your notes by one of three ways
const sortNotes = function (notes, sortBy) {
   if (sortBy === 'byEdited') {
      return notes.sort(function (a, b) {  /*sort, array method different than other array methods like filters who takes callback function.
      Callback function doesn't get called one time for everyitem.Like we would see for other items like filters and foreach
     It gets called with a and b. and it is upto us to decide which should come first
       If a should come first then we return -1, or if A should come before B
       if b should come first then return return 1 or if B should come before A
       if both are same then we return 0*/
         if (a.updatedAt > b.updatedAt) {
            return -1; //we are just working with timestamp which are just numbers and if the a is greater than B it just means that A is recent we want that one to be first
         } else if (a.updatedAt < b.updatedAt) {
            return 1
         } else {
            return 0
         }
      })
   } else if (sortBy === 'byCreated'){
      return notes.sort(function(a,b){
         if(a.createdAt > b.createdAt){
            return -1
         }else if(a.createdAt < b.createdAt){
            return 1
         }else{
            return 0
         }
      })
   }else if(sortBy === 'alphabetical'){
    return notes.sort(function(a,b){
      if(a.title.toLowerCase() < b.title.toLowerCase()){  //if a comes before b so it is less than b
         return -1
      }else if(a.title.toLowerCase() > b.title.toLowerCase()){
         return 1;
      } else{
         return 0
      }   
   })
   }
   else{
      return notes
   }
}
//render application notes
const renderNotes = function (notes, filters) {
   notes = sortNotes(notes, filters.sortBy)
   const filteredNotes = notes.filter(function (note) {
      return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
   })
   document.querySelector('#notes').innerHTML = ' '

   filteredNotes.forEach(function (note) {
      const noteEl = generateNoteDom(note)
      document.querySelector('#notes').appendChild(noteEl)

   })
}

//Get the last edited message

const generateLastEdited = function (timeStamp) {
   return `last edited ${moment(timeStamp).fromNow()}`
}