import './App.css'
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Container from './components/Container';

export default function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Container>
  </Router>
  )
}
