// import logo from './logo.svg';
import  "./App.css" 
import {useState} from 'react'

function App() {
  
  const [showText,SetshowText]=useState(true)
  const handelShow=()=>{
   SetshowText(!showText);
  }

    return(
    <div className="App">
      <button onClick={handelShow}>interest</button>
     { showText && <h1 >sam  </h1>}


    </div>
    )


}
export default App;
