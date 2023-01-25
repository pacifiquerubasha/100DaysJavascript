import { handleTogglePopup } from "../utils/utils.js";

export const handleDropdownToggle = (isHome)=>{

    const headerRightContainer = document.querySelector('.header-right');
    const dropdownTemplate = `
        <div class="dropdown-profile hidden">
            <div class="dropdown-top">
                <img src=${isHome ? "./assets/profile.jpg" : "../assets/profile.jpg"} alt="Profile image">
                <div>
                    <span>Malaika</span>
                    <span>malaika@cyrrus.com</span>
                </div>
            </div>
            <hr/>
            <div class="dropdown-list">
                
                <div class="logout">
                    <i class="icon-signout"></i>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    
    `

    headerRightContainer.insertAdjacentHTML('beforeend', dropdownTemplate);

    handleTogglePopup('.profile-container', '.dropdown-profile');

    const dropdown_list = [
        {
            title:"Settings",
            icon:"icon-cog",
            url:'/'
        },
        {
            title:"Modify Profile",
            icon:"icon-edit",
            url:'/'
        }
    ]


    const dropdownListContainer = document.querySelector('.dropdown-list');

    dropdown_list.forEach((item)=>{
        const template = `
        <a href=${item.url}>
            <div>
                <i class="${item.icon}"></i>
                <span>${item.title}</span>
            </div>
            <i class="icon-angle-right"></i>
        </a>
        `
        dropdownListContainer.insertAdjacentHTML('afterbegin', template )

    })
}