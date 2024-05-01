import React, { useState } from 'react';
import "./App.css";

function App() {

  const [courslist,setCourselist]=useState([]);
  const [newText,setNewText]=useState("");

  const handel_new_text=(event)=>{
    setNewText(event.target.value);
  }

  const output_text=()=>{

    const newCourse=[...courslist,newText];
    setCourselist(newCourse);
    console.log(courslist);
      setNewText(" ")
  }
  const deleteCourse=(course)=>{
    const courses=courslist.filter((coursefilter)=>{
      if(coursefilter===course) return false;
      else return true;
    })
    setCourselist(courses)
  }


  return(
    <div className='App'>

        <div className='information'>
        <input value={newText} type='text' onChange={handel_new_text}></input>
        <button onClick={output_text} >click me</button>
        </div>
   

    <div className='list'>
    
    {courslist.map((course)=>{

      return(
        <div>

        <h1>{course}</h1>
        <button onClick={() => deleteCourse(course)}>x</button>


      </div>
    )
    
    
  })}

    
    </div>


    </div>

  )





}

export default App;
