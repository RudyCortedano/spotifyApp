import { Route, Routes } from 'react-router-dom';
import './styles/styleGeneral.css'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProtectedRoutes from './pages/ProtectedRoutes';
import { setCredentialsSlice } from './store/slices/credentials.slice';
import TracksPage from './pages/TracksPage';
import ArtistPage from './pages/ArtistPage';
import RouteFail from './pages/RouteFail';

function App() {

  const dispatch = useDispatch()

  useEffect (() => {
    const token = localStorage.removeItem("token")
    const username = localStorage.removeItem("username")
    const email = localStorage.removeItem("email")
    const obj = {token, username, email} 
    dispatch(setCredentialsSlice(obj))
  }, [])
  

  return (
   <div className='App'>
    <Routes>
      <Route path='/auth/login' element={<LoginPage/>} />
      <Route path='/auth/register' element={<RegisterPage/>} />
      <Route element={<ProtectedRoutes/>}>
        <Route path='/' element={<HomePage/>} />
        <Route path='/track/:id' element={<TracksPage />} />
        <Route path='/artist/:id' element={<ArtistPage />} />
      </Route>
        <Route path='*' element={<RouteFail/>} />
    </Routes>
   </div>
  )
}

export default App;