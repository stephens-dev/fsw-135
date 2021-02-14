import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm.js'
import { UserContext } from '../context/UserProvider.js'

const initInputs = { username: "", password: "" }

export default function Auth(){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const { signup, login } = useContext(UserContext)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    signup(inputs)
  }

  function handleLogin(e){
    e.preventDefault()
    login(inputs)
  }

  return (
    <div className="auth-container">
      <h1>Todo App</h1>
      
        
          <AuthForm 
            handleChange={handleChange}
            // handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign up"
            
          />
       <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>Create New Profile</button>
      
    </div>
  )
}