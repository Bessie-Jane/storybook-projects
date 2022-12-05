import './contactInfoTemplate.css'

export const contactInfoTemplate = (imgSource, contactName, phoneNumber, email, service ) => `
    <div class="contactDetailsDiv">
        <div class="contactImage">
            <img class="imageElement" src="${imgSource}" alt="Lady with a fro">
        </div>

        <div class="contactAndEditDiv">
            <div class="contact">
                <div class="contact_Name">${contactName}</div>
                <div class"phoneNumber">${phoneNumber}</div>
                <div class="email">${email}</div>
                <div class="service">${service}</div>
            </div>
    
            <div class="edit">Edit</div>
        </div>

       
    </div>    
`