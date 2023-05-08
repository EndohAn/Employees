import './empl-add-form.css';
import React, { useState } from 'react';

const EmployeesAddForm = ({saveEmpl}) => {


const[userInput,setUserInput] = useState('');

const handleSubmit=(e)=>{
   e.preventDefault()
   saveEmpl(userInput)
   setUserInput('');
}

const handleChange =(e)=>{
      setUserInput(e.target.value)

}

const handleKeyPress =(e)=>{
      if(e.key ==="Enter"){
        handleSubmit(e)
      }
}


  
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form onSubmit={handleSubmit}
                  className="add-form d-flex">

                <input type="text"
                       className="form-control new-post-label"
                       placeholder="Как его зовут?"
                       value={userInput}
                       onChange ={handleChange}
                       onKeyDown={handleKeyPress} />

                {/* <input type="number"
                       className="form-control new-post-label"
                       placeholder="З/П в $?"
                       value={money}
                       onChange ={(e)=>setMoney(e.target.value)} /> */}

                <button type="submit"
                        className="btn btn-outline-light" >Добавить</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;