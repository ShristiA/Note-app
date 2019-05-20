
const titleElement = document.querySelector('#note-title')
const dateEl = document.querySelector('#lastEdited')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
let notes = getsavednotes();
let note = notes.find(function(note){
    return note.id === noteId
})

if(note === undefined){
    location.assign('/index.html')

}

titleElement.value = note.title

bodyElement.value = note.body

dateEl.textContent = generateLastEdited(note.updatedAt)
//dateEl.textContent= `last edited ${moment(note.updatedAt).fromNow()}`
//it is span so we use text-content. We have a timestamp so we have to convert to moment instance first and then a new method- fromNow()

titleElement.addEventListener('input',function(e){
      note.title = e.target.value
      note.updatedAt = moment().valueOf()
      dateEl.textContent = generateLastEdited(note.updatedAt)
      saveNotes(notes)
})

bodyElement.addEventListener('input', function(e){
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    dateEl.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeElement.addEventListener('click',function(e){
    removeNote(note.id) 
    saveNotes(notes)
    location.assign('/index.html')
})


window.addEventListener('storage',function(e){
    //debugger
   if(e.key === 'notes'){
      notes= JSON.parse(e.newValue)
       note = notes.find(function(note){
        return note.id === noteId
    })
    
    if(note === undefined){
        location.assign('/index.html')
    
    }
    
    titleElement.value = note.title
    
    bodyElement.value = note.body

    dateEl.textContent = generateLastEdited(note.updatedAt)
    
   }
})