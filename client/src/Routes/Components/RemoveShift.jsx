
export default function RemoveShift(props){
    const data = props.data
    const shiftData = props.shiftData
    return (
        <div className="border">
            { data? data.map((item) => {
                for (var i = 0; i < shiftData.length; i++){
                    console.log(item)
                    if (item.fName + ' ' + item.lName === shiftData[i].name){
                        console.log(item)
                        return <div 
                        className="profiles given shift-to-delete-width"
                        onClick={(e) => {e.target.className += ' deleting'}}>
                                <div className="profile-name">
                                    { shiftData[i].name }
                                </div>
                            </div>
                    }
                }
            }): 'ERR NO DATA'}
        </div>
    )
}