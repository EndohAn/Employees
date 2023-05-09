import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
// import EmployeesList from '../empl-list/empl-list';
import EmployeesAddForm from '../empl-add-form/empl-add-form';
import EmployeesListItem from '../empl-list-item/empl-list-item'
import { useState } from 'react';
import './app.css';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [addEmpl,setAddEmpl] = useState (
    [
    {name:"John Smith",salary:800 ,increase:false,id:1},
    {name:"Alex Stoun",salary:1000 ,increase:true,id:2},
    {name:"Phill Jackson",salary:5000 ,increase:false,id:3}
  ]
  );

function saveEmpl(userInput,setUserInput){
  if(userInput){
      const newItem={
              name:userInput,
              salary:userInput ,
              increase:false,
              id: uuidv4()  
      }
      setAddEmpl([...addEmpl,newItem])
  }
 
  
}


function deleteEmpl(id){
  let newEmpl  =[...addEmpl.filter((item) => item.id!==id)]
  setAddEmpl(newEmpl);
}

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>

        <EmployeesAddForm saveEmpl={saveEmpl} />   

        {addEmpl.map((item) => {
          return (
               <EmployeesListItem
                item={item}
                key = {item.id} 
                deleteEmpl={deleteEmpl}
          />
          )

        })}
    </div>
  );
}

export default App;