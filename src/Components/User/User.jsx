import React, { useRef, useState } from 'react'
import { auth } from '../../firebase'
import { doc, setDoc } from "firebase/firestore";
import db from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const User = () => {
  const [isLogin, setIsLogin] = useState(true)
  const navigate=useNavigate();
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = async (event) => {
    event.preventDefault()
    try {
      const email = emailRef.current.value
      const password = passwordRef.current.value
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        email: email,
        role: 'user',
      });
      navigate("/userdashboard")
      console.log('user logged in:', user)
    } catch (error) {
      console.error('Error creating user:', error)
      alert(error.message)
    }
  }

  const login = async (event) => {
    event.preventDefault()
    try {
      const email = emailRef.current.value
      const password = passwordRef.current.value
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      console.log('user logged in:', userCredential.user)
      navigate("/userdashboard")
    } catch (error) {
      console.error('Error logging in user:', error)
      alert(error.message)
    }
  }

  return (
    <div className='h-full w-full flex flex-col items-center justify-center gap-10 p-4'>
      <h1 className='font-extrabold text-4xl md:text-8xl'>{isLogin ? 'Log In' : 'Sign Up'}</h1>
      <form className='w-full md:w-[50%] flex flex-col gap-4 p-4' onSubmit={isLogin ? login : register}>
        <div className='flex flex-col gap-2'>
          <label className='text-lg'>Email</label>
          <input type="email" className='border-2 p-2 outline-none' ref={emailRef} />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-lg'>Password</label>
          <input type="password" className='border-2 p-2 outline-none' ref={passwordRef} />
        </div>
        <div className='flex items-center justify-center'>
          <button type="submit" className='border-2 border-black p-2 w-full md:w-full cursor-pointer'>
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </div>
        <div className="flex items-center justify-center">
          <p>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <span
              className='font-bold cursor-pointer hover:underline ml-1'
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default User