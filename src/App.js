import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/home';
import Company from './components/pages/company';
import Contact from './components/contact';
import NewProject from './components/pages/newproject';
import Container from './components/layout/container';
import NavBar from './components/layout/navbar';
import Footer from './components/layout/footer';
import Project from './components/pages/project';

function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass='min-height'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/company' element={<Company/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/newproject' element={<NewProject/>}/>
          <Route path='/project' element={<Project/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
