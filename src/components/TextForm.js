import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Up-button click");
    let upText = text.toUpperCase();
    setText(upText);
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter your text");

  return (
    <React.Fragment>
        <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        </div>

        <div className="container my-3 mx-1">
            <h2>Your text summery</h2>

            <p>{text.split(" ").length} words and {text.length} chatactors</p>           
        </div>

        
    </React.Fragment>
  );
}


