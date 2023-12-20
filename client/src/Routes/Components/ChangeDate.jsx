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
                axios.post('https://bounceeoyroster.onrender.com/date',
                {dateString: document.getElementById('dateString').value})
            }}>Submit</button>
        </div>
    )
}