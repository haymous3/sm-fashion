import {createContext, useState} from 'react'
import BANNER from '../../assets/images/hero-banner.webp'
import SECTIONBANNERONE from '../../assets/images/section-one-banner.webp'
import BAG from '../../assets/images/bag.webp'
import SHOE from '../../assets/images/shoe.webp';
import GLASSES from '../../assets/images/glases.webp';
import BROWNBAG from '../../assets/images/brown-bag.webp'
import WOMEN from '../../assets/images/women.webp'
import JACKET from '../../assets/images/jackets.webp'
import JEAN from '../../assets/images/JEAN.webp'
import BATA from '../../assets/images/BATA.webp'
import COG from '../../assets/images/icon-cog.webp'
import HEADPHONE from '../../assets/images/icon-headphone.webp'
import PLANE from '../../assets/images/icon-plane.webp'
import ROTATE from '../../assets/images/rotate.webp'
import FOOTERLOGO from '../../assets/images/footer-logo.webp'
import PAYMENT from '../../assets/images/payment.webp'
import GOAT from '../../assets/images/goat.webp'
import PEOPLE from '../../assets/images/people.webp'
import BUSH from '../../assets/images/bush.webp'
import LAPTOP from '../../assets/images/laptop.webp'
import FOOTERBG from '../../assets/images/footer-bg.webp'
import ACCESSORIES from '../../assets/images/accessories-bg.webp'
import CARDONE from '../../assets/images/card1.jpg'
import CARDTWO from '../../assets/images/card2.jpg'
import CARDTHREE from '../../assets/images/card3.jpg'
import CARDFOUR from '../../assets/images/card4.jpg'
import CARDFIVE from '../../assets/images/card5.jpg'


export const ImageContexts = createContext({
    banner: 'banner',
    sectionbanner:'sectionbanner',
    bag:'bag',
    shoe:'shoe',
    glasses:'glasses',
    brownbag:'brownbag',
    women:'women',
    jacket:'jacket',
    jean:'jean',
    bata:'bata',
    cog:'cog',
    headphone:'headphone',
    plane:'plane',
    rotate: 'rotate',
    footerlogo:'footerlogo',
    payment:'payment',
    goat:'goat',
    people:'people',
    bush:'bush',
    laptop:'laptop',
    footerbg:'footerbg',
    accessories:'accessories',
    cardone:'cardone',
    cardtwo:'cardtwo',
    cardthree:'cardthree',
    cardfour:'cardfour',
    cardfive:'cardfive',


    
})



export const ImageProvider = ({children}) => {
    const[banner] = useState(BANNER)
    const[sectionbanner] = useState(SECTIONBANNERONE);
    const[bag] = useState(BAG);
    const[shoe] = useState(SHOE);
    const[glasses] = useState(GLASSES);
    const[browbag] = useState(BROWNBAG);
    const[women] = useState(WOMEN);
    const[jacket] = useState(JACKET);
    const[jean] = useState(JEAN);
    const[bata] = useState(BATA);
    const[cog] = useState(COG);
    const[headphone] = useState(HEADPHONE);
    const[plane] = useState(PLANE);
    const[rotate] = useState(ROTATE);
    const[footerlogo] = useState(FOOTERLOGO);
    const[payment] = useState(PAYMENT);
    const[goat] = useState(GOAT);
    const[people] = useState(PEOPLE);
    const[bush] = useState(BUSH);
    const[laptop] = useState(LAPTOP);
    const[footerbg] = useState(FOOTERBG);
    const[accessories] = useState(ACCESSORIES)
    const[cardone] = useState(CARDONE)
    const[cardtwo] = useState(CARDTWO)
    const[cardthree] = useState(CARDTHREE)
    const[cardfOur] = useState(CARDFOUR)
    const[cardfive] = useState(CARDFIVE)
  



    const value ={banner,sectionbanner,bag, shoe, glasses, browbag, women, jacket, jean, bata, cog, headphone, plane,rotate, footerlogo, payment, goat, people, bush, laptop, footerbg, accessories, cardone, cardtwo, cardthree, cardfOur, cardfive}


    return <ImageContexts.Provider value={value}>{children}</ImageContexts.Provider>
}