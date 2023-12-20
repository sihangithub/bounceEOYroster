
export default function DisplayRow(props){

    const currentObj = props.currentObj
    return (
        <table className="table">
            <tbody className="week-table">
                    { currentObj? 
                    <>
                    <tr>
                        
                        <td>{ currentObj.day }</td>
                        { currentObj.shift.map((item) => {
                            if (item){
                                return <td><div className="circle selected-circle">☀️</div></td> 
                            } else {
                                return <td><div className="circle">🌙</div></td>
                            }
                        })}
                    </tr>
                    { currentObj.remark? <tr>
                        <td colSpan={3}>{ currentObj.remark }</td>
                    </tr>: <></>}
                    </>:<tr><td>LOADING..</td></tr> }
               
               
            </tbody>
        </table>
    )
}