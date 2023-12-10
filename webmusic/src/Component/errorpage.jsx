import React from 'react'
import '../Css/errorpage.css'
import {BsFillFileEarmarkExcelFill} from 'react-icons/bs'
import Typical from 'react-typical'
import { NavLink } from 'react-router-dom'
function Errorpage() {
  return (
    <div className="renderdiv" id="renderdiv">
    <div className='errorpage'>
      <h1>Error 404 :(</h1>
        <Typical
              steps={[
              "Page not found or unable to fetch path"  , (1)            
              ]}
              loop={1}
              wrapper="p"
            />
            <div className='iohcioadsbc'><BsFillFileEarmarkExcelFill/></div>
            <NavLink to={"/"}>
          <button class="buttonof404page" >
    <span class="buttonof404page_lg">
        <span class="buttonof404page_sl"></span>
        <span class="buttonof404page_text">Go To Homepage</span>
    </span>
</button></NavLink>

   </div>

    </div>
    )
}

export default Errorpage