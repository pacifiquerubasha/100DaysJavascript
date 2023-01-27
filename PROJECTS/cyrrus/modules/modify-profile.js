import { handleDropdownToggle } from "./dropdown.js";
import { userInfoFieldsTemplate } from "../utils/form-data.js";

handleDropdownToggle();

const stars = document.querySelectorAll('.banner i');

stars.forEach((star)=>{
    setInterval(()=>{
        const randomTranslate = Math.floor(Math.random() * 100);
        const randomRotationDegree = Math.floor(Math.random() * 360)
        console.log(randomTranslate, randomRotationDegree)
    
        star.style.transform = `translateX(${randomTranslate}vh) rotate(${randomRotationDegree}deg)`

    }, 5000)

})



const menuItems = document.querySelectorAll('.profile-right-header span');
const container = document.querySelector('.modify-information');


const loadContent = (template)=>{
    container.textContent = '';

    container.insertAdjacentHTML('beforeend', template);

}

loadContent(userInfoFieldsTemplate[0])


const handleSubmitModifyProfile = (e, screen)=>{
    e.preventDefault(); 

    

}

let screen = 0;
container.addEventListener('submit', (e) => handleSubmitModifyProfile(e, screen))

menuItems.forEach((item, key)=>{
    item.addEventListener('click', (e)=>{
        document.querySelector('.selected-menu-item').classList.remove('selected-menu-item');
        e.target.classList.add('selected-menu-item');

        loadContent(userInfoFieldsTemplate[key])

        screen = key;

    })
})