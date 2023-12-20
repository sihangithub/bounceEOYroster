
import { useLocation } from "react-router"
import Profiles from "./Components/Profiles"

export default function Home(props){
    const location = useLocation()
    const data = props.data
    const shiftData = props.shiftData

    return (
        <div className="page">
            <input placeholder="search"/>
            <Profiles data={data} shiftData={shiftData}/>
        </div>
    )
}