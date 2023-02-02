import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import "./App.css";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "light",
  });
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      document.body.style.backgroundColor = "#c1eab5";
      showAlert("LightMode enable successfully", "success: ");
      // for app title changing dynamically
      // document.title = "TextUtils";
    } else {
      setMode("dark");
      setMyStyle({
        color: "white",
        backgroundColor: "#022902",
      });
      document.body.style.backgroundColor = "#011504";
      showAlert("DarkMode enable successfully", "success: ");
      // for app title changing dynamically
      // document.title = "TextUtils - DarkMode";
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1550);
  };

  return (
    <React.Fragment>
      {/* Navber component */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

      {/* Alert component */}
      <Alert alert={alert} />

      {/* About component */}
      {/* <About mode={mode} myStyle={myStyle}/> */}

      {/* Textfield component */}
      <div className="container my-1">
        <TextForm heading="TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} myStyle={myStyle} showAlert={showAlert}/>
      </div>
    </React.Fragment>
  );
}

export default App;
