import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <div className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/features' element={<Features />} />
          <Route path='/pricing' element={<Pricing  />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default App;
