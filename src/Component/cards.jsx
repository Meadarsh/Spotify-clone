import React from "react";
import {Link} from "react-router-dom"
function Card(props){
    
    return(
        
    <> <Link to={props.path}>  <div className="cards"> <img src={props.img} alt="na" />
      <div className="cardtitile"> <h2>{props.name}</h2>
       <p>{props.Singername}</p></div>
       <div className="popPLaybutton">
       <i class="fa-solid fa-play"></i>
       </div>
       </div>
       </Link> </>  )
}
export default Card;