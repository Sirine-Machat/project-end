let search =document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
search.classList.toggle('active');
}

function validateForm(e) {
    e.preventDefault()
    var name = document.loginForm.name.value
    var password = document.loginForm.password.value
    var number=document.loginForm.number.value
   if (name.length==0)
    return alert(`name is required`);
   if (password.length<5)
    return alert(`password length should more than 5`);
   }
   const stars=document.getElementsByClassName('bx bxs-star');

for(let i of stars) {
    i.addEventListener('click', function() {
        i.classList.toggle('glod');
    })
}
