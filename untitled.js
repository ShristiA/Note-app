//unix Epoch =  January 1st 1978 00:00:00

// const now = new Date()
// const timeStamp = now.getTime()



// const myDate = new Date(timeStamp)
// console.log(myDate.getFullYear())



// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

const firstDate = new Date('March 3 2003 03:33:33' );

const firstTimeStamp = firstDate.getTime();


const secondDate = new Date('February 4 2013 13:23:33')
const secondTimeStamp = secondDate.getTime();

if(firstTimeStamp< secondTimeStamp){
   console.log(firstDate.toString())
}else{
   console.log(secondDate.toString())
}