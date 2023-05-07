import './empl-add-form.css';
import React, { useState } from 'react';

const EmployeesAddForm = ({addEmpl,setAddEmpl}) => {

const[value,setValue]=useState('');
const[money,setMoney] =useState();

function saveEmpl(){
     setAddEmpl(
        [...addEmpl,
            {
                name:value,
                salary:money ,
                increase:false,
                id:4            
                
        }]
     )
     setValue('');
     setMoney();

}

   
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    value={value}
                    onChange ={(e)=>setValue(e.target.value)} />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    value={money}
                    onChange ={(e)=>setMoney(e.target.value)} />

                <button type="submit"
                        className="btn btn-outline-light"
                        onClick={saveEmpl}>Добавить</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;