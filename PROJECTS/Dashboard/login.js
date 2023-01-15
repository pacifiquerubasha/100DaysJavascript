
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


const formIntroTitle = document.querySelector('.formIntro .title');

/**
 * Utitlity function to display text letter after another
 * @param {*} text 
 * @param {*} container 
 */
const displayLetterAfterLetter = (text, container)=>{
    let index = 0;
    const classesList = ["var(--color-blue)", 'black', 'black', "var(--main-color)",'black','black', "var(--color-red)",'black', "var(--color-purple)", "black"]
    let interval = setInterval(()=>{
        if(index < text.length){
            container.textContent += text[index]
            container.style.color = classesList[index];
            index++;
        }

        else clearInterval(interval)
    
    }, 100)
}

displayLetterAfterLetter('Welcome Back', formIntroTitle);