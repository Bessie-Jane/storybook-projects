import { pictureTemplate } from "./carouselPicTemplate";
import afroGroupOne from "./AfroStyle_1/group-17.png";

export default {
    title: "Test_four/Carousel Template"
}

const Template = ({}) => pictureTemplate(afroGroupOne, "Afro HairStyle 2", 99)

export const Test = Template.bind({})