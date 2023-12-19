import React from 'react'
import facebook from '../imgs/icons8-facebook-48 (1).png'
import twitter from '../imgs/icons8-twitter-50.png'
import instagram from '../imgs/icons8-instagram-logo-64.png'
import "../Css/bottomAbout.css"
function BottomAbout() {
  return (
    <div className='bottomC'>
       <div className="upperbox">
       <div className="Ubox1"><h1>Company</h1><h2>About</h2><h2>Jobs</h2><h2>For the Records</h2> </div>
       <div className="Ubox2"><h1>Communities</h1><h2>For Artists</h2> 
       <h2>Developers</h2>
       <h2>Advertising</h2>
       <h2>Investors</h2>
       <h2>Vendors</h2>
       </div> 
       <div className="Ubox3">
        <h1>Useful links</h1>
        <h2>Feedback/sugesstion</h2>
        </div> 
       <div className="Ubox4">
        <div className="socialLink">
          <img src={facebook} alt='na' />
        </div>
        <div className="socialLink">
          <img className='twitter'  src={twitter} alt='na' />
        </div>
        <div className="socialLink">
          <img  src={instagram} alt='na'/>
        </div>
        </div> 
       </div>
       <div className="lowerbox">
        <h3>Privacy Center</h3>
        <h3>Privacy Policy</h3>
         <h3>Copyright</h3>
         <h3>Accessibility</h3>
         <h2>© 2023 Spotify Clone</h2>
       </div>
    </div>
  )
}

export default BottomAbout