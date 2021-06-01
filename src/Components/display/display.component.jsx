import React from "react";
import DisplayBox from "../display-box/display-box.component";
import NavBar from "../nav-bar/nav-bar.component";
import SignOutButton from "../sign-out-button/sign-out-button.component";
import {connect} from "react-redux"
import "./display.styles.css";




class Display extends React.Component{

    
    
    render(){
   return(
            <div>

            <SignOutButton/>
            <NavBar/>
            <DisplayBox/>

        </div>  
   )
    }

}



   

 



export default Display;