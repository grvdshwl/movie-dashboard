import React from "react";


const SmallBox = ({value,id1,class1})=>{

	return(
			<div  id={id1} >
                      <div  className={class1}>
            	          <img alt="poster" src={value.value.poster_path !== null ? `https://image.tmdb.org/t/p/w500/${value.value.poster_path}`: "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"} />
            	          <h2> {value.value.original_title}</h2>
            	          <p>
            	          <strong> Release Date </strong> : {value.value.release_date}</p>
            	          <p> <strong>Rating </strong>: {value.value.vote_average}</p>
            	          
                        </div>
                         <p> {value.value.overview}</p>
             </div>

		)




}


export default SmallBox;