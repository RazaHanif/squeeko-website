import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "./components/theme-provider";
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <div className='border border-solid border-accent p-1 flex-1'>Footer</div>
    </ThemeProvider>
  );
}

export default App;
