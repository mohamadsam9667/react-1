import logo from './logo.svg';
import './App.css';

function App() {
  const User=(props)=>{
    return(
    <div>
        <h1><em>{props.name}</em></h1>
        <h2>{props.age}</h2>
        <h3><em>{props.email}</em></h3>

    </div>
    )
  }
  return(
    <div>
      <User name="sam" age={45} email="mohamadsam9667@gmail.com" ></User>
      <User name="sara" age={30} email="reza2zt@gmail.com">                      </User>
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