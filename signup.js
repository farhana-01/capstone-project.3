        let sigupForm = document.getElementById('form-set')
        sigupForm.addEventListener('submit',async function (e){
                e.preventDefault();
            
             let localEmail = document.getElementById('email').value;   
             let localPassword = document.getElementById('password').value;
             let localUsers = localStorage.getItem('user')
             let users = JSON.parse(localUsers)
            
              try{
                let userApi = await fetch('https://fakestoreapi.com/users');
                let apiJson = await userApi.json();
        
                 const setInputVelue = apiJson.find(
                    user => user.email === localEmail  && user.password === localPassword);
            
                if(setInputVelue) {
                    window.location.href = "/index.html";
                } else {
                    
                    users.forEach(user => {
                     let{userEmail,userPassword} = user
                     if(localEmail === userEmail && localPassword === userPassword){
                      window.location.href = "/index.html";
                     }else{alert("Somthing went wrong")}
                    });
                }
                
              } catch (error){
                console.log("error",error);
              }
            });
            


 










