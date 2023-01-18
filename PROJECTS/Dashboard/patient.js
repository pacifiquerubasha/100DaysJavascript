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
        type:"text",
        placeholder:"Select patient picture",
        icon:"icon-picture"
    },
    {
        label:"Contact Number",
        type:"text",
        placeholder:"Enter contact number",
        icon:"icon-phone"
    },
    {
        label:"Relation",
        type:"text",
        placeholder:"Enter relationship",
        icon:"icon-group"
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
        type:"text",
        placeholder:"Enter marital status",
        icon:"icon-link"
    },
  
    {
        label:"Blood group",
        type:"text",
        placeholder:"Enter blood group",
        icon:"icon-tint"
    },
    {
        label:"Nationality",
        type:"text",
        placeholder:"Enter nationality",
        icon:"icon-flag"
    },
    {
        label:"Email",
        type:"text",
        placeholder:"Enter email",
        icon:"icon-envelope"
    },
    {
        label:"Date of birth",
        type:"text",
        placeholder:"Enter date of birth",
        icon:"icon-calendar"
    },
    {
        label:"Phone No",
        type:"text",
        placeholder:"Enter phone number",
        icon:"icon-phone"
    },
    {
        label:"Gender",
        type:"text",
        placeholder:"Enter gender",
        icon:"icon-female"
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

patientFormFields.forEach((field)=>{
    const template = `
    <div class="inputContainer">
        <span>${field.label}</span>
        <div>
            <input aria-label="${field.label}" type="${field.type}" placeholder="${field.placeholder}">
            <i class="${field.icon}"></i>
        </div>
    </div>        
    `
    formsContainer.insertAdjacentHTML("afterbegin", template)
})




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

