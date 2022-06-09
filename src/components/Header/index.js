import React from "react";
import Navigation from "../Navigation";

function Header(){
  return (
   <header>
       <div>
         <h1>Madison Kendall's React Portfolio</h1>
       </div>
       <div>
         <Navigation></Navigation>
       </div>
    </header>
  );
}

export default Header;
