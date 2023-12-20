import { useEffect, useState, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Home from './Routes/Home.jsx'
import Navbar from './Navbar.jsx'
import Weekly from './Routes/Weekly.jsx'
import Register from './Routes/Register.jsx'
import Login from './Routes/Login.jsx'
import Admin from './Routes/Admin.jsx'
import DisplayOne from './Routes/DisplayOne.jsx'
import Submitted from './Routes/Submitted.jsx'

function App() {
  const [data, setData] = useState(null)
  const [shiftData, setShiftData] = useState(null)
  const [date, setDate] = useState(null)

  useEffect(() => {
    load()
  }, [])

  const load = async () => {
    await axios.get('https://bounceeoyroster.onrender.com/api')
    .then(async data => {
      await setData(data.data.registries)
      await setShiftData(data.data.shifts)
      await setDate(data.data.date)
    })
    .catch(err => console.log(err))
    
    return
  }

  return (  
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home data={data} shiftData={shiftData}/>} />
          <Route path='/weekly' element={ <Weekly date={date}/>} />
          <Route path='/register' element={ <Register />} />
          <Route path='/login' element={ <Login />} />
          <Route path='/admin' element={<Admin data={data} shiftData={shiftData}/>} />
          <Route path='/display-one' element={<DisplayOne shiftData={shiftData} />} />
          <Route path='/submitted' element={<Submitted />} />
        </Routes>
      </Router>
  )
  
}

export default App
