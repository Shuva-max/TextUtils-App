import React from "react"; 
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar title="TextUtils"/>
      
      <div className="container">
        <TextForm heading="Enter the text to analyze below"/>
      </div>


    </React.Fragment>
  );
}

export default App;
