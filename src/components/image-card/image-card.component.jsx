// import Images from '../images/images.componnet';

import './image-card.styles.scss'

const ImageCard = ({source, children}) => {


    return(
        <div className='sub-container-image'>
               <div className="dark-banner">
                  <a href='i'>
                     <img src={source} alt="img"/>
                     <span className="box-content-dark">
                        <span className="box-content">
                           <span className="dark-text">{children}</span>
                        </span>
                     </span>
                  </a>
               </div>
            </div>


    )
}

export default ImageCard;