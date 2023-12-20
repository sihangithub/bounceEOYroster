import { useState } from "react"
import { Navigate, useNavigate } from "react-router"


export default function Login(){
    const navigate = useNavigate()
    const [email, setEmail] = useState()

    return (
        <div className="page">
            <input 
            type={'email'} 
            placeholder={'email'} 
            onChange={e => setEmail(e.target.value)}/>
            <input 
            type={'password'} 
            placeholder={'password'} 
            onChange={e => setEmail(e.target.value)}/>
            <button onClick={() => {
                navigate('/admin')
            }}>login</button>
        </div>
    )
}