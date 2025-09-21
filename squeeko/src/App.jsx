import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <>
    <Header />
    <div className='main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
    <Footer />
    </>

  );
}

export default App;
