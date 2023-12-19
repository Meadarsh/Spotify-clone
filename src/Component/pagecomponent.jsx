import React,{useEffect} from 'react'
import dailymix1 from '../HomePagejson/dailymix1songl.json'
import Listsongdiv from './songdiv'
import { ScrollTrigger  } from 'gsap/all';
import { gsap } from 'gsap';
import BottomAbout from './bottomAbout';
import {GoChevronLeft,GoChevronRight } from "react-icons/go";


function PageCompSongL(val){
    return(
    <Listsongdiv
    key={val.id}
    srn={val.srn}
    name={val.name}
    Singername={val.Singername}
    img={val.img}
    like={val.liked}
    />
    )
}
 

function Pagecomponent(v) {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{
      gsap.to(".topbar1",{
       backgroundColor:"rgb(18,18,18)",
        scrollTrigger:{
          trigger:".topbarr",
          scroller:"#renderdiv",
          scrub:"true",
          start:"560px 40%",
          end:"560px 18%" 
        }
      })

      gsap.to(".playallbutton ,.heart-dis ",{
        scale:0,
    
     scrollTrigger:{
          trigger:"#playallbutton",
          scroller:"#renderdiv",
       
          start:"690px 45%",
          end:"300px 0%",
          scrub:1
        }
      })
    
      gsap.to(".playallbuttontopbar ,.heart-dis-topba ",{
        scale:1,
    
     scrollTrigger:{
          trigger:"#playallbutton",
          scroller:"#renderdiv",
         
         scrub:1,
          start:"690px 45%",
          end:"300px 0%"
        }
      })
      gsap.to(".songlistboxtitle ",{
      backgroundColor:"rgb(18,18,18)",
    
     scrollTrigger:{
          trigger:".songlistboxtitle",
          scroller:"#renderdiv",
          duration:.2,
          scrub:1,
          start:"100px 26.5%",
          end:"100px 18%",
          markers:true
        }
      })
    
    }) 
  return (
    <div className="renderdiv" id='renderdiv'>
      <div className="topbar1"><div className="topbarr1"><div title='Back'><GoChevronLeft/></div><div title='Back'><GoChevronRight/></div></div>
      <div className=' playallbuttontopbar' ><img className='playallbuttonimg' alt='na'  src="https://imageattachment.epicx.online/Untitled%20design.png"/></div>
              <div className="heart-container heart-dis-topba" title="Like">
            <input type="checkbox" className="checkbox" id="Give-It-An-Id"/>
            <div className="svg-container">
                <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                    </path>
                </svg>
                <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                    </path>
                </svg>
                <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="10,10 20,20"></polygon>
                    <polygon points="10,50 20,50"></polygon>
                    <polygon points="20,80 30,70"></polygon>
                    <polygon points="90,10 80,20"></polygon>
                    <polygon points="90,50 80,50"></polygon>
                    <polygon points="80,80 70,70"></polygon>
                </svg>
            </div>
        </div></div>
    <div className='gradbackgrown' style={{ backgroundImage:`linear-gradient(${v.color},${v.color1})`}}>
        <div className="upperTranspbox">
        <div className="imgboxx"> <img src={v.imgs} alt="" /></div>   
        <div className={"rightdetail"}>
            <p>Playlist</p>
            <h2 className={v.size}>{v.Title}</h2>
            <p className='opacitycontrol'>{v.Discription}</p>
             <p>{v.duration}</p>
        </div>
        </div>
        <div className="lowerdivforL">
        <div className="upperbar1">
        <div className='playallbutton' ><img className='playallbuttonimg' alt='na'   src="https://imageattachment.epicx.online/Untitled%20design.png"/></div>
              <div className="heart-container heart-dis" title="Like">
            <input type="checkbox" className="checkbox" id="Give-It-An-Id"/>
            <div className="svg-container">
                <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                    </path>
                </svg>
                <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                    </path>
                </svg>
                <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="10,10 20,20"></polygon>
                    <polygon points="10,50 20,50"></polygon>
                    <polygon points="20,80 30,70"></polygon>
                    <polygon points="90,10 80,20"></polygon>
                    <polygon points="90,50 80,50"></polygon>
                    <polygon points="80,80 70,70"></polygon>
                </svg>
            </div>
        </div>
       </div>

       <div className="boxforsonglist">
        <div className="songlistboxtitle">
            <p className='songlistboxtitlep1'>#</p>
            <p>Title</p>
            <p className='songlistboxtitlep2'>Album</p>
            <p className='songlistboxtitlep3'>Duration</p>
        </div>
        {dailymix1.map(PageCompSongL)}
       </div>

        </div>
        <BottomAbout/>
        </div>
       
    </div>
  )
}


export default Pagecomponent;