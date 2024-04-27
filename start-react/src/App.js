// import logo from './logo.svg';
import  "./App.css"

function App() {
  let age=20;
  const IncreaseAge=()=>{
    age=age+1;
    console.log(age);
  }


  return(
    <div className="App">
      
      <h1> {age} </h1>
      <button onClick={IncreaseAge}>Increase age </button>
    </div>
  )  


}
export default App;
/*

      {/* <h1>{sam}</h1>
      // const sam=21;
 const GetName = (name) => {
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
  )
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
  const Job=(props)=>{
    return(
      <div>
      <h1>{props.salery}</h1>
      <h2>{props.position}</h2>
      <p>{props.company}</p>
      </div>
    )
   }
   
   return(
    <div>
    <Job salery="sam" position={4} company="metric american"></Job>
    <Job salery="yalda" position={10} company="iran yasa"></Job>
    </div>
  )

 const list=["abolfazle","sam","yazdan","mamad","sara"];
   return(
  <div className="App">
    
    {list.map((name,index)=>{
    return <h1 ket={index} >{name}</h1>
      
    })}

  </div>

  )

  */ 