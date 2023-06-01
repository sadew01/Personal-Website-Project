//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Experiences from './components/pages/Experiences';
import Projects from './components/pages/Projects'
import Footer from './components/Footer'
import DisplayProject from './components/pages/DisplayProject';

function App() {
  return (
    <div className = "App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/Personal-Website-Project/" element={<Home/>}></Route>
          <Route path="/Personal-Website-Project/projects" element={<Projects/>}></Route>
          <Route path="/Personal-Website-Project/experiences" element={<Experiences/>}></Route>
          <Route path="/Personal-Website-Project/displayproject/:id" element={<DisplayProject/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
