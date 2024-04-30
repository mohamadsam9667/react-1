// import logo from './logo.svg';
import  "./App.css" 
import {useState} from 'react'

function App() {

      const [count,setCount]=useState(0)

      return(
        <div className="App">
          <button onClick={()=>setCount(count+1)}>increse</button>
          <button onClick={()=>setCount(count-1)}>decrease</button>
          {/* <button onClick={()=>setCount()}></button> */}
          <h1 >{count}</h1>

        </div>
      )

}
export default App;
