


document.getElementById('form-setup').addEventListener('submit', function(e){
  e.preventDefault()

  let email = document.getElementById('email').value.trim();   
  let password = document.getElementById('password').value.trim();
    let arrayObj = []
  if(email && password){
  let userObj = {
    userEmail: email,
    userPassword: password,


  }
    arrayObj.push(userObj)
    let userDetails = JSON.stringify(arrayObj)
    localStorage.setItem('user',userDetails)
    window.location.href = "/pages/sigup.html"
  }
})





  

