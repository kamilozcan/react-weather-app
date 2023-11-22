import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

export const Search = ({ onSearchChange }) => {
  const [search, setSeach] = useState(null);

  const handleOnChange = (searchData) => {
    setSeach(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
    />
  );
};
