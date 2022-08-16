
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/pages/home/Home'
import Filme from './components/pages/filme/Filme'
import Error from './components/pages/error/error';
import Favoritos from './components/pages/favoritos/Favoritos';
import NavBar from './components/navBar/NavBar';

function App() {
  return(  

      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/filme/:id" element={<Filme/>}/>
        <Route path="/favoritos" element={ <Favoritos/> } />
        <Route  path="*" element={<Error/>}/>
      </Routes>
  

  )


  

}

export default App;
