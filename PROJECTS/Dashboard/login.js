
const loginEmail = document.querySelector('#loginEmail');
const loginPassword = document.querySelector('#loginPassword');


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

loginEmail.addEventListener('keyup', (e)=>{

    setTimeout(()=>{
        if(!e.target.value.match(EMAIL_REGEX)){
            e.target.parentNode.classList.add('border-red')
        }else{
            e.target.parentNode.classList.remove('border-red')
        }
    }, 2000)

}, {once:true})

console.log(loginEmail)