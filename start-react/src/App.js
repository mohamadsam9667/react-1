import React, { useState } from 'react';
import "./App.css";
import Course from './Course';

function App() {

  const [courselist,setCourselist]=useState([]);
  const [newText,setNewText]=useState("");

  const handel_new_text=(event)=>{
    setNewText(event.target.value);
  }

  const output_text=()=>{
    const course={
      id: courselist.length === 0 ? 1 : courselist[courselist.length-1].id+1,
      courseName:newText
    }
    setCourselist([...courselist,course]);
    console.log(courselist);
      setNewText(" ")
  }


  const deleteCourse=(courseId)=>{
    const courses=courselist.filter((course)=>{
    return courseId!==course.id;
    });
    setCourselist(courses);
  }


  return(
    <div className='App'>

        <div className='information'>
        <input value={newText} type='text' onChange={handel_new_text}></input>
        <button onClick={output_text} >click me</button>
        </div>
   

    <div className='list'>
    
    {courselist.map((course,index)=>{
      return( <Course key={index} course={course} deleteCourse={deleteCourse} /> )
    
    
  })}

    
    </div>


    </div>

  )





}

export default App;
