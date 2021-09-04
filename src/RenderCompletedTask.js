import React from 'react'
import { Button } from 'react-bootstrap'
import './RenderTask.css';

export default function RenderCompletedTask({arr, handleDelete2}) {
    return (
        <div>{
            arr.length !== 0 ? 
                arr.map((ele, index)=>{
                    return (
                        <div key={index} className="taskDiv" style={index%2 ? {backgroundColor: "rgb(230, 227, 227)"} : {backgroundColor: "white"}}>
                            <div>{index+1}. {ele}</div>
                            <div className="btnDiv" style={{justifyContent:"flex-end"}}>
                                <Button variant="outline-danger" onClick={()=>handleDelete2(index)}>Delete</Button>
                            </div>
                        </div>
                    )
                }) :
                <>
                    <br/>
                    <h4>&nbsp; Nothing in Completed....</h4> 
                </>
        }</div>
    )
}
