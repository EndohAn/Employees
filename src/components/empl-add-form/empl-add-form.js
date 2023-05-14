
import React, { useState } from 'react';
import './empl-add-form.css';



const EmployeesAddForm = ({ onAdd }) => {
      const [name, setName] = useState('');
      const [salary, setSalary] = useState('');
    
      const onValueChange = (e) => {
        if (e.target.name === 'name') {
          setName(e.target.value);
        } else if (e.target.name === 'salary') {
          setSalary(e.target.value);
        }
      };
    
      const onSubmit = (e) => {
        e.preventDefault();
        if (name.length < 3 || !salary) return;
        onAdd(name, salary);
        setName('');
        setSalary('');
      };
    
      return (
        <div className="app-add-form">
          <h3>Добавьте нового сотрудника</h3>
          <form className="add-form d-flex" onSubmit={onSubmit}>
            <input
              type="text"
              className="form-control new-post-label"
              placeholder="Как его зовут?"
              name="name"
              value={name}
              onChange={onValueChange}
            />
            <input
              type="number"
              className="form-control new-post-label"
              placeholder="З/П в $?"
              name="salary"
              value={salary}
              onChange={onValueChange}
            />
    
            <button type="submit" className="btn btn-outline-light">
              Добавить
            </button>
          </form>
        </div>
      );
    };
    

export default EmployeesAddForm;
