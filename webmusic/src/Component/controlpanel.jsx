import React from "react";
import {NavLink, Outlet} from "react-router-dom"
import PlayControl from "./PlayControl";
import "../Css/controlPannel.css"
function ControlP(){ 
 return(  
    <>
    <div className="displayflex">
  
    <div className="controlP">
    <div className="nav">
    <NavLink to={'/'} > <h2 className="navh2">Home</h2> </NavLink>
 <NavLink to={"search" }><h2 className="navh2">Search</h2></NavLink> 
    </div>
    <div className="yourlibrary">
        <div className="addbutton">
            <h2>Favorites</h2>
            <h2>+</h2>
        </div>
         <div  className="Liblist">
         <NavLink className="navh2" to={'liked'}>     <div className="likedsongcontain">
                <img src="https://imageattachment.epicx.online/heartsign.png" alt="" />
               <div>
               <h3>Liked Songs</h3>
               <p>Playlist</p>
               </div>
            </div> </NavLink> 
        </div>
       
    </div>
    <div>
        
    </div>

</div>
<Outlet/>
</div>
<PlayControl/>
</>
 )  
}
export default ControlP;