import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <div className='header'>Header</div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <div>Footer</div>
    </>
  );
}

export default App;
