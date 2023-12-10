
import { useState,useRef } from 'react';
import { songsdata } from '../Audio/audios'; 
import { LinearProgress } from '@mui/material';
import { FiChevronsRight,FiChevronsLeft,FiPauseCircle,FiPlayCircle } from "react-icons/fi";
const BoopButton = () => {
 
  const [playy,setplay]=useState({display: "block"});
  const [pause,setpause]=useState({display: "none"});
  const audioElem = useRef();
  const SongPlay=()=>{
     audioElem.current.play();
       setplay({display: "none"});      
       setpause({display: "block"}); 
       
  }
  const SongPause=()=>{
     audioElem.current.pause();
       setplay({display: "block"});      
       setpause({display: "none"}); 
       
  }

  return (
    
    <div className="contProB">
     
     <div className="controlll">
     <audio src= {songsdata[0].url} ref={audioElem} />
      <FiChevronsLeft title='Previous' className='iconn'/>
      <FiPauseCircle title='Pause' className='SongPlayiconn' style={pause} onClick={SongPause} />
      <FiPlayCircle style={playy} title='Play' onClick={SongPlay} /> 
     <FiChevronsRight title='Next' />
     </div>
     <div className="proB">
     <LinearProgress variant="determinate" color="secondary" value={30} />
     </div>
      </div>

  )
};
export default BoopButton