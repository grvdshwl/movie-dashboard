import React from "react";

import "./movie-box.styles.css";


const MovieBox = ({id,original_title,release_date,vote_average,poster_path,overview})=>{
    
    
    return(
    
    <div key={id} className="movie-box">
        
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"}
         alt="movie"/>
        <div>
            <h2> {original_title}</h2>
            <p> <strong> Release Date </strong> : {release_date}</p>
            <p> <strong>Rating </strong>: {vote_average}</p>
            <p> {overview}</p>
        </div> 

    </div>
)}



export default MovieBox;