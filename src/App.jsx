import { Route, Routes } from 'react-router-dom';
import './styles/styleGeneral.css'
import './styles/styleOthers.css'
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
import PlaylistPage from './pages/PlaylistPage';

function App() {

  const dispatch = useDispatch()

  useEffect (() => {
    const token = localStorage.getItem("token")
    const username = localStorage.getItem("username")
    const email = localStorage.getItem("email")
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
        <Route path='/playlist' element={<PlaylistPage />} />
      </Route>
        <Route path='*' element={<RouteFail/>} />
    </Routes>
   </div>
  )
}

export default App;