import { useState } from "react"
import axios from "axios"

export default function Register(props){

    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)


    return (
        <div className="page">
            <input placeholder="First Name" type={'text'} onChange={e => {setFirstName(e.target.value)}}/>
            <input placeholder="Last Name" type={'text'} onChange={e => {setLastName(e.target.value)}}/>
            <input placeholder="email" type={'text'} onChange={e => {setEmail(e.target.value)}}/>
            <button onClick={() => {
                axios.post('http://localhost:8080/register', 
                {firstName: firstName, lastName: lastName, email: email})
            }}>Submit</button>
        </div>
    )
}