import { useContext } from "react"
import { CompareContext } from "../../../contexts/compare-contexts/compare-context.component"
import TableHeadingDirectory from "../../../components/table-heading-directory/table-heading-directory.component"
import CompareDash from "../../../components/compare-dash/compare-dash.component"
import './dashboard-compare.styles.scss'
const CompareList = () => {

    const {compareList, clearCompareList} = useContext(CompareContext)

    return(
        <div>
            <div>
            <button className="compare-clear" onClick={clearCompareList}>Clear All</button>
            </div>
            
            <div className="compare-table">
            <TableHeadingDirectory tablestyle='vertical'/>
            <div className="table-compare">
                    {
                        compareList.map((compare) => <CompareDash key={compare.id} compare={compare}/>)
                    }
                </div>
            </div>
        </div>
        
    )
}


export default CompareList