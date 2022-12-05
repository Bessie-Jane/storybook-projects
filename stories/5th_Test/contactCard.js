import "./contactCard.css";
import { contactInfoTemplate } from "./contactInfoTemplate";
import { contactButton } from "./contactButton";
import afroLady from './contact-info-assets/afroLady.jpg';

export const contactCard = () => `
    <div class="contactCardDiv">
        <div class="widgetHeadingDiv  widgetFlex">
            <div class="widgetHeading">
                <div class="employee">Employee</div>
                <div class="location">Location</div>
                <div class="address">J-450, Cleo County, Noida Sector 71, Greater Noida</div>
            </div>
            
            <div class="ccButton">${contactButton()}</div>
        </div>
    
        <div class="cardHolder"> 
            <div>${contactInfoTemplate(afroLady, "Joanne Ntolo", "346 6776 560", "simon.kovac@hairandskin.com", "Nail Treatment, Hair Waxing, Hair Cutting and 2 more")}</div>
            <div>${contactInfoTemplate(afroLady, "John Ntolo", "346 6776 560", "simon.kovac@hairandskin.com", "Nail Treatment, Hair Waxing, Hair Cutting and 2 more")}</div>
            <div>${contactInfoTemplate(afroLady, "John Ntolo", "346 6776 560", "simon.kovac@hairandskin.com", "Nail Treatment, Hair Waxing, Hair Cutting and 2 more")}</div>
            <div>${contactInfoTemplate(afroLady, "John Ntolo", "346 6776 560", "simon.kovac@hairandskin.com", "Nail Treatment, Hair Waxing, Hair Cutting and 2 more")}</div>
        </div>
    
    </div>
`
