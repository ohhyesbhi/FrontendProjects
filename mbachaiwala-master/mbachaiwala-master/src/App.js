import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Section from "./Section";


import "./styles/App.scss";
import "./styles/intro.scss";
import "./styles/section.scss";
import "./styles/footer.scss";
import "./styles/misc.scss";
import "./styles/mediaQuery.scss";

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
   <Route path="" element={<Section/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
