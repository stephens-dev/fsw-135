import './App.css';
// import { UserContext } from './context/UserProvider.js'
import Auth from './components/Auth.js'
import { Switch, Route, Redirect } from 'react-router-dom'
import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { UserContext } from './context/UserProvider.js'
import Profile from './components/Profile'
import Issue from './components/Issue';
function App() {
  const { token, logout, addIssue, Issues} = useContext(UserContext)

  return (
    <div className="App">
       <Navbar  logout={logout}  />
      <Switch>
        <Route 
          exact path="/" 
           render={() => token ? <Redirect to="/profile"/> : <Auth />}
        />
        <Route
        path="/profile"
        render={() => <Profile />}
        />
        <Route 
        path="/Issue"
        render={() => <Issue addIssue={addIssue} Issues={Issues}/>}
        />
      </Switch>
    </div>
  );
}

export default App;
