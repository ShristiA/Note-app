
let notes = getsavednotes()

const filters = {
   searchText: ''
}
var newfilteredNotes = '';



renderNotes(notes, filters)


document.querySelector('#create').addEventListener('click', function (e) {
   //   e.target.textContent = 'The button was clicked'
   const id=uuidv4(); 
   notes.push({
      
      id: id,
      title:"" ,
      body:""
   })
   saveNotes(notes);
      
   location.assign(`/edit.html#${id}`)
   
  
})
document.querySelector('#searchText').addEventListener('input', function (e) {
   filters.searchText = e.target.value
   renderNotes(notes, filters)
})

document.querySelector('#filterBy').addEventListener('change', function (e) {
   console.log(e.target.value)
})

window.addEventListener('storage', function(e){
   
   if(e.key === 'notes'){

      notes = JSON.parse(e.newValue)
      renderNotes(notes, filters)


   }
})