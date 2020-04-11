import React from 'react';
  
const Search = ({ searchfield, searchChange}) => {
    return (
    <div className='pa2'>
        <input 
        className='pa3 b--green'
        type='search'
        placeholder='search contacts'
        onChange={searchChange}
        />
    </div>
    );
}

export default Search;