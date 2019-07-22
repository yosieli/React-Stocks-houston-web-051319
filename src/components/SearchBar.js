import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.searchTerm} onChange={e => {props.onSerach(e.target.value)}}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.searchTerm} onChange={e => {props.onSerach(e.target.value)}}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={e => {props.onSerach(e.target.value)}}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
