//read exisiting notes from local storage

// console.log(uuidv4())

let getsavednotes = function(){
   
    let notesJson = localStorage.getItem("notes")

    if (notesJson !== null) {
   return JSON.parse(notesJson)
}else{
    return [];
 }
}
let saveNotes = function(notes){
localStorage.setItem("notes", JSON.stringify(notes))
}
//remove a note from the list
const removeNote = function(id){
   const noteIndex = notes.findIndex(function(note){
      return note.id === id //it means it is checking the notes id to the one passed in the method
   })

   if(noteIndex>-1){
      notes.splice(noteIndex,1)
   }
}

//generate the DOM structure for a note

const generateNoteDom = function(note){
    let noteEl = document.createElement('div')
    const textEl =document.createElement('a')
    const button = document.createElement('button')
   
//setup the remove note button
    button.textContent="x"
    noteEl.appendChild(button)

button.addEventListener('click', function(e){
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
    textEl.setAttribute('href',`/edit.html#${note.id}`)
     noteEl.appendChild(textEl)
    return noteEl
}

//render application notes
const renderNotes = function (notes, filters) {
  
    const filteredNotes = notes.filter(function (note) {
       return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML = ' '
 
    filteredNotes.forEach(function (note) {
      const noteEl = generateNoteDom(note)
       document.querySelector('#notes').appendChild(noteEl)
   
      })
 }