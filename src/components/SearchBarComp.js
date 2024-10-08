import './Components.css';

const SearchBarComp = ({ value, onChange }) => {
    return (
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search Docker files..."
        className="search-bar"
      />
    );
  };

export default SearchBarComp