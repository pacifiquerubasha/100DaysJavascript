/**
 * Loading Staff registration form items 
 */

const patientFormFields = [
    {
        label:"Additional information",
        type:"text",
        placeholder:"Enter additional info",
        icon:"icon-plus-sign"
    },
    {
        label:"Patient Picture",
        type:"file",
        placeholder:"Select patient picture",
        icon:"icon-picture"
    },
    {
        label:"Contact Number",
        type:"tel",
        placeholder:"Enter contact number",
        icon:"icon-phone"
    },
    {
        label:"Relation",
        type:"select",
        placeholder:"Select relationship",
        icon:"icon-group",
        values:["Father", "Mother", "Son", "Daughter", "Husband", "Wife", "Brother", "Sister", "Grandfather", "Grandmother", "Grandson", "Granddaughter", "Uncle", "Aunt", "Nephew", "Niece", "cousin"]

        
    },
    {
        label:"Emergency Contact Person",
        type:"text",
        placeholder:"Enter contact person",
        icon:"icon-user"
    },
    {
        label:"Address",
        type:"text",
        placeholder:"Enter address",
        icon:"icon-map-marker"
    },
    {
        label:"Medical Card No",
        type:"text",
        placeholder:"Enter medical card no",
        icon:"icon-credit-card"
    },
    {
        label:"Occupation",
        type:"text",
        placeholder:"Enter occupation",
        icon:"icon-briefcase"
    },
    {
        label:"Marital status",
        type:"select",
        placeholder:"Select marital status",
        icon:"icon-link",
        values:["single", "married", "widowed", "divorced", "separated"]
    },
  
    {
        label:"Blood group",
        type:"select",
        placeholder:"Select blood group",
        icon:"icon-tint",
        values:["A+", "A-", "B-", "O+","O-", "AB+", "AB-", "B+"]
    },
    {
        label:"Nationality",
        type:"select",
        placeholder:"Select nationality",
        icon:"icon-flag",
        values:["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia",
        "Austria","Azerbaijan","Bahamas" ,"Bahrain","Bangladesh","Barbados" ,"Belarus","Belgium" ,"Belize","Benin","Bermuda" ,"Bhutan","Bolivia","Bosnia & Herzegovina" ,
        "Botswana","Brazil" ,"British Virgin Islands" ,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada" ,"Cape Verde","Cayman Islands" ,
        "Chad","Chile" ,"China","Colombia","Congo" ,"Cook Islands","Costa Rica" ,"Cote D Ivoire","Croatia" ,"Cruise Ship","Cuba","Cyprus" ,"Czech Republic","Denmark" ,
        "Djibouti","Dominica" ,"Dominican Republic","Ecuador","Egypt" ,"El Salvador","Equatorial Guinea" ,"Estonia","Ethiopia","Falkland Islands" ,"Faroe Islands","Fiji" ,
        "Finland","France" ,"French Polynesia","French West Indies" ,"Gabon","Gambia","Georgia" ,"Germany","Ghana" ,"Gibraltar","Greece","Greenland" ,"Grenada","Guam",
        "Guatemala" ,"Guernsey","Guinea" ,"Guinea Bissau","Guyana","Haiti" ,"Honduras","Hong Kong","Hungary" ,"Iceland","India" ,"Indonesia","Iran","Iraq" ,"Ireland",
        "Isle of Man" ,"Israel","Italy" ,"Jamaica","Japan" ,"Jersey","Jordan" ,"Kazakhstan","Kenya" ,"Kuwait","Kyrgyz Republic" ,"Laos","Latvia" ,"Lebanon","Lesotho" ,
        "Liberia","Libya" ,"Liechtenstein","Lithuania" ,"Luxembourg","Macau" ,"Macedonia","Madagascar" ,"Malawi","Malaysia" ,"Maldives","Mali" ,"Malta","Mauritania" ,
        "Mauritius","Mexico" ,"Moldova","Monaco" ,"Mongolia","Montenegro" ,"Montserrat","Morocco" ,"Mozambique","Namibia" ,"Nepal","Netherlands" ,"Netherlands Antilles",
        "New Caledonia" ,"New Zealand","Nicaragua" ,"Niger","Nigeria" ,"Norway","Oman" ,"Pakistan","Palestine" ,"Panama","Papua New Guinea" ,"Paraguay","Peru" ,"Philippines",
        "Poland" ,"Portugal","Puerto Rico" ,"Qatar","Reunion" ,"Romania","Russia" ,"Rwanda","Saint Pierre & Miquelon" ,"Samoa","San Marino" ,"Satellite","Saudi Arabia" ,
        "Senegal","Serbia" ,"Seychelles","Sierra Leone" ,"Singapore","Slovakia" ,"Slovenia","South Africa" ,"South Korea","Spain" ,"Sri Lanka","St Kitts & Nevis" ,
        "St Lucia","St Vincent" ,"St. Lucia","Sudan" ,"Suriname","Swaziland" ,"Sweden","Switzerland" ,"Syria","Taiwan" ,"Tajikistan","Tanzania" ,"Thailand","Timor L'Este" ,
        "Togo","Tonga" ,"Trinidad & Tobago","Tunisia" ,"Turkey","Turkmenistan" ,"Turks & Caicos","Uganda" ,"Ukraine","United Arab Emirates" ,"United Kingdom","United States" ,
        "United States Minor Outlying Islands","Uruguay" ,"Uzbekistan","Venezuela" ,"Vietnam","Virgin Islands (US)" ,"Yemen","Zambia","Zimbabwe"]
    },
    {
        label:"Email",
        type:"email",
        placeholder:"Enter email",
        icon:"icon-envelope"
    },
    {
        label:"Date of birth",
        type:"date",
        placeholder:"Select date of birth",
        icon:"icon-calendar"
    },
    {
        label:"Phone No",
        type:"tel",
        placeholder:"Enter phone number",
        icon:"icon-phone"
    },
    {
        label:"Gender",
        type:"select",
        placeholder:"Select gender",
        icon:"icon-female",
        values:["M", "F"]
    },

    {
        label:"Last Name",
        type:"text",
        placeholder:"Enter last name",
        icon:"icon-user"
    },
    {
        label:"Middle Name",
        type:"text",
        placeholder:"Enter middle name",
        icon:"icon-user"
    },
    {
        label:"First Name",
        type:"text",
        placeholder:"Enter firstname",
        icon:"icon-user"
    },

]


