// import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'
import React, { useState, useContext } from 'react'
import axios from 'axios'
import IssueDisplay from './IssueDisplay'
// import getIssues from '../context/UserProvider'
// const userAxios = axios.create()

// import {handleChange, handleSubmit} from './Auth'

const initInputs = {
    issue: "",
    complaint: ""
}

 function IssueList(props) {
     console.log(props)
    const {Issues, userData} = props
    return (
        <div>
            { Issues.map(issue => <IssueDisplay {...issue} key={issue._id }/> ) }
            {/* { Issues.map((issue,i) =>{ 
                var username; 
                if (userData[i]._id === issue._id) {
                    username = userData[i].username
                } 
                return <IssueDisplay  {...issue} key={issue._id } username={username}/> }) } */}
        </div>
    )
}

function Issue(props) {
    const [inputs, setInputs] = useState(initInputs)
    const {addIssue,Issues, deleteIssue, userData} = props
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
        deleteIssue(inputs, props.id)
    }
    const {issue, complaint} = inputs
    const {getIssues, user: {username}, getUserName} = useContext(UserContext)
    return (
            <div className="issue-color">
        <div className="main-issue">
            <button onClick={getIssues}>Refresh Post's</button>
            {/* <button onClick={getUserName}>Testing</button> */}
            <form  onSubmit={handleSubmit}>
                    What Issue would you like to discuss
                <label className="box">
                    <select name="issue" value={issue} onChange={handleChange}>
                        <option >Please Choose an Issue</option>
                        <option value="gunControl">Gun Control</option>
                        <option value="climateChange">Climate Change</option>
                        <option value="taxes">Taxes</option>
                        <option value="immagration">Immagration</option>
                        <option value="healthCare">Health Care</option>
                    </select>
                    <textarea onChange={handleChange} value={complaint} name="complaint" placeholder="What are your thoughts"/>
                </label>
                <button className="cr-button" onClick={addIssue}>Create</button>
            </form>
            <IssueList Issues={Issues} userData={userData}/>
        </div>
            </div>
    )
}

export default Issue 