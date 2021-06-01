import React,{Component} from "react";

import "./display-box.styles.css";
import {connect} from "react-redux";
import { addMoviesArray } from "../../redux/display/display.action";
import MovieBox from "../movie-box/movie-box.component";
import {createStructuredSelector} from "reselect";
import { selectMoviesArray, selectSearchValue } from "../../redux/display/display.selectors";

class DisplayBox extends Component{


   
componentDidMount(){
    const {searchValue,addMovies} = this.props;
    
    
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=b618305e9fce9b04cbd3987907dcb84e&query=${searchValue}`)
    .then(res=>res.json()).then(({results})=> addMovies(results))

}



render(){
    const {moviesArray,searchValue} = this.props;

   
    return(
        <div>
            {moviesArray.length !==0 ? moviesArray.map(({...otherProps})=>{
    return <MovieBox key={Math.random()} {...otherProps}/>}):
            <h1 className="nf"> No Movie found with Title : {searchValue}</h1>
            }
        </div>
    )
}


}


const mapStateToProps = createStructuredSelector({
    searchValue:selectSearchValue,
    moviesArray:selectMoviesArray
})

const mapDispatchToProps = (dispatch)=>({
	
	addMovies:movie =>dispatch(addMoviesArray(movie))
})

export default connect(mapStateToProps,mapDispatchToProps)(DisplayBox);