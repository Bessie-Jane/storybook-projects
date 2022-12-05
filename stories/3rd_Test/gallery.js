import { gridTemplate } from "./galleryTemplate";
import manHairStlye from "./HairCutPictures/manHairstyle.jpg"
import womanHairStlye from "./HairCutPictures/womanHairstyle.jpg"
import manHairCut from "./HairCutPictures/manHaircut.jpg"
import womanHairCut from "./HairCutPictures/womanHaircut.jpg"
import beardCut from "./HairCutPictures/beardCut.jpg"
import BarberCut from "./HairCutPictures/BarberCut.jpg"


export const photoGallery = () => `
    <div class="galleryWrapper">
        <div  class="subWrapper">
            <div class="titleDiv">
                <h2 class="galleryHeader">Gallery</h2>
                <h5 class="galleryType">for hair & Skin Clinic</h5>
            </div>

            <div class="gridContainer1">
                <h4 class="subtitle">HAIR CUTTING</h4>
                <div class="gridContainer2">
                    <div>${gridTemplate(manHairStlye, 467, "Abati Kwame", 205)}</div>
                    <div>${gridTemplate(womanHairStlye, 897, "Rose Neil", 108 )}</div>
                    <div>${gridTemplate(manHairCut, 897, "Tampar Mwane", 108 )}</div>
                    <div>${gridTemplate(womanHairCut, 897, "Ingrose Sebaya", 108 )}</div>
                    <div>${gridTemplate(beardCut, 897, "Selita Namo", 108 )}</div>
                    <div>${gridTemplate(BarberCut, 897, "Lloyd Anyanzu", 108 )}</div>  
                </div>
            </div>
        </div>   
    </div>
`