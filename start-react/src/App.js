import logo from './logo.svg';
import './App.css';

function App() {
  const User=(props)=>{
    return(
    <div>
        <h1><em>{props.name}</em></h1>
        <h2>{props.age}</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NSEUHWmQsGxt4SfVM3f8VMW7vN8JsHnL-CnVII5E4A&s">{props.src}</img>
        <h3><em>{props.email}</em></h3>

    </div>
    )
  }
  return(
    <div>
      <User name="sam" age={45} email="mohamadsam9667@gmail.com" ></User>
      <User name="sara" age={30} email="reza2zt@gmail.com" img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NSEUHWmQsGxt4SfVM3f8VMW7vN8JsHnL-CnVII5E4A&s">                      </User>
      <User>                      </User>



    </div>  
    
  
  
  )


 


}

export default App;
/* const GetName = (name) => {
    return name;
  } 
    // //props
    // const props={
    //   name:"sarvin",
    //   age:34,
    //   email:ziba;
    // }

const User = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h2>{props.email}</h2>
    </div>
  )
}

  return (
    <div>
      <User name="sara" age={45} email="sam.ir" ></User>
      <User></User>
    </div>
  )*/ 