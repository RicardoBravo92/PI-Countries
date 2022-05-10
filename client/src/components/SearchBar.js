import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../actions";
import "../styles/SearchBar.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleOnClick = (e) => {
    e.preventDefault();

    if (search) {
      dispatch(getCountries(search));
      setSearch("");
    }
  };

  return (
    <div>
      <div className="Search" onClick={handleOnClick}>
        <input
          type="text"
          placeholder="Search Country..."
          onChange={handleOnChange}
          value={search}
          autoComplete="off"
        />
        <button className="Searchbutton" onClick={handleOnClick}>search</button>
      </div>
    </div>
  );
};
export default SearchBar;
