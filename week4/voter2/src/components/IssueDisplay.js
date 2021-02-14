import React from 'react'

export default function IssueDisplay(props) {
    const {select, textbox, _id} = props
    return (
        <div>
            <h1>{select}</h1>
            <h2>{textbox}</h2>
            {/* <button>Delete</button> */}
        </div>
    )
}