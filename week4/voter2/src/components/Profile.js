import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'
import IssueList from './Issue'
import IssueDisplay from './IssueDisplay'


function Profile(props) {
    const {
        user: {
            username
        },

    } = useContext(UserContext)

    function UserIssueList(props) {
        console.log(props)
       const {userissues} = props
       return (
           <div>
               { userissues.map(issue => <IssueDisplay {...issue} key={issue._id }/> ) }
           </div>
       )
   }
    const {Issues} = props
    const {userissues,getUserIssues} = useContext(UserContext)
    return (
        <div className="profile">
            <h1 className="logged"> Logged in as {username}</h1>
            <h1 className="profile-i">Issues you have posted</h1>
            <UserIssueList userissues={userissues}/>
            <button onClick={getUserIssues}>Testing</button>

        </div>
    )
}

export default Profile