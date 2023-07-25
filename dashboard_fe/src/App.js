import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dash from './pages/Dash';
import Tables from './pages/Tables';
import Charts from './pages/Charts';
import Account from './pages/Account';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='h-full flex flex-col w-full'>
        <Routes>
          <Route path="/" element={<Dash />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
      <div className='align-baseline'>
        <Footer />
      </div>
    </div>
  );
}

export default App;