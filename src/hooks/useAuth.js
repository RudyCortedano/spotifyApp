import axios from 'axios'
import { useState } from 'react'
import { setCredentialsSlice } from '../store/slices/credentials.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const useAuth = (url) => {
  const [hasError, setHasError] = useState(false)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const baseURL = 'https://playlist-share-dev.fl0.io'

  const loginUser = (data) =>{
    const url = `${baseURL}/api/auth/login`
    setLoading(true)
    axios.post(url, data)
    .then(res => {
      setHasError(false)
      console.log(res.data)
      const token = res.data.token
      const username = res.data.username
      const email = res.data.email
      localStorage.setItem("token", token)
      localStorage.setItem("username", username)
      localStorage.setItem("email", email)
      const obj = {token, username, email} 
      dispatch(setCredentialsSlice(obj))
      navigate('/')
    })
    .catch(err => {
      console.log(err)
      setHasError(true)
      dispatch(setCredentialsSlice(null))
      localStorage.removeItem("token")
      localStorage.removeItem("username")
      localStorage.removeItem("email")
    })
    .finally(() => setLoading(false))
  }

  const registerUser = (data) =>{
    setLoading(true)
    const url = `${baseURL}/api/auth/register`
    axios.post(url, data)
    .then(res => {
      console.log(res.data)
      setHasError(false)
    })
    .catch(err => {
      console.log(err)
      setHasError(true)
    })
    .finally(() => setLoading(false))
  }

  return { loginUser, registerUser, loading }
}

export default useAuth
