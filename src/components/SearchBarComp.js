import './Components.css';

function SearchBarComp(){
    return(
        <div className="search-bar">
            <input type='text' placeholder='search....' className="search-input"></input>
            <button type='submit' className='search-button'></button>
        </div>
    );
}

export default SearchBarComp