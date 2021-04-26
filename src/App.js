import {React} from "react";
import './App.css';
import ErrorBoundry from "./Components/ErrorBoundry/ErrorBoundry.js";

import Nav from "./Components/Nav/Nav.js"

function App() {

  

  return (
    <div className="App">  
    	<ErrorBoundry>
        	<Nav/> 
        </ErrorBoundry>	   
    </div>
  );
}

export default App;
