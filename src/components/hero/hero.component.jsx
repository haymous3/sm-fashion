import { useContext} from 'react';
import { ImageContexts } from '../../contexts/image-contexts/image-contexts';
import './hero.styles.scss';
// import Images, { IMAGE_TYPES } from '../images/images.componnet';


const Hero = () => {
    const {banner} = useContext(ImageContexts)

    // console.log(banner)


    return(
        <div className='hero-container'>

            <img src={banner} alt='hero-banner'/>
        
        </div>

    )
}


export default Hero