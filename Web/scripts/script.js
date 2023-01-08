let form=document.getElementById("formulario")
let email=document.getElementById("email")
let password=document.getElementById("password")
let inputAddress=document.getElementById("inputAddress")
let alert=document.getElementById("alert")

const validateEmail = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailRegex.test(email)) return true;
  return false;
};

const validatePasswordModerate = (password) => {
  // Mayúsculas, minúsculas, números, caracteres especial y más de 8 caracteres
  const passwordRegex =
    /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
  if (passwordRegex.test(password)) return true;
  return false;
};

const comprobar=()=>{

    if (!validateEmail(email.value)){
        alert.textContent="Email inválido"
    }else{
        if(!validatePasswordModerate(password.value)){
            alert.textContent="Contraseña muy débil"
        }
        else{
            if(inputAddress.validity.valueMissing){
                alert.textContent="Dirección vacía"
            }
            alert.style.display="none"
            return true
        }
        
    }
    alert.style.display="block"
    return false
}

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let comprueba=comprobar();
})


