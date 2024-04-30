// import logo from './logo.svg';
import  "./App.css" 
import {useState} from 'react'

function App() {
  
  const [Teextcolor,setTextcolor]=useState("red")


  return(
    <div className="App">
    
    <button onClick={()=>{setTextcolor(if(Teextcolor==="red") Teextcolor==="blue"else if(Teextcolor==="blue") Teextcolor="yellow"  )}}>click me</button>
    <h1 style={{color:Teextcolor}}>sam is god</h1>
    

    </div>
  )

 


}
export default App;
