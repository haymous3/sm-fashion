import SectionCards from '../sections-cards/section-cards.component';
import ImageCard from '../image-card/image-card.component';
import './second-sections.styles.scss'


const SubProduct = ({product, rowreverse, images, service}) => {
      
    return(
        <div className={`sub-product  ${rowreverse}`}>
            <div className='sub-container'>
            {
               product.map((cards) => <SectionCards key={cards.id} cards={cards}/>)
               }          
            </div>
             <ImageCard source={images}>MEN</ImageCard>
             <div>
            
             </div>
      
        </div>
    )

}


export default SubProduct;