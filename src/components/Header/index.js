import React from "react";
import Navigation from "../Navigation";

function Header(props){
  const { currentTab, setCurrentTab } = props;

  return (
   <header>
         <div>
           <h1><a href="about" style={{textDecoration: 'none'}}> Madison Kendall</a></h1>
         </div>
         <div>
               <Navigation
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                ></Navigation>
         </div>
   </header>
  );
}

export default Header;
