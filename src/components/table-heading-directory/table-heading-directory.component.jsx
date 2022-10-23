import { Fragment } from "react"
import { TablesHeading } from "../../tables-heading/tables-heading"
import Tables from "../Tables/tables.component"

import './table-heading-directory.styles.scss'


const TABLE_STYLE = {
    vertical: 'vertical',
    horizontal: 'horizontal'
}
const TableHeadingDirectory = ({tablestyle}) => {


    return(
        <Fragment>
            <div className={`${TABLE_STYLE[tablestyle]}`}>
                {
                    TablesHeading.map((table) => <Tables key={table.id} tables={table} />)
                }
        
            </div>
        </Fragment>
       
       
    )
}

export default TableHeadingDirectory