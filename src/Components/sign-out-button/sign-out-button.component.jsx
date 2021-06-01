import React from "react";
import { auth } from "../../firebase/firebase.utils";


import "./sign-out-button.styles.css";



const SignOutButton  = ()=>(
    <div className="sign-out-button">
       <span className="sign-out" onClick={()=> auth.signOut()}> Sign Out</span> 
    </div>
)

export default SignOutButton;