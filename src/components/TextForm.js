import React, { useState } from "react";

export default function TextForm(props) {
  const handleReset = () => {
    setText("");
  };
  const handleUpClick = () => {
    let upText = text.toUpperCase();
    setText(upText);
    props.showAlert("Converted into UpperCase","success: ")
  };
  const handleLowClick = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert("Converted into Lowercase","success: ")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    let copyText = document.getElementById("exampleFormControlTextarea1");

    /* Select the text field */
    copyText.select();
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    // for showing alert massage
    props.showAlert("Copied into clipboard","success: ")
  };
  const clearSpaces = () => {
    let netText = text.split(/[ ]+/);
    setText(netText.join(" "));
  };

  const [text, setText] = useState("");

  return (
    <React.Fragment>
      <div className="container">
        <h1 style={{color:`${props.mode === 'light'?'black':'#96FF9B'}`}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={props.myStyle}
            className="form-control"
            placeholder={text.length > 0 ? text : "Enter your text"}
            value={text}    
            onChange={handleOnChange} 
            id="exampleFormControlTextarea1"
            rows="9"
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-outline-success mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-outline-success mx-1 my-1"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-outline-success mx-1 my-1"
          onClick={clearSpaces}
        >
          Remove extra spaces
        </button>

        <button
          type="button"
          className="btn btn-outline-success mx-1 my-1"
          onClick={handleCopy}
        >
          CopyText
        </button>

        <button
          className="btn btn-success mx-1"
          type="reset"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      {/* For text Summery */}
      <div className="container my-3" style={{color:`${props.mode === 'light'?'black':'#96FF9B'}`}}>
        <h2>Your text summery</h2>
        <h6>
          {wordCounter(text)} words and {text.length} characters{" "}
        </h6>
      </div>
    </React.Fragment>
  );
}

//wordCounter function
function wordCounter(str){
  let str1 = str.split(/[ ]+/);
  str = str1.join(" ");
  let str2 = str.split(/[ ]+/);

  if(str.length === 0){
    return 0;
  } else if (str.length > 0 && (!str.endsWith(" ")) && (str2.length >= 1)){
    return (str2.length === 1 ? 1 : str.split(" ").length);
  }else {
    if (str.startsWith(" ")){
      return (str.split(" ").length-2);
    }
    return (str.split(" ").length-1);
  }
}
