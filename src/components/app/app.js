

import React, { useState } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../empl-list/empl-list';
import EmployeesAddForm from '../empl-add-form/empl-add-form';
import { v4 as uuidv4 } from 'uuid';


const App = () => {
  const [data, setData] = useState([
    { name: 'John C.', salary: 800, increase: false, rise: true, id: 1 },
    { name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2 },
    { name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 }
  ]);

  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');
  // const maxId = useRef(4);

  const deleteItem = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: uuidv4()
    };
    setData((prevData) => [...prevData, newItem]);
  };

  const onToggleProp = (id, prop) => {
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      });
    });
  };

  const searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => item.name.indexOf(term) > -1);
  };

  const onUpdateSearch = (term) => {
    setTerm(term);
  };

  const filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter((item) => item.rise);
      case 'moreThen1000':
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  const onFilterSelect = (filter) => {
    setFilter(filter);
  };

  const employees = data.length;
  const increased = data.filter((item) => item.increase).length;
  const visibleData = filterPost(searchEmp(data, term), filter);

  return (
    <div className="app">
      <AppInfo employees={employees} increased={increased} />

      <div className="search-panel">
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <AppFilter filter={filter} onFilterSelect={onFilterSelect} />
      </div>

       <EmployeesList data={visibleData} onDelete={deleteItem} onToggleProp={onToggleProp} /> 
      <EmployeesAddForm onAdd={addItem} />
    </div>
  );
};

export default App;
