
const formsFields = {
    left:[
        {
            label:"Name",
            type:"text",
            placeholder:"Enter your name",
            icon:"fa-solid fa-gift"
        },
        {
            label:"Name",
            type:"text",
            placeholder:"Enter your name",
            icon:"fa-solid fa-gift"
        },
        {
            label:"Name",
            type:"text",
            placeholder:"Enter your name",
            icon:"fa-solid fa-gift"
        },
        {
            label:"Name",
            type:"text",
            placeholder:"Enter your name",
            icon:"fa-solid fa-gift"
        },
        {
            label:"Name",
            type:"text",
            placeholder:"Enter your name",
            icon:"fa-solid fa-gift"
        },
        {
            label:"Name",
            type:"text",
            placeholder:"Enter your name",
            icon:"fa-solid fa-gift"
        },

    ],

    right:[
        {
            label:"Name",
            type:"text",
            placeholder:"Enter your name",
            icon:"fa-solid fa-gift"
        },
        {
            label:"Name",
            type:"text",
            placeholder:"Enter your name",
            icon:"fa-solid fa-gift"
        },
        {
            label:"Name",
            type:"text",
            placeholder:"Enter your name",
            icon:"fa-solid fa-gift"
        },


    ]
}


const formsContainers = document.querySelectorAll('.forms');

formsContainers.forEach((container, index)=>{

    const fields = index === 0 ? formsFields.left :formsFields.right;

    fields.forEach((field)=>{
        const template = `
        <div class="inputContainer">
            <span>${field.label}</span>
            <div>
                <input aria-label="${field.label}" type="${field.type}" placeholder="${field.placeholder}">
                <i class="${field.icon}"></i>
            </div>
        </div>        
        `
        container.insertAdjacentHTML(`${index === 1 ? "afterbegin" :"beforeend"}`, template)
    })


})