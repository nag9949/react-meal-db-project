import React from "react";
import { useRef, useEffect } from "react";

export default function SearchForm({ setSearchTerm }) {
  const searchValue = useRef("");

  // for every rendering inputElement get Foucused
  useEffect(() => {
    searchValue.current.focus();
  });

  // updating the state of SearchTerm
  const handleSearch = () => {
    setSearchTerm(searchValue.current.value);
  };

  // preventing by default feature (refreshing the page)
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="my-5 text-capitalize">
      <h3 className="mb-3">Search your favourite Meal</h3>

      <form onSubmit={handleSubmit} className="form-group my-4">
        <input
          type="text"
          className="form-control text-center"
          placeholder="enter your favourite meal"
          ref={searchValue}
          onChange={handleSearch}
        />
      </form>
    </header>
  );
}
