import React from "react";
import SearchBarComp from "./SearchBarComp"
import ThemeToggleComp from "./ThemeToggleComp"
import FilterButtonComp from "./FilterButtonComp"

function HeaderComp(){
    return( 
    <div className="header-comp">
        <SearchBarComp />
    </div>
    );
}

export default HeaderComp

