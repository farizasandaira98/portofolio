import animationFacebook from '../assets/lottie/facebook2.json';
import animationWhatsapp from '../assets/lottie/whatsapp2.json';
import animationInstagram from '../assets/lottie/instagram2.json';
import animationEmail from '../assets/lottie/email.json';
import animationLinkedin from '../assets/lottie/linkedin.json';
import { ISocmed } from '../models/Socmed';

export const socmed: ISocmed[] = [
    {
        link: 'https://www.facebook.com/muhfarizasandaira/',
        icon: animationFacebook
    },
    {
        link: 'https://api.whatsapp.com/send?phone=6285397986721',
        icon: animationWhatsapp
    },
    {
        link: 'https://www.instagram.com/farizasandaira/',
        icon: animationInstagram
    },
    {
        link: 'mailto:muhfariza98@gmail.com',
        icon: animationEmail
    },
    {
        link: 'https://www.linkedin.com/in/muh-fariza',
        icon: animationLinkedin
    }
];