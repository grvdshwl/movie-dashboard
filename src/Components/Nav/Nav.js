import {React,useState} from "react";
import Box from "../Box/Box.js";
import "./Nav.css";

import FormBar from"../Form/Form.js";

import {auth} from "../../firebase/firebase.utils"

const Nav = () =>{

	const [searchText,changeText] = useState("john wick");
  const [changeData,setData] = useState("");
  const[isLoading,setLoading] = useState(false);

  const changeSearchData = (data)=>{
    setData(data);
  }

  const changeContent = ()=>{
   setLoading(true);
   changeText(changeData);
   
   var inputSearch = document.querySelector("#searchbox");
    
    inputSearch.value = "";

    setLoading(false) 
  }

	return isLoading ? <p id ="load"> Loading... </p> : (
	<div>	
   <div className="sign-out-button">  <span className="sign-out" onClick={()=>{auth.signOut()}}> SIGN OUT</span> </div>
		<div className="navBar"> 
	        <span> Movie Name </span> 
		       <FormBar  changeContent ={changeContent} changeSearchData={changeSearchData}/> 
    </div>

      <Box text={searchText}/>
      </div>
		)


}

export default Nav;