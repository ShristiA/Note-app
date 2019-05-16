
let notes = getsavednotes()

const filters = {
   searchText: ''
}
var newfilteredNotes = '';



renderNotes(notes, filters)


document.querySelector('#create').addEventListener('click', function (e) {
   //   e.target.textContent = 'The button was clicked'
   notes.push({
      id: uuidv4(),
      title:"" ,
      body:""
   })
   saveNotes(notes);
   renderNotes(notes, filters)
})



document.querySelector('#searchText').addEventListener('input', function (e) {
   filters.searchText = e.target.value
   renderNotes(notes, filters)
})



document.querySelector('#filterBy').addEventListener('change', function (e) {
   console.log(e.target.value)
})