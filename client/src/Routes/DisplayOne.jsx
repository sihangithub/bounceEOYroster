import { useLocation } from "react-router"
import DisplayRow from "./Components/DisplayRow"

export default function DisplayOne(props){
    const shiftData = props.shiftData
    const location = useLocation()
    return (
        <div>

            <div className="display-name">{ location.state? 
            <div>{ location.state}</div>: 
            <div>LOADING</div>}</div>

            { location.state && shiftData? 
            shiftData.map((item) => {
                if (item.name === location.state)
                    return <div>
                        <DisplayRow currentObj={item}/>
                    </div>
            }) : <div>Loading...</div>}
            
        </div>
    )
}