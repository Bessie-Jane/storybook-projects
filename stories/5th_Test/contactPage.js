import "./contactPage.css"
import { sideInfoDisplay } from "./side-Info"
import { contactCard } from "./contactCard"


export const contactPageDisplay = () => `
    <div class="contactPageDiv">    
        <div class="sideInfoDisplayDiv">${sideInfoDisplay()}</div>
        <div class="contactCardDisplay">${contactCard()}</div>
    </div>
    
`