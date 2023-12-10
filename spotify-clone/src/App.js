import ControlP from './Component/controlpanel';
import Home from "./Component/homepage";
import Pagecomponent from "./Component/pagecomponent";
import val from './HomePagejson/dailymx.json'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import liked from './Liked/liked.json'
import Errorpage from './Component/errorpage';
import Searchpage from './Component/searchpage';
function App() {
  return (
    <div className="App">
     
    
       <BrowserRouter>  
       
       <Routes>
      
        <Route path="/"element={<ControlP/>} >
        <Route path="/"element={<Home/>} />
        <Route path="dailymix1"element={<Pagecomponent
      key={val[0].id}
      Title={val[0].Title}
      Discription={val[0].Discription}
      imgs={val[0].img}
      color={val[0].color}
      color1={val[0].color1}
      duration={val[0].duration}
      size={liked.size} />} />
     <Route path="dailymix2"element={<Pagecomponent 
      key={val[1].id}
      Title={val[1].Title}
      Discription={val[1].Discription}
      imgs={val[1].img}
      color={val[1].color}
      color1={val[1].color1}
      size={liked.size} />} />
     <Route path="dailymix3"element={<Pagecomponent 
      key={val[2].id}
      Title={val[2].Title}
      Discription={val[2].Discription}
      imgs={val[2].img}
      color={val[2].color}
      color1={val[2].color1}
      size={liked.size} />} />
     <Route path="dailymix4"element={<Pagecomponent 
      key={val[3].id}
      Title={val[3].Title}
      Discription={val[3].Discription}
      imgs={val[3].img}
      color={val[3].color}
      color1={val[3].color1}
      size={liked.size} />} />
     <Route path="dailymix5"element={<Pagecomponent 
      key={val[4].id}
      Title={val[4].Title}
      Discription={val[4].Discription}
      imgs={val[4].img}
      color={val[4].color}
      color1={val[4].color1} 
      size={liked.size} />} />
  
     <Route path="liked"element={<Pagecomponent
     key={liked.id}
     Title={liked.Title}
     Discription={liked.Discription}
     imgs={liked.img}
     color={liked.color}
     color1={liked.color1} 
     size={liked.size}
     />} />
      <Route path='search' element={<Searchpage 
      />}/>
       <Route path='*' element={<Errorpage/>}
    />
     </Route>
       </Routes>
       </BrowserRouter>
      </div>
    
  );
}

export default App;
