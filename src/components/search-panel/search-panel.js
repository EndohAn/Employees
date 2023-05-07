import './search-panel.css';

const SearchPanel = () => {
    function searchEmpl(e){
       
        console.log(e.target.value);
    }
    return (
        <input type="text"
               className="form-control search-input"
               placeholder="Найти сотрудника"
               onChange={searchEmpl}/>
    )
}

export default SearchPanel;