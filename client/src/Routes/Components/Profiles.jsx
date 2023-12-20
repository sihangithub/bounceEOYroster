import { Navigate, useNavigate } from "react-router"
import Weekly from "../Weekly"


export default function Profiles(props){
    const navigate = useNavigate()
    const data = props.data
    const shiftData = props.shiftData
    
    const returnStatus = (name) => {
        for (var i = 0; i < shiftData.length; i++){
            if (shiftData[i].name === name)
                return 'given'
        }
        return null
    }

    return(
        <div>
            {data? data.map((item, index) => {
                return (
                    <div 
                    
                    className={"profiles" + ' ' + returnStatus(item.fName + ' ' + item.lName)}
                    onClick={async (e) => {
                        if (returnStatus(item.fName + ' ' + item.lName) === 'given'){
                            navigate("/display-one", {state: item.fName + ' ' + item.lName})
                        } else
                            navigate("/weekly", {state: item.fName + ' ' + item.lName})
                    }}>
                        <div className="profile-name">{ item.fName } {item.lName}</div>
                    </div>
                )
            }): <div>Loading</div>}
        </div>
        
    )

}