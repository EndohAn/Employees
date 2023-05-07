import './empl-list-item.css';

const EmployeesListItem = ({addEmpl,setAddEmpl}) => {
    

    function deleteEmpl(id){
        let newEmpl=[...addEmpl].filter(item => item.id!=id)
        setAddEmpl(newEmpl);
    }


    function addIncrease(id){
        let newEmpl=[...addEmpl].filter(item =>{
           if(item.id ===id) {
            item.increase=!item.increase
           }
        })
        setAddEmpl(newEmpl);
    }

    let classNames="list-group-item d-flex justify-content-between";

    // чтобы выделить другим цветом
    // if(increase){
    //     classNames +=" increase";
    // }
    return (
        <ul className="app-list list-group">

           <li className={classNames}>
            {addEmpl.map(item =>(
                <div key={item.id}>
           
              <span className="list-group-item-label">{item.name}</span>
              <input type="text" className="list-group-item-input" defaultValue={item.salary +'$'}/>
              <div className='d-flex justify-content-center align-items-center'>
                  <button  onClick ={()=>addIncrease(item.increase)}
                  type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>

                  </button>

                  <button onClick ={()=>deleteEmpl(item.id)}  type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                  </button>
                  <i className="fas fa-star"></i>
              </div>
              </div>
            ))}
           </li>
        </ul>
    )
}

export default EmployeesListItem;