import {React} from "react";
import Media from "react-media";
import SmallBox from "../SmallBox/SmallBox.js";


const BoxArray = (value) => {

	

	return(

		<div key={value.value.id}>
        		<Media queries={{ small: "(min-width: 700px)" }}>
                {matches =>
                  matches.small ? (
                    <SmallBox value={value} id1="box" class1="boxContent"/>
                  ) : (
                 <SmallBox value={value} id1="boxSmall" class1="boxSmallContent"/>
                  )
                }
              </Media>
        </div>      
	
		)


}

export default BoxArray;