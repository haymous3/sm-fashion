import './body-bg.styles.scss'

const BodyBg = ({children}) => {


    return(
        <div className="body-bg-container">
           {children}
        </div>

    )
}

export default BodyBg;