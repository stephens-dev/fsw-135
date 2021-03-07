// import React from 'react'
import { UserContext } from '../context/UserProvider.js'
import React, { useState, useContext } from 'react'

export default function IssueDisplay(props) {
    const {issue, complaint, datePosted, user, _id, username} = props
    const {deleteIssue} = useContext(UserContext)

    console.log(props)
    return (
        <div className="each-issue">
            <h1>{issue}</h1>
            <h2>{complaint}</h2>
            <h3>{datePosted}</h3>
            <h3>{username}</h3>
            <button className="delete-button" onClick={() => deleteIssue(_id)}>Delete</button>
        </div>
    )
}