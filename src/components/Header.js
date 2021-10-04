import React from "react";
import Search from "./Search";

//set search input to state
//handle changes of input
//pass search input to App & filter listings based on search input


function Header({ onSearchSubmit}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchSubmit={onSearchSubmit} />
    </header>
  );
}

export default Header;
