import CreateWeekTable from "./Components/CreateWeekTable";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import axios from 'axios'

export default function Weekly(props){
    const [shift, setShift] = useState()
    const navigate = useNavigate()
    const date = props.date
    const location = useLocation()

    return (
        <div className="page">
            { date? <div>{ date[0].dateString }</div>: <div>ERROR SHOWING DATE</div>}
            <div className="display-name">{ location.state? location.state : 'null' }</div>
            <table className="week-table">
                <CreateWeekTable setShift={setShift}/>
            </table>
            <button
            onClick={ async () => {
                const shifts = []
                const name = document.getElementsByClassName('display-name')[0].textContent
                const shiftBody = document.getElementById('shift-body')
                for (var i = 0; i < 7; i++){
                    // Each row includes dayOfWeek, shift 1 & shift 2
                    const indicateShiftRow = shiftBody.childNodes[i * 2]
                    // iterate through both shift td to access circle states
                    var circleSelected = false
                    const defaultShift = [0, 0]
                    for (var j = 1; j < 3; j++){
                        // indicates whether atleast one circle is selected
                        const circle  = indicateShiftRow.childNodes[j].childNodes[0]
                        // check if circle is selected or not
                        if (circle.className.includes('selected-circle')) {
                            circleSelected = true
                            defaultShift[j - 1] = 1
                        }
                    }
                    if (circleSelected === true){
                        // Load datas to shiftObj if shift was indicated
                        // Initialise an object containing name, shift, day, remarks
                        const dayOfWeek = indicateShiftRow.childNodes[0].textContent
                        const remark = shiftBody.childNodes[i * 2 + 1].childNodes[0].childNodes[0].value
                        const shiftObj = {name: name, day: dayOfWeek, shift: defaultShift, remark: remark}
                        shifts.push(shiftObj)
                    }
                }
                if (shifts.length > 0){
                    for (var i = 0; i < shifts.length; i++){
                        axios.post('https://bounceeoyroster.onrender.com/shift', shifts[i])
                    }
                    
                }
                navigate('/submitted')
            }}>Submit</button>
        </div>
        
    )
}