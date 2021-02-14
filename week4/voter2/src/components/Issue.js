// import React, { useContext } from 'react'
// import { UserContext, addIssue } from '../context/UserProvider.js'
import React, { useState, useContext } from 'react'
import axios from 'axios'
import IssueDisplay from './IssueDisplay'
// const userAxios = axios.create()

// import {handleChange, handleSubmit} from './Auth'

const initInputs = {
    select: "",
    textbox: ""
}

 function IssueList(props) {
     console.log(props)
    const {Issues} = props
    return (
        <div>
            { Issues.map(issue => <IssueDisplay {...issue} key={issue._id }/> ) }
        </div>
    )
}

function Issue(props) {
    const [inputs, setInputs] = useState(initInputs)
    const {addIssue,Issues} = props
   console.log(props)
    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))   
    }
    function handleSubmit(e) {
        e.preventDefault()
        addIssue(inputs)
        setInputs(initInputs)
    }
    const {select, textbox} = inputs
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    What Issue would you like to discuss
                    <select name="select" value={select} onChange={handleChange}>
                        <option >Please Choose an Issue</option>
                        <option value="gunControl">Gun Control</option>
                        <option value="climateChange">Climate Change</option>
                        <option value="taxes">Taxes</option>
                        <option value="immagration">Immagration</option>
                        <option value="healthCare">Health Care</option>
                    </select>
                    <textarea onChange={handleChange} value={textbox} name="textbox" placeholder="What are your thoughts"/>
                </label>
                <button onClick={addIssue}>Create</button>
            </form>
            <IssueList Issues={Issues}/>
        </div>
    )
}

export default Issue 