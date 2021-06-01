import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";


const FormBar = ({changeContent,changeSearchData}) =>{

	return(

			<form className="form-bar" onSubmit = {(event)=>changeContent(event.preventDefault())}>
		          <FormInput id="searchbox" handleChange = {(event) =>changeSearchData(event.target.value)}
		           type="text" placeholder="search here" required/>
		          <CustomButton    type="submit" > search!</CustomButton>
		     </form> 
		)

}



export default FormBar;