import React, { useState } from 'react'
import axios from 'axios'
import { Redirect, Route, Switch } from 'react-router-dom'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props){
  const initState = { 
    user: JSON.parse(localStorage.getItem("user")) || {}, 
    token: localStorage.getItem("token") || "", 
    Issues: [] 
  }

  const [userState, setUserState] = useState(initState)

  function signup(credentials){
    axios.post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function login(credentials){
    axios.post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        getIssues()
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      todos: []
    })
    
  }

  function getIssues(){
    userAxios.get("/api/Issue")
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          Issues: res.data
        }))
      })
      .catch(err => console.log(err))
  }

  function addIssue(newIssue){
    
    userAxios.post("/api/Issue", newIssue)
      .then(res => {
        setUserState(prevState => { 
          return({
          ...prevState,
          Issues: [...prevState.Issues, res.data]
        })})
      })
      .catch(err => console.log(err))
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addIssue
      }}>
      { props.children }
    </UserContext.Provider>
  )
}