import { contactInfoTemplate } from "./contactInfoTemplate"
import afroLady from './contact-info-assets/afroLady.jpg'

export default {
    title: 'Test_five/Contact Info Template'
}

const Template = ({}) => contactInfoTemplate(afroLady, "John Ntoka", "346 6776 560","simon.kovac@hairandskin.com", "Nail Treatment, Hair Waxing, Hair Cutting and 2 more")

export const contactInfo_Template = Template.bind()