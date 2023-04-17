import React, { useState } from 'react';


 function About(props) {
                                               
    // Using states and hooks 
    // const [myStyle, setMyStyle] = useState({
    //               color : 'black',
    //     backgroundColor : 'white'
    // })

    // const [btnText, setbtnText] = useState("Enable Dark Mode")
    
    // THis was for dark mode button enabled in about text para 
    // const toggleStyle=()=>{
    //     if(myStyle.color =='black'){
    //         setMyStyle({
    //             color : 'white',
    //             backgroundColor : 'black'
    //         })
    //         setbtnText("Enable Light Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color : 'black',
    //             backgroundColor : 'white'
    //         })
    //         setbtnText("Enable Dark Mode")
    //     }
    // }
   
    let myStyle = {
        color: props.mode ==='dark'?'white':'#120324',
        backgroundColor: props.mode === 'dark'?'#120324':'white'
    }

  return (
    <> 
    <div className="container" style={myStyle}>
          <h1>About us</h1>
          <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
              <div className="accordion-item" style={myStyle}>
                  <h2 className="accordion-header" id="flush-headingOne">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"style={myStyle}>
                          <strong>Analize your text</strong>
                      </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body" style={myStyle}>One can easily analyze the text he/she has written.</div>
                  </div>
              </div>
              <div className="accordion-item" style={myStyle}>
                  <h2 className="accordion-header" id="flush-headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={myStyle}>
                      <strong>Edit your text</strong>
                      </button>  
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">One can easily modify or edit the written text in upper case or lower case with just one click.</div>
                  </div>
              </div>
              <div className="accordion-item" style={myStyle}>
                  <h2 className="accordion-header" id="flush-headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={myStyle}>
                      <strong>Free to use</strong>
                      </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">One can use it at any time with free of cost.</div>
                  </div>
              </div>
      </div>
      {/* <div className="container ">
      <button type="button" class="btn btn-outline-secondary my-4" onClick={toggleStyle} >{btnText}</button>
                    </div> */}
        </div>
        </>
  )
}
export default About
