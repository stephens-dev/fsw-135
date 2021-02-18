import React from 'react'

export default function IssueDisplay(props) {
    const {select, textbox, datePosted, _id} = props
    return (
        <div>
            <h1>{select}</h1>
            <h2>{textbox}</h2>
            <h3>{datePosted}</h3>
            {/* <button>Delete</button> */}
        </div>
    )
}