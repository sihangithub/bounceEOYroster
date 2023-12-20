import axios from 'axios'

export default function ChangeDate(){

    return (
        <div className="border">
            <input 
            id='dateString'
            type={'text'} 
            placeholder='Period' />
            <button
            onClick={() => {
                axios.post('http://localhost:8080/date',
                {dateString: document.getElementById('dateString').value})
            }}>Submit</button>
        </div>
    )
}