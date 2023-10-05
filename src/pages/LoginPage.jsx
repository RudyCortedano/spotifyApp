import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Spinners from '../components/Shared/Spinners'

const LoginPage = () => {
  const {register, handleSubmit,reset} = useForm()
  const {loginUser} = useAuth()

  const submit = data => {
    loginUser(data)
    reset({
      email:"",
      password:"",
    })
  }

  
  
  return (
    <div className='login__global'>
      {/* <img src="/images/portadaHome.png" alt="" /> */}
      {/* <img className='login__image' src="https://www.nicepng.com/png/detail/14-145484_resultado-de-imagen-para-logos-png-musica-logos.png" alt="" /> */}
      <article className='login__date'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label className='login__label' htmlFor="email">Email</label>
            <input className='login__input iconUser' required {...register('email')}  type="email" id="email" />
          </div>
          <div>
            <label className='login__label' htmlFor="password">Password</label>
            <input className='login__input iconPassword'  required {...register('password')} type="password" id="password" />
          </div>
          <div className='login__position__button'>
          <button className='login__button'>Submit</button>
          </div>
        </form>
        <p>Do you have an account? <Link to='/auth/register' >Go to register</Link></p>
      </article>
    </div>
  )
}

export default LoginPage