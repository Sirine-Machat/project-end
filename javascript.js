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
    e.preventDefault();
    var password = document.loginForm.password.value
  var Phone = document.loginForm.Phone.value
  if (password.length<5){
    return alert(`password length should more than 5`)
   }
   if (password.length >12){
    return alert(`password length should less than 12`)
   }
  


   else return alert("Send success")
}