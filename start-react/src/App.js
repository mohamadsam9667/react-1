// import logo from './logo.svg';
import  "./App.css" 
import {useState} from 'react'
// start project with react
function App() {
  
  const [courselist,setCourselist]=useState([]);
  const [newcourse,setNewCourse]=useState("");


  const handelChange=(event)=>{
     setNewCourse(event.target.value)
  }

  // const addCourse=()=>{
  //   let arr=[];
  //   const name="sarvin";
  //   arr.push(name)
  // }

  return(
    <div className="App">
    {/* <h1>sam</h1> */}
    <div className="add-courses"> 
    <input type="text" onChange={handelChange}></input>

    <button onClick={}>add course</button>
    </div>
    {newcourse}
    <div className="list"></div>
    </div>
  )


      

}
export default App;
