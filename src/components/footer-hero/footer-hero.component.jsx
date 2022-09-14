import { Fragment } from "react";
import Heroes from "../Heroes/heroes.component";

const FooterHero = ({footer}) => {

    

    return(
        <Fragment>
        {
            footer.map((details) => <Heroes key={details.id} heros={details}/>)
        }

        </Fragment>
       

    )
}

export default FooterHero;