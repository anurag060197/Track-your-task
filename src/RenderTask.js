import { Button } from 'react-bootstrap'
import React from 'react'
import './RenderTask.css';

export default function RenderTask({arr, handleDone, handleDelete}) {
    return (
        <div>{
            arr.length !== 0 ? 
                arr.map((ele, index)=>{
                    return (
                        <div key={index} className="taskDiv" style={index%2 ? {backgroundColor: "rgb(230, 227, 227)"} : {backgroundColor: "white"}}>
                            <div>{index+1}. {ele}</div>
                            <div className="btnDiv">
                                <Button variant="outline-success" onClick={()=>handleDone(index)}>Done</Button>
                                <Button variant="outline-danger" onClick={()=>handleDelete(index)}>Delete</Button>
                            </div>
                        </div>
                    )
                }) :
                <>
                    <br/>
                    <h4>&nbsp; Nothing in To-Do....</h4> 
                </>
        }</div>
    )
}
