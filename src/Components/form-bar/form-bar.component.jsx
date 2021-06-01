import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import {connect} from "react-redux";
import { addMoviesArray, addSearchedValue } from "../../redux/display/display.action";




const FormBar = ({addSearchedValue,addMovies}) =>{

	let searchValue ="";

	const submitSearchedValue = async (event)=>{
		event.preventDefault();
		addSearchedValue(searchValue);
		const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b618305e9fce9b04cbd3987907dcb84e&query=${searchValue}`)
    	const {results} = await response.json()
		addMovies(results)


		
		
		const searchBox = document.getElementById("searchbox");
		searchBox.value= ""

	}

	return(

			<form className="form-bar" onSubmit={(event)=> submitSearchedValue(event)} >
		          <FormInput id="searchbox" handleChange={(event)=>searchValue = event.target.value}
		           type="text" placeholder="search here" required/>
		          <CustomButton    type="submit" > search!</CustomButton>
		     </form> 
		)

}

const mapDispatchToProps = (dispatch)=>({
	addSearchedValue:value =>dispatch(addSearchedValue(value)),
	addMovies:movie =>dispatch(addMoviesArray(movie))
})

export default connect(null,mapDispatchToProps)(FormBar);