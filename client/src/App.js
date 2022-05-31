import { Navbar } from "./routes/Navbar";
import { Router } from "./routes/router";
import   "./App.css"
import { createContext,useReducer} from "react";
import {reducer,initialState} from  "./useReducer/userreducer"
import Footer from "./routes/Footer";


 export const userContext = createContext()
function App() {
 
  const [state, dispatch] = useReducer(reducer, initialState)


  
  return (
    <userContext.Provider value={{state,dispatch}}>

    <div className="App">
     <Navbar/>
      <Router/>
      <Footer/>
    </div>
    </userContext.Provider >
  );
}

export default App;
