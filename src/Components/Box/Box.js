import {React,useEffect,useState} from "react";
import "./Box.css";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry.js";

import BoxArray from "../BoxArray/BoxArray.js"

const Box = ({text}) =>{

	const [boxData,changeData] = useState([true]);

  useEffect(()=>{
    
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=b618305e9fce9b04cbd3987907dcb84e&query=${text}`)
    .then((res)=>res.json()).then((data)=>{changeData(()=> data.results)}) },[text])

    
  const boxArray = boxData.map((info)=>{
      	return (<BoxArray key={info.id} value ={info}/>)

  })

return boxData.includes(true)  ? <p id="load"> Loading... </p>:
(
	<div>
			{boxArray.length !== 0 ? <ErrorBoundry> {boxArray} </ErrorBoundry> : <h3 id = "nf">   No movies found with Title : {text} </h3>}
 </div>	

	)
}

export default Box;