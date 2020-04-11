import React from 'react';
  
const Search = ({ searchfield, searchChange}) => {
    return (
    <div>
        <input 
        type='search'
        placeholder='search contacts'
        onChange={searchChange}
        />
    </div>
    );
}

export default Search;