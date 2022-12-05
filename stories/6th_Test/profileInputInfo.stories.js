import { inputBox } from "./profileInputInfo"
import  eyeOpenIcon  from "./profile-page-assets/eyeOpenIcon.svg"

export default {
    title: 'Test_Six/InputBox'
}

const Template = ({inputBoxText, inputBoxImage}) => inputBox(inputBoxText, inputBoxImage)

export const input_component = Template.bind()

input_component.args = {
    inputBoxText: "Input Text",
    inputBoxImage: eyeOpenIcon
}