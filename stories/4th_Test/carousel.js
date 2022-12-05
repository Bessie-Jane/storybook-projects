import "../assets/fontawesome/all";
import { pictureTemplate } from "./carouselPicTemplate";
import afroGroupOne from "./AfroStyle_1/group-17.png";
import afroGroupTwo from "./AfroStyle_2/group-18.png";
import afroGroupThree from "./AfroStyle_3/group-26.png";
import afroGroupFour from "./AfroStyle_4/group-27.png";
import afroGroupFive from "./AfroStyle_1/group-17.png";
import afroGroupSix from "./AfroStyle_2/group-18.png";
import afroGroupSeven from "./AfroStyle_3/group-26.png";


export const carousel = () => `
    <div class="parentDiv">
        <div class="typeDiv">Hair Care Products</div>

        <div class="categoryDiv">
            <div style="color: #fff">Women</div>
            <div class="categoryItems">Men</div>
            <div class="categoryItems">Kids</div>
            <div class="categoryItems">Accessories</div>
        </div>        

        <div class="parentArrowDiv">
            <div class="arrowDiv leftIcon"><span class="arrowSpan"><i class="fa-solid fa-arrow-left"></i></span></div>
            <div class="arrowDiv rightIcon"><span class="arrowSpan"><i class="fa-solid fa-arrow-right"></i></span></div>
        </div>
        

        <div class="templateHolder"> 

            <div>${pictureTemplate(afroGroupOne, "Afro HairStyle 2", 99)}</div>
            <div>${pictureTemplate(afroGroupTwo, "Afro HairStyle 3", 99)}</div>
            <div>${pictureTemplate(afroGroupThree, "Afro HairStyle 4", 99)}</div>
            <div>${pictureTemplate(afroGroupFour, "Afro HairStyle 5", 99)}</div>
            <div>${pictureTemplate(afroGroupFive, "Afro HairStyle 6", 99)}</div>
            <div>${pictureTemplate(afroGroupSix, "Afro HairStyle 7", 99)}</div>
            <div>${pictureTemplate(afroGroupSeven, "Afro HairStyle 8", 99)}</div>

        </div>

        
        <div class="buttonDiv">
            <div class="button"> View All Products </div> 
        </div>
    </div>
`
