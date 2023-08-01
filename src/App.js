import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Post from './components/Post';
import Write from './components/Write';
import Contact from './components/Contact';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/write" element={<Write/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
