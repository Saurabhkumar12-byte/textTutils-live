// import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, changeMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert= (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    
    setTimeout(() => {
      setAlert(null)
    }, 3500);
  };
  const toggleMode=()=> {
    console.log('hi');
    if (mode === 'light') {
      changeMode('dark');
      document.body.style.backgroundColor="rgb(3 16 45)";
      showAlert("Dark Mode enabled","success");
      document.title="textTutils-Dark Mode";
      
    } else {
      changeMode('light');
      document.body.style.backgroundColor="white";
      showAlert("light Mode enabled","success");
      document.title="textTutils-light Mode";

      
    }
  }

  return (
    <>
      <Navbar title="textTutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <TextForm heading="Enter your text"  mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
