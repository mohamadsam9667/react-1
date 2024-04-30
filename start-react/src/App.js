import React, { useState } from 'react';
import "./App.css";

function App() {
  const [courselist,setCourselist]=useState([])
  const [newText,setnewText]=useState("");
  
  const recordText=(event)=>{
    setnewText(event.target.value);
  }



  const addCourse=()=>{

    const newCourselist=[...courselist,newText]
    setCourselist(newCourselist)
    console.log(courselist);
    setnewText(" ")
    // let arr=[];
    // const name="";
    // arr.push(name);
  }


  const delet=(course)=>{

  const newCourselist=courselist.filter((courses)=>{
    if(courses===course) return false 
    else return true
  })
  setCourselist(newCourselist);
  
  
  
  // const array=["sam","sara","zeynab"];
  // const Answer=array.filter((name)=>{
  //   if(name===course)
  //   {
  //     return false;
  //   }
  //   else 
  //   return true;


  // }
  }




  return(
    <div className="App">

      <div className='information'>
        
        <input value={newText} onChange={recordText}></input><br></br>
        <button onClick={addCourse}>click me</button>





      </div>


      <div className="list">
        {courselist.map((course)=>{
          return (
        <div>
          <h1>{course}</h1>
          <button onClick={()=>delet(course)}>x</button>
        </div>
        )
        })}

        


      </div>

    </div>
  )



}

export default App;
