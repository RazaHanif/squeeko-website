import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <div className='border border-solid border-accent p-1 flex-1'>Footer</div>
    </>
  );
}

export default App;
