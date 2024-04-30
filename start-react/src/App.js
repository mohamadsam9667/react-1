import React, { useState } from 'react';
import "./App.css";

function App() {
  const [courselist, setCourselist] = useState([]);
  const [newcourse, setNewCourse] = useState("");

  const handelChange = (event) => {
    setNewCourse(event.target.value);
  }

  const addCourse = () => {
    setCourselist([...courselist, newcourse]);
    setNewCourse(""); // Reset input after adding course
  }

  const deleteCourse = (course) => {
    const newCourseList = courselist.filter((courselistName) => {
      return courselistName !== course;
    });
    setCourselist(newCourseList);
  }

  return (
    <div className="App">
      <div className="add-courses">
        <input type="text" value={newcourse} onChange={handelChange} />
        <button onClick={addCourse}>Add Course</button>
      </div>
      <div className="list">
        {courselist.map((course, index) => {
          return (
            <div key={index}>
              <h1>{course}</h1>
              <button onClick={() => deleteCourse(course)}>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
