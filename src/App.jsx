import { Route, Routes } from 'react-router-dom'
import './App.css'
import History from './pages/History'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Header from './components/Header'
import Footer from './components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



function App() {

  return (
    <>
        <ToastContainer position="top-center" autoClose={3000} theme="colored"/>

<Header/>
    <Routes>

       <Route element={ <Landing/>} path='/' />

       <Route element={ <Home/>} path='/home' />

       <Route element={ <History/>} path='/history' />
    
    </Routes>
    <Footer/>

    </>
      
    
  )
}

export default App