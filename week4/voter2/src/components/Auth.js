import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm.js'
import { UserContext } from '../context/UserProvider.js'

const initInputs = { username: "", password: "" }

export default function Auth(){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const { signup, login, errMsg } = useContext(UserContext)

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
      <div className="openText">
      <h1>  POLITICAL POSTING'S</h1>
      <h3>Stay up to date on todays political issues ,and share your stance. </h3>
        <h3>You can also make friends and see other sides of an issue you may not have come across.</h3>
      </div>
        
          <AuthForm 
            handleChange={handleChange}
            // handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign up"
            errMsg={errMsg}
          />
       <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>Create New Profile</button>
      
    </div>
  )
}