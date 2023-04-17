// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import React, { useState } from 'react';
import Alert from './Components/Alert'
import About from './Components/About';
                                                              
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // BrowserRouter
} from "react-router-dom";

function App() {

  // Creating Dark mode in app.js file itself
  const [mode, setMode] = useState('light');
          
  //  setalert is a function and inside it show =alert is an object.
 const [alert, setAlert] = useState(null);

 const showAlert = (message,type)=>{
   setAlert({
     msg : message,
     type : type
   })
                                                                             
  //  Alert will be vanished within the given time 
  setTimeout(() => {
    setAlert(null);
  }, 1000);
}
   
// This function will be used to remove the previous background colour.
const removePrevClasses=()=>{
  document.body.classList.remove('bg-primary')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-warning')
}
                                                    
 const toggleMode = (cls)=>{
  console.log(cls);
  removePrevClasses();
  document.body.classList.add('bg-' + cls);
     if(mode ==='light'){
       setMode('dark');
       document.body.style.backgroundColor = 'rgb(32, 7, 62)';
       showAlert("Dark mode has been enabled" , "success");

      //  To get some change in title 
      // e.g while clicking dark mode, we want to get it written in the title, we'll do
      document.title = 'TextUtilis - Dark Mode'

      // Now if we want to give any message on title like install ye wo, then within given time. This is specially used in G-Mail to show the messages.
    // setInterval(()=>{
    //  document.title = 'Install TextMess now'
    // }, 2000)
     }
                                    
     else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , "success");
      document.title = 'TextUtilis - Light Mode'

     }
  }

  return (
          
<>
    <Router>
 <Navbar title={"TextUtlis"}  mode={mode} toggleMode={toggleMode} />
 <Alert alert={alert} />
 <div className="container">
  
 <Switch>

         <Route exact path="/">
         <TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode={mode} />
         </Route>
          <Route exact path="/about">
          <About mode={mode}/>
          </Route>
            
        </Switch>
        
        </div>
</Router>
</>

  );
}

export default App;
