import { useContext, useMemo, useState, useEffect } from "react";
import {useTable} from "react-table";
import { CartContexts } from "../../contexts/cart-contexts/cart-contexts";
import { COLUMNS } from "./dash-cart-column";

import './dash-cart.styles.scss'



const DashCart = () => {
                
    const {cartItems, clearAllCart} = useContext(CartContexts)
    const [newCartItems, setNewCartItem] = useState(cartItems)
    const [searchValue, setSearchValue] = useState('')

    console.log(newCartItems)



    const search = (e) => {
        const {value} = e.target
        setSearchValue(value.toLowerCase())
        
    }
    console.log(searchValue)

  
    useEffect(() => {
        const filtered = cartItems.filter((hey) => {
            return hey.name.toLowerCase().includes(searchValue) || hey.brand.toLowerCase().includes(searchValue)
        })

        setNewCartItem(filtered)
    }, [cartItems, searchValue]) 

   



    const columns = useMemo(() => COLUMNS, [])
    // const data = useMemo(() => MOCK_DATA, [])

  const tableInstance = useTable({
    columns,
    data: newCartItems
  })

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance
    return(
        <div className="cart-table">
            <div className="search-input">
            <input placeholder="Filter by name or brand" onChange={search}/>
            </div>

            <table {...getTableProps()}>
           
            
            <thead>
                {
                    headerGroups.map((headergroup) => (
                        <tr {...headergroup.getHeaderGroupProps()}>
                            {headergroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                            
                        </tr>
                        
                    ))
                }
            
            </thead>
            <tbody {...getTableBodyProps()}>
        
                {
                    rows.map((row) => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                        
                                {row.cells.map((cell) => {
                                    
                                    return  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    } )
                }
            
            </tbody>
    
        </table>
        <div className="table-button">
              
            <button onClick={clearAllCart}>CLEAR ALL</button>
        </div>
   
        
    </div>
     
    )
}

export default DashCart;