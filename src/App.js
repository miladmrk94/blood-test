import React from 'react';
import CreateAccPage from './pages/CreateAccPage';
import IntroPage from './pages/IntroPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<IntroPage />} />  
    <Route path='/acc' element={<CreateAccPage/>}/>
    </Routes>
    </BrowserRouter>
  );

}

export default App;
