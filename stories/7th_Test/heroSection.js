import "./heroSection.css"
import BUT_logo from "./hero-section-assets/bookurtreat-logo-white.svg"
import menuIcon from "./hero-section-assets/menuIcons/menu.png"
import pinIcon from "./hero-section-assets/pinIcons/pin.png"
import loupe from "./hero-section-assets/loupe/loupe.png"
import faceTreatment from "./hero-section-assets/face-treatment/face-treatment.png"
import hairRemoval from "./hero-section-assets/hair-removal/hair-removal.png"
import hairSalon from "./hero-section-assets/hair-salon/hair-salon.png"
import makeup_brows from "./hero-section-assets/makeup/makeup.png"
import medSpa from "./hero-section-assets/spa/spa.png"
import nails from "./hero-section-assets/nails/nails.png"
import tatoos from "./hero-section-assets/tattoos/tattoos.png"
import franceFlag from "./hero-section-assets/france-flag/france.png"


export const heroDesign = () => `
    <div class="heroSectionContainer">
        <div class="heroSectionNav">
            <div class="navContainer navGrid">
                <img src="${BUT_logo}" alt="B.U.T Logo" class="navLogo">

                <nav class="navLinksHolder">
                    <ul>
                        <li><a href="loginPage.html">Login</a></li>
                        <li><a href="signUpPage.html">Sign Up</a></li>
                        <li><a href="businessList.html" class="businessList">List your Business</a></li>
                        <li><a href="account.html">My Profile</a></li>                                                               
                    </ul>

                    <div>
                        <img src="${franceFlag}" alt="flag">
                        <select class="languageSelect" id="languages" name="languages">
                            <option class="language" value="french">French</option>   
                            <option class="language" value="portuguese">Portuguese</option>   
                            <option class="language" value="english">English</option>   
                            <option class="language" value="italian">Italian</option>   
                        </select>  
                    </div>
                       
                </nav>
            </div> 
        </div>  
        
        <div class="servicesContainer">
            <div class="servicesHead">Looking for <span></span></div>
            <div class="servicesText"> right here!</div>

            <div class="boxDisplay">
                <div class="searchBox"><img src="${menuIcon}" alt="Menu Icon">Search services here</div>
                <div class="locationBox"><img src="${pinIcon}" alt="Menu Icon">Pune</div>
                <div class="searchIcon"><img src="${loupe}" alt="Menu Icon"></div>
            </div>
        </div> 

        <div class="serviceOffered">
            <div class="faceTreatment"> <img src="${faceTreatment}" alt="Face Treatment">Face treatment</div>
            <div class="HairRemoval"><img src="${hairRemoval}" alt="Menu Icon">Hair Removal</div>
            <div class="HairSalon"><img src="${hairSalon}" alt="Menu Icon">Hair Salon</div>
            <div class="Makeup_brows"><img src="${makeup_brows}" alt="Menu Icon">Makeup, brows</div>
            <div class="Medspa"><img src="${medSpa}" alt="Menu Icon">Med spa</div>
            <div class="Nails"><img src="${nails}" alt="Menu Icon">Nails</div>
            <div class="Tatoos"><img src="${tatoos}" alt="Menu Icon">Tatoos</div>
            <div class="Tatoos"><img src="${tatoos}" alt="Menu Icon">Tatoos</div>
        </div>
    </div>

`

function changeServiceName () {
    
}