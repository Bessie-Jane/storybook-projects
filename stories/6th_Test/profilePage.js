import "./profilePage.css"
import eyeOpenIcon from "./profile-page-assets/eyeOpenIcon.svg"
import { profileSideInfo } from "./profileSideDisplay"
import { profileButton } from "./profileButton"
import { inputBox } from "./profileInputInfo"

export const profilePageDisplay = () => `
    <div class="profilePageContainer">  
        <div class="profileSideInfo"> ${profileSideInfo()} </div>

        <div class="ppSubContainer flex">
            <div class="profileText">Profile</div>

            <div class="myContainer">
                <div class="ccInfoAndEmail flex">
                    <div class="ccPersonalInfo flex borderAndRadius">             
                        <div class="profilePicture">A</div>
                        <div class="profileInfoName">Adaora Azubuike</div>
                        <div class="profileInfoNumber">+81-9899636757</div>
                        ${profileButton("Edit Profile")}   
                    </div>

                    <div class="emailDiv borderAndRadius">
                        <div class="profileEmail">adaora1706@gmail.com</div>
                        <div class="editEmailButton">${profileButton("Edit Email")}</div>   
                    </div>
                </div>
                    
                <div class="ccPasswordDiv flex borderAndRadius">
                    <div class="changePassword">Change Password</div>   
                    
                    ${inputBox("Old Password")}   
                    ${inputBox("New Password")}                  
                    ${inputBox("Confirm Password")} 
                    
                   <div class="updateProfileButton">${profileButton("Update")}</div>
                </div>    
            </div>     
        </div>
    </div>
`