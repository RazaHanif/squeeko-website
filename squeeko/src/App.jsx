import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header';
import './App.css'

const App = () => {
  return (
    <div className='main'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <div className='border border-solid border-accent p-1 flex-1'>Footer</div>
    </div>
  );
}

export default App;
