import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../empl-list/empl-list';
import EmployeesAddForm from '../empl-add-form/empl-add-form';

import './app.css';

function App() {

const data =[
    {name:"John Smith",salary:800 ,increase:false},
    {name:"Alex Stoun",salary:1000 ,increase:true},
    {name:"Phill Jackson",salary:5000 ,increase:false}

]

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;