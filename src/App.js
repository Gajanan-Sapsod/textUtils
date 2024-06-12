import { useState } from "react";
import "./App.css";
import About from "./Componenets/About";
import Form from "./Componenets/Form";
import Navbar from "./Componenets/Navbar";
import Alert from "./Componenets/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
   
  });

  const [alert, setAlert] = useState(null);

  let showalert = (msg, type) => {
    setAlert({
      msg: msg,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }
      , 1500);
  }

  

  let toggleMode = () => {
    console.log("Toggle is clicked");

    if (myStyle.color === "white")
    {
        setMyStyle({
          color: "black",
          backgroundColor: "white",
           
        });
      document.body.style.backgroundColor = "white";
      showalert("White mode has been enabled", "success");
       
    }
    else {
        setMyStyle({
          color: "white",
          backgroundColor: "#042743",
           
        });
      document.body.style.backgroundColor = "#042743";
      showalert("dark mode has been enabled", "success");
        
    }

    
  }

  return (
    <>
    <Router>
      <Navbar title="Text Formatter" about="About us" style={myStyle} toggleFunc={toggleMode} />
      <Alert alert={alert}/>
     
      
      <Routes>
          <Route path="/about"
            element={<About myStyle={ myStyle} />}/>
         
          <Route path="/"
            element={<Form style={myStyle} showalert={showalert}/>}/>
         
         
        </Routes>
      
   
      </Router>
    </>
  );
}

export default App;
