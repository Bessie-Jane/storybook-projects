import {createTextBox} from './textBox'

export default {
    title: "Test_one/Dropdown Box"
}

const Template = ({title}) => createTextBox(title)

export const DropdownBox = Template.bind({})

DropdownBox.args = {
    title: "A drop textbox with HTML and JS"
}

