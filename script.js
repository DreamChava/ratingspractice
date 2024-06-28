let numbers = document.querySelectorAll('.number');
console.log(numbers);
// 
// document.
// querySelectorAll('div').
// forEach((number)=> number.addEventListener('click',()=>{
//   // 
// })) 
numbers.forEach((number) => {
    number.addEventListener('click', () => {
      // 1- remove the highlight class from all the numbers
      numbers.forEach((remove) => {
        remove.classList.remove('highlight');
      })
      // 2- Highlight the clicked number
        number.classList.add("highlight");
    })
})

let button = document.getElementById('btn');
console.log(button);

button.addEventListener('click', () => {
  // Check if there is an element with the class "highlight"
  // if there is one then alret
  const highlightElement = document.querySelector('.highlight');
  if (highlightElement) {
        highlightElement.classList.remove('highlight');
        setTimeout(()=>{
          alert('Rating has been submitted successfully');
        },0)
    }
})


