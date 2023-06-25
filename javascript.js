let search =document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
search.classList.toggle('active');
}



   const stars =document.getElementsByClassName('bx bxs-star');

   for(let i of stars) {
       i.addEventListener('click', function() {
           i.classList.toggle('glod');
       })
   }
   


function validateForm(e) {
    e.preventDefault()
    var nam = document.loginForm.name.value
    var password = document.loginForm.password.value
  var Number = document.loginForm.Number.value
  var namePattern = /^[a-zA-Z\s]+$/;
  var phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/;
  if (nam.value !=namePattern){
    return alert('Enter words');
   }
  if (password.length<5){
    return alert(`password length should more than 5`)
   }
   
   if(Number !=phoneNumberPattern ){
    return alert ('Enter numbers')
 
   }
}