import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
       <div className="mobile-header">
         <Header></Header>
       </div>
       <div>
         <Footer></Footer>
       </div>
    </div>
  );
}

export default App;
