import React from 'react'

export default function FunctionEvent() {
    const hanhdleClick=()=>{
        alert("click me");
    }
    const handleClickParam=(message)=>{
        alert(message);

    }
    return (
        <div>
            <h2>Function Event</h2>
            {/* /* xử lý sự kiện trong javascrip thuần? */}
            {/* <button onclick= "hanhdleClick()">click</button> */}
            {/* /* xử lý sự kiện trong reactjs  */}
            {/* <button onClick={hanhdleClick}>click reactjs</button> */}
            <button onClick={()=>{handleClickParam("Hello cybersoft");}}>click reactjs params</button>

        </div>
    )
}
