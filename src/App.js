import React, {useState}  from "react"; 
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";

function App() {
  const [mode, setMode] = useState('light');
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'light'
  });
  const toggleMode = ()=> {
    if(mode === 'dark') {
      setMode('light')
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      document.body.style.backgroundColor = 'white'
    }else{
      setMode('dark')
      setMyStyle({
        color: 'white',
        backgroundColor: '#022902'
      })
      document.body.style.backgroundColor = '#011504'
    }
  };
  return (
    <React.Fragment>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      
      <div className="container my-1">
        <TextForm heading="Enter the text to analyze below" mode={mode} myStyle={myStyle}/>
      </div>


    </React.Fragment>
  );
}

export default App;
