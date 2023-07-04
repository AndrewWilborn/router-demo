import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Err404 from './pages/Err404.jsx';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/' element={ <Home /> } />
          <Route path='*' element={ <Err404 />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