const formsContainer = document.querySelector('.formFields');

patientFormFields.forEach((field, key)=>{
    const templateText = `
    <div class="inputContainer">
        <span>${field.label}</span>
        <div>

            ${field.type === "date" ? `<label for="${key}-${field.label.replace(/\s+/g, '')}">Pick date</label>` : ""}
            <input aria-label="${field.label}" type="${field.type}" id="${key}-${field.label.replace(/\s+/g, '')}" class="${field.type === "date" && "invisible"}" placeholder="${field.placeholder}">
            

            <i class="${field.icon}"></i>
        </div>
    </div>        
    `
    const templateSelect = `
        <div class="inputContainer">
            <span>${field.label}</span>
            <div>
                <span id="select-${key}" class="inputContainer-selectText">${field.placeholder}</span>
                <i class="${field.icon}"></i>
                
            </div>

            <div class="select-items hidden" id="item-${key}">
                ${field.values?.map((field, index)=>{
                    return `<span class="field-element" id="field-element-${index}"=>${field}</span>`
                }).join("")
                }
                
            </div>
        </div> 
    `

    let template;

    switch(field.type){
        case "select":
            template = templateSelect;
            break;
        default:
            template = templateText;
    }
    
    formsContainer.insertAdjacentHTML("afterbegin", template)
})

/**
 * 
 */

/**
 * Custom utility function that handles Hide/Show select items on click
 */
const handleToggleCustomSelectInputs = (inputs)=>{

    inputs.forEach((select, i)=>{
        const KEY = select.id.split("-")[1]
        const correspondingItemsContainer = document.getElementById(`item-${KEY}`);

        select.addEventListener('click', ()=>{
            correspondingItemsContainer.classList.toggle('hidden')
        })

        /**
         * Simple function that, for each element of the items list toggled, adds the value to the field on click
         */
        const handleSelectElement = ()=>{
            const fieldElements = document.querySelectorAll(`#item-${KEY} .field-element`);
    
            fieldElements.forEach((element)=>{
                element.addEventListener('click', ()=>{
                    correspondingItemsContainer.classList.toggle('hidden')

                    const selectedValueContainer = document.getElementById(`select-${KEY}`);
                    selectedValueContainer.innerHTML = `<span class="selected-value">${element.textContent}</span>`
                })
            })

        }

        handleSelectElement();


    })   

}

const patientFormSelects = document.querySelectorAll('.inputContainer-selectText');

handleToggleCustomSelectInputs(patientFormSelects);


const staffs = [
    {
        id:"LM30KH",
        name:'Lady',
        lastname:"Mary",
        title:"Dr",
        department:"Surgery",
        nationality:"African",
        insertionDate:"11/12/2023",

    },
    {
        id:"LM30KH",
        name:'Lady',
        lastname:"Mary",
        title:"Dr",
        department:"Surgery",
        nationality:"African",
        insertionDate:"11/12/2023",

    },
    {
        id:"LM30KH",
        name:'Lady',
        lastname:"Mary",
        title:"Dr",
        department:"Surgery",
        nationality:"African",
        insertionDate:"11/12/2023",

    },
    {
        id:"LM30KH",
        name:'Lady',
        lastname:"Mary",
        title:"Dr",
        department:"Surgery",
        nationality:"African",
        insertionDate:"11/12/2023",

    },
    {
        id:"LM30KH",
        name:'Lady',
        lastname:"Mary",
        title:"Dr",
        department:"Surgery",
        nationality:"African",
        insertionDate:"11/12/2023",

    }
]

const staffListContainer = document.querySelector('.dataTable');

staffs.forEach((staff)=>{
    const template = `
        <div class="staff-table-row">
            <span>${staff.id}</span>
            <span>${staff.name}</span>                                                         
            <span>${staff.lastname}</span>
            <span>${staff.title}</span>
            <span>${staff.department}</span>
            <span>${staff.nationality}</span>
            <span>${staff.insertionDate}</span>
            <span class="actions">
                <i class="icon-trash"></i>
                <i class="icon-edit"></i>
            </span>
        </div>    
    
    `

    staffListContainer.insertAdjacentHTML('beforeend', template);
})

