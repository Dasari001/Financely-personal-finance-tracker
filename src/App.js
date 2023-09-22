import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Pages/Signup';
import Dashboard from './components/Pages/Dashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// assets folder
// npm install firebase 
// npm i react-router-dom
// npm i react-toastify

function App() {
  return (
  <>
    <ToastContainer />
    <Router>
      <Routes>
        <Route path='/' element={<Signup />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </Router>
  </>
  );
}

export default App;
