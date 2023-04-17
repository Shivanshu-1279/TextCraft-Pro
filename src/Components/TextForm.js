// import React from 'react'
import React, { useState } from 'react';

export default function TextForm(props) {
     
// All the operations are written below as functions 
const handleUpClick = ()=>{
    // console.log("Uppercase was clicked " + text);
    // Now to convert it in upper case: we'll use
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case" , "success");
}
                                                                           
const handleDownClick=()=>{
    let newText2 = text.toLowerCase();
    setText(newText2);
    props.showAlert("Converted to Lower Case" , "success");
}
                                  
const handleClearClick=()=>{
    setText("");
    props.showAlert("Cleared" , "success");
}

const whiteSpace=()=>{
  let newText3 = text.trim();
  setText(newText3);
  props.showAlert("Removed Extra Space", "success");
}

const handleOnChange = (event)=>{
    // console.log("on change");
    setText(event.target.value)
}

  
    // Using state and hooks 
    // here set has been given by default value and setText is a function we can use to update it anywhere.
    const [text, setText] = useState("");
    // text = "Enter this way"  This is not applicable, we can't use this to change the text 
    // setText("Enter this way")  we can use this way to change the value

    // Whenever we write a Javascript we use "{}" and when we use function in it we use "{}"
  return (
    <>
    <div>
<h1 style={{color: props.mode === "dark"?"white": "black" }}>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="my box" className="form-label">Example textarea</label> */}
  <textarea className="form-control " value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark"?"#321653": "white" , color: props.mode === "dark"?"white": "black" }} id="myBox" rows="8"></textarea>
 <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleUpClick}> Convert to UpperCase</button>
 <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleDownClick}>Convert on LowerCase</button>
 <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleClearClick}>Clear text</button>
 <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={whiteSpace}>Remove Extra Space</button>
                      
 {/* "disabled" function is used to diable the buttons when nothing is written. */}
                
</div>
    </div>
    <div className="container">
        <h2 style={{color: props.mode === "dark"?"white": "black" }}> Text Summary </h2>
        <p style={{color: props.mode === "dark"?"white": "black" }}>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters are present </p>
        {/* Filter is a high order array function */}
        </div>
        <div className="test">
        <h2 style={{color: props.mode === "dark"?"white": "black" }} >Preview</h2>
        <p style={{color: props.mode === "dark"?"white": "black" }}>{text.length>0?text : "___"}</p>
        </div>
    </>
  )
}
