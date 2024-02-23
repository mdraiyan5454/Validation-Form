let nameinput = document.getElementById("name-input")
let phoneinput = document.getElementById("phone-input")
let emailinput = document.getElementById("email-input")
let passwordinput = document.getElementById("password-input")
let confirminput = document.getElementById("confirm-input")


let nameerr = document.getElementById("nameerr")
let phoneerr = document.getElementById("phoneerr")
let emailerr = document.getElementById("emailerr")
let passworderr = document.getElementById("passworderr")
let confirmerr = document.getElementById("confirmerr")

let btn = document.getElementById("signin")

nameinput.addEventListener("click", ()=>{
    nameerr.textContent="";                                                                                    
})
phoneinput.addEventListener("click", ()=>{
    phoneerr.textContent="";                                                                                    
})
emailinput.addEventListener("click", ()=>{
    emailerr.textContent="";                                                                                    
})
passwordinput.addEventListener("click", ()=>{
    passworderr.textContent="";                                                                                    
})
confirminput.addEventListener("click", ()=>{
    confirmerr.textContent="";                                                                                    
})


btn.addEventListener("click", (event) =>{
    event.preventDefault();
    let emailvalid = "@"

    if(nameinput.value == "" || phoneinput.value == "" || emailinput.value == "" || passwordinput.value == "" || confirminput.value == ""){ 
        

    if(nameinput.value == ""){
        nameerr.innerHTML= "please Enter the name ⓘ"
        nameerr.style.color= "red"
        nameerr.style.fontSize= "12px"
    }else{
        nameinput.innerHTML= ""
        nameerr.style.color= "green"
    }

    if(phoneinput.value == ""){
        phoneerr.innerHTML= " Enter your mobile no ⓘ"
        phoneerr.style.color= "red"
        phoneerr.style.fontSize= "12px"
        // phoneerr.display="none"
    }else{
        phoneinput.innerHTML= ""
        phoneerr.style.color= "green"
    }


    if(emailinput.value.match(emailvalid)){
        emailinput.innerHTML = ""
   }else{
    emailerr.innerHTML  = "Please Enter the email ⓘ"
    emailerr.style.color = "red"
    emailerr.style.fontSize = "12px"
   }

   
   if(passwordinput.value == ""){
    passworderr.innerHTML = "Please Enter the password ⓘ"
    passworderr.style.color = "red"
    passworderr.style.fontSize = "12px"
   } else{
    passworderr.innerHTML = ""
   }
    
   if(confirminput.value == ""){
    confirmerr.innerHTML = "Confirm password is not match ⓘ"
    confirmerr.style.color = "red"
    confirmerr.style.fontSize = "12px"
 }else{
    passwordinput.innerHTML = ""
}

    if(confirminput.value == passwordinput.value ){
        confirmerr.innerHTML = ""
        
    }else{
        confirmerr.innerHTML = "Confirm password is not match ⓘ"
        confirmerr.style.color = "red"
        confirmerr.style.fontSize = "12px"
    }
   
    setErrorFor()
} else {
    setTimeout(() => {
        alert("Your form was submitted successfully");
    },1000);

}
})

