import './news-letter.styles.scss'
const NewsLetter = () => {

 return(
    <div className="news-container">
        <div className="news-title">
            <h2>JOIN THE NEWSLETTER</h2>
            <p>Sign Up For Our NewsLetter</p>
        </div> 
        <div className="news-subscribe">
            <form>
                <input type='text' placeholder="Enter your Email"></input>
            
            </form>
            <p>Subscribe</p>
        </div> 
        
    
    </div>

 )   
}


export default NewsLetter;