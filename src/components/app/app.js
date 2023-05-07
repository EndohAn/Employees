import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
// import EmployeesList from '../empl-list/empl-list';
import EmployeesAddForm from '../empl-add-form/empl-add-form';
import EmployeesListItem from '../empl-list-item/empl-list-item'
import { useState } from 'react';
import './app.css';

function App() {
  const [addEmpl,setAddEmpl]=useState([

    {name:"John Smith",salary:800 ,increase:false,id:1},
    {name:"Alex Stoun",salary:1000 ,increase:true,id:2},
    {name:"Phill Jackson",salary:5000 ,increase:false,id:3}
  ]);
// const data =[

// ]

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        {/* <EmployeesList data={data} addEmpl={addEmpl} setAddEmpl={setAddEmpl}/> */}
        <EmployeesListItem  addEmpl={addEmpl} setAddEmpl={setAddEmpl}/>
         {/* в пропс data  передаем массив данных {data} */}
        <EmployeesAddForm addEmpl={addEmpl} setAddEmpl={setAddEmpl}/>
    </div>
  );
}

export default App;