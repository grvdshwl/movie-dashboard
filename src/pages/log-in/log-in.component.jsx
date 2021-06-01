import React from "react";

import "./log-in.styles.css";

import SignIn from "../../Components/sign-in/sign-in.component";
import SignUp from "../../Components/sign-up/sign-up.component";


const LogIn = () =>(

    <div className = "log-in">

    <div className="log-in-components">
    <span className="log-in-component">
    <SignIn/>
    <SignUp/>
    </span>
    
    </div>
   


    </div>
);





export default LogIn;