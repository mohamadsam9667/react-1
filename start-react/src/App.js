// import logo from './logo.svg';
import  "./App.css" 
import {useState} from 'react'

function App() {
  
  const [colorText,SetcolorText]=useState("red")
 
  const handelShow=()=>{
 
    SetshowText(!showText);
 
  }

    return(
    <div className="App">
      <button onClick={()=>{SetcolorText("green" )}}>interest</button>
     {  <h1 style={{color :colorText}} >sam  </h1>}


    </div>
    )


}
export default App;
