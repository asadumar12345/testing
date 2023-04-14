import './App.css';
import React, { createContext }  from 'react';
import Navbar from './components/Navbar';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Comp1 from './components/Comp1';
import Example3 from './components/Example3';
import Example4 from './components/Example4';
import Example5 from './components/Example5';
import AntForms from './components/AntForms';

const Name = createContext();
const Gender = createContext();
function App() {
  let companyName = 'sfasha';
  const name = 'Asad';
  const gender = 'Male' ;
  return (
    <div className="App">
     <Navbar title={companyName} ></Navbar>
     <div>
         <Example1></Example1>
         <Example2></Example2>
         <Name.Provider value={name}>
            <Gender.Provider value={gender}>
              <Comp1></Comp1>
            </Gender.Provider>
         </Name.Provider>
         <Example3></Example3>
         <Example4></Example4>
         <Example5></Example5>
         <AntForms></AntForms>
         
     </div>
    </div>
  );
}


export default App;
export {Name , Gender} ;
