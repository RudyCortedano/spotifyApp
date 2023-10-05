import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Spinners from '../components/Shared/Spinners'

const RegisterPage = () => {

  const {register, handleSubmit, reset} = useForm()
  const { registerUser, loading } = useAuth()

  const submit = data =>{
    registerUser(data)
    reset({
      email:"",
      name:"",
      password:"",
    })
  }

  return (
    <div className='register__global'>
      {/* <img src="/images/portadaRegister.png" alt="" /> */}
      {/* <img className='register__image' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-logo%2Cmusic-3d-logo%2Cmusic-colorful-logo-design-template-4316f36688b57278ef28aeac2767a22f_screen.jpg?ts=1661504978" alt="" /> */}
      <article className='register__date'>
      <form onSubmit={handleSubmit(submit)}>
        <h2 className='register__title'>Register</h2>
          <div>
            <label  className='register__label' htmlFor="email">Email</label>
            <input className='register__input iconEmail' required {...register('email')} type="email" id="email" />
          </div>
          <div>
            <label  className='register__label' htmlFor="name">Name</label>
            <input className='register__input iconName' required {...register('name')}type="text" id="name" />
          </div>
          <div>
            <label   className='register__label'htmlFor="password">Password</label>
            <input className='register__input iconPassword' required {...register('password')} type="password" id="password" />
          </div>
          <div className="register__position__button">
           <button className='register__button'>Submit</button>
          </div>

        </form>
        <p>Do you have an account? <Link to='/auth/login' >Go to login</Link></p>
      </article>
    </div>
  )
}

export default RegisterPage

