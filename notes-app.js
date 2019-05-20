
let notes = getsavednotes()

const filters = {
   searchText: '',
   sortBy: 'byEdited'
}
var newfilteredNotes = '';



renderNotes(notes, filters)

// const timeStamp = moment.valueOf(); // it gives the number back
// console.log(timeStamp)
const timeStamp = moment().valueOf();
document.querySelector('#create').addEventListener('click', function (e) {
   //   e.target.textContent = 'The button was clicked'
   const id=uuidv4(); 
   
   notes.push({
      
      id: id,
      title:"" ,
      body:"",
      createdAt: timeStamp,
      updatedAt: timeStamp
   })
   saveNotes(notes);
      
   location.assign(`/edit.html#${id}`)
   
  
})
document.querySelector('#searchText').addEventListener('input', function (e) {
   filters.searchText = e.target.value
   renderNotes(notes, filters)
})

document.querySelector('#filterBy').addEventListener('change', function (e) {
  filters.sortBy = e.target.value
  renderNotes(notes, filters)
})

window.addEventListener('storage', function(e){
   
   if(e.key === 'notes'){

      notes = JSON.parse(e.newValue)
      renderNotes(notes, filters)

   }
})

