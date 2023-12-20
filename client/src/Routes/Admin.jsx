import axios from "axios"
import ChangeDate from "./Components/ChangeDate"
import RemoveShift from "./Components/RemoveShift"

export default function Admin(props){
    const reset = () => {
        axios.delete('https://bounceeoyroster.onrender.com/reset')
        return
    }

    const deleteAllUsers = () => {
        axios.delete('https://bounceeoyroster.onrender.com/delete-users')
        return
    }

    const shiftData = props.shiftData
    const data = props.data

    return (
        <div>
            <div className="border">
                Clicking this button will delete all shifts
                <button onClick={() => { reset()}}>Reset</button>
            </div>
            <RemoveShift data={data} shiftData={shiftData}/>
            <ChangeDate />
            <div className="border">
                Deletes all user
                <button
                onClick={() => {}}>Delete</button>
            </div>
        </div>
    )
}