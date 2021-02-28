import './App.css';
// import { UserContext } from './context/UserProvider.js'
import Auth from './components/Auth.js'
import { Switch, Route, Redirect } from 'react-router-dom'
import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { UserContext } from './context/UserProvider.js'
import Profile from './components/Profile'
import Issue from './components/Issue';
import ProtectedRoute from './components/ProtectedRoutes'

function App() {
  const { token, logout, addIssue, Issues} = useContext(UserContext)

  return (
    <div className="App">
       {token && <Navbar  logout={logout}  />}
      <Switch>
        <Route 
          exact path="/" 
           render={() => token ? <Redirect to="/profile"/> : <Auth />}
        />
        <ProtectedRoute
        path="/profile"
        component={Profile}
        redirectTo='/'
        token={token}
        />
        <ProtectedRoute 
        path="/Issue"
        component={Issue}
        redirectTo='/'
        addIssue={addIssue} 
        Issues={Issues}
        token={token}
        />
      </Switch>
    </div>
  );
}

export default App;
