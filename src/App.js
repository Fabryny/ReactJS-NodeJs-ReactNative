
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/pages/home/Home'
import Filme from './components/pages/filme/Filme'
import Error from './components/pages/error/error';

function App() {
  return(  
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/filme/:id" element={<Filme/>}/>
        <Route  path="*" element={<Error/>}/>
      </Routes>
    </Router>

  )


  

}

export default App;
