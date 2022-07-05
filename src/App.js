import './App.css'
import { useState , useEffect} from 'react'
import React from 'react'

// NOTE: UNCOMMENT ONE BY ONE 

// LEARNING FIRST THING IS RRACT IS PROPS
// const Person = (props) => {
 
//   return (<>
//  <h2>Name : {props.name}</h2>
//  <h2>Last Name : {props.LastName}</h2>
//  <h2>Age : {props.Age}</h2>
// </>
//   )
// }

// const App = () => {
   
//   return (
//     < div className="App">
//       <Person name ={'suhail'} LastName={'behlim'} Age={22}/>
//       <Person name ={'unknown'} LastName={'behlim'} Age={18 }/>
     
//     </div>
//   )
// }



// NOW LEARNIG USEEFFECT BY COUNTER GAME
const App = () => {
  const[counter , setcounter]= useState(0);
//   useEffect(() =>{
//    alert("you change the counter" +":"+ counter);
//  },[counter ]);
   return (
      <div className="App">
       <button onClick={() =>setcounter((prevcount)=> prevcount +1)}>+</button>
       <h1>{counter}</h1>
       <button onClick={() =>setcounter((prevcount)=> prevcount -1)}>-</button>

      </div>
    );
  }

export default App