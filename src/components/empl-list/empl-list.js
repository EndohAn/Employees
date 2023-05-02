import EmployeesListItem from "../empl-list-item/empl-list-item";

import './empl-list.css';

const EmployeesList = ({data}) => {

    const elements=data.map(item=>{
        return( 
            <EmployeesListItem {...item}/>)

    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;