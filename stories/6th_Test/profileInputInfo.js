import "./profileInputInfo.css"
import eyeOpenIcon from "./profile-page-assets/eyeOpenIcon.svg"


export const inputBox = (inputBoxText, eyeOpenUrl=eyeOpenIcon, width=18, height=18) => `
    <div class="inputField">    
        <input type="text" id="fname" name="fame" class="ifText" placeHolder="${inputBoxText}">
             
        <img class="ifIcon"
            src="${ eyeOpenUrl }" 
            alt="Eye Open Icon"
            style="width:${ width }px; 
                   height:${ height }px;"
        >               
    </div>
`