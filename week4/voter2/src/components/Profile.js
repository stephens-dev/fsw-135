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
    const {Issues} = props
    return (
        <div>
            <h1> Logged in as {username}</h1>
            <h1>Issues you have posted</h1>
            {/* <IssueList Issues={Issues}/> */}

        </div>
    )
}

export default Profile