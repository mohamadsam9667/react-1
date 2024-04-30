// import logo from './logo.svg';
import  "./App.css" 
import {useState} from 'react'

function App() {
  
  const [Teextcolor,setTextcolor]=useState("red")


  return(
    <div className="App">
    
    <button onClick={()=>{
      switch(Teextcolor){
        case "red": setTextcolor("blue");
        break;
        case "blue":setTextcolor("yellow");
        break;
        case "yellow":setTextcolor("green")
        break;
        case "green":setTextcolor("red")
       
      } 
    }}>click me</button>
    <h1 style={{color:Teextcolor}}>sam is god</h1>
    

    </div>
  )

 


}
export default App;
