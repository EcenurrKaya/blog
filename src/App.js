import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Write from './components/Write';
import Contact from './components/Contact';
import {Route, Routes} from 'react-router-dom'
import PostPage from './components/PostPage';

function App() {
  return (
    <div>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/write" element={<Write/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/post" element={<PostPage/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
