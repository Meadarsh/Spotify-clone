import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Css/index.css'
import '../src/Css/search.css'
import '../src/Css/MusicList.css'
import '../src/Css/app.css'
import Contex from './Component/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contex />
  </React.StrictMode>
);


