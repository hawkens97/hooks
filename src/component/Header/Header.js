import React from "react";
import Rating from "../Rating";
import "./Header.css";
import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";

const Header = ({ setSearchName, setSearchRate }) => {
  const [rate, setRate] = useState(0);
  const [search, setSearch] = useState("");

  const getRatingInput = (rating) => {
    setRate(rating);
    setSearchName(search);
    setSearchRate(rating);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setSearchName(e.target.value);
    setSearchRate(rate);
  };

  return (
    <div className="nav">
      <Form inline>
        <h1>Enjoy Watching Movies</h1>
      </Form>

      <Form inline>
        <div className="search">
          <FormControl
            type="text"
            placeholder="Search A Movies.."
            className="mr-  -2"
            onChange={handleSearch}
          />
          <Rating getRatingInput={getRatingInput} />
        </div>
      </Form>
    </div>
  );
};

export default Header;
