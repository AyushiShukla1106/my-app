import './App.css';

//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
  
//   Route,
//  Routes
  
// } from "react-router-dom"

function App() {

  // whether dark mode is enabled or not
  const[mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

const showAlert= (message,type)=>{
    setAlert({
       msg: message,
       type: type
     } )

  setTimeout(() => {
   setAlert(null);
 }, 1500);
}
const toggleMode=()=>{
 if(mode === 'light'){
 setMode ('dark');
 document.body.style.backgroundColor = '#042743';
 showAlert("Dark mode has been enabled","success");
}
else{
  setMode ('light');
  document.body.style.backgroundColor = 'white';
  showAlert("Light mode has been enabled", "success");
 }
}
  return ( 
     <>
 {/* <Navbar title="Cart" about="About you"/> */}

 {/* <Router> */}
 <Navbar title="Cart" mode = {mode} toggleMode={toggleMode} />

 <Alert alert={alert}/>

 <div className = "container my-3">
     {/* <Route path="/about"> */}
     {/* <About/> */}
    {/* </Route> */}
{/* //     <Route path="/"> */}
    {/* <BrowserRouter> */}
     {/* <Routes>
      <Route path="/about" element={<About/>}/>
          */}
          
  <TextForm showAlert={showAlert} heading="Enter the text to analyse " mode={mode}/> 
        {/* </Routes> */}
         {/* </BrowserRouter> */}
      
 </div>
  

   {/* </Router> */}
   </>
   );
 }




// return (
//     <>
//       <Router>
//         <Navbar  changeColor={changeColor} mode={mode} title="Cart" aboutText="About" toggleMode={toggleMode}/>
//         <Alert alert={alert}/>
//         <div className="container my-3" >
//           <Routes>
//             <Route path="/about" element={<About />}/>
//             <Route path="/" element={<TextForm color={color} showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"/>}/>
//           </Routes>
//         </div>
//       </Router>  
//     </>
//   );
// }

export default App;
