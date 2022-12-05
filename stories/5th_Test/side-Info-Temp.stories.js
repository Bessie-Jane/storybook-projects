import { sideInfo } from "./side-Info-Temp"
import profileIcon from "./contact-info-assets/sideIcons/profileIcon.png"


export default {
    title: "Test_Five/Side Info Template"
}

const Template = ({}) => sideInfo(profileIcon, "Profile")

export const side_Info = Template.bind()