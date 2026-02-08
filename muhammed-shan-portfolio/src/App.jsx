import AboutPage from '../Pages/About';
import ContactPage from '../Pages/Contact';
import HomePage from '../Pages/Home';
import ProjectsPage from '../Pages/Projects';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about/' element={<AboutPage />} />
            <Route path='/projects/' element={<ProjectsPage />} />
            <Route path='/contact/' element={<ContactPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
