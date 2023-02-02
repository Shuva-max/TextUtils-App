import React, { useState } from "react";

export default function TextForm(props) {
  const handleReset = () => {
    setText("");
    showMassage("Reset successfully", "success: ");
  };
  const handleUpClick = () => {
    let upText = text.toUpperCase();
    setText(upText);
    showMassage("Converted into UpperCase", "success: ");
  };
  const handleLowClick = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
    showMassage("Converted into Lowercase", "success: ");
  };

  // to write in our textfield area
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    if (text.length === 0) {
      props.showAlert("Please enter your text below!!", "warning: ");
    } else {
      let copyText = document.getElementById("exampleFormControlTextarea1");

      /* Select the text field */
      // copyText.select();
      /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.value);
      // for showing alert massage
      showMassage("Copied into clipboard", "success: ");
    }
  };
  const clearSpaces = () => {
    let netText = text.split(/[ ]+/);
    setText(netText.join(" "));
  };

  const showMassage = (massage, type) => {
    if (text.length === 0) {
      props.showAlert("Please enter your text below!!", "warning: ");
    } else {
      props.showAlert(massage, type);
    }
  };

  const [text, setText] = useState("");

  return (
    <React.Fragment>
      <div className="container">
        <div
          style={{ color: `${props.mode === "light" ? "black" : "#96FF9B"}` }}
        >
          <h1 className="mb-4 my-2">{props.heading}</h1>
        </div>

        <div className="mb-3">
          <textarea
            style={props.myStyle}
            className="form-control"
            placeholder={text.length > 0 ? "" : "Word Counter, Character Counter, uppercase to Lowercase, Lowercase to Uppercase"}
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="9"
          ></textarea>
        </div>

        <button
          disabled={characterCounter(text) === 0}
          type="button"
          className="btn btn-outline-success mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={characterCounter(text) === 0}
          type="button"
          className="btn btn-outline-success mx-1 my-1"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={characterCounter(text) === 0}
          type="button"
          className="btn btn-outline-success mx-1 my-1"
          onClick={clearSpaces}
        >
          Remove extra spaces
        </button>

        <button
          disabled={characterCounter(text) === 0}
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
      <div
        className="container my-3"
        style={{ color: `${props.mode === "light" ? "black" : "#96FF9B"}` }}
      >
        <h2>Your text summery</h2>
        <h6>
          {wordCounter(text)} words and {characterCounter(text)} characters
        </h6>
      </div>
    </React.Fragment>
  );
}

//wordCounter function
function wordCounter(str) {
  return str.split(/\s+/).filter((ele) => {
    return ele.length !== 0;
  }).length;
}
//characterCounter function
function characterCounter(str) {
  let char = str.split(/\s+/);
  let result = char.join("").length;
  return result;
}
