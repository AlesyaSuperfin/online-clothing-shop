import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Shop from './Shop';
import AboutProduct from './AboutProduct';
import Footer from './Footer';
import About from './About';
import Contacts from './Contacts';

function App() {

  return (
    <div>
  <Router>
  <div>
    <h1>Estetica Etc.</h1>
    <h2 className='title'>Sustainable. Beautiful. Ethical.</h2>
    </div>
    <nav>
      <Link className='link' to='/'>Shop</Link>
      <Link className='link' to='/about'>About</Link>
      <Link className='link' to='/contacts'>Contacts</Link>
    </nav>
    <div>
    <hr class="line_big"></hr>
    </div>
    <Routes>
      <Route path='/' element={<Shop />} />
      <Route path='/about' element={<About />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/about/:title' element={<AboutProduct />} />
    </Routes>
  </Router>
  <Footer />
  </div>
  );
}

export default App;
