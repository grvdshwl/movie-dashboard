import React from "react";


const FormBar = ({changeContent,changeSearchData}) =>{

	return(

			<form onSubmit = {(event)=>changeContent(event.preventDefault())}>
		          <input onChange = {(event) =>changeSearchData(event.target.value)}
		          id="searchbox" type="text" placeholder="search here" required/>
		          <input   id="btn" type="submit" value="Search!"/>
		     </form> 
		)

}



export default FormBar;