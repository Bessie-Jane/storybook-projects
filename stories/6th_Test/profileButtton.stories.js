import { profileButton } from "./profileButton"



export default {
    title: 'Test_Six/ProfileButton'
}

const Template = ({textInButton}) => profileButton(textInButton)

export const button_component = Template.bind({})

button_component.args = {
    textInButton: "Button"
}