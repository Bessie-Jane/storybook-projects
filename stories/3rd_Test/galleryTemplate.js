import "./gallery.css";
import "../assets/fontawesome/all.js";


// export const pictureGrid = () => `
//     <div class="pictureContainer"> 
//         <div class="myImage">
//             <span class="text">345k Like this</span>  
//         </div>
//     </div>
// `


export const gridTemplate = (img, likes, name, amount) => `
    <div class="pictureContainer">
        <div class="myImage">
            <img src = ${ img } alt="A fine man with a fine haircut" />   
            <div class="thumbDiv"> <span class="imgThumb"><i class="fa-solid fa-thumbs-up fa-xs"></i></span> </div>   
            <span class="imgText">${ likes }k Like this</span>   
        </div>
        <div class="nameAndAmt">
            <div class="name">${ name }</div>
            <div class="amount">$ ${ amount }</div>
        </div>
    </div>
`


// export const pictureGrid = (imgUrl) => `
//     <div class="pictureContainer">
//         <div>
//             <div class="myImage">
//                 <img src = ${ imgUrl } alt="A fine man with a fine haircut" />         
//             </div>
//             <div>
//             </div>
//         </div>   
//     </div>
// `



