import React, { useState } from "react";

import QuerryPlaces from "./SearchBar/QuerryPlaces";
import { Link } from "react-router-dom";
import "./searchBarMobile.css";

function SearchBarMobile() {
  function onPanelChange(value, mode) {
    console.log(value, mode);
  }

  return (
    <div className="container-fluid bg-black pt-5">
      <div className=" container bg-white mx-auto  w-full rounded-full d-flex justify-center items-center">
        <i className="fa fa-search ml-4 mr-2 text-primary-color"></i>
        <input
          className=" text-sm border-0 outline-none px-1 py-3 bg-transparent"
          type="text"
          placeholder="Bạn muốn đi đâu?"
        />
      </div>
    </div>
  );
}

export default SearchBarMobile;
