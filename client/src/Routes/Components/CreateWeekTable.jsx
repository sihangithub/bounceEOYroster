import { useState } from "react"

export default function CreateWeekTable(){

    const [showDate, setShowDate] = useState(false)
    const [shift, setShift] = useState([])

    const weekdays = ['Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday', 'Sunday']

    const circle = (text) => {
        const circle = <div className="circle" onClick={ e => onClick(e)}>{text}</div>
        return circle
    }

    const onClick = (e) => {
        e.target.className += ' selected-circle'
    }

    const listOfRows = []
    // Create a table with 7 rows and 2 columns
    for (var i = 0; i < 7; i++){
        const rowContent = [] 
        rowContent.push(<tr id={weekdays[i]}>
            <td>
                <button>
                    {weekdays[i]}
                </button></td>
            <td>{ circle() }☀️</td>
            <td>{ circle() }🌙</td>
            </tr>)
        rowContent.push(<tr>
            <td colSpan={'100%'}>
                <input type={'text'} placeholder={'Remark'} />
            </td>
            </tr>)
        listOfRows.push(rowContent)
    }
    return <tbody id={'shift-body'}>
        { listOfRows }
    </tbody>
}