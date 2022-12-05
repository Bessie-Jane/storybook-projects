import "./profileSideDisplay.css"
import { sideInfo } from "../5th_Test/side-Info-Temp"
import profileIcon from "./profile-page-assets/profileUserIcon.svg"
import calenderIcon from "../5th_Test/contact-info-assets/sideIcons/calendarIcon.svg"

// import profileIcon from "../5th_Test/contact-info-assets/sideIcons/profileIcon.png"
// import { sideInfoDisplay } from "../5th_Test/side-Info"

export const profileSideInfo = () => `   
    <div class="profileSideNav">
        ${sideInfo(profileIcon, "Profile", 18, 24, 36, 28, "#ffad00", 5, "ppSideNavActive")}
        ${sideInfo(calenderIcon, "My Appointments", 26, 26, 36, 24 , 5)}
    </div>            
    
`