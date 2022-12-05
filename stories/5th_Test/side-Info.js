import "./side-Info.css"
import { sideInfo } from "./side-Info-Temp";
import profileIcon from "./contact-info-assets/sideIcons/profileIcon.png"
import shopIcon from "./contact-info-assets/sideIcons/shopIcon.svg"
import scissorsIcon from "./contact-info-assets/sideIcons/scissorsIcon.svg"
import peopleIcon from "./contact-info-assets/sideIcons/peopleGroupIcon.svg"
import calendarIcon from "./contact-info-assets/sideIcons/calendarIcon.svg"
import walletIcon from "./contact-info-assets/sideIcons/walletIcon.svg"


export const sideInfoDisplay = () => `
    <div class="sideInfoHolder">
        <div class="sideInfoHolder2 ">
            ${sideInfo( profileIcon, "Profile", 22, 22, 24, 22)}
            ${sideInfo( shopIcon, "Salon", 22, 22, 26, 22)}
            ${sideInfo( scissorsIcon, "Services", 19, 26, 27, 24,)}
            ${sideInfo( peopleIcon, "Employee", 28, 21, 22, 17, "#ffad00", 5, "active")}
            ${sideInfo( calendarIcon, "Appointment", 22, 24, 27, 21)}
            ${sideInfo( walletIcon, "Finances", 24, 19, 27, 19)}
        </div>
        
    </div>
    
`