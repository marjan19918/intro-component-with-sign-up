
const namee=document.getElementById('name');
const form=document.getElementById('myform');
const email=document.getElementById('email');
const password=document.getElementById('password');
const lastname=document.getElementById('lastname')


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(namee.value===''||namee.value==null){
        document.getElementById('nameError').innerText='FirstName can not be empty';
        namee.className='errorinput';
    }
    if (email.value==='') {
        document.getElementById('emailError').innerText='email can not be empty'
        email.className='errorinput'
    }
    else{
        if (ValidateEmail(email)===false) {
        document.getElementById('emailError').innerText='Looks like this is not email'
        email.className='errorinput';
    } 
    
    }
     if(password.value===''||password.value==null){
         document.getElementById('passwordError').innerText='Password can not be empty';
         password.className='errorinput'
     }
     if (lastname.value===''||lastname.value==null) {
         document.getElementById('lastnameError').innerText='LastName can not be empty';
         lastname.className='errorinput'
     }
     
    
    
})


function ValidateEmail(mail) 
{
    h=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 if (h.test(mail.value))
  {
    return (true)
  }
    
    return (false)
}
