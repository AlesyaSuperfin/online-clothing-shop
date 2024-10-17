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
    <nav>
      <Link className='link' to='/'>Shop</Link>
      <Link className='link' to='/about'>About</Link>
      <Link className='link' to='/contacts'>Contacts</Link>
    </nav>
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
