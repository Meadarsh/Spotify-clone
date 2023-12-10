import React,{useEffect} from "react";
import recent from '../HomePagejson/recentPlayed.json'
import Card from "./cards";
import dailymix from '../HomePagejson/dailymx.json'
import popularcard from "../HomePagejson/popularcard.json"
import {GoChevronLeft,GoChevronRight,GoPerson } from "react-icons/go";
import  {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/all';
function song(val){
    
    return(
      <Card
        key={val.id}
        path={val.path}
        name={val.Title}
        Singername={val.Discription}
        img={val.img}
        
     />
    )
 }

function Home(){
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    gsap.to(".topbar",{
     backgroundColor:"rgb(18,18,18)",
      scrollTrigger:{
        trigger:".topbar",
        scroller:"#renderdiv",
        scrub:"true",
       
        start:"560px 70%",
        end:"400px 30%"    
      }
    })
  }) 

  
    return(
      <div className="renderdiv" id="renderdiv">
      <div className="topbar" id="topbar">
        <div className="topbarr1"><div title='Back'><GoChevronLeft/></div><div title='Back'><GoChevronRight/></div></div><div className="topbarr2"><button class="Btn">Login
  <GoPerson/>
</button></div></div>
    <div className="home">
     <div className="gapp">
 
   <div> <p className="cardsheading">Recently played</p></div>
      <div className="dailymixslot">
       
          {recent.map(song)}
       
       </div>
       </div> 
       <div className="gapbottom">
       <p className="cardsheading margintop">Made For You</p>
       <div className="dailymixslot">
       {dailymix.map(song)}
       </div>
       <p className="cardsheading margintop">Popular Album</p>
       <div className="dailymixslot">
       {popularcard.map(song)}
       </div>
   </div>
  </div>
 
  </div>
    )
}
export default Home;