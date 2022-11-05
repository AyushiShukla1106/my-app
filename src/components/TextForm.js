import React, {useState} from 'react'

export default function TextForm(props) {

const functionUpper = ()=> {
// console.log("Uppercase was clciked" + text);
let newText = text.toUpperCase();
 setText(newText)
 props.showAlert("Converted to Upper Case","success");
}

const functionLower = ()=> {
    let newText = text.toLowerCase();
 setText(newText)
 props.showAlert("Converted to Lower Case","success");
}

const functionClear = ()=> {
    let newText = " "
 setText(newText)
 props.showAlert("Text Cleared","success");
}
// onchange is used for writing text

const handleOnChange = (event)=> {
    // console.log("On Change");
    setText(event.target.value);
    }

    const handleCopy = () => {
      var text = document.getElementById("MyBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard","success");
    }

    

//console.log(useState("Enter text here"));
// setText("Ayushi Shukla");
//  const [text, setText] = useState("Enter text here");
const [text, setText] = useState("");
  return ( 
    <>
    <div className = "container" style={{color:props.mode==='dark'?'white':'#072b60'}}>
  <h1>{props.heading}</h1>
<div class="mb-3">
 
  <textarea className='form-control' value = {text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'#0b4396='}} id="MyBox" rows="8"></textarea>
</div>
        {/*mx-2 is used gor margin between two buttons, it is a bootstrap command  */}
     <button className='btn btn-primary mx-1' onClick = {functionUpper}>UpperCase</button> 
      
      <button className='btn btn-primary mx-1' onClick = {functionLower}> LowerCase</button>

      <button className='btn btn-primary mx-1' onClick = {functionClear}>ClearText</button> 

      <button className='btn btn-primary mx-1' onClick = {handleCopy}>CopyText</button>

      {/* <button className='btn btn-primary mx-1' onClick = {handleRemoveExtraSpaces}>RemoveExtraSpace</button> */}

       </div> 

       

        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h4> Preview</h4>
            <p>{text.length>0 ? text:'Enter something to preview your text'}</p>
        </div>
        </>
  )
}
