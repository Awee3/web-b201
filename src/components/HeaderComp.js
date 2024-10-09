import React from "react";
import SearchBarComp from "./SearchBarComp"
import ThemeToggleComp from "./ThemeToggleComp"
import FilterButtonComp from "./FilterButtonComp"
import LogoComp from "./LogoComp"
import "@fontsource/libre-franklin";

function HeaderComp(){
    return( 
    <div className="header-comp">
        <LogoComp />
        <SearchBarComp />
        <ThemeToggleComp/>
        
    </div>
    );
}

export default HeaderComp

