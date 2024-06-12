import React, {useState } from 'react'

export default function Form(props) {
   

    const [text, setText] = useState("");  
    //console.log(text);

    const handleUp = () => {
        //console.log("To Uppercase is clicked");
        setText(text.toUpperCase());
        props.showalert("Converted to Upper case", "success");
    }


    const handleClear = () => {
        //console.log("To Uppercase is clicked");
        setText("");
        props.showalert("cleared the text", "success");

    }

    const handleLower = () => {
        //console.log("To Lowercase is clicked");
        setText(text.toLowerCase());
        props.showalert("Converted to lower case", "success");

    }
    

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showalert("text copied to clipboard", "success");

    }

    const handleWhite = () => {
        //console.log("handleWhite is clciked");
        let str = text.split(" ");
        //console.log(str)
        let retStr = "";
        for (let i = 0; i < str.length; i++)
        {
            if (str[i] !== "") {
                retStr += str[i];
                retStr += " ";
            }
            //console.log(retStr);
        }
        setText(retStr);
        props.showalert("White spaces removed", "success");

    }

    const handleChange = (event) => {
        setText(event.target.value);
    }
    
  return (
      <div className="mb-3 my-3 mx-3 " style={ props.style}>
        <h1>Enter the text</h1>
        <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
              value={text}
              onChange={handleChange}
              
        ></textarea>

      <button type="submit" disabled={text.length===0}className="btn btn-primary my-3 mx-3" onClick={handleLower}>To LowerCase</button>
      <button type="submit" disabled={text.length===0}className="btn btn-primary my-3 mx-3" onClick={handleUp}>To UpperCase</button>
      <button type="submit" disabled={text.length===0}className="btn btn-primary my-3 mx-3" onClick={handleClear}>To Clear text</button>
      <button type="submit" disabled={text.length===0}className="btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy text</button>
      <button type="submit" disabled={text.length===0}className="btn btn-primary my-3 mx-3" onClick={handleWhite}>Remove white spaces</button>
      <div className='my-3'>
              <h2>Your text summary</h2>
              <span>No of characters={text.length - text.split(" ").length+1}</span> 
              <br></br>
              <span>No. of words={text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</span>
              <h2>Preview</h2>
              <span>{text.length!==0? text: "No preview!"}</span>
      </div>
      </div>
  )
}
