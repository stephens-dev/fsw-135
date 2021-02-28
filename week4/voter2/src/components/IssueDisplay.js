import React from 'react'

export default function IssueDisplay(props) {
    const {issue, complaint, datePosted, user, _id} = props
    console.log(props)
    return (
        <div>
            <h1>{issue}</h1>
            <h2>{complaint}</h2>
            <h3>{datePosted}</h3>
            {/* <h3>{user}</h3> */}
            {/* <button>Delete</button> */}
        </div>
    )
}