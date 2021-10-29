import React from "react";
import './search-box.css';

export const SearchBox = ({placeholder, handleChange}) => (
  <input
  ClassName='search'
  type='search'
  placeholder={placeholder}
  onChange={handleChange}
  />
)